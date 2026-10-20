@AGENTS.md

# Portfolio nicolasrevel.fr

- Site vitrine freelance, en français. Cible : CTO, lead devs et responsables d'équipe qui veulent adopter l'IA.
- Le contenu éditorial reste dans `src/content/site.ts` ; les composants ne contiennent pas de texte en dur, sauf libellés d'interface.
- Couleurs uniquement via les tokens de `src/app/globals.css` (`background`, `foreground`, `muted`, `surface`, `border`, `accent`), clair et sombre.
- Mobile d'abord, accessible (contraste, navigation clavier, `lang="fr"`).
- Avant de proposer un changement : `npm run lint` et `npm run build` doivent passer.
