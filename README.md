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
MONGODB_USER=root
MONGODB_PASS=MyStrongPassword
MONGODB_URI=mongodb://mongo:27017/guacamoleflix
SERVER_PORT=3000
ENV=dev
PREFIX=/
```
