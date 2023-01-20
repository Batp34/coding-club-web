# INTRODUCTION <a name="introduction"></a>

Bonjour à toi, jeune développeur ! Aujourd'hui, tu vas découvrir comment faire un site web classique. La finalité sera de pouvoir mettre votre site en public grâce à un hébergeur. Nous allons donc voir comment avec github, vous pouvez héberger votre site gratuitement (et bien plus).

# TABLE DES MATIÈRES <a name="table-des-matières"></a>

- [INTRODUCTION](#introduction)
- [TABLE DES MATIÈRES](#table-des-matières)
- [PRÉ-REQUIS](#pré-requis)
- [FONCTIONNEMENT D'UN SITE WEB](#fonctionnement-dun-site-web)

# PRÉ-REQUIS <a name="pré-requis"></a>

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

# FONCTIONNEMENT D'UN SITE WEB <a name="fonctionnement-dun-site-web"></a>

Un site web est composé de 3 parties :
- Le HTML
- Le CSS
- Le JavaScript

## HTML

Le HTML est le langage qui permet de créer la structure de votre site. C'est grâce à lui que vous pouvez créer des paragraphes, des titres, des images, etc. Pour imager, le HTML est le squelette de votre site.
Si vous voulez en savoir plus sur le HTML, je vous conseille de lire [ce tutoriel](https://www.w3schools.com/html/).

Ou alors voici quelques exemples de balises HTML :

### Titre basique avec un paragraphe
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

### Mettre un lien
```html
<a href="https://www.google.com">Cliquez ici pour aller sur google</a>
```

### Mettre une image
```html
<img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="Logo de google">
```

### Mettre une liste
```html
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>
```

Il y a beaucoup d'autres balises HTML, mais je vous laisse découvrir par vous-même.

## CSS

Le CSS est le langage qui permet de mettre du style à votre site. C'est grâce à lui que vous pouvez changer la couleur de votre texte, la taille de votre texte, etc. Pour imager, le CSS est la peau de votre site.
Les fichiers css sont généralement nommés "style.css" et sont stockés dans un dossier nommé "css".

pour l'inclure dans une page HTML, vous devez ajouter cette ligne dans la balise `<head>` :

```html
<link rel="stylesheet" href="css/style.css">
```
href contient le chemin vers le fichier css.

Si vous voulez en savoir plus sur le CSS, je vous conseille de lire [ce tutoriel](https://www.w3schools.com/css/).
Ou alors voici quelques jeu online pour apprendre le CSS :

- [Flexbox Froggy](https://flexboxfroggy.com/)
- [Grid Garden](https://cssgridgarden.com/)
- [CSS Diner](https://flukeout.github.io/)
- [CSS Battle](https://cssbattle.dev/)

C'est pas vraiment ce qu'il manque comme jeu pour apprendre le CSS.
Voici quelques exemples de code CSS :

### Changer la couleur du texte
```css
h1 {
    color: red;
}
```

### Changer la taille du texte
```css
h1 {
    font-size: 50px;
}
```

### Changer la couleur de fond
```css
body {
    background-color: black;
}
```

### Changer la taille d'une image
```css
img {
    width: 100px;
}
```

Et plein d'autres choses encore.
