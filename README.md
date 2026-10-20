# nicolasrevel.fr

Portfolio et vitrine freelance de Nicolas Revel : accompagnement des équipes tech vers le code assisté par IA.

## Stack

- Next.js 16 (App Router), React 19, TypeScript
- Tailwind CSS 4
- Déploiement prévu sur Vercel, domaine `nicolasrevel.fr`

## Développer

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build
```

Le contenu du site (offres, projets, parcours) vit dans `src/content/site.ts`.

## Démarche

Ce site est lui-même construit en code assisté par IA, avec Claude Code. Les conventions données à l'agent sont dans `CLAUDE.md`.
