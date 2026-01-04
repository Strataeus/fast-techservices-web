# PR0_CHECKLIST.md — Snapshot & plan (SITE)
**But :** produire une preuve brute de l’état du repo + un plan d’exécution PR1..PR5 conforme au `FAST_SITE_SPEC.md`.  
**Règle :** PR0 = docs uniquement. Zéro code fonctionnel modifié.

---

## A) Pré-requis (PASS/FAIL)
- [ ] `docs/site-spec/FAST_SITE_SPEC.md` présent
- [ ] `docs/site-spec/content-map.yml` présent
- [ ] `docs/site-spec/assets-manifest.md` présent
- [ ] `docs/site-spec/FAST_TECH_SERVICES_COPY_v1.md` présent
- [ ] `docs/site-audit/` contient les audits
- [ ] `apps/web/_template/CarServ/` présent (dézip effectué)

**FAIL si** un item manque : stop PR0.

---

## B) Snapshot repo (preuves brutes obligatoires)
### B1 — Git état
- [ ] `git status` (output brut)
- [ ] `git branch -vv` (output brut)
- [ ] `git log -5 --oneline` (output brut)
- [ ] `git diff` (doit être vide idéalement au départ PR0)

### B2 — Arborescence
- [ ] `ls -la` (racine)
- [ ] `tree -L 4` (racine, output brut)
- [ ] `tree -L 3 apps/web` (output brut)
- [ ] `tree -L 3 apps/api` (output brut)

### B3 — Dépendances / managers
- [ ] identifier le manager frontend (pnpm/yarn/npm) via lockfile (preuve : nom du fichier)
- [ ] relever versions Node/PNPM (si disponibles) : `node -v`, `pnpm -v` / `yarn -v` / `npm -v`

---

## C) Commandes de référence (baseline CI locale)
> Objectif : définir la “commande canonique” pour build/lint/test frontend.

- [ ] commande format (si existante) + output brut
- [ ] commande lint + output brut
- [ ] commande test (unit) + output brut
- [ ] commande build + output brut
- [ ] commande start/dev (si utile) + output brut

**Exemples (à adapter selon repo) :**
- `pnpm -C apps/web lint`
- `pnpm -C apps/web test`
- `pnpm -C apps/web build`

**FAIL si** les commandes ne sont pas trouvées : documenter “UNKNOWN” + proposer commande canonique.

---

## D) Lecture des sources de vérité (preuve de lecture)
- [ ] Résumer en 10 bullets max : objectifs & interdits de `FAST_SITE_SPEC.md`
- [ ] Résumer en 10 bullets max : promesse & périmètre depuis `FAST_TECH_SERVICES_COPY_v1.md`
- [ ] Lister les pages P0 + P1 depuis `content-map.yml`
- [ ] Lister les assets manquants critiques (photos/cases/logo) depuis `assets-manifest.md`

---

## E) Audit findings à corriger (P0)
- [ ] Extraire 5 “bloquants” des audits (contact cassé, placeholders, SLA incohérent, preuves faibles, pages manquantes…)
- [ ] Traduire chaque bloquant en exigence testable (PASS/FAIL)

---

## F) Plan PR1..PR5 (obligatoire)
Pour chaque PR (PR1..PR5), fournir :
- [ ] objectif (1 phrase)
- [ ] scope (ce qui est inclus)
- [ ] out-of-scope (ce qui est interdit)
- [ ] fichiers/dossiers touchés (liste)
- [ ] critères DoD (PASS/FAIL)
- [ ] commande(s) de validation à exécuter

---

## G) Livrable PR0 (fichier unique)
Créer :
- [ ] `docs/site-spec/PR0_SNAPSHOT.md`

Ce fichier doit contenir :
- [ ] Tous les outputs bruts (sans résumé “inventé”)
- [ ] Le plan PR1..PR5
- [ ] La liste des risques / UNKNOWN (ex: assets manquants)

---

## H) Critère de clôture PR0
**PASS :**
- PR0 modifie uniquement des fichiers `docs/`
- PR0 inclut `PR0_SNAPSHOT.md` complet
- Plan PR1..PR5 exploitable

**FAIL :**
- code modifié
- outputs manquants
- plan flou / sans fichiers / sans DoD
