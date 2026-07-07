# Brief projet Mybabyshoot pour Claude Code

Ce fichier est lu automatiquement par Claude Code. Il decrit le projet, les regles a respecter, l'architecture actuelle et les chantiers a mener.

## Contexte

Mybabyshoot est le site d'un photographe grossesse, naissance et nouveau-ne a Lyon (le photographe est aussi connu sous "Matt la photo", forte audience sur les reseaux). Le site sert a presenter le travail, composer une seance sur mesure avec un prix en direct, et reserver en payant un acompte.

Studio : 16 chemin du Buisset, 69350 La Mulatiere.
Telephone : 06 47 76 54 17.
Domaine : mybabyshoot.fr (a brancher sur Netlify).

## Regles absolues

1. Langue : tout le contenu visible et les echanges sont en francais.
2. Ponctuation : ne jamais utiliser de tirets longs (em-dash) ni de tirets moyens (en-dash) dans les textes rediges. Utiliser une ponctuation classique (virgule, deux points, parentheses). Cette regle est stricte.
3. Mobile first : le site doit etre pense et teste en priorite sur mobile.
4. Ne jamais mettre de cle secrete (Stripe, API) dans le code front ou dans le depot. Les cles secretes vont uniquement dans les variables d'environnement Netlify.
5. Garder un ton chaleureux et sobre, sans exces de formatage.

## Architecture actuelle

Le site est aujourd'hui un seul fichier `index.html` contenant le HTML, le CSS (dans une balise style) et le JS (dans une balise script), plus un dossier `images/`. C'est un choix historique. Tu peux proposer de restructurer proprement (voir chantier 1), mais en conservant le rendu et le comportement a l'identique.

### Design (variables CSS principales)

Palette marron, beige, creme, avec un accent caramel et un bouton principal marron.
- creme #FAF4EA, creme-2 #EFE3D0
- encre #322619, encre douce #80705C
- accent caramel #B0824F, accent fonce #8C6239
- bouton principal #5E4430
- lignes #E6D8C3

Polices : Bricolage Grotesque (titres), Mulish (texte), Fraunces italique (accents, classe `.ser`).

### Blocs de configuration JS (en haut du script)

- `PRIX` : seanceBase 290, photosIncluses 5, photoSupp 10, duoBase 580, duoPhotosIncluses 10, galerie 100, galRetouche 250, galRetoucheDuo 350, album 140, acompteFixe 90.
- `CHIFFRES` : note Google, abonnes, avis.
- `AVIS` : tableau d'avis (a remplacer par les vrais avis Google).
- `KOALENDAR_URL` : lien de la page Koalendar embarquee (systeme a remplacer, voir chantier 3).

### Logique du configurateur

`state = { type, photos, galerie, galRetouche, album }`.
- `type` : grossesse, naissance ou duo (grossesse + naissance).
- `galRetouche` est une chaine : '' (aucune), 'one' (retouchee 1 seance, 250) ou 'two' (retouchee 2 seances, 350).
- En duo, la galerie au naturel est toujours offerte et affichee "Offert", meme si une galerie retouchee est choisie. Les photos brutes des deux seances sont toujours incluses.
- En seance simple, galerie au naturel (+100) et galerie retouchee (+250) sont exclusives.
- L'album necessite 20 photos retouchees minimum (indique dans l'option).
- Le devis calcule un total en direct et affiche un acompte fixe de 90 euros ("Acompte pour reserver la date"), le solde etant regle le jour de la seance.
- Le bouton "Reserver cette seance" et tous les boutons "Reserver" ouvrent la fenetre de reservation (aujourd'hui Koalendar en modale, classe `.js-reserve`, fonction `openKoala`).

### Workflow qualite a respecter a chaque modification

1. Ne jamais introduire de tiret long ou moyen. Verification : rechercher dans index.html tout tiret long (U+2014) ou moyen (U+2013) et s'assurer qu'il n'y en a aucun.
2. Si le JS change, verifier la syntaxe (extraire le script et lancer `node --check`).
3. Garder index.html et images ensemble pour tout test.

## Chantiers a mener

### Chantier 1 : mise sous Git et connexion GitHub

Le depot est deja initialise en local avec un premier commit. A faire :
- creer le depot distant sur le compte GitHub de Matt (nom suggere : `mybabyshoot`),
- ajouter le remote et pousser la branche principale,
- proposer une organisation de fichiers plus claire si pertinent (par exemple separer le CSS et le JS, ou passer a une petite structure avec un dossier `src/` et un build simple), sans casser le rendu ni le comportement, et en gardant un deploiement Netlify simple.

Important : la creation du depot et le push demandent l'authentification de Matt. Utiliser son compte via l'outil disponible (gh CLI s'il est connecte) ou lui donner les commandes exactes a lancer. Ne pas inventer de credentials.

### Chantier 2 : verifier et fiabiliser Stripe

Aujourd'hui, le paiement de l'acompte passe par Koalendar en offre Pro, connecte au compte Stripe de Matt. A verifier et documenter :
- que le compte Koalendar est bien en Pro et que le paiement est active sur la page de reservation,
- que le compte Stripe est bien connecte et que l'acompte de 90 euros est bien preleve, avec recu automatique,
- qu'un vrai test de bout en bout fonctionne (reservation, paiement, confirmation, blocage du creneau).

Si on abandonne Koalendar (chantier 3), Stripe devra etre integre en direct via des fonctions serverless Netlify (voir ci-dessous). Dans ce cas, ne jamais exposer la cle secrete : elle va dans les variables d'environnement Netlify (`STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`). Le front n'utilise que la cle publique.

### Chantier 3 : reservation maison connectee au CRM (remplacer Koalendar)

Objectif : permettre au client de choisir un jour et une heure, payer l'acompte, recevoir une confirmation, et que la reservation arrive directement dans le CRM de Matt, sans dependre de Koalendar.

Matt possede deja un CRM maison pour ses marques photo (agenda, suivi des paiements, notifications, synchro cloud via Netlify Blobs, PWA). L'idee est de brancher la reservation dessus.

Architecture recommandee (a valider avec Matt) :
- Fonctions serverless Netlify :
  - `availability` : lit les creneaux deja pris (depuis le store du CRM, par exemple Netlify Blobs) et renvoie les disponibilites, en respectant l'espacement de 4h entre seances.
  - `create-checkout` : cree une session Stripe Checkout pour le montant de l'acompte (90 euros fixe, ou montant dynamique du configurateur si Matt le souhaite), avec les infos du creneau choisi.
  - `stripe-webhook` : a la confirmation de paiement, ecrit la reservation confirmee dans le CRM (store Netlify Blobs) et declenche la confirmation.
  - `create-booking` : pose un verrou temporaire sur le creneau pendant le paiement pour eviter les doubles reservations.
- Stockage : reutiliser le store du CRM (Netlify Blobs) pour les reservations et l'agenda, afin que tout soit centralise.
- Front : un selecteur de date et de creneau qui appelle `availability`, collecte les infos client, puis redirige vers Stripe Checkout. Au retour, la page de succes confirme, et le webhook a deja enregistre la reservation cote CRM.
- Confirmations : email au client (via un service comme Resend ou SendGrid) et notification a Matt. Matt utilise deja un bot Telegram pour sa marque Maison Lumiere, on peut reutiliser le meme principe pour etre prevenu de chaque reservation.
- Synchro agenda : prevoir une option de synchro avec Google Agenda pour eviter les doubles reservations cote Matt, ou au minimum bloquer le creneau dans le CRM.

Points a arbitrer avec Matt avant de coder :
- acompte fixe (90 euros) ou montant dynamique issu du configurateur,
- gestion des annulations et no-show (l'acompte reste acquis a moins de 7 jours, voir conditions deja redigees),
- quel service d'email pour les confirmations,
- niveau de synchro agenda souhaite.

Avantages de cette approche : plus de dependance a Koalendar, tout est centralise dans le CRM, pas d'abonnement Koalendar. Contreparties : plus de code a maintenir, et c'est a nous de gerer la fiabilite (verrous anti double reservation, RGPD, emails).

## Ordre conseille

1. Git et GitHub (chantier 1), pour tout versionner avant de toucher au reste.
2. Verification Stripe et test de bout en bout (chantier 2).
3. Puis, si Matt confirme, reservation maison connectee au CRM (chantier 3), avec d'abord une maquette du parcours et un arbitrage des points ci-dessus, avant de coder les fonctions serverless.
