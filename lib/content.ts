export const IMAGES = {
  heroPan: '/images/hero-pan.png',
  spices: '/images/spices.png',
  chili: '/images/chili.png',
  tomato: '/images/tomato.png',
  herbs: '/images/herbs.png',
  bread: '/images/bread.png',
  cheese: '/images/cheese.png',
  milk: '/images/milk.png',
  fish: '/images/fish.png',
  steak: '/images/steak.png',
  plantProtein: '/images/plant-protein.png',
  dessert: '/images/dessert.png',
  chocolateDrip: '/images/chocolate-drip.png',
  beverage: '/images/beverage.png',
  vegetables: '/images/vegetables.png',
  fruits: '/images/fruits.png',
  grains: '/images/grains.png',
  mushrooms: '/images/mushrooms.png',
  chef1: '/images/chef-1.png',
  chef2: '/images/chef-2.png',
  chef3: '/images/chef-3.png',
  chef4: '/images/chef-4.png',
} as const

export const EVENT = {
  name: 'BITEHACK 2026',
  subtitle: 'IDEA 2 PLATE',
  tagline: 'FROM IDEAS TO COMMERCIAL FOOD PRODUCTS',
  taglineAccent: 'Future Food Forum',
  organizers: 'Dr. R. Shivakumar Foundation & SRM Institute of Science & Technology',
  presenters: 'Future Food Forum proudly presents',
  departments: ['Department of Food Technology', 'Institute of Hotel Management'],
  selectionDates: '14th & 15th October 2026',
  eventDate: '26th October 2026',
  date: 'Selection: Oct 14 & 15, 2026 | Main Event: Oct 26, 2026',
  location: 'SRM Institute of Science & Technology, Tiruchirappalli (Trichy)',
  duration: 'Min 3 to Max 5 Members',
  registerHref: 'https://docs.google.com/forms/u/1/d/e/1FAIpQLSf-HtchYydieICvjv4Y7u4rqwuhecVpmmYjJfpBbD05Uo9fmw/viewform?usp=sharing&ouid=116479293640782838944',
  totalPrizePool: '₹ 50,000',
}

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Focus Areas', href: '#focus-areas' },
  { label: 'Domains', href: '#domains' },
  { label: 'Why Participate', href: '#why-participate' },
  { label: 'Journey', href: '#journey' },
  { label: 'Prizes', href: '#prizes' },
  { label: 'Coordinators', href: '#coordinators' },
  { label: 'Register', href: '#register' },
  { label: 'FAQ', href: '#faq' },
]

export const ABOUT = {
  label: 'About The Event',
  title: 'Connecting Student Creativity with Real-World Food Innovation.',
  description:
    'IDEA2PLATE is an innovation drive in the food spectrum, where participants can use the event as a platform to present original food-product ideas and develop them into practical, market-ready concepts.',
  points: [
    'Identify a real food-related problem and propose an innovative solution.',
    'Build a basic prototype, formulation, or proof of concept.',
    'Present commercial potential, target audience, and costing to an expert judging panel.',
    'Selected ideas can receive opportunities for funding, mentorship, product development support, and further commercialization from the Dr. R Shivakumar Foundation.',
  ],
}

export const FOCUS_AREAS = {
  label: 'Focus Areas',
  title: 'Key Focus Areas in Food Innovation',
  description:
    'Targeting high-impact research, development, and technological advances across the food spectrum.',
  tracks: [
    {
      id: 'area_01',
      title: 'Food Technology & Biotech',
      description:
        'Biotechnological processes, gut-health formulations, fermentation, functional foods, and novel ingredient discovery.',
      tags: ['Biotech', 'Gut Health', 'Functional Foods'],
    },
    {
      id: 'area_02',
      title: 'Sustainability & Valorisation',
      description:
        'Zero-waste cooking, upcycling food waste into high-value products, plant-based alternatives, and eco-conscious sourcing.',
      tags: ['Upcycling', 'Waste Valorisation', 'Plant-Based'],
    },
    {
      id: 'area_03',
      title: 'Product Innovation & Packaging',
      description:
        'Smart interactive packaging, shelf-life extension, convenience consumer foods, and personalized nutrition solutions.',
      tags: ['Smart Packaging', 'Convenience', 'Personalised Nutrition'],
    },
  ],
}

export const DOMAINS = {
  label: 'Suggested Food Innovation Domains',
  title: 'Explore 11 High-Potential Domains',
  description: 'Choose one or combine domains to create your breakthrough food product:',
  items: [
    { name: 'Functional Foods', note: 'Enhanced nutritional benefit & bio-active compounds', icon: 'Leaf', image: '/images/domain-functional.jpg' },
    { name: 'Healthy Snacks', note: 'Clean-label, nutrient-dense everyday snacks', icon: 'Apple', image: '/images/domain-snacks.jpg' },
    { name: 'Sustainable Foods', note: 'Low-carbon footprint, regenerative food systems', icon: 'Recycle', image: '/images/domain-sustainable.jpg' },
    { name: 'Plant-Based Products', note: 'Meat & dairy alternatives with premium texture', icon: 'Sparkles', image: '/images/domain-plantbased.jpg' },
    { name: 'Gut-Health Products', note: 'Probiotics, prebiotics & fermented creations', icon: 'HeartPulse', image: '/images/domain-guthealth.jpg' },
    { name: 'Food Biotechnology', note: 'Enzymatic, microbial & bioprocess solutions', icon: 'Dna', image: '/images/domain-biotech.jpg' },
    { name: 'Novel Ingredients', note: 'Algae, insects, mushroom mycelium & wild flora', icon: 'FlaskConical', image: '/images/domain-novel.jpg' },
    { name: 'Food Waste Valorisation', note: 'Transforming industrial side-streams to edible value', icon: 'RefreshCw', image: '/images/domain-waste.jpg' },
    { name: 'Smart Packaging', note: 'Active, intelligent, biodegradable food wrapping', icon: 'Package', image: '/images/domain-smartpkg.jpg' },
    { name: 'Convenience Foods', note: 'Ready-to-eat & ready-to-cook meal innovations', icon: 'Clock', image: '/images/domain-convenience.jpg' },
    { name: 'Personalised Nutrition', note: 'Tailored dietary solutions for specific health needs', icon: 'UserCheck', image: '/images/domain-nutrition.jpg' },
  ],
}

export const CRITERIA = {
  label: 'Submission & Pitch Guidelines',
  title: 'Key Pillars for Concept Evaluation',
  description: 'Your project pitch and presentation should address these critical aspects:',
  items: [
    { title: 'Problem Statement & Consumer Need', description: 'Clear identification of a market gap or food sector issue.' },
    { title: 'Product Concept & Key Innovation', description: 'What makes your food product unique and groundbreaking.' },
    { title: 'Prototype / Formulation / Proof of Concept', description: 'Tangible formulation, recipe, or physical prototype.' },
    { title: 'Target Market & Customer Profile', description: 'Defined demographic, buyer persona, and market potential.' },
    { title: 'Alternatives & Differentiation', description: 'Analysis of current market competitors and your advantage.' },
    { title: 'Costing, Pricing & Commercialization', description: 'Financial feasibility, unit economics, and launch plan.' },
    { title: 'Future Scale-Up Pathway', description: 'Roadmap for scaling production, regulatory compliance, and distribution.' },
  ],
}

export const WHY_PARTICIPATE = {
  label: 'Why Participate?',
  title: '5 Steps From Idea to Plate',
  description: 'Transform your passion for food science into a viable, funded venture.',
  steps: [
    { tag: 'INNOVATE', title: 'Bring Forward an Original Idea', description: 'Submit a fresh, original food-product idea addressing real consumer needs.' },
    { tag: 'BUILD', title: 'Convert into Practical Prototype', description: 'Formulate, test, and develop a working prototype or proof-of-concept.' },
    { tag: 'PITCH', title: 'Present to Industry Experts', description: 'Pitch target audience, commercial viability, and product strengths to judges.' },
    { tag: 'CONNECT', title: 'Network with Leaders', description: 'Interact with mentors, food scientists, judges, and fellow innovators.' },
    { tag: 'GROW', title: 'Receive Commercial Support', description: 'Selected concepts get funding, mentorship, and commercialization from R. Shivakumar Foundation.' },
  ],
}

export const JOURNEY = {
  label: 'IDEA2PLATE Journey',
  title: 'The Event Roadmap',
  stages: [
    {
      step: '01',
      tag: 'Call Out Your Idea',
      title: 'Submit Product Concept',
      description: 'Present a food product concept that addresses a clear consumer need or food-sector problem.',
      date: 'Registration Phase',
    },
    {
      step: '02',
      tag: 'Preliminary Round',
      title: 'Selection Round Presentations',
      description: 'Short-listed teams present their initial concepts and receive feedback to refine their prototypes.',
      date: '14th & 15th October 2026',
    },
    {
      step: '03',
      tag: 'Develop',
      title: 'Prototype & Pitch Refinement',
      description: 'Refine product concept, formulation, target consumer, uniqueness, and commercial feasibility.',
      date: 'Interim Sprint',
    },
    {
      step: '04',
      tag: 'Main Round',
      title: 'Grand Finale Event Pitch',
      description: 'Short-listed teams pitch their fully developed food-product concepts live to the executive panel.',
      date: '26th October 2026',
    },
    {
      step: '05',
      tag: 'Fund & Commercialise',
      title: 'Incubation & Commercial Support',
      description: 'Selected concepts receive funding, mentorship, and commercialization support via Dr. R. Shivakumar Foundation.',
      date: 'Post-Event Growth',
    },
  ],
}

export const PRIZES = {
  label: 'Prize Pool & Awards',
  title: '₹ 50,000 Total Prize Pool',
  description: 'Five distinct awards of ₹10,000 each + commercialization opportunities. Certificates will be provided to all participants.',
  stats: [
    { value: 50000, prefix: '₹', suffix: '', label: 'Total Cash Prizes' },
    { value: 10000, prefix: '₹', suffix: ' x5', label: 'Per Category Award' },
    { value: 100, prefix: '', suffix: '%', label: 'Certificates Provided' },
    { value: 5, prefix: 'Max ', suffix: '', label: 'Members / Team' },
  ],
  awards: [
    { stars: 3, title: 'Best Innovative Product', amount: 10000, prefix: '₹', description: 'For the most groundbreaking, practical, and market-ready food product formulation.' },
    { stars: 3, title: 'Best Pitch', amount: 10000, prefix: '₹', description: 'For the most compelling presentation of business strategy, market need, and pitch execution.' },
    { stars: 3, title: 'Best Sustainable Innovation', amount: 10000, prefix: '₹', description: 'For top achievements in upcycling, zero-waste, eco-packaging, or sustainable food systems.' },
    { stars: 3, title: 'Best Idea', amount: 10000, prefix: '₹', description: 'For the most creative and original concept identifying untapped consumer needs.' },
    { stars: 3, title: 'Best Problem Solving', amount: 10000, prefix: '₹', description: 'For addressing critical challenges in the food sector with high feasibility and impact.' },
  ],
}

export const COORDINATORS = {
  label: 'Coordinators & Leadership',
  title: 'Meet the Organizing Committee',
  description: 'Faculty and leadership guiding BITEHACK 2026 IDEA2PLATE.',
  coordinators: [
    {
      name: 'Ar. Sivakumar Karmegam',
      role: 'Dean - Innovation',
      institution: 'Director - R Shivakumar Foundation',
      specialty: 'Innovation & Strategy',
      bio: 'Leading strategic innovation and commercialization initiatives under the Dr. R Shivakumar Foundation.',
      image: IMAGES.chef1,
    },
    {
      name: 'Dr. M. Maria Leena',
      role: 'HoD - Food Tech, SOBT',
      institution: 'SRM Institute of Science & Technology - Trichy',
      specialty: 'Food Biotechnology',
      bio: 'Expert in food technology, bioactive compounds, and food bioprocess engineering.',
      email: 'marialeena.m@ist.srmtrichy.edu.in',
      image: IMAGES.chef3,
    },
    {
      name: 'Mr. Prince Antony',
      role: 'Vice-Principal (Administration)',
      institution: 'Institute of Hotel Management, SRMIST - Trichy',
      specialty: 'Culinary Management',
      bio: 'Directing hospitality, culinary standards, and commercialization practices.',
      email: 'vp.admin.ihm@ist.srmtrichy.edu.in',
      image: IMAGES.chef2,
    },
  ],
  coCoordinators: [
    {
      name: 'Mr. Gnanamoorthyeswaran',
      role: 'Assistant Professor',
      department: 'Food Tech, SOBT, SRMIST - Trichy',
    },
    {
      name: 'Mr. V. Gunasekar',
      role: 'Assistant Professor',
      department: 'Institute of Hotel Management, SRMIST - Trichy',
    },
  ],
}

export const FEES = {
  label: 'Category & Fees',
  title: 'Registration Fee Structure',
  categories: [
    { category: 'UG & PG Students', fee: 300, currency: '₹', note: 'Per team member' },
    { category: 'Ph.D. Scholars', fee: 500, currency: '₹', note: 'Per team member' },
    { category: 'Faculty Members', fee: 700, currency: '₹', note: 'Per team member' },
    { category: 'Industry Persons', fee: 1000, currency: '₹', note: 'Per team member' },
  ],
}

export const SCHEDULE = {
  label: 'Event Schedule',
  title: 'Important Event Dates',
  days: [
    {
      id: 'selection-round',
      label: '14th & 15th Oct 2026',
      theme: 'Selection Round',
      items: [
        { time: 'Oct 14-15', title: 'Preliminary Concept Presentations', tag: 'Selection Phase' },
        { time: 'Live Pitch', title: 'Mentor Feedback & Prototype Evaluation', tag: 'Mentorship' },
        { time: 'Announcement', title: 'Short-listing Teams for Main Event', tag: 'Finalists' },
      ],
    },
    {
      id: 'main-event',
      label: '26th Oct 2026',
      theme: 'Main Round & Grand Finale',
      items: [
        { time: 'Morning', title: 'Final Food Product Pitch & Commercial Demo', tag: 'Grand Finale' },
        { time: 'Afternoon', title: 'Executive Judging Panel & Feasibility Review', tag: 'Evaluation' },
        { time: 'Evening', title: 'Award Ceremony (₹50,000 Pool) & Funding Support', tag: 'Awards' },
      ],
    },
  ],
}

export const FAQ = {
  label: 'Frequently Asked Questions',
  title: 'Everything You Need To Know',
  items: [
    {
      q: 'Who is eligible to participate in BITEHACK 2026?',
      a: 'UG & PG Students, Ph.D. Scholars, Faculty Members, and Industry Persons are all eligible to form teams and participate.',
    },
    {
      q: 'What is the required team size?',
      a: 'Teams must consist of a minimum of 3 members to a maximum of 5 members.',
    },
    {
      q: 'What are the key dates for Selection & Main Event?',
      a: 'The Selection Round takes place on 14th & 15th October 2026. The Main Event & Final Pitch takes place on 26th October 2026.',
    },
    {
      q: 'What are the registration fees per category?',
      a: 'UG & PG Students: ₹300 | Ph.D. Scholars: ₹500 | Faculty Members: ₹700 | Industry Persons: ₹1000.',
    },
    {
      q: 'What rewards and funding opportunities are available?',
      a: 'A total prize pool of ₹50,000 across 5 category awards (₹10,000 each). Selected ideas can also receive funding, mentorship, product development support, and commercialization from R. Shivakumar Foundation. Certificates provided to all participants.',
    },
    {
      q: 'Where will the event be hosted?',
      a: 'The event is hosted at SRM Institute of Science & Technology, Tiruchirappalli (Trichy), jointly organized by Department of Food Technology and Institute of Hotel Management.',
    },
    {
      q: 'Who can I contact for queries?',
      a: 'Reach out to Dr. M. Maria Leena (marialeena.m@ist.srmtrichy.edu.in) or Mr. Prince Antony (vp.admin.ihm@ist.srmtrichy.edu.in).',
    },
  ],
}

export const REGISTER = {
  label: 'Register Now',
  title: 'Reserve Your Team Station',
  description: 'Form a team of 3 to 5 members and select your participation category.',
  categories: [
    { value: 'ug_pg', label: 'UG & PG Students (₹300)' },
    { value: 'phd', label: 'Ph.D. Scholars (₹500)' },
    { value: 'faculty', label: 'Faculty Members (₹700)' },
    { value: 'industry', label: 'Industry Persons (₹1000)' },
  ],
  teamSizes: ['3 Members', '4 Members', '5 Members'],
}

export const FOOTER = {
  organizers: [
    'Dr. R. Shivakumar Foundation',
    'SRM Institute of Science & Technology',
    'Department of Food Technology',
    'Institute of Hotel Management',
    'Future Food Forum',
  ],
  contactEmails: [
    { name: 'Dr. M. Maria Leena', email: 'marialeena.m@ist.srmtrichy.edu.in' },
    { name: 'Mr. Prince Antony', email: 'vp.admin.ihm@ist.srmtrichy.edu.in' },
  ],
  signoff: 'IDEA 2 PLATE',
}

