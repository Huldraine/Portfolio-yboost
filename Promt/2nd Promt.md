# Prompt – Ajustement du portfolio (version plus professionnelle)

À partir du code que tu viens de générer pour mon portfolio (**HTML, CSS et JavaScript**), je voudrais que tu le modifies pour qu’il soit **plus professionnel et moins “gamifié”**, tout en conservant la **structure générale**, le **design moderne** et les **fonctionnalités existantes** (thème clair/sombre, compteur de visites, carrousel, filtrage, formulaire avec validation, animations, etc.).

---

## 1) Compétences : supprimer l’aspect “gamifié” et refléter mon niveau réel

Actuellement, la section **Compétences** ressemble à des “stats de personnage” avec :
- des niveaux (Lvl 45, Lvl 42, etc.),
- des barres d’XP et du vocabulaire du type “Maîtrise”, “statistiques de compétences”,
- une section d’achievements / badges avec des titres très jeu vidéo.

Je veux un rendu **beaucoup plus professionnel**.

### Modifications demandées

- Supprimer toute référence à des “niveaux” au sens jeu vidéo (Lvl XX, XP, achievements, badges, etc.).
- Conserver éventuellement des barres de progression ou des pourcentages, mais présentés de manière sobre.
- Pour chaque compétence, afficher :
  - le nom de la compétence,
  - un niveau sous forme de texte (ex. “Débutant”, “Intermédiaire”),
  - une courte phrase de description orientée métier,
  - éventuellement des tags de technologies ou de mots-clés.

### Niveau réel à refléter clairement

- HTML / CSS : **Débutant**
- JavaScript : **Débutant**
- Python : **Débutant**
- C : **Débutant**
- C++ : **Débutant**
- C# : **Débutant**
- Go (Golang) : **Débutant**
- Blender : **Débutant**

### Organisation suggérée (adaptable)

- Une carte ou ligne pour **HTML / CSS** avec une description du type :  
  *“Intégration de maquettes, mise en page responsive, bases de l’accessibilité.”*
- Une carte ou section **Langages bas niveau / systèmes** regroupant **C et C++** (Débutant).
- Une carte ou section pour **C#** (Débutant), par exemple orientée bases de la programmation orientée objet.
- Une carte ou section pour **Go / Golang** (Débutant), centrée sur les notions fondamentales (types, fonctions, logique).

Je ne veux plus de vocabulaire du type :  
“niveau 42”, “XP”, “statistiques de compétences”, “achievements”, “First Blood”, “JS Ninja”, etc.

### Partie achievements / badges

- Soit tu la supprimes complètement,
- Soit tu la transformes en une section plus professionnelle de type **“Points forts”** ou **“Soft skills”**, avec une liste sobre, par exemple :
  - Capacité à apprendre rapidement de nouvelles technologies
  - Bonne communication écrite
  - Travail en équipe et gestion de projet

Le ton doit être clairement **professionnel**, même si le design reste moderne.

---

## 2) Projets : utiliser mes vrais projets et clarifier le statut

Dans la section **Projets**, je veux remplacer les projets génériques actuels par mes projets réels, avec un **statut clair** (terminé / en cours).

### Projets terminés
- power4  
- projet-red  

### Projet en cours
- Ydays-Golem  

### Consignes

- Remplacer les cartes du carrousel par **trois cartes** correspondant exactement à ces projets.
- Pour chaque projet, inclure :
  - un titre exact : *power4*, *projet-red*, *Ydays-Golem*,
  - une courte description professionnelle (type de projet, objectif, contexte),
  - quelques tags de technologies ou de mots-clés (plausibles et cohérents avec un profil de développeur débutant).

### Filtres

- Remplacer les filtres actuels “Web / Mobile / Design” par :
  - Tous
  - Terminés
  - En cours

Mettre à jour les attributs `data-category` :
- power4 → `termine`
- projet-red → `termine`
- Ydays-Golem → `encours`

Adapter le **JavaScript de filtrage** en conséquence.

---

## 3) Cohérence globale

- Mettre à jour la section **Documentation** pour :
  - supprimer la mention de “CV gamifié avec niveaux et badges”,
  - la remplacer par une description plus neutre, par exemple :  
    *“Présentation des compétences et des projets avec un design moderne et responsive.”*
- Conserver toutes les fonctionnalités existantes :
  - thème clair/sombre avec mémorisation,
  - compteur de visites (localStorage),
  - carrousel de projets,
  - filtrage,
  - formulaire de contact avec validation en temps réel,
  - animations au scroll,
  - responsive design.
- Ne pas ajouter de framework ni de backend : rester en **HTML / CSS / JavaScript vanilla**.

---

## 4) Format de la réponse

Ta réponse doit contenir :
- le fichier complet `index.html`,
- le fichier complet `style.css`,
- le fichier complet `script.js`.

Réécris **l’intégralité des trois fichiers** afin que je puisse remplacer les anciens sans ambiguïté.

### En fin de réponse

- Fais un court résumé des changements effectués.
- Propose une prochaine étape possible (par exemple affiner le wording des compétences ou améliorer le design des cartes de projets).

