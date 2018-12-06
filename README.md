# GuacamoleFlix

Projet d'école dans le cadre du cours Gestion de projet Fullstack

## Développement

Nécessite Node.js LTS (carbon)

/!\ Le dossier client et server sont deux projets indépendants, pensez à faire un :
```shell
$ cd ./client 
$ npm install
```

```shell
$ cd ./server 
$ npm install
```

dans chacun des dossiers pour pouvoir développer.

Démarrage du container Docker MongoDB
```shell
$ docker-compose up mongo
```
## Docker

Pour tester l'application:
```shell
$ docker-compose up
```

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

## Postman

Documentation de l'api REST
https://documenter.getpostman.com/view/1552186/RzfcNX7n
