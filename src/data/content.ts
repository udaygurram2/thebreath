export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  quote: string;
  role?: string;
  image?: string;
}

const content = {
  brand: {
    name: "Breathe",
    tagline: "Nature-Inspired Spaces, Designed for You",
    description: "We create personalized plant experiences that transform spaces and improve wellbeing.",
    yearFounded: 2020,
    logo: "leaf"
  },
  navigation: {
    links: [
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
      { name: "Maintenance", path: "/maintenance" },
      { name: "Gallery", path: "/gallery" },
      { name: "Shop", path: "/shop" },
      { name: "About", path: "/about" },
      { name: "Contact", path: "/contact" },
      { name: "Book", path: "/book" }
    ]
  },
  home: {
    hero: {
      title: "Nature-Inspired Spaces, Designed for You",
      subtitle: "Transform your environment with custom greenery solutions",
      cta: "Let's Start Greening",
      image: "https://res.cloudinary.com/udaygurram/image/upload/v1747243987/2151022047_nht41k.jpg"
    },
    featuredProjects: [
      {
        title: "Urban Balcony Jungle",
        image: "https://res.cloudinary.com/udaygurram/image/upload/v1747244096/132097_ohfggd.jpg"
      },
      {
        title: "Zen Office Corners",
        image: "https://images.pexels.com/photos/3049121/pexels-photo-3049121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      },
      {
        title: "Living Room Oasis",
        image: "https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      },
      {
        title: "Restaurant Green Walls",
        image: "https://images.pexels.com/photos/6213676/pexels-photo-6213676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      },
      {
        title: "Bedroom Sanctuaries",
        image: "https://images.pexels.com/photos/6957084/pexels-photo-6957084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      },
      {
        title: "Kitchen Herb Gardens",
        image: "https://images.pexels.com/photos/6231898/pexels-photo-6231898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      }
    ],
    quote: {
      text: "In nature's simplicity, we find the most profound beauty.",
      author: "Breathe Design Team"
    },
    greenGoals: {
      title: "Green Goals, Your Way",
      description: "Tell us your vision, and we'll bring it to life with plants that match your space, style, and maintenance level.",
      goals: [
        { icon: "home", text: "Beautify Home Spaces" },
        { icon: "building", text: "Enhance Workplaces" },
        { icon: "heart", text: "Improve Wellbeing" },
        { icon: "leaf", text: "Promote Sustainability" }
      ],
      cta: "Find Your Green Style"
    },
    breatheDifference: {
      title: "The Breathe Difference",
      items: [
        {
          title: "Expertly Curated",
          description: "Plants selected by design and botanical experts for your specific space and needs.",
          icon: "award"
        },
        {
          title: "Sustainable Practices",
          description: "Eco-friendly approaches from sourcing to installation and maintenance.",
          icon: "recycle"
        },
        {
          title: "Ongoing Support",
          description: "We don't just install and leave - we help your green spaces thrive long-term.",
          icon: "helping-hand"
        }
      ]
    },
    whyChoose: {
      title: "Why Choose Breathe",
      items: [
        {
          title: "Personalized Design",
          description: "Custom solutions tailored to your space, style, and maintenance abilities.",
          image: "https://images.pexels.com/photos/4503273/pexels-photo-4503273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
          title: "Wellness Focus",
          description: "Plants selected to improve air quality and create calming environments.",
          image: "https://images.pexels.com/photos/4503815/pexels-photo-4503815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
          title: "Expert Knowledge",
          description: "Years of experience in botany, design, and plant care.",
          image: "https://images.pexels.com/photos/5417639/pexels-photo-5417639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
          title: "Ongoing Support",
          description: "Maintenance plans to keep your greenery thriving year-round.",
          image: "https://res.cloudinary.com/udaygurram/image/upload/v1747669035/male-gardener-s-hand-holding-cactus-plant-red-rack_yanlfu.jpg"
        }
      ]
    }
  },
  services: {
    hero: {
      title: "Our Services",
      subtitle: "From concept to creation, we transform spaces with greenery",
      image: "https://images.pexels.com/photos/3049121/pexels-photo-3049121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    intro: "At Breathe, we offer comprehensive plant styling services for homes, offices, and commercial spaces. Our expert team creates custom greenery solutions that blend beauty with functionality.",
    servicesList: [
      {
        id: "indoor-plantation",
        title: "Indoor Plantation",
        description: "Transform your indoor spaces with carefully selected plants that enhance aesthetics and improve air quality. We consider light conditions, space constraints, and your maintenance preferences.",
        icon: "flower",
        image: "https://images.pexels.com/photos/1084188/pexels-photo-1084188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      },
      {
        id: "landscaping",
        title: "Landscaping",
        description: "Create outdoor spaces that invite relaxation and connection with nature. Our landscaping services include garden design, installation, and seasonal adjustments for year-round beauty.",
        icon: "palmtree",
        image: "https://images.pexels.com/photos/1477166/pexels-photo-1477166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      },
      {
        id: "vertical-gardening",
        title: "Vertical Gardening",
        description: "Maximize your space with stunning living walls that serve as natural art installations. Our vertical gardens can be customized for interior or exterior application.",
        icon: "layout-panel-left",
        image: "https://images.pexels.com/photos/6213676/pexels-photo-6213676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      },
      {
        id: "home-agriculture",
        title: "Home Agriculture",
        description: "Grow your own organic produce with our custom edible gardens. We design and install vegetable, herb, and fruit gardens that are both beautiful and productive.",
        icon: "sprout",
        image: "https://images.pexels.com/photos/6231898/pexels-photo-6231898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      },
      {
        id: "plant-design",
        title: "Plant Design",
        description: "Our signature service combines botanical expertise with interior design principles to create cohesive, thoughtfully styled plant arrangements that complement your existing décor.",
        icon: "pencil-ruler",
        image: "https://images.pexels.com/photos/1431324/pexels-photo-1431324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      }
    ],
    process: {
      title: "Our Process",
      steps: [
        {
          number: 1,
          title: "Consultation",
          description: "We meet to understand your space, preferences, and maintenance capacity."
        },
        {
          number: 2,
          title: "Design",
          description: "Our team creates a custom plan for your greenery installation."
        },
        {
          number: 3,
          title: "Installation",
          description: "Expert installation with minimal disruption to your space."
        },
        {
          number: 4,
          title: "Maintenance",
          description: "Ongoing support to ensure your plants thrive long-term."
        }
      ]
    }
  },
  maintenance: {
    hero: {
      title: "Plant Maintenance",
      subtitle: "Keeping your green spaces thriving year-round",
      image: "https://images.pexels.com/photos/4505151/pexels-photo-4505151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    intro: "Our professional maintenance services ensure your plants remain healthy and beautiful throughout the seasons, whether you've worked with us for installation or have existing greenery that needs care.",
    plans: [
      {
        title: "Essential Care",
        frequency: "Monthly",
        services: ["Plant health checks", "Watering adjustment", "Basic pruning", "Fertilization"],
        description: "Perfect for low-maintenance installations or busy plant owners who need regular professional oversight.",
        image: "https://images.pexels.com/photos/4505460/pexels-photo-4505460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      },
      {
        title: "Premium Care",
        frequency: "Bi-weekly",
        services: ["All Essential services", "Pest management", "Plant rotation", "Seasonal adjustments", "Replacement recommendations"],
        description: "Ideal for extensive installations or collectors with valuable specimens requiring careful monitoring.",
        image: "https://images.pexels.com/photos/4503818/pexels-photo-4503818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      },
      {
        title: "Complete Care",
        frequency: "Weekly",
        services: ["All Premium services", "Complete plant grooming", "Seasonal refreshes", "New additions consulting", "24/7 plant emergency support"],
        description: "Our most comprehensive plan for showpiece installations or clients who want the absolute best for their botanical investments.",
        image: "https://images.pexels.com/photos/4503751/pexels-photo-4503751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      }
    ],
    faq: [
      {
        question: "Do I need professional maintenance for my plants?",
        answer: "While many plants can thrive with basic care, professional maintenance ensures optimal health, early detection of issues, and expert solutions to problems that might arise. It's particularly valuable for rare specimens, extensive collections, or when you lack the time for proper care."
      },
      {
        question: "How often will you visit my space?",
        answer: "Our maintenance schedules range from weekly to monthly visits, depending on your needs and the requirements of your plants. We'll help you determine the ideal frequency during our initial consultation."
      },
      {
        question: "What happens if a plant dies?",
        answer: "If a plant fails despite proper care, we'll diagnose the issue and recommend a suitable replacement. Our Premium and Complete plans include replacement recommendations and assistance."
      },
      {
        question: "Can you maintain plants I purchased elsewhere?",
        answer: "Absolutely! We provide maintenance for any plants, regardless of where they were purchased. Our experts will assess your existing greenery and create a customized care plan."
      }
    ]
  },
  gallery: {
    hero: {
      title: "Our Gallery",
      subtitle: "A showcase of our plant styling and design work",
      image: "https://images.pexels.com/photos/1084188/pexels-photo-1084188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    categories: ["All", "Indoor", "Outdoor", "Corporate", "Terrace"],
    items: [
      {
        id: "gallery-1",
        title: "Minimalist Living Room",
        category: "Indoor",
        image: "https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        description: "Clean lines and statement plants transform this contemporary living space."
      },
      {
        id: "gallery-2",
        title: "Creative Office Space",
        category: "Corporate",
        image: "https://images.pexels.com/photos/3049121/pexels-photo-3049121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        description: "Biophilic design principles create a productive yet calming workspace."
      },
      {
        id: "gallery-3",
        title: "Urban Terrace Garden",
        category: "Terrace",
        image: "https://images.pexels.com/photos/1084188/pexels-photo-1084188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        description: "Maximizing a small outdoor space with strategic container planting."
      },
      {
        id: "gallery-4",
        title: "Botanical Restaurant",
        category: "Corporate",
        image: "https://images.pexels.com/photos/6213676/pexels-photo-6213676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        description: "Living walls and suspended planters create an immersive dining experience."
      },
      {
        id: "gallery-5",
        title: "Meditation Garden",
        category: "Outdoor",
        image: "https://images.pexels.com/photos/1477166/pexels-photo-1477166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        description: "A serene outdoor retreat designed for mindfulness and relaxation."
      },
      {
        id: "gallery-6",
        title: "Kitchen Herb Wall",
        category: "Indoor",
        image: "https://images.pexels.com/photos/6231898/pexels-photo-6231898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        description: "Functional and beautiful vertical herb garden for a home chef."
      },
      {
        id: "gallery-7",
        title: "Executive Office",
        category: "Corporate",
        image: "https://images.pexels.com/photos/4503273/pexels-photo-4503273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        description: "Sophisticated plant styling for a high-level corporate environment."
      },
      {
        id: "gallery-8",
        title: "Courtyard Transformation",
        category: "Outdoor",
        image: "https://images.pexels.com/photos/4505151/pexels-photo-4505151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        description: "Converting an unused outdoor area into a lush garden retreat."
      },
      {
        id: "gallery-9",
        title: "Plant-Filled Bedroom",
        category: "Indoor",
        image: "https://images.pexels.com/photos/6957084/pexels-photo-6957084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        description: "Creating a sleep sanctuary with air-purifying plants."
      },
      {
        id: "gallery-10",
        title: "Rooftop Oasis",
        category: "Terrace",
        image: "https://images.pexels.com/photos/4503751/pexels-photo-4503751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        description: "Urban rooftop transformed with container gardens and lounge areas."
      },
      {
        id: "gallery-11",
        title: "Hotel Lobby",
        category: "Corporate",
        image: "https://images.pexels.com/photos/5699665/pexels-photo-5699665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        description: "Statement plants create a memorable first impression in this hotel entrance."
      },
      {
        id: "gallery-12",
        title: "Bohemian Living Room",
        category: "Indoor",
        image: "https://images.pexels.com/photos/945688/pexels-photo-945688.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        description: "Eclectic plant styling complements bohemian interior design."
      }
    ]
  },
  about: {
    hero: {
      title: "About Breathe",
      subtitle: "Our story, mission, and the people behind the plants",
      image: "https://images.pexels.com/photos/5699665/pexels-photo-5699665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    story: {
      title: "Our Story",
      paragraphs: [
        "Breathe began in 2020 when our founders, passionate plant enthusiasts and designers, recognized the growing disconnect between people and nature in urban environments.",
        "What started as a small plant styling service has grown into a comprehensive greenery design company, helping hundreds of clients bring the healing power of plants into their homes and workplaces.",
        "Our approach combines botanical expertise with interior design principles, creating spaces that are not only beautiful but contribute to wellbeing and environmental health."
      ],
      image: "https://images.pexels.com/photos/5699665/pexels-photo-5699665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    mission: {
      title: "Our Mission",
      text: "To reconnect people with nature through thoughtfully designed plant experiences that enhance wellbeing, beautify spaces, and promote environmental consciousness."
    },
    values: [
      {
        title: "Sustainability",
        description: "We prioritize eco-friendly practices in every aspect of our business.",
        icon: "recycle"
      },
      {
        title: "Expertise",
        description: "Our team combines knowledge in botany, design, and maintenance.",
        icon: "badge"
      },
      {
        title: "Creativity",
        description: "We approach each project with fresh ideas and innovative solutions.",
        icon: "palette"
      },
      {
        title: "Wellbeing",
        description: "We believe in the power of plants to improve physical and mental health.",
        icon: "heart-handshake"
      }
    ],
    team: [
      {
        id: "team-1",
        name: "Jordan Rivera",
        role: "Founder & Creative Director",
        bio: "With a background in landscape architecture and interior design, Jordan brings a holistic approach to plant styling that balances aesthetics with functionality.",
        image: "https://images.pexels.com/photos/5717032/pexels-photo-5717032.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      },
      {
        id: "team-2",
        name: "Morgan Chen",
        role: "Head Botanist",
        bio: "Morgan's extensive knowledge of plant species, care requirements, and habitat needs ensures our installations thrive in any environment.",
        image: "https://images.pexels.com/photos/5712847/pexels-photo-5712847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      },
      {
        id: "team-3",
        name: "Alex Washington",
        role: "Design Specialist",
        bio: "Combining a passion for biophilic design with years of experience in visual merchandising, Alex creates plant arrangements that tell a story.",
        image: "https://images.pexels.com/photos/5199158/pexels-photo-5199158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      },
      {
        id: "team-4",
        name: "Sam Patel",
        role: "Maintenance Lead",
        bio: "Sam ensures our installations remain beautiful long after installation, developing customized care plans for each client's unique needs.",
        image: "https://images.pexels.com/photos/8364178/pexels-photo-8364178.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      }
    ]
  },
  contact: {
    hero: {
      title: "Contact Us",
      subtitle: "Reach out to start your green transformation",
      image: "https://images.pexels.com/photos/6957084/pexels-photo-6957084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    info: {
      email: "hello@thebreathe.com",
      phone: "+91-9440598639",
      address: "Hyderabad",
      hours: "Monday-Friday: 9am-6pm | Saturday: 10am-4pm | Sunday: Closed"
    },
    formFields: [
      { id: "name", label: "Your Name", type: "text", required: true },
      { id: "email", label: "Email Address", type: "email", required: true },
      { id: "phone", label: "Phone Number", type: "tel", required: false },
      { id: "subject", label: "Subject", type: "text", required: true },
      { id: "message", label: "Your Message", type: "textarea", required: true }
    ],
    socialMedia: [
      { platform: "Instagram", icon: "instagram", url: "https://instagram.com" },
      { platform: "Facebook", icon: "facebook", url: "https://facebook.com" },
      { platform: "Pinterest", icon: "pinterest", url: "https://pinterest.com" }
    ],
   
  },
  book: {
    hero: {
      title: "Book a Consultation",
      subtitle: "The first step toward your green transformation",
      image: "https://images.pexels.com/photos/4503818/pexels-photo-4503818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    intro: "Our personalized consultations help us understand your space, style preferences, and plant care capacity. This important first step allows us to create a customized greenery plan that's perfect for you.",
    formFields: [
      { id: "name", label: "Your Name", type: "text", required: true },
      { id: "email", label: "Email Address", type: "email", required: true },
      { id: "phone", label: "Phone Number", type: "tel", required: true },
      { id: "projectType", label: "Project Type", type: "select", required: true, 
        options: ["Home Styling", "Office/Commercial", "Outdoor/Landscaping", "Maintenance", "Other"] },
      { id: "budget", label: "Budget Range", type: "select", required: true, 
        options: ["$500-$1,000", "$1,000-$2,500", "$2,500-$5,000", "$5,000+"] },
      { id: "timeline", label: "Desired Timeline", type: "select", required: true, 
        options: ["Within 2 weeks", "Within a month", "Within 3 months", "Flexible"] },
      { id: "details", label: "Project Details", type: "textarea", required: true },
      { id: "referral", label: "How did you hear about us?", type: "text", required: false }
    ],
    consultationTypes: [
      {
        title: "Virtual Consultation",
        description: "A 30-minute video call to discuss your space and initial ideas.",
        price: "$50 (applied to your project if you proceed)",
        icon: "video"
      },
      {
        title: "In-Home Assessment",
        description: "An in-person visit to evaluate your space and discuss possibilities in detail.",
        price: "$150 (applied to your project if you proceed)",
        icon: "home"
      },
      {
        title: "Commercial Site Evaluation",
        description: "A comprehensive assessment of your business space with preliminary recommendations.",
        price: "Starting at $250 (applied to your project if you proceed)",
        icon: "building"
      }
    ]
  },
  footer: {
    tagline: "Bringing nature indoors, one space at a time.",
    newsletter: {
      title: "Join our green community",
      description: "Subscribe for plant care tips, design inspiration, and exclusive offers.",
      placeholder: "Your email address"
    },
    quickLinks: [
      { name: "Plant Care Guides", url: "#" },
      { name: "Sustainability Commitment", url: "#" },
      { name: "Careers", url: "#" },
      { name: "Press", url: "#" },
      { name: "Privacy Policy", url: "#" },
      { name: "Terms of Service", url: "#" }
    ],
    copyright: "© 2025 Breathe Plant Styling. All rights reserved."
  }
};

export default content;