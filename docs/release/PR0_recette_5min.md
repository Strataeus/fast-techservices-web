# 🧪 Recette QA - 5 Minutes (PR0)

**Objectif** : Vérifier que le site fonctionne correctement sur desktop et mobile.  
**Durée** : ~5 min  
**Prérequis** : Site lancé en `npm run dev` ou déployé

---

## 📱 Test Desktop (Chrome/Firefox/Safari)

### 1️⃣ Accueil (2 min)
- [ ] Page charge sans erreur console (F12)
- [ ] Hero visible avec vidéo ou background
- [ ] Titre principal lisible
- [ ] **CTA "Demander une démo"** visible et clickable (sticky ou en bas)
- [ ] Navigation header : menu visible, pas de débordement
- [ ] Scroll smooth fonctionne

### 2️⃣ Navigation (1.5 min)
- [ ] **Header** : logo clickable → retour home
- [ ] **Menu nav** : Services → `/services`
- [ ] **Menu nav** : Zones → `/zones`
- [ ] **Menu nav** : Preuves → `/preuves`
- [ ] **Menu nav** : Méthode → `/methode`
- [ ] **Footer** : liens visibles
  - [ ] Mentions légales → `/mentions-legales`
  - [ ] Confidentialité → `/confidentialite`
  - [ ] Contact → `/contact`

### 3️⃣ Pages Dynamiques (1 min)
- [ ] `/services` : liste des services affichée
- [ ] Cliquer une carte service → `/services/[slug]` : détail charge
- [ ] `/zones` : liste des zones affichée
- [ ] Cliquer une zone → `/zones/[slug]` : détail charge
- [ ] `/preuves` : liste case studies affichée
- [ ] Cliquer une preuve → `/preuves/[slug]` : détail charge

### 4️⃣ CTA & Interaction (0.5 min)
- [ ] CTA "Demander une démo" → `/contact`
- [ ] Page contact chargée (formulaire en développement OK)
- [ ] `/methode` : contenu visible
- [ ] `/fast-remote` : contenu visible

---

## 📲 Test Mobile (iPhone/Android ou DevTools)

### Responsive Check (2 min)
- [ ] **Viewport width 375px** (iPhone 12) : pas de scroll horizontal
- [ ] **Header responsif** :
  - [ ] Logo visible
  - [ ] Menu burger OU collapse visible
  - [ ] Pas d'overflow
- [ ] **Hero** : image/vidéo adapté, texte lisible
- [ ] **Cartes services/zones** : stack en colonne (pas side-by-side)
- [ ] **Buttons/CTA** : tappable (min 44x44 px)
- [ ] **Footer** : liens clickable, pas de scroll horizontal

### Interaction Mobile (1 min)
- [ ] Scroll vertical fluide
- [ ] Tap CTA → navigation OK
- [ ] Formulaire accessible (si présent)
- [ ] Images chargées (pas de broken images)
- [ ] Pas d'erreur console (F12 → Console)

---

## ⚡ Performance Rapide

- [ ] Page home charge en < 3s (3G lent)
- [ ] Aucune erreur réseau (F12 → Network)
- [ ] **Lighthouse** (DevTools) :
  - [ ] Performance > 60
  - [ ] Accessibility > 80
  - [ ] Best Practices > 80

---

## 🔍 Checklist Finale

- [ ] Aucune console error rouges
- [ ] Aucune console warning TypeScript (en dev)
- [ ] Formulaires en place (ou placeholder OK)
- [ ] Lien API `/api/contact` présent (test POST si applicable)
- [ ] Sitemap `/sitemap.xml` accessible
- [ ] Robots `/robots.txt` accessible

---

## ✅ Verdict
- **PASS** : Tous les checkboxes cochées → Recette OK ✓
- **FAIL** : Erreur console / Lien cassé / Layout broken → À corriger

---

## Notes
- Cette recette teste **zéro changement produit** (PR0)
- Aucune nouvelle fonctionnalité attendue
- Objectif : vérifier l'état initial du projet
