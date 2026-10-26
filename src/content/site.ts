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
  // Page Offres : ce qu'il reste au client et ce qui prouve la démarche.
  outcome: string;
  proof: string;
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
    outcome:
      "Une fonctionnalité ou une infra en production, et un dépôt que votre équipe reprend sans moi : tests, documentation et conventions IA compris.",
    proof:
      "Cinéstats 50/50 : la plateforme et son infra (SSO, secrets, monitoring) montées en binôme avec Claude, commits co-signés et publics.",
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
    outcome:
      "Le CLAUDE.md et le skill commités dans votre dépôt, plus une fiche de bonnes pratiques pour toute l'équipe.",
    proof:
      "Deux ans de responsable pédagogique à La Plateforme (plus de 80 apprenants), et contributeur du harness IA de l'équipe chez SustainSoft.",
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
    outcome: "Un avis clair sur votre besoin, et une proposition chiffrée sous 48 h si on travaille ensemble.",
    proof: "Sans engagement : si je ne suis pas la bonne personne, je vous le dis.",
  },
];

export const offersPage = {
  title: "Offres",
  intro:
    "Une offre principale, la mission de développement, et un atelier pour les équipes qui veulent adopter le code assisté par IA. Tout commence par un appel découverte gratuit.",
  steps: [
    { name: "Appel découverte", text: "30 minutes pour comprendre votre besoin, vos délais et votre équipe." },
    { name: "Proposition", text: "Une proposition chiffrée sous 48 h, avec le périmètre et le calendrier." },
    { name: "Réalisation", text: "Des livraisons régulières, revues et testées, que vous suivez au fil de l'eau." },
    { name: "Passation", text: "Documentation et conventions laissées dans le dépôt, pour que votre équipe continue sans moi." },
  ],
};

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
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  period: string;
  role: string;
  context: string[];
  work: string[];
  outcome: string[];
  stack: string[];
  links: { label: string; href: string }[];
  // Mis en avant sur la page d'accueil.
  featured?: boolean;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "cinestats-infra",
    title: "Cinéstats infra : une plateforme construite avec Claude",
    summary:
      "Traefik, SSO Authentik, Vaultwarden, Prometheus, Grafana et Metabase sur des VPS OVHcloud, entièrement en code assisté par IA.",
    tags: ["IA", "DevOps", "Data For Good"],
    period: "2026",
    role: "Bénévole Data For Good, en charge de l'infrastructure de services",
    context: [
      "Cinéstats 50/50 est un projet Data For Good mené avec le Collectif 50/50 pour mesurer les inégalités dans le cinéma français.",
      "L'équipe bénévole avait besoin de services partagés : une authentification unique, un coffre à secrets, du monitoring et un outil de tableaux de bord, avec un budget associatif.",
    ],
    work: [
      "Reverse proxy Traefik avec certificats Let's Encrypt, et pare-feu UFW sur chaque serveur.",
      "SSO Authentik (OIDC) pour Grafana et Vaultwarden, et protection par proxy des outils internes.",
      "Monitoring Prometheus et Grafana des serveurs de production, suivi d'erreurs avec Bugsink.",
      "Metabase avec sa propre base PostgreSQL pour les analyses de l'équipe.",
      "Déploiement de chaque service par la CI GitHub Actions.",
    ],
    outcome: [
      "Une plateforme complète pour environ 33,54 € HT par mois chez OVHcloud, hébergement de l'application compris.",
      "Chaque commit est co-signé avec Claude : la démarche de code assisté par IA est publique et vérifiable.",
    ],
    stack: ["Docker Compose", "Traefik", "Authentik", "Vaultwarden", "Prometheus", "Grafana", "Metabase", "GitHub Actions"],
    links: [{ label: "Dépôt cinestats-infra", href: "https://github.com/Le-Collectif-50-50/cinestats-infra" }],
    featured: true,
  },
  {
    slug: "blue-court",
    title: "Blue Court : un gestionnaire de tournois de volley",
    summary:
      "Un projet personnel mené de la spécification au code avec un agent IA : poules, tableau final, scores en direct sur mobile.",
    tags: ["IA", "Produit", "En cours"],
    period: "2026, en cours",
    role: "Auteur du projet, de la spécification au déploiement",
    context: [
      "Mon club de volley organise ses tournois avec un outil pensé pour le foot : pas de sets, des matchs nuls. Blue Court doit gérer les poules, l'arbre final, les règles propres à chaque tournoi et l'affichage des scores pour les joueurs.",
      "C'est aussi ma vitrine de méthode : tout le projet est mené en code assisté par IA, en public.",
    ],
    work: [
      "Spécifications écrites avant le code, dans le dépôt, et relues avec l'agent pour lever les zones floues.",
      "Feuille de route découpée en tickets GitHub, chacun livré par une PR revue par l'humain et par l'IA.",
      "Moteur de tournoi en TypeScript pur, couvert par des tests de propriétés.",
      "Règles du projet appliquées par le lint et la CI plutôt que par de longues consignes.",
    ],
    outcome: [
      "Les spécifications, la feuille de route et le moteur de calcul (règles de départage FFVB par défaut) sont publics.",
      "Prochaines étapes : poules, tableaux, planning, puis l'application mobile.",
    ],
    stack: ["TypeScript", "Vitest", "fast-check", "Biome", "GitHub Actions"],
    links: [{ label: "Dépôt blue-court", href: "https://github.com/nicolas-revel/blue-court" }],
    featured: true,
  },
  {
    slug: "cinestats-5050",
    title: "Cinéstats 50/50 : mettre en production un outil associatif",
    summary:
      "Pour le Collectif 50/50 avec Data For Good : CI/CD, durcissement des serveurs de production, TLS, migration vers l'organisation du Collectif.",
    tags: ["Produit", "Sécurité", "Next.js"],
    period: "2026",
    role: "Bénévole Data For Good, déploiement et sécurité",
    context: [
      "L'application publique de Cinéstats 50/50 devait passer d'un prototype de bénévoles à un service en production, tenu par le Collectif lui-même.",
    ],
    work: [
      "Chaîne CI/CD et environnement de préproduction.",
      "Durcissement des trois serveurs de production et certificats TLS par validation DNS.",
      "Migration des dépôts vers l'organisation GitHub du Collectif.",
      "Optimisation du référencement.",
    ],
    outcome: [
      "Un outil associatif déployé de façon sûre et reproductible, que le Collectif garde en main.",
    ],
    stack: ["Next.js", "Docker", "GitHub Actions", "Let's Encrypt"],
    links: [{ label: "Dépôt cinestats-5050", href: "https://github.com/Le-Collectif-50-50/cinestats-5050" }],
  },
  {
    slug: "eco-impact",
    title: "Eco Impact : refonte DDD et build divisé par 7",
    summary:
      "Refonte d'un métier complexe en Domain-Driven Design et Clean Architecture, déploiement sur GCP.",
    tags: ["Architecture", "NestJS", "GCP"],
    period: "2024 – 2026",
    role: "Développeur et architecte NestJS / React",
    context: [
      "Une application au métier dense, devenue difficile à faire évoluer, avec un build qui ralentissait toute l'équipe.",
    ],
    work: [
      "Refonte du back-end en Domain-Driven Design et Clean Architecture.",
      "Reprise de la chaîne de build et du déploiement sur Google Cloud.",
    ],
    outcome: ["Un temps de build divisé par 7 et un code découpé par domaine métier."],
    stack: ["NestJS", "React", "TypeScript", "GCP"],
    links: [],
  },
  {
    slug: "la-plateforme",
    title: "La Plateforme : former des développeurs",
    summary:
      "Responsable pédagogique, création du master web, plus de 80 étudiants encadrés et une infra Kubernetes pour leurs environnements.",
    tags: ["Formation", "Kubernetes"],
    period: "2022 – 2024",
    role: "Développeur fullstack et responsable pédagogique",
    context: [
      "La Plateforme est une école du numérique à Marseille. J'y ai été formé, puis j'y ai enseigné.",
    ],
    work: [
      "Création du parcours master web et de ses projets.",
      "Encadrement de plus de 80 étudiants, en cours et en suivi de projet.",
      "Infrastructure Kubernetes pour les environnements de travail des étudiants.",
    ],
    outcome: [
      "Une pratique de la transmission que j'applique aujourd'hui aux ateliers de code assisté par IA.",
    ],
    stack: ["Kubernetes", "Docker"],
    links: [],
  },
];

export const projectsPage = {
  title: "Projets",
  intro:
    "Des projets en production, associatifs ou personnels, et ce que j'ai appris en formant des développeurs. Les plus récents sont menés en code assisté par IA.",
};

export const about = {
  title: "À propos",
  intro: [
    "Je suis développeur fullstack et DevOps à Marseille. Je travaille en freelance, en remote ou sur site.",
    "Je suis passé par la formation avant de revenir au code : deux ans comme responsable pédagogique à La Plateforme, où j'ai encadré plus de 80 étudiants. Aujourd'hui je code au quotidien avec un agent IA, et j'aide les équipes à en faire autant.",
  ],
};

export const background =
  "Avant le code, un master en neuropsychologie : comprendre comment les gens apprennent et changent leurs habitudes me sert tous les jours.";

export const contact = {
  title: "Parlons de votre projet",
  unavailable: "Le formulaire arrive bientôt. En attendant, écrivez-moi sur LinkedIn.",
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
