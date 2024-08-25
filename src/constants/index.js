import problemicon1 from "../assets/problem/problemicon1.svg";
import problemicon2 from "../assets/problem/problemicon2.svg";
import problemicon3 from "../assets/problem/problemicon3.svg";
import solutionicon1 from "../assets/solution/solutionicon1.svg";
import solutionicon2 from "../assets/solution/solutionicon2.svg";
import solutionicon3 from "../assets/solution/solutionicon3.svg";
import review1 from "../assets/testimonials/review1.jpeg";
import review2 from "../assets/testimonials/review2.jpeg";
import review3 from "../assets/testimonials/review3.jpeg";
import review4 from "../assets/testimonials/review4.jpeg";
import review5 from "../assets/testimonials/review5.jpeg";
import review6 from "../assets/testimonials/review6.jpeg";
import review7 from "../assets/testimonials/review7.jpeg";
import review8 from "../assets/testimonials/review8.jpeg";
import branding from "../assets/process/branding.png";
import offer from "../assets/process/offer.png";
import clients from "../assets/process/clients.png";

export const navlinks = [
  {
    id: "0",
    title: "How It Works",
    url: "#howitworks",
  },
  {
    id: "1",
    title: "Benifits",
    url: "#benifits",
  },
  {
    id: "2",
    title: "Testimonials",
    url: "#testimonials",
  },
  {
    id: "3",
    title: "FAQ's",
    url: "#faq",
  },
];

export const problems = [
  {
    id: "0",
    title: "Saturated Market",
    text: `Within your first week on X, you will see that there are 100s of other creators offering the EXACT same service/product as you. And only 1% people choose you to be their “Go-to"`,
    iconUrl: problemicon1,
  },
  {
    id: "1",
    title: "Writing & Content",
    text: "90% of creators don’t know how to write or what to write about, and that’s why they gain 10 followers every 10 years and land 0 clients every 100 years.",
    iconUrl: problemicon2,
  },
  {
    id: "2",
    title: "Offer",
    text: "I will grow my followers then monetize later. Every single creator thought this and they still fail to see any real progress in their business.",
    iconUrl: problemicon3,
  },
];

export const solutions = [
  {
    id: "0",
    title: "Positioning",
    text: "Get clear with your audience, and fix your content to become a creator worth following.",
    iconUrl: solutionicon1,
  },
  {
    id: "1",
    title: "Content That Converts",
    text: "Most X creators complain about “Writer’s Block”, You’ll never have that with our Idea gen System.",
    iconUrl: solutionicon2,
  },
  {
    id: "2",
    title: "Offer Crafting",
    text: "A brand without an offer is like a pizza without toppings—sure, it exists, but who wants that?",
    iconUrl: solutionicon3,
  },
];

export const reviews = [
  review1,
  review8,
  review3,
  review4,
  review5,
  review6,
  review7,
  review2,
];

export const process = [
  {
    id: 1,
    title: "Positioning And Branding",
    description:
      "Get personalized tips to refine your Twitter profile and build a strong brand.",
    timeline: "2 weeks",
    img: branding,
  },
  {
    id: 2,
    title: "Offer Creation",
    description: `90% of creators on X grow their accounts but they struggle to sell.
- They either don’t know what to offer, or they create an offer people DON’T need.
- We will create an offer that people NEED and start monetizing it.`,
    timeline: "2 weeks",
    img: offer,
  },
  {
    id: 3,
    title: "Attracting Clients",
    description: `We will optimize your content to get you leads and optimize your outreach so you approach potential clients with ease.`,
    timeline: "4 weeks",
    img: clients,
  },
];

export const questions = [
  {
    id: 1,
    question: `How much time do I have to spend every day to grow?`,
    answer: `Whether you have 30 mins a day or 6 hours, this is a personalized approach to help you grow and get tangible results.`,
  },
  {
    id: 2,
    question: `Will this get me to $10k a month fast?`,
    answer: `No, this is not a get-rich quick scheme, you’re starting from scratch so it’s gonna take a bit of time to get there.`,
  },
  {
    id: 3,
    question: `Is this beginner friendly?`,
    answer: `Yes, It’s totally beginner friendly, you will get actionable steps that work for you as a beginner.`,
  },
  {
    id: 4,
    question: `Will this help me craft my offer and get clients?`,
    answer: `Yes, we will work on creating an offer that people NEED, and help you land clients as well.`,
  },
];

export default reviews;
