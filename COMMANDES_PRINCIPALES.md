# 📚 COMMANDES PRINCIPALES — FAST Tech Services

**Date**: 4 janvier 2026  
**Projet**: FAST Tech Services Next.js App Router  
**Repository**: `c:\dev\fast-techservices-web`

---

## 🚀 **Démarrage & Serveur**

### Lancer le serveur développement
```bash
npm run dev
```
- **Port défaut**: `http://localhost:3000`
- **Hot reload**: Automatique
- **Build**: Turbopack (rapide)

### Lancer avec port custom
```bash
npm run dev -- -p 3001
```

### Serveur depuis n'importe où
```bash
npm --prefix c:\dev\fast-techservices-web run dev
```

### Build production
```bash
npm run build
```
- **Compile**: TypeScript + Turbopack
- **Prérender**: Toutes pages statiques
- **Output**: `.next/` folder

### Lancer build production
```bash
npm run start
```

---

## 🔍 **Linting & Validation**

### Lint tous les fichiers
```bash
npm run lint
```

### Lint fichiers spécifiques
```bash
npm run lint -- app/page.tsx components/sections/HeroSection.tsx
```

### Lint avec pattern
```bash
npm run lint -- 'components/sections/FAST*'
```

### Auto-fix lint errors
```bash
npm run lint -- --fix
```

### Lint + Report JSON
```bash
npm run lint -- --format json > lint-report.json
```

---

## 🧪 **Tests**

### Lancer tous les tests
```bash
npm test
```

### Tests avec coverage
```bash
npm test -- --coverage
```

### Tests mode watch (dev)
```bash
npm test -- --watch
```

### Tests fichier spécifique
```bash
npm test -- app/page.test.tsx
```

---

## 📦 **Build & Optimisation**

### Analyser bundle size
```bash
npm run build -- --analyze
```

### Export static site (optionnel)
```bash
npm run export
```
*(si `output: 'export'` dans next.config.ts)*

### Clean cache build
```bash
rm -r .next
npm run build
```

---

## 📝 **Git & Versioning**

### Status git
```bash
git status
```

### Ajouter fichiers
```bash
git add .
```

### Commit avec message
```bash
git commit -m "PR2: Hero premium CarServ + image intégrée"
```

### Push vers main
```bash
git push origin main
```

### Voir historique commits
```bash
git log --oneline
```

### Voir diff derniers changements
```bash
git diff
```

---

## 🔐 **Environnement**

### Fichier `.env.local` (créer si absent)
```bash
touch .env.local
```

### Variables d'env (template)
```env
# API
NEXT_PUBLIC_API_URL=http://localhost:3000/api
NEXT_PUBLIC_SITE_URL=https://fast-techservices.com

# Form webhook (optionnel)
FORM_WEBHOOK_URL=https://hook.n8n.local/...

# Analytics (optionnel)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

---

## 📂 **Fichiers & Structure**

### Voir arborescence
```bash
ls -la
# ou pour PowerShell:
Get-ChildItem
```

### Chercher fichier par pattern
```bash
Get-ChildItem -r -i "*Hero*"
# ou:
find . -name "*Hero*" -type f
```

### Voir contenu fichier
```bash
cat app/page.tsx
# ou:
type app\page.tsx
```

---

## 🎨 **Configuration & Tokens**

### Design tokens
- **Fichier**: `lib/design/tokens.ts`
- **Couleurs**: `colors.slate`, `colors.cyan`, semantic colors
- **Spacing**: `spacing[0]` à `spacing[24]`
- **Typographie**: `typography.fontSize`, `fontWeight`

### Configuration site
- **Fichier**: `content/config.ts`
- **SLA** (source unique)
- **CTAs** (primary, secondary)
- **Navigation**
- **SEO metadata**

### Next.js Config
- **Fichier**: `next.config.ts`
- **Turbopack**: Activé par défaut
- **Images**: Optimization activée

---

## 🔄 **Workflows Courants**

### Workflow 1: Feature développement
```bash
# 1. Créer branche
git checkout -b feature/mon-feature

# 2. Démarrer dev
npm run dev

# 3. Faire changements... (puis commit)
git add .
git commit -m "feat: description"

# 4. Lint avant push
npm run lint

# 5. Build test
npm run build

# 6. Push
git push origin feature/mon-feature
```

### Workflow 2: Lint + Test + Build (before push)
```bash
npm run lint && npm test && npm run build
```

### Workflow 3: Fix lint errors
```bash
npm run lint -- --fix
git add .
git commit -m "style: auto-fix lint"
```

---

## 📊 **Debugging & Diagnostics**

### Vérifier Node version
```bash
node --version
npm --version
```

### Voir packages installés
```bash
npm list
# ou pour global:
npm list -g
```

### Update packages
```bash
npm update
```

### Install dépendance manquante
```bash
npm install [package-name]
```

### Rebuild node_modules
```bash
rm -r node_modules package-lock.json
npm install
```

---

## 🌐 **Production Deploy (optionnel)**

### Build pour production
```bash
npm run build
```

### Test build production
```bash
npm run start
# Accès: http://localhost:3000
```

### Deploy sur Vercel (si connected)
```bash
vercel
# ou auto via push sur main si CI/CD configuré
```

---

## 📋 **Checklist avant Push**

- [ ] `npm run lint` → ZERO ERRORS
- [ ] `npm run test` → PASSED (si tests présents)
- [ ] `npm run build` → SUCCESS
- [ ] `git status` → Fichiers corrects
- [ ] `git diff` → Changements cohérents
- [ ] Message commit → Clair & précis

---

## 💡 **Tips & Raccourcis**

### PowerShell (Windows) - Alias utiles
```powershell
# Ajouter à $PROFILE:
function dev { npm run dev }
function lint { npm run lint }
function build { npm run build }
function test { npm test }
function lintfix { npm run lint -- --fix }
```

### Bash/zsh (Mac/Linux) - Alias
```bash
# Ajouter à ~/.bashrc ou ~/.zshrc:
alias dev='npm run dev'
alias lint='npm run lint'
alias build='npm run build'
alias test='npm test'
alias lintfix='npm run lint -- --fix'
```

### Multi-commandes PowerShell
```powershell
npm run lint; npm run build; npm run start
```

---

## 🚨 **Commandes d'urgence**

### Reset à la dernière version clean
```bash
git reset --hard HEAD
```

### Supprimer tous les changements uncommitted
```bash
git clean -fd
```

### Undo dernier commit (sans perte)
```bash
git reset --soft HEAD~1
```

### Voir tous les branches
```bash
git branch -a
```

### Supprimer branche locale
```bash
git branch -d nom-branche
```

---

## 📖 **Ressources Docs**

- **Next.js**: https://nextjs.org/docs
- **Turbopack**: https://turbopack.org
- **Zod (validation)**: https://zod.dev
- **Node.js**: https://nodejs.org/docs

---

## 👤 **Contacts Dev**

- **Repository**: `c:\dev\fast-techservices-web`
- **Main branch**: `main`
- **Node version**: `18.x` ou `20.x`
- **npm version**: `10.x` ou `9.x`

---

**Last updated**: 4 janvier 2026  
**Build status**: ✅ SUCCESS  
**Lint status**: ✅ ZERO ERRORS
