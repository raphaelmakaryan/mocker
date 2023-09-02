# Simple Nodejs App for Devops Training
## Description du Projet
Ce projet est une application web simple utilisant Node.js avec Express. Elle utilise également Axios pour effectuer des requêtes HTTP et dotenv pour gérer des variables d'environnement.

L'application écoute sur le port 3000 et retourne un message de bienvenue ainsi que le statut de l'API GitHub lorsqu'on accède à l'URL racine.

## Prérequis
- Node.js (version 14 ou supérieure)
- npm (version 6 ou supérieure)
## Installation
Clonez le dépôt

```bash
git clone https://github.com/mon-depot/mon-application-nodejs.git
````
## Accédez au dossier du projet

```bash
cd mon-application-nodejs
```
## Installez les dépendances
```
npm install
```
## Configuration
Le projet utilise des variables d'environnement pour la configuration. Créez un fichier `.env` dans le répertoire racine du projet et ajoutez la variable d'environnement PORT comme suit:

```
PORT=3000
```
## Exécution de l'Application
Pour exécuter l'application, utilisez la commande suivante dans le terminal :

```
npm start
```
L'application devrait démarrer et être accessible à `http://localhost:3000`.
