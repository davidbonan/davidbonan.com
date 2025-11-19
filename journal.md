# Journal IA – Expérimentation Workflow de Migration Fiche Intérimaire

## Context

Migration d'une feature depuis un repository legacy vers un monorepo typescript

## 18/09

- Tentative de “full IA” via un seul ticket et un seul prompt sans cadrage.
- Échec : hallucinations importantes, temps excessif.

## 19/09

- Dévision du main prompt en plusieurs prompts : analyse, plan, review, cahier de test.
- Résultat nettement meilleur, hallucinations toujours présente.

## 22/09

- Amélioration des prompts.
- Réduction du temps d’analyse (parallèlissation via agent).
- Nécessité d’un cadrage strict pour l’IA.
- Une analyse humaine préalable améliore fortement la qualité ; elle doit être injectée dans le prompt.
- Relecture et suppression manuelle du bruit dans les tickets découpés.
- Validation humaine des specs pour éliminer les hallucinations.
- Approche recommandée : un plan humain + exécution IA en mode “ping-pong Claude”.

À tester :

- Ne pas auto-accept les edits.

## 29/09

Temps :

- 25 min de planification.
- 2h30 min de pair programming (auto-accept désactivé).
  Problèmes : perte de temps sur refactor et architecture à cause d’un contexte agent mal géré et de cadrage de l'IA trop peu précis.

## 03/10

- Specs initiales trop approximatives mais utiles.
- L’analyse ciblée au démarrage d’une tâche du PRD (déjà découpé en tâches) fournit un document plus juste.
- Bonne pratique : analyse croisée Claude + Codex + Cursor puis merge.

## 13/10

- Développement autonome → nombreuses erreurs (branded type incorrectes, type de variables incorrectes, over-engineering, etc.).
- Gains de temps discutables au regard des corrections nécessaires.
- Déception.

## 17/10

- Cursor s’est nettement amélioré dans sa dernière release.
- Les PR deviennent très difficiles à reviewer : trop de changements en trop peu de temps.
- PR trop fréquentes = blocage ; PR trop grosses = illisibles.

A tester :

- PR plus souvent et imbriquées les branches pour ne pas attendre la validation. Uniquement possible avec une separation of concerns entre les features.

## 22/10

Phase d'implémentation de code par l'IA recommandée :

- Définir précisément le scope.
- Compréhension complète du scope.
- Lancer l’agent IA en mode PLAN.
- Vérifier le plan et les règles identifiées.
- Lancer la génération du code en désactivation l'auto-accept des edits.

## 23/10

- Découverte : Claude peut déclencher des slash commands.
- Mise en place d’un orchestrateur déclenchant plusieurs agents :

  - Claude Explorer.
  - Codex Explorer.
  - Un orchestrateur avec 3 commandes (scout-explorer, specification-plan, build-prd).

- Temps plus long mais PRD nettement meilleure.

## 24/10

- Résultats inconsistants.
- Difficultés sur les prompts complexes (codex via terminal tool).
- L'orchestrateur n'est pas stable.

## 30/10

- Développement d’un CLI d’analyse plus stable et personnalisable que le chaînage de slash commands et l'orchestration uniquement au bon vouloir de Claude Code.
- Le CLI va appeler les modèles via différents CLI (codex, cursor-agent, claude) en désactivant le mode interactif
- Workflow du CLI :

  - [ask] Quels repositories sont concernés ?
  - [ask] Quels sont les models à utiliser pour l'analyse ? (choix multiple)
  - [ask] Quel est la description de la tâche ?
  - [ask] Quel sont les points d'entrée de la tâche ?
  - [ask] Quel est le scope de la tâche ?
  - [step] Clonage des repositories concernés.
  - [step] Analyse du code existant en parallèle par les différents models choisis
  - [step] Fusion des analyses via le modèle défini dans un fichier de configuration.
  - [step] Génération du PRD
  - [step] Découpage en tâche atomique via le modèle défini dans un fichier de configuration.
  - [step] Extraction et review des tâches en parallèle
  - [step] Génération du cahier de test via le modèle défini dans un fichier de configuration.

## 03/11

- Ajout d'un fichier status.json dans le cli pour debug ou relancer une phase sans devoir tout recommencer.
- Perte de qualité de l'IA une fois atteint 60% de contexte utilisé
- Suppression de MCP trop gourmand en contexte (ex: Atlassian avec 18% de contexte utilisé au démarrage de Claude Code)

## 04/11

- Amélioration des règles et skills IA du projet (code style, review code, tools, etc.)
- Développement de prompts d'instruction à inclure (01_plan.md, 02_code.md, 03_review.md) au démarrage de chaque tâche.
- Ajout d'un suivi de tâches en cours `.work-in-progress.md` dans la nouvelle codebase pour ne pas perdre le contexte de la tâche en cours.
- Clear le contexte de l'IA le plus souvent possible pour éviter les hallucinations.

## 06/11

Workflow complet mis à jour :

- Utilisation du CLI pour l'analyse et la génération du PRD et des tâches.
- Review humaine du PRD et des tâches.
- Copie du PRD et des tâches dans la nouvelle codebase
- Démarrage d'une tâche :
  - Analyse humaine et vérification du contenu de la tâche dans le legacy
  - Lancer la génération d'un plan via le prompt 01_plan.md en rappelant le PRD et la tâche.
  - Review du plan
  - Démarrer l'implémentation du code via le prompt 02_code.md en rappelant le plan, le PRD et la tâche (auto-accept des edits désactivé).
  - Si c'est un démarrage de feature, coder les bases de l'architecture à la main. sinon perte de temps
  - La partie implémentation avec Claude Code est la partie la plus fastidieuse, chaque fichier généré doit être review et approuvé par le développeur, sinon il y a un risque de déviation de l'architecture.
  - Review du code via le prompt 03_review.md
  - Retrospective des prompts pour améliorer la qualité des prompts et de l'IA suite aux erreurs de l'IA - par exemple, mauvaise utilisation de l'ORM etc.
