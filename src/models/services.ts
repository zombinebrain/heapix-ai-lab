export enum SERVICES_IDS {
  MANAGEMENT = 'Demand Forecasting and Inventory Management',
  AUTOMATION = 'Document Processing Automation',
  MARKETING = 'Personalized Marketing',
  DATA_ANALYSIS = 'Data Analysis and Decision Making',
  CHURN_PREDICTION = 'Customer Churn Prediction',
  SERVICE_AUTOMATION = 'Customer Service Automation',
  LOGISTICS = 'Logistics Optimization',
  SOCIALS_ANALYSIS = 'Social Media Analysis',
  FRAUD_DETECTION = 'Fraud Detection',
  TREND_FORECASTING = 'Business Trend Forecasting',
  TEXT_RECOGNITION = 'Text Recognition and Processing',
  MEDIA_ANALYSIS = 'Media Data Analysis'
}

export type TechnologiesType = {
  title: string,
  text: string
};

export type ServicesCardsType = {
  [key in SERVICES_IDS]: {
    technologies: Array<TechnologiesType>,
    tags: string[]
  }
};
