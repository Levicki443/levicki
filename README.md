# Frontend — Plateforme de Gestion d'une Gare Routière

Application Web moderne, immersive et responsive dédiée à la réservation de tickets de transport interurbain en Côte d'Ivoire.

---

## 🎨 Charte Graphique & Design System

L'application respecte scrupuleusement le cahier des charges et les exigences de conception :
* **Fond global :** Rouge sombre élégant et non éblouissant (`--color-bg-global: #1b070a`).
* **Cartes et conteneurs :** Bleu profond immersif (`--color-card-bg: #0f1c3f`).
* **Boutons sur le fond global :** Bleu vif interactif (`.btn-primary-blue`).
* **Boutons placés dans une carte :** Blanc pur (`.btn-card-white`).
* **Bouton Retour 3D :** Composant réutilisable avec effet de profondeur, animations et ombrages dynamiques (`.btn-back-3d`).
* **Typographie :** Polices *Outfit* et *Inter*, encodage UTF-8 natif et orthographe française soignée.

---

## 🧭 Parcours Utilisateur Implémenté

1. **Landing Page (`#/`) :** En-tête avec modales immersives « À propos » et « Nous contacter », présentation de la genèse de la plateforme et bouton d'action central « Rejoindre la Communauté ».
2. **Page Inscription (`#/register`) :** Formulaire complet avec validation temps réel et bouton 3D retour.
3. **Page Connexion (`#/login`) :** Authentification sécurisée et gestion de session locale.
4. **Espace de Réservation (`#/app`) :** Sélecteur de villes de départ et destination (Abidjan $\rightarrow$ Bondoukou), choix du convoi (1er, 2e, 3e départ), affichage automatique de la gare et indications d'embarquement.
5. **Confirmation du Ticket (`#/confirmation`) :** Billet électronique avec référence unique, QR Code simulé et option d'impression.

---

## 💻 Visualisation & Démarrage Local

Puisque le projet utilise des modules ES JavaScript (`type="module"`), lancez l'application avec un serveur local HTTP :

### Option A — Avec Live Server (VS Code / IDE) :
* Clic droit sur `index.html` $\rightarrow$ **« Open with Live Server »**.

### Option B — Avec Python :
```bash
python -m http.server 3000
```
Puis accédez à `http://localhost:3000`.

### Option C — Avec Node.js :
```bash
npx serve .
```
