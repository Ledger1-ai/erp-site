import {
    MapPin, Globe, Building, Landmark, Building2, ArrowRight, Heart, Factory,
    ShoppingBag, Utensils, HardHat, Briefcase, Code, Hotel, GraduationCap,
    HeartHandshake, Scale, CheckCircle, XCircle, ShieldCheck, Zap, LayoutDashboard,
    Gavel, Tractor, Plane, Truck
} from "lucide-react";

export const conversations = []; // Placeholder

// Interfaces for richer data structures
export interface LocationData {
    slug: string;
    name: string;
    icon: any;
    description: string;
    features: string[];
    complianceStandard?: string;
    currencies?: string[];
    languages?: string[];
}

export interface IndustryData {
    slug: string;
    name: string;
    icon: any;
    description: string;
    features: string[];
    challenges?: string[];
    benefits?: string[];
}

export interface ComparisonData {
    slug: string;
    competitor: string;
    verdict: string;
    basaltAdvantage: string;
    icon: any;
    cons?: string[];
    pros?: string[]; // Areas where competitor is decent but Basalt beats
    featuresComparison?: { feature: string; basalt: boolean; competitor: boolean }[];
}


export const locations: LocationData[] = [
    // North America
    {
        slug: "united-states",
        name: "United States",
        icon: Landmark,
        description: "GAAP-compliant ERP for US-based enterprises and subsidiaries.",
        features: ["US GAAP Compliance", "Sales Tax Automation", "ACH & Wire Payments", "1099 Filing"],
        complianceStandard: "US GAAP / ASC 606",
        currencies: ["USD"],
        languages: ["English", "Spanish"]
    },
    {
        slug: "canada",
        name: "Canada",
        icon: MapPin,
        description: "Financial management optimized for Canadian provincial tax regulations.",
        features: ["GST/HST/PST Tracking", "CRA Compliance", "Bilingual Support (En/Fr)", "EFT Payments"],
        complianceStandard: "ASPE / IFRS",
        currencies: ["CAD", "USD"],
        languages: ["English", "French"]
    },
    {
        slug: "mexico",
        name: "Mexico",
        icon: Globe,
        description: "Compliance with SAT e-invoicing and accounting standards.",
        features: ["CFDI 4.0", "SAT Compliance", "Spanish Language Localized"],
        complianceStandard: "NIF (Normas de Información Financiera)",
        currencies: ["MXN", "USD"],
        languages: ["Spanish"]
    },

    // Europe
    {
        slug: "united-kingdom",
        name: "United Kingdom",
        icon: Building,
        description: "Making Tax Digital (MTD) ready solutions for UK businesses.",
        features: ["HMRC Compliance", "VAT Management", "BACS Integration", "CIS Deductions"],
        complianceStandard: "UK GAAP / FRS 102",
        currencies: ["GBP", "EUR"],
        languages: ["English"]
    },
    {
        slug: "european-union",
        name: "European Union",
        icon: Globe,
        description: "Unified ERP for EU member states with SEPA support.",
        features: ["GDPR Compliant", "Intrastat Reporting", "SEPA Payments", "Mini One Stop Shop (MOSS)"],
        complianceStandard: "IFRS / Local GAAP",
        currencies: ["EUR"],
        languages: ["English", "French", "German", "Spanish", "Italian"]
    },
    {
        slug: "germany",
        name: "Germany",
        icon: Building2,
        description: "GoBD compliant software for German manufacturing and services.",
        features: ["GoBD Compliance", "DATEV Export", "German Localization", "SKR03 / SKR04"],
        complianceStandard: "HGB (Handelsgesetzbuch)",
        currencies: ["EUR"],
        languages: ["German", "English"]
    },
    {
        slug: "france",
        name: "France",
        icon: MapPin,
        description: "FEC compliant accounting software for French entities.",
        features: ["FEC Export", "French GAAP", "VAT Management"],
        complianceStandard: "Plan Comptable Général (PCG)",
        currencies: ["EUR"],
        languages: ["French"]
    },
    {
        slug: "netherlands",
        name: "Netherlands",
        icon: Landmark,
        description: "Optimized for Dutch tax laws and international trade.",
        features: ["Dutch GAAP", "BTW Filing", "iDEAL Integration"],
        complianceStandard: "Dutch GAAP",
        currencies: ["EUR"],
        languages: ["Dutch", "English"]
    },
    {
        slug: "switzerland",
        name: "Switzerland",
        icon: Building,
        description: "Swiss-certified software for secure financial operations.",
        features: ["Swiss VAT", "QR-Bill", "Multi-lingual Support"],
        complianceStandard: "Swiss GAAP FER",
        currencies: ["CHF", "EUR"],
        languages: ["German", "French", "Italian"]
    },
    {
        slug: "ireland",
        name: "Ireland",
        icon: Globe,
        description: "Revenue-compliant solutions for Ireland's tech and pharma hubs.",
        features: ["Revenue Online Service", "VAT 3", "IE GAAP"],
        complianceStandard: "FRS 102",
        currencies: ["EUR"],
        languages: ["English"]
    },
    {
        slug: "spain",
        name: "Spain",
        icon: MapPin,
        description: "SII compliant ERP for Spanish businesses.",
        features: ["SII Integration", "TicketBAI", "AEAT Compliance"],
        complianceStandard: "Plan General de Contabilidad",
        currencies: ["EUR"],
        languages: ["Spanish"]
    },
    {
        slug: "italy",
        name: "Italy",
        icon: Building2,
        description: "FatturaPA ready for electronic invoicing mandates.",
        features: ["FatturaPA", "SdI Integration", "Digital Preservation"],
        complianceStandard: "OIC (Organismo Italiano di Contabilità)",
        currencies: ["EUR"],
        languages: ["Italian"]
    },
    {
        slug: "poland",
        name: "Poland",
        icon: Globe,
        description: "JPK compliant for Polish financial reporting.",
        features: ["JPK_V7M", "Split Payment Mechanism", "White List Checking"],
        complianceStandard: "Polish Accounting Act",
        currencies: ["PLN", "EUR"],
        languages: ["Polish", "English"]
    },
    {
        slug: "nordics",
        name: "Sweden, Norway, Denmark",
        icon: MapPin,
        description: "Localized for Scandinavian business practices and tax laws.",
        features: ["SIE Export", "Altinn Integration", "NemKonto"],
        complianceStandard: "Local GAAP / IFRS",
        currencies: ["SEK", "NOK", "DKK"],
        languages: ["Swedish", "Norwegian", "Danish", "English"]
    },

    // Asia Pacific
    {
        slug: "australia",
        name: "Australia",
        icon: MapPin,
        description: "Cloud ERP tailored for Australian tax and business standards.",
        features: ["ATO Compliance", "GST Management", "Superannuation", "STP Phase 2"],
        complianceStandard: "AASB",
        currencies: ["AUD"],
        languages: ["English"]
    },
    {
        slug: "new-zealand",
        name: "New Zealand",
        icon: Globe,
        description: "IRD compliant software for Kiwi businesses.",
        features: ["IRD Filing", "GST Returns", "Payday Filing"],
        complianceStandard: "NZ IFRS",
        currencies: ["NZD"],
        languages: ["English"]
    },
    {
        slug: "singapore",
        name: "Singapore",
        icon: Building2,
        description: "Hub for Asian operations with IRAS compliant accounting.",
        features: ["IRAS Compliant", "Peppol E-Invoicing", "Regional Consolidation"],
        complianceStandard: "SFRS",
        currencies: ["SGD", "USD"],
        languages: ["English", "Mandarin"]
    },
    {
        slug: "india",
        name: "India",
        icon: Landmark,
        description: "GST-ready ERP for Indian enterprises and manufacturing.",
        features: ["GST Filing", "TDS Management", "E-Invoicing", "E-Way Bill"],
        complianceStandard: "Ind AS",
        currencies: ["INR"],
        languages: ["English", "Hindi"]
    },
    {
        slug: "japan",
        name: "Japan",
        icon: Building,
        description: "Localized for Japanese business practices and tax laws.",
        features: ["J-GAAP", "Consumption Tax", "Zengin System"],
        complianceStandard: "J-GAAP",
        currencies: ["JPY"],
        languages: ["Japanese", "English"]
    },
    {
        slug: "hong-kong",
        name: "Hong Kong",
        icon: MapPin,
        description: "Streamlined financial management for HK entities.",
        features: ["Multi-currency", "MPF Support", "Profit Tax"],
        complianceStandard: "HKFRS",
        currencies: ["HKD", "USD", "CNY"],
        languages: ["English", "Cantonese"]
    },
    {
        slug: "china",
        name: "China",
        icon: Globe,
        description: "Localized for Mainland China compliance and Golden Tax integration.",
        features: ["Golden Tax System", "China GAAP", "Fapiao Management"],
        complianceStandard: "CAS (Chinese Accounting Standards)",
        currencies: ["CNY"],
        languages: ["Mandarin", "English"]
    },

    // Middle East & Africa
    {
        slug: "uae",
        name: "UAE",
        icon: Building,
        description: "Solutions for the growing Middle East market with VAT support.",
        features: ["VAT Compliance", "Arabic Support", "FTA Approved"],
        complianceStandard: "IFRS",
        currencies: ["AED"],
        languages: ["Arabic", "English"]
    },
    {
        slug: "saudi-arabia",
        name: "Saudi Arabia",
        icon: Globe,
        description: "ZATCA e-invoicing compliant for KSA businesses.",
        features: ["ZATCA Phase 2", "VAT Filing", "Arabic UI"],
        complianceStandard: "SOCPA",
        currencies: ["SAR"],
        languages: ["Arabic", "English"]
    },
    {
        slug: "south-africa",
        name: "South Africa",
        icon: Landmark,
        description: "SARS compliant ERP for South African enterprises.",
        features: ["SARS Filing", "VAT 201", "B-BBEE Reporting"],
        complianceStandard: "IFRS / SA GAAP",
        currencies: ["ZAR"],
        languages: ["English", "Afrikaans"]
    },

    // Latin America
    {
        slug: "brazil",
        name: "Brazil",
        icon: Building2,
        description: "Complete tax compliance for the complex Brazilian market.",
        features: ["NF-e / NFS-e", "SPED Reporting", "Pix Payments", "Boleto Bancário"],
        complianceStandard: "BR GAAP (CPC)",
        currencies: ["BRL"],
        languages: ["Portuguese"]
    },
    {
        slug: "latam",
        name: "Rest of LatAm",
        icon: Globe,
        description: "Coverage for Chile, Colombia, Peru, and Argentina.",
        features: ["SII (Chile)", "DIAN (Colombia)", "SUNAT (Peru)", "AFIP (Argentina)"],
        complianceStandard: "Local GAAP",
        currencies: ["CLP", "COP", "PEN", "ARS"],
        languages: ["Spanish"]
    },
];

export const industries: IndustryData[] = [
    // Service & Hospitality
    {
        slug: "restaurants",
        name: "Restaurants",
        icon: Utensils,
        description: "AI-powered menu engineering, food cost control, and demand forecasting for restaurants.",
        features: ["Menu optimization", "Food cost tracking", "Labor scheduling", "Waste tracking"],
        challenges: ["High food costs", "Labor turnover", "Thin margins"],
        benefits: ["Increase profitability by 5-10%", "Automate inventory ordering", "Predictive staff scheduling"]
    },
    {
        slug: "hospitality",
        name: "Hospitality & Hotels",
        icon: Hotel,
        description: "Cost control and revenue management for hotels, resorts, and vacation rentals.",
        features: ["RevPAR analytics", "Multi-property consolidation", "Booking engine integration"],
        challenges: ["Complex booking channels", "Seasonal demand", "Asset maintenance"],
        benefits: ["Real-time unified P&L", "Automated housekeeping scheduling", "Dynamic pricing"]
    },
    {
        slug: "professional-services",
        name: "Professional Services",
        icon: Briefcase,
        description: "Time tracking and project billing for consulting, legal, and creative firms.",
        features: ["Time tracking", "Project billing", "Resource planning", "Retainer management"],
        challenges: ["Revenue leakage", "Utilization tracking", "Project overruns"],
        benefits: ["Capture 100% of billable hours", "Forecast project margins", "Automate invoicing"]
    },
    {
        slug: "legal",
        name: "Legal",
        icon: Gavel,
        description: "Trust accounting and case management for law firms.",
        features: ["Trust Accounting (IOLTA)", "Case Management", "Conflict Checking"],
        challenges: ["Compliance risks", "Billable hour pressure", "Document management"],
        benefits: ["Automated compliance", "Mobile time entry", "Secure client portal"]
    },

    // Healthcare & Science
    {
        slug: "healthcare",
        name: "Healthcare",
        icon: Heart,
        description: "HIPAA-compliant financial management for hospitals, clinics, and medical practices.",
        features: ["Patient billing", "Insurance claims", "Compliance tracking", "Telehealth integration"],
        challenges: ["HIPAA compliance", "Insurance reimbursements", "Equipment costs"],
        benefits: ["Faster claim processing", "Integrated EMR/EHR data", "Supply chain automation"]
    },
    {
        slug: "biotech",
        name: "Biotechnology",
        icon: Factory,
        description: "R&D expense tracking and grant management for life sciences.",
        features: ["Grant tracking", "Clinical trial costs", "IP management", "Lab inventory"],
        challenges: ["High burn rates", "Regulatory reporting", "Complex funding sources"],
        benefits: ["Precise grant reporting", "Real-time burn rate analysis", "Audit-ready financials"]
    },

    // Manufacturing & Construction
    {
        slug: "manufacturing",
        name: "Manufacturing",
        icon: Factory,
        description: "Production management, inventory control, and job costing for manufacturers.",
        features: ["BOM management", "Job costing", "Inventory tracking", "Shop floor control"],
        challenges: ["Supply chain disruption", "Raw material costs", "Production downtime"],
        benefits: ["Optimize production schedules", "Reduce waste", "Real-time actual vs. standard costing"]
    },
    {
        slug: "construction",
        name: "Construction",
        icon: HardHat,
        description: "Project-based accounting and job costing for contractors and builders.",
        features: ["Job costing", "Change orders", "AIA billing", "Subcontractor management"],
        challenges: ["Project delays", "Material price variance", "Cash flow gaps"],
        benefits: ["Protect margins with real-time job costing", "Streamline AIA pay apps", "Mobile field reporting"]
    },
    {
        slug: "automotive",
        name: "Automotive",
        icon: Factory,
        description: "Supply chain and inventory management for parts and vehicle capability.",
        features: ["Parts inventory", "Service management", "Dealer integration", "VIN decoding"],
        challenges: ["Just-in-time inventory", "Warranty claims", "Dealer network management"],
        benefits: ["Optimize parts stock", "Automate warranty processing", "Centralized dealer data"]
    },
    {
        slug: "aerospace",
        name: "Aerospace & Defense",
        icon: Plane,
        description: "Strict compliance and trace-ability for high-stakes engineering.",
        features: ["AS9100 compliance", "Traceability/Serialization", "Contract reporting", "DCAA compliance"],
        challenges: ["Strict regulatory audits", "Long sales cycles", "Complex supply chains"],
        benefits: ["Audit-proof traceability", "Automated compliance reports", "Project lifecycle management"]
    },
    {
        slug: "agriculture",
        name: "Agriculture",
        icon: Tractor,
        description: "Farm management and crop costing for modern agribusiness.",
        features: ["Crop costing", "Livestock tracking", "Field mapping", "Harvest analysis"],
        challenges: ["Weather unpredictability", "Commodity price fluctuations", "Labor shortages"],
        benefits: ["Profit-per-acre analysis", "Fleet management", "Inventory for seeds/fertilizer"]
    },
    {
        slug: "logistics",
        name: "Logistics & Transport",
        icon: Truck,
        description: "Fleet management and route profitability for carriers.",
        features: ["Fleet maintenance", "Fuel tax/IFTA", "Route profitability", "Driver settlements"],
        challenges: ["Fuel costs", "Driver retention", "Vehicle maintenance"],
        benefits: ["Maximize load profitability", "Automate IFTA reporting", "Real-time dispatch integration"]
    },

    // Trade & Retail
    {
        slug: "retail",
        name: "Retail",
        icon: ShoppingBag,
        description: "Multi-channel inventory and POS integration for retail businesses.",
        features: ["POS integration", "Multi-location", "Inventory sync", "Loyalty programs"],
        challenges: ["Omnichannel complexity", "Stockouts", "Customer retention"],
        benefits: ["Unified view of inventory", "Personalized customer marketing", "Real-time sales analytics"]
    },
    {
        slug: "ecommerce",
        name: "E-Commerce",
        icon: ShoppingBag,
        description: "Unified ledger for high-volume online sellers across platforms.",
        features: ["Shopify/Amazon sync", "Returns management", "Profit per SKU", "Landed cost calculation"],
        challenges: ["Platform fees", "Shipping costs", "High transaction volume"],
        benefits: ["Automated reconciliation", "True profit analysis", "Multi-currency handling"]
    },
    {
        slug: "wholesale",
        name: "Wholesale Distribution",
        icon: Building2,
        description: "B2B order management and warehouse logistics optimization.",
        features: ["B2B portal", "Warehouse WMS", "Route planning", "EDI integration"],
        challenges: ["Thin margins", "Order accuracy", "Inventory carrying costs"],
        benefits: ["Automate order processing", "Optimize pick/pack/ship", "Improve cash flow"]
    },

    // Specialized Verticals
    {
        slug: "cannabis",
        name: "Cannabis",
        icon: Factory,
        description: "Seed-to-sale tracking and 280E tax compliance management.",
        features: ["Seed-to-sale", "280E compliance", "Metrc integration", "Excise tax calculation"],
        challenges: ["Banking restrictions", "Complex taxation (280E)", "Regulatory changes"],
        benefits: ["Audit-ready compliance", "Tax planning tools", "Integrated POS/accounting"]
    },
    {
        slug: "real-estate",
        name: "Real Estate",
        icon: Building2,
        description: "Property management and lease tracking for real estate professionals.",
        features: ["Lease management", "Tenant portal", "CAM reconciliation", "Maintenance requests"],
        challenges: ["Vacancy rates", "Property maintenance", "Rent collection"],
        benefits: ["Automate rent roll", "Streamline maintenance", "Portfolio performance view"]
    },
    {
        slug: "technology",
        name: "Technology & SaaS",
        icon: Code,
        description: "Scalable financial management for tech companies and startups.",
        features: ["Subscription billing", "Arr/Mrr metrics", "Investor reporting", "Revenue recognition (ASC 606)"],
        challenges: ["Churn management", "Revenue recognition", "Scaling operations"],
        benefits: ["Automated billing", "Real-time SaaS metrics", "Board-ready decks"]
    },
    {
        slug: "energy",
        name: "Energy & Utilities",
        icon: Factory,
        description: "Asset management and project tracking for energy providers.",
        features: ["Asset maintenance", "Project accounting", "Field service", "Meter reading"],
        challenges: ["Infrastructure aging", "Regulatory pressure", "Field workforce management"],
        benefits: ["Predictive maintenance", "Accurate field billing", "Capital project tracking"]
    },

    // Public & Non-Profit
    {
        slug: "education",
        name: "Education",
        icon: GraduationCap,
        description: "Fund accounting and grant management for educational institutions.",
        features: ["Fund accounting", "Grant tracking", "Tuition billing", "Endowment management"],
        challenges: ["Budget cuts", "Grant compliance", "Tuition collection"],
        benefits: ["Transparent fund tracking", "Student portal integration", "Automated reporting"]
    },
    {
        slug: "nonprofit",
        name: "Non-Profit",
        icon: HeartHandshake,
        description: "Fund accounting and donor management for charitable organizations.",
        features: ["Donor tracking", "Grant management", "990 compliance", "Volunteer tracking"],
        challenges: ["Donor retention", "Restricted fund management", "Operational efficiency"],
        benefits: ["Stewardship reports", "Automated acknowledgement letters", "Exempt status protection"]
    },
    {
        slug: "government",
        name: "Government",
        icon: Landmark,
        description: "GASB compliant fund accounting for local and state agencies.",
        features: ["GASB compliance", "Budget control", "Encumbrance accounting", "Open data portals"],
        challenges: ["Public scrutiny", "Budget constraints", "Legacy systems"],
        benefits: ["Transparency", "Fiscal responsibility", "Citizen engagement"]
    },
];

export const comparisons: ComparisonData[] = [
    // Enterprise Tier
    {
        slug: "sap",
        competitor: "SAP S/4HANA",
        verdict: "Basalt is faster to deploy and more user-friendly for mid-market.",
        basaltAdvantage: "90% faster implementation time",
        icon: LayoutDashboard,
        cons: ["Extremely expensive", "Years to implement", "Requires specialized consultants"],
        pros: ["Deep enterprise functionality", "Global standard for Fortune 500"],
        featuresComparison: [
            { feature: "AI Module Builder", basalt: true, competitor: false },
            { feature: "Implementation Time", basalt: true, competitor: false }, // "Weeks vs Years"
            { feature: "Global Compliance", basalt: true, competitor: true }
        ]
    },
    {
        slug: "oracle-netsuite",
        competitor: "Oracle NetSuite",
        verdict: "Basalt offers superior AI capabilities and transparent pricing.",
        basaltAdvantage: "Native AI agents vs. bolted-on ML",
        icon: Zap,
        cons: ["Aggressive annual price hikes", "Charge per user/module", "Old codebase"],
        pros: ["Mature ecosystem", "Strong financial reporting"],
        featuresComparison: [
            { feature: "Transparent Pricing", basalt: true, competitor: false },
            { feature: "Native AI Agents", basalt: true, competitor: false },
            { feature: "Unified Database", basalt: true, competitor: true }
        ]
    },
    {
        slug: "microsoft-dynamics",
        competitor: "Microsoft Dynamics 365",
        verdict: "Basalt provides a more unified experience without complex licensing.",
        basaltAdvantage: "All-in-one platform vs. modular complexity",
        icon: Scale,
        cons: ["Complex licensing model", "Disjointed apps (Business Central vs F&O)", "Requires partner for everything"],
        pros: ["Office 365 integration", "Highly customizable"],
        featuresComparison: [
            { feature: "Unified Experience", basalt: true, competitor: false },
            { feature: "Simplified Licensing", basalt: true, competitor: false },
            { feature: "Office Integration", basalt: true, competitor: true }
        ]
    },
    {
        slug: "workday",
        competitor: "Workday",
        verdict: "Basalt offers comparable HCM & Financials at a fraction of the TCO.",
        basaltAdvantage: "More flexible custom modules",
        icon: LayoutDashboard,
        cons: ["Rigid data model", "Very high TCO", "Focused mostly on HCM/Financials only"],
        pros: ["Great UI for enterprise", "Strong HCM"],
        featuresComparison: [
            { feature: "Custom Module Flexibility", basalt: true, competitor: false },
            { feature: "Supply Chain Depth", basalt: true, competitor: false },
            { feature: "HCM Capabilities", basalt: true, competitor: true }
        ]
    },

    // Mid-Market & Cloud
    {
        slug: "sage-intacct",
        competitor: "Sage Intacct",
        verdict: "Basalt delivers deeper operational features alongside strong financials.",
        basaltAdvantage: "Integrated operational ERP + Financials",
        icon: LayoutDashboard,
        cons: ["Financials only (need partners for operations)", "Glacial innovation pace", "Per-entity pricing"],
        pros: ["Strong core accounting", "AICPA endorsed"],
        featuresComparison: [
            { feature: "Integrated Inventory/Ops", basalt: true, competitor: false },
            { feature: "AI capabilities", basalt: true, competitor: false },
            { feature: "Multi-entity", basalt: true, competitor: true }
        ]
    },
    {
        slug: "acumatica",
        competitor: "Acumatica",
        verdict: "Basalt provides a more modern UI and AI-driven workflow building.",
        basaltAdvantage: "Conversational AI Interface",
        icon: Zap,
        cons: ["Reseller-only model", "Consumption-based pricing gets expensive", "report writer is dated"],
        pros: ["Unlimited users pricing", "Strong manufacturing"],
        featuresComparison: [
            { feature: "Modern UI/UX", basalt: true, competitor: false },
            { feature: "Direct Support", basalt: true, competitor: false },
            { feature: "Manufacturing Depth", basalt: true, competitor: true }
        ]
    },
    {
        slug: "odoo",
        competitor: "Odoo",
        verdict: "Basalt gives you the module flexibility of Odoo without the technical debt.",
        basaltAdvantage: "AI-generated modules on the fly",
        icon: Scale,
        cons: ["'Open Core' bait and switch", "Upgrade hell between versions", "Inconsistent module quality"],
        pros: ["Cheap entry price", "Huge app store"],
        featuresComparison: [
            { feature: "Seemless Upgrades", basalt: true, competitor: false },
            { feature: "Enterprise Grade Security", basalt: true, competitor: false },
            { feature: "Module Flexibility", basalt: true, competitor: true }
        ]
    },
    {
        slug: "zoho-one",
        competitor: "Zoho One",
        verdict: "Basalt is a truly unified database, not just a suite of connected apps.",
        basaltAdvantage: "Single unified data model",
        icon: ShieldCheck,
        cons: ["Spaghetti integration between apps", "Weak support", "Jack of all trades, master of none"],
        pros: ["Very cheap", "Huge breadth of apps"],
        featuresComparison: [
            { feature: "Unified Data Model", basalt: true, competitor: false },
            { feature: "Deep Industry Verticals", basalt: true, competitor: false },
            { feature: "Breadth of Apps", basalt: false, competitor: true }
        ]
    },

    // SMB & Entry Level
    {
        slug: "quickbooks-enterprise",
        competitor: "QuickBooks Enterprise",
        verdict: "Basalt scales far beyond QB's limits for inventory and multi-entity.",
        basaltAdvantage: "True multi-entity consolidation",
        icon: ShieldCheck,
        cons: ["Database crashes at scale", "Weak inventory", "No real audit trail"],
        pros: ["Ubiquitous", "Easy to find bookkeepers"],
        featuresComparison: [
            { feature: "Scalable Database", basalt: true, competitor: false },
            { feature: "Multi-entity", basalt: true, competitor: false },
            { feature: "Ease of Use", basalt: true, competitor: true }
        ]
    },
    {
        slug: "xero",
        competitor: "Xero",
        verdict: "Basalt is the logical next step for growing businesses outgrowing Xero.",
        basaltAdvantage: "Enterprise controls & audit trails",
        icon: Zap,
        cons: ["Transaction limits", "Weak reporting", "SMB focus only"],
        pros: ["Beautiful UI", "Great ecosystem"],
        featuresComparison: [
            { feature: "Enterprise Controls", basalt: true, competitor: false },
            { feature: "Inventory Management", basalt: true, competitor: false },
            { feature: "Beautiful UI", basalt: true, competitor: true }
        ]
    },
    {
        slug: "freshbooks",
        competitor: "FreshBooks",
        verdict: "Basalt adds the inventory and operational layers FreshBooks lacks.",
        basaltAdvantage: "Full inventory & supply chain",
        icon: LayoutDashboard,
        cons: ["Invoicing focus, not ERP", "No inventory", "Very basic"],
        pros: ["Great for freelancers", "Simple"],
        featuresComparison: [
            { feature: "Full ERP", basalt: true, competitor: false },
            { feature: "Inventory", basalt: true, competitor: false },
            { feature: "Invoicing", basalt: true, competitor: true }
        ]
    },
    {
        slug: "wave",
        competitor: "Wave",
        verdict: "Basalt is for serious scaling; Wave is for freelancers.",
        basaltAdvantage: "Double-entry complexity handling",
        icon: Scale,
        cons: ["Basic features", "Ads in dashboard", "Single user focus"],
        pros: ["Free", "Simple"],
        featuresComparison: [
            { feature: "Scalability", basalt: true, competitor: false },
            { feature: "Complex Accounting", basalt: true, competitor: false },
            { feature: "Cost", basalt: false, competitor: true } // Wave wins on cost (free)
        ]
    },
];
