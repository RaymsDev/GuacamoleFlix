# GuacamoleFlix

Projet d'école dans le cadre du cours Gestion de projet Fullstack

## Développement

/!\ Le dossier client et server sont deux projets indépendants, pensez à faire un :
```shell
$ npm install
```

dans chacun des dossiers pour pouvoir développer.

Démarrage du container Docker MongoDB
```shell
$ cd server
$ npm run mongo
```
## Docker

Pour tester l'application:
```shell
$ docker-compose up
```

## Environnement
Voici un exemple de fichier d'environnement ".env" à placer à la racine du projet
```env
MONGODB_USER=root
MONGODB_PASS=MyStrongPassword
MONGO_DB_HOST=mongodb://localhost:27017/guacamoleflix
SERVER_PORT=3000
API_PREFIX=/api
ENV=dev
```
