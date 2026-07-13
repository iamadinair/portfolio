// Projects page content, grouped by company since some companies (Clear
// Dynamics in particular) span several distinct client engagements.
//
// `responsibilities` supports **bold** markers, rendered via renderBold().
// `outcomes` is optional (some engagements only have qualitative detail so
// far); when present, it renders as a delta-style strip like the ledger's
// hero metrics; when omitted, that part of the card is skipped entirely.

export const projectGroups = [
  {
    company: 'Banxa (OSL Group)',
    projects: [
      {
        name: 'Onboarding & Compliance Platform',
        company: 'Banxa (OSL Group)',
        year: '2025 - Present',
        description:
          'KYC, KYB, AML, and fraud decisioning platform spanning B2C and B2B channels for a leading crypto on/off-ramp. Owns the roadmap end to end, from onboarding conversion through to risk decisioning accuracy and third-party ecosystem integration.',
        responsibilities: [
          'Redesigned onboarding and risk decisioning flows through structured A/B experimentation and funnel analysis.',
          'Integrated and tuned third-party fraud and identity verification tooling (REST APIs, webhook pipelines) to cut manual review volume.',
          'Governed the integration roadmap with identity, fraud, and crypto liquidity providers, including **API contracts, OAuth 2.0 authentication, payload schemas, and rate-limiting**.',
          'Monitors global regulatory and fraud trends to maintain platform compliance while preserving a seamless user experience.',
          'Leads a team of 7, including 2 direct reports, across product and delivery.'
        ],
        tech: ['KYC/KYB Platforms', 'AML Tooling', 'OAuth 2.0', 'Amplitude', 'API Management', 'Webhooks'],
        outcomes: [
          { value: '5-10%', label: 'Onboarding conversion uplift' },
          { value: '20-30%', label: 'Fewer manual KYC/AML reviews' },
          { value: '15-25%', label: 'Faster approval turnaround' }
        ]
      }
    ]
  },
  {
    company: 'Eightcap Pty. Ltd.',
    projects: [
      {
        name: 'Payments, Wallets & Crypto Platform',
        company: 'Eightcap Pty. Ltd.',
        year: '2023 - 2025',
        description:
          'Product strategy and delivery for payments, wallets, and crypto integrations at a regulated FX and CFD broker. Defined the roadmap for a payments-first platform, integrating multiple PSPs and building webhook-driven event pipelines.',
        responsibilities: [
          'Defined product vision and roadmap for a payments-first platform, integrating multiple PSPs and designing reconciliation flows.',
          'Introduced LLM-based transaction summarisation and anomaly detection (Azure OpenAI + RAG), improving transparency and reducing fraud investigation volume.',
          'Led an internal AI support assistant, shaped by Amplitude-driven usage analysis, that **cut payment & wallet query handling time by 30%**.',
          'Ran ways-of-working and Agile training sessions for the broader team, improving delivery consistency.',
          'Led a team of 14, including 7 direct reports, across Product, Engineering, Compliance, and Marketing.'
        ],
        tech: ['PSP Integration', 'Webhook Pipelines', 'Azure OpenAI', 'RAG', 'Amplitude', 'REST APIs'],
        outcomes: [
          { value: '30%', label: 'Faster payment & wallet query handling' },
          { value: '14', label: 'Team led, including 7 direct reports' }
        ]
      },
      {
        name: 'PropTradeTech Onboarding & Compliance Platform',
        company: 'Eightcap Pty. Ltd. (PropTradeTech)',
        year: '2023',
        description:
          'Greenfield B2B white-label prop trading platform and end-to-end prop trading operations management solution, built within Eightcap. Owned product scope end to end, taking the first client from kickoff to go-live in under four months.',
        responsibilities: [
          'Defined product scope, roadmap, and success metrics for a net-new B2B SaaS platform inside an existing regulated business.',
          'Integrated **SumSub KYC** via a webhook flow with an idempotent state machine and compliance audit logging.',
          'Integrated **Stripe Payments**, including checkout sessions, payment intents, and webhook reconciliation.',
          'Directed the build of an AI-powered onboarding chatbot, including flow design, tone, and escalation paths to human support.',
          'Used ProductBoard and ClickUp for backlog prioritisation and delivery management.'
        ],
        tech: ['SumSub KYC', 'Stripe', 'Azure OpenAI', 'RAG', 'ProductBoard', 'ClickUp', 'React', '.NET Core'],
        outcomes: [
          { value: '35%', label: 'Fewer support tickets after chatbot launch' },
          { value: '22%', label: 'Higher onboarding completion rate' },
          { value: '<4 mo', label: 'Kickoff to first client go-live' }
        ]
      }
    ]
  },
  {
    company: 'Clear Dynamics Pty. Ltd.',
    projects: [
      {
        name: 'Latitude Financial Services: Credit Card Application & Onboarding',
        company: 'Clear Dynamics Pty. Ltd.',
        year: '2020 - 2023',
        description:
          "Product Owner and delivery lead for Latitude Financial Services' credit card application and customer onboarding initiatives, supporting digital transformation across acquisition and servicing workflows.",
        responsibilities: [
          'Architected Azure Integration Services solutions for payment event orchestration and core banking API integration via REST/SOAP.',
          'Configured APIM policies for rate-limiting, authentication, and versioning across integration endpoints.',
          'Contributed to measurable reductions in application processing time and manual intervention rates.'
        ],
        tech: ['Azure Integration Services', 'API Management', 'REST/SOAP', 'Core Banking APIs'],
        outcomes: []
      },
      {
        name: 'BOQ Digital Banking Platform',
        company: 'Clear Dynamics Pty. Ltd.',
        year: '2020 - 2023',
        description:
          "Product and integration delivery for Bank of Queensland's digital banking platform, improving customer-facing digital workflows.",
        responsibilities: [
          'Contributed integration and delivery work within the broader Azure Integration Services engagement.',
          'Collaborated cross-functionally to improve customer-facing digital banking workflows.'
        ],
        tech: ['Azure Integration Services', 'REST/SOAP'],
        outcomes: []
      },
      {
        name: "Westpac Loans Application",
        company: 'Clear Dynamics Pty. Ltd.',
        year: '2020 - 2023',
        description:
          "Product scoping and integration delivery for Westpac's loans application workflow, improving end-to-end processing efficiency.",
        responsibilities: [
          'Scoped integration requirements for the loans application workflow.',
          'Delivered integration work improving end-to-end processing efficiency.'
        ],
        tech: ['Azure Integration Services', 'REST/SOAP'],
        outcomes: []
      },
      {
        name: 'RMIT Student Application Platform',
        company: 'Clear Dynamics Pty. Ltd.',
        year: '2020 - 2023',
        description:
          'Streamlined student application management platform for RMIT, reducing administrative processing time and improving applicant completion rates.',
        responsibilities: [
          'Defined product scope for a student application management platform.',
          'Streamlined application workflows, reducing administrative processing time and improving completion rates.'
        ],
        tech: ['Azure Integration Services', 'REST/SOAP'],
        outcomes: []
      },
      {
        name: 'Scoot Education Tutoring Platform (Teachstart)',
        company: 'Clear Dynamics Pty. Ltd.',
        year: '2020 - 2023',
        description:
          'MVP scope and delivery lead for a tutoring and education platform for Scoot Education, integrating scheduling, payments, and tutor onboarding workflows.',
        responsibilities: [
          'Defined MVP scope for a tutoring and education platform.',
          'Integrated scheduling, payments, and tutor onboarding workflows.',
          'Improved tutor-to-student matching speed and platform adoption post-launch.'
        ],
        tech: ['Scheduling Systems', 'Payments Integration', 'Azure Integration Services'],
        outcomes: []
      }
    ]
  },
  {
    company: 'AMP',
    projects: [
      {
        name: 'AMP North Investment Platform',
        company: 'AMP',
        year: '2019 - 2020',
        description:
          "Senior Software Engineer on the AMP North Online IT team, building automated business workflows that replaced manual handoffs and reduced processing latency across the investment platform.",
        responsibilities: [
          "Designed and built integration workflows enabling real-time portfolio data processing for AMP's Managed Portfolios.",
          'Automated a previously manual, sensitive deceased-customer policy workflow end to end, reducing handling time and operational risk.',
          'Built a structured request tracking and fulfilment system, improving SLA visibility and reducing manual coordination overhead.'
        ],
        tech: ['Azure Logic Apps', 'Service Bus', '.NET Core'],
        outcomes: []
      }
    ]
  },
  {
    company: 'Myprosperity Pty. Ltd.',
    projects: [
      {
        name: 'Wealth Platform Integration Layer',
        company: 'Myprosperity Pty. Ltd.',
        year: '2017 - 2019',
        description:
          'Sole owner of the end-to-end XPlan (Iress) integration, plus the broader integration layer connecting Myprosperity to Netwealth, BGL, Class, and HUB24, consolidating multi-platform portfolio data into a single client view.',
        responsibilities: [
          'Led requirements analysis, API discovery, technical design, build, and production delivery for the XPlan integration end to end.',
          'Designed data normalisation pipelines and OAuth-based authentication across custodian APIs, managing API versioning and deprecation.',
          'Diagnosed and resolved a race condition between valuation refresh cycles and transaction history APIs, eliminating client-facing data inconsistencies.',
          'Adapted data models and UI components for multi-currency and multi-region use, supporting expansion into new markets.'
        ],
        tech: ['REST', 'SOAP/XML', 'OAuth', 'Automapper', '.NET Core', 'SQL'],
        outcomes: [
          { value: '5', label: 'Platforms unified into one client view' },
          { value: '0', label: 'Client-facing data inconsistencies post-fix' },
          { value: '1', label: 'New market unlocked via localisation' }
        ]
      }
    ]
  }
];
