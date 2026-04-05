# Gestion des Recettes de Savon - API REST

## Description

Ce projet est une API REST développée en Kotlin avec Spring Boot, conçue pour gérer des recettes de savon artisanal.  
Elle permet de créer, lire, mettre à jour et supprimer des recettes, de gérer les ingrédients associés, et de calculer automatiquement les propriétés des recettes (comme l'INS, l'iode, la douceur, etc.).

---

## Fonctionnalités

- **Gestion des recettes** :
  - Création de recettes avec des ingrédients et des caractéristiques spécifiques.
  - Consultation et mise à jour des recettes existantes.
  - Suppression sécurisée des recettes.

- **Calcul automatique** :
  - Calcul des propriétés pondérées et non pondérées (douceur, INS, iode, etc.).
  - Calcul de la quantité d'agent alcalin nécessaire, ajustée selon le surgraissage et la concentration.

- **Gestion des ingrédients** :
  - Association des ingrédients avec des pourcentages et propriétés spécifiques.
  - Calcul des contributions des ingrédients aux résultats de la recette.

---

**Technologies utilisées** :

- Kotlin : Langage principal pour le développement backend.
- Spring Boot : Framework pour la gestion des requêtes et des services REST.
- JPA/Hibernate : Gestion de la persistance des données.
- MySQL ou MariaDB : Base de données relationnelle (configurable selon vos besoins).

---

## Prérequis

- **Java 21** ou version ultérieure.
- **Kotlin 1.9.25+**.
- **Gradle** pour la gestion des dépendances.
- **Base de données relationnelle** (par exemple, MySQL ou MariaDB).
- Outil comme **Postman** ou **Bruno** pour tester l'API.

---

## Installation

1. **Cloner le projet** :

   ```bash
   git clone https://github.com/votre-repo/recette-savon.git
   cd recette-savon
   ```

---

2. **Configurer la base de données** :
   **Exemple**:
   spring.datasource.url=jdbc:mysql://localhost:3306/recette_savon
   spring.datasource.username=VotreUtilisateur
   spring.datasource.password=VotreMotDePasse
   spring.jpa.hibernate.ddl-auto=update

# SavApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.13.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
