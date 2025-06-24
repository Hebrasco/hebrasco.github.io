import { RecipesPreviews } from 'assets/images/previews'
import { PROFILE } from 'data'
import { Platform } from 'data/platform'
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
  platforms: [Platform.iPhone, Platform.iPadOS],
  languages: [PROFILE.languages.swift, PROFILE.languages.json],
  frameworks: [
    PROFILE.frameworks.apple.ios,
    PROFILE.frameworks.apple.swiftUI,
    PROFILE.frameworks.apple.coreData,
  ],
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
  previewImageMain: {
    id: 'preview-recipes-iphone',
    sourceLight: RecipesPreviews.IphoneImage,
    sourceDark: RecipesPreviews.IphoneImage,
  },
  previewImages: [
    {
      id: 'preview-recipes-iphoneSE',
      sourceLight: RecipesPreviews.IphoneSEImage,
      sourceDark: RecipesPreviews.IphoneSEImage,
      style: {
        width: '25%',
        height: 'auto',
        left: '9%',
        bottom: 0,
        zIndex: 3,
      },
    },
    {
      id: 'preview-recipes-iphone',
      sourceLight: RecipesPreviews.IphoneImage,
      sourceDark: RecipesPreviews.IphoneImage,
      style: {
        width: '30%',
        height: 'auto',
        left: '5%',
        bottom: 0,
        zIndex: 2,
      },
    },
    {
      id: 'preview-recipes-ipad',
      sourceLight: RecipesPreviews.IpadImage,
      sourceDark: RecipesPreviews.IpadImage,
      style: {
        width: '54%',
        height: 'auto',
        right: 0,
        bottom: 0,
        zIndex: 1,
      },
    },
  ],
  isComingSoon: false,
} as const
