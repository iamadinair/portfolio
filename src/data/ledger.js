// Hero "ledger strip", measured outcomes shown as delta chips.
// direction: "up" (green, ▲) or "down" (orange, ▼). "down" is used for
// metrics where a decrease is the good outcome (e.g. fewer manual reviews).
export const ledger = [
  {
    value: '5–12%',
    direction: 'up',
    label: 'Feature performance uplift from A/B testing programmes',
    tag: 'Experimentation'
  },
  {
    value: '20–30%',
    direction: 'down',
    label: 'Manual KYC/AML reviews cut through optimised decisioning',
    tag: 'Compliance · Banxa'
  },
  {
    value: '5–10%',
    direction: 'up',
    label: 'Onboarding conversion uplift from funnel redesign',
    tag: 'Growth · Banxa'
  },
  {
    value: '30%',
    direction: 'down',
    label: 'Payment & wallet support query handling time',
    tag: 'GenAI · Eightcap'
  },
  {
    value: '35%',
    direction: 'down',
    label: 'Support ticket volume post-launch of onboarding chatbot',
    tag: 'PropTradeTech'
  },
  {
    value: '22%',
    direction: 'up',
    label: 'Onboarding completion rate after chatbot deployment',
    tag: 'PropTradeTech'
  },
  {
    value: '10–20%',
    direction: 'up',
    label: 'Transaction fulfilment rate via governed API integrations',
    tag: 'Payments · Banxa'
  },
  {
    value: '15–25%',
    direction: 'down',
    label: 'Approval turnaround time reduction, onboarding & risk',
    tag: 'Banxa'
  }
];
