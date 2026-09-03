export type CapabilityStyleType =
  | 'bento-grid'
  | 'interactive-tabs'
  | 'numbered-editorial'
  | 'split-showcase'
  | 'dark-cyber'
  | 'timeline-flow'
  | 'minimal-pills';

// Precise mapping of all 28 services across 7 distinct design styles (exactly 4 services per style)
export const SERVICE_CAPABILITY_STYLES: Record<string, CapabilityStyleType> = {
  // Style 1: Bento Grid (Modern asymmetric cards, bold feature hero tile)
  'software-development': 'bento-grid',
  'digital-banking': 'bento-grid',
  'healthcare-management-software': 'bento-grid',
  'ai-product-engineering': 'bento-grid',

  // Style 2: Interactive Tabs (Clickable left nav / tabs with rich inspect panel)
  'ai-development': 'interactive-tabs',
  'payment-solutions': 'interactive-tabs',
  'telemedicine-platforms': 'interactive-tabs',
  'applied-ai': 'interactive-tabs',

  // Style 3: Numbered Editorial (Swiss luxury magazine layout, giant typography & divider lines)
  'mobile-app-development': 'numbered-editorial',
  'lending-credit-platforms': 'numbered-editorial',
  'patient-engagement': 'numbered-editorial',
  'ai-agent-systems': 'numbered-editorial',

  // Style 4: Split Showcase (Left sticky strategic pillar overview + right vertical card feed)
  'web-cms-development': 'split-showcase',
  'investment-wealth-management': 'split-showcase',
  'medical-ai-solutions': 'split-showcase',
  'intelligent-automation': 'split-showcase',

  // Style 5: Dark Cyber / Terminal (High-contrast obsidian theme, glowing neon borders, terminal badges)
  'devops': 'dark-cyber',
  'fraud-risk-management': 'dark-cyber',
  'healthcare-automation': 'dark-cyber',
  'generative-ai': 'dark-cyber',

  // Style 6: Timeline Flow (Alternating chronological capability pipeline with connector rail)
  'ecommerce-development': 'timeline-flow',
  'financial-analytics': 'timeline-flow',
  'healthcare-analytics': 'timeline-flow',
  'ai-automations': 'timeline-flow',

  // Style 7: Minimal Pills & Metric Badges (Ultra-clean modern surface cards with hover expansion)
  'ai-agents': 'minimal-pills',
  'analytics-dashboard': 'minimal-pills',
  'technical-support': 'minimal-pills',
  'chatbot-videobot': 'minimal-pills',
  'chatbot-video-bot-development': 'minimal-pills',
};

export const getCapabilityStyleForService = (slug: string): CapabilityStyleType => {
  return SERVICE_CAPABILITY_STYLES[slug] || 'bento-grid';
};
