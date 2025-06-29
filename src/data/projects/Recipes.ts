import { RecipesPreviews } from 'assets/images/previews'
import { ScreenshotsIpadLight, ScreenshotsIphoneLight } from 'assets/images/screenshots/recipes'
import { PROFILE } from 'data'
import { PLATFORM } from 'data/platform'
import { PROJECT_STATUS } from 'data/projectStatus'
import type { Project } from 'types'

export const RECIPES: Project = {
  description: `With his recipe app, you're able to create meal plans. There's a huge selection of recipes build in to choose from. Further, the ingredients can be exactly calculated based on the amount of people and can be added to a shopping list.`,
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
  name: 'Recipes app',
  onlineURL: undefined,
  platforms: [PLATFORM.iPhone, PLATFORM.iPadOS],
  previewImage: {
    dark: {
      altText: 'Preview screenshot of Recipes in light mode',
      src: ScreenshotsIphoneLight.RecipeDetails,
    },
    light: {
      altText: 'Preview screenshot of Recipes in light mode',
      src: ScreenshotsIphoneLight.RecipeDetails,
    },
  },
  screenshots: {
    ipad: {
      dark: [
        {
          altText: 'Screenshot of ipad app in light mode of the recipe detail screen',
          src: ScreenshotsIpadLight.RecipeDetails,
        },
      ],
      light: [
        {
          altText: 'Screenshot of ipad app in light mode of the recipe detail screen',
          src: ScreenshotsIpadLight.RecipeDetails,
        },
      ],
    },
    iphone: {
      dark: [
        {
          altText: 'Screenshot of iphone app in light mode of the recipe detail screen',
          src: ScreenshotsIphoneLight.RecipeDetails,
        },
      ],
      light: [
        {
          altText: 'Screenshot of iphone app in light mode of the recipe detail screen',
          src: ScreenshotsIphoneLight.RecipeDetails,
        },
      ],
    },
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
    dark: {
      altText: 'Title image in light mode',
      src: RecipesPreviews.titleLight,
    },
    light: {
      altText: 'Title image in light mode',
      src: RecipesPreviews.titleLight,
    },
  },
} as const
