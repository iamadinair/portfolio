// Career ledger, one entry per role. `bullets` supports **bold** markers
// which get rendered as <b> in Layout via the renderBold() helper.
export const roles = [
  {
    tenure: 'Oct 2025 - Present',
    company: 'Banxa (OSL Group)',
    title: 'Senior Product Manager',
    current: true,
    bullets: [
      'Own end-to-end delivery for **KYC, KYB, AML, and fraud decisioning** across B2C and B2B channels for a leading crypto on/off-ramp platform, leading a team of 7, including 2 direct reports.',
      'Grew the platform\u2019s buy/sell coverage by adding new coins and tokens, and integrated multiple DEXs, navigating a lengthy compliance review process while still hitting fast go-to-market targets for each listing.',
      'Redesigned onboarding and risk decisioning flows through A/B experimentation, contributing a **5–10% conversion uplift** and **~15–25% faster approval turnaround**.',
      'Tuned third-party fraud & identity verification tooling, **cutting manual reviews by 20–30%** and **false positives by ~10–15%**.',
      'Governed the integration roadmap with identity, fraud, and crypto liquidity providers, including API contracts, OAuth 2.0 authentication, and rate-limiting, lifting transaction fulfilment rates by ~10–20%.',
      'Uses ChatGPT, Claude, and GitLab Duo to accelerate PRD creation, workflow design, and code review collaboration, shortening discovery-to-delivery turnaround.',
      'Runs a weekly product showcase on AI-driven delivery, sharing lessons from live GenAI projects and driving adoption of AI-assisted tooling across the wider team.'
    ],
    chips: []
  },
  {
    tenure: 'May 2023 - Oct 2025',
    company: 'Eightcap Pty. Ltd.',
    title: 'Product Manager (incl. PropTradeTech project)',
    current: false,
    bullets: [
      'Owned product strategy for payments, wallets, and crypto integrations at a regulated FX and CFD broker, spanning multiple PSPs, reconciliation flows, and webhook-driven event pipelines, leading a team of 14, including 7 direct reports.',
      'Introduced LLM-based transaction summarisation and anomaly detection (Azure OpenAI + RAG), improving transparency and reducing fraud investigation volume.',
      'Led an internal AI support assistant, shaped by Amplitude-driven usage analysis, that **cut payment & wallet query handling time by 30%**.',
      'Ran ways-of-working and Agile training sessions for the broader team, improving delivery consistency and cross-functional collaboration.',
      'Conducted market research and competitive analysis to inform roadmap priorities, and ran customer interviews, surveys, and feedback loops to validate feature direction.',
      'Partnered with leadership on resourcing and budget for the product roadmap, and liaised across sales, finance, support, and marketing to align product delivery with commercial goals.',
      'As part of this role, led **PropTradeTech** as Development Lead, a greenfield B2B white-label prop trading platform built within Eightcap, personally overseeing solution design and a small delivery team to take the first client from kickoff to go-live in under four months, with SumSub KYC and Stripe payments integration, plus an AI onboarding chatbot that **cut support tickets ~35%** and **lifted onboarding completion 22%**.'
    ],
    chips: ['PropTradeTech', 'Stripe', 'SumSub KYC']
  },
  {
    tenure: 'Dec 2020 - Apr 2023',
    company: 'Clear Dynamics Pty. Ltd.',
    title: 'Product Owner & Lead Software Engineer',
    current: false,
    bullets: [
      'Dual role as Product Owner and Lead Software Engineer across full-stack delivery, spanning financial services, retail, supply chain, CRM, education, and energy domains, architecting Azure Integration Services solutions and defining product vision and KPIs while leading an average team of 7, including 3 direct reports.',
      "Product Owner & delivery lead on **Latitude Financial Services'** credit card application and onboarding programme, integrating core banking APIs via REST/SOAP.",
      "Delivered platform and integration work for **Bank of Queensland**'s digital banking platform, and **Westpac**'s loans application workflow.",
      'Shipped a streamlined student application platform for **RMIT**, and defined MVP scope for the **Scoot Education** tutoring platform, integrating scheduling, payments, and tutor onboarding.',
      'Partnered with project managers, business analysts, and solution architects on effort and cost estimation for new projects, triaged system bugs raised by QA and production support, and codified reusable design principles and patterns adopted across the engineering team.',
      'Active member of the Clear Dynamics mentorship group, mentoring, supervising, and training new joiners across product and engineering, including building technical training materials and instructional videos for new starters.'
    ],
    chips: []
  },
  {
    tenure: 'Oct 2019 - Dec 2020',
    company: 'AMP',
    title: 'Senior Software Engineer',
    current: false,
    bullets: [
      'Built automated business workflows on Azure Logic Apps and Service Bus for the AMP North Online IT team, replacing manual handoffs across the investment platform.',
      'Designed real-time portfolio data processing for Managed Portfolios, and automated a previously manual deceased-customer policy workflow.',
      'Built a structured request tracking system that improved SLA visibility.'
    ],
    chips: []
  },
  {
    tenure: 'Oct 2017 - Oct 2019',
    company: 'Myprosperity Pty. Ltd.',
    title: 'Software Developer',
    current: false,
    bullets: [
      'Built and maintained REST and SOAP web APIs as part of the API team, powering two-way data synchronisation between Myprosperity and external platforms.',
      'Sole owner of the end-to-end XPlan (Iress) integration, from requirements through production, enabling real-time sync of portfolio holdings and transaction data into a unified dashboard.',
      'Led integration of Netwealth, BGL, Class, and HUB24, building two-way REST/SOAP connections with Automapper-based data mapping, consolidating multi-platform portfolio data into a single client view.',
      'Diagnosed and resolved a race condition between valuation refresh cycles and transaction history APIs, eliminating client-facing data inconsistencies.',
      'Adapted data models and UI components for multi-currency and multi-region use, supporting platform expansion into new markets.',
      'Owned delivery of major product features end to end, from requirements analysis and estimation through coding, testing, and documentation, including SQL-based reporting and resolving customer-reported issues.',
      'Resolved bugs and issues raised by support, working directly with clients on calls to reproduce and fix reported problems, while keeping delivery progress visible to project management.'
    ],
    chips: []
  },
  {
    tenure: 'Jun 2014 - Jun 2015',
    company: 'Aptean India Pvt Ltd',
    title: 'Associate Engineer, Software Development',
    current: false,
    bullets: [
      'Started here, the first rung on a ladder that ran from writing code to owning the roadmap that decides what code gets written.',
      'Diagnosed, tested, and resolved defects across the application and platform layers of a .NET system, translating functional specifications into fixes that held up under review.',
      'Worked directly with managers and technical staff to clarify requirements and scope fixes, then documented the changes and communicated resolutions back to customers.'
    ],
    chips: []
  }
];
