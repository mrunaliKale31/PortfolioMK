import { Project, Certification, ColorSwatch } from './types';

export const DARK_PALETTE: ColorSwatch[] = [
  {
    name: 'Canvas Background',
    hex: '#0A0A0A',
    description: 'Deepest neutral dark grey for the canvas. Avoids harsh #000000 to keep contrast balanced and readable.',
    usage: 'Body, main sections background'
  },
  {
    name: 'Card Background',
    hex: '#161616',
    description: 'Subtle container level-1 grey. Simulates depth through layered borders and subtle background differences.',
    usage: 'Grid cards, sidebar wrappers, input container backgrounds'
  },
  {
    name: 'Primary Accent',
    hex: '#FFFFFF',
    description: 'High-contrast stark white. Used selectively to guide the eye directly to headers and vital controls.',
    usage: 'Main typography, primary solid buttons, key indicators'
  },
  {
    name: 'Secondary Neutral',
    hex: '#8F8F8F',
    description: 'Muted slate/grey. Perfect for secondary copy, captions, and structural borders.',
    usage: 'Paragraph descriptions, secondary labels, divider lines'
  },
  {
    name: 'Hyper-Accent (Vercel Amber)',
    hex: '#F5A623',
    description: 'Saturated energetic amber. Used minimally for micro-focus cues and progress ticks.',
    usage: 'Status tags, interactive borders on hover, key milestones'
  }
];

export const LIGHT_PALETTE: ColorSwatch[] = [
  {
    name: 'Canvas Background',
    hex: '#FAFAFA',
    description: 'Premium light grey/off-white canvas. Gentle on the eyes, mimicking a museum card or high-grade paper.',
    usage: 'Body, main sections background'
  },
  {
    name: 'Card Background',
    hex: '#FFFFFF',
    description: 'Stark white for elevated elements. Employs soft shadows to express clean elevation.',
    usage: 'Grid cards, sidebar wrappers, input fields'
  },
  {
    name: 'Primary Accent',
    hex: '#0F0F0F',
    description: 'Near-black deep charcoal. Maintains supreme readability without the clinical look of absolute black.',
    usage: 'Main typography, primary solid buttons, key indicators'
  },
  {
    name: 'Secondary Neutral',
    hex: '#606060',
    description: 'Medium slate/grey. Ideal for supportive description paragraphs and sub-navigation text.',
    usage: 'Paragraph descriptions, secondary labels, divider lines'
  },
  {
    name: 'Hyper-Accent (Linear Purple)',
    hex: '#5E6AD2',
    description: 'Polished royal indigo. Provides a sleek, high-end highlight tone for interactive elements.',
    usage: 'Status tags, interactive borders on hover, focus highlights'
  }
];

export const SAMPLE_PROJECTS: Project[] = [
  {
    id: 'linear-clone',
    title: 'Linear Engine',
    shortDescription: 'High-performance issue tracking system with lightning-fast keybind actions, offline syncing, and real-time multiplayer updates.',
    longDescription: 'Linear Engine is a redesigned case study exploring instant keyboard navigation, command menus, and state-reconciliation databases on the client-side. Built for developers who crave speed.',
    problemStatement: 'Modern web applications are bogged down by round-trips to relational databases, resulting in jarring loading spinners, 200ms latency on simple status changes, and a clumsy keyboard-unfriendly flow.',
    solution: 'We engineered a client-first application structure utilizing an in-memory database with optimistic updates. Every single action is executed locally in under 1ms, and queued asynchronously to a backend PostgreSQL cluster via sync tokens.',
    features: [
      'Multiplayer Live Sync with WebSockets and delta-CRDTs',
      'Optimistic mutations with instant undo-redo queue',
      'Fuzzy-search command menu inspired by macOS Spotlight',
      'Full offline capabilities with IndexedDB persistence'
    ],
    techStack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'WebSockets', 'IndexedDB'],
    category: 'Full-Stack',
    status: 'Completed',
    banner: 'Linear Engine Layout',
    githubUrl: 'https://github.com/developer/linear-engine',
    liveDemoUrl: 'https://linear-engine.demo.io',
    docUrl: 'https://docs.linear-engine.io',
    challenges: 'The main challenge was handling conflict-free replication when multiple developers modified the same issue card in offline environments. We resolved this by adopting a LWW-Element-Set CRDT strategy.',
    lessonsLearned: 'Always model your client-side data state before touching UI layout. Separating UI rendering from database synchronization makes debugging complex network states remarkably simple.',
    futureImprovements: 'Integrate WebRTC direct peer-to-peer peering to allow direct file sharing and ultra-low latency collaboration between co-located team members.'
  },
  {
    id: 'framer-canvas',
    title: 'Framer Motion Studio',
    shortDescription: 'A node-based visual interaction composer that translates drag-and-drop gesture pipelines directly into production-ready React Framer Motion code.',
    longDescription: 'Framer Motion Studio is an interactive developer utility focused on visual design, spring physics modeling, and micro-interaction code exports. It bridges the gap between static design specs and highly interactive web components.',
    problemStatement: 'Designing fluid, spring-physics-based animations in code is an exhausting process of trial and error, adjusting damping coefficients, stiffness, and mass in CSS files.',
    solution: 'An interactive canvas workspace where developers can wire gestures (drag, tap, hover) directly to physical spring targets and visually review the response curve in real-time, instantly copying the optimized JSX markup.',
    features: [
      'Visual node connector for gesture-to-property mapping',
      'Real-time Bezier & Spring physics graph representation',
      'Automated JSX/TypeScript code exporter tailored for Tailwind V4',
      'Live sandbox playground with modular reactive components'
    ],
    techStack: ['React', 'TypeScript', 'Framer Motion', 'Tailwind CSS', 'D3.js', 'Vite'],
    category: 'Frontend / Tooling',
    status: 'Beta',
    banner: 'Framer Motion Workspace',
    githubUrl: 'https://github.com/developer/framer-motion-studio',
    liveDemoUrl: 'https://framer-studio.demo.io',
    docUrl: 'https://docs.framer-studio.io',
    challenges: 'Optimizing rendering performance with 60FPS fluid physics graphs while executing user code inside a sandbox proved difficult. We resolved this by offloading physics simulations to a Web Worker.',
    lessonsLearned: 'Micro-animations hold user attention far longer than large static elements. A subtle 200ms spring-back transition makes dragging cards feel physical and satisfying.',
    futureImprovements: 'Incorporate AI model assistance to translate natural language styling descriptions directly into physical motion parameters.'
  },
  {
    id: 'notion-editor',
    title: 'Notion Sync Blocks',
    shortDescription: 'A block-based canvas editor with nested slash commands, real-time rich text sync, and markdown file compilation.',
    longDescription: 'Notion Sync Blocks is a deep-dive exploration of rich-text content editable elements, custom drag-and-drop blocks, and nested document trees optimized for fast developer workflow.',
    problemStatement: 'Standard text areas lack the structured modularity needed to embed dynamic widgets, code playgrounds, and tables directly within a single document stream.',
    solution: 'A custom-built block tree state manager where every paragraph, heading, or code snippet acts as an independent React node, easily re-arranged, nested, and styled with instantaneous local indexing.',
    features: [
      'Frictionless slash-command block generator',
      'Code editor block with live syntax highlighting and direct execution',
      'Nested document hierarchy with folder-tree navigation',
      'Markdown export and import pipelines'
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Lexical', 'Express', 'Vite'],
    category: 'Productivity',
    status: 'In Progress',
    banner: 'Sync Blocks Editor',
    githubUrl: 'https://github.com/developer/notion-sync-blocks',
    liveDemoUrl: 'https://sync-blocks.demo.io',
    docUrl: 'https://docs.sync-blocks.io',
    challenges: 'Designing a nesting algorithm that supports infinite drag levels while maintaining pixel-perfect indentation and drop indicator lines across complex flexbox parent grids.',
    lessonsLearned: 'A text-editor is fundamentally a state synchronization problem. Keeping the document tree in a clean flat array indexed by unique parents makes sorting and rendering extremely bulletproof.',
    futureImprovements: 'Introduce offline conflict resolution using Yjs with rich comment streams and inline threading.'
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'cert-1',
    title: 'Advanced React Core & Patterns',
    issuer: 'Frontend Masters',
    date: 'Jan 2026',
    credentialUrl: 'https://credentials.io/react-advanced',
    badgeColor: 'from-blue-500/10 to-indigo-500/10 border-blue-500/20'
  },
  {
    id: 'cert-2',
    title: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: 'Dec 2025',
    credentialUrl: 'https://credentials.io/aws-solutions-architect',
    badgeColor: 'from-orange-500/10 to-yellow-500/10 border-orange-500/20'
  },
  {
    id: 'cert-3',
    title: 'Systems & Performance Design',
    issuer: 'MIT Professional Education',
    date: 'Oct 2025',
    credentialUrl: 'https://credentials.io/mit-systems',
    badgeColor: 'from-red-500/10 to-pink-500/10 border-red-500/20'
  },
  {
    id: 'cert-4',
    title: 'Kubernetes Certified Administrator',
    issuer: 'Cloud Native Computing Foundation',
    date: 'Aug 2025',
    credentialUrl: 'https://credentials.io/cncf-k8s',
    badgeColor: 'from-cyan-500/10 to-blue-500/10 border-cyan-500/20'
  }
];
