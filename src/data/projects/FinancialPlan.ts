import { FinancePlanAppIcons } from 'assets/images/appIcons'
import { FinancePlanPreviews } from 'assets/images/previews'
import {
  ScreenshotsIpadDark,
  ScreenshotsIpadLight,
  ScreenshotsIphoneDark,
  ScreenshotsIphoneLight,
} from 'assets/images/screenshots/financialPlan'
import { PLATFORM } from 'data/platform'
import * as PROFILE from 'data/profile'
import { PROJECT_STATUS } from 'data/projectStatus'
import type { Project } from 'types'

const FINANCIAL_PLAN: Project = {
  appIcon: {
    dark: FinancePlanAppIcons.dark,
    light: FinancePlanAppIcons.light,
  },
  description:
    'A budget planner that focuses on planning ahead, not tracking past transactions. Users set up their accounts, add recurring income and expenses from weekly to annually, and plan transfers between accounts. Every amount keeps a price history, so the reports show which costs went up, which changes are coming next and how each category develops over time. Income, expenses and surplus can be viewed per week, month, year or any other interval. Everything syncs through iCloud. The app is free to use, and a one-time purchase unlocks Premium.',
  features: [
    {
      description: 'Multiple accounts, each with its own income, expense and balance summary.',
      icon: 'bi bi-bank',
      title: 'Accounts',
    },
    {
      description:
        'Income and expenses that repeat weekly up to annually, with an optional end date.',
      icon: 'bi bi-arrow-repeat',
      title: 'Recurring Transactions',
    },
    {
      description:
        'Regular payments from one account to another, like a monthly amount moved to savings.',
      icon: 'bi bi-arrow-left-right',
      title: 'Transfers',
    },
    {
      description: 'Every amount keeps its history, and price changes can be scheduled ahead.',
      icon: 'bi bi-clock-history',
      title: 'Price History',
    },
    {
      description: 'Transactions are organized in predefined categories and subcategories.',
      icon: 'bi bi-tag',
      title: 'Categories',
    },
    {
      description: 'Income, expenses and surplus as charts, plus the savings rate.',
      icon: 'bi bi-pie-chart',
      title: 'Reports',
    },
    {
      description: 'Spending per category and subcategory, across all accounts or per account.',
      icon: 'bi bi-percent',
      title: 'Category Reports',
    },
    {
      description:
        'A list of the costs that went up recently and the changes that are coming next.',
      icon: 'bi bi-graph-up-arrow',
      title: 'Price Changes',
    },
    {
      description: 'Bar charts that show how each category develops over time.',
      icon: 'bi bi-bar-chart',
      title: 'Category Trends',
    },
    {
      description: 'No collection of any kind of data.',
      icon: 'bi bi-lock',
      title: 'Privacy first',
    },
    {
      description: 'All accounts and transactions are synced with iCloud.',
      icon: 'bi bi-cloud',
      title: 'Cloud Sync',
    },
    {
      description: 'A one-time purchase that unlocks unlimited accounts, transfers and trends.',
      icon: 'bi bi-gem',
      title: 'Premium',
    },
  ],
  frameworks: [
    PROFILE.frameworks.apple.swiftUI,
    PROFILE.frameworks.apple.swiftCharts,
    PROFILE.frameworks.apple.swiftData,
  ],
  id: 'finance-plan',
  languages: [PROFILE.languages.swift],
  metaDescription:
    'Financial Plan is a budget planner for iPhone and iPad with recurring income and expenses, transfers, price history and cashflow reports.',
  name: 'Financial Plan',
  onlineURL: 'https://apps.apple.com/app/budget-planner-money-plan/id6757672766',
  platforms: [PLATFORM.iphone, PLATFORM.ipad],
  previewImage: {
    altText: 'Preview screenshot of Financial Plan',
    dark: ScreenshotsIphoneDark.AccountDetails,
    light: ScreenshotsIphoneLight.AccountDetails,
  },
  screenshots: {
    ipad: [
      {
        altText: 'Screenshot of ipad app of accounts screen',
        dark: ScreenshotsIpadDark.Accounts,
        light: ScreenshotsIpadLight.Accounts,
      },
      {
        altText: 'Screenshot of ipad app of account detail screen',
        dark: ScreenshotsIpadDark.AccountDetails,
        light: ScreenshotsIpadLight.AccountDetails,
      },
      {
        altText: 'Screenshot of ipad app of edit transaction screen with price history',
        dark: ScreenshotsIpadDark.EditTransaction,
        light: ScreenshotsIpadLight.EditTransaction,
      },
      {
        altText: 'Screenshot of ipad app of edit transfer screen',
        dark: ScreenshotsIpadDark.EditTransfer,
        light: ScreenshotsIpadLight.EditTransfer,
      },
      {
        altText: 'Screenshot of ipad app of reports overview screen',
        dark: ScreenshotsIpadDark.Reports,
        light: ScreenshotsIpadLight.Reports,
      },
      {
        altText: 'Screenshot of ipad app of category report screen',
        dark: ScreenshotsIpadDark.ReportsCategory,
        light: ScreenshotsIpadLight.ReportsCategory,
      },
      {
        altText: 'Screenshot of ipad app of reports screen showing price changes',
        dark: ScreenshotsIpadDark.ReportsPriceChanges,
        light: ScreenshotsIpadLight.ReportsPriceChanges,
      },
      {
        altText: 'Screenshot of ipad app of reports screen showing trends',
        dark: ScreenshotsIpadDark.ReportsTrends,
        light: ScreenshotsIpadLight.ReportsTrends,
      },
    ],
    iphone: [
      {
        altText: 'Screenshot of iphone app of accounts screen',
        dark: ScreenshotsIphoneDark.Accounts,
        light: ScreenshotsIphoneLight.Accounts,
      },
      {
        altText: 'Screenshot of iphone app of account detail screen',
        dark: ScreenshotsIphoneDark.AccountDetails,
        light: ScreenshotsIphoneLight.AccountDetails,
      },
      {
        altText: 'Screenshot of iphone app of edit transaction screen with price history',
        dark: ScreenshotsIphoneDark.EditTransaction,
        light: ScreenshotsIphoneLight.EditTransaction,
      },
      {
        altText: 'Screenshot of iphone app of edit transfer screen',
        dark: ScreenshotsIphoneDark.EditTransfer,
        light: ScreenshotsIphoneLight.EditTransfer,
      },
      {
        altText: 'Screenshot of iphone app of reports overview screen',
        dark: ScreenshotsIphoneDark.Reports,
        light: ScreenshotsIphoneLight.Reports,
      },
      {
        altText: 'Screenshot of iphone app of category report screen',
        dark: ScreenshotsIphoneDark.ReportsCategory,
        light: ScreenshotsIphoneLight.ReportsCategory,
      },
      {
        altText: 'Screenshot of iphone app of reports screen showing price changes',
        dark: ScreenshotsIphoneDark.ReportsPriceChanges,
        light: ScreenshotsIphoneLight.ReportsPriceChanges,
      },
      {
        altText: 'Screenshot of iphone app of reports screen showing trends',
        dark: ScreenshotsIphoneDark.ReportsTrends,
        light: ScreenshotsIphoneLight.ReportsTrends,
      },
    ],
  },
  status: {
    date: new Date('2026-02-13'),
    type: PROJECT_STATUS.launched,
  },
  summaryHeading: 'Get a clear cashflow overview.',
  tasks: ['Conception and development', 'User interface development'],
  titleImage: {
    altText: 'Preview collection of screenshots',
    dark: FinancePlanPreviews.titleDark,
    light: FinancePlanPreviews.titleLight,
  },
} as const

export { FINANCIAL_PLAN }
