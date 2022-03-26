import { LANGUAGES } from '../languages'
import { FRAMEWORKS } from '../frameworks'
import Project from 'models/ProjectModel'
import PreviewImage from 'models/PreviewImageModel'
import IpadImage from 'assets/images/previews/recipes/ipad.png'
import IphoneImage from 'assets/images/previews/recipes/iphone.png'
import IphoneSEImage from 'assets/images/previews/recipes/iphoneSE.png'

export default new Project(
  'Recipes app',
  `With his recipe app, you're able to create meal plans. There's a huge selection of recipes build in to choose from. Further, the ingredients can be exactly calculated based on the amount of people and can be added to a shopping list.`,
  [
    'Conception and development',
    'User interface development',
    'Parsing a JSON file',
    'Persisting data with Core Data',
  ],
  [LANGUAGES.swift, LANGUAGES.json],
  [FRAMEWORKS.apple.ios, FRAMEWORKS.apple.swiftUI, FRAMEWORKS.apple.coreData],
  undefined,
  'https://github.com/Hebrasco/recipe_app',
  [
    new PreviewImage('preview-recipes-iphoneSE', IphoneSEImage, IphoneSEImage),
    new PreviewImage('preview-recipes-iphone', IphoneImage, IphoneImage),
    new PreviewImage('preview-recipes-ipad', IpadImage, IpadImage),
  ]
)
