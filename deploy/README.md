# Déploiement

Le site tourne dans un conteneur Docker sur le VPS, derrière Caddy installé sur l'hôte.
À chaque push sur `master`, la CI construit l'image, la publie sur `ghcr.io/nicolas-revel/portfolio`,
puis se connecte au VPS pour lancer `deploy.sh`.

## Mise en place sur le VPS (une seule fois)

1. Copier `compose.yml` et `deploy.sh` dans `/home/debian/portfolio/`.
2. Ajouter le contenu de `Caddyfile` à `/etc/caddy/Caddyfile`, puis `sudo caddy validate --config /etc/caddy/Caddyfile && sudo systemctl reload caddy`.
3. Créer une clé dédiée à la CI : `ssh-keygen -t ed25519 -N "" -f deploy_key -C github-actions`.
4. L'autoriser sur le VPS en la limitant au script, dans `/home/debian/.ssh/authorized_keys` :
   `command="/home/debian/portfolio/deploy.sh",restrict ssh-ed25519 AAAA... github-actions`

## Configuration GitHub (une seule fois)

- Settings > Environments : créer l'environnement `production` avec les secrets
  `VPS_SSH_KEY` (la clé privée `deploy_key`) et `VPS_KNOWN_HOSTS` (la sortie de `ssh-keyscan 51.75.27.39`).
- Settings > Secrets and variables > Actions > Variables (niveau dépôt, pas environnement) :
  `VPS_HOST` = `51.75.27.39` et `VPS_USER` = `debian`.

Après le premier build, rendre le paquet `portfolio` public (Packages > Package settings),
pour que le VPS puisse récupérer l'image sans identifiants.

Tant que `VPS_HOST` n'est pas défini, la CI publie l'image sans toucher au VPS.

## Formulaire de contact

Le formulaire envoie les messages par SMTP. Les identifiants vivent uniquement sur le VPS,
dans `/home/debian/portfolio/contact.env` (droits `600`), lu par `compose.yml` :

```
SMTP_HOST=ssl0.ovh.net
SMTP_PORT=465
SMTP_USER=contact@nicolasrevel.fr
SMTP_PASS=...
CONTACT_TO=contact@nicolasrevel.fr
```

Après une modification : recopier `compose.yml` sur le VPS si besoin, puis `./deploy.sh`.
Sans ce fichier, le site fonctionne et le formulaire affiche un message d'indisponibilité.
