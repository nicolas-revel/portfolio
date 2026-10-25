export const siteUrl = "https://nicolasrevel.fr";

export const profile = {
  name: "Nicolas Revel",
  role: "Développeur fullstack & DevOps, ancien formateur",
  location: "Marseille · full remote",
  pitch:
    "Développeur fullstack & DevOps freelance à Marseille. Missions Next.js, NestJS, Docker et CI/CD menées en code assisté par IA, et ateliers pour former votre équipe.",
  // Le titre d'accueil met en valeur la fin de la phrase.
  pitchLead: "Développeur fullstack & DevOps freelance,",
  pitchAccent: "qui code avec l'IA et vous transmet la méthode.",
  intro:
    "Next.js, NestJS, Docker, CI/CD. Basé à Marseille, en remote partout en France. Ancien formateur, je travaille en code assisté par IA au quotidien et je sais le transmettre à une équipe.",
  links: {
    github: "https://github.com/nicolas-revel",
    linkedin: "https://www.linkedin.com/in/nicolas-revel",
  },
};

export const problem = {
  title: "Un produit à livrer, pas le temps de recruter",
  body: [
    "Votre équipe est déjà prise par la roadmap, ou vous n'avez pas encore d'équipe technique. Il faut pourtant livrer, et proprement : une application qui tient en production, des déploiements sans sueurs froides.",
    "Je prends en charge une partie du produit, du front à la mise en production. Je travaille en code assisté par IA pour avancer vite, avec des revues et des tests à chaque étape, et je laisse un dépôt que votre équipe peut reprendre sans moi.",
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
    slug: "mission",
    name: "Mission dev fullstack & DevOps",
    audience: "Pour la startup ou la PME qui a un produit à livrer, sans recruter.",
    content: [
      "Front et back en Next.js, React, NestJS, GraphQL",
      "Docker, CI/CD, déploiement et durcissement de serveurs, monitoring",
      "Mené en code assisté par IA, avec revue et tests systématiques",
      "Conventions (CLAUDE.md, skills) laissées dans le dépôt pour votre équipe",
    ],
    format: "Régie ou forfait, remote ou à Marseille",
    price: "Sur devis",
  },
  {
    slug: "atelier",
    name: "Atelier code assisté par IA",
    audience: "Pour l'équipe de 3 à 8 devs qui a un assistant de code mais s'en sert peu.",
    content: [
      "Prise en main d'un agent de code, sur votre propre code",
      "Un CLAUDE.md et un premier skill écrits pour votre dépôt",
      "Revue critique du code généré : tests et sécurité",
      "Tarif de lancement pour les 3 premières entreprises",
    ],
    format: "Demi-journée ou journée, sur site ou à distance",
    price: "À partir de 600 € HT",
  },
  {
    slug: "decouverte",
    name: "Appel découverte",
    audience: "Pour savoir si on peut travailler ensemble.",
    content: [
      "Votre projet, vos délais, votre équipe",
      "Un avis franc, et vers qui aller si ce n'est pas moi",
      "Une proposition chiffrée sous 48 h si ça colle",
    ],
    format: "30 minutes en visio",
    price: "Gratuit",
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
  title: "Parlons de votre projet",
  text: "Un appel découverte de 30 minutes, gratuit, pour comprendre votre besoin et voir si je peux vous aider.",
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
