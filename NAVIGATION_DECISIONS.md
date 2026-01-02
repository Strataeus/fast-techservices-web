# 🏗️ Architecture Navigation - Décisions de design

## Structure actuelle

### Menu principal
```
- Accueil (/)
- FAST Remote (/fast-remote)      ← Page dédiée
- Services (#services)             ← Hub avec 4 services
- Méthode (#methode)
- Preuves (#preuves)
- Zones (#zones)
- Contact (#contact)
```

## Pourquoi FAST Remote est dans le menu ?

### Contexte stratégique
FAST Remote est le **produit phare** de FAST Tech Services. C'est pourquoi:

1. **Visibilité:** Une page dédiée (`/fast-remote`) le rend immédiatement accessible
2. **Priorité:** Positionné en 2e position dans le menu (après Accueil)
3. **Expérience:** Une page spécialisée vs une simple carte dans le hub

### Structure double
```
Navigation principale          Contenu détaillé
─────────────────────────────────────────────
HOME (/)                      Pages de sections:
├─ [Sections inline]          - /services (hub)
├─ #services (ancre)          - /methode
├─ #methode                   - /preuves
├─ #preuves                   - /zones
├─ #contact                   
                              Pages spécialisées:
Menu: FAST Remote (/fast-remote) ← page complète
Menu: Services (#services) → sur HOME affiche les 4 services
```

### Pas d'incohérence
C'est une **stratégie intentionnelle**, pas un bug:
- "FAST Remote" (menu) = page dédiée
- "Services" (menu) = hub des 4 services (dont FAST Remote en tant que service)

L'utilisateur peut:
1. Cliquer "FAST Remote" (menu) → page spécialisée complète (`/fast-remote`)
2. Cliquer "Services" (menu) → hub listing tous les services (HOME)

## Routes et pages

### Pages de contenu
| Route | Type | Contenu |
|-------|------|---------|
| `/` | HOME | Présentation complète avec sections |
| `/services` | Hub | Listing des 4 services + descriptions courtes |
| `/services/[slug]` | Détail | Page complète d'un service |
| `/methode` | Page | Explication de la méthode FAST |
| `/preuves` | Hub | Cas d'étude anonymisés |
| `/preuves/[slug]` | Détail | Cas détaillé |
| `/zones` | Hub | Zones d'intervention |
| `/zones/[slug]` | Détail | Zone détaillée |
| `/fast-remote` | Spécialisé | FAST Remote (produit phare) |
| `/contact` | Formulaires | 3 formulaires centralisés |

### Pages légales
| Route | Type |
|-------|------|
| `/mentions-legales` | Statique |
| `/confidentialite` | Statique |

---

## Cohérence : Ancres vs Routes

### Règle simple
- **HOME page (`/`):** Utilise ancres pour scroll (`#services`, `#methode`, etc.)
- **Autres pages:** Utilisent routes (`/services`, `/contact`, etc.)
- **Menu & Footer:** Transforment ancres en routes pour cohérence globale

### Exemples
```tsx
// Sur HOME: scroll vers #services
// Sur /services: page statique du hub

// Menu toujours:
- "Services" → /services (pas #services)
- "Méthode" → /methode (pas #methode)
- "Contact" → /contact (pas #contact)

// Footer toujours:
- Idem: routes complètes, pas ancres
```

---

## Navigation IntersectionObserver (HOME page)

Sur HOME uniquement, le menu change d'état en scrollant:
```tsx
// SiteHeader.tsx
- Détecte les sections visibles (#services, #methode, etc.)
- Met à jour l'active state du menu
- Sur d'autres pages: utilise le pathname
```

**Résultat:** Menu dynamique sur HOME, cohérent ailleurs.

---

## Décisions validées

✅ **FAST Remote dans le menu** = OK
- Stratégique et volontaire
- Pas d'incohérence technique

✅ **Ancres sur HOME, routes partout** = OK  
- Cohérent et documenté
- Transformées dans footer/CTA

✅ **Deep linking `?objet=...`** = OK
- Validé et robuste
- Support des variantes

---

## À ne pas changer
- ❌ Ne pas renommer FAST Remote (marque)
- ❌ Ne pas l'enlever du menu (stratégique)
- ❌ Ne pas dupliquer les services (une seule source de vérité)

---

**Conclusion:** L'architecture actuelle est cohérente et intentionnelle. Les fixes appliquées (Footer, CTA, Validation) n'ont pas changé cette structure, juste nettoyé les implémentations bugguées.
