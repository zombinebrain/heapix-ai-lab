import {SERVICES_IDS, ServicesCardsType} from "../models/services";

export const servicesCards: ServicesCardsType = Object.freeze({
  [SERVICES_IDS.MANAGEMENT]: {
    technologies: [
      {
        title: 'Accurate Demand Prediction',
        text: 'AI uses historical data and machine learning algorithms to forecast future demand accurately, considering various factors.'
      },
      {
        title: 'Real-time Data Analysis',
        text: 'AI processes real-time data from various sources, enabling quick adjustments to demand forecasts based on changing market conditions.'
      },
      {
        title: 'Inventory Optimization',
        text: ' AI algorithms analyze demand patterns to determine optimal inventory levels, reducing excess stock and minimizing shortages.'
      },
      {
        title: 'Dynamic Reordering',
        text: 'AI continuously monitors inventory levels and triggers automatic reorder points, ensuring products are restocked as needed.'
      }
    ],
    tags: ['Cloud Computing', 'Big Data Analytics', 'Machine Learning']
  },
  [SERVICES_IDS.AUTOMATION]: {
    technologies: [
      {
        title: 'Smart Document Routing',
        text: 'AI can intelligently route documents to the right departments or individuals based on content, reducing manual sorting and ensuring timely processing.'
      },
      {
        title: 'Automated Approval Workflows',
        text: 'AI-driven workflows can automatically route documents for approval based on predefined rules, accelerating decision-making processes.'
      },
      {
        title: 'Automatic Report Generation',
        text: 'AI can analyze data and generate structured reports based on specified parameters.'
      },
      {
        title: 'Automated Form Filling',
        text: 'AI can automatically populate documents based on predefined templates and data.'
      },
    ],
    tags: ['NLP', 'Deep Learning', 'Machine Learning']
  },
  [SERVICES_IDS.MARKETING]: {
    technologies: [
      {
        title: 'Customer Insights',
        text: 'AI analyzes vast customer data to uncover patterns and preferences, enabling more targeted and relevant marketing strategies.'
      },
      {
        title: 'Predictive Analytics',
        text: 'AI forecasts customer behavior, allowing marketers to anticipate needs and send timely, personalized messages.'
      },
      {
        title: 'Chatbots and Virtual Assistants',
        text: 'AI-powered chatbots engage customers in real-time, providing personalized assistance and gathering valuable insights.'
      },
      {
        title: 'Dynamic Content Generation',
        text: 'AI generates tailored content, saving time and effort while delivering individualized messages to a broader audience.'
      }
    ],
    tags: ['Customer Segmentation', 'Big Data Analytics', 'Machine Learning']
  },
  [SERVICES_IDS.DATA_ANALYSIS]: {
    technologies: [
      {
        title: 'Predictive Analytics',
        text: 'AI can analyze historical data and patterns to make predictions about future trends, aiding in proactive decision-making.'
      },
      {
        title: 'Automated Insights',
        text: 'AI algorithms can sift through large datasets to extract valuable insights, enabling quicker and more informed decision-making.'
      },
      {
        title: 'Anomaly Detection',
        text: 'AI can identify unusual patterns or outliers in data, helping detect errors, fraud, or unusual events that require attention.'
      },
      {
        title: 'Scenario Analysis',
        text: 'AI-driven simulations can model various scenarios based on different variables, assisting in assessing potential outcomes and making well-informed decisions.'
      },
    ],
    tags: ['Image Processing', 'Forecasting and Regression', 'Machine Learning']
  },
  [SERVICES_IDS.CHURN_PREDICTION]: {
    technologies: [
      {
        title: 'Predictive Modeling',
        text: 'AI algorithms can analyze historical customer data to predict the likelihood of churn, helping businesses identify high-risk customers and take proactive retention measures.'
      },
      {
        title: 'Feature Engineering',
        text: 'AI can automatically select and engineer relevant features from customer data, improving the accuracy of churn prediction models.'
      },
      {
        title: 'Sentiment Analysis',
        text: 'By analyzing customer interactions and feedback, AI can determine sentiment trends that might indicate dissatisfaction and potential churn.'
      },
      {
        title: 'Segmentation and Personalization',
        text: 'AI-powered segmentation can help tailor retention strategies for different customer groups, enhancing the effectiveness of churn prevention efforts.'
      }
    ],
    tags: ['Deep Learning', 'Time Series', 'Machine Learning']
  },
  [SERVICES_IDS.SERVICE_AUTOMATION]: {
    technologies: [
      {
        title: 'Chatbots and Virtual Assistants',
        text: 'AI-powered chatbots can handle routine customer inquiries, providing instant responses and freeing up human agents for more complex tasks.'
      },
      {
        title: 'Sentiment Analysis',
        text: 'AI can analyze customer interactions to determine sentiment and identify issues that require immediate attention, ensuring a proactive response.'
      },
      {
        title: 'Automated Ticket Routing',
        text: 'AI can categorize and route customer inquiries to the most appropriate department or agent, ensuring efficient issue resolution.'
      },
      {
        title: 'Predictive Analytics',
        text: 'AI algorithms can predict potential service disruptions or issues, allowing companies to take preventive measures and provide a seamless customer experience.'
      }
    ],
    tags: ['NLP', 'Speech Recognition', 'Image Processing']
  },
  [SERVICES_IDS.LOGISTICS]: {
    technologies: [
      {
        title: 'Route Planning and Optimization',
        text: 'AI algorithms can analyze historical transportation data and real-time conditions to recommend the most efficient routes, minimizing travel time and fuel consumption.'
      },
      {
        title: 'Demand Forecasting',
        text: 'AI can analyze historical sales data, market trends, and external factors to predict demand accurately, enabling companies to optimize inventory levels and reduce stockouts.'
      },
      {
        title: 'Warehouse Management',
        text: 'AI-powered systems can optimize warehouse layout, inventory placement, and picking routes, streamlining operations and reducing labor costs.'
      },
      {
        title: 'Predictive Maintenance',
        text: 'By analyzing data from sensors and equipment, AI can predict maintenance needs, preventing breakdowns and minimizing downtime.'
      }
    ],
    tags: ['Augmented Reality', 'Image Processing', 'Big Data Analysis']
  },
  [SERVICES_IDS.SOCIALS_ANALYSIS]: {
    technologies: [
      {
        title: 'Sentiment Analysis',
        text: 'AI can analyze social media posts and comments to determine sentiment and opinions about a brand, product, or topic, providing valuable insights for decision-making.'
      },
      {
        title: 'Automated Content Curation',
        text: 'AI algorithms can curate and recommend relevant content for posting, ensuring consistent and engaging social media updates.'
      },
      {
        title: 'Influencer Identification',
        text: 'AI can identify potential influencers by analyzing user engagement, reach, and relevance, aiding in effective influencer marketing campaigns.'
      },
      {
        title: 'Trend Detection',
        text: 'AI-powered tools can detect emerging trends and topics in real-time, enabling businesses to create timely and relevant content that resonates with their audience.'
      }
    ],
    tags: ['Machine Learning', 'Image Processing', 'Voice and Speech Processing']
  },
  [SERVICES_IDS.FRAUD_DETECTION]: {
    technologies: [
      {
        title: 'Anomaly Detection',
        text: 'AI algorithms can analyze transaction data and identify unusual patterns, flagging potentially fraudulent activities for further investigation.'
      },
      {
        title: 'Behavioral Analysis',
        text: 'AI can learn typical user behaviors and detect deviations, helping to spot fraudulent actions based on unusual behavior.'
      },
      {
        title: 'Real-time Monitoring',
        text: 'AI-powered systems can continuously monitor transactions and activities, instantly flagging suspicious actions for immediate action.'
      },
      {
        title: 'Predictive Modeling',
        text: 'AI can analyze historical data to predict potential fraud, enabling proactive measures and prevention strategies.'
      }
    ],
    tags: ['Machine Learning', 'Image Processing', 'Network Analysis']
  },
  [SERVICES_IDS.TREND_FORECASTING]: {
    technologies: [
      {
        title: 'Data Mining and Analysis',
        text: 'AI algorithms can process vast amounts of data from various sources, identifying patterns and correlations that can indicate emerging trends.'
      },
      {
        title: 'Time Series Analysis',
        text: 'AI can analyze historical data and detect temporal patterns, enabling accurate predictions of future trends.'
      },
      {
        title: 'Sentiment Analysis',
        text: 'AI can analyze social media, news, and customer feedback to gauge sentiment and opinions, helping to anticipate shifts in consumer preferences.'
      },
      {
        title: 'Market Segmentation',
        text: 'AI can segment markets based on various criteria and analyze each segment\'s behavior, providing insights into different trends and demands.'
      }
    ],
    tags: ['Deep Learning', 'Social Media Analysis', 'Machine Learning']
  },
  [SERVICES_IDS.TEXT_RECOGNITION]: {
    technologies: [
      {
        title: 'Optical Character Recognition',
        text: 'AI-powered OCR can accurately extract text from images or scanned documents, facilitating automated data entry and digitization.'
      },
      {
        title: 'Language Translation',
        text: 'AI-driven translation tools can automatically translate text from one language to another, enabling multilingual communication and content localization.'
      },
      {
        title: 'Automated Summarization',
        text: 'AI can analyze and summarize lengthy texts, extracting key information and reducing the time needed for manual review.'
      },
      {
        title: 'Information Extraction',
        text: 'AI algorithms can extract specific data points, such as names, dates, and addresses, from unstructured text, streamlining data collection processes.'
      }
    ],
    tags: ['Deep Learning', 'NLP', 'Information Retrieval']
  },
  [SERVICES_IDS.MEDIA_ANALYSIS]: {
    technologies: [
      {
        title: 'Sentiment Analysis',
        text: 'AI can analyze social media, news articles, and user comments to determine public sentiment and opinions, aiding in gauging the success of media campaigns.'
      },
      {
        title: 'Content Categorization',
        text: 'AI algorithms can automatically categorize and tag media content, making it easier to organize and search through vast amounts of data.'
      },
      {
        title: 'Image and Video Recognition',
        text: 'AI-powered tools can analyze images and videos to identify objects, scenes, and even emotions, enhancing media content understanding and engagement.'
      },
      {
        title: 'Trend Identification',
        text: 'AI can identify emerging trends and topics by analyzing patterns in media data, enabling businesses to stay ahead in content creation and audience engagement.'
      }
    ],
    tags: ['Sentiment Analysis', 'Trend Analysis', 'Image and Video Processing']
  }
});
