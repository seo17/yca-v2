export const navItems = [
  {
    label: "Features",
    path: "/features",
    show: true,
  },
  {
    label: "Pricing",
    path: "/pricing",
    show: true,
  },
  {
    label: "Get Started",
    path: "/login",
    show: true,
  },
];

export const mobileNavItems = [
  {
    label: "Home",
    path: "/",
    show: true,
  },
  ...navItems,
];

export const features = [
  {
    title: "Sentiment Analysis",
    description:
      "Quickly determine the overall mood of your viewers with YCA’s advanced sentiment analysis. Understand whether your content resonates positively, needs improvement, or is generating mixed reactions.",
    image: (
      <img
        src="/features/sentiment-analysis.svg"
        className="w-full h-full object-cover"
      />
    ),
    reverse: false,
  },
  {
    title: "Keyword Extraction",
    description:
      "Discover the most talked-about topics and phrases in your comments. YCA’s keyword extraction tool helps you spot emerging trends, enabling you to tailor your content to audience interests.",
    image: <img src="/features/keyword-extraction.svg" />,
    reverse: true,
  },
  {
    title: "Detailed Reports",
    description:
      "Generate comprehensive reports that break down sentiment, keywords, and trends. Download and share these insights with your team to align your content strategy.",
    image: <img src="/features/reports.svg" />,
    reverse: false,
  },
];

export const benefits = [
  {
    title: "Save Time and Effort",
    description:
      "Let YCA do the heavy lifting. No more manually sifting through thousands of comments. YCA automates the process, allowing you to focus on creating content that your audience will love.",
    image: "save_time_effort_image_url",
  },
  {
    title: "Improve Content Quality",
    description:
      "Use insights from YCA to refine your videos, ensuring they resonate better with your audience and drive higher engagement.",
    image: "improve_content_quality_image_url",
  },
  {
    title: "Boost Viewer Engagement",
    description:
      "Build a stronger community by understanding your audience’s feedback. Engage more effectively and foster a loyal and interactive viewer base.",
    image: "boost_viewer_engagement_image_url",
  },
];

export const pricing = [
  {
    tier: "Free",
    price: "0",
    description: "Free forever",
    features: [
      "Sentiment Analysis for up to 5 videos per month",
      "Basic Keyword Extraction",
      "Access to Interactive Dashboards",
      "Email Support",
    ],
  },
  {
    tier: "Basic",
    price: "4.5",
    description: "Billed Monthly",
    features: [
      "Advanced Sentiment Analysis for up to 50 videos per month",
      "Trend Identification & Spam Detection",
      "Detailed Reports with Download Options",
      "Priority Email Support",
    ],
  },
  {
    tier: "Pro",
    price: "8.5",
    description: "Billed Monthly",
    features: [
      "Advanced Sentiment Analysis for up to 50 videos per month",
      "Trend Identification & Spam Detection",
      "Detailed Reports with Download Options",
      "Priority Email Support",
    ],
  },
];
