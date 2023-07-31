#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

echo " 🛑  STOP 🐳 Nginx Frontend Mentor Library"
docker-compose --env-file ../../../.env.development \
  --file ../docker-compose.dev.yml \
  stop
