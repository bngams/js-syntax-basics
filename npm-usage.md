# L'annuaire de packages NPM
https://www.npmjs.com/

# Les commandes de base

Chercher un package dans l'annuaire
```
npm search <module_name>
```

Installer un module
```
npm install <module name> ou npm i <module name>
```

Installer un module global
```
npm install <module name> -g 
```

Lister les modules installés globalement
```
npm ls -g
```

Désinstaller un module
```
npm uninstall <module name>
```

Mettre à jour un module
```
npm update <module name>
```

# Utiliser NPM dans un projet

## Initialiser un nouveau projet
Initialiser un projet avec npm
```
npm init
```

Répondre aux questions de configuration automatiquement
```
npm init --y
```

## Le fichier package.json
Ce fichier permet de lister les dépendances installées dans votre projet. Pour sauvegarder une dépendance dans le fichier package.json:
```
npm i <module-name> --save
```

```
npm i <module-name> --save-dev
```

## Le fichier package-lock.json
Permet de noter les versions précises des dépendances installées.
Cela permet de s'assurer que les bonnes versions sont installées à chaque fois.


## Créer et exécuter des commandes via npm run
Dans le fichier package.json, il est possible d'utiliser la section scripts pour créer des commandes.


## Récupérer un projet existant qui utilise npm
Lorsque vous récupérez un projet qui utilise npm, le dossier node_modules qui contient les dépendances n'est pas inclus (la plupart du temps).

```
git clone...

npm i 
```