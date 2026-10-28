export interface JourneyChapter {
  id: string;
  /** Rail label, short and loud. */
  label: string;
  /** Zero-padded index, e.g. "01". */
  index: string;
  /** Figure caption used in the chapter meta row. */
  fig: string;
  title: string;
  text: string;
}

const bioP1 =
  "I'm Theodhore, a web developer who likes building things that feel fast, look intentional, and hold up under real use. I work across the stack, from interfaces in React and Next.js to the data and APIs behind them.";

const bioP2 =
  "Lately I've been spending most of my time in Web3: wiring wallets and contracts into the frontend with Wagmi and Viem, writing Solidity, and designing flows that make on-chain actions less confusing for people who just want things to work.";

const bioP3 =
  "I care about clean, typed code, accessible and responsive UI, and shipping in small steps that I can verify. If you have an idea, a product, or a protocol that needs a careful pair of hands,";

export const CHAPTERS: JourneyChapter[] = [
  {
    id: "idea",
    label: "Idea",
    index: "01",
    fig: "FIG. 1 / PAPER",
    title: "The sketch",
    text: "Every build starts on paper: a few boxes for what the product is, an arrow for who it serves, another for the data it needs. Moving boxes on paper is far cheaper than deleting code later.",
  },
  {
    id: "contract",
    label: "Contract",
    index: "02",
    fig: "FIG. 2 / SOLIDITY",
    title: "The contract",
    text: "When a feature touches the chain, the Solidity comes before the UI: small contracts with one job each, called from the frontend through Wagmi and Viem so the interface and the chain can't disagree about state.",
  },
  {
    id: "interface",
    label: "Interface",
    index: "03",
    fig: "FIG. 3 / WIREFRAME",
    title: "The interface",
    text: "Then the interface assembles itself, one component at a time, in Next.js and TypeScript — keyboard, touch, and reduced motion included from the first commit instead of patched on at the end.",
  },
  {
    id: "ship",
    label: "Ship",
    index: "04",
    fig: "FIG. 4 / DEPLOY",
    title: "Live",
    text: bioP1,
  },
];

export { bioP2, bioP3 };

/** Total shipped case studies in lib/projects.ts; count is honest, from data. */
export const PROJECT_COUNT = 5;

/** Technologies shown in this scene; the count is derived, not invented. */
export const STACK: string[] = [
  "Next.js 16",
  "TypeScript",
  "React",
  "Wagmi / Viem",
  "Solidity",
];

/** Tags carried over from the old About section, links kept pointing at #projects. */
export const TAGS: { label: string; href: string }[] = [
  { label: "Clean code", href: "#projects" },
  { label: "Performance first", href: "#projects" },
  { label: "Secure by default", href: "#projects" },
  { label: "Smart contracts", href: "#projects" },
];
