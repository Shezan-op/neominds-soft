import { ServiceCaseStudyRef } from '../types/service';

export const VERIFIED_CASE_STUDIES: Record<string, ServiceCaseStudyRef> = {
  authenticom: {
    id: 'authenticom',
    title: 'Automotive Data Ingestion & Real-Time Integration Platform',
    client: 'Authenticom',
    category: 'Enterprise Engineering',
    stats: '15,000+ Dealerships Synchronized',
    metric: '99.99%',
    metricLabel: 'Data Pipeline Uptime SLA',
    description:
      'Engineered high-throughput enterprise data pipelines processing millions of vehicle inventory records daily across 15,000+ North American automotive dealerships with bi-directional DMS synchronization.',
    tags: ['Data Engineering', 'AWS', 'PostgreSQL', 'Kafka', 'ETL Pipelines'],
  },
  trubridge: {
    id: 'trubridge',
    title: 'Automated Medical Coding & Claims Verification Engine',
    client: 'TruBridge (formerly TruCode)',
    category: 'Healthcare',
    stats: '40% Reduction in Claims Denials',
    metric: '2.4M',
    metricLabel: 'Patient Encounters Analyzed / Mo',
    description:
      'Built a HIPAA-compliant clinical decision support and medical encoder platform that accelerates hospital billing accuracy, integrates ICD-10/CPT guidelines, and cuts insurance claim rejection rates.',
    tags: ['Healthcare', 'HIPAA / HITECH', 'C# / .NET Core', 'Angular', 'ICD-10 Engine'],
  },
  plato: {
    id: 'plato',
    title: 'Autonomous Delivery Dispatch & Fleet Optimization',
    client: 'Plato Delivery Systems',
    category: 'Logistics & Mobile',
    stats: '3.5x Increase in Delivery Velocity',
    metric: '< 150ms',
    metricLabel: 'Route Optimization Latency',
    description:
      'Developed an algorithmic dispatching engine that dynamically pairs on-demand drivers with local retail fulfillment hubs, reducing delivery costs by 28% and driving company profitability.',
    tags: ['Logistics & IoT', 'Golang', 'Google Cloud', 'Real-Time Geo-Routing', 'React Native'],
  },
  adventr: {
    id: 'adventr',
    title: 'Interactive Smart-Video Generation & Analytics Suite',
    client: 'Adventr',
    category: 'Enterprise AI & Media',
    stats: '600% Higher User Engagement',
    metric: '4K 60fps',
    metricLabel: 'Zero-Latency Branching Video',
    description:
      'Constructed a cloud-native interactive video authoring suite enabling creators and global brands to build clickable, branching video experiences with real-time viewer behavior heatmaps.',
    tags: ['Interactive Media', 'WebRTC', 'AWS Elemental', 'React', 'AI Video Analytics'],
  },
  cnote: {
    id: 'cnote',
    title: 'Community Impact Investing Platform with SEC Compliance',
    client: 'CNote Financial',
    category: 'Fintech',
    stats: '$500M+ Impact Capital Deployed',
    metric: 'SOC 2',
    metricLabel: 'Type II Certified Infrastructure',
    description:
      'Architected an institutional investment gateway connecting Fortune 500 treasuries to CDFIs and minority-owned business lenders, automating ACH clearing and SEC compliance reporting.',
    tags: ['Fintech & Banking', 'Node.js', 'React', 'Plaid API', 'Automated ACH / SEC'],
  },
  delphi: {
    id: 'delphi',
    title: 'AI Computer Vision & Diagnostic Screening Platform',
    client: 'Delphi Vision Ltd',
    category: 'Enterprise AI',
    stats: '99.2% Model Classification Accuracy',
    metric: '18 FPS',
    metricLabel: 'Edge Inference Throughput',
    description:
      'Designed high-speed computer vision pipeline for automated defect detection in industrial manufacturing, deploying PyTorch deep learning models to low-power edge gateways.',
    tags: ['AI / Computer Vision', 'PyTorch', 'FastAPI', 'Docker Edge', 'Real-Time Ingestion'],
  },
  cityindex: {
    id: 'cityindex',
    title: 'High-Frequency Forex & CFD Trading Execution Terminal',
    client: 'City Index (StoneX Group)',
    category: 'Fintech Trading',
    stats: 'Sub-Millisecond Order Routing',
    metric: '100,000+',
    metricLabel: 'Concurrent Trading Sessions',
    description:
      'Engineered institutional multi-asset trading engine with FIX 4.4 protocol gateways, live depth-of-market feeds, customizable charting workspaces, and automated margin risk controls.',
    tags: ['Fintech', 'C++ / Rust', 'WebSockets', 'FIX Protocol', 'Trading Terminal UI'],
  },
  maersk: {
    id: 'maersk',
    title: 'Global Supply Chain Telemetry & Container Tracking',
    client: 'Maersk Line',
    category: 'Enterprise Infrastructure',
    stats: 'Global Container Telemetry',
    metric: '50,000+',
    metricLabel: 'Connected IoT Beacons',
    description:
      'Delivered scalable IoT monitoring platform providing cold-chain integrity tracking, automated customs clearance document generation, and real-time vessel position mapping.',
    tags: ['Supply Chain', 'Azure IoT Hub', 'Kafka', 'React / TypeScript', 'Microservices'],
  },
};

// Helper to resolve service-relevant case studies
export const getCaseStudiesForFamily = (family: string): ServiceCaseStudyRef[] => {
  switch (family) {
    case 'Fintech':
      return [
        VERIFIED_CASE_STUDIES.cnote,
        VERIFIED_CASE_STUDIES.cityindex,
        VERIFIED_CASE_STUDIES.authenticom,
      ];
    case 'Healthcare':
      return [
        VERIFIED_CASE_STUDIES.trubridge,
        VERIFIED_CASE_STUDIES.delphi,
        VERIFIED_CASE_STUDIES.authenticom,
      ];
    case 'Enterprise AI':
      return [
        VERIFIED_CASE_STUDIES.adventr,
        VERIFIED_CASE_STUDIES.delphi,
        VERIFIED_CASE_STUDIES.authenticom,
      ];
    case 'Core Technology':
    default:
      return [
        VERIFIED_CASE_STUDIES.authenticom,
        VERIFIED_CASE_STUDIES.plato,
        VERIFIED_CASE_STUDIES.maersk,
      ];
  }
};
