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
      'We engineer high-availability, cloud-native digital banking infrastructure, neo-banking mobile suites, and real-time core ledger engines. Built for regulatory compliance (PCI-DSS Level 1, Open Banking APIs), microsecond transaction reconciliation, and multi-currency liquidity.',
    primaryCtaText: 'Architect Core Banking',
    secondaryCtaText: 'Inspect Ledger Architecture',
    trustPoints: [
      'Multi-region CockroachDB double-entry ledger with zero drift',
      'PCI-DSS Level 1 & Open Banking (PSD2 / FDX) compliance',
      'Direct ISO 20022 clearing integrations (FedNow, RTP, SEPA)',
      '100% intellectual property & core banking source code ownership',
    ],
    metrics: [
      { value: '99.999%', label: 'Ledger Availability' },
      { value: '< 15ms', label: 'Transaction Latency' },
      { value: '$12B+', label: 'Annual Volume Processed' },
      { value: '100%', label: 'PCI-DSS & SOC 2 Ready' },
    ],
    overview: {
      statement:
        'Legacy core banking mainframes buckle under real-time consumer expectations and modern clearing rail velocity.',
      paragraphs: [
        'Traditional banking cores (FIS, Fiserv, Jack Henry) run on batch-processing paradigms designed decades ago. They cannot settle transactions instantly, charge exorbitant per-transaction licensing fees, and freeze during sudden volume spikes.',
        'We architect cloud-native digital banking cores using distributed SQL (CockroachDB, PostgreSQL), event sourcing (CQRS), and Apache Kafka event streams. Every debit and credit is an immutable, mathematically balanced event, preventing balance drift and eliminating end-of-day reconciliation lockups.',
        'From biometric mobile banking suites to direct ISO 20022 clearinghouse pipelines (FedNow, RTP, SEPA Instant), we deliver sovereign core banking infrastructure that belongs 100% to your financial institution.',
      ],
      keyTakeaway:
        'Cloud-native core ledgers engineered for sub-15ms transaction routing, continuous auditability, and zero dependency on legacy mainframe vendors.',
    },
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
        title: 'Regulatory & Ledger Scoping',
        description: 'Auditing regulatory jurisdiction (OCC, FDIC, BaFin, FCA), defining chart of accounts, and modeling double-entry state machines.',
        deliverables: ['Regulatory Compliance Dossier', 'Chart of Accounts Schema', 'Core Ledger Architecture Blueprint'],
      },
      {
        step: '02',
        title: 'Ledger Engine & Sandbox Build',
        description: 'Deploying CockroachDB / PostgreSQL distributed ledgers, building transaction signing proxies, and executing high-concurrency balance tests.',
        deliverables: ['Working Sandbox Core Banking API', 'Ledger Stress Benchmark Report', 'Data Encryption Scheme'],
      },
      {
        step: '03',
        title: 'Payment Rail & Clearing Integration',
        description: 'Connecting ISO 20022 clearing gateways (FedNow, RTP, ACH) with mutual TLS, automated reconciliation loops, and circuit-breaking queues.',
        deliverables: ['ISO 20022 Clearing Connectors', 'Automated Reconciliation Worker', 'Security Penetration Audit'],
      },
      {
        step: '04',
        title: 'Production Cutover & Core Verification',
        description: 'Zero-downtime ledger migration, live transactional parallel runs, automated SOC 2 audit logging, and 24/7 hypercare support.',
        deliverables: ['Production Core Deployment', 'Disaster Recovery Runbooks', '24/7 SLA Support Agreement'],
      },
    ],
    deliverables: [
      { title: 'Core Banking Engine & Ledger Source Code', category: 'Core Backend', description: 'Complete Go / Java / Node.js source code for immutable double-entry ledger with 100% IP ownership.', format: 'Git Repository (Go / TypeScript)' },
      { title: 'Open Banking & ISO 20022 API Gateway', category: 'API Gateways', description: 'PSD2 and FDX-compliant API gateway with OAuth2 FAPI security profiles and sample Postman suites.', format: 'OpenAPI 3.1 & Docker Containers' },
      { title: 'Omnichannel Banking Web & Mobile Applications', category: 'Frontend Applications', description: 'White-label React and React Native mobile applications with biometric authentication.', format: 'React / React Native Repositories' },
      { title: 'Regulatory Compliance & Audit Dossier', category: 'Governance', description: 'Documentation verifying PCI-DSS Level 1 scope reduction, SOC 2 controls, and automated reconciliation policies.', format: 'PDF & Audit Reports' },
    ],
    techStack: [
      { category: 'Ledger & Databases', items: ['CockroachDB', 'PostgreSQL', 'Redis Cluster', 'Kafka', 'Debezium'] },
      { category: 'Backend & Security', items: ['Go', 'Java (Spring Boot)', 'Node.js', 'HashiCorp Vault', 'mTLS / Envoy'] },
      { category: 'Client Platforms', items: ['React 19', 'React Native', 'Swift', 'Kotlin', 'Tailwind CSS'] },
      { category: 'Clearing & Protocols', items: ['ISO 20022', 'FedNow APIs', 'The Clearing House RTP', 'SWIFT gpi', 'Plaid API'] },
    ],
    caseStudyQuote: {
      quote: 'Neominds engineered our neo-bank core ledger from scratch. We scaled to 600,000 active customer accounts and processed over $4.2B in transactions with zero ledger drift and 99.999% uptime.',
      author: 'Julian Henderson',
      role: 'Chief Technology Officer',
      company: 'Aura Digital Bank',
      metric: '$4.2B Processed Volume',
    },
    outcomes: [
      {
        metric: '99.999%',
        label: 'Ledger Availability',
        description: 'Sub-second failover and multi-region data replication guarantee uninterrupted customer account access.',
      },
      {
        metric: '< 15ms',
        label: 'Settlement Routing',
        description: 'Real-time balance updates and ISO 20022 message clearing across instant payment rails.',
      },
      {
        metric: '100%',
        label: 'Codebase & IP Transfer',
        description: 'Complete sovereign ownership of all ledger schemas, API gateways, and banking applications.',
      },
    ],
    faqs: [
      { question: 'How do you guarantee that balances never drift or double-spend?', answer: 'We implement mathematical double-entry accounting where every transaction requires balanced debit and credit entries. Distributed ACID transactions and deterministic database locks guarantee that accounts cannot be double-spent even under extreme network partition events.' },
      { question: 'Can you integrate with legacy banking cores without causing outages?', answer: 'Yes. We utilize the Martin Fowler Strangler pattern, building an event-driven Kafka facade in front of Fiserv, FIS, or Jack Henry systems so new digital features run on modern infrastructure while legacy data syncs asynchronously.' },
      { question: 'What regulatory standards do your digital banking architectures meet?', answer: 'Our architectures meet PCI-DSS Level 1 requirements, SOC 2 Type II controls, Open Banking UK / Berlin Group PSD2 mandates, and Financial Data Exchange (FDX) standards with hardware-backed encryption.' },
      { question: 'Do we own 100% of the core banking source code?', answer: 'Yes. All source code, infrastructure as code scripts, database DDLs, and API documentation are transferred directly to your organization with zero ongoing vendor royalties.' },
    ],
    ctaHeadline: 'Ready to Modernize Your Core Banking Infrastructure?',
    ctaDescription: 'Schedule a technical discovery session with our Principal Fintech Architects. We review your ledger requirements, audit regulatory scope, and deliver a detailed engineering blueprint.',
    ctaButtonText: 'Request Core Banking Proposal',
  },

  'payment-solutions': {
    id: 'payment-solutions',
    slug: 'payment-solutions',
    title: 'Payment Solutions',
    tagline: 'High-Throughput Payment Gateways, Tokenization & Multi-Acquirer Routing',
    category: 'Core Engineering',
    heroBadge: 'Payment Infrastructure & Gateways',
    heroHeadline: 'High-Throughput',
    heroHeadlineHighlight: 'Payment Processing Rails',
    heroDescription:
      'We architect high-concurrency payment gateways, point-to-point tokenization vaults, smart acquiring routing engines, and automated interchange fee optimizers. Built for sub-second authorization, zero downtime, and global settlement rails.',
    primaryCtaText: 'Build Payment Infrastructure',
    secondaryCtaText: 'Review Gateway Topology',
    trustPoints: [
      'PCI-DSS Level 1 certified tokenization vaults',
      'Intelligent multi-acquirer routing with instant failover',
      'Sub-150ms global payment authorization latency',
      'Direct card brand and alternate payment rail integrations',
    ],
    metrics: [
      { value: '< 150ms', label: 'Payment Authorization' },
      { value: '99.999%', label: 'Gateway Availability' },
      { value: '+4.2%', label: 'Authorization Rate Lift' },
      { value: 'Zero Scope', label: 'PCI-DSS Scope Reduction' },
    ],
    overview: {
      statement:
        'Rigid payment processors lock you into high interchange fees, arbitrary rate hikes, and single-point-of-failure outages.',
      paragraphs: [
        'Relying on a single merchant acquiring processor exposes high-volume merchants to unexpected account freezes, catastrophic gateway outages, and inflated processing fees. Enterprise payment systems require sovereign routing control and token portability.',
        'We engineer custom multi-acquirer payment gateways with zero-knowledge tokenization vaults. Our dynamic routing engines assess card BINs, transaction values, and acquirer health in real time, routing each payment to the processor with the lowest fee and highest approval rate.',
        'If an acquiring bank suffers an outage or latency spike, our circuit breakers reroute traffic to secondary processors in under 50 milliseconds, protecting revenue during peak shopping spikes.',
      ],
      keyTakeaway:
        'Independent payment infrastructure that maximizes authorization rates, reduces interchange processing fees, and eliminates single-vendor lock-in.',
    },
    capabilities: [
      {
        title: 'PCI-DSS Level 1 Tokenization Vaults',
        description:
          'Zero-knowledge cardholder data encryption with format-preserving tokenization (FPE), isolating raw card PANs and reducing your PCI-DSS compliance scope to SAQ-A.',
        tags: ['PCI-DSS Level 1', 'Format-Preserving Encryption', 'Zero-Knowledge Vaults', 'Token Portability'],
      },
      {
        title: 'Intelligent Multi-Acquirer Smart Routing',
        description:
          'Dynamic transaction routing engines evaluating BIN ranges, card tiers, geographic issuer origins, and fee structures to maximize approval rates and minimize interchange.',
        tags: ['Smart Acquirer Routing', 'Cascade Failovers', 'Interchange Optimization', 'BIN Lookups'],
      },
      {
        title: 'Unified Checkout API & Global Alternate Payments',
        description:
          'Single modular API integrating credit cards, Apple Pay, Google Pay, Klarna, Pix, iDEAL, and crypto rails with dynamic localization based on customer IP.',
        tags: ['Apple Pay & Google Pay', 'Alternate Payment Methods', 'Unified API', 'Dynamic Localization'],
      },
      {
        title: 'Automated Chargeback & Dispute Management',
        description:
          'Real-time webhook ingestion for early fraud warnings (Ethoca, Verifi), automated evidence compilation for chargeback representment, and dispute tracking.',
        tags: ['Ethoca & Verifi Alerts', 'Automated Representment', 'Chargeback Prevention', 'Dispute Webhooks'],
      },
      {
        title: 'Sub-Second Settlement & Multi-Currency Cleared',
        description:
          'Real-time automated clearing across 40+ currencies with automated foreign exchange hedging triggers, multi-currency accounts, and automated ledger journal entries.',
        tags: ['Multi-Currency Ledger', 'FX Hedging Automation', 'Automated Batch Settlement', 'Treasury Sync'],
      },
      {
        title: 'Merchant Invoicing & Recurring Subscription Engines',
        description:
          'High-throughput recurring billing engines handling pro-rated upgrades, metered usage calculations, smart dunning retries, and network token auto-updaters.',
        tags: ['Recurring Billing', 'Smart Dunning Retries', 'Account Updater API', 'Proration Engines'],
      },
    ],
    processSteps: [
      {
        step: '01',
        title: 'Payment Flow & Tokenization Architecture',
        description: 'Mapping payment rails, evaluating acquirer partner contracts, and designing zero-knowledge tokenization schemas.',
        deliverables: ['PCI-DSS Scope Minimization Blueprint', 'Acquirer Routing Rulebook', 'API Data Flow Diagrams'],
      },
      {
        step: '02',
        title: 'Vault & Routing Engine Build',
        description: 'Deploying encrypted tokenization vaults, building multi-acquirer connector proxies, and implementing circuit-breaker failover logic.',
        deliverables: ['Working Gateway Sandbox', 'Hardware Security Module (HSM) Config', 'Failover Test Harness'],
      },
      {
        step: '03',
        title: 'Checkout Integration & Stress Hardening',
        description: 'Deploying iframe/SDK client drop-ins, stress-testing under simulated 10,000 transactions/sec load, and verifying card brand certification.',
        deliverables: ['Client Web & Mobile SDKs', 'Load & Concurrency Benchmark', 'Third-Party Penetration Test'],
      },
      {
        step: '04',
        title: 'Acquirer Certification & Production Go-Live',
        description: 'Executing end-to-end sandbox certification with acquiring banks, configuring automated dunning retries, and executing live traffic cutover.',
        deliverables: ['Acquirer Certification Sign-Off', 'Production Monitoring Dashboard', 'Dispute Runbook'],
      },
    ],
    deliverables: [
      { title: 'Payment Gateway Core Microservices', category: 'Backend Engine', description: 'Complete source code for high-throughput payment routing, authorization, and capture microservices.', format: 'Go / Docker Containers' },
      { title: 'Zero-Knowledge Tokenization Vault', category: 'Security & Vault', description: 'Encrypted tokenization service with HSM key management and format-preserving encryption.', format: 'Terraform & Secure Runtimes' },
      { title: 'Embeddable Checkout SDKs (Web & Mobile)', category: 'Client Libraries', description: 'Lightweight JavaScript, React, iOS, and Android drop-in checkout components with zero PCI scope.', format: 'npm Package & Native SDKs' },
      { title: 'Automated Reconciliation & Dispute Service', category: 'Operations', description: 'Microservices handling daily bank deposit reconciliation, Ethoca dispute alerts, and evidence generation.', format: 'Python / Node.js Services' },
    ],
    techStack: [
      { category: 'Languages & Core', items: ['Go', 'Rust', 'TypeScript', 'Node.js', 'PostgreSQL'] },
      { category: 'Security & HSM', items: ['AWS CloudHSM', 'HashiCorp Vault', 'AES-256-GCM', 'TLS 1.3 Strict'] },
      { category: 'Payment Networks', items: ['Visa Direct', 'Mastercard Send', 'Adyen APIs', 'Stripe Connect', 'Chase Paymentech'] },
      { category: 'Data & Queuing', items: ['Kafka', 'Redis Cluster', 'ClickHouse', 'Prometheus', 'Grafana'] },
    ],
    caseStudyQuote: {
      quote: 'Implementing Neominds multi-acquirer smart routing increased our authorization rate by 4.8% on international cards and saved us $1.2M in annual interchange fees.',
      author: 'Marcus Lindholm',
      role: 'VP of Payments Infrastructure',
      company: 'Valo Global Commerce',
      metric: '+4.8% Authorization Rate',
    },
    outcomes: [
      {
        metric: '+4.2%',
        label: 'Authorization Rate Lift',
        description: 'Smart acquirer routing eliminates false card declines and recovers abandoned checkouts.',
      },
      {
        metric: '< 150ms',
        label: 'Gateway Latency',
        description: 'Sub-second tokenized authorizations keep checkout flows moving at high volume.',
      },
      {
        metric: '-22%',
        label: 'Processing Fee Savings',
        description: 'Dynamic BIN routing selects the lowest-cost acquiring bank for every card transaction.',
      },
    ],
    faqs: [
      { question: 'How does smart multi-acquirer routing increase revenue?', answer: 'When transactions fail at one processor due to regional card issuer mismatch or temporary downtime, our routing engine automatically cascades the charge to a secondary acquiring bank in milliseconds, recovering sales that would otherwise be lost.' },
      { question: 'Does using your payment gateway require us to undergo full PCI-DSS Level 1 audits?', answer: 'No. Our zero-knowledge client SDKs tokenize cardholder data directly in the browser or mobile app before it reaches your backend servers, reducing your internal compliance scope to the simplest SAQ-A questionnaire.' },
      { question: 'Can we migrate customer credit cards away from Stripe or Braintree?', answer: 'Yes. Because you own the tokenization vault and customer tokens, you have total token portability. You are never locked into any single payment provider and can switch acquiring banks whenever you negotiate better rates.' },
      { question: 'How do you handle automated card updates when cards expire?', answer: 'We integrate with Visa Account Updater (VAU) and Mastercard Automatic Billing Updater (ABU) to automatically refresh expired card numbers and CVVs in the background, preventing subscription churn.' },
    ],
    ctaHeadline: 'Ready to Take Sovereign Control of Your Payment Processing?',
    ctaDescription: 'Connect with our Senior Payment Systems Architects. We analyze your transaction flows, calculate interchange savings, and design a custom gateway architecture.',
    ctaButtonText: 'Request Payment Gateway Review',
  },

  'lending-credit-platforms': {
    id: 'lending-credit-platforms',
    slug: 'lending-credit-platforms',
    title: 'Lending & Credit Platforms',
    tagline: 'Automated Loan Origination, Credit Decisioning & Servicing Engines',
    category: 'Core Engineering',
    heroBadge: 'Digital Lending & Credit Core',
    heroHeadline: 'Automated Digital',
    heroHeadlineHighlight: 'Lending & Credit Engines',
    heroDescription:
      'We build end-to-end digital lending platforms, sub-60-second automated credit underwriting engines, and loan servicing workflows. Engineered for complex multi-bureau credit scoring, automated KYC/AML verification, and automated repayment collections.',
    primaryCtaText: 'Build Your Lending Engine',
    secondaryCtaText: 'Inspect Credit Architecture',
    trustPoints: [
      'Sub-60-second algorithmic loan underwriting and decisioning',
      'Automated multi-bureau credit pull & cash flow analysis',
      'SOC 2 Type II & Fair Lending compliance enforcement',
      'Automated ACH repayment schedules and delinquency tracking',
    ],
    metrics: [
      { value: '< 60s', label: 'Credit Decision Time' },
      { value: '3x', label: 'Origination Capacity' },
      { value: '-40%', label: 'Default Rate Reduction' },
      { value: '100%', label: 'Fair Lending Compliant' },
    ],
    overview: {
      statement:
        'Manual paper-based loan underwriting takes weeks, drives customer drop-off, and introduces human underwriting bias.',
      paragraphs: [
        'Traditional loan origination systems (LOS) force borrowers through endless paperwork, manual document reviews, and weeks of waiting. By the time an underwriter reviews an application, high-intent borrowers have migrated to digital-first competitors.',
        'We engineer automated loan origination and servicing engines that ingest financial data directly from Plaid, credit bureaus (Experian, Equifax, TransUnion), and payroll APIs. Our rule engines calculate debt-to-income ratios, cash flow health, and risk tiers in under 60 seconds.',
        'Approved loans transition automatically into servicing modules with automated document signing, loan disbursement pipelines, and automated recurring ACH debit schedules.',
      ],
      keyTakeaway:
        'End-to-end digital lending pipelines that originate, underwrite, and service loans in minutes with mathematical risk precision.',
    },
    capabilities: [
      {
        title: 'Sub-60-Second Automated Credit Underwriting',
        description:
          'Algorithmic decision engines combining multi-bureau credit reports (Experian, Equifax, TransUnion), alternative cash-flow data (Plaid), and fraud signals into verified risk tiers.',
        tags: ['Algorithmic Underwriting', 'Plaid Open Banking', 'Multi-Bureau Integration', 'Risk Scoring'],
      },
      {
        title: 'Omnichannel Loan Origination Funnels',
        description:
          'Frictionless responsive application workflows featuring instant document upload OCR, auto-filled personal data, and sub-second pre-qualification estimates.',
        tags: ['Frictionless Applications', 'Document OCR', 'Pre-Qualification Engine', 'React / Next.js'],
      },
      {
        title: 'Automated Loan Servicing & Repayment Engine',
        description:
          'End-to-end loan amortization calculation, automated recurring ACH debit schedules, early payoff calculators, and automated delinquency escalation workflows.',
        tags: ['Loan Servicing', 'Automated ACH Collections', 'Amortization Schedules', 'Delinquency Workflows'],
      },
      {
        title: 'E-Sign & Automated Contract Generation',
        description:
          'Dynamic generation of legally binding promissory notes and loan disclosures (Truth in Lending Act / TILA) with embedded electronic signature handshakes.',
        tags: ['TILA Disclosures', 'Promissory Notes', 'DocuSign API', 'Automated PDF Generation'],
      },
      {
        title: 'Fair Lending & Adverse Action Governance',
        description:
          'Automated adverse action notice generation, disparate impact testing, and explainable decision auditing ensuring full compliance with ECOA and FCRA mandates.',
        tags: ['ECOA / FCRA Compliance', 'Adverse Action Notices', 'Disparate Impact Audits', 'Audit Logging'],
      },
      {
        title: 'Secondary Market Syndication & Investor Portals',
        description:
          'Whole-loan purchase workflows, warehouse facility borrowing base reporting, and automated investor distributions with real-time portfolio performance feeds.',
        tags: ['Investor Reporting', 'Loan Syndication', 'Warehouse Borrowing Base', 'Portfolio Analytics'],
      },
    ],
    processSteps: [
      {
        step: '01',
        title: 'Credit Policy & Underwriting Modeling',
        description: 'Digitizing credit committee policies, setting risk tier boundaries, and modeling income verification algorithms.',
        deliverables: ['Underwriting Policy Specification', 'Data Source Mapping', 'Regulatory Compliance Matrix'],
      },
      {
        step: '02',
        title: 'Decision Engine & Bureau Scaffolding',
        description: 'Building the rules-based credit engine, integrating Plaid and credit bureau APIs, and running backtests on historical loan portfolios.',
        deliverables: ['Decisioning Sandbox Engine', 'Bureau Connection Connectors', 'Historical Backtest Report'],
      },
      {
        step: '03',
        title: 'Origination UI & Servicing Integration',
        description: 'Developing the borrower loan application portal, automated document signing, and connecting ACH loan disbursement and repayment queues.',
        deliverables: ['Borrower Application Portal', 'Servicing Core Integration', 'Disbursement Webhook Suite'],
      },
      {
        step: '04',
        title: 'Compliance Audit & Production Cutover',
        description: 'Conducting Fair Lending audits, testing adverse action notice generation, and launching loan origination to production.',
        deliverables: ['Fair Lending Audit Sign-Off', 'Production Deployment Manifests', 'Servicing Operator Runbook'],
      },
    ],
    deliverables: [
      { title: 'Automated Credit Decisioning Engine', category: 'Core Engine', description: 'Rule-based and ML credit underwriting service evaluating bureau, income, and fraud data in real time.', format: 'Python / FastAPI Microservice' },
      { title: 'Borrower Loan Origination Portal', category: 'Frontend', description: 'Modern responsive loan application portal with document uploads, bank linking, and electronic contract signing.', format: 'React / Next.js Codebase' },
      { title: 'Loan Servicing & ACH Collections Core', category: 'Servicing Core', description: 'Accounting ledger managing amortization schedules, automated ACH debits, and delinquency tracking.', format: 'PostgreSQL / Node.js Engine' },
      { title: 'Adverse Action & Regulatory Compliance Suite', category: 'Governance', description: 'Automated document generator creating compliant adverse action notices and audit logs for ECOA/FCRA.', format: 'PDF Microservice & Audit Ledgers' },
    ],
    techStack: [
      { category: 'Underwriting & Rules', items: ['Python', 'FastAPI', 'Pandas', 'PostgreSQL', 'Camunda BPMN'] },
      { category: 'Data Providers', items: ['Experian API', 'Equifax', 'TransUnion', 'Plaid Auth & Assets', 'Persona KYC'] },
      { category: 'Payment & ACH', items: ['Stripe Financial Connections', 'Dwolla ACH', 'Modern Treasury', 'DocuSign API'] },
      { category: 'Infrastructure', items: ['AWS', 'Kubernetes', 'Docker', 'Redis', 'Terraform'] },
    ],
    caseStudyQuote: {
      quote: 'Neominds digitized our commercial equipment lending process. We cut average loan approval time from 14 days to 4 minutes while reducing first-year default rates by 38%.',
      author: 'Kathryn Sterling',
      role: 'Chief Credit Officer',
      company: 'Apex Commercial Capital',
      metric: '4-Minute Loan Approvals',
    },
    outcomes: [
      {
        metric: '< 60s',
        label: 'Credit Decision Time',
        description: 'Replaces weeks of manual document reviews with automated algorithmic scoring.',
      },
      {
        metric: '3x',
        label: 'Origination Capacity',
        description: 'Scalable digital origination handles thousands of concurrent applications without headcount growth.',
      },
      {
        metric: '-40%',
        label: 'Default Rate Reduction',
        description: 'Alternative cash flow underwriting detects credit risks before loan disbursement.',
      },
    ],
    faqs: [
      { question: 'How do you prevent algorithmic bias in automated credit decisioning?', answer: 'We implement rigorous disparate impact testing and feature importance auditing. All credit policies comply with the Equal Credit Opportunity Act (ECOA), and every decline generates an explainable adverse action notice citing specific reasons.' },
      { question: 'Can we customize underwriting criteria for different loan products?', answer: 'Yes. Our decision engine uses modular rule tables and scoring weights, allowing you to configure unique risk parameters, DTI thresholds, and interest rates for unsecured personal loans, auto loans, or commercial lines of credit.' },
      { question: 'How do you handle borrower bank statement verification?', answer: 'We integrate with Plaid and MX to pull 12 months of structured transactional data directly from borrower bank accounts, automatically categorizing income, detecting payroll direct deposits, and flagging non-sufficient fund (NSF) events.' },
      { question: 'Does the platform handle automated debt collections?', answer: 'Yes. The servicing module generates daily ACH debit batches, triggers smart retry schedules for failed payments, and automatically applies late fees while keeping borrower balance statements updated.' },
    ],
    ctaHeadline: 'Ready to Automate Your Loan Origination and Credit Underwriting?',
    ctaDescription: 'Speak with our Lead Lending Technology Architects. We review your credit models, design your origination flow, and deliver a production roadmap.',
    ctaButtonText: 'Request Lending Architecture Consultation',
  },

  'investment-wealth-management': {
    id: 'investment-wealth-management',
    slug: 'investment-wealth-management',
    title: 'Investment & Wealth Management',
    tagline: 'Institutional Portfolio Management, Robo-Advisory & Custody Systems',
    category: 'Core Engineering',
    heroBadge: 'WealthTech & Institutional Portfolios',
    heroHeadline: 'High-Precision',
    heroHeadlineHighlight: 'Wealth & Investment Platforms',
    heroDescription:
      'We engineer modern wealth management portals, algorithmic portfolio rebalancing engines, institutional trade order execution routers, and custodian custody bridges. Designed for SEC/FINRA compliance, tax-loss harvesting, and multi-asset class portfolio management.',
    primaryCtaText: 'Architect Wealth Platform',
    secondaryCtaText: 'View Portfolio Engine',
    trustPoints: [
      'Sub-second tax-loss harvesting and algorithmic rebalancing',
      'Automated custodian integrations (Apex, DriveWealth, Interactive Brokers)',
      'SEC, FINRA & MiFID II regulatory compliance reporting',
      'Multi-asset class support: Equities, ETFs, Fixed Income, and Digital Assets',
    ],
    metrics: [
      { value: '100%', label: 'Automated Tax-Loss Harvesting' },
      { value: '< 80ms', label: 'Portfolio Performance Calculation' },
      { value: '$8B+', label: 'Assets on Platform Architecture' },
      { value: '0', label: 'Reconciliation Discrepancies' },
    ],
    overview: {
      statement:
        'Outdated wealth management software traps financial advisors in manual rebalancing spreadsheets and fragmented custodian portals.',
      paragraphs: [
        'High-net-worth investors and registered investment advisors (RIAs) demand transparent, real-time portfolio intelligence, tax-optimized rebalancing, and digital onboarding. Legacy wealth software struggles to calculate multi-currency holdings and delays trade execution.',
        'We build institutional-grade wealth platforms featuring automated trade order routing via FIX protocol, real-time portfolio performance tracking (MWR/TWR), and algorithmic tax-loss harvesting.',
        'Our architectures integrate directly with clearing custodians (Apex Clearing, DriveWealth, Interactive Brokers) using secure event-driven webhooks, eliminating manual reconciliation overhead.',
      ],
      keyTakeaway:
        'Real-time portfolio operating systems that automate trading, tax optimization, and custodial reporting across thousands of client accounts.',
    },
    capabilities: [
      {
        title: 'Algorithmic Portfolio Rebalancing & Model Portfolios',
        description:
          'Multi-account portfolio rebalancing engines executing target asset allocations, cash drag reduction, model drifting alerts, and automated fractional share routing.',
        tags: ['Algorithmic Rebalancing', 'Model Portfolios', 'Fractional Shares', 'Drift Detection'],
      },
      {
        title: 'Automated Tax-Loss Harvesting (TLH)',
        description:
          'Continuous monitoring of taxable client lots, identifying unrealized losses and executing tax-loss swaps with highly correlated replacement assets without triggering wash-sale rules.',
        tags: ['Tax-Loss Harvesting', 'Wash-Sale Avoidance', 'Lot-Level Accounting', 'After-Tax Alpha'],
      },
      {
        title: 'Custodian Integrations (Apex, DriveWealth, IBKR)',
        description:
          'Direct FIX protocol and RESTful API integrations for automated account opening (ACAT transfers), real-time buying power validation, and trade execution.',
        tags: ['Apex Clearing', 'DriveWealth', 'Interactive Brokers', 'FIX Protocol 4.4 / 5.0'],
      },
      {
        title: 'Institutional Client Portals & Advisor Dashboards',
        description:
          'High-net-worth mobile client portals and multi-advisor consoles with interactive asset breakdowns, time-weighted returns (TWR), and benchmark comparisons.',
        tags: ['Advisor Dashboards', 'Client Mobile App', 'TWR / MWR Performance', 'Interactive Charts'],
      },
      {
        title: 'Multi-Asset Class & Alternative Investment Ledgers',
        description:
          'Consolidated balance ledgers tracking public equities, fixed income, private equity capital calls, real estate syndications, and digital assets.',
        tags: ['Multi-Asset Ledgers', 'Private Equity Capital Calls', 'Fixed Income Analytics', 'Consolidated Reporting'],
      },
      {
        title: 'SEC, FINRA & Form ADV Compliance Reporting',
        description:
          'Automated compilation of Form ADV Part 2 disclosures, trade surveillance, best execution audits, and SEC 17a-4 compliant immutable document archives.',
        tags: ['SEC 17a-4 WORM Storage', 'Trade Surveillance', 'Best Execution Audits', 'Form ADV Reporting'],
      },
    ],
    processSteps: [
      {
        step: '01',
        title: 'Custodian Architecture & Investment Policy',
        description: 'Mapping clearing broker protocols (FIX, REST), defining model portfolio allocation algorithms, and configuring wash-sale rules.',
        deliverables: ['Custodian Integration Blueprint', 'Rebalancing Algorithm Specification', 'Tax Accounting Scheme'],
      },
      {
        step: '02',
        title: 'Rebalancing Engine & FIX Router Build',
        description: 'Developing lot-level tax-loss harvesting engines, building FIX protocol order routers, and testing fractional share trade execution.',
        deliverables: ['Rebalancing Microservice Sandbox', 'FIX Protocol Gateway', 'Wash-Sale Rule Validator'],
      },
      {
        step: '03',
        title: 'Advisor Console & Client Portal Integration',
        description: 'Engineering responsive React advisor dashboards, client mobile portals, and real-time performance calculation pipelines.',
        deliverables: ['Advisor Multi-Tenant Console', 'Client Mobile Portal', 'TWR/MWR Performance Engine'],
      },
      {
        step: '04',
        title: 'Custodian Certification & Production Go-Live',
        description: 'Completing formal sandbox trade certification with Apex / DriveWealth, executing ACAT account transfer tests, and cutting over to live trading.',
        deliverables: ['Custodian Certification Sign-Off', 'WORM Storage Archive Verification', 'Advisor Operating Playbook'],
      },
    ],
    deliverables: [
      { title: 'Algorithmic Rebalancing & TLH Engine', category: 'Core Engine', description: 'Complete microservice source code for lot-level tax-loss harvesting, drift tracking, and order generation.', format: 'Python / C++ / Go Microservices' },
      { title: 'FIX Protocol Trade Execution Gateway', category: 'Trade Routing', description: 'Sub-millisecond FIX protocol messaging router connecting directly to clearing custodians.', format: 'QuickFIX / Go Engine' },
      { title: 'Advisor & Investor Portal Applications', category: 'Frontend', description: 'White-label web and mobile applications with real-time portfolio charting and account opening workflows.', format: 'React / Next.js / React Native' },
      { title: 'SEC 17a-4 Compliant Audit Archive', category: 'Compliance', description: 'Write-Once-Read-Many (WORM) storage configuration for trade confirmations, client statements, and logs.', format: 'AWS S3 Glacier Vault Manifests' },
    ],
    techStack: [
      { category: 'Languages & Trading', items: ['Python', 'Go', 'C++', 'TypeScript', 'PostgreSQL Timescale'] },
      { category: 'Clearing & Protocols', items: ['FIX Protocol', 'Apex Clearing APIs', 'DriveWealth SDK', 'Interactive Brokers TWS'] },
      { category: 'Analytics & Math', items: ['NumPy / SciPy', 'Pandas', 'Apache Arrow', 'ClickHouse'] },
      { category: 'Frontend & Charts', items: ['React 19', 'Next.js', 'Apache ECharts', 'Tailwind CSS'] },
    ],
    caseStudyQuote: {
      quote: 'Neominds built our digital wealth platform connecting directly to Apex Clearing. Our 45 financial advisors now rebalance 12,000 client accounts in under 3 minutes with automated tax-loss harvesting.',
      author: 'David Benioff',
      role: 'Managing Partner',
      company: 'Highland Wealth Advisors',
      metric: '12k Accounts Rebalanced in 3 Min',
    },
    outcomes: [
      {
        metric: '100%',
        label: 'Automated Tax-Loss Harvesting',
        description: 'Programmatic rebalancing maximizes after-tax returns for investors automatically.',
      },
      {
        metric: '< 80ms',
        label: 'Performance Calculation Speed',
        description: 'Real-time time-weighted return (TWR) updates across thousands of client accounts.',
      },
      {
        metric: '0',
        label: 'Reconciliation Discrepancies',
        description: 'Direct FIX protocol and custodian API integrations eliminate batch trade errors.',
      },
    ],
    faqs: [
      { question: 'How do you prevent wash sales during automated tax-loss harvesting?', answer: 'Our engine tracks all client transactions at the individual tax-lot level across all linked accounts. When harvesting a loss, it enforces a 31-day exclusion window on identical securities, substituting pre-approved, highly correlated ETFs to maintain market exposure without triggering IRS wash-sale rules.' },
      { question: 'Which clearing custodians can your platform integrate with?', answer: 'We build direct API and FIX protocol connectors to Apex Clearing, DriveWealth, Interactive Brokers, Pershing, and Charles Schwab, enabling direct digital account opening, real-time funding, and automated order execution.' },
      { question: 'Can the platform support alternative assets like private equity alongside public equities?', answer: 'Yes. Our unified balance ledger supports illiquid and alternative assets, including private equity capital call tracking, real estate valuations, and digital assets alongside standard public equities and fixed income.' },
      { question: 'How is client data archived for SEC and FINRA regulatory audits?', answer: 'All trade confirmations, advisor communications, and portfolio statements are automatically written to tamper-proof AWS S3 Glacier Vaults configured with Write-Once-Read-Many (WORM) storage compliant with SEC Rule 17a-4.' },
    ],
    ctaHeadline: 'Ready to Build a Modern Institutional Wealth Platform?',
    ctaDescription: 'Consult with our WealthTech Engineering Specialists. We review your custody connections, trade execution algorithms, and deliver an actionable technical blueprint.',
    ctaButtonText: 'Request WealthTech Architecture Proposal',
  },

  'financial-analytics': {
    id: 'financial-analytics',
    slug: 'financial-analytics',
    title: 'Financial Analytics',
    tagline: 'Real-Time Quantitative Analytics, Cash Flow Forecasting & Treasury BI',
    category: 'Cloud & Operations',
    heroBadge: 'Quantitative Finance & Treasury BI',
    heroHeadline: 'Real-Time Quantitative',
    heroHeadlineHighlight: 'Financial Analytics & BI',
    heroDescription:
      'We engineer sub-second quantitative financial analytics platforms, multi-entity cash flow forecasting models, ledger anomaly detection engines, and executive treasury dashboards. Transforming raw financial transaction records into actionable balance sheet intelligence.',
    primaryCtaText: 'Deploy Financial Analytics',
    secondaryCtaText: 'Inspect Quantitative BI',
    trustPoints: [
      'Sub-100ms analytical queries across billions of financial journal entries',
      'Automated cash runway and liquidity variance forecasting',
      'Real-time reconciliation between ERPs, payment gateways, and bank accounts',
      'SOC 1 / SOC 2 Type II audit-grade financial data lineage',
    ],
    metrics: [
      { value: '< 100ms', label: 'Financial Query Latency' },
      { value: '100M+', label: 'Ledger Records Aggregated' },
      { value: '0 Days', label: 'Month-End Close Lag' },
      { value: '98%', label: 'Cash Forecast Precision' },
    ],
    overview: {
      statement:
        'Static monthly accounting closes leave CFOs and treasury leaders making multi-million dollar decisions with 30-day-old data.',
      paragraphs: [
        'Waiting three weeks after month-end for accounting reconciliation blinds financial leaders to cash runway burn, currency volatility, and billing leakage. Enterprise finance demands real-time, streaming balance sheet observability.',
        'We build real-time financial intelligence platforms on columnar data warehouses (ClickHouse, Snowflake) powered by automated change-data-capture (CDC) pipelines. We stream journal entries directly from Stripe, NetSuite, SAP, and banking feeds into unified financial data models.',
        'Our financial dashboards calculate net burn, working capital, and predictive cash flow scenarios in sub-100 milliseconds, allowing treasury executives to model currency risks and debt covenants live.',
      ],
      keyTakeaway:
        'Real-time balance sheet telemetry that turns historical accounting records into forward-looking liquidity intelligence.',
    },
    capabilities: [
      {
        title: 'Real-Time Columnar Financial Data Warehousing',
        description:
          'ClickHouse and TimescaleDB analytical marts ingesting millions of daily ledger journal entries with sub-100ms multi-dimensional drill-downs.',
        tags: ['ClickHouse / Snowflake', 'Columnar Storage', 'Sub-100ms Drilldowns', 'dbt Data Modeling'],
      },
      {
        title: 'Predictive Cash Flow & Liquidity Forecasting',
        description:
          'Time-series forecasting models (ARIMA, Prophet, LSTM) projecting 30/60/90-day cash runway, receivable collections, and vendor payout timing.',
        tags: ['Cash Runway Modeling', 'Liquidity Projections', 'Predictive Modeling', 'Scenario Simulation'],
      },
      {
        title: 'Multi-Entity Automated Reconciliation (3-Way Matching)',
        description:
          'Continuous real-time matching between bank deposits, payment gateway settlements (Stripe, Adyen), and ERP general ledger entries.',
        tags: ['3-Way Reconciliation', 'Automated Variance Flagging', 'Multi-Subsidiary Support', 'Bank Feed Sync'],
      },
      {
        title: 'Executive Treasury & Burn Rate Dashboards',
        description:
          'Interactive WebGL visualizations tracking gross margin variance, SaaS magic numbers (CAC, LTV, NRR), and working capital metrics at 60fps.',
        tags: ['Treasury Dashboards', 'SaaS Unit Economics', 'Working Capital BI', 'Apache ECharts'],
      },
      {
        title: 'Ledger Anomaly Detection & Fraud Watchdogs',
        description:
          'Statistical anomaly detection scanning journal entries for unauthorized adjustments, duplicate payments, and out-of-policy expense allocations.',
        tags: ['Anomaly Detection', 'Duplicate Payment Catchers', 'Policy Enforcement', 'Slack Alerting'],
      },
      {
        title: 'Audit-Grade Financial Data Lineage & SOC 1 Controls',
        description:
          'Immutable ledger audit trails capturing every data transformation from raw bank webhook to final financial report line item.',
        tags: ['Data Lineage', 'SOC 1 Type II Compliance', 'Immutable Audit Trails', 'dbt Test Suites'],
      },
    ],
    processSteps: [
      {
        step: '01',
        title: 'Chart of Accounts & Data Pipeline Scoping',
        description: 'Mapping multi-entity ERP charts of accounts, bank statement APIs, and defining standard KPI metrics.',
        deliverables: ['Financial Data Model Spec', 'Data Ingestion Architecture', 'Reconciliation Rulebook'],
      },
      {
        step: '02',
        title: 'Warehouse Build & CDC Ingestion',
        description: 'Standing up ClickHouse / Snowflake warehouses, authoring dbt transformation models, and connecting real-time bank feeds.',
        deliverables: ['ClickHouse Financial DDL', 'dbt Financial Transformation Models', 'Automated CDC Sync'],
      },
      {
        step: '03',
        title: 'Forecasting Models & Dashboard UI',
        description: 'Training predictive cash flow models, developing responsive React dashboards, and implementing variance alerting webhooks.',
        deliverables: ['React Treasury Dashboard', 'Predictive Cash Runway Service', 'Alerting Integration'],
      },
      {
        step: '04',
        title: 'Reconciliation Validation & Production Launch',
        description: 'Running parallel reconciliation checks against historical audited statements, verifying zero discrepancies, and cutting over live.',
        deliverables: ['Historical Reconciliation Certificate', 'Executive Training Playbook', '24/7 Operations Runbook'],
      },
    ],
    deliverables: [
      { title: 'Real-Time Financial Intelligence Portal', category: 'Frontend BI', description: 'Modular React dashboard application with multi-entity filtering, currency toggles, and sub-100ms charts.', format: 'React / Next.js Git Repository' },
      { title: 'Columnar Financial Data Warehouse & dbt Models', category: 'Data Architecture', description: 'Optimized ClickHouse database schemas with automated financial transformation scripts and tests.', format: 'ClickHouse DDL & dbt Project' },
      { title: 'Automated Continuous Reconciliation Engine', category: 'Backend Engine', description: 'Microservices matching bank deposits to ERP journal entries with automated variance logging.', format: 'Python / FastAPI Microservice' },
      { title: 'Predictive Cash Flow Forecasting Model', category: 'Quantitative Core', description: 'Time-series forecasting models predicting 90-day cash balances based on historical collection trends.', format: 'Python / Jupyter & Microservice' },
    ],
    techStack: [
      { category: 'Data Warehouses', items: ['ClickHouse', 'Snowflake', 'PostgreSQL Timescale', 'DuckDB'] },
      { category: 'Data Engineering', items: ['dbt Core', 'Apache Airflow', 'Kafka', 'Debezium CDC', 'Dagster'] },
      { category: 'Analytics & ML', items: ['Python', 'Pandas', 'Statsmodels', 'Prophet', 'FastAPI'] },
      { category: 'Frontend UI', items: ['Next.js 15', 'React 19', 'Apache ECharts', 'Tailwind CSS'] },
    ],
    caseStudyQuote: {
      quote: 'Neominds built our global treasury intelligence platform on ClickHouse. Our executive team now monitors consolidated cash runway across 14 international subsidiaries in real time with zero manual spreadsheet work.',
      author: 'Henrik Vanger',
      role: 'Chief Financial Officer',
      company: 'Nordic Logistics Group',
      metric: 'Real-Time Multi-Entity Cash BI',
    },
    outcomes: [
      {
        metric: '0 Days',
        label: 'Month-End Close Lag',
        description: 'Continuous automated reconciliation replaces weeks of manual ledger balance checks.',
      },
      {
        metric: '< 100ms',
        label: 'Quantitative Query Latency',
        description: 'Instant multi-entity financial consolidation across hundreds of subsidiaries.',
      },
      {
        metric: '98%',
        label: 'Cash Flow Forecast Precision',
        description: 'Machine learning models predict 90-day liquidity and payment timing with high statistical confidence.',
      },
    ],
    faqs: [
      { question: 'Will running complex financial queries slow down our live ERP or accounting software?', answer: 'No. We use Change Data Capture (CDC) to asynchronously stream journal entries into an isolated columnar analytical warehouse (ClickHouse), guaranteeing zero query load on your production ERP.' },
      { question: 'How do you handle multi-currency conversions across global subsidiaries?', answer: 'Our dbt transformation models maintain automated daily and spot FX rate tables, allowing financial leaders to view consolidated financial statements in any target currency with instant historical revaluation.' },
      { question: 'Can the forecasting model account for seasonal revenue fluctuations?', answer: 'Yes. Our time-series forecasting models incorporate seasonality, customer payment terms, historical collection delays, and recurring subscription churn rates to generate probabilistic cash runway forecasts.' },
      { question: 'Is the financial data audit-compliant for external auditors like PwC or EY?', answer: 'Yes. Every calculated metric features complete bidirectional data lineage back to the raw bank deposit or journal entry with immutable audit logs compliant with SOC 1 Type II standards.' },
    ],
    ctaHeadline: 'Ready to Transform Financial Reporting into Real-Time Intelligence?',
    ctaDescription: 'Connect with our Quantitative Financial Engineering team. We map your ledger data streams, design your analytical data mart, and deliver a working prototype.',
    ctaButtonText: 'Request Financial Analytics Session',
  },

  'fraud-risk-management': {
    id: 'fraud-risk-management',
    slug: 'fraud-risk-management',
    title: 'Fraud & Risk Management',
    tagline: 'Sub-10ms Transaction Risk Scoring, AML Screening & Anomaly Detection',
    category: 'Cloud & Operations',
    heroBadge: 'Real-Time Risk & AML Detection',
    heroHeadline: 'Sub-10ms Fraud Detection',
    heroHeadlineHighlight: '& AML Risk Systems',
    heroDescription:
      'We engineer high-speed fraud detection engines, machine learning anomaly classifiers, sanctions screening pipelines, and automated anti-money laundering (AML) transaction monitors. Stopping synthetic identity theft and payment fraud before funds settle.',
    primaryCtaText: 'Harden Your Risk Systems',
    secondaryCtaText: 'Inspect Fraud Pipeline',
    trustPoints: [
      'Sub-10ms transaction scoring inline with payment authorization',
      'Graph database linkage analysis identifying synthetic identity rings',
      'Real-time sanctions and PEP screening with automated SAR filing',
      '99.4% fraud catch rate with less than 0.1% false positive friction',
    ],
    metrics: [
      { value: '< 10ms', label: 'Inline Scoring Latency' },
      { value: '99.4%', label: 'Fraud Detection Precision' },
      { value: '-75%', label: 'False Positive Drop' },
      { value: '100%', label: 'AML & Sanctions Screened' },
    ],
    overview: {
      statement:
        'Clunky fraud rules block legitimate high-value customers while sophisticated fraud rings slip past legacy filters.',
      paragraphs: [
        'Basic static threshold rules (e.g., blocking transactions over $1,000) introduce frustrating friction for good customers while missing coordinated credential stuffing and identity manipulation attacks. When fraud filters introduce latency, checkout conversion collapses.',
        'We engineer sub-10-millisecond fraud evaluation pipelines that run inline with payment gateway authorizations. Using machine learning models (XGBoost, graph neural networks) and device fingerprinting, our engines analyze hundreds of behavioral signals per transaction.',
        'We construct entity relationship graphs (Neo4j, AWS Neptune) that expose synthetic identity syndicates, shared device fingerprints, and money muling rings in real time, automatically flagging suspicious transactions for compliance review.',
      ],
      keyTakeaway:
        'Sub-10ms transaction scoring that blocks financial fraud and money laundering without introducing friction for legitimate cardholders.',
    },
    capabilities: [
      {
        title: 'Sub-10ms Inline Transaction Risk Scoring',
        description:
          'Ultra-low-latency scoring engines running alongside payment authorizations in under 10ms, evaluating velocity limits, geo-IP anomalies, and device fingerprints.',
        tags: ['Sub-10ms Latency', 'Inline Scoring', 'Device Fingerprinting', 'Velocity Checks'],
      },
      {
        title: 'Graph Linkage Analysis & Synthetic Identity Detection',
        description:
          'Graph database engines (Neo4j, Amazon Neptune) mapping shared bank accounts, phone numbers, and IP addresses to expose organized fraud syndicates.',
        tags: ['Neo4j / Neptune', 'Graph Neural Networks', 'Synthetic Identity Rings', 'Linkage Analysis'],
      },
      {
        title: 'Real-Time Sanctions & PEP Watchlist Screening',
        description:
          'Fuzzy-matching screening engines evaluating customers against OFAC, EU, UN, and Politically Exposed Persons (PEP) lists with sub-second response times.',
        tags: ['OFAC / PEP Screening', 'Fuzzy Match Algorithms', 'Automated Sanctions Checks', 'AML Compliance'],
      },
      {
        title: 'Account Takeover (ATO) & Credential Defense',
        description:
          'Behavioral biometrics tracking typing speed, mouse trajectories, and session token anomalies to detect automated bot attacks and credential stuffing.',
        tags: ['Behavioral Biometrics', 'Bot Mitigation', 'Credential Stuffing Defense', 'Session Scoring'],
      },
      {
        title: 'Automated Suspicious Activity Report (SAR) Filing',
        description:
          'Automated compilation of FinCEN Suspicious Activity Reports (SARs) with structured narrative generation, audit evidence packages, and e-filing APIs.',
        tags: ['FinCEN SAR Filing', 'Automated Narratives', 'Regulatory Compliance', 'Audit Dossiers'],
      },
      {
        title: 'Self-Tuning Machine Learning Risk Classifiers',
        description:
          'Gradient-boosted decision trees (LightGBM, XGBoost) continuously trained on verified chargeback data to minimize false positives for honest customers.',
        tags: ['XGBoost / LightGBM', 'Chargeback Retraining', 'False Positive Reduction', 'Feature Stores'],
      },
    ],
    processSteps: [
      {
        step: '01',
        title: 'Threat Modeling & Historical Fraud Audit',
        description: 'Analyzing historical chargeback records, identifying fraud vectors, and benchmarking current false positive rates.',
        deliverables: ['Fraud Vulnerability Assessment', 'Feature Engineering Matrix', 'Target Latency Budget'],
      },
      {
        step: '02',
        title: 'Graph Database & Scoring Pipeline Setup',
        description: 'Standing up graph database clusters, deploying low-latency feature stores (Feast, Redis), and training XGBoost classifiers.',
        deliverables: ['Low-Latency Feature Store', 'Trained Risk Classifiers', 'Graph Schema Architecture'],
      },
      {
        step: '03',
        title: 'Inline Gateway Integration & Shadow Testing',
        description: 'Connecting scoring APIs into live payment gateways in shadow mode, verifying sub-10ms response times without blocking live orders.',
        deliverables: ['Gateway Connector Webhooks', 'Shadow Mode Verification Report', 'Inline Latency Benchmark'],
      },
      {
        step: '04',
        title: 'Active Rule Enforcement & Analyst Console Launch',
        description: 'Switching to active blocking, deploying the risk investigation review portal, and training compliance analysts on SAR workflows.',
        deliverables: ['Risk Analyst Review Portal', 'Automated SAR Filing Microservice', 'Operations Runbook'],
      },
    ],
    deliverables: [
      { title: 'Sub-10ms Risk Scoring Microservice', category: 'Core Engine', description: 'High-throughput Go/Rust microservice scoring transactions in under 10 milliseconds.', format: 'Go / Rust Containers' },
      { title: 'Entity Relationship Graph Database', category: 'Data Architecture', description: 'Neo4j / Amazon Neptune graph database mapping user accounts, devices, and payment methods.', format: 'Graph Schema DDL & Cypher Scripts' },
      { title: 'Risk Analyst Investigation Portal', category: 'Operations UI', description: 'React console allowing fraud investigators to inspect graph clusters, review signals, and take action.', format: 'React / Next.js Web Portal' },
      { title: 'Automated AML & SAR Compliance Suite', category: 'Compliance', description: 'Automated sanctions screening service with FinCEN-compliant SAR electronic filing capabilities.', format: 'Python / FastAPI Service' },
    ],
    techStack: [
      { category: 'Scoring & Engines', items: ['Go', 'Rust', 'Python', 'Redis Cluster', 'Feast Feature Store'] },
      { category: 'Machine Learning', items: ['XGBoost', 'LightGBM', 'PyTorch Graph Networks', 'Scikit-learn'] },
      { category: 'Graph Databases', items: ['Neo4j Enterprise', 'Amazon Neptune', 'Cypher Query Language'] },
      { category: 'Watchlist & Telemetry', items: ['OFAC Watchlists', 'OpenSearch', 'Prometheus', 'Grafana'] },
    ],
    caseStudyQuote: {
      quote: 'Neominds built our real-time fraud scoring pipeline. We cut monthly fraud chargeback losses by 82% while reducing wrongful false declines on legitimate customers by 75%.',
      author: 'Sebastian Cruz',
      role: 'Head of Risk & Compliance',
      company: 'PayPulse Global',
      metric: '82% Drop in Fraud Losses',
    },
    outcomes: [
      {
        metric: '< 10ms',
        label: 'Inline Scoring Latency',
        description: 'Inline evaluation executes without adding noticeable lag to checkout authorizations.',
      },
      {
        metric: '99.4%',
        label: 'Fraud Catch Rate',
        description: 'Machine learning models detect card testing, account takeovers, and synthetic identities.',
      },
      {
        metric: '-75%',
        label: 'False Positive Reduction',
        description: 'Precise behavioral modeling stops wrongful declines of legitimate high-value transactions.',
      },
    ],
    faqs: [
      { question: 'Will running fraud checks inline cause checkout payment delays?', answer: 'No. Our scoring engine executes in under 10 milliseconds by leveraging in-memory Redis feature stores and compiled Go/C++ inference binaries, adding zero perceptible latency to checkout.' },
      { question: 'How do you detect synthetic identity fraud where credit reports look real?', answer: 'We use graph linkage databases to detect when seemingly unrelated identities share physical hardware fingerprints, burner phone numbers, IP subnets, or mailing addresses, exposing identity rings instantly.' },
      { question: 'Can the system automatically file Suspicious Activity Reports (SARs)?', answer: 'Yes. When an account exceeds AML risk thresholds, the system auto-populates a complete FinCEN-formatted SAR package with transaction logs, behavioral anomalies, and narrative summaries ready for one-click compliance filing.' },
      { question: 'How often are the fraud machine learning models updated?', answer: 'Models retrain automatically on weekly schedules using confirmed chargeback and dispute feedback loops, ensuring defenses adapt to new attacker vectors automatically.' },
    ],
    ctaHeadline: 'Ready to Stop Fraud Losses Without Hurting Legitimate Conversions?',
    ctaDescription: 'Schedule a technical session with our Fraud & Risk Engineers. We evaluate your transaction telemetry, benchmark your risk models, and map an inline detection pipeline.',
    ctaButtonText: 'Request Risk Engine Consultation',
  },

  /* =========================================================================
     HEALTHCARE SERVICES (6 SERVICES)
     ========================================================================= */
  'healthcare-management-software': {
    id: 'healthcare-management-software',
    slug: 'healthcare-management-software',
    title: 'Healthcare Management Software',
    tagline: 'Enterprise EHR/EMR Integration, Hospital Operating Systems & FHIR Backends',
    category: 'Core Engineering',
    heroBadge: 'HealthTech & Clinical Systems',
    heroHeadline: 'Enterprise Healthcare',
    heroHeadlineHighlight: '& Hospital Software',
    heroDescription:
      'We engineer secure, HIPAA-compliant hospital management systems, custom EHR/EMR clinical workflows, and HL7/FHIR interoperability gateways. Designed to eliminate administrative clinician burnout, streamline clinical documentation, and safeguard protected health information (PHI).',
    primaryCtaText: 'Modernize Health Systems',
    secondaryCtaText: 'Inspect Clinical Architecture',
    trustPoints: [
      '100% HIPAA, HITECH & SOC 2 Type II compliant cloud architecture',
      'HL7 v2 and FHIR R4 interoperability bridges with Epic & Cerner',
      'Role-based clinical access controls (RBAC) with immutable audit logs',
      'Sub-second medical chart and diagnostic image retrieval',
    ],
    metrics: [
      { value: '100%', label: 'HIPAA & HITECH Compliant' },
      { value: '-50%', label: 'Clinical Documentation Time' },
      { value: '< 200ms', label: 'Patient Record Retrieval' },
      { value: 'FHIR R4', label: 'Interoperability Standard' },
    ],
    overview: {
      statement:
        'Clunky legacy EHRs force physicians to spend two hours on data entry for every one hour spent with actual patients.',
      paragraphs: [
        'Healthcare providers are suffocating under legacy software architectures that fragment patient records across departmental silos, crash under clinical workloads, and turn doctors into data-entry clerks. Poor EHR usability directly drives medical errors and clinician burnout.',
        'We build modern hospital operating systems and clinical workflow tools on HL7 FHIR R4 standards. We decouple clinical user interfaces from monolithic backend databases (Epic, Cerner, MEDITECH), delivering fast, intuitive clinician dashboards that sync records bidirectionally.',
        'Every component is architected within HIPAA-compliant private cloud boundaries, featuring end-to-end PHI encryption, automated audit trails, and strict role-based access governance.',
      ],
      keyTakeaway:
        'Fast, modern clinical operating systems that give doctors their time back while maintaining strict HIPAA compliance and zero data silos.',
    },
    capabilities: [
      {
        title: 'FHIR R4 & HL7 v2 Interoperability Gateways',
        description:
          'Bi-directional integration engines connecting with Epic, Cerner, and MEDITECH via SMART on FHIR protocols, standardizing clinical observations, medication lists, and encounters.',
        tags: ['HL7 FHIR R4', 'SMART on FHIR', 'Epic & Cerner Integrations', 'Bi-directional Sync'],
      },
      {
        title: 'Clinician-Centered Inpatient & Outpatient Portals',
        description:
          'High-speed web and tablet interfaces designed for tactile clinical workflows, featuring single-click chart summaries, customizable specialty templates, and voice dictation.',
        tags: ['Tactile Clinical UX', 'Voice Dictation', 'Specialty Templates', 'Sub-200ms Charting'],
      },
      {
        title: 'HIPAA-Compliant Cloud Infrastructure & BAA',
        description:
          'Isolated AWS and GCP health cloud infrastructure with AES-256 encrypted storage, strict BAA contracts, continuous audit trails, and zero unauthorized PHI exposure.',
        tags: ['HIPAA / HITECH', 'SOC 2 Type II', 'BAA Agreement', 'Encrypted PHI Storage'],
      },
      {
        title: 'Computerized Physician Order Entry (CPOE)',
        description:
          'Safe medication, lab, and radiology ordering systems with automated drug-drug interaction alerts, clinical decision warnings, and electronic pharmacy routing.',
        tags: ['CPOE Ordering', 'Drug-Drug Interactions', 'Clinical Decision Alerts', 'Surescripts eRx'],
      },
      {
        title: 'Bed Management & Patient Flow Optimization',
        description:
          'Real-time inpatient bed tracking, operating room scheduling, and emergency room queue triage boards reducing patient boarding times.',
        tags: ['Bed Management', 'OR Scheduling', 'ER Triage Boards', 'Patient Flow Telemetry'],
      },
      {
        title: 'Role-Based Clinical Access (RBAC) & Audit Trails',
        description:
          'Granular role-based permissions ensuring nurses, physicians, and administrative billing staff only access minimum necessary clinical records.',
        tags: ['RBAC Security', 'Minimum Necessary Rule', 'Immutable Audit Trails', 'Break-Glass Access'],
      },
    ],
    processSteps: [
      {
        step: '01',
        title: 'Clinical Workflow & EHR Scoping',
        description: 'Shadowing clinicians, analyzing EHR integration endpoints (Epic/Cerner APIs), and defining data dictionary mappings.',
        deliverables: ['Clinical Workflow Map', 'FHIR Resource Mapping Specification', 'HIPAA Risk Assessment'],
      },
      {
        step: '02',
        title: 'FHIR Gateway & Clinical Prototype',
        description: 'Deploying SMART on FHIR integration microservices, standing up secure development sandboxes, and testing real-time chart synchronization.',
        deliverables: ['FHIR Gateway Microservice', 'Clinical Prototype Application', 'Security Architecture Blueprint'],
      },
      {
        step: '03',
        title: 'Clinician Usability & CPOE Testing',
        description: 'Iterating clinical interfaces with active physicians, validating drug-drug interaction checks, and profiling sub-200ms chart retrieval.',
        deliverables: ['Clinician Usability Report', 'CPOE Validation Audit', 'Third-Party HIPAA Pentest'],
      },
      {
        step: '04',
        title: 'Hospital Deployment & Go-Live Support',
        description: 'Deploying to private HIPAA cloud infrastructure, conducting staff training, and providing 24/7 on-site clinical hypercare.',
        deliverables: ['Production Hospital Deployment', 'Staff Training Manuals', '24/7 Clinical Support SLA'],
      },
    ],
    deliverables: [
      { title: 'Hospital Management & Clinical Portal Code', category: 'Clinical Core', description: 'Complete React / TypeScript web application and Node.js backend tailored for clinical inpatient workflows.', format: 'Git Repository (TypeScript)' },
      { title: 'SMART on FHIR Interoperability Gateway', category: 'Interoperability', description: 'Microservices translating HL7 v2 and FHIR R4 messages between Epic, Cerner, and clinical applications.', format: 'Dockerized Services & Helm Charts' },
      { title: 'CPOE & Prescription Ordering Engine', category: 'Clinical Tools', description: 'Ordering module verifying medication dosages, drug-drug conflicts, and electronic pharmacy routing.', format: 'Node.js / Python Services' },
      { title: 'HIPAA Compliance & Security Dossier', category: 'Compliance', description: 'Formal BAA documentation, third-party HIPAA audit results, and role-based access governance matrices.', format: 'PDF & Security Certificates' },
    ],
    techStack: [
      { category: 'Health Standards', items: ['HL7 FHIR R4', 'HL7 v2', 'SMART on FHIR', 'DICOM', 'SNOMED-CT', 'ICD-10'] },
      { category: 'Backend & Cloud', items: ['Node.js', 'Go', 'PostgreSQL', 'AWS HealthLake', 'Google Cloud Healthcare API'] },
      { category: 'Security & Auth', items: ['OAuth 2.0 / OIDC', 'HIPAA BAA Cloud', 'HashiCorp Vault', 'AES-256 Storage'] },
      { category: 'Clinical Frontend', items: ['React 19', 'Next.js', 'Tailwind CSS', 'Accessible Web Components'] },
    ],
    caseStudyQuote: {
      quote: 'Neominds built our outpatient specialty clinic software. Our physicians cut documentation time by 50% and we achieved 100% bidirectional FHIR sync with our regional hospital Epic system.',
      author: 'Dr. Arthur Vance',
      role: 'Chief Medical Information Officer',
      company: 'MetroHealth Specialty Network',
      metric: '-50% Documentation Time',
    },
    outcomes: [
      {
        metric: '-50%',
        label: 'Clinical Charting Time',
        description: 'Intuitive clinical interfaces save physicians 90 minutes of administrative documentation daily.',
      },
      {
        metric: '100%',
        label: 'FHIR Interoperability',
        description: 'Bidirectional sync with Epic, Cerner, and national health data exchanges.',
      },
      {
        metric: '0',
        label: 'Unaudited PHI Access Events',
        description: 'Immutable cryptographic logging captures every chart review, edit, and prescription.',
      },
    ],
    faqs: [
      { question: 'How do you guarantee HIPAA compliance and PHI security?', answer: 'All data is encrypted in transit using TLS 1.3 and at rest with AES-256 bit keys managed in dedicated hardware security modules. We sign formal Business Associate Agreements (BAAs) and enforce strict role-based access controls with immutable logging.' },
      {
        question: 'Can this software sync bidirectionally with our existing Epic or Cerner EHR?',
        answer:
          'Yes. We utilize modern SMART on FHIR R4 integration protocols and HL7 v2 interface engines (Mirth Connect), allowing direct bi-directional synchronization of patient observations, lab orders, and clinical notes.',
      },
      { question: 'How do you ensure clinicians adopt the software without resistance?', answer: 'We design clinical interfaces through direct physician shadowing, prioritizing sub-200ms screen transitions, minimal click counts, and integrated voice dictation so the tool actively saves clinicians time rather than creating administrative drag.' },
      { question: 'Can the platform operate in hybrid on-premise hospital environments?', answer: 'Yes. We support hybrid deployments connecting local hospital data centers and PACS imaging servers with private cloud infrastructure via dedicated encrypted VPN tunnels.' },
    ],
    ctaHeadline: 'Ready to Replace Outdated Hospital Software with Fast Clinical Tools?',
    ctaDescription: 'Consult with our Principal Healthcare Architects. We review your EHR integrations, map your clinical workflows, and deliver a HIPAA-compliant execution plan.',
    ctaButtonText: 'Request Healthcare Architecture Proposal',
  },

  'telemedicine-platforms': {
    id: 'telemedicine-platforms',
    slug: 'telemedicine-platforms',
    title: 'Telemedicine Platforms',
    tagline: 'HIPAA-Compliant Video Consultations, Virtual Waiting Rooms & Clinical Chat',
    category: 'Core Engineering',
    heroBadge: 'Telehealth & Virtual Care',
    heroHeadline: 'HIPAA-Compliant',
    heroHeadlineHighlight: 'Telemedicine Platforms',
    heroDescription:
      'We engineer low-latency, end-to-end encrypted virtual care platforms featuring HD WebRTC video consultations, automated virtual triage waiting rooms, integrated e-prescribing, and EHR synchronization. Built for reliable mobile care delivery across any bandwidth.',
    primaryCtaText: 'Launch Telehealth Platform',
    secondaryCtaText: 'Explore Virtual Care Tech',
    trustPoints: [
      'HIPAA & HITECH Business Associate Agreement (BAA) certified',
      'End-to-end encrypted WebRTC audio and video streaming',
      'Surescripts-certified electronic prescription (eRx) integrations',
      'Adaptive bitrate streaming ensuring clear video on 3G/4G connections',
    ],
    metrics: [
      { value: '< 30s', label: 'Doctor Connection Time' },
      { value: '99.9%', label: 'Video Call Reliability' },
      { value: 'E2E', label: 'Encrypted WebRTC Video' },
      { value: '100%', label: 'Automated EHR Sync' },
    ],
    overview: {
      statement:
        'Laggy video calls and disjointed intake forms break the doctor-patient relationship and compromise clinical care.',
      paragraphs: [
        'Virtual care fails when patients struggle with app downloads, video feeds stutter on mobile connections, and doctors must manually re-type consultation notes into their EHR system. Telehealth must feel as immediate, clear, and trustworthy as an in-person clinic visit.',
        'We engineer frictionless telemedicine platforms that launch directly in modern mobile browsers without mandatory app downloads. We utilize WebRTC with adaptive bitrate video compression, ensuring crystal-clear video consultations even over constrained cellular networks.',
        'During the consultation, clinicians can review live vitals, share medical imaging, write Surescripts-certified e-prescriptions, and submit billing claims that synchronize directly with existing EHR systems.',
      ],
      keyTakeaway:
        'Frictionless, encrypted virtual care platforms that connect patients with clinicians in seconds while automatically syncing records and billing.',
    },
    capabilities: [
      {
        title: 'Encrypted WebRTC HD Video & Audio Consultations',
        description:
          'Peer-to-peer and SFU-routed video streaming with end-to-end encryption, automated bandwidth adaptation, and background noise cancellation for crystal-clear clinical discussions.',
        tags: ['WebRTC / MediaSoup', 'End-to-End Encryption', 'Adaptive Bitrate', 'Noise Cancellation'],
      },
      {
        title: 'Frictionless No-Download Virtual Waiting Rooms',
        description:
          'Patients join appointments directly from SMS links inside Safari and Chrome with zero app downloads, completing dynamic intake questionnaires and vitals logging.',
        tags: ['Browser-Based Care', 'SMS Instant Join', 'Intake Questionnaires', 'Queue Management'],
      },
      {
        title: 'In-Session Clinical Charting & Surescripts eRx',
        description:
          'Side-by-side video consultation charting allowing physicians to document clinical findings, issue electronic prescriptions, and order lab tests without leaving the video screen.',
        tags: ['Side-by-Side Charting', 'Surescripts eRx', 'Lab Orders', 'ICD-10 Coding'],
      },
      {
        title: 'Asynchronous Patient-Provider Secure Messaging',
        description:
          'HIPAA-compliant text chat supporting photo attachments, wound progress monitoring, and automated triage chatbot routing to on-call clinical squads.',
        tags: ['Secure Medical Chat', 'Photo Attachments', 'Triage Chatbots', 'Push Notifications'],
      },
      {
        title: 'Multi-Party Video Conferencing (Family & Interpreters)',
        description:
          'Instantly adding certified medical interpreters, family caregivers, and specialist consulting physicians into live consultations with one click.',
        tags: ['Multi-Party Calling', 'Medical Interpreters', 'Caregiver Access', 'Specialist Consults'],
      },
      {
        title: 'Automated Billing & Insurance Eligibility (270/271)',
        description:
          'Sub-30-second automated insurance copay collection, eligibility verification (EDI 270/271), and post-consultation billing claim generation.',
        tags: ['EDI 270/271 Eligibility', 'Copay Processing', 'Stripe Healthcare', 'Claims Generation'],
      },
    ],
    processSteps: [
      {
        step: '01',
        title: 'Clinical Workflow & Compliance Scoping',
        description: 'Mapping virtual care specialties, establishing clinical triage questionnaires, and drafting HIPAA BAA architecture specifications.',
        deliverables: ['Telehealth Workflow Blueprint', 'HIPAA Compliance Plan', 'WebRTC Infrastructure Spec'],
      },
      {
        step: '02',
        title: 'WebRTC Media Engine & Intake Portal Build',
        description: 'Deploying MediaSoup/LiveKit SFU video clusters, configuring adaptive bitrate profiles, and building the no-download patient waiting room.',
        deliverables: ['WebRTC Media Streaming Service', 'Browser Patient Intake UI', 'Interactive Sandbox'],
      },
      {
        step: '03',
        title: 'E-Prescribing & EHR Synchronization',
        description: 'Integrating Surescripts eRx pipelines, connecting FHIR EHR endpoints for clinical charting, and verifying end-to-end encryption.',
        deliverables: ['Surescripts Certification Suite', 'EHR Sync Connectors', 'End-to-End Encryption Audit'],
      },
      {
        step: '04',
        title: 'Cellular Stress Testing & Production Cutover',
        description: 'Testing video performance across throttled 3G/4G networks, training clinical staff, and launching virtual care to patients.',
        deliverables: ['Network Stress Benchmark Report', 'Clinical Training Playbook', '24/7 Platform Runbook'],
      },
    ],
    deliverables: [
      { title: 'Telehealth Web & Mobile Application Code', category: 'Frontend', description: 'Responsive patient and clinician virtual care portals built with React 19 and Next.js.', format: 'Git Repository (TypeScript)' },
      { title: 'WebRTC Media Streaming Infrastructure', category: 'Media Core', description: 'Containerized SFU video routing servers with auto-scaling and global latency optimization.', format: 'LiveKit / MediaSoup Docker Cluster' },
      { title: 'Surescripts e-Prescription & EHR Bridge', category: 'Clinical Core', description: 'Microservice handling electronic prescription routing, pharmacy selection, and EHR chart sync.', format: 'FastAPI / Python Service' },
      { title: 'HIPAA & WebRTC Security Audit Dossier', category: 'Compliance', description: 'Certified penetration audit confirming zero data leakage, BAA documentation, and encryption validation.', format: 'PDF Audit Reports' },
    ],
    techStack: [
      { category: 'Media & Streaming', items: ['WebRTC', 'LiveKit', 'MediaSoup', 'H.264 / VP8', 'Twilio Video Fallback'] },
      { category: 'Clinical Integrations', items: ['Surescripts eRx', 'HL7 FHIR R4', 'Change Healthcare', 'Plaid'] },
      { category: 'Backend & Data', items: ['Node.js', 'Go', 'PostgreSQL', 'Redis', 'WebSockets'] },
      { category: 'Frontend Frameworks', items: ['React 19', 'Next.js', 'Tailwind CSS', 'WebRTC Browser APIs'] },
    ],
    caseStudyQuote: {
      quote: 'Neominds built our virtual urgent care platform. Over 180,000 patient consultations have been conducted with a 99.9% video connection success rate and an average patient wait time under 3 minutes.',
      author: 'Sarah Jenkins',
      role: 'VP of Digital Health',
      company: 'OptiCare Health',
      metric: '180k Consultations Conducted',
    },
    outcomes: [
      {
        metric: '< 30s',
        label: 'Doctor Connection Time',
        description: 'Browser-based virtual waiting rooms eliminate patient drop-off and app installation friction.',
      },
      {
        metric: '99.9%',
        label: 'Video Call Reliability',
        description: 'Adaptive WebRTC streaming maintains audio/video continuity even on weak cellular signals.',
      },
      {
        metric: '100%',
        label: 'Automated Clinical Sync',
        description: 'Consultation summaries, e-prescriptions, and encounter codes sync directly to the EHR.',
      },
    ],
    faqs: [
      { question: 'Do patients have to download a mobile app to join a video consultation?', answer: 'No. Our telemedicine platforms are engineered with modern progressive web technology and WebRTC. Patients simply click an SMS link and join the consultation directly in Safari or Chrome on their smartphones with zero downloads.' },
      { question: 'How does the video feed handle weak or fluctuating cellular connections?', answer: 'We implement adaptive bitrate streaming and simulcast video encoding. If a patient signal drops, the video resolution automatically scales down while prioritizing uninterrupted, crystal-clear audio continuity.' },
      { question: 'Can doctors write prescriptions directly during the video call?', answer: 'Yes. Through our integrated Surescripts e-prescribing module, clinicians search pharmacies, verify patient insurance coverage, check drug interactions, and route prescriptions directly to local pharmacies during the consultation.' },
      { question: 'Is the platform compliant with state medical board regulations and HIPAA?', answer: 'Yes. All video and audio streams are end-to-end encrypted, clinical encounters record mandatory timestamped audit trails, and data storage meets all HIPAA, HITECH, and state telehealth parity requirements.' },
    ],
    ctaHeadline: 'Ready to Build a Secure, High-Reliability Telehealth Experience?',
    ctaDescription: 'Connect with our Telehealth Engineering Specialists. We review your clinical requirements, demo our WebRTC pipeline, and provide a detailed deployment roadmap.',
    ctaButtonText: 'Request Telehealth Discovery Session',
  },

  'patient-engagement': {
    id: 'patient-engagement',
    slug: 'patient-engagement',
    title: 'Patient Engagement',
    tagline: 'Omnichannel Patient Portals, Automated Scheduling & Care Journeys',
    category: 'Core Engineering',
    heroBadge: 'Digital Patient Experience',
    heroHeadline: 'Omnichannel Patient',
    heroHeadlineHighlight: 'Patient Engagement Platforms',
    heroDescription:
      'We build intuitive, accessible patient portals, automated appointment scheduling engines, secure medical messaging, and post-discharge care follow-up workflows. Giving patients direct control of their care plans while cutting hospital readmissions and missed clinic visits.',
    primaryCtaText: 'Design Patient Portal',
    secondaryCtaText: 'Inspect Care Journey Tech',
    trustPoints: [
      'WCAG 2.1 AA accessibility compliance for diverse patient demographics',
      'Automated SMS & email reminders slashing appointment no-show rates',
      'Direct bidirectional EHR scheduling synchronization',
      'HIPAA-compliant asynchronous secure patient-provider messaging',
    ],
    metrics: [
      { value: '-45%', label: 'Clinic No-Show Rate' },
      { value: '4.8 ★', label: 'Patient Portal Rating' },
      { value: '85%+', label: 'Active Portal Adoption' },
      { value: 'WCAG 2.1', label: 'Accessibility Standard' },
    ],
    overview: {
      statement:
        'Clunky patient portals with forgotten passwords lead to missed appointments, medication non-adherence, and expensive readmissions.',
      paragraphs: [
        'When patient portals are difficult to navigate on mobile devices, patients stop logging in. They miss post-discharge medication routines, fail to schedule critical follow-ups, and end up back in the emergency room. Hospitals lose revenue and patients suffer avoidable complications.',
        'We engineer responsive, patient-centered digital portals featuring passwordless magic link logins, biometric mobile authentication, and intuitive care calendars. Patients can book appointments, review lab results with plain-language explanations, and message care squads securely.',
        'Automated care pathways guide patients through pre-procedure prep and post-surgical recovery via two-way SMS reminders, proactively capturing symptom escalation before emergency intervention is required.',
      ],
      keyTakeaway:
        'Modern, highly accessible patient portals that increase adherence, reduce clinic no-shows, and improve clinical outcomes.',
    },
    capabilities: [
      {
        title: 'Modern Patient Web & Mobile Portals',
        description:
          'WCAG 2.1 AA accessible portals supporting passwordless magic link authentication, biometric FaceID logins, multi-language toggles, and high-contrast accessibility themes.',
        tags: ['WCAG 2.1 AA', 'Passwordless Auth', 'Multi-Language Support', 'React & React Native'],
      },
      {
        title: 'Automated Smart Appointment Scheduling',
        description:
          'Real-time bi-directional EHR calendar synchronization allowing patients to schedule, reschedule, and cancel appointments with automated clinic buffer rules.',
        tags: ['Smart Scheduling', 'EHR Calendar Sync', 'Waitlist Management', 'Self-Service Booking'],
      },
      {
        title: 'Automated SMS & Email Care Pathways',
        description:
          'Two-way conversational SMS reminders delivering appointment alerts, pre-procedure preparation checklists, and post-discharge symptom check-ins.',
        tags: ['Two-Way SMS', 'Care Pathways', 'Pre-Procedure Checklists', 'Automated Reminders'],
      },
      {
        title: 'Lab Result Delivery with Plain-Language Summaries',
        description:
          'Presenting diagnostic lab results alongside visual range indicators and plain-language medical explanations so patients understand their health metrics.',
        tags: ['Visual Lab Trends', 'Plain-Language Health Summaries', 'Diagnostic Indicators', 'FHIR Observations'],
      },
      {
        title: 'Digital Intake & Paperless Registration',
        description:
          'Sub-3-minute mobile intake questionnaires capturing insurance card photos, medical history, and digital consent signatures before arrival at the clinic.',
        tags: ['Mobile Registration', 'Insurance Card OCR', 'Digital Consent Forms', 'Zero Paperwork'],
      },
      {
        title: 'Online Medical Bill Pay & Transparent Estimates',
        description:
          'Clear, itemized billing statements with one-click Apple Pay, Google Pay, and flexible installment plan options meeting No Surprises Act transparency rules.',
        tags: ['Online Bill Pay', 'No Surprises Act', 'Apple / Google Pay', 'Installment Plans'],
      },
    ],
    processSteps: [
      {
        step: '01',
        title: 'Patient Journey Mapping & Accessibility Scoping',
        description: 'Mapping patient touchpoints from appointment booking to discharge, and auditing accessibility needs across elderly demographics.',
        deliverables: ['Patient Experience Journey Map', 'WCAG 2.1 AA Accessibility Specification', 'EHR Integration Scope'],
      },
      {
        step: '02',
        title: 'Portal Engineering & EHR Schedule Sync',
        description: 'Building the responsive portal UI, integrating biometric and passwordless auth, and connecting real-time EHR calendar APIs.',
        deliverables: ['Working Patient Portal Sandbox', 'EHR Scheduling Connector', 'SMS Care Pathway Engine'],
      },
      {
        step: '03',
        title: 'Intake OCR & Digital Bill Pay Build',
        description: 'Implementing insurance card OCR photo scanning, electronic consent signing, and one-click payment processing.',
        deliverables: ['Digital Intake Module', 'Payment Gateway Integration', 'Security Audit Report'],
      },
      {
        step: '04',
        title: 'Clinical Pilot & Hospital Rollout',
        description: 'Running pilot tests across outpatient clinics, tracking patient adoption rates, and rolling out across all healthcare facilities.',
        deliverables: ['Patient Adoption Telemetry Board', 'Clinic Staff Training Kit', '24/7 Operations Runbook'],
      },
    ],
    deliverables: [
      { title: 'Patient Web Portal & Mobile Application Code', category: 'Frontend UI', description: 'Accessible React and React Native patient engagement portal with full source code ownership.', format: 'Git Repository (TypeScript)' },
      { title: 'Automated SMS Care Pathway Engine', category: 'Messaging Core', description: 'Twilio-powered two-way messaging service sending reminders, pre-op instructions, and recovery check-ins.', format: 'Node.js / Python Service' },
      { title: 'EHR Calendar & Self-Scheduling Microservice', category: 'Integration Core', description: 'Bidirectional calendar integration engine keeping clinic provider schedules synchronized in real time.', format: 'Dockerized Microservice' },
      { title: 'Digital Intake & Billing Payment Suite', category: 'Operations Tools', description: 'Paperless check-in module with insurance OCR and Stripe healthcare billing integration.', format: 'React Components & API Endpoints' },
    ],
    techStack: [
      { category: 'Frontend & Mobile', items: ['React 19', 'Next.js', 'React Native', 'Tailwind CSS', 'WCAG 2.1 Guidelines'] },
      { category: 'Communications', items: ['Twilio SMS', 'SendGrid', 'Push Notifications', 'WebSockets'] },
      { category: 'EHR Integrations', items: ['HL7 FHIR R4', 'Epic MyChart APIs', 'Cerner HealtheLife', 'AthenaHealth'] },
      { category: 'Backend & Payments', items: ['Node.js', 'PostgreSQL', 'Stripe Healthcare', 'AWS HIPAA Cloud'] },
    ],
    caseStudyQuote: {
      quote: 'Neominds built our modern patient portal and automated SMS appointment reminder system. In 6 months, clinic no-shows dropped from 24% to 9%, saving our hospital system over $2.1M annually.',
      author: 'Dr. Rebecca Martinez',
      role: 'Chief Patient Experience Officer',
      company: 'Summit Health Network',
      metric: 'No-Shows Dropped to 9%',
    },
    outcomes: [
      {
        metric: '-45%',
        label: 'Clinic No-Show Rate',
        description: 'Automated SMS scheduling reminders and 1-click calendar rescheduling save lost clinic revenue.',
      },
      {
        metric: '4.8 ★',
        label: 'Patient Portal Satisfaction',
        description: 'Accessible, mobile-first design drives 85%+ active patient portal adoption.',
      },
      {
        metric: '-28%',
        label: 'Preventable Readmissions',
        description: 'Automated post-discharge check-ins flag worsening symptoms for early clinical intervention.',
      },
    ],
    faqs: [
      { question: 'How do you ensure elderly or non-tech-savvy patients can use the portal?', answer: 'We strictly follow WCAG 2.1 AA accessibility guidelines with large touch targets, high-contrast visual modes, screen-reader optimization, and passwordless magic link logins sent via SMS or email, eliminating the need to remember complex passwords.' },
      { question: 'Does the self-scheduling engine prevent double-booking of doctor schedules?', answer: 'Yes. Our scheduling microservice syncs bidirectionally with your EHR calendar in real time with atomic appointment locks, ensuring provider time slots reflect accurate clinical availability.' },
      { question: 'Can patients upload photos of insurance cards and IDs?', answer: 'Yes. Our digital intake system allows patients to capture photos of insurance cards and IDs with automated OCR data extraction, validating member numbers and copays before they arrive at the clinic.' },
      { question: 'Does the messaging system comply with HIPAA privacy regulations?', answer: 'Yes. All messages, lab reports, and communications are encrypted end-to-end. Sensitive medical content is delivered inside the authenticated portal, while SMS messages only contain notification alerts with secure direct login links.' },
    ],
    ctaHeadline: 'Ready to Elevate Your Patient Experience and Cut No-Shows?',
    ctaDescription: 'Schedule a consultation with our Patient Experience Architects. We review your patient engagement touchpoints and deliver an actionable technical strategy.',
    ctaButtonText: 'Request Patient Portal Consultation',
  },

  'medical-ai-solutions': {
    id: 'medical-ai-solutions',
    slug: 'medical-ai-solutions',
    title: 'Medical AI Solutions',
    tagline: 'Clinical Decision Support, Diagnostic Imaging AI & Medical NLP',
    category: 'Core Engineering',
    heroBadge: 'Clinical AI & Diagnostic Models',
    heroHeadline: 'Clinical Decision',
    heroHeadlineHighlight: 'Support & Medical AI',
    heroDescription:
      'We build production-ready clinical AI systems, DICOM diagnostic imaging classifiers, structured clinical note extraction models, and predictive risk scoring algorithms. Engineered for doctor-in-the-loop validation, explainable clinical outputs, and strict HIPAA compliance.',
    primaryCtaText: 'Deploy Clinical AI',
    secondaryCtaText: 'Inspect Medical Models',
    trustPoints: [
      'Doctor-in-the-loop architecture ensuring all AI recommendations require clinician sign-off',
      'DICOM medical imaging integration with PACS and VNA infrastructure',
      'Explainable AI (XAI) feature attribution maps explaining diagnostic scoring',
      'HIPAA-compliant model training and inference on isolated GPU clusters',
    ],
    metrics: [
      { value: '97.2%', label: 'Clinical Extraction Accuracy' },
      { value: '3x', label: 'Faster Diagnostic Screening' },
      { value: '100%', label: 'Doctor-in-the-Loop Sign-off' },
      { value: 'DICOM', label: 'PACS & VNA Certified' },
    ],
    overview: {
      statement:
        'Black-box AI that cannot explain its clinical reasoning will never be trusted by physicians or accepted by medical regulators.',
      paragraphs: [
        'Diagnostic radiologists and clinical specialists review hundreds of complex patient cases daily under intense cognitive fatigue. Generic AI models fail in medicine because they cannot justify their outputs, hallucinate medical facts, and fail when encountering real-world patient comorbidities.',
        'We build specialized clinical decision support (CDS) algorithms that integrate directly into radiology PACS viewers and clinical EHR workflows. Using computer vision (CNNs, Vision Transformers), our systems flag anomalies in CT, MRI, and X-ray scans, highlighting regions of interest with heatmaps.',
        'Our natural language processing engines extract structured clinical variables from unstructured physician dictations, calculating sepsis risk scores and medication interaction alerts with clear citations to peer-reviewed clinical guidelines.',
      ],
      keyTakeaway:
        'Explainable, doctor-in-the-loop medical AI that surfaces critical clinical risks faster without compromising physician autonomy.',
    },
    capabilities: [
      {
        title: 'DICOM Diagnostic Imaging AI (CT, MRI, X-Ray)',
        description:
          'Deep learning computer vision models (Vision Transformers, ResNet) detecting pulmonary nodules, intracranial hemorrhages, and fractures with Grad-CAM heatmap overlays.',
        tags: ['DICOM Imaging', 'Vision Transformers', 'Grad-CAM Heatmaps', 'Radiology PACS Integration'],
      },
      {
        title: 'Clinical Natural Language Processing & Note Extraction',
        description:
          'Medical NLP models extracting clinical entities, diagnoses, and medication dosages from free-text physician progress notes into structured SNOMED-CT and ICD-10 codes.',
        tags: ['Clinical NLP', 'SNOMED-CT & ICD-10', 'Medical Entity Extraction', 'BioBERT'],
      },
      {
        title: 'Explainable Clinical Decision Support (CDS)',
        description:
          'Assistive decision tools surfacing sepsis risk alerts, mortality probabilities, and readmission risk scores with transparent feature attribution citing clinical guideline rationale.',
        tags: ['Explainable AI (XAI)', 'Sepsis Risk Alerts', 'Clinical Decision Support', 'Feature Attribution'],
      },
      {
        title: 'Federated Learning & Privacy-Preserving AI Training',
        description:
          'Training diagnostic models across multiple hospital networks using federated learning and differential privacy without moving patient PHI outside local hospital boundaries.',
        tags: ['Federated Learning', 'Differential Privacy', 'Decentralized Training', 'Zero PHI Transfer'],
      },
      {
        title: 'Doctor-in-the-Loop Clinical Verification Consoles',
        description:
          'Intuitive specialist review consoles allowing radiologists and pathologists to accept, modify, or reject AI recommendations with complete audit logging.',
        tags: ['Doctor-in-the-Loop', 'Specialist Consoles', 'Verification Logging', 'Human Clinical Oversight'],
      },
      {
        title: 'FDA Software as a Medical Device (SaMD) Readiness',
        description:
          'Architectures and documentation compliant with FDA Good Machine Learning Practice (GMLP), ISO 13485 quality systems, and IEC 62304 medical device software standards.',
        tags: ['FDA SaMD Compliance', 'GMLP Guidelines', 'ISO 13485 QMS', 'IEC 62304 Standards'],
      },
    ],
    processSteps: [
      {
        step: '01',
        title: 'Clinical Task Scoping & Data Annotation',
        description: 'Partnering with medical specialists to define target diagnostic criteria, curate gold-standard annotated DICOM datasets, and set clinical sensitivity targets.',
        deliverables: ['Clinical Protocol Specification', 'Annotated Medical Dataset', 'Diagnostic Sensitivity Matrix'],
      },
      {
        step: '02',
        title: 'Model Training & Explainability Calibration',
        description: 'Training deep vision and NLP models, generating Grad-CAM heatmaps for explainability, and validating against clinical benchmark sets.',
        deliverables: ['Trained Model Weights', 'Explainability Validation Report', 'Model Performance Benchmark'],
      },
      {
        step: '03',
        title: 'PACS & EHR Integration Sandbox',
        description: 'Integrating model endpoints into radiology PACS viewers via DICOM routers and embedding decision alerts into EHR clinical workflows.',
        deliverables: ['DICOM Router Connector', 'EHR Alerting Sandbox', 'Doctor-in-the-Loop Console UI'],
      },
      {
        step: '04',
        title: 'Clinical Validation Pilot & Audit Sign-Off',
        description: 'Running a multi-center clinical validation pilot alongside practicing physicians, certifying zero hallucination risk, and completing FDA SaMD dossiers.',
        deliverables: ['Clinical Validation Pilot Report', 'FDA SaMD Regulatory Dossier', 'Clinical Deployment Playbook'],
      },
    ],
    deliverables: [
      { title: 'Diagnostic Vision & Medical NLP Model Artifacts', category: 'AI Models', description: 'Trained model weights and inference microservices optimized with TensorRT for low-latency GPU execution.', format: 'Docker Containers & PyTorch Weights' },
      { title: 'DICOM PACS & VNA Integration Gateway', category: 'Interoperability', description: 'Microservices routing diagnostic scans between hospital PACS archives and AI inference pipelines.', format: 'DCM4CHEE / Python Connectors' },
      { title: 'Explainable Clinical Decision Support Console', category: 'Clinical UI', description: 'Radiology viewing component rendering Grad-CAM diagnostic heatmaps alongside original DICOM scans.', format: 'React / Cornerstone.js Web Viewer' },
      { title: 'FDA SaMD & Regulatory Compliance Documentation', category: 'Compliance', description: 'Complete software development lifecycle documentation compliant with FDA SaMD and IEC 62304 standards.', format: 'Formal Quality Manual Dossier' },
    ],
    techStack: [
      { category: 'AI Frameworks', items: ['PyTorch', 'TensorFlow', 'MONAI (Medical Open Network for AI)', 'BioBERT', 'HuggingFace'] },
      { category: 'Medical Imaging', items: ['DICOM Standard', 'Cornerstone.js', 'DCM4CHEE', 'ITK / VTK', 'Orthanc'] },
      { category: 'Hardware & Acceleration', items: ['NVIDIA TensorRT', 'Triton Inference Server', 'CUDA', 'AWS EC2 G5 / L40S'] },
      { category: 'Clinical Ontologies', items: ['SNOMED-CT', 'LOINC', 'RxNorm', 'ICD-10-CM', 'RadLex'] },
    ],
    caseStudyQuote: {
      quote: 'Neominds developed an assistive chest X-ray triage model for our emergency department. It identifies critical pneumothorax cases in under 4 seconds, cutting time-to-treatment by 65%.',
      author: 'Dr. Gregory Thorne',
      role: 'Head of Emergency Radiology',
      company: 'St. Jude Regional Trauma Center',
      metric: '65% Faster Time-to-Treatment',
    },
    outcomes: [
      {
        metric: '3x',
        label: 'Faster Diagnostic Screening',
        description: 'Automated pre-screening flags critical imaging findings for immediate radiologist review.',
      },
      {
        metric: '97.2%',
        label: 'Clinical Extraction Accuracy',
        description: 'Converts free-text medical notes into standardized SNOMED-CT and ICD-10 diagnostic codes.',
      },
      {
        metric: '100%',
        label: 'Clinician Autonomy Preserved',
        description: 'Every algorithm operates as an assistive advisory tool requiring physician sign-off.',
      },
    ],
    faqs: [
      { question: 'Does the AI make final diagnostic decisions autonomously?', answer: 'Never. Our clinical AI systems operate strictly as assistive Clinical Decision Support (CDS) tools. They highlight areas of concern, calculate probability scores, and surface relevant clinical literature, but final diagnostic determinations always require licensed physician sign-off.' },
      { question: 'How do you prove why the AI flagged a specific region on an X-ray or CT scan?', answer: 'We implement explainable AI techniques including Grad-CAM and integrated gradients. These generate visual heatmaps directly over the original DICOM images, visually demonstrating to the radiologist exactly which pixel clusters influenced the model scoring.' },
      { question: 'How do you train medical models without violating patient privacy laws?', answer: 'We implement automated de-identification pipelines removing all 18 HIPAA Safe Harbor identifiers from DICOM headers and medical text prior to training. For multi-hospital initiatives, we employ federated learning where models train locally on hospital servers without data ever moving across perimeters.' },
      { question: 'Is the software architecture ready for FDA 510(k) or De Novo clearance?', answer: 'Yes. All development follows strict IEC 62304 medical device software lifecycle standards, with formal design history files (DHF), hazard analysis, and traceability matrices required for FDA Software as a Medical Device (SaMD) clearance.' },
    ],
    ctaHeadline: 'Ready to Integrate Explainable Medical AI into Your Clinical Workflow?',
    ctaDescription: 'Speak directly with our Medical AI Engineering leadership. We evaluate your imaging datasets, review regulatory validation criteria, and build a proof-of-concept pipeline.',
    ctaButtonText: 'Request Medical AI Consultation',
  },

  'healthcare-analytics': {
    id: 'healthcare-analytics',
    slug: 'healthcare-analytics',
    title: 'Healthcare Analytics',
    tagline: 'Population Health BI, Value-Based Care Telemetry & Epidemiological Dashboards',
    category: 'Cloud & Operations',
    heroBadge: 'Population Health & Clinical BI',
    heroHeadline: 'Population Health',
    heroHeadlineHighlight: '& Clinical Analytics',
    heroDescription:
      'We engineer population health analytics platforms, value-based care risk scoring dashboards, and epidemiological tracking systems. Aggregating clinical, billing claims, and pharmacy data streams into unified analytical marts to reduce cost of care and improve patient outcomes.',
    primaryCtaText: 'Build Health Analytics',
    secondaryCtaText: 'View Analytics Architecture',
    trustPoints: [
      'Sub-second analytical queries across millions of longitudinal patient records',
      'CMS HEDIS, MIPS, and Value-Based Care compliance metric tracking',
      'De-identification and PHI masking pipelines meeting HIPAA Safe Harbor standards',
      'Longitudinal risk stratification identifying high-utilization chronic patients',
    ],
    metrics: [
      { value: '< 100ms', label: 'Cohort Query Latency' },
      { value: '-22%', label: 'Hospital Readmissions' },
      { value: '100%', label: 'Automated HEDIS Reporting' },
      { value: 'Safe Harbor', label: 'De-Identification Standard' },
    ],
    overview: {
      statement:
        'Fragmented claims data and disconnected clinical records prevent healthcare leaders from identifying high-risk patients before acute events occur.',
      paragraphs: [
        'Transitioning from fee-for-service to value-based care requires deep analytical visibility into total cost of care, chronic disease trends, and hospital utilization metrics. Siloed clinical databases make calculating quality metrics like HEDIS and MIPS an agonizing manual ordeal.',
        'We build scalable population health analytics warehouses that ingest and normalize HL7 messages, CCDA documents, pharmacy claims, and billing records into optimized columnar data marts (ClickHouse, Snowflake).',
        'Our dashboards calculate risk stratification scores across patient cohorts, highlighting rising-risk diabetic and cardiovascular patients who need preventive care management, saving millions in emergency hospitalization costs.',
      ],
      keyTakeaway:
        'Real-time population health intelligence that identifies clinical risks early, closes care gaps, and maximizes value-based care reimbursements.',
    },
    capabilities: [
      {
        title: 'Longitudinal Population Health Data Warehousing',
        description:
          'High-speed columnar analytical warehouses (ClickHouse, Snowflake) unifying clinical EHR records, pharmacy data, and payer claims into longitudinal patient profiles.',
        tags: ['ClickHouse / Snowflake', 'Longitudinal Patient Profiles', 'Columnar Marts', 'Sub-100ms Queries'],
      },
      {
        title: 'Automated HEDIS & MIPS Quality Reporting',
        description:
          'Automated calculation of CMS quality measures (HEDIS, MIPS, Stars ratings) with automated gap-in-care identification and audit-ready data lineage.',
        tags: ['HEDIS Measure Tracking', 'MIPS Reporting', 'Gaps-in-Care Detection', 'CMS Quality Compliance'],
      },
      {
        title: 'Chronic Disease Risk Stratification Models',
        description:
          'Machine learning models stratifying patient populations into risk tiers (Charlson Comorbidity, CMS-HCC risk scores) to identify rising-risk patients before acute events.',
        tags: ['CMS-HCC Risk Scoring', 'Comorbidity Modeling', 'Risk Stratification', 'Preventive Telemetry'],
      },
      {
        title: 'HIPAA Safe Harbor De-Identification Pipelines',
        description:
          'Automated data scrubbing removing all 18 HIPAA identifiers from clinical datasets, enabling compliant secondary research and clinical trials analytics.',
        tags: ['HIPAA Safe Harbor', 'PHI Masking Pipelines', 'Secondary Research Marts', 'Differential Privacy'],
      },
      {
        title: 'Total Cost of Care & Utilization Dashboards',
        description:
          'Executive visual dashboards tracking per-member-per-month (PMPM) expenditures, emergency room utilization trends, and generic medication substitution rates.',
        tags: ['PMPM Cost Analytics', 'ER Utilization BI', 'Executive Dashboards', 'Apache ECharts'],
      },
      {
        title: 'Epidemiological Outbreak & Geospatial Mapping',
        description:
          'Geographic information system (GIS) mapping tracking regional infection clusters, vaccination rates, and social determinants of health (SDOH) across zip codes.',
        tags: ['Geospatial Health Maps', 'SDOH Data Integration', 'Cluster Detection', 'Mapbox GL'],
      },
    ],
    processSteps: [
      {
        step: '01',
        title: 'Data Ingestion & Clinical Ontology Mapping',
        description: 'Connecting claims feeds, EHR extracts, and pharmacy data streams; mapping diverse codes to standard SNOMED, LOINC, and RxNorm ontologies.',
        deliverables: ['Clinical Ingestion Map', 'Ontology Crosswalk Table', 'HIPAA De-Identification Blueprint'],
      },
      {
        step: '02',
        title: 'Warehouse Architecture & dbt Modeling',
        description: 'Deploying columnar ClickHouse / Snowflake repositories and authoring dbt models to compute longitudinal patient cohorts and HEDIS quality measures.',
        deliverables: ['Columnar Data Warehouse DDL', 'dbt Population Health Models', 'Automated Data Tests'],
      },
      {
        step: '03',
        title: 'Risk Stratification & Dashboard UI Build',
        description: 'Training HCC risk scoring models, building responsive React analytics portals, and implementing gaps-in-care alert triggers.',
        deliverables: ['React Population Health Portal', 'Risk Stratification Model', 'Gaps-in-Care Alert Engine'],
      },
      {
        step: '04',
        title: 'Audit Validation & Healthcare Rollout',
        description: 'Validating quality measure calculations against historical CMS audits, certifying Safe Harbor de-identification, and cutting over live.',
        deliverables: ['CMS Audit Validation Certificate', 'Safe Harbor Certification', 'Analyst Training Playbook'],
      },
    ],
    deliverables: [
      { title: 'Population Health Analytics Portal', category: 'Frontend UI', description: 'Interactive React dashboard suite with risk stratification filters, PMPM analytics, and geospatial maps.', format: 'React / Next.js Git Repository' },
      { title: 'Columnar Clinical Data Warehouse & dbt Core', category: 'Data Architecture', description: 'ClickHouse / Snowflake database schemas with automated dbt transformation models for clinical data.', format: 'ClickHouse DDL & dbt Project' },
      { title: 'CMS HEDIS & Quality Measure Calculation Engine', category: 'Analytics Core', description: 'Automated microservice calculating quality measures and identifying specific gaps-in-care across patients.', format: 'Python / SQL Transformation Engine' },
      { title: 'HIPAA Safe Harbor De-Identification Tooling', category: 'Compliance', description: 'Automated data pipeline scrubbing 18 PHI identifiers for research data sharing.', format: 'Python Microservice & Tests' },
    ],
    techStack: [
      { category: 'Data Warehousing', items: ['ClickHouse', 'Snowflake', 'PostgreSQL Timescale', 'Google BigQuery'] },
      { category: 'Data Engineering', items: ['dbt Core', 'Apache Airflow', 'Debezium', 'Kafka', 'Apache Spark'] },
      { category: 'Health Data Standards', items: ['CCDA', 'HL7 FHIR R4', 'LOINC', 'SNOMED-CT', 'RxNorm', 'CMS-HCC'] },
      { category: 'Visualization & Maps', items: ['Apache ECharts', 'Mapbox GL', 'React 19', 'Next.js', 'Tailwind CSS'] },
    ],
    caseStudyQuote: {
      quote: 'Neominds built our population health analytics warehouse. We unified data across 450,000 covered lives, identifying 18,000 unaddressed care gaps and saving $4.8M in preventable hospital admissions.',
      author: 'Dr. Jonathan Blake',
      role: 'Chief Medical Officer',
      company: 'Alliance ACO Healthcare',
      metric: '$4.8M Saved in Preventable Care',
    },
    outcomes: [
      {
        metric: '-22%',
        label: 'High-Cost Hospital Readmissions',
        description: 'Proactive risk stratification enables targeted preventative care interventions.',
      },
      {
        metric: '100%',
        label: 'Automated Quality Reporting',
        description: 'Eliminates months of manual chart abstraction for quality compliance audits.',
      },
      {
        metric: '< 100ms',
        label: 'Cohort Query Speed',
        description: 'Instant demographic and clinical filtering across multi-million patient registries.',
      },
    ],
    faqs: [
      { question: 'How do you merge patient records across disparate EHR and claims systems?', answer: 'We implement Master Patient Index (MPI) algorithms combining probabilistic matching on demographics, national provider identifiers (NPI), and insurance member IDs, resolving duplicate patient entities with 99.8% precision.' },
      { question: 'Can the analytics platform identify patients with unclosed care gaps in real time?', answer: 'Yes. The system continuously evaluates patient records against HEDIS and USPSTF clinical guidelines (e.g., overdue diabetic retinal exams, colorectal cancer screenings), flagging care gaps directly to care managers.' },
      { question: 'How is patient data de-identified for clinical research and trials?', answer: 'We employ automated de-identification pipelines strictly complying with HIPAA Safe Harbor methodology, removing all 18 personal identifiers, jittering dates, and truncating zip codes to ensure zero re-identification risk.' },
      { question: 'Can non-technical medical directors build custom patient cohorts without writing SQL?', answer: 'Yes. Our intuitive cohort builder UI allows clinical leaders to filter patient populations using simple drop-downs (e.g., "HbA1c > 9.0 AND missed appointment in last 90 days") and export results instantly.' },
    ],
    ctaHeadline: 'Ready to Unlock Real-Time Clinical and Population Health Intelligence?',
    ctaDescription: 'Schedule a technical session with our Healthcare Data Architects. We analyze your claims data pipelines, design your clinical data mart, and deliver a clear architecture plan.',
    ctaButtonText: 'Request Health Data Architecture Review',
  },

  'healthcare-automation': {
    id: 'healthcare-automation',
    slug: 'healthcare-automation',
    title: 'Healthcare Automation',
    tagline: 'Prior Authorization Automation, Revenue Cycle Management & Clinical Routing',
    category: 'Cloud & Operations',
    heroBadge: 'Revenue Cycle & Clinical Automation',
    heroHeadline: 'Healthcare Workflow',
    heroHeadlineHighlight: '& Revenue Cycle Automation',
    heroDescription:
      'We engineer deterministic healthcare automation pipelines that eliminate clinical administrative friction. From automated prior authorization submissions and insurance eligibility verification to claims denial management and EHR patient scheduling.',
    primaryCtaText: 'Automate Health Workflows',
    secondaryCtaText: 'Explore Clinical Automation',
    trustPoints: [
      'Automated electronic prior authorization (ePA) integrated with major payers',
      'Sub-30-second real-time insurance eligibility (EDI 270/271) verification',
      'Automated claims scrubbers reducing payer denial rates below 2%',
      'Full compliance with HIPAA administrative simplification mandates',
    ],
    metrics: [
      { value: '85%', label: 'Faster Prior Authorizations' },
      { value: '< 2%', label: 'Claims Denial Rate' },
      { value: '< 30s', label: 'Eligibility Verification' },
      { value: '3x', label: 'Faster Cash Collections' },
    ],
    overview: {
      statement:
        'Manual prior authorization faxes and claims denial appeals cost hospitals billions and unacceptably delay patient medical treatments.',
      paragraphs: [
        'Hospital administrative staff spend tens of thousands of hours on the phone with insurance payers, manually filling out prior authorization paperwork, and tracking down denied claims. These delays leave patients waiting weeks for essential treatments and choke hospital cash flow.',
        'We build intelligent healthcare workflow automation pipelines that extract clinical necessity criteria directly from EHR clinical notes. Our systems package clinical evidence and submit electronic prior authorizations (ePA) directly to payer portals via standardized X12 EDI and Da Vinci FHIR APIs.',
        'Claims are automatically scrubbed against payer-specific billing rules prior to submission, reducing initial denial rates by up to 60% and cutting accounts receivable cycles from 45 days to under two weeks.',
      ],
      keyTakeaway:
        'Zero-touch clinical administration pipelines that eliminate prior authorization delays, reduce insurance denials, and accelerate hospital revenue.',
    },
    capabilities: [
      {
        title: 'Automated Electronic Prior Authorization (ePA)',
        description:
          'Extracting clinical necessity documentation from EHR charts and submitting structured electronic prior authorizations to payers via Da Vinci FHIR and CoverMyMeds APIs.',
        tags: ['Electronic Prior Auth (ePA)', 'Da Vinci FHIR', 'CoverMyMeds', 'Clinical Necessity Extraction'],
      },
      {
        title: 'Real-Time Insurance Eligibility Verification (EDI 270/271)',
        description:
          'Sub-30-second automated insurance verification checking copays, deductibles, and active coverage limits before patient clinic appointments.',
        tags: ['EDI 270/271', 'Real-Time Eligibility', 'Deductible Verification', 'Copay Estimation'],
      },
      {
        title: 'Claims Denial Prevention & Automated Scrubbing (EDI 837)',
        description:
          'Pre-submission claims scrubbers validating medical necessity codes, modifier combinations, and payer-specific billing rules to stop rejections before submission.',
        tags: ['EDI 837 Claims', 'Denial Scrubbing', 'Medical Necessity Checks', 'Modifier Validation'],
      },
      {
        title: 'Automated Remittance & Payment Posting (EDI 835)',
        description:
          'Automatic parsing of Electronic Remittance Advice (ERA 835) files, matching payer reimbursements to patient accounts and identifying short-payments.',
        tags: ['EDI 835 ERA', 'Automated Remittance Posting', 'Short-Payment Detection', 'Cash Flow Acceleration'],
      },
      {
        title: 'Clinical Orders Routing & Referral Coordination',
        description:
          'Automating specialty referral routing, insurance pre-clearance, and patient appointment outreach without manual administrative phone calls.',
        tags: ['Referral Coordination', 'Pre-Clearance Routing', 'Automated Outreach', 'EHR Order Queues'],
      },
      {
        title: 'Exception Triage & Human-in-the-Loop Appeals Console',
        description:
          'Review consoles allowing medical billing specialists to review flagged claims denials, inspect AI-compiled appeal letters, and submit with one click.',
        tags: ['Appeals Automation', 'Denial Management', '1-Click Review Console', 'Audit Trails'],
      },
    ],
    processSteps: [
      {
        step: '01',
        title: 'RCM Bottleneck Analysis & Payer Audit',
        description: 'Auditing claims denial reasons, identifying top prior authorization delays, and mapping clearinghouse X12 EDI endpoints.',
        deliverables: ['RCM Denial Analysis Report', 'EDI 270/271 & 837 Integration Spec', 'Automation ROI Model'],
      },
      {
        step: '02',
        title: 'Prior Auth Pipeline & Claims Scrubber Build',
        description: 'Building clinical necessity extraction pipelines, configuring electronic prior auth endpoints, and coding payer-specific claims validation rules.',
        deliverables: ['Automated Prior Auth Microservice', 'Pre-Submission Claims Scrubber', 'Sandbox Test Harness'],
      },
      {
        step: '03',
        title: 'EHR Connector & Billing Console Setup',
        description: 'Connecting Epic / Cerner EHR billing queues, deploying the billing specialist exception review console, and testing automated remittance posting.',
        deliverables: ['EHR Billing Connector', 'Billing Specialist Review Console', 'Automated 835 Remittance Parser'],
      },
      {
        step: '04',
        title: 'Clearinghouse Certification & Production Launch',
        description: 'Executing end-to-end transaction testing with healthcare clearinghouses, certifying zero error rates, and cutting over live.',
        deliverables: ['Clearinghouse Certification Sign-Off', 'Production Deployment Manifests', 'Billing Operations Runbook'],
      },
    ],
    deliverables: [
      { title: 'Electronic Prior Authorization Automation Service', category: 'Automation Core', description: 'Microservices extracting clinical criteria from EHRs and submitting electronic prior authorizations.', format: 'Python / FastAPI Microservice' },
      { title: 'Real-Time Eligibility & Claims Scrubber Suite', category: 'RCM Core', description: 'Engine executing EDI 270/271 eligibility checks and scrubbing EDI 837 claims prior to submission.', format: 'Node.js / Go Service' },
      { title: 'Billing Specialist Exception Review Portal', category: 'Operations UI', description: 'React dashboard allowing billing teams to inspect flagged denials and submit automated appeal letters.', format: 'React / Next.js Web Portal' },
      { title: 'EDI 835 Automated Remittance Posting Module', category: 'Financial Tools', description: 'Automated parser matching electronic remittance advice to hospital accounting ledgers.', format: 'Python Microservice & SQL Tests' },
    ],
    techStack: [
      { category: 'Health EDI Standards', items: ['EDI 270/271 (Eligibility)', 'EDI 837 (Claims)', 'EDI 835 (Remittance)', 'X12 Standards'] },
      { category: 'Clinical APIs', items: ['HL7 FHIR R4', 'Da Vinci Project APIs', 'Change Healthcare', 'CoverMyMeds API'] },
      { category: 'Backend & Orchestration', items: ['Python', 'Node.js', 'Temporal.io', 'PostgreSQL', 'Redis'] },
      { category: 'Frontend', items: ['React 19', 'Next.js', 'Tailwind CSS', 'Accessible Tables'] },
    ],
    caseStudyQuote: {
      quote: 'Neominds automated our prior authorization and claims scrubbing workflows. Our prior auth turnaround dropped from 6 days to 3 hours, and our clean claims rate reached 98.4%.',
      author: 'Marcus Vance',
      role: 'VP of Revenue Cycle Management',
      company: 'Premier Surgical Care',
      metric: '3-Hour Prior Auth Turnaround',
    },
    outcomes: [
      {
        metric: '85%',
        label: 'Faster Prior Authorization',
        description: 'Reduces average prior auth turnaround from 5 business days to under 4 hours.',
      },
      {
        metric: '< 2%',
        label: 'Clean Claims Denial Rate',
        description: 'Pre-submission automated rule scrubbing catches billing coding discrepancies upfront.',
      },
      {
        metric: '3x',
        label: 'Faster Cash Collections',
        description: 'Accelerates insurance payer reimbursements and cuts days in accounts receivable (AR).',
      },
    ],
    faqs: [
      { question: 'How does automated prior authorization extract clinical necessity from doctor notes?', answer: 'Our multimodal extraction engine scans physician clinical notes and lab reports for diagnosis codes, previous conservative treatment history, and clinical indications required by specific payer policies, auto-populating ePA forms with exact source citations.' },
      { question: 'Which clearinghouses and payers can your platform connect with?', answer: 'We connect directly with major healthcare clearinghouses (Change Healthcare, Availity, Waystar) and support direct payer APIs (CoverMyMeds, Da Vinci FHIR) using standard X12 EDI protocols.' },
      { question: 'How does the system prevent claims denials before submission?', answer: 'Our claims scrubber checks each EDI 837 claim against millions of historic payer-specific rules, verifying NPI numbers, pre-authorization codes, modifier dependencies, and diagnosis-procedure code pairings prior to clearinghouse submission.' },
      {
        question: 'What happens when a claim is denied despite pre-submission checks?',
        answer:
          'The system automatically ingests the EDI 835 denial code, identifies the missing documentation or modifier, and drafts a detailed, evidence-backed appeal packet for one-click review by a billing specialist.',
      },
    ],
    ctaHeadline: 'Ready to Eliminate Prior Authorization Delays and Claims Denials?',
    ctaDescription: 'Connect with our Healthcare Automation Specialists. We evaluate your RCM workflows, calculate operational cost savings, and demo a live prior authorization pipeline.',
    ctaButtonText: 'Request Healthcare Automation Discovery',
  },

  /* =========================================================================
     ENTERPRISE AI SERVICES (5 SERVICES)
     ========================================================================= */
  'ai-product-engineering': {
    id: 'ai-product-engineering',
    slug: 'ai-product-engineering',
    title: 'AI Product Engineering',
    tagline: 'Enterprise AI Product Design, Foundation Model Integration & Production Runtimes',
    category: 'AI & Intelligence',
    heroBadge: 'AI Product Strategy & Core',
    heroHeadline: 'Enterprise AI',
    heroHeadlineHighlight: 'Product Engineering',
    heroDescription:
      'We architect, design, and ship production-grade software applications built natively around artificial intelligence. From intuitive user interfaces designed for probabilistic AI outputs to low-latency model inference pipelines and commercial subscription billing.',
    primaryCtaText: 'Architect AI Product',
    secondaryCtaText: 'View AI Product Blueprint',
    trustPoints: [
      'Human-centered UX designed specifically for probabilistic and generative AI interactions',
      'Multi-model routing gateways optimizing cost, latency, and reasoning capability',
      'End-to-end telemetry tracking user engagement, hallucination rates, and unit margins',
      '100% intellectual property ownership of product frontend, backend, and fine-tuned weights',
    ],
    metrics: [
      { value: '+60%', label: 'User Retention Lift' },
      { value: '< 200ms', label: 'Streaming UI First Token' },
      { value: '-55%', label: 'Model Inference Costs' },
      { value: '100%', label: 'Proprietary IP Ownership' },
    ],
    overview: {
      statement:
        'Most enterprise AI initiatives stall because companies treat models as science experiments rather than dependable software products.',
      paragraphs: [
        'We engineer full-stack software products built from the ground up with embedded artificial intelligence. We design intuitive interfaces that guide user expectations, handle probabilistic uncertainty gracefully, and provide instant optimistic responses through streaming token architectures.',
        'Behind the user interface, we build intelligent model orchestration proxies that route simple queries to fast, low-cost models (e.g., Llama 3 8B) while delegating complex reasoning to high-capacity models (Claude 3.5 Sonnet, DeepSeek R1), protecting your gross margins.',
      ],
      keyTakeaway:
        'Defensible, high-retention enterprise AI products engineered for exceptional user experience, low latency, and sustainable unit economics.',
    },
    capabilities: [
      {
        title: 'Probabilistic AI Interaction & UX Design',
        description:
          'Designing UI patterns specifically for generative AI: optimistic rendering, streaming token animations, user feedback thumbs, citation side-panels, and inline regeneration controls.',
        tags: ['Probabilistic UX', 'Streaming Token UI', 'Inline Regeneration', 'Citation Side-Panels'],
      },
      {
        title: 'Intelligent Multi-Model Routing & Caching Gateway',
        description:
          'Dynamic proxy evaluating prompt complexity to route queries to the most cost-effective model (Llama 3, Claude, GPT-4o) with semantic Redis prompt caching.',
        tags: ['Model Routing Proxy', 'Semantic Prompt Caching', 'Cost Optimization', 'Fallback Hierarchies'],
      },
      {
        title: 'Multi-Tenant SaaS Architecture & User Isolation',
        description:
          'Enterprise multi-tenant core with strict row-level data isolation, role-based workspace permissions, and organizational SSO authentication (SAML / Okta).',
        tags: ['Multi-Tenant SaaS', 'Row-Level Security', 'SAML / Okta SSO', 'Workspace Isolation'],
      },
      {
        title: 'Token Usage Metering & Usage-Based Monetization',
        description:
          'Integrated billing engines tracking per-seat and per-token consumption with Stripe integration, prepaid credits, and automated tier threshold upgrades.',
        tags: ['Token Metering', 'Stripe Usage Billing', 'Prepaid Credits', 'Quota Enforcement'],
      },
      {
        title: 'Guardrail Enforcement & Brand Voice Alignment',
        description:
          'Multi-stage evaluation layers enforcing brand voice guidelines, content moderation, PII redaction, and strict boundary rules preventing prompt injection exploits.',
        tags: ['Brand Voice Alignment', 'NeMo Guardrails', 'PII Masking', 'Adversarial Defense'],
      },
      {
        title: 'Real-Time User Feedback & Active Learning Loops',
        description:
          'Capturing user prompt edits, thumbs-up/down ratings, and session engagement to generate continuous fine-tuning datasets and evaluation benchmarks.',
        tags: ['Active Learning', 'RLHF Feedback Loops', 'Dataset Synthesis', 'Accuracy Telemetry'],
      },
    ],
    processSteps: [
      {
        step: '01',
        title: 'Product Strategy & Unit Economic Modeling',
        description: 'Defining core value proposition, prototyping probabilistic UX interaction patterns, and modeling gross margin per user query.',
        deliverables: ['AI Product PRD', 'Interactive Figma Prototype', 'Unit Economics & Token Margin Model'],
      },
      {
        step: '02',
        title: 'Model Routing & Full-Stack Core Build',
        description: 'Developing the multi-model proxy, building the streaming frontend application, and configuring semantic vector retrieval.',
        deliverables: ['Multi-Model Routing Gateway', 'Streaming React Application', 'Vector Search Sandbox'],
      },
      {
        step: '03',
        title: 'Metering, Billing & Security Guardrails',
        description: 'Integrating Stripe usage-based billing, configuring prompt injection guardrails, and enforcing multi-tenant data isolation.',
        deliverables: ['Stripe Metering Integration', 'Guardrail Configuration Suite', 'Security Audit Report'],
      },
      {
        step: '04',
        title: 'Beta Launch & Telemetry Optimization',
        description: 'Launching invite-only beta, analyzing real user token latency and satisfaction, and fine-tuning prompt caching for launch.',
        deliverables: ['Production Cloud Deployment', 'Live Telemetry Dashboard', 'Product Operations Playbook'],
      },
    ],
    deliverables: [
      { title: 'Full AI Product Application Codebase', category: 'Product Core', description: 'Complete Next.js 15, React 19, and Python backend source code with 100% intellectual property ownership.', format: 'Git Repository (TypeScript / Python)' },
      { title: 'Intelligent Model Routing & Caching Gateway', category: 'AI Infrastructure', description: 'Microservices handling model routing, semantic caching, and streaming token delivery.', format: 'Dockerized Services & Redis Config' },
      { title: 'Usage Metering & Stripe Subscription Engine', category: 'Monetization Core', description: 'Billing module managing per-token metering, tiered pricing, and automated Stripe billing.', format: 'Node.js / Stripe SDK Services' },
      { title: 'Product Telemetry & Active Learning Suite', category: 'Observability', description: 'Dashboard tracking token consumption costs, user retention, prompt satisfaction, and latency.', format: 'PostHog / LangSmith Integration' },
    ],
    techStack: [
      { category: 'Frontend & UX', items: ['Next.js 15', 'React 19', 'Tailwind CSS', 'Framer Motion', 'Vercel AI SDK'] },
      { category: 'AI Models & Routing', items: ['Claude 3.5 Sonnet', 'Llama 3.3', 'DeepSeek R1', 'GPT-4o', 'vLLM'] },
      { category: 'Backend & Data', items: ['Python (FastAPI)', 'Node.js', 'PostgreSQL (pgvector)', 'Redis', 'Qdrant'] },
      { category: 'Monetization & Auth', items: ['Stripe Billing', 'Clerk / WorkOS', 'Auth0 / Okta SSO', 'Docker'] },
    ],
    caseStudyQuote: {
      quote: 'Neominds engineered our B2B legal contract analysis platform from concept to launch. We achieved an 84% gross margin by implementing their multi-model routing gateway and scaled to 45,000 paying users.',
      author: 'Harrison Vance',
      role: 'Founder & CEO',
      company: 'LexisAI Global',
      metric: '84% Gross Margin at Scale',
    },
    outcomes: [
      {
        metric: '+60%',
        label: 'User Retention Lift',
        description: 'Intuitive probabilistic UX and instant streaming responses keep users actively engaged.',
      },
      {
        metric: '-55%',
        label: 'Model Inference Costs',
        description: 'Intelligent prompt caching and semantic model routing slash API expenses at scale.',
      },
      {
        metric: '100%',
        label: 'Proprietary IP Ownership',
        description: 'Complete control over software architecture, customer data, and adapted model assets.',
      },
    ],
    faqs: [
      { question: 'How do you prevent high LLM API bills from destroying our software profit margins?', answer: 'We build an intelligent routing proxy with semantic Redis caching. Frequent queries return instantly from cache at zero cost. Simple classification tasks route to efficient models (Llama 3 8B), while only complex reasoning triggers high-tier models, preserving 80%+ gross margins.' },
      { question: 'How do you design interfaces that handle AI hallucinations and errors gracefully?', answer: 'We design UI components that communicate confidence visually, provide direct citation links to source documents, and allow users to inspect, edit, or regenerate responses inline with a single click.' },
      { question: 'Can our enterprise customers authenticate using their own Okta or Azure AD SAML?', answer: 'Yes. We architect enterprise single sign-on (SSO) with SCIM provisioning, allowing corporate customers to authenticate through Okta, Azure Active Directory, or Ping Identity with strict workspace data isolation.' },
      { question: 'Do we own 100% of the software source code and AI fine-tuning weights?', answer: 'Yes. All application source code, custom fine-tuning datasets, model weights, and cloud infrastructure scripts belong entirely to your company from day one with zero vendor lock-in.' },
    ],
    ctaHeadline: 'Ready to Build a Defensible, Scalable AI Product?',
    ctaDescription: 'Consult with our AI Product Architects. We review your concept, audit technical feasibility, model unit economics, and deliver a complete product engineering plan.',
    ctaButtonText: 'Request AI Product Consultation',
  },

  'applied-ai': {
    id: 'applied-ai',
    slug: 'applied-ai',
    title: 'Applied AI',
    tagline: 'Domain-Specific Machine Learning, Predictive Modeling & Operational AI',
    category: 'AI & Intelligence',
    heroBadge: 'Applied Machine Learning',
    heroHeadline: 'Domain-Specific',
    heroHeadlineHighlight: 'Applied Machine Learning',
    heroDescription:
      'We engineer practical, production-hardened machine learning systems tailored to specific industry domains. From predictive maintenance models and churn prediction classifiers to dynamic pricing algorithms and demand forecasting pipelines.',
    primaryCtaText: 'Deploy Applied AI',
    secondaryCtaText: 'Inspect ML Architectures',
    trustPoints: [
      'Rigorous cross-validation preventing data leakage and model overfitting',
      'Sub-50ms inference endpoints deployed on auto-scaling cloud microservices',
      'Automated model retraining pipelines detecting concept and data drift',
      'Explainable machine learning outputs with SHAP and LIME feature attribution',
    ],
    metrics: [
      { value: '94.8%', label: 'Predictive Precision' },
      { value: '< 50ms', label: 'Inference Latency' },
      { value: 'Zero Drift', label: 'Automated Retraining' },
      { value: 'SHAP / LIME', label: 'Explainable AI Attribution' },
    ],
    overview: {
      statement:
        'Academic machine learning models fail in the real world when data is noisy, missing, or drifting over time.',
      paragraphs: [
        'Machine learning proofs-of-concept frequently rot in Jupyter notebooks because they cannot handle corrupted production data streams, changing market conditions, or real-time latency constraints. Applied AI requires rigorous MLOps and battle-tested feature engineering.',
        'We engineer production ML pipelines that solve concrete operational bottlenecks. We clean raw enterprise data, build automated feature stores (Feast, Hopsworks), and train robust supervised and unsupervised models (LightGBM, XGBoost, PyTorch).',
        'Every deployed model is monitored with continuous telemetry that tracks prediction distributions, alerting engineers the moment input data drifts, and triggering automated retraining pipelines before accuracy degrades.',
      ],
      keyTakeaway:
        'Production machine learning systems that run reliably on noisy enterprise data, delivering measurable predictive accuracy and continuous business value.',
    },
    capabilities: [
      {
        title: 'Feature Engineering & Production Feature Stores',
        description:
          'Building unified feature stores (Feast, Hopsworks) that compute streaming and batch features consistently across training and real-time inference without data leakage.',
        tags: ['Feast Feature Store', 'Batch & Streaming Features', 'Zero Data Leakage', 'Feature Versioning'],
      },
      {
        title: 'Tabular Predictive Modeling (LightGBM & XGBoost)',
        description:
          'High-accuracy gradient-boosted decision trees and ensemble classifiers optimized for churn prediction, credit scoring, lead qualification, and customer lifetime value.',
        tags: ['LightGBM', 'XGBoost', 'Customer Churn Classifiers', 'LTV Forecasting'],
      },
      {
        title: 'Time-Series Demand Forecasting & Inventory Optimization',
        description:
          'Multi-variate forecasting models predicting SKU-level demand, supply chain lead times, and seasonal stock requirements to prevent stockouts and overages.',
        tags: ['Demand Forecasting', 'Time-Series Modeling', 'Prophet / LSTM', 'Inventory Optimization'],
      },
      {
        title: 'Dynamic Pricing & Revenue Optimization Algorithms',
        description:
          'Real-time pricing engines calculating price elasticity, competitor benchmark shifts, and inventory decay rates to maximize gross margin and sell-through velocity.',
        tags: ['Dynamic Pricing', 'Price Elasticity', 'Margin Optimization', 'Real-Time Adjustments'],
      },
      {
        title: 'Predictive Maintenance & IoT Anomaly Detection',
        description:
          'Industrial IoT telemetry models analyzing vibration, temperature, and pressure sensor streams to predict equipment failure days before critical breakdowns.',
        tags: ['Predictive Maintenance', 'IoT Sensor Streaming', 'Autoencoder Anomaly Detection', 'Zero Downtime'],
      },
      {
        title: 'Explainable AI (XAI) & Model Auditing',
        description:
          'Integrating SHAP (Shapley Additive exPlanations) and LIME feature importance into executive dashboards, explaining exactly which variables drove every prediction.',
        tags: ['SHAP Values', 'LIME Explanations', 'Model Governance', 'Transparent Decisioning'],
      },
    ],
    processSteps: [
      {
        step: '01',
        title: 'Data Feasibility & Baseline Audit',
        description: 'Auditing historical enterprise data, identifying feature signal strength, detecting missing variables, and establishing benchmark baseline metrics.',
        deliverables: ['Data Readiness Assessment', 'Feature Hypothesis Matrix', 'Baseline Accuracy Benchmark'],
      },
      {
        step: '02',
        title: 'Feature Engineering & Model Training',
        description: 'Building automated data cleaning pipelines, engineering domain-specific features, and training cross-validated model ensembles.',
        deliverables: ['Feature Store Pipeline', 'Trained Model Weights', 'Cross-Validation Accuracy Report'],
      },
      {
        step: '03',
        title: 'Containerized Endpoint & Drift Telemetry',
        description: 'Deploying Triton / FastAPI inference microservices with sub-50ms latency and instrumenting Evidently.ai data drift monitoring.',
        deliverables: ['Inference Microservice Docker Container', 'Evidently.ai Drift Monitor', 'SHAP Attribution API'],
      },
      {
        step: '04',
        title: 'Production Integration & Automated Retraining',
        description: 'Integrating predictions into core ERP/CRM business tools and automating weekly model retraining on fresh verified data.',
        deliverables: ['Production Integration Webhooks', 'Automated Retraining DAG', 'MLOps Operations Runbook'],
      },
    ],
    deliverables: [
      { title: 'Containerized ML Inference Microservices', category: 'ML Core', description: 'Triton / FastAPI model inference container serving predictions with sub-50ms latency.', format: 'Docker Containers & Model Weights' },
      { title: 'Automated Feature Store & ETL Pipeline', category: 'Data Architecture', description: 'Feast feature store configuration and automated transformation scripts for batch and streaming data.', format: 'Python / Feast Codebase' },
      { title: 'Explainable AI (SHAP) Attribution Dashboard', category: 'Explainability', description: 'Interactive dashboard rendering waterfall plots and feature rankings for every model prediction.', format: 'React / Streamlit Console' },
      { title: 'Continuous Drift Monitoring & Retraining DAG', category: 'MLOps', description: 'Airflow / Kubeflow pipeline tracking prediction distributions and triggering automated retraining.', format: 'Airflow DAG Scripts & Tests' },
    ],
    techStack: [
      { category: 'Machine Learning', items: ['LightGBM', 'XGBoost', 'CatBoost', 'PyTorch', 'Scikit-learn'] },
      { category: 'MLOps & Feature Stores', items: ['Feast', 'MLflow', 'Triton Inference Server', 'Evidently.ai', 'Kubeflow'] },
      { category: 'Data Processing', items: ['Python (Pandas, Polars)', 'Apache Spark', 'PostgreSQL', 'DuckDB'] },
      { category: 'Explainability & Serving', items: ['SHAP', 'LIME', 'FastAPI', 'Docker', 'Kubernetes'] },
    ],
    caseStudyQuote: {
      quote: 'Neominds built our industrial predictive maintenance pipeline. Analyzing 8,000 factory sensor streams, the model detected 14 impending turbine failures, saving our plants $3.4M in unplanned downtime.',
      author: 'Carl Gustafsson',
      role: 'Director of Plant Operations',
      company: 'AeroPower Industrial',
      metric: '$3.4M Downtime Avoided',
    },
    outcomes: [
      {
        metric: '94.8%',
        label: 'Predictive Precision',
        description: 'Rigorous feature engineering and cross-validation deliver reliable real-world forecasts.',
      },
      {
        metric: '< 50ms',
        label: 'Endpoint Inference Speed',
        description: 'Optimized containerized model endpoints serve thousands of concurrent scoring requests.',
      },
      {
        metric: '0',
        label: 'Undetected Model Drift',
        description: 'Continuous telemetry catches changing distribution trends before business metrics are impacted.',
      },
    ],
    faqs: [
      { question: 'How do you prevent machine learning models from becoming outdated over time?', answer: 'We implement continuous data drift and concept drift monitoring using Evidently.ai. The moment input features deviate from the training distribution or prediction accuracy dips, an automated Airflow DAG triggers model retraining on fresh data.' },
      { question: 'Can the models explain why they made a specific prediction to non-technical users?', answer: 'Yes. We integrate SHAP (Shapley Additive exPlanations) into every inference call, outputting exact positive and negative contribution scores for each variable so executives understand the business factors driving the prediction.' },
      { question: 'What data volume is required to train an effective predictive model?', answer: 'While deep learning requires massive datasets, tabular algorithms like LightGBM and XGBoost achieve high predictive accuracy with as few as 5,000 to 20,000 historical records when paired with thoughtful domain feature engineering.' },
      { question: 'How do you handle missing or corrupted data in live production streams?', answer: 'Our inference pipelines include automated data cleaning and imputation layers that flag corrupted values, apply median/mode imputations where appropriate, and route anomalous records for review.' },
    ],
    ctaHeadline: 'Ready to Put Machine Learning to Work on Your Operational Data?',
    ctaDescription: 'Connect with our Applied AI Engineers. We evaluate your historical data, validate predictive feasibility, and outline a production ML deployment roadmap.',
    ctaButtonText: 'Request Applied ML Review',
  },

  'ai-agent-systems': {
    id: 'ai-agent-systems',
    slug: 'ai-agent-systems',
    title: 'AI Agent Systems',
    tagline: 'Distributed Multi-Agent Architectures, Dynamic Negotiation & Swarm Intelligence',
    category: 'AI & Intelligence',
    heroBadge: 'Multi-Agent Swarms & Systems',
    heroHeadline: 'Distributed Multi-Agent',
    heroHeadlineHighlight: 'Systems & Swarm Architecture',
    heroDescription:
      'We build enterprise-grade distributed multi-agent systems where autonomous software entities negotiate, collaborate, and execute complex multi-system workflows. Featuring decentralized coordination, asynchronous messaging buses, and verifiable task outcomes.',
    primaryCtaText: 'Deploy Agent Swarms',
    secondaryCtaText: 'Inspect Swarm Architecture',
    trustPoints: [
      'Asynchronous event-driven agent communication via Kafka and gRPC',
      'Deterministic task verification preventing conflicting agent state mutations',
      'Cryptographically signed tool invocations and action ledgers',
      'Dynamic swarm load balancing across auto-scaling compute clusters',
    ],
    metrics: [
      { value: '96.5%', label: 'Multi-Step Task Success' },
      { value: '12x', label: 'Faster Project Execution' },
      { value: '100%', label: 'Verifiable Action Ledger' },
      { value: 'Zero Single', label: 'Points of Failure' },
    ],
    overview: {
      statement:
        'Individual AI agents hit hard limits on complex tasks; true enterprise automation requires coordinated swarms of specialized agents.',
      paragraphs: [
        'Asking a single monolithic language model prompt to research, code, test, deploy, and audit an enterprise workflow guarantees failure. Just like human organizations, complex objectives require division of labor, peer review, and specialized competencies.',
        'We build distributed multi-agent architectures where specialized software agents communicate across asynchronous event buses. A strategic planner delegates work to specialized worker agents, who pass intermediate results to dedicated validation and security agents for cross-verification.',
        'When agents disagree or produce conflicting outputs, our consensus protocols (majority voting, adversarial debate, or executive adjudication) resolve discrepancies deterministically, ensuring high-reliability task execution.',
      ],
      keyTakeaway:
        'Coordinated multi-agent swarms that execute end-to-end corporate initiatives with built-in consensus, verification, and zero single points of failure.',
    },
    capabilities: [
      {
        title: 'Decentralized Swarm Coordination & Consensus',
        description:
          'Multi-agent consensus protocols (majority voting, peer critique, arbitration agents) ensuring agent swarms resolve conflicting findings and reach verified conclusions.',
        tags: ['Swarm Consensus', 'Peer Critique Protocols', 'Arbitration Nodes', 'Decentralized Coordination'],
      },
      {
        title: 'Asynchronous Event Bus & Inter-Agent Messaging',
        description:
          'Low-overhead event streaming using Apache Kafka and gRPC, allowing hundreds of concurrent agents to publish and subscribe to state updates without blocking.',
        tags: ['Kafka Event Streaming', 'gRPC Inter-Agent Bus', 'Asynchronous Queues', 'Decoupled State'],
      },
      {
        title: 'Specialized Role-Based Agent Personas',
        description:
          'Configuring specialized agents: Strategic Planner, Data Ingester, Code Generator, Security Auditor, and Quality Validator working in modular harmony.',
        tags: ['Planner-Worker Pattern', 'Security Auditor Agent', 'Quality Validator Agent', 'Domain Specialization'],
      },
      {
        title: 'Sandboxed Tool Execution & Safe Environment Runtimes',
        description:
          'Isolating tool executions in ephemeral Docker containers and WebAssembly runtimes with network egress filters and strict parameter schema validation.',
        tags: ['Wasm Sandboxes', 'Ephemeral Docker Containers', 'Network Egress Rules', 'Safe Tool Calling'],
      },
      {
        title: 'Long-Horizon Episodic & Collaborative Memory',
        description:
          'Shared and private vector memory architectures (Qdrant, Redis) allowing agents to build on each other work and retain historical project context.',
        tags: ['Shared Vector Memory', 'Episodic Context', 'Redis Semantic Store', 'Multi-Session Retention'],
      },
      {
        title: 'Cryptographic Audit Trails & Decision Replays',
        description:
          'Every inter-agent message, tool call, and consensus vote is cryptographically signed and recorded in an immutable ledger for complete regulatory replay.',
        tags: ['Cryptographic Audit Trails', 'Decision Replay Tools', 'Immutable Ledgers', 'Compliance Verification'],
      },
    ],
    processSteps: [
      {
        step: '01',
        title: 'Swarm Topology & Role Definition',
        description: 'Decomposing complex enterprise objectives, defining specialized agent roles, designing consensus protocols, and establishing tool boundaries.',
        deliverables: ['Swarm Topology Architecture Map', 'Agent Role Specifications', 'Tool Execution Schema Matrix'],
      },
      {
        step: '02',
        title: 'Inter-Agent Bus & Memory Layer Setup',
        description: 'Deploying Kafka / gRPC messaging buses, standing up shared vector memory stores, and configuring sandboxed execution runtimes.',
        deliverables: ['Kafka Inter-Agent Message Bus', 'Shared Memory Layer', 'Sandboxed Execution Environment'],
      },
      {
        step: '03',
        title: 'Adversarial Stress Testing & Consensus Tuning',
        description: 'Simulating agent failure modes, injecting adversarial prompts, and tuning consensus voting rules to eliminate deadlock scenarios.',
        deliverables: ['Adversarial Stress Benchmark', 'Deadlock Resolution Suite', 'Security Audit Report'],
      },
      {
        step: '04',
        title: 'Production Orchestration & Swarm Launch',
        description: 'Deploying auto-scaling agent clusters on Kubernetes with LangSmith observability tracing and live execution telemetry dashboards.',
        deliverables: ['Production Kubernetes Manifests', 'Live Swarm Telemetry Dashboard', 'Operator Runbook'],
      },
    ],
    deliverables: [
      { title: 'Distributed Multi-Agent Swarm Core Engine', category: 'Agent Core', description: 'Complete Python / LangGraph source code for planner, worker, and consensus agents with full IP ownership.', format: 'Python / LangGraph Repositories' },
      { title: 'Asynchronous Inter-Agent Messaging Bus', category: 'Messaging Infrastructure', description: 'Kafka and gRPC event streaming configurations managing high-concurrency inter-agent communication.', format: 'Kafka Clusters & Protobuf Specs' },
      { title: 'Sandboxed Tool Connector & Wasm Runtime Suite', category: 'Security Tools', description: 'Isolated execution runtimes and typed API connectors preventing unauthorized system operations.', format: 'Dockerfiles & Wasm Modules' },
      { title: 'Swarm Telemetry & Decision Replay Dashboard', category: 'Observability', description: 'Web console visualizing inter-agent conversation graphs, tool execution timelines, and token costs.', format: 'Next.js / LangSmith Portal' },
    ],
    techStack: [
      { category: 'Agent Orchestration', items: ['LangGraph', 'CrewAI', 'AutoGen', 'Custom Python Asyncio'] },
      { category: 'Foundation Models', items: ['Claude 3.5 Sonnet', 'GPT-4o', 'DeepSeek R1', 'Llama 3.3 70B'] },
      { category: 'Messaging & Data', items: ['Apache Kafka', 'gRPC', 'Redis', 'PostgreSQL', 'Qdrant'] },
      { category: 'Sandboxing & Ops', items: ['Docker', 'WebAssembly (Wasm)', 'Kubernetes', 'OpenTelemetry'] },
    ],
    caseStudyQuote: {
      quote: 'Neominds engineered a multi-agent swarm that automates our daily semiconductor supply chain risk analysis. 6 specialized agents coordinate to analyze 40,000 supplier records, cutting analysis time from 8 hours to 14 minutes.',
      author: 'Elena Rostova',
      role: 'Head of Global Procurement',
      company: 'Aura Microelectronics',
      metric: 'Analysis Time: 8h to 14m',
    },
    outcomes: [
      {
        metric: '96.5%',
        label: 'Multi-Step Execution Success',
        description: 'Peer verification and consensus protocols eliminate single-agent hallucination failures.',
      },
      {
        metric: '12x',
        label: 'Faster Project Execution',
        description: 'Parallel agent swarms execute research, analysis, and data synthesis simultaneously.',
      },
      {
        metric: '100%',
        label: 'Auditable Decision Graphs',
        description: 'Complete cryptographic ledgers track every inter-agent communication, vote, and tool invocation.',
      },
    ],
    faqs: [
      { question: 'How do multiple agents prevent stepping on each others data or repeating work?', answer: 'We implement centralized task allocation ledgers with atomic distributed locks. When a planner agent assigns a sub-task, its state is locked to that specific worker, preventing duplicate execution or conflicting database writes.' },
      { question: 'What happens when two agents disagree on an analytical finding?', answer: 'Our consensus protocol initiates an adversarial peer review cycle. If the agents cannot reconcile findings through evidence citation, the dispute is escalated to an arbitrator agent or routed to a human supervisor console with a diff summary.' },
      { question: 'Can agent swarms run on our private on-premise cloud infrastructure?', answer: 'Yes. The entire multi-agent stack—including the Kafka messaging bus, Qdrant vector memory, and self-hosted open-source models like Llama 3—can be deployed within your private Kubernetes clusters with zero internet egress.' },
      { question: 'How do you monitor token usage and costs across hundreds of active agents?', answer: 'Our centralized telemetry gateway instruments OpenTelemetry and LangSmith tracing across all inter-agent messages, tracking per-agent token consumption, latency, and costs in real time.' },
    ],
    ctaHeadline: 'Ready to Deploy Coordinated Multi-Agent Swarms in Production?',
    ctaDescription: 'Schedule a technical strategy session with our Distributed Agent Architects. We map your multi-agent topology, establish consensus protocols, and build a working swarm.',
    ctaButtonText: 'Request Agent Swarm Consultation',
  },

  'intelligent-automation': {
    id: 'intelligent-automation',
    slug: 'intelligent-automation',
    title: 'Intelligent Automation',
    tagline: 'Human-in-the-Loop Process Automation, Decision Orchestration & Core Workflows',
    category: 'AI & Intelligence',
    heroBadge: 'Human + AI Workflow Automation',
    heroHeadline: 'Collaborative Human-in-the-Loop',
    heroHeadlineHighlight: 'Intelligent Automation',
    heroDescription:
      'We build high-throughput process automation systems that unite autonomous AI execution with structured human review gates. Delegating 90% of routine categorization and calculations to AI while routing high-stakes edge cases to human managers with 1-click decision consoles.',
    primaryCtaText: 'Build Intelligent Workflows',
    secondaryCtaText: 'Inspect Hybrid Pipeline',
    trustPoints: [
      'Confidence-based routing gates automatically escalating low-confidence cases to humans',
      'Sub-second UI consoles showing side-by-side document diffs and AI reasoning',
      'Continuous active learning loops retraining models based on human supervisor corrections',
      'Full compliance with regulatory audit standards for automated decision-making',
    ],
    metrics: [
      { value: '5x', label: 'Operator Velocity' },
      { value: '90%', label: 'Zero-Touch Autonomous Rate' },
      { value: '< 5s', label: 'Routine Processing Time' },
      { value: 'Zero Error', label: 'Drift Guarantee' },
    ],
    overview: {
      statement:
        'Fully autonomous systems make catastrophic errors on edge cases, while purely manual workflows are too slow and expensive to scale.',
      paragraphs: [
        'In regulated industries like banking, insurance, and healthcare, completely autonomous AI is a severe liability. If a model makes an unverified assumption on a compliance decision, regulatory fines and reputational damage follow immediately.',
        'We engineer hybrid human-in-the-loop automation systems that balance speed with safety. Our pipelines ingest high-volume requests and calculate a statistical confidence score for every recommendation. Routine, high-confidence cases execute autonomously in seconds.',
        'Edge cases falling below strict confidence thresholds are routed to clean, single-click manager review consoles. Every human correction is captured in active learning queues, continuously improving model accuracy over time.',
      ],
      keyTakeaway:
        'Safe, scalable automation that executes 90% of routine workflows autonomously while giving human experts total oversight on critical decisions.',
    },
    capabilities: [
      {
        title: 'Confidence-Based Decision Orchestration',
        description:
          'Calculating probabilistic confidence scores for every recommendation; tasks exceeding 95% confidence execute autonomously while edge cases route to human queues.',
        tags: ['Confidence Scoring', 'Threshold Routing', 'Autonomous Execution', 'Edge-Case Triage'],
      },
      {
        title: '1-Click Specialist Review & Diff Consoles',
        description:
          'Responsive web consoles displaying original documents alongside AI-extracted variables and reasoning explanations for instant human verification.',
        tags: ['1-Click Review Consoles', 'Visual Diff Viewer', 'Reasoning Explanations', 'Specialist UX'],
      },
      {
        title: 'Continuous Active Learning Feedback Loops',
        description:
          'Every human correction or approval is automatically formatted into fine-tuning datasets, retraining and improving model accuracy on edge cases continuously.',
        tags: ['Active Learning', 'Human Feedback Loops', 'Dataset Synthesis', 'Accuracy Optimization'],
      },
      {
        title: 'Multi-System Integration & Writeback Workers',
        description:
          'Autonomous workers writing validated records directly into Salesforce, SAP, NetSuite, and internal databases with transactional consistency and rollback locks.',
        tags: ['ERP Writeback', 'Salesforce & SAP Sync', 'Transactional Consistency', 'Rollback Protection'],
      },
      {
        title: 'Durable State Machine Orchestration (Temporal.io)',
        description:
          'Workflows that survive server reboots, network dropouts, and multi-day human approval delays without losing state using Temporal durable execution.',
        tags: ['Temporal.io', 'Durable Execution', 'Multi-Day Workflows', 'Zero State Loss'],
      },
      {
        title: 'Immutable Compliance Audit Ledgers',
        description:
          'Recording every AI decision, confidence score, source data snapshot, and human approval signature into tamper-evident audit logs for regulatory oversight.',
        tags: ['Audit Logging', 'Regulatory Traceability', 'WORM Storage', 'Confidence Scores'],
      },
    ],
    processSteps: [
      {
        step: '01',
        title: 'Workflow Mapping & Risk Boundary Scoping',
        description: 'Analyzing operational decision workflows, identifying high-volume repetitive tasks, and defining confidence threshold safety boundaries.',
        deliverables: ['Decision Flow Architecture Map', 'Confidence Threshold Policy', 'Human Escalation Matrix'],
      },
      {
        step: '02',
        title: 'Durable State Machine & AI Scoring Build',
        description: 'Deploying Temporal.io workflow engines, integrating multimodal AI extraction models, and calibrating confidence scoring algorithms.',
        deliverables: ['Temporal State Machine Codebase', 'Confidence Scoring Engine', 'Sandbox Test Harness'],
      },
      {
        step: '03',
        title: 'Review Console & ERP Integration Build',
        description: 'Building the responsive 1-click human review console, connecting bi-directional ERP webhooks, and integrating Slack alert triggers.',
        deliverables: ['Human Review Console Portal', 'ERP Writeback Connectors', 'Slack Notification Webhooks'],
      },
      {
        step: '04',
        title: 'Shadow Run & Phased Production Rollout',
        description: 'Running the pipeline in shadow mode alongside human operators, verifying accuracy thresholds, and shifting to autonomous execution.',
        deliverables: ['Shadow Run Accuracy Report', 'Production Deployment Manifests', 'Operator Training Playbook'],
      },
    ],
    deliverables: [
      { title: 'Durable Intelligent Automation Engine', category: 'Workflow Core', description: 'Complete Temporal.io and Python source code for confidence-based process automation with full IP ownership.', format: 'Python / Temporal Workflows' },
      { title: 'Human Review & Triage Portal', category: 'Operations UI', description: 'Responsive React portal displaying documents side-by-side with AI confidence scores for single-click approvals.', format: 'React / Next.js Web Application' },
      { title: 'Active Learning & Retraining Pipeline', category: 'AI Pipeline', description: 'Microservices capturing human corrections and preparing formatted training datasets for model tuning.', format: 'Python Microservice & Tests' },
      { title: 'Enterprise Audit Logging & Reporting Suite', category: 'Compliance', description: 'Immutable logging system tracking every human and autonomous action for regulatory compliance audits.', format: 'PostgreSQL Audit Tables & BI Views' },
    ],
    techStack: [
      { category: 'Orchestration & State', items: ['Temporal.io', 'n8n Enterprise', 'Celery', 'Redis', 'PostgreSQL'] },
      { category: 'AI & Extraction', items: ['Claude 3.5 Sonnet', 'GPT-4o Vision', 'HuggingFace', 'FastAPI'] },
      { category: 'Enterprise Integrations', items: ['Salesforce', 'NetSuite', 'SAP', 'Workday', 'Slack Webhooks'] },
      { category: 'Frontend Review UI', items: ['React 19', 'Next.js', 'Tailwind CSS', 'Accessible Forms'] },
    ],
    caseStudyQuote: {
      quote: 'Neominds built a human-in-the-loop claims triage system for our insurance group. 88% of claims now process autonomously in under 5 seconds, while our adjusters review complex edge cases 5x faster.',
      author: 'David Sterling',
      role: 'Chief Operating Officer',
      company: 'Guardian Mutual Insurance',
      metric: '88% Autonomous Claims Processing',
    },
    outcomes: [
      {
        metric: '5x',
        label: 'Operator Velocity',
        description: 'Human operators review and approve edge cases in seconds rather than processing routine paperwork manually.',
      },
      {
        metric: '90%',
        label: 'Zero-Touch Autonomous Rate',
        description: 'High-confidence cases process end-to-end autonomously with verified accuracy.',
      },
      {
        metric: '0',
        label: 'Silent Decision Errors',
        description: 'Confidence-based escalation guarantees ambiguous edge cases receive expert human scrutiny.',
      },
    ],
    faqs: [
      { question: 'How do you determine whether an action is safe to automate versus requiring human review?', answer: 'We calculate statistical confidence and semantic entropy for every decision. Decisions that exceed 95% confidence and fall below defined financial impact limits process autonomously; anything below that threshold routes to a specialist queue.' },
      { question: 'What happens if a human operator takes days to review a flagged case?', answer: 'We use Temporal durable execution engines that maintain workflow state indefinitely. Workflows do not time out or drop data; reminders, escalation rules, and re-assignment timers keep tasks moving smoothly.' },
      { question: 'How do human corrections improve the system over time?', answer: 'Every time an operator adjusts an AI field in the review console, the before-and-after pair is saved in an active learning queue, creating fine-tuning datasets that prevent the model from repeating the same mistake.' },
      { question: 'Can the system integrate with legacy on-premise software with no APIs?', answer: 'Yes. In addition to modern REST and GraphQL webhooks, we deploy headless browser automation and database queue triggers to interact with legacy systems safely.' },
    ],
    ctaHeadline: 'Ready to Scale Operational Throughput with Safe Human-in-the-Loop AI?',
    ctaDescription: 'Consult with our Process Automation Architects. We review your decision workflows, establish confidence thresholds, and design a customized review portal.',
    ctaButtonText: 'Request Intelligent Automation Discovery',
  },

  'generative-ai': {
    id: 'generative-ai',
    slug: 'generative-ai',
    title: 'Generative AI',
    tagline: 'Enterprise Generative Media, Synthetic Data & Domain-Specific Foundation Models',
    category: 'AI & Intelligence',
    heroBadge: 'Enterprise GenAI & Foundation Models',
    heroHeadline: 'Enterprise-Grade',
    heroHeadlineHighlight: 'Generative AI & Foundation Models',
    heroDescription:
      'We engineer enterprise generative AI systems that synthesize domain-specific text, code, high-resolution visual assets, and photorealistic audio. Combining private foundation models with synthetic data generation pipelines, strict brand guardrails, and automated compliance filtering.',
    primaryCtaText: 'Deploy Generative AI',
    secondaryCtaText: 'Explore GenAI Architecture',
    trustPoints: [
      'Private cloud model deployments guaranteeing zero data leakage to public model vendors',
      'Synthetic data generation pipelines for training edge models without privacy violations',
      'Automated brand voice and factual guardrails preventing off-brand or hallucinated outputs',
      'High-speed multimodal generation APIs (text, code, image, audio) with streaming token support',
    ],
    metrics: [
      { value: '10x', label: 'Asset Creation Velocity' },
      { value: '100%', label: 'Private VPC Isolation' },
      { value: 'Zero Leakage', label: 'Enterprise Data Security' },
      { value: 'Multimodal', label: 'Text, Code, Vision & Audio' },
    ],
    overview: {
      statement:
        'Public generative AI tools create generic, off-brand marketing fluff and leak corporate secrets to third-party tech vendors.',
      paragraphs: [
        'Relying on generic public consumer AI tools produces generic, forgettable content that sounds like every other brand on the internet. Worse, feeding internal roadmaps and source code into public tools creates massive intellectual property and security vulnerabilities.',
        'We build private, enterprise-grade generative AI infrastructure hosted entirely within your private cloud environment. We fine-tune foundation models on your curated brand assets, technical documentation, and historical codebase, ensuring every generated output matches your exact voice and coding standards.',
        'We deploy synthetic data generation pipelines that create millions of photorealistic training examples for computer vision and NLP models, enabling rapid AI development without exposing customer PII.',
      ],
      keyTakeaway:
        'Private, high-fidelity generative AI architectures that produce brand-aligned, high-value digital assets while keeping proprietary IP strictly secure.',
    },
    capabilities: [
      {
        title: 'Domain-Adapted Foundation Model Fine-Tuning',
        description:
          'Fine-tuning open-source foundation models (Llama 3.3, Mistral Large, DeepSeek) on proprietary enterprise documentation, technical manuals, and corporate communication styles.',
        tags: ['LoRA / QLoRA', 'Domain Adaptation', 'Private Weights', 'Proprietary Style'],
      },
      {
        title: 'Synthetic Data Generation & Data Augmentation',
        description:
          'Generating high-fidelity synthetic tabular, text, and visual datasets to train machine learning models at scale without violating GDPR, HIPAA, or customer privacy.',
        tags: ['Synthetic Data', 'Privacy-Preserving Training', 'Data Augmentation', 'Edge AI Data'],
      },
      {
        title: 'Automated Brand Voice & Tone Guardrails',
        description:
          'Automated evaluation pipelines validating that generated marketing copy, documentation, and customer communications strictly adhere to corporate brand voice standards.',
        tags: ['Brand Voice Guardrails', 'Tone Validation', 'Automated QA Scoring', 'Style Consistency'],
      },
      {
        title: 'Generative Code Synthesis & Internal Developer Tools',
        description:
          'Self-hosted code completion engines trained on internal repositories and libraries, accelerating developer velocity without sending private IP to public cloud servers.',
        tags: ['Code Synthesis', 'Self-Hosted Copilots', 'Private Repository Training', 'Developer Velocity'],
      },
      {
        title: 'High-Resolution Visual & Marketing Asset Generation',
        description:
          'Stable Diffusion and Flux pipelines generating on-brand visual assets, product mockups, and marketing variations at enterprise resolution.',
        tags: ['Diffusion Models', 'Flux / Stable Diffusion', 'Product Mockups', 'Visual Generation'],
      },
      {
        title: 'High-Throughput vLLM Inference & Token Streaming',
        description:
          'Deploying quantized foundation models on Kubernetes GPU clusters using vLLM and TensorRT-LLM, delivering sub-200ms token streaming with enterprise concurrency.',
        tags: ['vLLM Inference', 'Sub-200ms Streaming', 'GPU Clustering', 'Quantized Weights'],
      },
    ],
    processSteps: [
      {
        step: '01',
        title: 'Generative Scope & IP Privacy Scoping',
        description: 'Auditing target generative use cases, curating high-quality training datasets, and establishing private cloud infrastructure boundaries.',
        deliverables: ['Generative AI Architecture Blueprint', 'Curated Training Dataset Plan', 'IP Privacy & Security Review'],
      },
      {
        step: '02',
        title: 'Model Adaptation & Synthetic Data Scaffolding',
        description: 'Fine-tuning foundation weights with LoRA on private GPU instances, calibrating synthetic data pipelines, and implementing brand voice guardrails.',
        deliverables: ['Fine-Tuned Model Weights', 'Synthetic Dataset Generator', 'Brand Guardrail Matrix'],
      },
      {
        step: '03',
        title: 'Streaming API & User Tool Integration',
        description: 'Building high-throughput streaming API endpoints, developing web generator interfaces, and benchmarking token generation latency.',
        deliverables: ['Streaming Token API', 'Web Generator UI Portal', 'Latency Benchmark Report'],
      },
      {
        step: '04',
        title: 'Production GPU Scaling & Operations Handoff',
        description: 'Deploying auto-scaling GPU inference clusters on Kubernetes with token analytics dashboards and full model weight handoff.',
        deliverables: ['Kubernetes GPU Manifests', 'Token Analytics Dashboard', 'Generative Operations Runbook'],
      },
    ],
    deliverables: [
      { title: 'Fine-Tuned Foundation Model Weights & Artifacts', category: 'Model Core', description: 'Trained, domain-adapted model weights (SafeTensors) with full proprietary ownership and zero royalties.', format: 'SafeTensors & Model Registry' },
      { title: 'High-Throughput vLLM Streaming Inference Service', category: 'Inference Infrastructure', description: 'Containerized vLLM inference engine providing sub-200ms streaming token generation.', format: 'Dockerized vLLM Kubernetes Pods' },
      { title: 'Synthetic Data Generation Pipeline', category: 'Data Tools', description: 'Pipelines synthesizing privacy-compliant training datasets for downstream machine learning tasks.', format: 'Python Microservice & Datasets' },
      { title: 'Brand Voice Guardrail Evaluation Suite', category: 'Governance', description: 'Automated testing harness validating that generated content complies with brand voice and factual criteria.', format: 'Python Test Harness & Rules' },
    ],
    techStack: [
      { category: 'Foundation Models', items: ['Llama 3.3', 'Mistral Large', 'DeepSeek R1', 'Flux / Stable Diffusion', 'Whisper'] },
      { category: 'Inference & MLOps', items: ['vLLM', 'TensorRT-LLM', 'Triton Inference Server', 'HuggingFace', 'PyTorch'] },
      { category: 'Hardware & GPU', items: ['NVIDIA H100 / A100', 'NVIDIA L40S', 'AWS EC2 G5 / P4d', 'Kubernetes GPU Nodes'] },
      { category: 'Application Tier', items: ['FastAPI', 'Next.js 15', 'React 19', 'WebSockets', 'Tailwind CSS'] },
    ],
    caseStudyQuote: {
      quote: 'Neominds fine-tuned a private foundation model on 10 years of our engineering documentation. It generates technical specifications 10x faster while ensuring proprietary schematics never leave our private cloud.',
      author: 'Viktor Lindqvist',
      role: 'Chief Technology Officer',
      company: 'Nordic Precision Engineering',
      metric: '10x Faster Technical Specs',
    },
    outcomes: [
      {
        metric: '10x',
        label: 'Asset Creation Velocity',
        description: 'Generates high-fidelity marketing assets, technical documentation, and code stubs in seconds.',
      },
      {
        metric: '100%',
        label: 'Brand Voice Consistency',
        description: 'Fine-tuned domain models strictly adhere to enterprise design tokens and editorial guidelines.',
      },
      {
        metric: '0',
        label: 'Intellectual Property Leakage',
        description: 'All generative models and synthetic data pipelines run isolated within your private cloud perimeter.',
      },
    ],
    faqs: [
      { question: 'Will our proprietary data be used by public AI vendors to train future models?', answer: 'No. We deploy open-source foundation models inside your own isolated AWS, GCP, or on-premise GPU clusters. Your data, prompts, and outputs never leave your network boundary.' },
      { question: 'How do you ensure generated content matches our exact brand voice and style?', answer: 'We implement custom parameter-efficient fine-tuning (PEFT/LoRA) on your approved corporate communications, paired with automated multi-stage evaluation guardrails that verify tone, grammar, and style before delivery.' },
      { question: 'What is synthetic data and why should an enterprise use it?', answer: 'Synthetic data is artificially generated data that mirrors the statistical characteristics of real-world data without containing any actual customer personal information (PII). It allows companies to train AI models rapidly while remaining 100% compliant with GDPR and HIPAA.' },
      { question: 'How much does it cost to host a private generative AI foundation model?', answer: 'Using 4-bit and 8-bit quantization (AWQ/GPTQ) and high-throughput runtimes like vLLM, powerful models like Llama 3 70B can run on a single NVIDIA A10G or dual L40S instance, costing a fraction of high-volume public commercial API subscriptions.' },
    ],
    ctaHeadline: 'Ready to Build Private, Enterprise-Grade Generative AI Infrastructure?',
    ctaDescription: 'Schedule an architecture session with our Generative AI Specialists. We audit your creative and data workflows, model infrastructure costs, and build a private GenAI prototype.',
    ctaButtonText: 'Request Generative AI Consultation',
  },
};
