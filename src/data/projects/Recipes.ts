import { LANGUAGES } from 'data/profile/languages'
import { FRAMEWORKS } from 'data/profile/frameworks'
import { RecipesPreviews } from 'assets/images/previews'
import Project from 'types/Project'

const Recipes: Project = {
  name: 'Recipes app',
  description: `With his recipe app, you're able to create meal plans. There's a huge selection of recipes build in to choose from. Further, the ingredients can be exactly calculated based on the amount of people and can be added to a shopping list.`,
  tasks: [
    'Conception and development',
    'User interface development',
    'Parsing a JSON file',
    'Persisting data with Core Data',
  ],
  languages: [LANGUAGES.swift, LANGUAGES.json],
  frameworks: [
    FRAMEWORKS.apple.ios,
    FRAMEWORKS.apple.swiftUI,
    FRAMEWORKS.apple.coreData,
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
