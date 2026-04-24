/**
 * server.js — Next.js Standalone Server Entry Point
 *
 * Used by Plesk (OVHCloud VPS) as the Node.js application start file.
 * Next.js standalone mode outputs its own server.js inside .next/standalone/.
 * This root-level file bootstraps that generated server so Plesk can simply
 * run `node server.js` from the project root.
 *
 * Prerequisites (handled by CI or manual deploy):
 *   1. `npm install && npm run build`
 *   2. Copy `public/` → `.next/standalone/public/`
 *   3. Copy `.next/static/` → `.next/standalone/.next/static/`
 */

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

// ── Configuration ──────────────────────────────────────────────────────
const PORT = process.env.PORT || 3000;
const HOSTNAME = process.env.HOSTNAME || '0.0.0.0';

// Paths
const standaloneDir = path.join(__dirname, '.next', 'standalone');
const standaloneServer = path.join(standaloneDir, 'server.js');
const standalonePublic = path.join(standaloneDir, 'public');
const standaloneStatic = path.join(standaloneDir, '.next', 'static');
const sourcePublic = path.join(__dirname, 'public');
const sourceStatic = path.join(__dirname, '.next', 'static');

// ── Helpers ────────────────────────────────────────────────────────────

/**
 * Copy a directory recursively (Node 16.7+ native).
 * Falls back to a shell command on older runtimes.
 */
function copyDir(src, dest) {
  if (!fs.existsSync(src)) {
    console.warn(`[server.js] Source not found, skipping copy: ${src}`);
    return;
  }
  fs.mkdirSync(dest, { recursive: true });
  try {
    // Node >=16.7
    fs.cpSync(src, dest, { recursive: true, force: true });
  } catch {
    // Fallback for older Node
    if (process.platform === 'win32') {
      execSync(`xcopy "${src}" "${dest}" /E /I /Y /Q`, { stdio: 'ignore' });
    } else {
      execSync(`cp -r "${src}/." "${dest}"`, { stdio: 'ignore' });
    }
  }
}

// ── Pre-flight checks ─────────────────────────────────────────────────

// 1. Make sure the standalone build exists
if (!fs.existsSync(standaloneServer)) {
  console.error(
    '[server.js] Standalone build not found at .next/standalone/server.js\n' +
    '            Run "npm run build" first (next.config.ts must have output: "standalone").'
  );
  process.exit(1);
}

// 2. Copy public assets into standalone if not already present
if (!fs.existsSync(standalonePublic) && fs.existsSync(sourcePublic)) {
  console.log('[server.js] Copying public/ → .next/standalone/public/');
  copyDir(sourcePublic, standalonePublic);
}

// 3. Copy static assets into standalone if not already present
if (!fs.existsSync(standaloneStatic) && fs.existsSync(sourceStatic)) {
  console.log('[server.js] Copying .next/static/ → .next/standalone/.next/static/');
  copyDir(sourceStatic, standaloneStatic);
}

// ── Start the Next.js standalone server ────────────────────────────────
console.log(`[server.js] Starting Next.js standalone server on ${HOSTNAME}:${PORT}`);

// Set env vars for the standalone server
process.env.PORT = String(PORT);
process.env.HOSTNAME = HOSTNAME;

// Change working directory to standalone so Next resolves paths correctly
process.chdir(standaloneDir);

// Load and execute the standalone server
require(standaloneServer);
