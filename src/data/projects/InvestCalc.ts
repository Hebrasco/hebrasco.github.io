import { InvestCalcAppIcons } from 'assets/images/appIcons'
import { InvestCalcPreviews } from 'assets/images/previews'
import {
  ScreenshotsDark,
  ScreenshotsLight,
} from 'assets/images/screenshots/investCalc'
import { PROFILE } from 'data'
import { PLATFORM } from 'data/platform'
import { PROJECT_STATUS } from 'data/projectStatus'
import { Project } from 'types'

export const INVEST_CALC: Project = {
  id: 'invest-calc',
  name: 'Invest. Calc',
  description:
    'This app calculates a investments growths for a specific timeframe with custom parameters like starting amount, contributions, expected growth, years to grow and contribution growth. Contributions can be added in different timeframes, e.g. monthly or yearly. The yearly balance is shown in a bar chart and list. In the list each past year can a achieved or missed status be assigned. All the calculations are synced with iCloud.',
  tasks: [],
  platforms: [PLATFORM.iPhone, PLATFORM.iPadOS],
  languages: [PROFILE.languages.swift],
  frameworks: [
    PROFILE.frameworks.apple.swiftUI,
    PROFILE.frameworks.apple.swiftCharts,
    PROFILE.frameworks.apple.swiftData,
  ],
  status: {
    type: PROJECT_STATUS.launched,
    date: new Date('2025-05-18'),
  },
  features: [
    {
      icon: 'bi bi-plus-lg',
      title: 'Contribution Frequency',
      description:
        'A contribution can be done weekly , biweekly, monthly, semiannually or annually.',
    },
    {
      icon: 'bi bi-percent',
      title: 'Contribution Growth',
      description:
        'A percentage of the contribution growth can be set to increase the contribution per year automatically.',
    },
    {
      icon: 'bi bi-trophy',
      title: 'Goals',
      description:
        'Goals are shown in the yearly list. These can also be toggled on or off.',
    },
    {
      icon: 'bi bi-bar-chart',
      title: 'Chart',
      description: 'All calculated years are displayed in a color coded chart.',
    },
    {
      icon: 'bi bi-check-circle',
      title: 'Goal Tracking',
      description:
        'Each past year can be tracked with a achieved or missed status.',
    },
    {
      icon: 'bi bi-eye',
      title: 'Year Details',
      description:
        'Many metrics of a year are available like annual contribution and interest.',
    },
    {
      icon: 'bi bi-pencil',
      title: 'Flexible Contributions',
      description: 'The contribution for each year can be changed.',
    },
    {
      icon: 'bi bi-cloud',
      title: 'Cloud Sync',
      description: 'All calculations are synced with iCloud.',
    },
  ],
  onlineURL: 'https://apps.apple.com/app/id6746040739',
  appIcon: {
    light: InvestCalcAppIcons.light,
    dark: InvestCalcAppIcons.dark,
  },
  previewImage: {
    light: {
      src: ScreenshotsLight.CalculationDetails,
      altText: 'Preview screenshot of Invest Calc in light mode',
    },
    dark: {
      src: ScreenshotsDark.CalculationDetails,
      altText: 'Preview screenshot of Invest Calc in dark mode',
    },
  },
  titleImage: {
    light: {
      src: InvestCalcPreviews.titleLight,
      altText: 'Title image in light mode',
    },
    dark: {
      src: InvestCalcPreviews.titleDark,
      altText: 'Title image in dark mode',
    },
  },
  screenshots: {
    light: [
      {
        src: ScreenshotsLight.Calculations,
        altText:
          'Screenshot of app in light mode showing all saved calculations',
      },
      {
        src: ScreenshotsLight.CreateCalculation,
        altText:
          'Screenshot of app in light mode showing the create calculation modal',
      },
      {
        src: ScreenshotsLight.CalculationDetails,
        altText:
          'Screenshot of app in light mode showing calculation details with a chart and list of each year',
      },
      {
        src: ScreenshotsLight.CalculationYearlyGoals,
        altText:
          'Screenshot of app in light mode showing the list of years and the possibility to assign a status to them',
      },
      {
        src: ScreenshotsLight.EditCalculationYear,
        altText:
          'Screenshot of app in light mode showing the edit calculation year modal',
      },
    ],
    dark: [
      {
        src: ScreenshotsDark.Calculations,
        altText:
          'Screenshot of app in dark mode showing all saved calculations',
      },
      {
        src: ScreenshotsDark.CreateCalculation,
        altText:
          'Screenshot of app in dark mode showing the create calculation modal',
      },
      {
        src: ScreenshotsDark.CalculationDetails,
        altText:
          'Screenshot of app in dark mode showing calculation details with a chart and list of each year',
      },
      {
        src: ScreenshotsDark.CalculationYearlyGoals,
        altText:
          'Screenshot of app in dark mode showing the list of years and the possibility to assign a status to them',
      },
      {
        src: ScreenshotsDark.EditCalculationYear,
        altText:
          'Screenshot of app in dark mode showing the edit calculation year modal',
      },
    ],
  },
} as const
