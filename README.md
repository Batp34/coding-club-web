# INTRODUCTION

Bonjour à toi, jeune développeur ! Aujourd'hui, tu vas découvrir comment faire un site web classique. La finalité sera de pouvoir mettre votre site en public grâce à un hébergeur. Nous allons donc voir comment avec github, vous pouvez héberger votre site gratuitement (et bien plus).

# PRÉ-REQUIS

- Un compte github
    - Si vous n'en avez pas, rendez-vous sur [github.com](github.com) et créez-en un.
- Si vous êtes sous window
    - Installer github desktop [ici](https://desktop.github.com/)
- Un éditeur de texte
    - Si vous n'en avez pas, je vous conseille [Visual Studio Code](https://code.visualstudio.com/).
- Un navigateur web
    - Tout le monde en a un, donc pas besoin de le télécharger.

## 1 - Créer un nouveau dépôt

Un dépot est un endroit où vous pouvez stocker vos fichiers. Pour créer un nouveau dépôt, rendez-vous sur [github.com](github.com) et cliquez sur le bouton "New" en haut à droite.
Pour pouvoir héberger votre site, vous devez créer un dépôt public. Pour cela, cochez la case "Public" et laissez le reste par défaut. Cliquez ensuite sur "Create repository".
Il faut que vous appeliez votre dépôt "votre_nom_de_compte.github.io". Par exemple, si votre nom de compte est "toto", votre dépôt s'appellera "toto.github.io".

(Vous pouvez suivre le tutoriel en anglais [ici](https://pages.github.com/))

A ce stade, vous avez un dépot vide qui est gérer par github-desktop. Pour le moment, il n'y a rien dedans.

## 2 - Votre premier site

Une fois que vous avez setup votre dépôt, vous pouvez commencer à créer votre site. Pour cela, vous devez créer un fichier nommé "index.html" dans votre dépôt
Voici un exemple de code HTML :

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Mon premier site</title>
    </head>
    <body>
        <h1>Bonjour à tous !</h1>
        <p>Je suis un paragraphe</p>
    </body>
</html>
```

Grâce à github-desktop, vous pouvez voir les changements que vous avez fait. Cliquez sur "Commit to master" et écrivez un message de commit. Cliquez ensuite sur "Commit to master" et "Push origin".

Et maintenant, vous pouvez voir votre site en allant sur "votre_nom_de_compte.github.io" !