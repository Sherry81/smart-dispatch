This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Overview
This project is a responsive landing page for the upcoming Smart Dispatch feature, built with Next.js, TypeScript, and Tailwind CSS. The page includes a hero section, feature highlights, and a lead capture form designed to support the upcoming marketing campaign.


Technical Decision
I chose to split the landing page into small, reusable components (Hero, Features, Lead Form, Footer, and Dashboard Preview) rather than building everything in a single page component. This keeps the codebase maintainable, makes individual sections easier to test and update, and better reflects how marketing pages typically evolve over time.


What I Would Do With More Time
• Add subtle animations and transitions to improve user engagement.
• Improve accessibility with additional keyboard navigation and screen reader testing.
• Add analytics tracking for CTA clicks and form submissions.
• Integrate the lead capture form with a backend service and validation layer.
• Expand the Open Graph implementation with custom social sharing images.