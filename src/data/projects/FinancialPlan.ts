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
    'A budget planner that focuses on planning ahead, not tracking past transactions. Users define recurring income and expenses, set budgets by week, month, or year, and get a clear cashflow overview at a glance through reports.',
  features: [
    {
      description: 'Creation of multiple accounts to organize transactions and split reports.',
      icon: 'bi bi-bank',
      title: 'Accounts',
    },
    {
      description: 'Weekly, monthly, and yearly budget planning in one app.',
      icon: 'bi bi-calendar-date',
      title: 'Planning Periods',
    },
    {
      description: 'Bills and regular payments can be managed with minimal setup.',
      icon: 'bi bi-currency-euro',
      title: 'Recurring Transactions',
    },
    {
      description: 'Transactions can be organized using predefined categories and subcategories.',
      icon: 'bi bi-tag',
      title: 'Category Organization',
    },
    {
      description: 'Summaries of income and expenses on accounts and across accounts.',
      icon: 'bi bi-123',
      title: 'Accounts Summaries',
    },
    {
      description:
        'Visualized reports transactions and price trends over time via bar and pie charts.',
      icon: 'bi bi-pie-chart',
      title: 'Visual Reports',
    },
    {
      description:
        'Visualized reports spending in absolute and relative values based on categories and accounts.',
      icon: 'bi bi-percent',
      title: 'Category Reports',
    },
    {
      description: 'No collection of any kind of data.',
      icon: 'bi bi-lock',
      title: 'Privacy first',
    },
    {
      description: 'All calculations are synced with iCloud.',
      icon: 'bi bi-cloud',
      title: 'Cloud Sync',
    },
  ],
  frameworks: [
    PROFILE.frameworks.apple.swiftUI,
    PROFILE.frameworks.apple.swiftData,
    PROFILE.frameworks.apple.swiftCharts,
  ],
  id: 'finance-plan',
  languages: [PROFILE.languages.swift],
  name: 'Financial Plan',
  onlineURL: 'https://apps.apple.com/app/budget-planner-money-plan/id6757672766',
  platforms: [PLATFORM.iphone, PLATFORM.ipad],
  previewImage: {
    altText: 'Preview screenshot of Financial Plan',
    dark: ScreenshotsIphoneDark.Transactions,
    light: ScreenshotsIphoneLight.Transactions,
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
        altText: 'Screenshot of ipad app of transactions screen',
        dark: ScreenshotsIpadDark.Transactions,
        light: ScreenshotsIpadLight.Transactions,
      },
      {
        altText: 'Screenshot of ipad app of reports screen',
        dark: ScreenshotsIpadDark.Reports,
        light: ScreenshotsIpadLight.Reports,
      },
      {
        altText: 'Screenshot of ipad app of reports screen showing category reports',
        dark: ScreenshotsIpadDark.ReportsCategories,
        light: ScreenshotsIpadLight.ReportsCategories,
      },
      {
        altText: 'Screenshot of ipad app of reports category reports screen',
        dark: ScreenshotsIpadDark.ReportsCategoryDetails,
        light: ScreenshotsIpadLight.ReportsCategoryDetails,
      },
      {
        altText: 'Screenshot of ipad app of reports screen showing category charts',
        dark: ScreenshotsIpadDark.ReportsCharts,
        light: ScreenshotsIpadLight.ReportsCharts,
      },
      {
        altText: 'Screenshot of ipad app of reports screen showing frequency options',
        dark: ScreenshotsIpadDark.ReportsOptionsFrequency,
        light: ScreenshotsIpadLight.ReportsOptionsFrequency,
      },
      {
        altText: 'Screenshot of ipad app of reports screen showing category options',
        dark: ScreenshotsIpadDark.ReportsOptionsCategories,
        light: ScreenshotsIpadLight.ReportsOptionsCategories,
      },
      {
        altText: 'Screenshot of ipad app of reports screen showing chart options',
        dark: ScreenshotsIpadDark.ReportsOptionsChart,
        light: ScreenshotsIpadLight.ReportsOptionsChart,
      },
    ],
    iphone: [
      {
        altText: 'Screenshot of ipad app of accounts screen',
        dark: ScreenshotsIphoneDark.Accounts,
        light: ScreenshotsIphoneLight.Accounts,
      },
      {
        altText: 'Screenshot of ipad app of account detail screen',
        dark: ScreenshotsIphoneDark.AccountDetails,
        light: ScreenshotsIphoneLight.AccountDetails,
      },
      {
        altText: 'Screenshot of ipad app of transactions screen',
        dark: ScreenshotsIphoneDark.Transactions,
        light: ScreenshotsIphoneLight.Transactions,
      },
      {
        altText: 'Screenshot of ipad app of reports screen',
        dark: ScreenshotsIphoneDark.Reports,
        light: ScreenshotsIphoneLight.Reports,
      },
      {
        altText: 'Screenshot of ipad app of reports screen showing category reports',
        dark: ScreenshotsIphoneDark.ReportsCategories,
        light: ScreenshotsIphoneLight.ReportsCategories,
      },
      {
        altText: 'Screenshot of ipad app of reports category reports screen',
        dark: ScreenshotsIphoneDark.ReportsCategoryDetails,
        light: ScreenshotsIphoneLight.ReportsCategoryDetails,
      },
      {
        altText: 'Screenshot of ipad app of reports screen showing category charts',
        dark: ScreenshotsIphoneDark.ReportsCharts,
        light: ScreenshotsIphoneLight.ReportsCharts,
      },
      {
        altText: 'Screenshot of ipad app of reports screen showing frequency options',
        dark: ScreenshotsIphoneDark.ReportsOptionsFrequency,
        light: ScreenshotsIphoneLight.ReportsOptionsFrequency,
      },
      {
        altText: 'Screenshot of ipad app of reports screen showing category options',
        dark: ScreenshotsIphoneDark.ReportsOptionsCategories,
        light: ScreenshotsIphoneLight.ReportsOptionsCategories,
      },
      {
        altText: 'Screenshot of ipad app of reports screen showing chart options',
        dark: ScreenshotsIphoneDark.ReportsOptionsChart,
        light: ScreenshotsIphoneLight.ReportsOptionsChart,
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
