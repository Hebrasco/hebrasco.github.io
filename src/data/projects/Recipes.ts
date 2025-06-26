import { RecipesPreviews } from 'assets/images/previews'
import { PROFILE } from 'data'
import { PLATFORM } from 'data/platform'
import { PROJECT_STATUS } from 'data/projectStatus'
import { Project } from 'types'

export const RECIPES: Project = {
  id: 'recipes',
  name: 'Recipes app',
  description: `With his recipe app, you're able to create meal plans. There's a huge selection of recipes build in to choose from. Further, the ingredients can be exactly calculated based on the amount of people and can be added to a shopping list.`,
  tasks: [
    'Conception and development',
    'User interface development',
    'Parsing a JSON file',
    'Persisting data with Core Data',
  ],
  platforms: [PLATFORM.iPhone, PLATFORM.iPadOS],
  languages: [PROFILE.languages.swift, PROFILE.languages.json],
  frameworks: [
    PROFILE.frameworks.apple.swiftUI,
    PROFILE.frameworks.apple.coreData,
  ],
  status: {
    type: PROJECT_STATUS.archived,
    date: new Date('2020-04-30'),
  },
  features: [
    {
      icon: 'bi bi-fork-knife',
      title: 'Recipes',
      description:
        'Various recipes are available in the app with ingredients and step by step guides.',
    },
    {
      icon: 'bi bi-calculator',
      title: 'Calculate Ingredients',
      description:
        'All ingredients can be recalculated based on the portions needed.',
    },
    {
      icon: 'bi bi-calendar-week',
      title: 'Meal Plan',
      description:
        'A meal plan for a whole week can be created by selecting any amount of recipes for each day.',
    },
    {
      icon: 'bi bi-search',
      title: 'Search',
      description:
        'Search for recipes and/or filter for specific attributes like intolerances.',
    },
    {
      icon: 'bi bi-basket',
      title: 'Groceries List',
      description:
        'Based on the meal plan and calculated portions the groceries list is populated with all ingredients.',
    },
    {
      icon: 'bi bi-heart',
      title: 'Favorites',
      description:
        "Recipes can be favored and they'll appear in a separated list.",
    },
  ],
  onlineURL: undefined,
  sourceURL: 'https://github.com/Hebrasco/recipe_app',
  previewImage: {
    light: {
      src: RecipesPreviews.previewLight,
      altText: 'Preview screenshot of Recipes in light mode',
    },
    dark: {
      src: RecipesPreviews.previewLight,
      altText: 'Preview screenshot of Recipes in light mode',
    },
  },
  titleImage: {
    light: {
      src: RecipesPreviews.titleLight,
      altText: 'Title image in light mode',
    },
    dark: {
      src: RecipesPreviews.titleLight,
      altText: 'Title image in light mode',
    },
  },
} as const
