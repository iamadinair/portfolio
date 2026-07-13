// Projects page content. `responsibilities` and `outcomes` support **bold**
// markers rendered via renderBold(). `outcomes` pairs a metric with its label,
// styled like the ledger's delta chips, so the page stays visually consistent
// with the rest of the site.
export const projects = [
  {
    name: 'PropTradeTech Onboarding & Compliance Platform',
    company: 'Eightcap Pty. Ltd.',
    year: '2023',
    description:
      'Greenfield B2B white-label prop trading platform built within Eightcap. Owned product scope end to end, from onboarding and KYC flows through to payments integration, taking the first client from kickoff to go-live in under four months.',
    responsibilities: [
      'Defined product scope, roadmap, and success metrics for a net-new B2B platform inside an existing regulated business.',
      'Led integration of **SumSub KYC** and **Stripe** payments, coordinating engineering, compliance, and design through a compressed delivery timeline.',
      'Directed the build of an AI onboarding chatbot (Azure OpenAI), including flow design, tone, and escalation paths to human support.'
    ],
    tech: ['SumSub KYC', 'Stripe', 'Azure OpenAI', 'RAG', 'React', '.NET Core', 'REST APIs'],
    outcomes: [
      { value: '35%', label: 'Fewer support tickets after chatbot launch' },
      { value: '22%', label: 'Higher onboarding completion rate' },
      { value: '<4 mo', label: 'Kickoff to first client go-live' }
    ]
  },
  {
    name: 'Crypto Onboarding & Fraud Decisioning Platform',
    company: 'Banxa (OSL Group)',
    year: '2025 - Present',
    description:
      'KYC, KYB, AML, and fraud decisioning platform spanning B2C and B2B channels for a leading crypto on/off-ramp. Owns the roadmap end to end, from onboarding conversion through to risk decisioning accuracy.',
    responsibilities: [
      'Redesigned onboarding and risk decisioning flows through structured A/B experimentation.',
      'Tuned third-party fraud and identity verification tooling to cut manual review volume without raising risk exposure.',
      'Governed the integration roadmap with identity, fraud, and crypto liquidity providers, including **API contracts, OAuth 2.0 authentication, and rate-limiting**.',
      'Leads a team of 7, including 2 direct reports, across product and delivery.'
    ],
    tech: ['KYC/KYB Platforms', 'AML Tooling', 'OAuth 2.0', 'Amplitude', 'API Management'],
    outcomes: [
      { value: '5-10%', label: 'Onboarding conversion uplift' },
      { value: '20-30%', label: 'Fewer manual KYC/AML reviews' },
      { value: '15-25%', label: 'Faster approval turnaround' }
    ]
  },
  {
    name: 'Multi-Platform Wealth Data Integration (XPlan)',
    company: 'Myprosperity Pty. Ltd.',
    year: '2017 - 2019',
    description:
      'End-to-end integration connecting Myprosperity with XPlan (Iress) and other major wealth platforms, consolidating portfolio holdings and transaction data from multiple providers into a single client dashboard.',
    responsibilities: [
      'Sole owner of the XPlan integration, from requirements through to production, as part of the core API team.',
      'Built two-way REST/SOAP connections to Netwealth, BGL, Class, and HUB24, with Automapper-based data mapping.',
      'Diagnosed and resolved a race condition between valuation refresh cycles and transaction history APIs.',
      'Adapted data models and UI components for multi-currency and multi-region use ahead of international expansion.'
    ],
    tech: ['REST', 'SOAP/XML', 'Automapper', '.NET Core', 'SQL'],
    outcomes: [
      { value: '5', label: 'Platforms unified into one client view' },
      { value: '0', label: 'Client-facing data inconsistencies post-fix' },
      { value: '1', label: 'New market unlocked via localisation' }
    ]
  }
];
