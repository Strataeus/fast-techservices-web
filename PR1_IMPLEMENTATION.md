# PR1 - FAST Remote as Canonical CTA

**Objectif** : Rendre FAST Remote le CTA primaire et remote-first partout, sans refonte

**Status** : En cours

---

## 🎯 Changements à Faire

### 1. lib/site.ts
- [x] Lire et comprendre la structure
- [ ] Ajouter constantes CTA canoniques:
  - primaryCtaLabel = "Démarrer FAST Remote"
  - primaryCtaHref = "/fast-remote"
  - secondaryCtaLabel = "Demander une intervention sur site"
  - secondaryCtaHref = "/contact"

### 2. components/StickyCTA.tsx
- [x] Lire et comprendre
- [ ] Changer bouton principal: "Démarrer FAST Remote" → /fast-remote
- [ ] Changer bouton secondaire: "Appel 10 min" → /contact#appel
- [ ] Mobile: full width, tap targets >= 44px

### 3. components/SiteHeader.tsx
- [x] Lire et comprendre
- [ ] Ajouter bouton CTA primaire "Démarrer FAST Remote" visible desktop
- [ ] Mobile burger menu accessible
- [ ] Garder nav links existantes

### 4. components/SiteFooter.tsx
- [x] Lire et comprendre
- [ ] Ajouter lien "FAST Remote" dans les links
- [ ] Ajouter CTA rappel si place

### 5. components/Hero.tsx
- [x] Vérifier (pas de CTA direct)

### 6. app/page.tsx
- [ ] Vérifier les CTA dans les sections
- [ ] Remplacer par CTA canoniques

### 7. Autres pages avec CTA
- [ ] Inspecter /services, /zones, /preuves, etc.
- [ ] Uniformiser les CTA

### 8. Validation
- [ ] npm run lint
- [ ] npm run typecheck
- [ ] npm run build
- [ ] QA : Home + /fast-remote + /contact

---

## 📝 Notes

- Pas de refonte, juste remplacer les textes CTA
- Les couleurs/styles ne changent pas
- Les routes existantes ne changent pas
- Zéro nouvelles dépendances
- Architecture Next.js inchangée

---

## 🚀 Prochaines Étapes

1. Modifier lib/site.ts
2. Modifier StickyCTA.tsx
3. Modifier SiteHeader.tsx
4. Modifier SiteFooter.tsx
5. Chercher autres CTA et les uniformiser
6. Valider avec npm commands
7. Faire le commit

---

*Créé : 2 janvier 2026*
*Phase : Implémentation PR1*
