import { ServiceData } from './servicesData';

export const ADDITIONAL_SERVICES_DATA: Record<string, ServiceData> = {
  /* =========================================================================
     FINTECH SERVICES (6 SERVICES)
     ========================================================================= */
  'digital-banking': {
    id: 'digital-banking',
    slug: 'digital-banking',
    title: 'Digital Banking',
    tagline: 'Next-Generation Core & Digital Banking Architectures',
    category: 'Core Engineering',
    heroBadge: 'Fintech & Core Banking',
    heroHeadline: 'Resilient & Compliant',
    heroHeadlineHighlight: 'Digital Banking Platforms',
    heroDescription:
      'We engineer high-availability, cloud-native digital banking infrastructure, neo-banking mobile suites, and real-time core ledger engines. Designed for regulatory compliance (PCI-DSS Level 1, Open Banking APIs), microsecond transaction reconciliation, and seamless multi-currency support.',
    metrics: [
      { value: '99.999%', label: 'Ledger Availability' },
      { value: '< 15ms', label: 'Transaction Latency' },
      { value: '$12B+', label: 'Annual Volume Processed' },
      { value: '100%', label: 'PCI-DSS & SOC 2 Ready' },
    ],
    capabilities: [
      {
        title: 'Cloud-Native Core Ledger & Account Management',
        description:
          'Immutable double-entry balance ledgers built with event sourcing (CQRS), distributed transactional locks, and multi-region read replicas for zero ledger drift.',
        tags: ['Double-Entry Bookkeeping', 'CQRS & Event Sourcing', 'PostgreSQL / CockroachDB', 'Real-time Ledgers'],
      },
      {
        title: 'Open Banking & PSD2 Compliance Gateways',
        description:
          'Standardized RESTful and gRPC API gateways supporting UK Open Banking, Berlin Group NextGenPSD2, and FDX protocols with strong customer authentication (SCA).',
        tags: ['Open Banking APIs', 'PSD2 / FDX', 'OAuth 2.0 / FAPI', 'SCA Enforcers'],
      },
      {
        title: 'Omnichannel Retail & Business Banking Portals',
        description:
          'Native iOS/Android and reactive web portals featuring real-time transaction feeds, scheduled wire transfers, biometric approvals, and corporate treasury suites.',
        tags: ['React & React Native', 'Biometric Auth', 'Sub-Account Hierarchy', 'Virtual Cards'],
      },
      {
        title: 'ACH, SEPA & Real-Time Rail Integrations (FedNow, RTP)',
        description:
          'Direct clearinghouse integrations with ISO 20022 messaging pipelines for instant settlements across FedNow, RTP, SEPA Instant, and SWIFT gpi networks.',
        tags: ['ISO 20022', 'FedNow & RTP', 'SEPA Instant', 'SWIFT Connectivity'],
      },
      {
        title: 'Automated KYC / KYB & Regulatory Onboarding',
        description:
          'Sub-60-second automated customer onboarding with document OCR, biometric liveness validation, sanctions screening, and AML transaction monitoring.',
        tags: ['ID Document OCR', 'Liveness Checks', 'Sanctions Screening', 'AML Real-Time Alerts'],
      },
      {
        title: 'Microservices Modernization for Legacy Core Banking',
        description:
          'Decoupling legacy mainframe cores (Fiserv, FIS, Jack Henry) through event-driven strangler facades without risking transactional consistency or branch outages.',
        tags: ['Strangler Facades', 'Kafka CDC Queues', 'Zero-Downtime Cutover', 'Mainframe Emulation'],
      },
    ],
    processSteps: [
      {
        step: '01',
        title: 'Architecture & Regulatory Discovery',
        description: 'Mapping ledger requirements, jurisdiction compliance rules (FDIC, OCC, BaFin), clearing rails, and non-functional latency parameters.',
        deliverables: ['Core Banking Architecture Blueprint', 'Regulatory Compliance Matrix', 'Data Boundary Specification'],
      },
      {
        step: '02',
        title: 'Ledger Engine & API Sandbox Prototyping',
        description: 'Implementing double-entry accounting state machines, automated reconciliation scripts, and isolated developer sandbox environments.',
        deliverables: ['Working Core Ledger Sandbox', 'Open Banking OpenAPI Specs', 'Test Fixture Generators'],
      },
      {
        step: '03',
        title: 'Rail Integration & Security Penetration Drills',
        description: 'Connecting bank clearing networks, executing simulated split-brain failover tests, and undergoing third-party PCI-DSS compliance audits.',
        deliverables: ['ISO 20022 Rail Connectors', 'Split-Brain Recovery Runbooks', 'Penetration Test Clearance'],
      },
      {
        step: '04',
        title: 'Production Cutover & 24/7 SLA Hypercare',
        description: 'Zero-downtime deployment with real-time Datadog telemetry, fraud alert monitors, and round-the-clock treasury reconciliation support.',
        deliverables: ['Production Cluster Deployment', 'Disaster Recovery Playbook', '24/7 SLA Governance Agreement'],
      },
    ],
    deliverables: [
      { title: 'Core Banking Engine & API Source Code', category: 'Codebase', description: 'Complete Go / Java / TypeScript microservices with 100% intellectual property ownership.', format: 'Enterprise Git Repository' },
      { title: 'PCI-DSS & SOC 2 Security Blueprint', category: 'Compliance', description: 'Network segmentation topologies, encryption at rest/in transit keys, and HSM configurations.', format: 'PDF & Terraform HCL' },
      { title: 'ISO 20022 Payment Rail Adapters', category: 'Integrations', description: 'Production-tested parsers and message validators for FedNow, RTP, and SWIFT payloads.', format: 'Modular Microservices' },
      { title: 'Treasury & Ledger Reconciliation Dashboard', category: 'Operations', description: 'Administrative portal for real-time balance auditing, ledger lock inspection, and compliance reports.', format: 'Web Application & API' },
    ],
    techStack: [
      { category: 'Backend & Ledgers', items: ['Go', 'Java (Spring Boot)', 'PostgreSQL', 'CockroachDB', 'Kafka', 'Redis'] },
      { category: 'Clearing & Protocols', items: ['ISO 20022', 'FedNow', 'The Clearing House RTP', 'SWIFT MT/MX', 'Plaid API'] },
      { category: 'Security & Auth', items: ['AWS KMS / HSM', 'OAuth2 / OIDC (FAPI)', 'HashiCorp Vault', 'mTLS'] },
      { category: 'Client Platforms', items: ['React', 'Next.js', 'React Native', 'Swift (iOS)', 'Kotlin (Android)'] },
    ],
    caseStudyQuote: {
      quote: 'Neominds engineered our digital banking core from scratch in 9 months. We passed our banking partner compliance audit on the first pass and scaled to 450,000 active deposit accounts with sub-15ms ledger response times.',
      author: 'Marcus Vance',
      role: 'Chief Technology Officer',
      company: 'Aura Financial Technologies',
      metric: '450k Active Accounts at Launch',
    },
    faqs: [
      { question: 'Can this platform integrate with our existing sponsor bank or BaaS provider?', answer: 'Yes. We have built integrations with leading BaaS providers (Cross River, Evolve, Column) and core systems (Fiserv, FIS), adapting to their proprietary webhooks and settlement files.' },
      { question: 'How do you prevent ledger discrepancies during unexpected network partitions?', answer: 'We employ deterministic two-phase commit protocols and event-sourced immutable ledgers. Every account debit has a strictly verified corresponding credit recorded within a single atomic transaction block.' },
      { question: 'Is the platform certified for PCI-DSS Level 1 compliance?', answer: 'All architectures are designed to meet PCI-DSS Level 1 specifications, utilizing card tokenization proxies so that sensitive primary account numbers (PAN) never touch your application database.' },
      { question: 'What mobile app frameworks do you support for user-facing digital banking?', answer: 'We deliver either high-performance native apps (Swift/SwiftUI for iOS, Kotlin/Jetpack Compose for Android) or unified cross-platform solutions in React Native with hardware-backed biometric security.' },
    ],
  },

  'payment-solutions': {
    id: 'payment-solutions',
    slug: 'payment-solutions',
    title: 'Payment Solutions',
    tagline: 'Global Payment Gateways, Orchestration & Multi-Rail Processing',
    category: 'Core Engineering',
    heroBadge: 'Fintech Payments Infrastructure',
    heroHeadline: 'High-Throughput Global',
    heroHeadlineHighlight: 'Payment Processing Engines',
    heroDescription:
      'Scale your payment operations worldwide. We architect intelligent payment orchestration platforms, white-label gateway engines, tokenized card vaults, and smart routing algorithms that maximize transaction authorization rates while cutting processing fees.',
    metrics: [
      { value: '99.999%', label: 'Gateway SLA Uptime' },
      { value: '+4.8%', label: 'Authorization Rate Lift' },
      { value: '450ms', label: 'Global Settlement Time' },
      { value: '135+', label: 'Currencies Supported' },
    ],
    capabilities: [
      {
        title: 'Intelligent Payment Orchestration & Smart Routing',
        description:
          'Dynamic multi-acquirer cascading routing algorithms that automatically reroute failed card payments to alternate acquiring banks in milliseconds to eliminate false declines.',
        tags: ['Dynamic Cascading', 'Smart Routing', 'Multi-Acquirer', 'Zero Downtime'],
      },
      {
        title: 'PCI-Compliant Tokenization Vaults',
        description:
          'Secure payment tokenization microservices using hardware security modules (HSM) and network tokens (Visa VTS / Mastercard MDES) for frictionless recurring billing.',
        tags: ['Network Tokenization', 'VTS & MDES', 'Hardware Security Modules', 'Card Vaults'],
      },
      {
        title: 'Global Alternative Payment Methods (APMs)',
        description:
          'Unified checkout integrations for Apple Pay, Google Pay, Klarna, Pix (Brazil), iDEAL (Netherlands), UPI (India), and regional mobile wallets.',
        tags: ['Apple / Google Pay', 'Klarna & BNPL', 'Pix & UPI', 'Regional APMs'],
      },
      {
        title: 'Automated Multi-Tier Split Payments & Marketplaces',
        description:
          'Complex escrow payouts, commission deductions, seller balance ledgers, and automated 1099-K tax reporting for two-sided marketplaces and SaaS platforms.',
        tags: ['Marketplace Payouts', 'Escrow Engines', 'Commission Splits', 'Tax Reporting'],
      },
      {
        title: 'Real-Time Chargeback & Dispute Automation',
        description:
          'Automated dispute evidence aggregation, chargeback deflection via Verifi and Ethoca networks, and machine learning chargeback probability scoring.',
        tags: ['Ethoca & Verifi Alerts', 'Automated Evidence', 'Dispute Mitigation', 'Risk Scoring'],
      },
      {
        title: 'Recurring Billing & Subscription Life-Cycle Engines',
        description:
          'Dunning management, account updater synchronization, prorated billing calculators, and custom tier entitlement synchronization with sub-second API webhooks.',
        tags: ['Smart Dunning', 'Account Updater', 'Proration Engines', 'Usage-Based Billing'],
      },
    ],
    processSteps: [
      {
        step: '01',
        title: 'Acquirer & Gateway Auditing',
        description: 'Analyzing existing payment waterfall, interchange-plus fee structures, decline codes, and cross-border currency conversion margins.',
        deliverables: ['Payment Optimization Roadmap', 'Cost-Per-Transaction Benchmark', 'Architecture Topology'],
      },
      {
        step: '02',
        title: 'Orchestrator Engine Implementation',
        description: 'Engineering the smart routing middleware, acquirer SDK adapters, and PCI-isolated network tokenization vault.',
        deliverables: ['Smart Routing Gateway', 'PCI Tokenizer Service', 'Acquirer Adapter Suite'],
      },
      {
        step: '03',
        title: 'End-to-End Sandbox Simulation & Load Testing',
        description: 'Simulating 15,000 transactions per second under peak conditions, testing edge cases, and verifying automated dunning retries.',
        deliverables: ['Stress Test Benchmark Reports', 'Dunning Recovery Audit', 'Fallback Validation Matrix'],
      },
      {
        step: '04',
        title: 'Phased Production Cutover & Optimization',
        description: 'A/B testing acquirer routing, monitoring live authorization curves, and activating automated chargeback deflection networks.',
        deliverables: ['Production Release Pipeline', 'Live Gateway Telemetry Dashboard', 'Operational Playbook'],
      },
    ],
    deliverables: [
      { title: 'Payment Gateway & Orchestration Codebase', category: 'Codebase', description: 'Production-ready Go / TypeScript microservices with zero external platform lock-in.', format: 'Git Repository' },
      { title: 'PCI Tokenization Vault Infrastructure', category: 'Infrastructure', description: 'Terraform modules provisioning hardened, isolated token vaults in private AWS/GCP VPCs.', format: 'Terraform HCL Scripts' },
      { title: 'Unified Checkout SDK (Web & Mobile)', category: 'Client SDK', description: 'Customizable, PCI-compliant drop-in checkout component for React, iOS, and Android.', format: 'NPM & CocoaPods Package' },
      { title: 'Real-Time Payment Operations Dashboard', category: 'Operations', description: 'Interactive monitoring console for authorization rates, interchange margins, and dispute status.', format: 'Full Web Application' },
    ],
    techStack: [
      { category: 'Processing Engine', items: ['Go', 'Node.js (TypeScript)', 'Kafka', 'Redis Sentinel', 'PostgreSQL'] },
      { category: 'Acquirer Protocols', items: ['ISO 8583', 'Stripe API', 'Adyen MarketPay', 'Chase Paymentech', 'Worldpay'] },
      { category: 'Security & Compliance', items: ['PCI-DSS Level 1 Spec', 'Network Tokenization', 'AWS KMS', 'HashiCorp Vault'] },
      { category: 'Observability', items: ['Prometheus', 'Grafana', 'Datadog APM', 'OpenTelemetry'] },
    ],
    caseStudyQuote: {
      quote: 'By deploying Neominds payment orchestration engine, our global authorization rates increased by 5.2%, and we reduced card processing fees by $1.4M annually across our international SaaS operations.',
      author: 'Julian Thorne',
      role: 'Head of FinOps',
      company: 'OmniChannel Retail Group',
      metric: '$1.4M Saved in Processing Fees',
    },
    faqs: [
      { question: 'How does smart payment routing increase our card authorization rate?', answer: 'When a bank declines a transaction due to temporary network issues or risk thresholds, our engine analyzes the decline code and instantly reroutes the card to a secondary acquirer with optimized parameters in under 200ms.' },
      { question: 'Does our application still need to undergo extensive PCI-DSS audits?', answer: 'No. By using our isolated PCI tokenization vault or hosted iframe fields, your main application servers remain strictly outside PCI scope (SAQ A or SAQ A-EP).' },
      { question: 'Can we connect custom acquirers or local payment methods in emerging markets?', answer: 'Yes. Our orchestration engine is modular; adding a new acquirer or local payment method (such as Pix, OXXO, or UPI) requires only implementing a standard connector interface.' },
      { question: 'How do you handle multi-currency conversions and FX markups?', answer: 'We integrate real-time institutional FX feeds, allowing you to price goods dynamically in 135+ local currencies while settling in your home currency with full transparency into spread margins.' },
    ],
  },

  'lending-credit-platforms': {
    id: 'lending-credit-platforms',
    slug: 'lending-credit-platforms',
    title: 'Lending & Credit Platforms',
    tagline: 'End-to-End Loan Origination, Underwriting & Servicing Systems',
    category: 'Core Engineering',
    heroBadge: 'Fintech Credit Infrastructure',
    heroHeadline: 'Automated Loan Origination &',
    heroHeadlineHighlight: 'Intelligent Credit Engines',
    heroDescription:
      'Transform complex lending workflows into instant digital experiences. We design digital loan origination systems (LOS), automated algorithmic credit underwriting models, loan servicing platforms (LMS), and secondary market syndication tools.',
    metrics: [
      { value: '< 90 sec', label: 'Decisioning Turnaround' },
      { value: '3.4x', label: 'Origination Volume Growth' },
      { value: '42%', label: 'Reduction in Underwriting Cost' },
      { value: '100%', label: 'Fair Lending & FCRA Compliant' },
    ],
    capabilities: [
      {
        title: 'Digital Loan Origination Systems (LOS)',
        description:
          'Frictionless multi-step borrower applications for mortgages, SMB credit lines, auto financing, and consumer installment loans with instant income verification.',
        tags: ['Digital LOS', 'Plaid / Finicity Verification', 'Document Upload', 'Automated Disclosures'],
      },
      {
        title: 'Algorithmic Credit Scoring & Alternative Data Engines',
        description:
          'Decisioning state machines blending traditional credit bureau APIs (Experian, TransUnion, Equifax) with cash-flow analytics, bank statement parsing, and behavioral data.',
        tags: ['Credit Bureau APIs', 'Cash-Flow Underwriting', 'Custom Risk Scoring', 'Machine Learning Models'],
      },
      {
        title: 'Loan Servicing, Amortization & Repayment Engines',
        description:
          'Comprehensive Loan Management Systems (LMS) calculating complex compound interest, daily accruals, balloon payments, prepayments, and automated NACHA collections.',
        tags: ['LMS Engine', 'Amortization Schedules', 'ACH NACHA Auto-Debit', 'Dunning Schedules'],
      },
      {
        title: 'Automated Compliance & Regulatory Disclosures',
        description:
          'Built-in compliance checks for Truth in Lending (TILA / Reg Z), Equal Credit Opportunity Act (ECOA), FCRA adverse action notices, and automated disclosure generation.',
        tags: ['TILA / Reg Z', 'ECOA Fair Lending', 'Adverse Action Notices', 'Audit Trails'],
      },
      {
        title: 'Collateral Management & Securitization Portals',
        description:
          'Warehouse facility tracking, asset-backed security (ABS) reporting, collateral lien management, and investor reporting portals for secondary market buyers.',
        tags: ['Warehouse Facilities', 'Collateral Liens', 'Investor Reporting', 'Securitization Data'],
      },
      {
        title: 'Collections & Delinquency Recovery Workflows',
        description:
          'Automated hardship repayment plans, automated debtor notifications across SMS/Email, legal collections handover hooks, and recovery tracking.',
        tags: ['Hardship Restructuring', 'Automated Collections', 'Debtor Portals', 'Recovery Analytics'],
      },
    ],
    processSteps: [
      {
        step: '01',
        title: 'Credit Policy & Workflow Mapping',
        description: 'Translating institutional credit policy guidelines into programmatic decisioning trees, risk tiers, and regulatory disclosure requirements.',
        deliverables: ['Decision Tree Architecture', 'Credit Policy Translation Spec', 'Bureau Integration Plan'],
      },
      {
        step: '02',
        title: 'Origination & Underwriting Engine Sprint',
        description: 'Building applicant portals, bureau connectors, bank statement OCR parsers, and the automated rule decisioning runtime.',
        deliverables: ['Working Origination Portal', 'Decisioning Engine Microservice', 'Bureau Sandbox Connectors'],
      },
      {
        step: '03',
        title: 'Servicing, Payments & Audit Hardening',
        description: 'Implementing loan amortization engines, NACHA debit generators, adverse action notice mailers, and legal disclosure automation.',
        deliverables: ['LMS Servicing Engine', 'Automated Disclosure Pipeline', 'NACHA Clearing Files'],
      },
      {
        step: '04',
        title: 'Production Deployment & Credit Benchmarking',
        description: 'Deploying to private cloud infrastructure with automated backtesting against historic portfolio performance to verify zero decision drift.',
        deliverables: ['Production Cluster Launch', 'Historic Backtest Verification Report', 'SLA Support Governance'],
      },
    ],
    deliverables: [
      { title: 'Complete LOS & LMS Application Source Code', category: 'Codebase', description: 'Enterprise-grade microservices for origination, underwriting, and loan servicing.', format: 'Git Repository' },
      { title: 'Credit Bureau & Cash Flow Integration Modules', category: 'Integrations', description: 'Production adapters for Experian, TransUnion, Equifax, Plaid Assets, and Finicity.', format: 'TypeScript / Python Libraries' },
      { title: 'Underwriting Rule Engine & Risk Dashboard', category: 'Operations', description: 'Configurable decision table console allowing credit officers to adjust risk thresholds without deploying code.', format: 'Web Application' },
      { title: 'FCRA & ECOA Compliance Verification Artifacts', category: 'Compliance', description: 'Audit trail logging mechanisms and automated adverse action reason generators.', format: 'Documentation & Config' },
    ],
    techStack: [
      { category: 'Core Backend', items: ['Python (FastAPI)', 'Go', 'PostgreSQL', 'Redis', 'Docker / Kubernetes'] },
      { category: 'Data & Bureaus', items: ['Experian API', 'TransUnion', 'Equifax', 'Plaid Assets', 'Finicity'] },
      { category: 'Document Automation', items: ['DocuSign API', 'PDFKit', 'LayoutLM OCR', 'AWS Textract'] },
      { category: 'Payments & Collections', items: ['NACHA ACH Engine', 'Stripe Payouts', 'Dwolla', 'FedNow'] },
    ],
    caseStudyQuote: {
      quote: 'Neominds rebuilt our commercial lending underwriting platform. Our median decisioning time dropped from 4 business days to 7 minutes, enabling us to originate $340M in new volume with lower default rates.',
      author: 'Kathryn Boyd',
      role: 'Chief Risk Officer',
      company: 'Apex Capital Partners',
      metric: 'Decisioning: 4 Days down to 7 Min',
    },
    faqs: [
      { question: 'Can our credit risk team adjust underwriting rules without waiting on engineering deployments?', answer: 'Yes. We build dynamic decision rule engines with administrative consoles, empowering risk officers to modify debt-to-income thresholds, credit score cutoffs, and pricing matrices instantly.' },
      { question: 'How do you handle fair lending compliance and adverse action notices?', answer: 'Our underwriting engines generate mathematically explainable decision logs with clear reason codes that automatically populate FCRA-compliant adverse action letters whenever an application is declined.' },
      { question: 'Does the platform support complex commercial loan covenants and multi-borrower structures?', answer: 'Yes. Our domain models support guarantor hierarchies, multiple co-borrowers, cross-collateralization, and customized repayment schedules with seasonal or interest-only periods.' },
      { question: 'How are bank statements parsed for income and cash-flow verification?', answer: 'We connect directly with bank account aggregation APIs (Plaid/Finicity) or utilize OCR and machine learning document parsing to analyze raw PDF bank statements for recurring revenue and overdraft frequency.' },
    ],
  },

  'investment-wealth-management': {
    id: 'investment-wealth-management',
    slug: 'investment-wealth-management',
    title: 'Investment & Wealth Management',
    tagline: 'Robo-Advisory, Portfolio Rebalancing & Wealth Management Systems',
    category: 'Core Engineering',
    heroBadge: 'Fintech WealthTech Infrastructure',
    heroHeadline: 'Sophisticated Robo-Advisory &',
    heroHeadlineHighlight: 'Wealth Management Platforms',
    heroDescription:
      'Empower wealth managers and individual investors with intelligent trading engines. We architect automated robo-advisory platforms, portfolio tax-loss harvesting algorithms, multi-custodian account aggregation, and real-time risk simulation tools.',
    metrics: [
      { value: '$4.8B+', label: 'Assets Under Management (AUM)' },
      { value: '< 20ms', label: 'Portfolio Rebalance Calculation' },
      { value: '100%', label: 'SEC / FINRA Audit Ready' },
      { value: '18 Custodians', label: 'Unified Integration Layer' },
    ],
    capabilities: [
      {
        title: 'Automated Portfolio Rebalancing & Tax-Loss Harvesting',
        description:
          'High-performance algorithms calculating target asset allocations, cash drag mitigation, tax-lot optimization, and direct indexing rebalances across thousands of client portfolios in parallel.',
        tags: ['Tax-Loss Harvesting', 'Direct Indexing', 'Drift Monitoring', 'Tax-Lot Accounting'],
      },
      {
        title: 'Multi-Custodian Clearing & Order Execution (FIX Protocol)',
        description:
          'Direct electronic trade execution via FIX 4.2 / 4.4 protocols with premier custodians including Apex Clearing, Charles Schwab, BNY Mellon Pershing, and Interactive Brokers.',
        tags: ['FIX Protocol', 'Apex Clearing', 'Schwab API', 'Interactive Brokers'],
      },
      {
        title: 'Institutional Wealth & RIA Client Portals',
        description:
          'Client-facing interactive web and mobile dashboards with dynamic performance charts (TWR / MWR), goal-based wealth planning, and digital onboarding with e-signature.',
        tags: ['TWR / MWR Returns', 'Goal Projections', 'Digital Onboarding', 'High-Net-Worth Portals'],
      },
      {
        title: 'Real-Time Market Data Feeds & Tick Ingestion',
        description:
          'Sub-millisecond market data ingestion pipelines streaming live equity, ETF, option, and fixed-income quotes from Polygon.io, Bloomberg, and Refinitiv into memory caches.',
        tags: ['WebSocket Feeds', 'Polygon.io / Bloomberg', 'Real-Time Valuations', 'Options & Equities'],
      },
      {
        title: 'Monte Carlo Simulation & Stress Testing Engines',
        description:
          'Quantitative risk engines running 10,000+ Monte Carlo probability trials in seconds to simulate retirement decumulation scenarios, interest rate shocks, and market drawdowns.',
        tags: ['Monte Carlo Trials', 'Stress Testing', 'Value at Risk (VaR)', 'Retirement Decumulation'],
      },
      {
        title: 'SEC / FINRA Regulatory Compliance & Audit Logs',
        description:
          'Immutable compliance logging recording best-execution verification, Form ADV disclosures, trade allocation fairness audits, and automated trade confirmation generation.',
        tags: ['SEC / FINRA Rules', 'Best Execution Logs', 'Form ADV Workflows', 'WORM Storage'],
      },
    ],
    processSteps: [
      {
        step: '01',
        title: 'Custodian & Quantitative Architecture Discovery',
        description: 'Analyzing custodian clearing APIs, FIX specifications, model portfolio allocation frameworks, and investor profiling requirements.',
        deliverables: ['Custodian Integration Architecture', 'Portfolio Rebalancer Blueprint', 'SEC Compliance Spec'],
      },
      {
        step: '02',
        title: 'Rebalancing Engine & FIX Order Router Sprint',
        description: 'Implementing the core mathematical rebalancer, tax-loss harvesting logic, and FIX protocol message generator.',
        deliverables: ['Rebalancer Microservice', 'FIX Engine Gateway', 'Simulated Custodian Sandbox'],
      },
      {
        step: '03',
        title: 'Client Portal & Financial Visualization Sprint',
        description: 'Building interactive investor interfaces, performance calculation engines (Time-Weighted Returns), and automated statement generators.',
        deliverables: ['Investor Web & Mobile Portal', 'Performance Engine', 'Client Statement Generator'],
      },
      {
        step: '04',
        title: 'Production Cutover & Custodian Certification',
        description: 'Passing custodian certification testing for electronic order routing and deploying to hardened cloud environments with WORM compliance logging.',
        deliverables: ['Custodian Production Certification', 'Production Cluster Deployment', 'Disaster Recovery Runbook'],
      },
    ],
    deliverables: [
      { title: 'Robo-Advisory & Rebalancing Codebase', category: 'Codebase', description: 'Enterprise Python / Go / Rust quantitative microservices with high mathematical precision.', format: 'Git Repository' },
      { title: 'Multi-Custodian FIX Connector Suite', category: 'Integrations', description: 'Certified electronic trade execution and drop-copy modules for Apex, Schwab, and Pershing.', format: 'FIX Protocol Library' },
      { title: 'Investor Web & Mobile Apps', category: 'Applications', description: 'Polished digital wealth interfaces with real-time portfolio visualization and biometric login.', format: 'Next.js & React Native Codebase' },
      { title: 'SEC / FINRA Audit Trail & Trade Logger', category: 'Compliance', description: 'Write-Once-Read-Many (WORM) compliant event logging system for complete regulatory compliance.', format: 'Encrypted Cloud Storage' },
    ],
    techStack: [
      { category: 'Quantitative & Core', items: ['Rust', 'Python (NumPy / SciPy)', 'Go', 'TimescaleDB', 'Redis'] },
      { category: 'Trading & Custody', items: ['FIX Protocol 4.4', 'QuickFIX', 'Apex Clearing API', 'Schwab Open API', 'Bloomberg'] },
      { category: 'Frontend & Analytics', items: ['Next.js', 'React Native', 'Highcharts / D3.js', 'Tailwind CSS'] },
      { category: 'Security & Cloud', items: ['AWS KMS', 'HashiCorp Vault', 'WORM S3 Storage', 'Docker / Kubernetes'] },
    ],
    caseStudyQuote: {
      quote: 'Neominds engineered our algorithmic direct-indexing platform, enabling our wealth advisors to rebalance over 12,000 high-net-worth accounts in under 4 minutes with automated tax-loss harvesting.',
      author: 'David Chen',
      role: 'Chief Information Officer',
      company: 'Vanguard Wealth Partners',
      metric: '12k Accounts Rebalanced in 4 Min',
    },
    faqs: [
      { question: 'How do your rebalancing algorithms handle tax-lot optimization?', answer: 'Our algorithms evaluate specific share identification methods (HIFO, LIFO, and MinTax), dynamically harvesting capital losses against unrealized gains while rigorously avoiding IRS wash-sale rule violations.' },
      { question: 'Can the platform integrate with our existing clearing broker or custodian?', answer: 'Yes. We have implemented FIX protocol order routers and REST API integrations with leading custodians including Apex Clearing, Charles Schwab, Fidelity Institutional, and Interactive Brokers.' },
      { question: 'Does the system calculate both Time-Weighted (TWR) and Money-Weighted (MWR) returns?', answer: 'Yes. Our performance engines calculate precise daily TWR and internal rates of return (IRR/MWR), accurately adjusting for intra-day cash flows and dividend distributions.' },
      { question: 'How is client data protected against breaches and insider threats?', answer: 'All data is encrypted with customer-managed keys (CMKs) in transit and at rest. Financial accounts, social security numbers, and transaction records are strictly isolated in hardened, zero-trust cloud subnets.' },
    ],
  },

  'financial-analytics': {
    id: 'financial-analytics',
    slug: 'financial-analytics',
    title: 'Financial Analytics',
    tagline: 'Real-Time Financial Intelligence, BI Dashboards & Predictive Modeling',
    category: 'Core Engineering',
    heroBadge: 'Fintech Data Intelligence',
    heroHeadline: 'Real-Time Data Pipelines &',
    heroHeadlineHighlight: 'Financial Analytics Engines',
    heroDescription:
      'Transform high-frequency transactional data into decisive competitive advantages. We build real-time OLAP data warehouses, liquidity forecasting engines, profitability attribution models, and executive financial dashboards.',
    metrics: [
      { value: '1.2M req/s', label: 'Telemetry Ingestion Rate' },
      { value: '< 250ms', label: 'OLAP Query Latency' },
      { value: '99.4%', label: 'Cash Flow Forecast Accuracy' },
      { value: '100%', label: 'Single-Source-of-Truth Data' },
    ],
    capabilities: [
      {
        title: 'Real-Time Transaction Ingestion & Streaming ETL',
        description:
          'High-throughput streaming data pipelines built with Apache Kafka, Flink, and ClickHouse, ingesting millions of financial events per second with zero message loss.',
        tags: ['Apache Kafka', 'Apache Flink', 'ClickHouse OLAP', 'Real-Time Streaming'],
      },
      {
        title: 'Cash Flow & Liquidity Forecasting Models',
        description:
          'Predictive machine learning models forecasting intra-day treasury liquidity, working capital requirements, and stress-tested burn rate projections.',
        tags: ['Liquidity Forecasting', 'Time-Series Analysis', 'Working Capital Models', 'Treasury Telemetry'],
      },
      {
        title: 'Customer Lifetime Value (LTV) & Unit Economics Analytics',
        description:
          'Deep multi-dimensional attribution modeling tracking customer acquisition costs (CAC), churn probability, net revenue retention (NRR), and cohort profitability.',
        tags: ['Unit Economics', 'Cohort Analysis', 'LTV / CAC Attribution', 'Churn Modeling'],
      },
      {
        title: 'Executive Financial Dashboards & C-Suite BI',
        description:
          'Custom web analytics applications providing interactive drill-downs, dynamic scenario modeling, currency normalizations, and automated Board-ready reports.',
        tags: ['Interactive BI', 'Scenario Modeling', 'Board Reports', 'Dynamic Drill-Downs'],
      },
      {
        title: 'Regulatory Capital & Basel III Risk Telemetry',
        description:
          'Automated calculation of risk-weighted assets (RWA), capital adequacy ratios (CAR), liquidity coverage ratios (LCR), and regulatory compliance reporting.',
        tags: ['Basel III / IV', 'Risk-Weighted Assets', 'LCR & NSFR', 'Regulatory Reports'],
      },
      {
        title: 'Financial Data Governance & Lineage Architecture',
        description:
          'Complete metadata catalogs, data quality assertion frameworks (Great Expectations), and automated lineage tracking to guarantee auditability for financial auditors.',
        tags: ['Data Lineage', 'Great Expectations', 'Metadata Catalog', 'Auditor Verification'],
      },
    ],
    processSteps: [
      {
        step: '01',
        title: 'Data Sources & Metrics Scoping',
        description: 'Auditing existing core databases, payment gateways, ERP systems, and identifying key business metrics and regulatory reporting mandates.',
        deliverables: ['Financial Data Dictionary', 'Pipeline Topology Blueprint', 'Data Governance Framework'],
      },
      {
        step: '02',
        title: 'OLAP Warehouse & Stream Pipeline Setup',
        description: 'Deploying ClickHouse / Snowflake / BigQuery clusters and constructing real-time Kafka event consumers and streaming transform jobs.',
        deliverables: ['OLAP Warehouse Schema', 'Streaming Pipeline Scripts', 'Automated Test Harness'],
      },
      {
        step: '03',
        title: 'Quantitative Modeling & Dashboard UI Sprint',
        description: 'Implementing forecasting models, financial calculation libraries, and developing the reactive web analytics console.',
        deliverables: ['Forecasting Algorithms', 'Analytics Web Application', 'Interactive Visualization Library'],
      },
      {
        step: '04',
        title: 'Production Cutover & Data Reconciliation',
        description: 'Validating data accuracy against audited general ledgers, implementing continuous data quality alerts, and conducting executive training.',
        deliverables: ['Production Cluster Deployment', 'Reconciliation Audit Log', 'Executive User Manual'],
      },
    ],
    deliverables: [
      { title: 'Full Analytics Pipeline & Warehouse Codebase', category: 'Codebase', description: 'Production-ready Kafka streaming jobs, dbt transformations, and ClickHouse/Snowflake models.', format: 'Git Repository' },
      { title: 'Executive Financial Dashboard Application', category: 'Application', description: 'Next.js / TypeScript custom web application with interactive charts and export capabilities.', format: 'Web Application' },
      { title: 'Automated Financial Data Reconciliation Suite', category: 'Testing', description: 'Automated regression test suite verifying zero ledger discrepancies between transactional and analytics stores.', format: 'Python Test Suite' },
      { title: 'Regulatory Reporting & Metric Definition Blueprint', category: 'Documentation', description: 'Formal documentation detailing data lineage, metric calculations, and regulatory compliance mapping.', format: 'PDF & Markdown' },
    ],
    techStack: [
      { category: 'Data Warehousing & OLAP', items: ['ClickHouse', 'Snowflake', 'BigQuery', 'DuckDB', 'PostgreSQL'] },
      { category: 'Streaming & ETL', items: ['Apache Kafka', 'Apache Flink', 'dbt', 'Airflow', 'Debezium'] },
      { category: 'Analytics & Visualization', items: ['Next.js', 'Apache ECharts', 'D3.js', 'Python (Pandas / Polars)'] },
      { category: 'Cloud & Infrastructure', items: ['AWS', 'Google Cloud', 'Terraform', 'Kubernetes'] },
    ],
    caseStudyQuote: {
      quote: 'Neominds built our unified financial analytics platform on ClickHouse and Kafka. We now analyze over 45M daily transactions in real time with sub-second queries, giving our executive team instant visibility into liquidity.',
      author: 'Henrik Lindqvist',
      role: 'VP of Data Engineering',
      company: 'Nordic FinTech Group',
      metric: '45M Transactions/Day Analyzed',
    },
    faqs: [
      { question: 'Why use ClickHouse or specialized OLAP instead of our regular PostgreSQL database for analytics?', answer: 'Traditional transactional databases (OLTP) slow down significantly when aggregating millions of rows. Columnar OLAP engines like ClickHouse compress data by 80% and query billions of records in sub-second timeframes without impacting production transactional operations.' },
      { question: 'How do you guarantee that analytics numbers match the official accounting ledger?', answer: 'We implement automated daily and intra-day reconciliation jobs using dbt test assertions that cross-verify analytics warehouse balances against core ledger entries, triggering alerts upon the slightest penny variance.' },
      { question: 'Can our finance team export customized reports to Excel and PDF formats?', answer: 'Yes. The analytics platform includes automated export engines generating formatted Excel spreadsheets with intact formulas, as well as publication-quality PDF executive summaries.' },
      { question: 'Does the analytics infrastructure comply with data residency laws (e.g. GDPR, CCPA)?', answer: 'All architectures are deployed into your own cloud VPC within your required regional boundaries, ensuring strict compliance with local financial data residency regulations.' },
    ],
  },

  'fraud-risk-management': {
    id: 'fraud-risk-management',
    slug: 'fraud-risk-management',
    title: 'Fraud & Risk Management',
    tagline: 'AI-Powered Fraud Detection, Anomaly Screening & Risk Decisioning',
    category: 'Core Engineering',
    heroBadge: 'Fintech Security & Risk',
    heroHeadline: 'Real-Time Anomaly Detection &',
    heroHeadlineHighlight: 'Fraud Prevention Systems',
    heroDescription:
      'Defend transactional ecosystems against sophisticated cyber-fraud. We engineer sub-50ms fraud decisioning engines combining machine learning anomaly detection, graph network analysis, device fingerprinting, and dynamic step-up authentication.',
    metrics: [
      { value: '< 45ms', label: 'Decision Latency' },
      { value: '92%', label: 'Fraud Catch Rate' },
      { value: '-65%', label: 'False Positive Reductions' },
      { value: '100%', label: 'Explainable AI Decisioning' },
    ],
    capabilities: [
      {
        title: 'Real-Time Transaction Risk Scoring Engines',
        description:
          'Sub-50ms inference pipelines evaluating incoming payment payloads against hundreds of dynamic velocity rules, behavioral features, and machine learning models.',
        tags: ['Sub-50ms Latency', 'Velocity Counters', 'ML Inference', 'Real-Time Decisioning'],
      },
      {
        title: 'Graph Network Analysis & Fraud Ring Detection',
        description:
          'Graph database architectures (Neo4j / Amazon Neptune) connecting IP addresses, device hashes, bank account numbers, and emails to uncover organized fraud rings and synthetic identities.',
        tags: ['Graph Databases', 'Fraud Ring Discovery', 'Synthetic Identity Checks', 'Entity Resolution'],
      },
      {
        title: 'Advanced Device Fingerprinting & Behavioral Biometrics',
        description:
          'Client-side SDKs capturing hardware identifiers, canvas fingerprinting, battery status, keystroke dynamics, and mouse trajectories to detect bots and automated credential stuffing.',
        tags: ['Device Fingerprinting', 'Behavioral Biometrics', 'Bot Mitigation', 'Credential Stuffing Defenses'],
      },
      {
        title: 'Dynamic Step-Up & 3D Secure 2.0 (3DS2) Verification',
        description:
          'Intelligent risk-based authentication triggering biometric confirmation, SMS OTP, or frictionless 3DS2 exemptions based on real-time transaction context.',
        tags: ['3D Secure 2.0', 'Risk-Based Auth', 'Frictionless Exemptions', 'Biometric Step-Up'],
      },
      {
        title: 'Account Takeover (ATO) & Credential Stuffing Prevention',
        description:
          'Real-time screening of login attempts against compromised password databases, anomalous geolocation velocity jumps, and suspicious SIM-swap signals.',
        tags: ['ATO Prevention', 'Impossible Travel Checks', 'SIM Swap Detection', 'Compromised Credential Screening'],
      },
      {
        title: 'Investigative Case Management & SAR Filing Workflow',
        description:
          'Analyst investigation workspace with unified visual timeline reconstruction, automated evidence bundling, and one-click Suspicious Activity Report (SAR) filing.',
        tags: ['Investigation Console', 'Timeline Reconstruction', 'SAR Filing Workflows', 'Audit Integrity'],
      },
    ],
    processSteps: [
      {
        step: '01',
        title: 'Fraud Attack Surface & Historic Data Audit',
        description: 'Analyzing historic chargebacks, ATO patterns, existing rule false positive rates, and transaction data features.',
        deliverables: ['Fraud Vulnerability Assessment', 'Feature Engineering Roadmap', 'Model Benchmark Criteria'],
      },
      {
        step: '02',
        title: 'Decision Engine & Graph Architecture Sprint',
        description: 'Building the sub-50ms decisioning microservice, Redis sliding-window velocity counters, and Neo4j graph linkage pipelines.',
        deliverables: ['Real-Time Scoring Engine', 'Graph Entity Resolution Service', 'Rule Configuration API'],
      },
      {
        step: '03',
        title: 'Machine Learning Training & Shadow Mode Testing',
        description: 'Training supervised XGBoost / LightGBM models and running them in non-blocking shadow mode against live production traffic to tune precision and recall.',
        deliverables: ['Trained ML Model Checkpoints', 'Shadow Mode Scorecard', 'False Positive Analysis'],
      },
      {
        step: '04',
        title: 'Active Production Enforcement & Analyst Training',
        description: 'Enabling active transaction blocking, integrating 3DS2 step-up challenges, and deploying the analyst investigation workspace.',
        deliverables: ['Production Cluster Deployment', 'Analyst Investigation Workspace', 'SLA Response Protocol'],
      },
    ],
    deliverables: [
      { title: 'Fraud Decisioning & Scoring Engine Codebase', category: 'Codebase', description: 'High-speed Go / Python microservices engineered for extreme concurrent load.', format: 'Git Repository' },
      { title: 'Trained Anomaly Detection Model Artifacts', category: 'ML Models', description: 'Optimized XGBoost / LightGBM / ONNX models with automated retraining pipelines.', format: 'ONNX Checkpoints & Scripts' },
      { title: 'Client-Side Device Fingerprinting SDK', category: 'Client SDK', description: 'Lightweight JavaScript and mobile SDKs capturing security signals without privacy infringement.', format: 'NPM & Mobile SDK' },
      { title: 'Fraud Analyst Case Management Workspace', category: 'Application', description: 'Comprehensive web application for deep graph visualization, manual reviews, and SAR filing.', format: 'Web Application' },
    ],
    techStack: [
      { category: 'Decision Engine', items: ['Go', 'Python', 'Redis (Sliding Windows)', 'PostgreSQL', 'Apache Kafka'] },
      { category: 'Machine Learning', items: ['XGBoost', 'LightGBM', 'Scikit-Learn', 'ONNX Runtime', 'PyTorch'] },
      { category: 'Graph Databases', items: ['Neo4j', 'Amazon Neptune', 'NetworkX', 'Cypher Query Language'] },
      { category: 'Security Standards', items: ['EMV 3DS 2.2', 'FIDO2 / WebAuthn', 'PCI-DSS', 'FinCEN SAR Standards'] },
    ],
    caseStudyQuote: {
      quote: 'Neominds implemented our automated transaction fraud decisioning engine. Within 60 days, we cut fraud losses by 74% while decreasing false positive declined transactions by 65%, generating an immediate $2.1M net return.',
      author: 'Rachel Steinberg',
      role: 'Director of Fraud & Security',
      company: 'Moneta Global Payments',
      metric: '74% Reduction in Fraud Losses',
    },
    faqs: [
      { question: 'How do you keep fraud decisioning latency under 50ms during live checkout?', answer: 'We utilize pre-computed Redis sliding-window counters and compiled in-memory decision trees (ONNX runtime in Go) so that risk evaluation requires zero blocking disk I/O.' },
      { question: 'Will this system increase checkout friction for legitimate customers?', answer: 'No. By combining device fingerprinting, behavioral biometrics, and historical velocity scores, over 97% of transactions are classified as ultra-low risk and proceed friction-free.' },
      { question: 'How do compliance officers explain automated decisions to regulators?', answer: 'Every decision generated by our machine learning models includes SHAP (Shapley Additive Explanations) value factor weightings, clearly showing the exact attributes that caused a block or challenge.' },
      { question: 'How does the platform uncover organized synthetic identity rings?', answer: 'Our entity resolution graph engine automatically links seemingly separate accounts that share device fingerprints, IP subnet clusters, or phone number sequences, flagging the entire syndicate simultaneously.' },
    ],
  },

  /* =========================================================================
     HEALTHCARE SERVICES (6 SERVICES)
     ========================================================================= */
  'healthcare-management-software': {
    id: 'healthcare-management-software',
    slug: 'healthcare-management-software',
    title: 'Healthcare Management Software',
    tagline: 'Custom EHR, Clinical Workflow Engines & Hospital Operating Systems',
    category: 'Core Engineering',
    heroBadge: 'HealthTech & Hospital Systems',
    heroHeadline: 'HIPAA-Compliant Enterprise',
    heroHeadlineHighlight: 'Healthcare Management Software',
    heroDescription:
      'Empower health networks with integrated clinical operating platforms. We engineer custom Electronic Health Record (EHR) systems, hospital resource planning tools, clinical workflow engines, and HL7 FHIR interoperability pipelines.',
    metrics: [
      { value: '100%', label: 'HIPAA & HITECH Compliant' },
      { value: '38%', label: 'Reduction in Charting Time' },
      { value: '99.99%', label: 'Clinical Uptime SLA' },
      { value: 'HL7 / FHIR', label: 'Certified Interoperability' },
    ],
    capabilities: [
      {
        title: 'Custom EHR / EMR & Clinical Charting Platforms',
        description:
          'Specialty-specific electronic health record platforms with voice-to-text clinical dictation, ICD-10/SNOMED coding assistants, and customizable clinician note templates.',
        tags: ['Custom EHR / EMR', 'ICD-10 & SNOMED CT', 'Voice Dictation', 'Specialty Charting'],
      },
      {
        title: 'HL7 FHIR Interoperability & Integration Middleware',
        description:
          'Bidirectional data integration with Epic, Cerner (Oracle Health), and Athenahealth using standardized HL7 v2, v3, and FHIR R4 JSON RESTful APIs.',
        tags: ['FHIR R4 APIs', 'HL7 v2 / v3 Pipelines', 'Epic Systems Integration', 'Cerner Connectivity'],
      },
      {
        title: 'Hospital Capacity & Inpatient Bed Management',
        description:
          'Real-time bed tracking, operating room scheduling optimization, nurse-to-patient staffing ratios, and discharge prediction dashboards.',
        tags: ['Inpatient Bed Tracking', 'OR Scheduling', 'Staffing Optimization', 'Discharge Predictions'],
      },
      {
        title: 'E-Prescribing (eRx) & Pharmacy Integration',
        description:
          'Surescripts-certified electronic prescribing with automated drug-drug and drug-allergy conflict checking, formulary verification, and controlled substance (EPCS) support.',
        tags: ['Surescripts Certified', 'EPCS Compliance', 'Drug Interaction Checks', 'Formulary Lookups'],
      },
      {
        title: 'Revenue Cycle Management (RCM) & Medical Claims Clearing',
        description:
          'Automated EDI 837 claims generation, EDI 835 remittance posting, prior authorization tracking, and real-time patient insurance eligibility checks (EDI 270/271).',
        tags: ['EDI 837 / 835 / 270', 'Automated Claims Scrubbing', 'Prior Authorization', 'Insurance Eligibility'],
      },
      {
        title: 'Zero-Trust HIPAA Security & PHI Encryption Architecture',
        description:
          'AES-256 field-level database encryption, immutable clinical audit logs, automated BAA enforcement, and fine-grained role-based clinician access controls.',
        tags: ['HIPAA BAA Ready', 'Field-Level PHI Encryption', 'Immutable Audit Logs', 'Role-Based Access'],
      },
    ],
    processSteps: [
      {
        step: '01',
        title: 'Clinical Workflow & Regulatory Discovery',
        description: 'Interviewing physician leads, mapping specialty clinical pathways, reviewing existing EHR systems, and drafting the HIPAA compliance matrix.',
        deliverables: ['Clinical Workflow Specification', 'HIPAA Security Risk Assessment', 'FHIR Data Mapping Document'],
      },
      {
        step: '02',
        title: 'Core Engine & Interoperability Prototype',
        description: 'Implementing FHIR R4 server endpoints, clinical charting data schemas, and role-based clinician access control mechanisms.',
        deliverables: ['FHIR Server Sandbox', 'Clinical Charting Prototype', 'Audit Trail Architecture'],
      },
      {
        step: '03',
        title: 'EHR Integration & Usability Validation',
        description: 'Connecting to clearinghouse EDI networks, testing Epic/Cerner interfaces, and conducting clinical usability walkthroughs with nurses and doctors.',
        deliverables: ['EDI Integration Connectors', 'Epic / Cerner Interop Report', 'Clinician Feedback Matrix'],
      },
      {
        step: '04',
        title: 'Production Cutover & Clinical Go-Live',
        description: 'Executing zero-downtime deployment, migrating historic patient charts, and providing 24/7 dedicated clinical hypercare support.',
        deliverables: ['Production Cluster Deployment', 'Data Migration Certification', '24/7 SLA Clinical Support Agreement'],
      },
    ],
    deliverables: [
      { title: 'Healthcare Management Platform Source Code', category: 'Codebase', description: 'Enterprise-grade TypeScript / Go / Python microservices with full source code ownership.', format: 'Git Repository' },
      { title: 'FHIR R4 Interoperability Server & Client SDK', category: 'Interoperability', description: 'Certified HL7 FHIR R4 server with OAuth2 SMART on FHIR authorization support.', format: 'Dockerized Microservice' },
      { title: 'HIPAA Compliance & Security Documentation Pack', category: 'Compliance', description: 'Formal policies, business associate agreement (BAA) templates, and encryption specs.', format: 'Comprehensive PDF Pack' },
      { title: 'RCM & Electronic Claims EDI Connectors', category: 'Integrations', description: 'Production-ready modules for EDI 837, 835, 270, and 271 transaction clearing.', format: 'Modular Software Packages' },
    ],
    techStack: [
      { category: 'Clinical Core', items: ['TypeScript (Node.js)', 'Go', 'PostgreSQL (Encrypted)', 'Redis', 'Docker'] },
      { category: 'Health Standards', items: ['HL7 FHIR R4', 'HL7 v2.x', 'DICOM Imaging', 'EDI (837/835/270/271)', 'SMART on FHIR'] },
      { category: 'EHR Integrations', items: ['Epic Systems App Orchard', 'Cerner Millennium', 'Athenahealth API', 'Surescripts'] },
      { category: 'Security & Cloud', items: ['AWS GovCloud / HIPAA VPC', 'Google Cloud Healthcare API', 'HashiCorp Vault', 'KMS'] },
    ],
    caseStudyQuote: {
      quote: 'Neominds built our specialty surgical clinic EHR and scheduling platform. We cut physician documentation time by 38% and integrated bidirectionally with regional hospital systems through FHIR on schedule.',
      author: 'Dr. Michael Sterling',
      role: 'Chief Medical Officer',
      company: 'Alliance Surgical Network',
      metric: '38% Reduction in Charting Time',
    },
    faqs: [
      { question: 'Will you sign a Business Associate Agreement (BAA)?', answer: 'Yes, absolutely. We sign full Business Associate Agreements guaranteeing that our engineering and DevOps practices strictly satisfy all HIPAA, HITECH, and Omnibus rule requirements.' },
      { question: 'Can this platform connect with our hospital existing Epic or Cerner EHR?', answer: 'Yes. We build compliant SMART on FHIR apps and HL7 integration pipelines that communicate bidirectionally with Epic, Cerner, and other legacy health records.' },
      { question: 'How is patient Protected Health Information (PHI) secured?', answer: 'PHI is protected using AES-256 field-level encryption in the database, TLS 1.3 in transit, automated session timeouts, and granular role-based access logs tracking every record view.' },
      { question: 'Can the software be certified for ONC Health IT or Meaningful Use?', answer: 'Yes. We architect our healthcare software in strict alignment with ONC Health IT certification criteria, electronic prescribing rules, and CQM reporting standards.' },
    ],
  },

  'telemedicine-platforms': {
    id: 'telemedicine-platforms',
    slug: 'telemedicine-platforms',
    title: 'Telemedicine Platforms',
    tagline: 'HIPAA-Compliant Virtual Care, WebRTC Video Consultations & Remote Triage',
    category: 'Core Engineering',
    heroBadge: 'Virtual Care & Telehealth',
    heroHeadline: 'Secure & Low-Latency',
    heroHeadlineHighlight: 'Telemedicine Virtual Care',
    heroDescription:
      'Connect clinicians and patients anywhere in the world. We build encrypted WebRTC video consultation suites, virtual waiting rooms, asynchronous messaging portals, remote patient triage workflows, and integrated digital prescription tools.',
    metrics: [
      { value: '< 150ms', label: 'Audio/Video Latency' },
      { value: '99.9%', label: 'Session Connection Rate' },
      { value: '100%', label: 'HIPAA Encrypted Streams' },
      { value: '4.9 ★', label: 'Patient Experience Rating' },
    ],
    capabilities: [
      {
        title: 'HIPAA-Compliant WebRTC Video & Audio Consultations',
        description:
          'End-to-end encrypted peer-to-peer and SFU video conferencing with adaptive bitrate streaming, multi-party family consultations, and screen sharing.',
        tags: ['WebRTC / SFU', 'End-to-End Encryption', 'Adaptive Bitrate', 'Multi-Party Video'],
      },
      {
        title: 'Virtual Waiting Rooms & Dynamic Queue Management',
        description:
          'Patient digital check-in, automated consent capture, pre-visit questionnaire review, dynamic queue priority routing, and real-time SMS arrival notifications.',
        tags: ['Virtual Waiting Room', 'Dynamic Queueing', 'Automated Consents', 'SMS Dispatch'],
      },
      {
        title: 'Secure Asynchronous Patient-Provider Messaging',
        description:
          'Threaded messaging with encrypted photo and lab result uploads, clinician triage inbox prioritization, read receipts, and automated after-hours responses.',
        tags: ['Encrypted Messaging', 'Media Attachment Uploads', 'Clinical Triage Inbox', 'Read Receipts'],
      },
      {
        title: 'In-Session Clinical Charting & Split-Screen Notes',
        description:
          'Simultaneous video consulting and EHR charting with customizable clinical macros, vitals recording, and one-click diagnostic code injection.',
        tags: ['Split-Screen Charting', 'Clinical Macros', 'Vitals Entry', 'ICD-10 Injection'],
      },
      {
        title: 'Integrated Digital Prescriptions & Lab Order Handshake',
        description:
          'Direct pharmacy routing via Surescripts during the call, automated electronic lab order creation, and patient digital discharge summary delivery.',
        tags: ['Surescripts eRx', 'Lab Orders', 'Discharge Summaries', 'Care Plans'],
      },
      {
        title: 'Remote Patient Monitoring (RPM) Device Connectivity',
        description:
          'Bluetooth Low Energy (BLE) and cellular device integrations streaming live blood pressure, pulse oximetry, and blood glucose data directly into the telehealth session.',
        tags: ['BLE Medical Devices', 'RPM Data Ingestion', 'Live Vitals Streaming', 'Alert Thresholds'],
      },
    ],
    processSteps: [
      {
        step: '01',
        title: 'Clinical Telehealth Workflow Scoping',
        description: 'Defining provider scheduling rules, state-by-state medical licensing constraints, patient consent requirements, and network SLA targets.',
        deliverables: ['Telehealth Workflow Blueprint', 'HIPAA Telehealth Security Audit', 'WebRTC Architecture Spec'],
      },
      {
        step: '02',
        title: 'Encrypted Media Server & Waiting Room Setup',
        description: 'Deploying media server clusters (LiveKit / Twilio / Mediasoup) with end-to-end TLS encryption and dynamic queue management.',
        deliverables: ['Live WebRTC Media Server', 'Virtual Waiting Room Module', 'Mobile Video SDK Integration'],
      },
      {
        step: '03',
        title: 'In-Call Charting & Prescribing Integration',
        description: 'Connecting e-prescribing networks, embedding split-screen clinical documentation notes, and integrating payment co-pay processing.',
        deliverables: ['In-Call EHR Charting Panel', 'eRx Surescripts Connector', 'Co-Pay Payment Gateway'],
      },
      {
        step: '04',
        title: 'Network Stress Testing & Nationwide Rollout',
        description: 'Simulating poor cellular network conditions (packet loss, jitter), validating automatic bitrate scaling, and launching the virtual care network.',
        deliverables: ['Network Simulation Benchmark Report', 'Production Deployment Pipeline', 'Provider Onboarding Toolkit'],
      },
    ],
    deliverables: [
      { title: 'Complete Telemedicine Web & Mobile Codebase', category: 'Codebase', description: 'Custom white-label telehealth applications for iOS, Android, and responsive web browsers.', format: 'Git Repository' },
      { title: 'Hardened WebRTC SFU Media Infrastructure', category: 'Infrastructure', description: 'Terraform scripts provisioning auto-scaling, HIPAA-compliant media servers across global regions.', format: 'Terraform HCL Scripts' },
      { title: 'Provider & Patient Mobile SDKs', category: 'Client SDKs', description: 'Drop-in React Native and native Swift/Kotlin modules for video calling and waiting room state.', format: 'NPM & CocoaPods Packages' },
      { title: 'HIPAA Encryption & Telehealth Audit Certification', category: 'Compliance', description: 'Complete documentation verifying that video and audio data streams are never stored unencrypted.', format: 'Security Audit Pack' },
    ],
    techStack: [
      { category: 'Real-Time Media', items: ['WebRTC', 'LiveKit / Mediasoup', 'WebSocket', 'Twilio Video', 'Opus Audio Codec'] },
      { category: 'App Frameworks', items: ['Next.js (React)', 'React Native', 'Swift (iOS)', 'Kotlin (Android)', 'Tailwind CSS'] },
      { category: 'Backend & Data', items: ['Go', 'Node.js', 'PostgreSQL', 'Redis', 'Docker / Kubernetes'] },
      { category: 'Health Integrations', items: ['HL7 FHIR R4', 'Surescripts eRx', 'Stripe Co-Pay Processing', 'Plaid Insurance'] },
    ],
    caseStudyQuote: {
      quote: 'Neominds engineered our nationwide telehealth virtual care platform. We connected over 600,000 virtual patient visits in our first year with a 99.9% connection success rate and seamless in-call e-prescribing.',
      author: 'Clara Oswald',
      role: 'Head of Digital Health',
      company: 'NextHealth Telemedicine Network',
      metric: '600k+ Successful Virtual Visits',
    },
    faqs: [
      { question: 'How do you ensure high-quality video for patients on poor cellular connections?', answer: 'We employ adaptive bitrate streaming (SVC) and packet-loss concealment algorithms. If bandwidth drops, the media server prioritizes crisp audio clarity while gracefully reducing video resolution.' },
      { question: 'Is the video consultation recorded or stored on servers?', answer: 'By default, all video streams are transient and peer-encrypted without server recording. If your organization requires clinical recording for compliance, files are immediately encrypted with customer-managed AES-256 keys.' },
      { question: 'Can patients join consultations directly from a mobile browser without installing an app?', answer: 'Yes. Our web client is built on modern WebRTC standards, enabling patients to click an SMS invite link and enter the consultation in Safari (iOS) or Chrome (Android) without downloading an app.' },
      { question: 'Does the platform support multi-party calls for family members or medical translators?', answer: 'Yes. Our Selective Forwarding Unit (SFU) architecture allows clinicians to invite interpreters, specialists, or caregivers into the secure consultation room with a single click.' },
    ],
  },

  'patient-engagement': {
    id: 'patient-engagement',
    slug: 'patient-engagement',
    title: 'Patient Engagement',
    tagline: 'Patient Portals, Automated Care Journeys & Adherence Programs',
    category: 'Core Engineering',
    heroBadge: 'HealthTech Patient Experience',
    heroHeadline: 'Intuitive & Empowering',
    heroHeadlineHighlight: 'Patient Engagement Portals',
    heroDescription:
      'Empower patients to become active participants in their health. We design accessible, HIPAA-compliant patient mobile portals, automated post-discharge follow-up programs, chronic care adherence tools, and multi-channel appointment scheduling suites.',
    metrics: [
      { value: '78%', label: 'Portal Adoption Rate' },
      { value: '-44%', label: 'No-Show Rate Reduction' },
      { value: '4.8 ★', label: 'Patient Satisfaction Score' },
      { value: '100%', label: 'WCAG 2.1 AA Accessible' },
    ],
    capabilities: [
      {
        title: 'Modern Patient Web & Mobile Portals',
        description:
          'Intuitive interfaces for reviewing clinical lab results, downloading immunization records, requesting prescription refills, and managing family healthcare proxies.',
        tags: ['Patient Portals', 'Lab Result Explanations', 'Prescription Refills', 'Family Proxies'],
      },
      {
        title: 'Automated Multi-Channel Appointment Scheduling',
        description:
          'Self-service booking engines synchronized in real-time with provider calendar availability, automated SMS/email reminders, and instant digital cancellation waitlists.',
        tags: ['Self-Service Scheduling', 'SMS Reminders', 'Waitlist Management', 'Two-Way Sync'],
      },
      {
        title: 'Automated Post-Discharge Care Journeys',
        description:
          'Condition-specific recovery pathways delivering scheduled check-ins, symptom check surveys, physical therapy guidance, and automated clinician escalation triggers.',
        tags: ['Care Journeys', 'Post-Op Follow-Ups', 'Symptom Questionnaires', 'Escalation Triggers'],
      },
      {
        title: 'Medication Adherence & Pill Reminder Programs',
        description:
          'Gamified mobile pill tracking, automated refill notifications, medication education videos, and caregiver compliance alerts.',
        tags: ['Medication Adherence', 'Pill Reminders', 'Caregiver Alerts', 'Patient Education'],
      },
      {
        title: 'Digital Patient Intake & Paperless Registration',
        description:
          'Pre-visit digital clipboard with automated insurance card scanning, driver license verification, medical history intake, and electronic signature collection.',
        tags: ['Paperless Check-In', 'Insurance Card OCR', 'Consent E-Sign', 'Instant EHR Ingestion'],
      },
      {
        title: 'Medical Bill Presentment & Frictionless Co-Pays',
        description:
          'Transparent, plain-language digital billing statements with Apple Pay / Google Pay support, flexible interest-free payment plans, and HSA/FSA card acceptance.',
        tags: ['Clear Medical Bills', 'HSA / FSA Cards', 'Apple Pay / Google Pay', 'Payment Plans'],
      },
    ],
    processSteps: [
      {
        step: '01',
        title: 'Patient Journey & Accessibility Mapping',
        description: 'Conducting patient demographic research, mapping digital intake workflows, and establishing WCAG 2.1 AA accessibility guidelines.',
        deliverables: ['Patient Journey Architecture', 'Accessibility Compliance Plan', 'EHR Data Synchronization Blueprint'],
      },
      {
        step: '02',
        title: 'Patient Portal & Scheduling Engine Sprint',
        description: 'Building the responsive mobile-first portal, self-service appointment scheduler, and two-way SMS reminder pipelines.',
        deliverables: ['Patient Web/Mobile App', 'Scheduling Engine Microservice', 'SMS/Email Notification Queue'],
      },
      {
        step: '03',
        title: 'EHR Synchronization & Care Journey Engine',
        description: 'Connecting FHIR patient feeds, embedding post-discharge symptom surveys, and configuring clinician alert escalations.',
        deliverables: ['FHIR Patient Connectors', 'Care Pathway Workflow Engine', 'Clinician Escalation Panel'],
      },
      {
        step: '04',
        title: 'Pilot Launch & Patient Adoption Campaign',
        description: 'Rolling out the engagement suite to initial clinic cohorts, measuring appointment attendance lift, and optimizing onboarding flows.',
        deliverables: ['Production Cluster Deployment', 'Adoption Analytics Dashboard', 'Clinic Staff Training Kit'],
      },
    ],
    deliverables: [
      { title: 'Patient Web & Mobile Portal Codebase', category: 'Codebase', description: 'Fully branded React / React Native applications with 100% intellectual property ownership.', format: 'Git Repository' },
      { title: 'Automated Care Pathway Workflow Engine', category: 'Workflow', description: 'Configurable visual workflow orchestrator for post-discharge protocols and patient surveys.', format: 'Microservice & Console' },
      { title: 'Self-Service Scheduling & Reminder Microservice', category: 'Service', description: 'High-availability calendar booking service with two-way Twilio SMS and SendGrid integration.', format: 'Dockerized Microservice' },
      { title: 'WCAG 2.1 AA Accessibility Certification', category: 'Compliance', description: 'Third-party audit report confirming compliance with international digital accessibility standards.', format: 'Audit Certificate' },
    ],
    techStack: [
      { category: 'Frontend Platforms', items: ['React', 'Next.js', 'React Native (iOS/Android)', 'Tailwind CSS'] },
      { category: 'Communication & Messaging', items: ['Twilio SMS / Voice', 'SendGrid', 'Firebase Cloud Messaging (Push)', 'WebSockets'] },
      { category: 'Backend & Data', items: ['Node.js (NestJS)', 'Go', 'PostgreSQL', 'Redis', 'Docker'] },
      { category: 'Healthcare Integrations', items: ['HL7 FHIR R4', 'Epic MyChart Interop', 'Cerner HealtheLife', 'Stripe Payments'] },
    ],
    caseStudyQuote: {
      quote: 'Neominds redesigned our regional hospital patient engagement platform. Our patient portal adoption jumped to 78%, and automated SMS appointment workflows cut patient no-shows by 44% in 6 months.',
      author: 'Marcus Brody',
      role: 'VP of Patient Experience',
      company: 'Valley Health Network',
      metric: '44% Drop in Clinic No-Shows',
    },
    faqs: [
      { question: 'How do you ensure the patient portal is easy for elderly patients to use?', answer: 'We adhere strictly to WCAG 2.1 AA accessibility standards, implementing high-contrast typography, screen reader optimizations, simplified plain-language navigation, and large tap targets.' },
      { question: 'Can patients access the portal using biometric authentication on their phones?', answer: 'Yes. Our mobile applications integrate with Apple Face ID and Android BiometricPrompt, allowing patients to securely authenticate in seconds without memorizing complex passwords.' },
      { question: 'Does the scheduling system prevent double-booking across different clinic locations?', answer: 'Yes. Our real-time scheduling engine utilizes distributed database locks and bidirectionally syncs with clinician calendars, instantly updating availability across all platforms.' },
      { question: 'Can family members or legal guardians manage care on behalf of elderly relatives or minors?', answer: 'Yes. The platform includes full healthcare proxy and delegated access controls, allowing authorized caregivers to switch between patient profiles with clear legal authorization records.' },
    ],
  },

  'medical-ai-solutions': {
    id: 'medical-ai-solutions',
    slug: 'medical-ai-solutions',
    title: 'Medical AI Solutions',
    tagline: 'Clinical Decision Support, AI Diagnostic Assistance & Medical Imaging Models',
    category: 'AI & Intelligence',
    heroBadge: 'HealthTech Artificial Intelligence',
    heroHeadline: 'Evidence-Based & Certified',
    heroHeadlineHighlight: 'Medical AI & Diagnostic Models',
    heroDescription:
      'Accelerate clinical breakthroughs while adhering to the highest standards of medical safety. We build AI clinical decision support systems (CDSS), medical imaging analysis models (DICOM / computer vision), automated clinical documentation scribes, and predictive risk engines.',
    metrics: [
      { value: '98.6%', label: 'Diagnostic Sensitivity' },
      { value: '< 2.4 sec', label: 'Imaging Inference Latency' },
      { value: '100%', label: 'HIPAA & FDA SaMD Compliant' },
      { value: 'Zero', label: 'Model Hallucinations' },
    ],
    capabilities: [
      {
        title: 'Clinical Decision Support Systems (CDSS)',
        description:
          'Evidence-based real-time clinical assistants analyzing patient history, lab results, and vitals to flag early sepsis warnings, drug interactions, and rare disease indicators.',
        tags: ['Evidence-Based CDSS', 'Early Sepsis Warning', 'Drug Conflict Flags', 'Clinical Practice Guidelines'],
      },
      {
        title: 'DICOM Medical Imaging Computer Vision Models',
        description:
          'Deep convolutional neural networks and vision transformers segmenting and classifying X-rays, CT scans, and MRIs for oncology, radiology, and cardiology workflows.',
        tags: ['DICOM Imaging', 'Vision Transformers', 'Tumor Segmentation', 'Radiology AI'],
      },
      {
        title: 'Ambient Clinical Voice Scribes & Documentation AI',
        description:
          'Whisper-powered ambient listening microphones transcribing doctor-patient dialogues into structured SOAP notes with automated ICD-10 and CPT coding suggestions.',
        tags: ['Ambient AI Scribes', 'SOAP Note Generation', 'Automated CPT Coding', 'Medical Whisper Model'],
      },
      {
        title: 'Predictive Patient Deterioration & Readmission Risk',
        description:
          'Machine learning risk stratification algorithms predicting 30-day hospital readmissions, ICU transfer risks, and post-discharge complication likelihood.',
        tags: ['Readmission Risk ML', 'ICU Transfer Predictions', 'Risk Stratification', 'Survival Analysis'],
      },
      {
        title: 'Private On-Premise Clinical LLMs (Air-Gapped)',
        description:
          'Fine-tuned open-weights medical foundation models (Llama 3 Med, BioMistral) deployed inside private hospital GPU enclaves with zero external cloud transmission.',
        tags: ['Private Clinical LLMs', 'Air-Gapped Deployments', 'BioMistral / Med-Llama', 'On-Premise GPUs'],
      },
      {
        title: 'FDA Software as a Medical Device (SaMD) Validation',
        description:
          'Rigorous clinical validation harnesses measuring algorithmic bias, sensitivity, specificity, and generating full 510(k) pre-market submission technical documentation.',
        tags: ['FDA SaMD Framework', '510(k) Audit Trails', 'Algorithmic Bias Testing', 'Clinical Validation'],
      },
    ],
    processSteps: [
      {
        step: '01',
        title: 'Clinical Problem Definition & Dataset Curation',
        description: 'Collaborating with clinical specialists to define model performance targets, curate de-identified DICOM/EHR training sets, and structure IRB approvals.',
        deliverables: ['Clinical Protocol Specification', 'De-Identification Pipeline', 'IRB & Ethics Documentation'],
      },
      {
        step: '02',
        title: 'Model Training, Fine-Tuning & Quantization',
        description: 'Training deep neural networks on specialized medical hardware with multi-fold cross-validation and strict ground-truth verification.',
        deliverables: ['Trained Model Weights', 'Validation Sensitivity Curve', 'Quantized Inference Checkpoint'],
      },
      {
        step: '03',
        title: 'EHR Integration & Clinical Usability Trials',
        description: 'Deploying the model via standardized HL7 FHIR and DICOM routers directly into clinician PACS viewers with explainable visual heatmaps (Grad-CAM).',
        deliverables: ['PACS Viewer Plugin', 'FHIR Inference API', 'Grad-CAM Explainability Module'],
      },
      {
        step: '04',
        title: 'Clinical Audit, Monitoring & Regulatory Filing',
        description: 'Conducting continuous post-market surveillance for model drift, auditing inference logs, and compiling technical dossiers for regulatory review.',
        deliverables: ['Post-Market Surveillance Monitor', 'FDA Technical Dossier', 'Clinical Governance Guide'],
      },
    ],
    deliverables: [
      { title: 'Trained Medical Model Checkpoints & Pipeline', category: 'Model Weights', description: 'Optimized PyTorch / TensorRT weights certified for radiology and clinical NLP.', format: 'Safetensors / ONNX Checkpoints' },
      { title: 'DICOM / PACS Viewer Clinical Integration Plugin', category: 'Application', description: 'Web-based zero-footprint medical imaging viewer with real-time AI overlay heatmaps.', format: 'Web Plugin & SDK' },
      { title: 'Ambient Clinical Scribe Engine', category: 'Service', description: 'Local microphone stream processor converting clinical dialogue to structured JSON medical records.', format: 'Dockerized Microservice' },
      { title: 'FDA SaMD Regulatory & Clinical Dossier', category: 'Compliance', description: 'Comprehensive algorithmic verification, sensitivity benchmarks, and risk mitigation protocols.', format: 'Formal Technical PDF' },
    ],
    techStack: [
      { category: 'AI & Deep Learning', items: ['PyTorch', 'TensorRT', 'MONAI (Medical Imaging)', 'HuggingFace', 'OpenCV'] },
      { category: 'Medical Imaging', items: ['DICOM Standard', 'Cornerstone.js', 'OHIF Viewer', 'Orthanc Server'] },
      { category: 'Clinical Speech & NLP', items: ['Fine-Tuned Whisper', 'BioBERT', 'spaCy Med7', 'vLLM'] },
      { category: 'Infrastructure', items: ['NVIDIA Triton Server', 'AWS GovCloud', 'RunPod GPU Enclave', 'Docker'] },
    ],
    caseStudyQuote: {
      quote: 'Neominds engineered our oncology radiology AI assistance tool. In clinical trials across 3 hospitals, it detected early pulmonary nodules with 98.6% sensitivity while shaving 40% off radiologist reading times.',
      author: 'Dr. Evelyn Reed',
      role: 'Director of AI Research',
      company: 'Biomedical Imaging Institute',
      metric: '98.6% Sensitivity for Early Nodules',
    },
    faqs: [
      { question: 'How do you prevent hallucinations in clinical decision support systems?', answer: 'We eliminate free-form hallucination by grounding models strictly in validated medical ontologies (UMLS, SNOMED CT) and clinical practice guidelines, requiring multi-citation verification for every suggestion.' },
      { question: 'Can the models run entirely on-premise without sending patient data to public clouds?', answer: 'Yes. We deploy optimized, quantized models on private on-premise GPU clusters inside the hospital firewall, ensuring zero bytes of patient data leave the local network.' },
      { question: 'How do clinicians understand why the AI made a specific recommendation?', answer: 'We build explainable AI architectures: for imaging, we provide visual Grad-CAM activation heatmaps showing the exact pixel regions considered; for text, we display explicit clinical rule citations.' },
      { question: 'Does your team have experience preparing technical files for FDA 510(k) clearance?', answer: 'Yes. We structure software architecture, validation protocols, verification test harnesses, and risk mitigation files in strict compliance with FDA Software as a Medical Device (SaMD) guidelines.' },
    ],
  },

  'healthcare-analytics': {
    id: 'healthcare-analytics',
    slug: 'healthcare-analytics',
    title: 'Healthcare Analytics',
    tagline: 'Population Health Analytics, Clinical Telemetry & Value-Based Care BI',
    category: 'Core Engineering',
    heroBadge: 'HealthTech Data & Analytics',
    heroHeadline: 'Predictive Intelligence &',
    heroHeadlineHighlight: 'Healthcare Analytics Platforms',
    heroDescription:
      'Unlock actionable insights across clinical, financial, and operational silos. We architect population health management engines, value-based care risk models, hospital operational BI dashboards, and CMS quality measure reporting pipelines.',
    metrics: [
      { value: '4.2M+', label: 'Patient Records Analyzed' },
      { value: '< 400ms', label: 'Population Query Speed' },
      { value: '100%', label: 'CMS Quality Measure Ready' },
      { value: '$3.8M', label: 'Average Value-Based Incentive Captured' },
    ],
    capabilities: [
      {
        title: 'Population Health Management & Risk Stratification',
        description:
          'Aggregating longitudinal health records across diverse provider networks to classify patient cohorts into actionable risk tiers (Charlson Comorbidity, CMS-HCC).',
        tags: ['Population Health', 'CMS-HCC Risk Scoring', 'Longitudinal Records', 'Comorbidity Tracking'],
      },
      {
        title: 'Value-Based Care & ACO Performance Analytics',
        description:
          'Tracking benchmark expenditures, shared savings projections, quality measure performance (MIPS, HEDIS), and out-of-network leakage metrics.',
        tags: ['ACO Metrics', 'MIPS / HEDIS Reporting', 'Shared Savings Projections', 'Network Leakage'],
      },
      {
        title: 'Hospital Operational & Capacity Telemetry',
        description:
          'Real-time dashboards monitoring emergency department throughput, average length of stay (ALOS), operating room utilization, and nurse staffing ratios.',
        tags: ['ED Throughput', 'Length of Stay (ALOS)', 'OR Utilization', 'Staffing Telemetry'],
      },
      {
        title: 'Clinical Data Lakehouse Architecture (FHIR / OMOP)',
        description:
          'Harmonizing multi-EHR data into standard OMOP Common Data Models (CDM) and FHIR data lakes for clinical research and multi-center clinical trials.',
        tags: ['OMOP Common Data Model', 'FHIR Data Lakehouse', 'Clinical Research', 'Snowflake / Databricks'],
      },
      {
        title: 'Infection Control & Outbreak Surveillance Tracking',
        description:
          'Automated surveillance algorithms scanning microbiology reports and vitals to detect hospital-acquired infections (HAIs) and alert infection control teams.',
        tags: ['HAI Surveillance', 'Outbreak Detection', 'Microbiology Tracking', 'Automated Alerts'],
      },
      {
        title: 'Automated Regulatory Quality Measure Reporting',
        description:
          'End-to-end extraction and automated calculation of CMS, Joint Commission, and state health department regulatory compliance reporting filings.',
        tags: ['CMS Regulatory Reporting', 'Joint Commission Data', 'Audit Trails', 'Export Pipelines'],
      },
    ],
    processSteps: [
      {
        step: '01',
        title: 'Clinical Data Audit & Lakehouse Architecture',
        description: 'Auditing legacy EHR databases, claims files (837/835), lab feeds, and structuring the OMOP/FHIR transformation schemas.',
        deliverables: ['Healthcare Data Lakehouse Blueprint', 'OMOP Data Model Mapping', 'HIPAA De-Identification Protocol'],
      },
      {
        step: '02',
        title: 'Streaming Ingestion & Standardization Pipeline',
        description: 'Constructing automated dbt transformations, Apache Spark / Flink streaming consumers, and data quality check harnesses.',
        deliverables: ['ETL Transformation Scripts', 'Automated Quality Assertion Suite', 'OMOP Structured Tables'],
      },
      {
        step: '03',
        title: 'Risk Stratification & Interactive BI Console',
        description: 'Implementing CMS-HCC risk scoring algorithms, HEDIS measure calculators, and developing the reactive clinician analytics dashboard.',
        deliverables: ['Risk Scoring Microservice', 'Healthcare BI Dashboard', 'Cohort Filtering Engine'],
      },
      {
        step: '04',
        title: 'Validation Against General Ledgers & Go-Live',
        description: 'Cross-verifying clinical analytics metrics with medical billing records and deploying to hardened, HIPAA-compliant cloud environments.',
        deliverables: ['Clinical Reconciliation Report', 'Production Deployment Pipeline', 'Executive Training Session'],
      },
    ],
    deliverables: [
      { title: 'Healthcare Data Lakehouse & ETL Codebase', category: 'Codebase', description: 'Production-ready Apache Spark, dbt, and SQL pipelines harmonizing multi-EHR patient data.', format: 'Git Repository' },
      { title: 'Population Health & Quality BI Application', category: 'Application', description: 'Next.js / TypeScript analytics portal with cohort exploration and MIPS/HEDIS metric dashboards.', format: 'Web Application' },
      { title: 'CMS-HCC Risk Adjustment Calculation Engine', category: 'Algorithms', description: 'Verified algorithmic implementation calculating patient risk adjustment factor (RAF) scores.', format: 'Python / SQL Package' },
      { title: 'Regulatory Compliance Audit Dossier', category: 'Documentation', description: 'Formal lineage documentation certifying data transformations and security encryption standards.', format: 'PDF Package' },
    ],
    techStack: [
      { category: 'Data Lakehouse', items: ['Snowflake', 'Databricks', 'ClickHouse', 'PostgreSQL', 'DuckDB'] },
      { category: 'Data Engineering', items: ['Apache Spark', 'dbt', 'Apache Airflow', 'Kafka', 'OMOP CDM'] },
      { category: 'Frontend Analytics', items: ['Next.js', 'Apache ECharts', 'D3.js', 'Tailwind CSS'] },
      { category: 'Healthcare Formats', items: ['HL7 FHIR R4', 'EDI 837/835', 'DICOM', 'SNOMED CT', 'RxNorm'] },
    ],
    caseStudyQuote: {
      quote: 'Neominds built our Accountable Care Organization (ACO) population health analytics platform. We unified data across 14 independent clinics, identified high-risk chronic patient cohorts, and captured $3.8M in shared savings.',
      author: 'Warren Hastings',
      role: 'Chief Analytics Officer',
      company: 'Keystone Health Alliance',
      metric: '$3.8M in Shared Savings Captured',
    },
    faqs: [
      { question: 'How do you combine data from multiple clinics running different EHR software?', answer: 'We extract raw data through FHIR APIs or database replication, mapping all clinical concepts into standardized medical ontologies (OMOP CDM, SNOMED, LOINC) to create a single unified longitudinal patient record.' },
      { question: 'Can the platform calculate our MIPS and HEDIS quality scores automatically?', answer: 'Yes. Our engines include pre-built certified calculation formulas for common CMS and NCQA quality measures, eliminating hundreds of manual staff audit hours every quarter.' },
      { question: 'How does the system ensure patient privacy during clinical research analysis?', answer: 'We employ automated de-identification pipelines conforming to HIPAA Safe Harbor guidelines, scrubbing patient identifiers (names, MRNs, exact dates) while maintaining clinical research utility.' },
      { question: 'Can executives and physicians access reports securely from tablet devices?', answer: 'Yes. The analytics portal is fully responsive, secured behind multi-factor authentication (MFA) and single sign-on (SSO), enabling secure access on tablets and desktop workstations.' },
    ],
  },

  'healthcare-automation': {
    id: 'healthcare-automation',
    slug: 'healthcare-automation',
    title: 'Healthcare Automation',
    tagline: 'Intelligent Process Automation, Prior Authorization & Clinical Bot Workflows',
    category: 'Core Engineering',
    heroBadge: 'HealthTech Robotic Automation',
    heroHeadline: 'Streamlined & Error-Free',
    heroHeadlineHighlight: 'Healthcare Process Automation',
    heroDescription:
      'Eliminate administrative burnout across healthcare operations. We engineer automated prior authorization processing bots, patient referral routing systems, automated revenue cycle reconciliation, and intelligent staff scheduling workflows.',
    metrics: [
      { value: '82%', label: 'Reduction in Prior Auth Turnaround' },
      { value: '$45', label: 'Average Cost Saved Per Claim' },
      { value: '99.8%', label: 'Automation Accuracy Rate' },
      { value: 'Zero', label: 'Data Entry Backlog' },
    ],
    capabilities: [
      {
        title: 'Automated Prior Authorization (Prior Auth) Bots',
        description:
          'Robotic and API-driven automation extracting clinical chart documentation, matching payer approval rules, and submitting prior authorization requests in minutes.',
        tags: ['Prior Auth Automation', 'Payer Portal Integration', 'Clinical Chart Parsing', 'Sub-Minute Approvals'],
      },
      {
        title: 'Intelligent Referral Management & Routing',
        description:
          'Automated parsing of inbound fax and PDF medical referrals, patient insurance validation, and algorithmic routing to appropriate specialty physicians.',
        tags: ['Referral OCR', 'Specialty Matching', 'Inbound Fax Automation', 'Insurance Validation'],
      },
      {
        title: 'Revenue Cycle Denial Management & Auto-Resubmission',
        description:
          'Automated denial code categorization, missing documentation attachment, appeal letter generation, and electronic secondary claim resubmission.',
        tags: ['Denial Auto-Remediation', 'Appeal Letter Generation', 'Secondary Claim Filing', 'CARC/RARC Parsing'],
      },
      {
        title: 'Automated Physician Credentialing & License Verification',
        description:
          'Bots continuously monitoring state medical boards, DEA registrations, and NPI registries to automate credential verification and alert before expirations.',
        tags: ['Credential Verification', 'State Board Scrapers', 'NPI Registry APIs', 'Compliance Tracking'],
      },
      {
        title: 'Clinical Lab Result Notification & Follow-Up Triggers',
        description:
          'Automated workflows categorizing incoming lab results, alerting physicians to critical out-of-range values, and dispatching patient notifications for normal findings.',
        tags: ['Lab Result Sorting', 'Critical Value Alerts', 'Patient Messaging', 'Clinician Escalations'],
      },
      {
        title: 'Automated Operating Room & Staff Shift Scheduling',
        description:
          'Optimization engines scheduling on-call surgical squads, nursing shifts, and anesthesia coverage according to union rules, fatigue policies, and case load.',
        tags: ['Staff Scheduling', 'Union Rule Compliance', 'Fatigue Policies', 'On-Call Automation'],
      },
    ],
    processSteps: [
      {
        step: '01',
        title: 'Administrative Bottleneck Assessment',
        description: 'Analyzing clinical back-office hours spent on prior authorizations, claim appeals, and manual data transcription to calculate automation ROI.',
        deliverables: ['Automation Opportunity Matrix', 'Payer Portal Workflow Map', 'Projected Cost Savings Model'],
      },
      {
        step: '02',
        title: 'Bot Engineering & Payer Integration Sprint',
        description: 'Building API and headless browser automation connectors for major health plans (UnitedHealthcare, Anthem, Aetna, Cigna).',
        deliverables: ['Prior Auth Automation Engine', 'Payer Connector Suite', 'Clinical Chart Parser'],
      },
      {
        step: '03',
        title: 'Exceptions Handling & Clinician Review Dashboard',
        description: 'Configuring human-in-the-loop exception workflows, where low-confidence cases are routed instantly to staff for one-click verification.',
        deliverables: ['Human-in-the-Loop Workspace', 'Exception Alert Manager', 'Audit Trail Recorder'],
      },
      {
        step: '04',
        title: 'Production Deployment & Continuous Payer Sync',
        description: 'Deploying the automation fleet with automated self-healing scripts that adapt to changes in external insurance payer web portals.',
        deliverables: ['Production Automation Fleet', 'Self-Healing Monitor', 'Staff Operations Manual'],
      },
    ],
    deliverables: [
      { title: 'Healthcare Process Automation Suite Source Code', category: 'Codebase', description: 'Enterprise Python / TypeScript automation bots with zero ongoing vendor licensing fees.', format: 'Git Repository' },
      { title: 'Prior Authorization & Referral Parser Microservice', category: 'Microservice', description: 'High-accuracy OCR and NLP pipeline extracting clinical criteria from unstructured medical PDFs.', format: 'Docker Container' },
      { title: 'Human-in-the-Loop Exception Management Console', category: 'Application', description: 'Web interface allowing clinic administrative staff to review and approve automated submissions.', format: 'Web Application' },
      { title: 'Payer Portal Integration & Self-Healing Playbook', category: 'Operations', description: 'Complete documentation for maintaining automated connections with commercial and state payers.', format: 'Operational PDF' },
    ],
    techStack: [
      { category: 'Automation Engines', items: ['Python', 'Playwright', 'Node.js', 'Celery Worker Queues', 'Redis'] },
      { category: 'Document & OCR AI', items: ['LayoutLM Document AI', 'AWS Textract', 'Tesseract OCR', 'OpenCV'] },
      { category: 'Healthcare Protocols', items: ['HL7 FHIR R4', 'EDI 278 (Prior Auth)', 'EDI 835 / 837', 'Surescripts'] },
      { category: 'Cloud & Security', items: ['AWS GovCloud (HIPAA)', 'Docker / Kubernetes', 'HashiCorp Vault', 'KMS'] },
    ],
    caseStudyQuote: {
      quote: 'Neominds built our automated prior authorization and referral intake system. We reduced our authorization turnaround time by 82% and saved our clinical team over 320 hours of manual phone and fax paperwork every month.',
      author: 'Dr. Raymond Vance',
      role: 'Chief Medical Officer',
      company: 'Midwest Orthopedic Specialists',
      metric: '82% Faster Prior Auth Turnaround',
    },
    faqs: [
      { question: 'What happens when an insurance payer changes their web portal layout?', answer: 'Our bots feature automated self-healing selectors and visual element recognition. If an unresolvable layout change occurs, the transaction is gracefully routed to our human-in-the-loop dashboard while triggering an alert.' },
      { question: 'Does the automation integrate with our existing electronic health record (EHR)?', answer: 'Yes. Our automation modules integrate directly via FHIR APIs, database webhooks, or automated EHR desktop UI hooks to pull clinical records and write back approval confirmation numbers.' },
      { question: 'How is patient Protected Health Information (PHI) secured during automation runs?', answer: 'All automation workers execute inside dedicated, ephemeral, encrypted containers within your private HIPAA VPC. No patient data is ever cached on local workstations or external vendor servers.' },
      { question: 'Do we have to pay recurring third-party robotic process automation (RPA) license fees?', answer: 'No. We engineer custom automation pipelines using open-source frameworks (Playwright, Python, Celery), giving you 100% intellectual property ownership with zero recurring per-bot license costs.' },
    ],
  },

  /* =========================================================================
     ARTIFICIAL INTELLIGENCE SERVICES (5 SERVICES)
     ========================================================================= */
  'ai-product-engineering': {
    id: 'ai-product-engineering',
    slug: 'ai-product-engineering',
    title: 'AI Product Engineering',
    tagline: 'Full-Cycle AI-Native Software & Foundation Model Integration',
    category: 'AI & Intelligence',
    heroBadge: 'Artificial Intelligence Practice',
    heroHeadline: 'Next-Generation',
    heroHeadlineHighlight: 'AI Product Engineering',
    heroDescription:
      'Build software where artificial intelligence is the core engine, not an afterthought. We design, architect, and ship AI-native applications—combining responsive frontend experiences with stateful foundation model orchestration, vector data pipelines, and deterministic guardrails.',
    metrics: [
      { value: '3.8x', label: 'Engineering Velocity' },
      { value: '< 200ms', label: 'Streaming AI Latency' },
      { value: '99.9%', label: 'Inference SLA' },
      { value: '100%', label: 'Private Data Enclave' },
    ],
    capabilities: [
      {
        title: 'Full-Stack AI-Native Application Architecture',
        description:
          'End-to-end product engineering from user interface design to model routing, building interactive AI copilots, generative workspaces, and autonomous software products.',
        tags: ['AI Copilots', 'Generative Workspaces', 'Streaming UIs', 'Microservices'],
      },
      {
        title: 'Foundation Model Routing & Cost Optimization',
        description:
          'Smart model gateways (OpenAI, Anthropic, Gemini, open-source Llama 3) dynamically routing prompts based on complexity, token budget, and latency requirements.',
        tags: ['Model Gateways', 'Dynamic Routing', 'Token Optimization', 'Prompt Caching'],
      },
      {
        title: 'Streaming Real-Time User Interfaces',
        description:
          'Fluid, reactive user interfaces utilizing Server-Sent Events (SSE) and WebSockets to deliver instant token streaming, optimistic UI updates, and interactive canvas components.',
        tags: ['SSE Token Streaming', 'Optimistic UI', 'Interactive Canvas', 'React / Next.js'],
      },
      {
        title: 'Retrieval-Augmented Generation (RAG) Architecture',
        description:
          'Enterprise knowledge retrieval systems combining vector search, BM25 keyword matching, and cross-encoder re-ranking for verifiable factual accuracy.',
        tags: ['Hybrid Search', 'Vector Embeddings', 'Cross-Encoders', 'Source Citations'],
      },
      {
        title: 'Prompt Engineering & Automated Evaluation Harnesses',
        description:
          'Systematic prompt design with few-shot optimizations, structured JSON output validation, and CI/CD automated regression testing via Ragas and TruLens.',
        tags: ['Few-Shot Optimization', 'Structured JSON Output', 'Ragas Testing', 'CI/CD Regression'],
      },
      {
        title: 'Enterprise Security Guardrails & Hallucination Defense',
        description:
          'Multi-layered safety architectures implementing PII masking, jailbreak prevention, content moderation, and deterministic schema enforcement.',
        tags: ['NeMo Guardrails', 'PII Masking', 'Jailbreak Defenses', 'Deterministic Schema'],
      },
    ],
    processSteps: [
      {
        step: '01',
        title: 'Product Discovery & AI Feasibility Scoping',
        description: 'Defining core user journeys, identifying highest-ROI AI interaction paradigms, establishing latency/cost budgets, and selecting foundation models.',
        deliverables: ['AI Product Architecture Blueprint', 'Model Selection Matrix', 'Token Economics Forecast'],
      },
      {
        step: '02',
        title: 'Model Routing & Core RAG Pipeline Sprint',
        description: 'Implementing vector ingestion pipelines, semantic caching layers, and the high-throughput inference gateway.',
        deliverables: ['Vector Database Index', 'Inference Gateway Service', 'Evaluation Test Harness'],
      },
      {
        step: '03',
        title: 'Streaming Frontend & Copilot UI Sprint',
        description: 'Developing the responsive web and mobile interfaces with real-time token streaming, rich Markdown/code rendering, and interactive feedback.',
        deliverables: ['Next.js AI Application', 'Interactive Canvas Components', 'Mobile Copilot SDK'],
      },
      {
        step: '04',
        title: 'Production LLMOps & Continuous Evaluation',
        description: 'Deploying with full observability telemetry (LangSmith / OpenTelemetry), token burn dashboards, and automated accuracy regression gates.',
        deliverables: ['Production Cluster Deployment', 'LLMOps Observability Dashboard', '24/7 SLA Support Agreement'],
      },
    ],
    deliverables: [
      { title: 'Full AI Product Application Codebase', category: 'Codebase', description: 'Clean, documented TypeScript / Python codebase with 100% intellectual property ownership.', format: 'Git Repository' },
      { title: 'High-Performance RAG Ingestion Pipeline', category: 'Pipeline', description: 'Automated data chunking, vector embedding, and metadata synchronization microservice.', format: 'Dockerized Microservice' },
      { title: 'Automated Evaluation & Benchmark Suite', category: 'Testing', description: 'CI/CD automated regression test suite evaluating accuracy, hallucination rates, and latency.', format: 'Python Test Suite' },
      { title: 'LLMOps Telemetry & Cost Dashboard', category: 'Operations', description: 'Real-time monitoring console tracking token usage, latency percentiles, and cache hit rates.', format: 'Web Dashboard' },
    ],
    techStack: [
      { category: 'AI Models', items: ['OpenAI GPT-4o', 'Claude 3.5 Sonnet', 'Llama 3.3', 'Mistral Large', 'DeepSeek V3'] },
      { category: 'AI Frameworks', items: ['LangChain', 'LlamaIndex', 'vLLM', 'Ollama', 'HuggingFace'] },
      { category: 'Vector Databases', items: ['pgvector', 'Pinecone', 'Qdrant', 'Milvus', 'ChromaDB'] },
      { category: 'Frontend & App', items: ['Next.js (App Router)', 'React', 'TypeScript', 'Tailwind CSS', 'WebSockets'] },
    ],
    caseStudyQuote: {
      quote: 'Neominds engineered our flagship AI legal contract analysis platform from concept to launch in 4 months. The system reviews 100-page enterprise agreements in 6 seconds with complete citation verification.',
      author: 'Julian Thorne',
      role: 'Chief Product Officer',
      company: 'LexisTech Solutions',
      metric: '100-Page Contracts Analyzed in 6s',
    },
    faqs: [
      { question: 'What makes AI product engineering different from standard software development?', answer: 'AI product engineering combines non-deterministic model outputs with deterministic software systems, requiring specialized architectures for streaming latency, semantic caching, automated evaluation harnesses, and fallback state machines.' },
      { question: 'How do you keep OpenAI and Anthropic token costs manageable at scale?', answer: 'We implement semantic caching (answering repeated queries with zero token cost), dynamic model routing (using lightweight models for simple extraction and frontier models for complex reasoning), and aggressive prompt minification.' },
      { question: 'Can the application run on private open-source models if we cannot use public APIs?', answer: 'Yes. We architect our inference layers to be completely model-agnostic, easily switching between proprietary APIs and private, self-hosted open-weights models (like Llama 3 or Mistral) on your own GPU infrastructure.' },
      { question: 'How do you guarantee that the AI outputs follow a valid data schema for our frontend?', answer: 'We utilize structured JSON schema enforcement at the model level (e.g., instructor, OpenAI structured outputs, Pydantic) ensuring 100% syntactically valid JSON responses that never break your UI components.' },
    ],
  },

  'applied-ai': {
    id: 'applied-ai',
    slug: 'applied-ai',
    title: 'Applied AI',
    tagline: 'Practical Machine Learning, Computer Vision & Predictive Enterprise Systems',
    category: 'AI & Intelligence',
    heroBadge: 'Artificial Intelligence Practice',
    heroHeadline: 'High-Impact Enterprise',
    heroHeadlineHighlight: 'Applied Artificial Intelligence',
    heroDescription:
      'Solve tangible operational challenges with battle-tested machine learning. We design, train, and deploy predictive models, computer vision defect inspection systems, multi-lingual document parsing pipelines, and anomaly detection algorithms.',
    metrics: [
      { value: '99.4%', label: 'Inspection Accuracy' },
      { value: '45ms', label: 'Real-Time Inference' },
      { value: '3.2x', label: 'Productivity Multiplication' },
      { value: '100%', label: 'On-Premise Private ML' },
    ],
    capabilities: [
      {
        title: 'Computer Vision & Visual Quality Inspection',
        description:
          'High-speed automated defect inspection on manufacturing lines, safety gear compliance verification, and satellite imagery analysis using YOLOv10 and custom convolutional models.',
        tags: ['YOLOv10', 'Defect Inspection', 'OpenCV', 'Edge TensorRT'],
      },
      {
        title: 'Intelligent Document Processing (IDP) & OCR',
        description:
          'Layout-aware deep learning pipelines parsing complex multi-page invoices, shipping manifests, tax forms, and medical records with structured table extraction.',
        tags: ['LayoutLM', 'Document OCR', 'Table Extraction', 'Invoices & Forms'],
      },
      {
        title: 'Time-Series Forecasting & Demand Optimization',
        description:
          'Predictive neural networks forecasting supply chain inventory requirements, retail foot traffic, energy consumption curves, and raw material pricing trends.',
        tags: ['Time-Series Forecasting', 'Prophet & XGBoost', 'Supply Chain ML', 'Demand Optimization'],
      },
      {
        title: 'Voice AI, Audio Transcription & Synthesis',
        description:
          'Ultra-low latency speech-to-text, real-time emotion and sentiment analysis in customer service audio, and natural-sounding custom brand voice synthesis.',
        tags: ['Whisper Speech-to-Text', 'ElevenLabs TTS', 'Voice Biometrics', 'Audio Sentiment'],
      },
      {
        title: 'Recommendation & Personalization Engines',
        description:
          'Collaborative filtering, two-tower neural recommender networks, and real-time contextual bandit algorithms delivering personalized product rankings.',
        tags: ['Two-Tower Recommenders', 'Collaborative Filtering', 'Contextual Bandits', 'Personalization'],
      },
      {
        title: 'Private Model Fine-Tuning & Edge Quantization',
        description:
          'Training and quantizing specialized models using LoRA / QLoRA to execute on edge devices, mobile chips, and affordable on-premise hardware without cloud latency.',
        tags: ['LoRA / QLoRA', 'Edge Quantization', 'TensorRT-LLM', 'On-Device AI'],
      },
    ],
    processSteps: [
      {
        step: '01',
        title: 'Data Feasibility & Baseline Benchmarking',
        description: 'Auditing client training datasets, measuring class imbalance, establishing baseline heuristic benchmarks, and determining required accuracy thresholds.',
        deliverables: ['Data Feasibility Scorecard', 'Dataset Curation Plan', 'Algorithmic Selection Matrix'],
      },
      {
        step: '02',
        title: 'Data Pipeline & Model Training Sprint',
        description: 'Constructing automated data augmentation pipelines, training candidate neural networks, and cross-validating on holdout test datasets.',
        deliverables: ['Automated Training Pipeline', 'Trained Model Checkpoints', 'Validation Confusion Matrix'],
      },
      {
        step: '03',
        title: 'Edge Optimization & API Containerization',
        description: 'Quantizing model weights to INT8/FP16, optimizing inference runtimes with TensorRT/ONNX, and packaging into scalable microservice containers.',
        deliverables: ['TensorRT Optimized Models', 'FastAPI Inference Microservice', 'Latency Benchmark Report'],
      },
      {
        step: '04',
        title: 'Production Deployment & Drift Monitoring',
        description: 'Deploying inference endpoints with automated data drift detectors (Evidently AI) and continuous retraining pipelines triggered on accuracy decline.',
        deliverables: ['Production Cluster Deployment', 'Model Drift Telemetry Dashboard', 'Operational Maintenance Guide'],
      },
    ],
    deliverables: [
      { title: 'Trained Machine Learning Model Checkpoints', category: 'Model Weights', description: 'Production-ready model weights in ONNX, TensorRT, and PyTorch formats.', format: 'Safetensors / ONNX Checkpoints' },
      { title: 'Automated Training & Data Ingestion Pipelines', category: 'Pipeline', description: 'Complete Python code automating dataset preprocessing, feature extraction, and model retraining.', format: 'Python Scripts & Dockerfiles' },
      { title: 'High-Throughput Inference API Microservice', category: 'Microservice', description: 'Containerized FastAPI / Triton inference service supporting concurrent batch and streaming requests.', format: 'Docker Container' },
      { title: 'Model Performance & Drift Monitoring Dashboard', category: 'Operations', description: 'Real-time Grafana / Evidently AI console tracking accuracy, latency, and distribution shifts.', format: 'Web Dashboard' },
    ],
    techStack: [
      { category: 'ML & Deep Learning', items: ['PyTorch', 'TensorFlow', 'XGBoost', 'LightGBM', 'Scikit-Learn'] },
      { category: 'Computer Vision & NLP', items: ['OpenCV', 'YOLOv10', 'HuggingFace Transformers', 'spaCy', 'Whisper'] },
      { category: 'Inference Runtimes', items: ['NVIDIA TensorRT', 'ONNX Runtime', 'Triton Inference Server', 'vLLM'] },
      { category: 'Data & Infrastructure', items: ['Python', 'Docker', 'Kubernetes', 'Apache Spark', 'Evidently AI'] },
    ],
    caseStudyQuote: {
      quote: 'Neominds engineered our computer vision quality control system across 6 industrial manufacturing lines. It inspects over 250,000 components daily with 99.4% accuracy, eliminating manual QA bottlenecks entirely.',
      author: 'Marcus Vance',
      role: 'VP of Manufacturing Engineering',
      company: 'Precision Components Corp',
      metric: '99.4% Defect Detection Accuracy',
    },
    faqs: [
      { question: 'How much proprietary data do we need to train a custom model?', answer: 'By leveraging modern transfer learning and foundation model fine-tuning (LoRA), we can achieve high production accuracy with as few as a few hundred to a few thousand labeled domain examples.' },
      { question: 'Can computer vision models run in real time directly on factory floor cameras?', answer: 'Yes. We optimize models using TensorRT and INT8 quantization, enabling real-time 60fps inference on embedded edge hardware like NVIDIA Jetson without requiring cloud connectivity.' },
      { question: 'How do you prevent model accuracy degradation over time (data drift)?', answer: 'We deploy automated data drift monitors that continuously compare production input distributions against baseline training data, alerting engineers or triggering automated retraining jobs when drift exceeds bounds.' },
      { question: 'Can you integrate machine learning predictions into our existing enterprise ERP or CRM?', answer: 'Yes. We package models into high-performance REST and gRPC microservices that easily integrate with SAP, Salesforce, custom SQL backends, and mobile apps.' },
    ],
  },

  'ai-agent-systems': {
    id: 'ai-agent-systems',
    slug: 'ai-agent-systems',
    title: 'AI Agent Systems',
    tagline: 'Stateful Multi-Agent Swarms, Tool-Augmented Reasoning & Autonomous Workflows',
    category: 'AI & Intelligence',
    heroBadge: 'Autonomous AI Practice',
    heroHeadline: 'Stateful & Bounded',
    heroHeadlineHighlight: 'Autonomous AI Agent Systems',
    heroDescription:
      'Move beyond simple chatbots to autonomous digital workforces. We architect stateful multi-agent systems using LangGraph, Reflexion loops, and secure sandboxed tool execution—enabling software swarms to research, reason, synthesize, and execute complex multi-step enterprise workflows.',
    metrics: [
      { value: '100%', label: 'Deterministic Bounds' },
      { value: '12x', label: 'Task Execution Speed' },
      { value: 'Zero', label: 'Unbounded Runaways' },
      { value: 'SOC 2', label: 'Sandboxed Tool Execution' },
    ],
    capabilities: [
      {
        title: 'Stateful Multi-Agent Orchestration (LangGraph & Swarms)',
        description:
          'Coordinated agent networks where specialized sub-agents (Researcher, Coder, Critic, Validator) collaborate across shared persistent memory state graphs.',
        tags: ['LangGraph', 'Multi-Agent Swarms', 'State Machines', 'Persistent Memory'],
      },
      {
        title: 'Autonomous Tool Execution & Safe Sandboxing',
        description:
          'Equipping agents with secure tools (SQL queries, Web scrapers, CRM updates, code execution) isolated inside ephemeral Docker/Firecracker microVM sandboxes.',
        tags: ['Tool Execution', 'Firecracker MicroVMs', 'Docker Sandboxes', 'API Integrations'],
      },
      {
        title: 'Self-Correcting Reflexion & Evaluation Loops',
        description:
          'Adversarial dual-agent verification loops where secondary critic agents continuously test, critique, and force re-execution before outputs are delivered to users.',
        tags: ['Reflexion Loops', 'Adversarial Verification', 'Self-Correction', 'Automated QA'],
      },
      {
        title: 'Human-in-the-Loop (HITL) Checkpoints & Approval Gates',
        description:
          'Configurable human approval gates pausing autonomous execution for high-stakes actions (financial transfers, mass emails, database writes).',
        tags: ['Human-in-the-Loop', 'Approval Gates', 'Execution Pauses', 'Audit Logs'],
      },
      {
        title: 'Hierarchical Task Planning & Dynamic Sub-Goal Decomposition',
        description:
          'Meta-planner agents decomposing ambiguous high-level enterprise instructions into structured, dependency-mapped DAG execution plans.',
        tags: ['DAG Task Planning', 'Sub-Goal Decomposition', 'Dynamic Re-Planning', 'Dependency Mapping'],
      },
      {
        title: 'Long-Term Episodic & Semantic Agent Memory',
        description:
          'Dual-tier memory architectures combining Redis short-term working context with vector/graph long-term recall of user preferences and historical decisions.',
        tags: ['Long-Term Memory', 'Episodic Recall', 'Vector Knowledge', 'User Personalization'],
      },
    ],
    processSteps: [
      {
        step: '01',
        title: 'Workflow Decomposition & Tool Scoping',
        description: 'Deconstructing target business processes into granular discrete tasks, defining permitted agent tools, and setting execution safety boundaries.',
        deliverables: ['Agent State Graph Topology', 'Tool Security Specification', 'Human-in-the-Loop Criteria'],
      },
      {
        step: '02',
        title: 'State Graph & Multi-Agent Prototyping',
        description: 'Implementing the multi-agent graph in LangGraph / Python, configuring tool execution sandboxes, and establishing persistent state stores.',
        deliverables: ['Working Multi-Agent Graph', 'Sandboxed Tool Execution Suite', 'State Store Database'],
      },
      {
        step: '03',
        title: 'Reflexion Loops & Adversarial Stress Testing',
        description: 'Subjecting agent swarms to edge-case stress testing, measuring task completion rates, and tuning critic agent feedback loops.',
        deliverables: ['Task Completion Scorecard', 'Reflexion Loop Tuning Log', 'Security Boundary Audit'],
      },
      {
        step: '04',
        title: 'Production Deployment & Observability Telemetry',
        description: 'Deploying with real-time agent execution visualizers (LangSmith / custom UI), token burn monitoring, and automated loop circuit breakers.',
        deliverables: ['Production Cluster Deployment', 'Live Agent Telemetry Console', 'Operational Runbook'],
      },
    ],
    deliverables: [
      { title: 'Full AI Agent System Codebase', category: 'Codebase', description: 'Production-ready Python / TypeScript multi-agent orchestration engine with clean state machines.', format: 'Git Repository' },
      { title: 'Secure Tool Execution Sandboxing Infrastructure', category: 'Infrastructure', description: 'Terraform and Docker scripts provisioning isolated environments for safe tool execution.', format: 'Docker & Terraform HCL' },
      { title: 'Human-in-the-Loop Review Dashboard', category: 'Application', description: 'Interactive web console allowing human operators to review paused tasks and approve actions.', format: 'Web Application' },
      { title: 'Agent Observability & Tracing Architecture', category: 'Observability', description: 'Integrated telemetry recording every intermediate reasoning thought, tool call, and token spend.', format: 'Telemetry Dashboard' },
    ],
    techStack: [
      { category: 'Agent Frameworks', items: ['LangGraph', 'LangChain', 'CrewAI', 'AutoGen', 'LlamaIndex Workflows'] },
      { category: 'Foundation Models', items: ['Claude 3.5 Sonnet (Tool Use)', 'GPT-4o', 'DeepSeek V3', 'Llama 3.3'] },
      { category: 'Sandboxing & Memory', items: ['Firecracker MicroVMs', 'Docker', 'Redis', 'PostgreSQL', 'pgvector'] },
      { category: 'Observability', items: ['LangSmith', 'OpenTelemetry', 'Datadog', 'Prometheus'] },
    ],
    caseStudyQuote: {
      quote: 'Neominds built our autonomous financial research agent swarm. Tasks that took our analyst team 3 days of manual data gathering across SEC filings are now executed and cross-verified in under 12 minutes.',
      author: 'David Sterling',
      role: 'Head of Quantitative Research',
      company: 'Aether Capital Management',
      metric: 'Research Time Cut from 3 Days to 12 Min',
    },
    faqs: [
      { question: 'How do you prevent agents from getting stuck in infinite loops or racking up massive API bills?', answer: 'We enforce hard execution bounds: maximum step counters, total token budgets per task, timeout circuit breakers, and state machine transitions that automatically escalate to human operators if progress stalls.' },
      { question: 'Is it safe to let AI agents execute code or query enterprise databases?', answer: 'Yes, because we strictly isolate all tool executions inside ephemeral Docker or Firecracker microVM sandboxes with read-only database connections and automated input sanitization filters.' },
      { question: 'Can humans step in and review high-risk actions before an agent proceeds?', answer: 'Absolutely. Our Human-in-the-Loop (HITL) architecture pauses execution at designated critical nodes (such as sending an external email or placing a trade), notifying human reviewers via Slack, email, or a web dashboard for one-click approval.' },
      { question: 'What foundation models work best for autonomous tool-calling agents?', answer: 'We primarily leverage Claude 3.5 Sonnet and GPT-4o due to their superior tool-use precision, complex instruction following, and resistance to reasoning drift during multi-turn workflows.' },
    ],
  },

  'intelligent-automation': {
    id: 'intelligent-automation',
    slug: 'intelligent-automation',
    title: 'Intelligent Automation',
    tagline: 'Cognitive RPA, Document AI & End-to-End Enterprise Process Optimization',
    category: 'AI & Intelligence',
    heroBadge: 'Enterprise Automation Practice',
    heroHeadline: 'End-to-End Cognitive &',
    heroHeadlineHighlight: 'Intelligent Process Automation',
    heroDescription:
      'Eliminate repetitive operational overhead across enterprise back-offices. We combine Robotic Process Automation (RPA), deep learning document extraction, automated API orchestration, and decision-tree logic to streamline complex business workflows.',
    metrics: [
      { value: '85%', label: 'Straight-Through Processing Rate' },
      { value: '-70%', label: 'Processing Cost Reduction' },
      { value: '99.9%', label: 'Data Accuracy SLA' },
      { value: 'Zero', label: 'Vendor License Lock-In' },
    ],
    capabilities: [
      {
        title: 'Cognitive Robotic Process Automation (RPA)',
        description:
          'Modern, code-driven software bots automating legacy desktop software, ERP data entry, and web portal interactions without expensive proprietary per-bot licenses.',
        tags: ['Code-Driven RPA', 'Headless Automation', 'Legacy ERP Sync', 'Zero License Fees'],
      },
      {
        title: 'Intelligent Document Processing (IDP)',
        description:
          'Deep learning document parsing extracting structured data from unstructured invoices, tax forms, bills of lading, and legal contracts with automatic validation.',
        tags: ['IDP Extraction', 'LayoutLM Neural Networks', 'Table Extraction', 'Validation Rules'],
      },
      {
        title: 'Automated Account Reconciliation & Matching',
        description:
          'High-speed reconciliation bots cross-referencing bank feeds, general ledger entries, and vendor invoices, automatically flagging discrepancies and posting matches.',
        tags: ['Automated Reconciliation', 'General Ledger Matching', 'Discrepancy Flags', 'Instant Posting'],
      },
      {
        title: 'Event-Driven Workflow Orchestration (n8n / Celery)',
        description:
          'Scalable background job queues processing millions of asynchronous enterprise tasks with automatic retries, dead-letter queues, and real-time webhook hooks.',
        tags: ['Celery & Redis', 'n8n Orchestration', 'Dead-Letter Queues', 'Event-Driven Webhooks'],
      },
      {
        title: 'Human-in-the-Loop (HITL) Exception Management',
        description:
          'Dedicated review consoles routing ambiguous low-confidence documents to human knowledge workers with highlighted bounding boxes for rapid one-click resolution.',
        tags: ['Exception Routing', 'Bounding Box Highlighting', 'One-Click Approvals', 'Active Learning'],
      },
      {
        title: 'Process Mining & Continuous Optimization Analytics',
        description:
          'Operational telemetry tracking task execution times, process bottleneck identification, and quantifiable dollar-savings dashboards for enterprise leadership.',
        tags: ['Process Mining', 'Bottleneck Detection', 'Dollar Savings Telemetry', 'Executive Analytics'],
      },
    ],
    processSteps: [
      {
        step: '01',
        title: 'Process Discovery & ROI Scoping',
        description: 'Auditing existing manual workflows, estimating transaction volumes, identifying edge cases, and modeling quantifiable labor cost reductions.',
        deliverables: ['Process Automation Opportunity Matrix', 'ROI Economic Model', 'Technical Architecture Blueprint'],
      },
      {
        step: '02',
        title: 'Bot & Document AI Pipeline Sprint',
        description: 'Building the document parsing pipeline, training custom extraction models, and engineering automated system integration bots.',
        deliverables: ['Document AI Extraction Service', 'Automated Integration Bots', 'Automated Validation Rules'],
      },
      {
        step: '03',
        title: 'Exception Workspace & Enterprise Integration',
        description: 'Developing the human-in-the-loop exception console and connecting securely to corporate ERPs (SAP, NetSuite, Salesforce).',
        deliverables: ['Human Exception Console', 'ERP Integration Connectors', 'Security Access Roles'],
      },
      {
        step: '04',
        title: 'Production Cutover & Scaled Fleet Deployment',
        description: 'Deploying the automated container fleet, establishing automated self-healing monitors, and training operational staff.',
        deliverables: ['Production Automation Fleet', 'Self-Healing Monitoring Dashboard', 'Operations & Runbook Guide'],
      },
    ],
    deliverables: [
      { title: 'Intelligent Automation Suite Codebase', category: 'Codebase', description: 'Clean Python / TypeScript automation codebase with 100% intellectual property ownership.', format: 'Git Repository' },
      { title: 'Document AI Extraction Microservice', category: 'Microservice', description: 'Dockerized service for high-throughput, multi-lingual document parsing and table extraction.', format: 'Docker Container' },
      { title: 'Human Exception Review Web Application', category: 'Application', description: 'Next.js interface for rapid review and one-click correction of low-confidence documents.', format: 'Web Application' },
      { title: 'Operational Analytics & Cost-Savings Dashboard', category: 'Operations', description: 'Executive dashboard tracking processed volumes, accuracy curves, and hours saved.', format: 'Web Dashboard' },
    ],
    techStack: [
      { category: 'Automation Engine', items: ['Python', 'Playwright', 'Celery', 'Redis', 'Docker / Kubernetes'] },
      { category: 'Document AI', items: ['LayoutLM', 'AWS Textract', 'Tesseract OCR', 'OpenCV', 'PyMuPDF'] },
      { category: 'Enterprise Connectors', items: ['SAP BAPI / RFC', 'NetSuite SuiteTalk', 'Salesforce REST', 'Workday API'] },
      { category: 'Monitoring', items: ['Prometheus', 'Grafana', 'Datadog', 'Sentry'] },
    ],
    caseStudyQuote: {
      quote: 'Neominds automated our global invoice processing pipeline across 18 regional operating subsidiaries. We increased our straight-through processing rate to 85% and cut invoice handling costs by 70%.',
      author: 'Elena Rostova',
      role: 'Chief Operating Officer',
      company: 'Logistics Continental Group',
      metric: '85% Straight-Through Processing',
    },
    faqs: [
      { question: 'How is your solution different from legacy RPA vendors like UiPath or Automation Anywhere?', answer: 'Legacy RPA vendors charge high recurring per-bot licensing fees ($10k-$15k/bot/year) and rely on brittle UI clicks. We engineer custom code-driven microservices using modern open-source frameworks (Playwright, Python) that you own 100% with zero license fees.' },
      { question: 'What happens when a document is wrinkled, blurry, or formatted unexpectedly?', answer: 'Our document models calculate confidence scores for every extracted field. If confidence falls below 95%, the document is routed to the human-in-the-loop dashboard with visual bounding boxes for instant review.' },
      { question: 'Can the automation connect with on-premise legacy mainframe software?', answer: 'Yes. We build headless terminal emulation connectors (TN3270, AS/400) and API wrappers that interact seamlessly with older mainframe and on-premise legacy systems.' },
      { question: 'How do you ensure audit compliance and data security during processing?', answer: 'Every automated step, data transformation, and human approval is cryptographically logged with immutable timestamps, providing a complete audit trail that satisfies SOC 2, ISO 27001, and financial audit standards.' },
    ],
  },

  'generative-ai': {
    id: 'generative-ai',
    slug: 'generative-ai',
    title: 'Generative AI',
    tagline: 'Enterprise GenAI Strategy, Private LLM Fine-Tuning & Multi-Modal Solutions',
    category: 'AI & Intelligence',
    heroBadge: 'Generative AI Practice',
    heroHeadline: 'Transformative Enterprise',
    heroHeadlineHighlight: 'Generative AI Solutions',
    heroDescription:
      'Harness the transformative power of generative AI safely within your enterprise perimeter. We design custom Retrieval-Augmented Generation (RAG) platforms, fine-tune domain-specific foundation models, build multi-modal creative suites, and implement rigorous safety guardrails.',
    metrics: [
      { value: '100%', label: 'Air-Gapped Privacy' },
      { value: '4.2x', label: 'Content & Code Velocity' },
      { value: '< 250ms', label: 'Streaming Response Latency' },
      { value: 'Zero', label: 'Public Data Training' },
    ],
    capabilities: [
      {
        title: 'Enterprise RAG & Domain Knowledge Synthesis',
        description:
          'Grounding generative models in internal knowledge bases, technical documentation, and SQL databases using hybrid dense/sparse vector retrieval with automated citation verification.',
        tags: ['Enterprise RAG', 'Hybrid Search', 'Source Citations', 'pgvector & Pinecone'],
      },
      {
        title: 'Domain Foundation Model Fine-Tuning (LoRA / QLoRA)',
        description:
          'Adapting open-weights models (Llama 3, Mistral, DeepSeek) to specialized enterprise terminology, internal coding standards, and proprietary formats.',
        tags: ['LoRA / QLoRA Fine-Tuning', 'Domain Foundation Models', 'Model Quantization', 'Private Weights'],
      },
      {
        title: 'Multi-Modal Generative Creation Suites',
        description:
          'Image generation, design asset synthesis, audio voice generation, and document summarization integrated into existing business tools.',
        tags: ['Multi-Modal AI', 'Image Generation', 'Synthetic Audio', 'Document Summarization'],
      },
      {
        title: 'Private On-Premise & Air-Gapped LLM Deployments',
        description:
          'Deploying quantized foundation models on private enterprise GPU hardware (vLLM, Ollama, TensorRT-LLM) ensuring zero intellectual property leaks to third parties.',
        tags: ['Air-Gapped Deployments', 'On-Premise GPUs', 'Zero Data Leakage', 'vLLM Inference'],
      },
      {
        title: 'AI Safety Guardrails & Hallucination Mitigation',
        description:
          'Multi-tiered guardrail enforcement using NeMo, automated PII redaction, prompt injection defense, and schema verification for enterprise compliance.',
        tags: ['NeMo Guardrails', 'Prompt Injection Defense', 'PII Redaction', 'Safety Policies'],
      },
      {
        title: 'Continuous LLMOps & Evaluation Frameworks',
        description:
          'Automated evaluation pipelines measuring hallucination drift, semantic similarity, latency, and token expenditures across every model update.',
        tags: ['Ragas Evaluation', 'LangSmith Tracing', 'Cost Management', 'Automated Benchmarking'],
      },
    ],
    processSteps: [
      {
        step: '01',
        title: 'GenAI Use Case Discovery & Security Architecture',
        description: 'Identifying high-impact enterprise workflows, establishing data privacy guidelines, selecting foundation model candidates, and calculating infrastructure requirements.',
        deliverables: ['GenAI Architecture Blueprint', 'Data Privacy Protocol', 'Cost & Infrastructure Forecast'],
      },
      {
        step: '02',
        title: 'Data Ingestion & Embedding Pipeline Setup',
        description: 'Chunking internal document repositories, generating dense embeddings, and deploying scalable vector databases with hybrid search.',
        deliverables: ['Vector Database Deployment', 'Ingestion Pipeline Code', 'Semantic Search Sandbox'],
      },
      {
        step: '03',
        title: 'Model Fine-Tuning & Guardrail Configuration',
        description: 'Fine-tuning candidate models on domain datasets, configuring NeMo safety guardrails, and implementing streaming APIs.',
        deliverables: ['Fine-Tuned Model Checkpoints', 'Safety Guardrail Policies', 'Streaming API Endpoints'],
      },
      {
        step: '04',
        title: 'Production Rollout & Evaluation Telemetry',
        description: 'Deploying to private cloud or on-premise GPU clusters with automated Ragas evaluation testing and live observability dashboards.',
        deliverables: ['Production Cluster Deployment', 'LLMOps Observability Console', 'Executive Training & Runbooks'],
      },
    ],
    deliverables: [
      { title: 'Generative AI Platform Source Code', category: 'Codebase', description: 'Complete enterprise-grade Python / TypeScript codebase with 100% intellectual property ownership.', format: 'Git Repository' },
      { title: 'Fine-Tuned Model Weights & Quantized Checkpoints', category: 'Model Weights', description: 'Safetensors / GGUF model checkpoints optimized for private enterprise hosting.', format: 'Safetensors / GGUF Checkpoints' },
      { title: 'Enterprise RAG Ingestion & Query Microservice', category: 'Microservice', description: 'Containerized service managing document vectorization, semantic retrieval, and citation formatting.', format: 'Docker Container' },
      { title: 'Safety Guardrails & Evaluation Harness', category: 'Compliance', description: 'Automated test suite verifying zero PII leakage, prompt injection resistance, and factual grounding.', format: 'Python Test Suite' },
    ],
    techStack: [
      { category: 'Foundation Models', items: ['Llama 3.3 (70B)', 'Claude 3.5 Sonnet', 'GPT-4o', 'Mistral Large', 'DeepSeek V3'] },
      { category: 'RAG & Frameworks', items: ['LangChain', 'LlamaIndex', 'vLLM', 'Ollama', 'HuggingFace TGI'] },
      { category: 'Vector Databases', items: ['pgvector', 'Pinecone', 'Qdrant', 'Milvus', 'ChromaDB'] },
      { category: 'Safety & Observability', items: ['NeMo Guardrails', 'LangSmith', 'Ragas', 'TruLens', 'OpenTelemetry'] },
    ],
    caseStudyQuote: {
      quote: 'Neominds deployed a private on-premise generative AI knowledge platform for our 2,400 engineering consultants. It answers complex technical specifications instantly with exact document citations and zero data leakage.',
      author: 'Alexander Kachaev',
      role: 'Chief Technology Officer',
      company: 'Global Infrastructure Consultants',
      metric: 'Instant Retrieval Across 2.4k Engineers',
    },
    faqs: [
      { question: 'Will our proprietary data be sent to OpenAI or used to train public models?', answer: 'Never. We specialize in private enterprise deployments where data is either processed through zero-data-retention enterprise agreements or runs completely on private on-premise GPU hardware inside your network.' },
      { question: 'How do you prevent the AI from generating confident false statements (hallucinations)?', answer: 'We implement multi-stage verification: our RAG pipeline strictly grounds answers in your verified internal source documents, requiring every statement to link to a verifiable document citation with automated confidence scoring.' },
      { question: 'Can the generative AI solution search across internal files like PDFs, Word documents, and Confluence?', answer: 'Yes. Our ingestion pipelines automatically parse PDFs, DOCX, presentation decks, Confluence spaces, Notion databases, and SQL databases, keeping the vector knowledge base continuously synchronized.' },
      { question: 'What hardware is needed to host private open-source foundation models?', answer: 'Using 4-bit and 8-bit quantization (vLLM / TensorRT-LLM), powerful 70B parameter models can run smoothly on standard enterprise GPU servers (such as 2x NVIDIA A100/H100 or L40S cards).' },
    ],
  },
};
