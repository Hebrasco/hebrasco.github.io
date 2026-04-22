import { InvestCalcAppIcons } from 'assets/images/appIcons'
import { InvestCalcPreviews } from 'assets/images/previews'
import {
  ScreenshotsIpadDark,
  ScreenshotsIpadLight,
  ScreenshotsIphoneDark,
  ScreenshotsIphoneLight,
} from 'assets/images/screenshots/investCalc'
import { PROFILE, PROJECT_STATUS } from 'data'
import { PLATFORM } from 'data/platform'
import type { Project } from 'types'

const INVEST_CALC: Project = {
appIcon: {
  light: InvestCalcAppIcons.light,
  dark: InvestCalcAppIcons.dark,
  },
  description:
    'This app calculates investment growth over a specific timeframe using custom parameters like starting amount, contributions, expected growth, years to grow, and contribution growth. Contributions can be added in different intervals, e.g. monthly or yearly. The yearly balance is shown in a bar chart and list. Each past year can be assigned an achieved or missed status. All calculations are synced with iCloud.',
  features: [
    {
      description:
        'A contribution can be done weekly, biweekly, monthly, semiannually, or annually.',
      icon: 'bi bi-plus-lg',
      title: 'Contribution Frequency',
    },
    {
      description:
        'A percentage of the contribution growth can be set to increase the contribution per year automatically.',
      icon: 'bi bi-percent',
      title: 'Contribution Growth',
    },
    {
      description: 'Goals are shown in the yearly list. These can also be toggled on or off.',
      icon: 'bi bi-trophy',
      title: 'Goals',
    },
    {
      description: 'All calculated years are displayed in a color coded chart.',
      icon: 'bi bi-bar-chart',
      title: 'Chart',
    },
    {
      description: 'Each past year can be tracked with an achieved or missed status.',
      icon: 'bi bi-check-circle',
      title: 'Goal Tracking',
    },
    {
      description: 'Many metrics of a year are available like annual contribution and interest.',
      icon: 'bi bi-eye',
      title: 'Year Details',
    },
    {
      description: 'The contribution for each year can be changed.',
      icon: 'bi bi-pencil',
      title: 'Flexible Contributions',
    },
    {
      description: 'All calculations are synced with iCloud.',
      icon: 'bi bi-cloud',
      title: 'Cloud Sync',
    },
  ],
  frameworks: [
    PROFILE.frameworks.apple.swiftUI,
    PROFILE.frameworks.apple.swiftCharts,
    PROFILE.frameworks.apple.swiftData,
  ],
  id: 'invest-calc',
  languages: [PROFILE.languages.swift],
  name: 'Invest. Calc',
  onlineURL: 'https://apps.apple.com/app/id6746040739',
  platforms: [PLATFORM.iphone, PLATFORM.ipad],
  previewImage: {
      altText: 'Preview screenshot of Invest Calc',
      light: ScreenshotsIphoneLight.CalculationDetails,
      dark: ScreenshotsIphoneDark.CalculationDetails,
  },
  screenshots: {
    ipad: [
        {
          altText: 'Screenshot of ipad app showing all saved calculations',
          light: ScreenshotsIpadLight.Calculations,
          dark: ScreenshotsIpadDark.Calculations,
        },
        {
          altText: 'Screenshot of ipad app showing the create calculation modal',
          light: ScreenshotsIpadLight.CreateCalculation,
          dark: ScreenshotsIpadDark.CreateCalculation,
        },
        {
          altText:
            'Screenshot of ipad app showing calculation details with a chart and list of each year',
          light: ScreenshotsIpadLight.CalculationDetails,
          dark: ScreenshotsIpadDark.CalculationDetails,
        },
        {
          altText:
            'Screenshot of ipad app showing the list of years and the possibility to assign a status to them',
          light: ScreenshotsIpadLight.CalculationYearlyGoals,
          dark: ScreenshotsIpadDark.CalculationYearlyGoals,
        },
        {
          altText: 'Screenshot of ipad app showing the edit calculation year modal',
          light: ScreenshotsIpadLight.EditCalculationYear,
          dark: ScreenshotsIpadDark.EditCalculationYear,
        },
      ],
    iphone: [
        {
          altText: 'Screenshot of iphone app showing all saved calculations',
          light: ScreenshotsIphoneLight.Calculations,
          dark: ScreenshotsIphoneDark.Calculations,
        },
        {
          altText: 'Screenshot of iphone app showing the create calculation modal',
          light: ScreenshotsIphoneLight.CreateCalculation,
          dark: ScreenshotsIphoneDark.CreateCalculation,
        },
        {
          altText:
            'Screenshot of iphone app showing calculation details with a chart and list of each year',
          light: ScreenshotsIphoneLight.CalculationDetails,
          dark: ScreenshotsIphoneDark.CalculationDetails,
        },
        {
          altText:
            'Screenshot of iphone app showing the list of years and the possibility to assign a status to them',
          light: ScreenshotsIphoneLight.CalculationYearlyGoals,
          dark: ScreenshotsIphoneDark.CalculationYearlyGoals,
        },
        {
          altText: 'Screenshot of iphone app showing the edit calculation year modal',
          light: ScreenshotsIphoneLight.EditCalculationYear,
          dark: ScreenshotsIphoneDark.EditCalculationYear,
        },
      ],
  },
  status: {
    date: new Date('2025-05-18'),
    type: PROJECT_STATUS.launched,
  },
  tasks: [],
  titleImage: {
      altText: 'Title image',
      light: InvestCalcPreviews.titleLight,
      dark: InvestCalcPreviews.titleDark,
  },
} as const

export { INVEST_CALC }
