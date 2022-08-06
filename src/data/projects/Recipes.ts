import { RecipesPreviews } from 'assets/images/previews'
import { PROFILE } from 'data'
import { Project } from 'types'

const Recipes: Project = {
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
  previewImages: [
    {
      id: 'preview-recipes-iphoneSE',
      sourceLight: RecipesPreviews.IphoneSEImage,
      sourceDark: RecipesPreviews.IphoneSEImage,
    },
    {
      id: 'preview-recipes-iphone',
      sourceLight: RecipesPreviews.IphoneImage,
      sourceDark: RecipesPreviews.IphoneImage,
    },
    {
      id: 'preview-recipes-ipad',
      sourceLight: RecipesPreviews.IpadImage,
      sourceDark: RecipesPreviews.IpadImage,
    },
  ],
  isComingSoon: false,
} as const

export default Recipes
