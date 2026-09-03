export type ServiceCategory =
  | 'Core Technology'
  | 'Fintech'
  | 'Healthcare'
  | 'Enterprise AI';

export interface ServiceMetric {
  value: string;
  label: string;
}

export interface ServiceCapability {
  title: string;
  description: string;
  tags: string[];
}

export interface ServiceProcessStep {
  step: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface ServiceDeliverable {
  title: string;
  category: string;
  description: string;
  format: string;
}

export interface ServiceTechCategory {
  category: string;
  items: string[];
}

export interface ServiceOutcome {
  metric: string;
  label: string;
  description: string;
}

export interface ServiceCaseStudyRef {
  id: string;
  title: string;
  client: string;
  category: string;
  stats: string;
  metric: string;
  metricLabel: string;
  description: string;
  tags: string[];
  image?: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceSignatureData {
  type:
    | 'architectureDiagram'
    | 'workflowDiagram'
    | 'pipelineVisualization'
    | 'dashboardShowcase'
    | 'lifecycleDiagram'
    | 'multiAgentArchitecture'
    | 'transactionFlow'
    | 'careJourney'
    | 'riskDetection'
    | 'genericFlow';
  badge: string;
  title: string;
  description: string;
  steps: {
    number: string;
    title: string;
    desc: string;
    badge?: string;
    color?: string;
    details?: string[];
  }[];
  highlightCard?: {
    title: string;
    value: string;
    label: string;
    detail: string;
  };
}

export interface UniversalServiceData {
  id: string;
  slug: string;
  title: string;
  category: ServiceCategory;
  tagline: string;

  // 1. Breadcrumb / Eyebrow
  eyebrow: string;

  // 2. Hero
  hero: {
    badge: string;
    headline: string;
    headlineHighlight: string;
    description: string;
    heroImage?: string;
    heroImageCaption?: string;
    primaryCtaText?: string;
    secondaryCtaText?: string;
  };

  // 3. Trust Strip
  trustPoints: string[];
  metrics: ServiceMetric[];

  // 4. Overview
  overview: {
    statement: string;
    paragraphs: string[];
    keyTakeaway: string;
  };

  // 5. Capabilities (6-8 items)
  capabilities: ServiceCapability[];

  // 6. Signature Section (Service-Specific)
  signature: ServiceSignatureData;

  // 7. Process / How We Work
  process: ServiceProcessStep[];

  // 8. Case Studies (Service-specific verified projects)
  caseStudies: ServiceCaseStudyRef[];

  // 9. Technology / Architecture
  techStack: ServiceTechCategory[];
  deliverables: ServiceDeliverable[];

  // 10. Business Outcomes
  outcomes: ServiceOutcome[];

  // 11. Related Services
  relatedServiceSlugs: string[];

  // 12. FAQ
  faqs: ServiceFaq[];

  // 13. Final CTA
  cta: {
    headline: string;
    description: string;
    buttonText: string;
  };

  // SEO metadata
  seo: {
    metaTitle: string;
    metaDescription: string;
  };
}
