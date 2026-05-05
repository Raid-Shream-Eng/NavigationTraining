# Navigation-Training

Navigation-Training is a React Native training project built with Expo. The app focuses on practicing stack navigation by moving through a simple meal browsing flow: categories, filtered meals, and meal details.

This README is written for an instructor reviewing the project. It explains what the app currently does, how to run it, and how the main files are organized.

## Features

- Browse meal categories in a two-column grid.
- Select a category to view meals that belong to it.
- Open a meal details screen from a meal list item.
- View meal images, ingredients, and preparation steps.
- Display meal metadata such as duration, complexity, and affordability.
- Use typed React Navigation stack params for the main app screens.
- Load a custom Aptos font through Expo.

## Tech Stack

- Expo 54
- React 19
- React Native 0.81
- TypeScript
- React Navigation native stack
- Expo Font
- Local dummy data for categories and meals

## Getting Started

Install the project dependencies first:

```bash
npm install
```

Start the Expo development server:

```bash
npm start
```

After the server starts, Expo will show options for opening the app on a connected device, an Android emulator, Expo Go, or the web.

To run directly on Android:

```bash
npm run android
```

To run the web version:

```bash
npm run web
```

## Available Scripts

- `npm start`: Starts the Expo development server.
- `npm run android`: Builds and runs the app on Android.
- `npm run ios`: Builds and runs the app on iOS.
- `npm run web`: Starts the app for web.
- `npm run lint`: Runs Expo linting.

## Project Structure

```text
.
|-- App.tsx
|-- index.js
|-- app
|   |-- Data
|   |   `-- dummy-data.js
|   |-- Screens
|   |   |-- CategoriesScreen.tsx
|   |   |-- MealsViewScreen.tsx
|   |   `-- MealDetailsScreen.tsx
|   |-- models
|   |   |-- category.js
|   |   `-- meal.js
|   `-- navigation
|       `-- types.ts
|-- Components
|   `-- CategoriesScreen
|       |-- CategoryGridTile.tsx
|       `-- MealItem.tsx
`-- assets
    |-- fonts
    `-- images
```

Important files:

- `App.tsx`: Sets up the navigation container, native stack navigator, screen options, and custom font loading.
- `app/Screens/CategoriesScreen.tsx`: Shows all meal categories.
- `app/Screens/MealsViewScreen.tsx`: Filters meals by selected category and updates the screen title.
- `app/Screens/MealDetailsScreen.tsx`: Shows details for a selected meal.
- `Components/CategoriesScreen/CategoryGridTile.tsx`: Renders a pressable category tile.
- `Components/CategoriesScreen/MealItem.tsx`: Renders a pressable meal card.
- `app/navigation/types.ts`: Defines the typed stack navigation params.
- `app/Data/dummy-data.js`: Stores the sample categories and meals used by the app.

## App Flow

The app uses a native stack navigator with three main screens:

```text
MealsCategories -> MealsView -> MealDetails
```

1. `MealsCategories` displays all available meal categories.
2. Selecting a category navigates to `MealsView` with a `categoryId`.
3. `MealsView` filters the local meal data by that category and displays matching meals.
4. Selecting a meal navigates to `MealDetails` with a `mealId`.
5. `MealDetails` finds the selected meal and displays its image, ingredients, and steps.

## Data Model

The project uses local dummy data instead of an API or database.

Categories include:

- `id`
- `title`
- `color`

Meals include:

- category IDs
- title
- affordability
- complexity
- image URL
- duration
- ingredients
- preparation steps
- dietary flags such as gluten-free, vegan, vegetarian, and lactose-free

## Known Limitations / Future Work

- Meal data is currently stored locally in `dummy-data.js`.
- The favorite button in the meal details header is present but does not save favorites yet.
- There is no persistent storage.
- Dietary flags exist in the data model but are not exposed as filters in the UI.
- Some header actions are still experimental placeholders.
