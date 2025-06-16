import { RecipesPreviews } from 'assets/images/previews'
import { PROFILE } from 'data'
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
  languages: [PROFILE.languages.swift, PROFILE.languages.json],
  frameworks: [
    PROFILE.frameworks.apple.ios,
    PROFILE.frameworks.apple.swiftUI,
    PROFILE.frameworks.apple.coreData,
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
  previewColors: {
    backgroundGradient: {
      start: '#20B2AA',
      end: '#008B8B',
    },
    title: '#FFFFFF',
    subtitle: '#fafafc',
    actions: {
      foreground: '#000000',
      background: '#FFFFFF',
    },
  },
} as const
