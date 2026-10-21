#!/bin/sh
# Lancé par la CI via SSH. La clé de déploiement ne peut exécuter que ce script.
set -eu
cd "$(dirname "$0")"
docker compose pull --quiet
docker compose up -d --remove-orphans
docker image prune -f
