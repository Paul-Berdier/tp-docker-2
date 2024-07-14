# Projet TP-2-Docker

Ce projet démontre la configuration d'une application Express JS avec une base de données MySQL en utilisant Docker et Docker Compose.

## Configuration

1. Cloner le dépôt :
    git clone <repository-url>
    cd tp-docker-2

2. Construire et démarrer les conteneurs Docker :
    docker-compose up -d

## Dockerfile
Configure Node.js 14, installe les dépendances, netcat, copie les fichiers de l'application, expose le port 3000, et démarre l'application.

## Docker Compose
Configure deux services : MySQL et l'application. L'application attend que la base de données soit prête avant de démarrer.

## Accès
Accéder à l'application à http://<votre-ip-serveur>:3000
