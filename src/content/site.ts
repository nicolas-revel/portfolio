export const profile = {
  name: "Nicolas Revel",
  role: "Développeur fullstack & DevOps, ancien formateur",
  location: "Marseille · full remote",
  pitch:
    "J'aide les équipes tech à adopter le code assisté par IA, sans perdre en qualité ni en sécurité.",
  // Le titre d'accueil met en valeur la fin de la phrase.
  pitchLead: "J'aide les équipes tech à adopter le code assisté par IA,",
  pitchAccent: "sans perdre en qualité ni en sécurité.",
  intro:
    "Je code en production depuis 5 ans et j'ai encadré plus de 80 développeurs en formation. Aujourd'hui, j'accompagne les équipes qui veulent passer de l'usage individuel de l'IA à une vraie méthode d'équipe.",
  email: "nicolas.revel@laplateforme.io",
  links: {
    github: "https://github.com/nicolas-revel",
    linkedin: "https://www.linkedin.com/in/nicolas-revel",
  },
};

export const problem = {
  title: "Les outils sont là, la méthode manque",
  body: [
    "Vos développeurs ont accès à Copilot, Claude ou Cursor. Certains les utilisent beaucoup, d'autres pas du tout, et personne ne sait vraiment ce qui part en production.",
    "Sans conventions partagées, l'IA accélère autant la dette que les livraisons : revues bâclées, failles de sécurité, code que personne ne comprend. Je vous aide à poser le cadre qui manque.",
  ],
};

export type Offer = {
  slug: string;
  name: string;
  audience: string;
  content: string[];
  format: string;
  price: string;
};

export const offers: Offer[] = [
  {
    slug: "diagnostic",
    name: "Diagnostic IA",
    audience: "Pour l'équipe qui se demande par où commencer.",
    content: [
      "Entretiens avec les devs et l'encadrement",
      "État des outils, des usages et des risques de sécurité",
      "Plan d'adoption priorisé, prêt à dérouler",
    ],
    format: "3 jours",
    price: "À partir de 1 800 € HT",
  },
  {
    slug: "atelier",
    name: "Atelier code assisté par IA",
    audience: "Pour l'équipe dev qui veut monter en compétence vite.",
    content: [
      "Prise en main des assistants et des agents de code",
      "Revue du code généré, tests et sécurité",
      "Exercices sur votre propre code, pas sur des exemples jouets",
    ],
    format: "1 à 2 jours, sur site ou à distance",
    price: "À partir de 1 200 € HT",
  },
  {
    slug: "accompagnement",
    name: "Accompagnement d'équipe",
    audience: "Pour l'équipe qui adopte l'IA pour de bon.",
    content: [
      "Coaching embarqué dans vos rituels",
      "Conventions, CLAUDE.md et skills maintenus par repo",
      "Revue de PR assistée et intégration en CI",
    ],
    format: "2 jours par mois, sur 2 à 3 mois",
    price: "À partir de 1 400 € HT / mois",
  },
  {
    slug: "mission",
    name: "Mission dev fullstack & DevOps",
    audience: "Pour l'entreprise qui a besoin de livrer.",
    content: [
      "Next.js, React, NestJS, GraphQL",
      "Docker, CI/CD, infra sur VPS ou GCP",
      "Mené en code assisté par IA, méthode incluse",
    ],
    format: "Régie ou forfait",
    price: "500 € HT / jour",
  },
];

export const method = {
  title: "Ma méthode, testée sur mes propres projets",
  steps: [
    {
      name: "En solo",
      text: "Sur Cinéstats 50/50, j'ai monté une plateforme de services complète (SSO, secrets, monitoring) en binôme avec Claude. Chaque commit est co-signé : la démarche est publique.",
    },
    {
      name: "En équipe",
      text: "Chez SustainSoft, je contribue au harness IA de l'équipe : reprise de skills de la communauté, affinage des skills de revue de PR, CLAUDE.md maintenus à jour.",
    },
    {
      name: "Pour vous",
      text: "Je transpose ce cadre à votre équipe, à votre rythme, avec ce que j'ai appris en formant des développeurs pendant deux ans.",
    },
  ],
};

export type CaseStudy = {
  title: string;
  summary: string;
  tags: string[];
  href?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    title: "Cinéstats infra : une plateforme construite avec Claude",
    summary:
      "Traefik, SSO Authentik, Vaultwarden, Prometheus, Grafana et Metabase sur trois VPS, pour 33,54 € HT par mois, entièrement en code assisté par IA.",
    tags: ["IA", "DevOps", "Data For Good"],
    href: "https://github.com/Le-Collectif-50-50/cinestats-infra",
  },
  {
    title: "Cinéstats 50/50 : mettre en production un outil associatif",
    summary:
      "Pour le Collectif 50/50 avec Data For Good : CI/CD, durcissement des serveurs de production, TLS, migration vers l'organisation du Collectif.",
    tags: ["Produit", "Sécurité", "Next.js"],
    href: "https://github.com/Le-Collectif-50-50/cinestats-5050",
  },
  {
    title: "Eco Impact : refonte DDD et build divisé par 7",
    summary:
      "Refonte d'un métier complexe en Domain-Driven Design et Clean Architecture, déploiement sur GCP.",
    tags: ["Architecture", "NestJS", "GCP"],
  },
  {
    title: "La Plateforme : former des développeurs",
    summary:
      "Responsable pédagogique, création du master web, plus de 80 étudiants encadrés et une infra Kubernetes pour leurs environnements.",
    tags: ["Formation", "Kubernetes"],
  },
];

export const background =
  "Avant le code, un master en neuropsychologie : comprendre comment les gens apprennent et changent leurs habitudes me sert tous les jours.";

export const contact = {
  title: "Parlons de votre équipe",
  text: "Un appel de 30 minutes pour comprendre où vous en êtes avec l'IA et voir si je peux vous aider.",
};

export const experiences = [
  { period: "2026", company: "SustainSoft", role: "Ingénieur fullstack Next.js / GraphQL" },
  { period: "2024 – 2026", company: "Eco Impact", role: "Développeur & architecte NestJS / React" },
  { period: "2024", company: "IProtego", role: "Développeur fullstack NestJS / React" },
  {
    period: "2022 – 2024",
    company: "La Plateforme",
    role: "Développeur fullstack & responsable pédagogique",
  },
  { period: "2021 – 2022", company: "Customer Labs", role: "Développeur back-end Symfony (alternance)" },
];
