// Projects page content, grouped by company since some companies (Clear
// Dynamics in particular) span several distinct client engagements.
//
// Cards are outcomes-first by design: `description` sets context (what the
// product/platform does), and `outcomes` lists the measurable or qualitative
// impact of the work, not day-to-day responsibilities (those live in the
// Career Ledger on the homepage). `outcomes` supports **bold** markers,
// rendered via renderBold(), used to highlight the metric in each line.

export const projectGroups = [
  {
    company: 'Banxa (OSL Group)',
    projects: [
      {
        name: 'Crypto On/Off-Ramp: Onboarding & Compliance',
        company: 'Banxa (OSL Group)',
        year: '2025 - Present',
        description:
          'Fiat-to-crypto and crypto-to-fiat on/off-ramp platform. Own the roadmap for KYC, KYB, AML, and fraud decisioning across B2C and B2B channels, while expanding the platform\u2019s supported coins, tokens, and DEX integrations to grow buy and sell coverage.',
        outcomes: [
          '**+5-10%** onboarding conversion from redesigned decisioning flows.',
          '**-20-30%** manual KYC/AML reviews via tuned fraud and identity tooling.',
          '**-10-15%** false positive fraud flags.',
          '**-15-25%** faster approval turnaround.',
          'Expanded platform\u2019s buy/sell coverage through new coin and token listings.',
          'Integrated multiple DEXs into the platform, navigating a lengthy compliance review process while still hitting fast go-to-market (**GTM**) targets for each new listing.'
        ],
        tech: ['KYC/KYB Platforms', 'AML Tooling', 'OAuth 2.0', 'Amplitude', 'API Management', 'Webhooks']
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
        outcomes: [
          '**-30%** payment and wallet support query handling time after AI support assistant launch.',
          'Team scaled to **14**, including 7 direct reports, to support platform growth.',
          'Delivered multiple PSP integrations with reconciliation flows, reducing manual finance reconciliation effort.'
        ],
        tech: ['PSP Integration', 'Webhook Pipelines', 'Azure OpenAI', 'RAG', 'Amplitude', 'REST APIs']
      },
      {
        name: 'PropTradeTech: End-to-End B2B Prop Trading Platform',
        company: 'Eightcap Pty. Ltd. (PropTradeTech)',
        year: '2023',
        description:
          'Greenfield B2B white-label prop trading platform and end-to-end prop trading operations management solution, built within Eightcap.',
        outcomes: [
          '**-35%** support tickets after AI onboarding chatbot launch.',
          '**+22%** onboarding completion rate.',
          '**Under 4 months** from kickoff to first client go-live for a greenfield B2B platform.'
        ],
        tech: ['SumSub KYC', 'Stripe', 'Azure OpenAI', 'RAG', 'ProductBoard', 'ClickUp', 'React', '.NET Core']
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
        outcomes: [
          'Reduced manual intervention and processing time across the credit card application and onboarding workflow.'
        ],
        tech: ['Azure Integration Services', 'API Management', 'REST/SOAP', 'Core Banking APIs']
      },
      {
        name: 'BOQ Digital Banking Platform',
        company: 'Clear Dynamics Pty. Ltd.',
        year: '2020 - 2023',
        description:
          "Product and integration delivery for Bank of Queensland's digital banking platform, improving customer-facing digital workflows.",
        outcomes: [
          'Improved customer-facing digital banking workflows through integration delivery.'
        ],
        tech: ['Azure Integration Services', 'REST/SOAP']
      },
      {
        name: "Westpac Loans Application",
        company: 'Clear Dynamics Pty. Ltd.',
        year: '2020 - 2023',
        description:
          "Product scoping and integration delivery for Westpac's loans application workflow.",
        outcomes: [
          'Improved end-to-end loan application processing efficiency.'
        ],
        tech: ['Azure Integration Services', 'REST/SOAP']
      },
      {
        name: 'RMIT Student Application Platform',
        company: 'Clear Dynamics Pty. Ltd.',
        year: '2020 - 2023',
        description:
          'Streamlined student application management platform for RMIT.',
        outcomes: [
          'Reduced administrative processing time and improved applicant completion rates.'
        ],
        tech: ['Azure Integration Services', 'REST/SOAP']
      },
      {
        name: 'Scoot Education Tutoring Platform (Teachstart)',
        company: 'Clear Dynamics Pty. Ltd.',
        year: '2020 - 2023',
        description:
          'MVP scope and delivery lead for a tutoring and education platform for Scoot Education, integrating scheduling, payments, and tutor onboarding workflows.',
        outcomes: [
          'Improved tutor-to-student matching speed and platform adoption post-launch.'
        ],
        tech: ['Scheduling Systems', 'Payments Integration', 'Azure Integration Services']
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
          "Senior Software Engineer on the AMP North Online IT team, building automated business workflows across the investment platform.",
        outcomes: [
          'Reduced manual handling and processing latency for portfolio data and deceased-customer policy workflows.',
          'Improved SLA visibility through structured request tracking.'
        ],
        tech: ['Azure Logic Apps', 'Service Bus', '.NET Core']
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
        outcomes: [
          '**5** platforms unified into a single client view (XPlan, Netwealth, BGL, Class, HUB24).',
          '**0** client-facing data inconsistencies after resolving the valuation/transaction race condition.',
          '**1** new market unlocked through multi-currency and multi-region localisation.'
        ],
        tech: ['REST', 'SOAP/XML', 'OAuth', 'Automapper', '.NET Core', 'SQL']
      }
    ]
  }
];
