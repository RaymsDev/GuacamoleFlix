# GuacamoleFlix

Projet d'école dans le cadre du cours Gestion de projet Fullstack

## Postman

Documentation de l'api REST:
https://documenter.getpostman.com/view/1552186/RzfcNXC5

## Développement

Nécessite Node.js LTS (carbon)

/!\ Le dossier client et server sont deux projets indépendants, pensez à faire un :
```shell
$ cd ./client 
$ npm install
$ npm start
```

```shell
$ cd ./server 
$ npm install
$ npm start
```

pour tester l'application.

Démarrage du container Docker MongoDB
```shell
$ docker-compose up mongo
```
## Docker

Pour tester l'application:
```shell
$ docker-compose up
```

(Le build prends un certain temps car nous avons gérés l'i18n et donc 1 container par langue => à optimiser)

## Environnement
Voici un exemple de fichier d'environnement ".env" à placer à la racine du projet
```env
DB_NAME=guacamoleflix
MONGODB_URI=mongodb://localhost:27017/guacamoleflix
MONGODB_USER=mongo_admin
MONGODB_PASS=MyStrongPassword
SERVER_PORT=3000
MONGO_INITDB_DATABASE=guacamoleflix
MONGO_INITDB_ROOT_USERNAME=mongo_admin
MONGO_INITDB_ROOT_PASSWORD=MyStrongPassword
ENV=prod

FIREBASE_CLIENT_EMAIL=firebase@guacamoleflix.com
FIREBASE_DATABASE_URL=https://guacamoleflix.com
FIREBASE_PRIVATE_KEY=secret
FIREBASE_PROJECT_ID=guacamoleflix

```

## Google Analytics

L'application comporte Google Analytics afin d'avoir des informations et des statistiques sur le trafic des utilisateurs.
