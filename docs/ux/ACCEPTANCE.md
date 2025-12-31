# UX Acceptance Checklist

Utiliser cette checklist avant release. PASS = tous les points validés sur desktop (≥1280px) et mobile (≤768px).

## Global
- Navigation: liens Accueil, Services, FAST Remote, Méthode, À propos, Contact, Mentions légales, Confidentialité pointent vers les bonnes pages/ancres (pas de 404).
- CTA “Demander un diagnostic” visible sur home, sticky CTA actif, lien vers contact.
- Performances: build Next OK, aucune erreur console navigateur, pas de 404 d’assets.
- Responsive: header/hero/grids adaptatifs, aucune rupture de layout ni texte tronqué.
- Sitemap/robots présents (`/sitemap.xml`, `/robots.txt` retournent 200).

## Home (/)
- Hero: promesse claire, CTA primaire/secondaire.
- Sections Problèmes, Solution FAST (Terrain→Preuve→Verdict), Services (4 cards), Pour qui (4 segments), Preuves (3 items), CTA final visibles et lisibles.
- Liens des cards services vers `/services/{slug}` et preuves vers `/preuves/{slug}`.

## Services hub (/services)
- Liste des 4 services avec titres, descriptions, résultat et lien vers chaque détail.

## Services détail (/services/{slug})
- Hero avec bénéfice + CTA “Demander un diagnostic”.
- Blocs: Ce que c’est, Inclus, Non inclus, Déroulé (6 étapes), Livrables, FAQ, CTA final.
- Breadcrumbs fonctionnels (Accueil → Services → Service).

## Méthode (/methode)
- Hero “Méthode FAST”, promesse, CTA.
- Schéma Terrain → Preuve → Verdict en cards + flèches.
- Règles non négociables (4 items), Timeline 6 étapes, Bénéfices, CTA final.

## Preuves (/preuves + /preuves/{slug})
- Hub: liste des preuves avec lien vers détails.
- Détail: structure Symptôme/Mesure/Action/Test, CTA retour + contact.

## Zones (/zones + /zones/{slug})
- Hub: liste des zones si affichée; détail: titre, description, bullets, CTA contact/retour.

## Contact (/ contact anchor)
- Formulaire: validation email/téléphone, message requis; CTA envoie vers `/api/contact` (pas d’erreur réseau).
- Coordonnées (email/téléphone/zone) affichées si configurées.

## Légal (/mentions-legales, /confidentialite)
- Pages accessibles, contenu lisible, liens nav/footer OK.
