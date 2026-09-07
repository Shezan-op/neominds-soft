// Lightweight lookup table for canonical services to avoid loading full service data dictionaries into the main bundle
export const ALL_SERVICE_SLUGS = [
  // Core Technology
  'software-development',
  'ai-development',
  'mobile-app-development',
  'web-cms-development',
  'ecommerce-development',
  'devops',
  'ai-agents',
  'ai-automations',
  'chatbot-videobot',
  'chatbot-video-bot-development',
  'analytics-dashboard',
  'technical-support',
  // Fintech
  'digital-banking',
  'payment-solutions',
  'lending-credit-platforms',
  'investment-wealth-management',
  'financial-analytics',
  'fraud-risk-management',
  // Healthcare
  'healthcare-management-software',
  'telemedicine-platforms',
  'patient-engagement',
  'medical-ai-solutions',
  'healthcare-analytics',
  'healthcare-automation',
  // Enterprise AI
  'ai-product-engineering',
  'applied-ai',
  'ai-agent-systems',
  'intelligent-automation',
  'generative-ai',
  // Legacy / Strategy
  'product-discovery',
  'product-engineering',
  'business-analysis',
  'it-consulting',
  'ui-ux-design',
] as const;

const SERVICE_SLUG_SET = new Set<string>(ALL_SERVICE_SLUGS);

export const isServiceSlug = (slug: string): boolean => {
  return SERVICE_SLUG_SET.has(slug);
};
