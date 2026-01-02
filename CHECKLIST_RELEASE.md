# 📋 CHECKLIST_RELEASE

Guide de validation et déploiement pour chaque étape du cycle de release.

---

## 🔀 AVANT MERGE (PR Review)

### Code Quality
- [ ] `npm run lint` passe sans erreur
- [ ] `npm run typecheck` passe (pas de TS error)
- [ ] Pas de console.error laissés en dur
- [ ] Pas de TODO/FIXME non documentés

### Changements
- [ ] Décrivez le périmètre du changement dans la PR
- [ ] Liez les issues correspondantes (si applicable)
- [ ] Décrivez les impacts potentiels (perf, UX, SEO)
- [ ] Pas de breaking changes introduits

### Review
- [ ] Au minimum 1 review approuvée
- [ ] Tous les commentaires adressés
- [ ] Tests manuels documentés
- [ ] Screenshots (si changement UI)

### Tests
- [ ] Recette locale effectuée (voir [docs/release/PR0_recette_5min.md](docs/release/PR0_recette_5min.md))
- [ ] Pages dynamiques testées (`[slug]` routes)
- [ ] Responsive design testé (mobile + desktop)
- [ ] Liens cassés vérifiés

---

## ✅ APRÈS MERGE (Pre-Production)

### Build Validation
- [ ] `npm ci` complète sans erreur
- [ ] `npm run build` passe
- [ ] `npm run start` démarre sans erreur
- [ ] Aucun warning supplémentaire après merge

### Functional Tests
- [ ] Tous les tests de la recette rapide passent
- [ ] API `/api/contact` répond correctement
- [ ] Routes dynamiques générées correctement
- [ ] Pas de page 404 non intentionnelle
- [ ] SEO : sitemap.xml et robots.txt générés

### Monitoring Setup
- [ ] Erreurs console loggées (Sentry/PostHog si applicable)
- [ ] Performance métriques tracées (Lighthouse CI si applicable)
- [ ] Alertes déploiement configurées

### Branch Cleanup
- [ ] Feature branch supprimée
- [ ] Commit historique propre
- [ ] Version package.json à jour (si applicable)

---

## 🚀 AVANT PROD (Pre-Deployment)

### Final Validation
- [ ] Dernier build local réussi
- [ ] Vérification du commit SHA en production
- [ ] Tests recette effectués sur la staging/preview
- [ ] Formulaires testés (endpoint correct)
- [ ] Tous les assets chargent (images, vidéos, fonts)

### Performance
- [ ] Lighthouse score > 80 (Performance + Accessibility)
- [ ] Core Web Vitals acceptables
- [ ] Build size OK (no unexpected bloat)
- [ ] Images optimisées (Next.js Image component used)

### Compliance & Security
- [ ] Pas de secrets en plaintext (API keys, tokens)
- [ ] HTTPS activé
- [ ] Cookies/Analytics conformes RGPD
- [ ] Politique confidentialité & mentions légales à jour

### Communication
- [ ] Changelog/Release notes rédigés
- [ ] Team notifiée du déploiement
- [ ] Customer communication (si applicable)
- [ ] Rollback plan documenté

### Deployment
- [ ] Validez les env variables sur la prod
- [ ] Déclenchez le déploiement
- [ ] Vérifiez que la prod est en ligne
- [ ] Tests de smoke sur la prod
  - [ ] Home page charge
  - [ ] Navigation fonctionne
  - [ ] CTA clickable
  - [ ] API répond

### Post-Deployment
- [ ] Monitoring activé
- [ ] Alertes en place
- [ ] Team en standby pour rollback rapide
- [ ] Logs scrutinisés pour erreurs

---

## 🚨 INCIDENT / Rollback

Si quelque chose se casse :

- [ ] Identifiez la cause root rapidement
- [ ] Déclenchez un rollback vers la version précédente stable
- [ ] Notifiez l'équipe + stakeholders
- [ ] Corrigez en branche feature
- [ ] Repassez tous les checks ci-dessus
- [ ] Redéployez avec extra caution

---

## 📊 Template de Release Notes

```markdown
## Release X.Y.Z - [DATE]

### 📋 Summary
[Résumé des changements]

### 🎯 Features
- [ ] Feature 1
- [ ] Feature 2

### 🐛 Bug Fixes
- [ ] Fix 1
- [ ] Fix 2

### 📈 Performance
- [ ] Optimization 1

### 🔒 Security
- [ ] Security fix 1 (si applicable)

### ⚠️ Breaking Changes
- None / [List if any]

### 📦 Migration Guide
[Si breaking changes]

### 👥 Contributors
- @username1
- @username2
```

---

## 🔗 Ressources

- **Snapshot** : [docs/release/PR0_snapshot.md](docs/release/PR0_snapshot.md)
- **Recette QA 5 min** : [docs/release/PR0_recette_5min.md](docs/release/PR0_recette_5min.md)
- **Commandes canoniques** :
  - Dev : `npm run dev`
  - Build : `npm run build`
  - Lint : `npm run lint`
  - TypeCheck : `npm run typecheck`

---

## 📝 Notes

- Cette checklist s'applique à tous les PRs
- Adaptez selon votre contexte (pas de tests = ignorez section test)
- Mettez à jour cette checklist au fur et à mesure
- PR0 = snapshot initial, zéro changement produit
