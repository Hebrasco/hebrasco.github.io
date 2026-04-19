import { RecipesPreviews } from 'assets/images/previews'
import { ScreenshotsIpadLight, ScreenshotsIphoneLight } from 'assets/images/screenshots/recipes'
import { PROFILE, PROJECT_STATUS } from 'data'
import { PLATFORM } from 'data/platform'
import type { Project } from 'types'

const RECIPES: Project = {
  description: `This app lets you create meal plans. There's a huge selection of built-in recipes to choose from. The ingredients can be precisely calculated based on the number of people and added directly to a shopping list.`,
  features: [
    {
      description:
        'Various recipes are available in the app with ingredients and step by step guides.',
      icon: 'bi bi-fork-knife',
      title: 'Recipes',
    },
    {
      description: 'All ingredients can be recalculated based on the portions needed.',
      icon: 'bi bi-calculator',
      title: 'Calculate Ingredients',
    },
    {
      description:
        'A meal plan for a whole week can be created by selecting any amount of recipes for each day.',
      icon: 'bi bi-calendar-week',
      title: 'Meal Plan',
    },
    {
      description: 'Search for recipes and/or filter for specific attributes like intolerances.',
      icon: 'bi bi-search',
      title: 'Search',
    },
    {
      description:
        'Based on the meal plan and calculated portions the groceries list is populated with all ingredients.',
      icon: 'bi bi-basket',
      title: 'Groceries List',
    },
    {
      description: "Recipes can be favored and they'll appear in a separated list.",
      icon: 'bi bi-heart',
      title: 'Favorites',
    },
  ],
  frameworks: [PROFILE.frameworks.apple.swiftUI, PROFILE.frameworks.apple.coreData],
  id: 'recipes',
  languages: [PROFILE.languages.swift, PROFILE.languages.json],
  name: 'Recipes',
  onlineURL: undefined,
  platforms: [PLATFORM.iphone, PLATFORM.ipad],
  previewImage: {
      altText: 'Preview screenshot of Recipes',
      light: ScreenshotsIphoneLight.RecipeDetails,
      dark: ScreenshotsIphoneLight.RecipeDetails,
  },
  screenshots: {
    ipad:  [
        {
          altText: 'Screenshot of ipad app of the recipe detail screen',
          light: ScreenshotsIpadLight.RecipeDetails,
          dark: ScreenshotsIpadLight.RecipeDetails,
        },
      ],
    iphone: [
        {
          altText: 'Screenshot of iphone app of the recipe detail screen',
          light: ScreenshotsIphoneLight.RecipeDetails,
          dark: ScreenshotsIphoneLight.RecipeDetails,
        },
      ],
  },
  sourceURL: 'https://github.com/Hebrasco/recipe_app',
  status: {
    date: new Date('2020-04-30'),
    type: PROJECT_STATUS.archived,
  },
  tasks: [
    'Conception and development',
    'User interface development',
    'Parsing a JSON file',
    'Persisting data with Core Data',
  ],
  titleImage: {
      altText: 'Title image',
      light: RecipesPreviews.titleLight,
      dark: RecipesPreviews.titleLight,
  },
} as const

export { RECIPES }
