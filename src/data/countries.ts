export interface Country {
  id: string;
  name: string;
  flag: string;
  flagEmoji: string;
  description: string;
  image: string;
  overview: string;
  visaTypes: string[];
  touristPlaces: {
    name: string;
    description: string;
  }[];
  universities: {
    name: string;
    ranking: string;
    specialization: string;
  }[];
  documents: string[];
  whyChoose: string[];
  processTimeline: {
    step: string;
    description: string;
    duration: string;
  }[];
}

export const countries: Country[] = [
  {
    id: "canada",
    name: "Canada",
    flag: "🇨🇦",
    flagEmoji: "🇨🇦",
    description: "Experience world-class education and multicultural society in Canada",
    image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=800&h=600&fit=crop",
    overview: "Canada offers excellent opportunities for immigration through various programs including Express Entry, Provincial Nominee Programs, and Study Permits. Known for its high quality of life, excellent healthcare system, and welcoming immigration policies.",
    visaTypes: [
      "Express Entry (Federal Skilled Worker)",
      "Provincial Nominee Program (PNP)",
      "Study Permit",
      "Work Permit",
      "Family Sponsorship",
      "Business Immigration"
    ],
    touristPlaces: [
      {
        name: "Niagara Falls",
        description: "One of the world's most famous waterfalls, located on the border between Ontario and New York."
      },
      {
        name: "Banff National Park",
        description: "Stunning mountain landscapes, glacial lakes, and wildlife in the Canadian Rockies."
      },
      {
        name: "Toronto CN Tower",
        description: "Iconic landmark and observation tower offering panoramic views of Toronto."
      },
      {
        name: "Quebec City",
        description: "Historic European-style city with cobblestone streets and French culture."
      }
    ],
    universities: [
      {
        name: "University of Toronto",
        ranking: "#21 QS World Ranking",
        specialization: "Medicine, Engineering, Business"
      },
      {
        name: "McGill University",
        ranking: "#27 QS World Ranking",
        specialization: "Medicine, Law, Sciences"
      },
      {
        name: "University of British Columbia",
        ranking: "#46 QS World Ranking",
        specialization: "Engineering, Business, Sciences"
      }
    ],
    documents: [
      "Valid Passport",
      "Educational Credentials Assessment (ECA)",
      "IELTS/CELPIP English Test Results",
      "Police Clearance Certificate",
      "Medical Examination",
      "Proof of Funds",
      "Work Experience Letters",
      "Reference Letters"
    ],
    whyChoose: [
      "High quality of life and safety",
      "Universal healthcare system",
      "Excellent education system",
      "Multicultural and welcoming society",
      "Strong economy with job opportunities",
      "Path to permanent residency and citizenship",
      "Beautiful natural landscapes",
      "Social benefits and worker rights"
    ],
    processTimeline: [
      {
        step: "Initial Consultation",
        description: "Assessment of eligibility and program selection",
        duration: "1-2 days"
      },
      {
        step: "Document Collection",
        description: "Gathering and preparation of required documents",
        duration: "2-4 weeks"
      },
      {
        step: "Language Test",
        description: "IELTS/CELPIP test booking and completion",
        duration: "2-3 weeks"
      },
      {
        step: "Application Submission",
        description: "Submitting complete application to immigration authorities",
        duration: "1 week"
      },
      {
        step: "Processing & Decision",
        description: "Government processing and final decision",
        duration: "6-12 months"
      }
    ]
  },
  {
    id: "australia",
    name: "Australia",
    flag: "🇦🇺",
    flagEmoji: "🇦🇺",
    description: "Discover endless opportunities in the land down under",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    overview: "Australia offers excellent opportunities through its SkillSelect system, student visas, and employer-sponsored programs. Known for its laid-back lifestyle, excellent weather, and strong economy.",
    visaTypes: [
      "Skilled Independent Visa (189)",
      "Skilled Nominated Visa (190)",
      "Student Visa (500)",
      "Temporary Skill Shortage Visa (482)",
      "Employer Nomination Scheme (186)",
      "Partner Visa (820/801)"
    ],
    touristPlaces: [
      {
        name: "Sydney Opera House",
        description: "Iconic architectural masterpiece and UNESCO World Heritage Site."
      },
      {
        name: "Great Barrier Reef",
        description: "World's largest coral reef system, perfect for diving and snorkeling."
      },
      {
        name: "Uluru (Ayers Rock)",
        description: "Sacred Aboriginal site and impressive monolith in the heart of Australia."
      },
      {
        name: "Melbourne Cultural Scene",
        description: "Vibrant arts, coffee culture, and diverse neighborhoods."
      }
    ],
    universities: [
      {
        name: "Australian National University",
        ranking: "#30 QS World Ranking",
        specialization: "Politics, International Relations, Sciences"
      },
      {
        name: "University of Melbourne",
        ranking: "#33 QS World Ranking",
        specialization: "Medicine, Law, Education"
      },
      {
        name: "University of Sydney",
        ranking: "#41 QS World Ranking",
        specialization: "Medicine, Engineering, Business"
      }
    ],
    documents: [
      "Valid Passport",
      "Skills Assessment",
      "IELTS/PTE English Test Results",
      "Police Clearance Certificate",
      "Health Examination",
      "Educational Qualifications",
      "Work Experience Evidence",
      "Character References"
    ],
    whyChoose: [
      "High standard of living",
      "Strong job market and economy",
      "Excellent climate and beaches",
      "World-class education system",
      "Multicultural society",
      "Strong social security system",
      "Beautiful natural environment",
      "Safe and stable political environment"
    ],
    processTimeline: [
      {
        step: "Skills Assessment",
        description: "Professional skills evaluation by relevant authority",
        duration: "2-3 months"
      },
      {
        step: "English Test",
        description: "IELTS/PTE test completion",
        duration: "2-4 weeks"
      },
      {
        step: "Expression of Interest",
        description: "Submit EOI through SkillSelect system",
        duration: "1 week"
      },
      {
        step: "Invitation & Application",
        description: "Receive invitation and submit full application",
        duration: "2-3 months"
      },
      {
        step: "Decision",
        description: "Final processing and visa grant",
        duration: "6-8 months"
      }
    ]
  },
  {
    id: "newzealand",
    name: "New Zealand",
    flag: "🇳🇿",
    flagEmoji: "🇳🇿",
    description: "Experience the adventure and beauty of New Zealand",
    image: "https://images.unsplash.com/photo-1507699622107-4be3abd695ad?w=800&h=600&fit=crop",
    overview: "New Zealand offers immigration through its Skilled Migrant Category, work visas, and student visas. Known for its stunning landscapes, friendly people, and excellent work-life balance.",
    visaTypes: [
      "Skilled Migrant Category",
      "Work to Residence Visa",
      "Student Visa",
      "Working Holiday Visa",
      "Entrepreneur Work Visa",
      "Family Category Visa"
    ],
    touristPlaces: [
      {
        name: "Milford Sound",
        description: "Breathtaking fjord with waterfalls and dramatic mountain scenery."
      },
      {
        name: "Rotorua",
        description: "Geothermal wonderland with hot springs and Maori culture."
      },
      {
        name: "Queenstown",
        description: "Adventure capital with bungee jumping, skiing, and stunning lakes."
      },
      {
        name: "Bay of Islands",
        description: "Beautiful coastal region with islands, beaches, and marine life."
      }
    ],
    universities: [
      {
        name: "University of Auckland",
        ranking: "#68 QS World Ranking",
        specialization: "Engineering, Medicine, Business"
      },
      {
        name: "University of Otago",
        ranking: "#217 QS World Ranking",
        specialization: "Medicine, Dentistry, Sciences"
      },
      {
        name: "Victoria University of Wellington",
        ranking: "#275 QS World Ranking",
        specialization: "Law, Public Policy, Creative Arts"
      }
    ],
    documents: [
      "Valid Passport",
      "Educational Qualifications",
      "IELTS English Test Results",
      "Police Certificates",
      "Medical Certificates",
      "Evidence of Funds",
      "Job Offer (if applicable)",
      "Character References"
    ],
    whyChoose: [
      "Stunning natural beauty",
      "Excellent work-life balance",
      "Safe and peaceful environment",
      "Strong economy",
      "English-speaking country",
      "Outdoor lifestyle opportunities",
      "Friendly and welcoming people",
      "Path to permanent residency"
    ],
    processTimeline: [
      {
        step: "Initial Assessment",
        description: "Evaluate eligibility and points calculation",
        duration: "1-2 weeks"
      },
      {
        step: "Document Preparation",
        description: "Collect and prepare required documents",
        duration: "4-6 weeks"
      },
      {
        step: "Expression of Interest",
        description: "Submit EOI and wait for invitation",
        duration: "2-6 months"
      },
      {
        step: "Application Submission",
        description: "Submit full residency application",
        duration: "2 weeks"
      },
      {
        step: "Processing",
        description: "Immigration processing and decision",
        duration: "6-12 months"
      }
    ]
  },
  {
    id: "usa",
    name: "United States",
    flag: "🇺🇸", 
    flagEmoji: "🇺🇸",
    description: "Pursue the American dream with endless opportunities",
    image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=800&h=600&fit=crop",
    overview: "The USA offers various immigration pathways including employment-based visas, family sponsorship, and investment visas. Home to world's leading universities and companies.",
    visaTypes: [
      "H-1B Work Visa",
      "EB-5 Investor Visa",
      "F-1 Student Visa",
      "O-1 Extraordinary Ability",
      "L-1 Intracompany Transfer",
      "Family-Based Immigration"
    ],
    touristPlaces: [
      {
        name: "Statue of Liberty",
        description: "Iconic symbol of freedom and democracy in New York Harbor."
      },
      {
        name: "Grand Canyon",
        description: "Breathtaking natural wonder and UNESCO World Heritage Site."
      },
      {
        name: "Yellowstone National Park",
        description: "First national park with geysers, wildlife, and natural beauty."
      },
      {
        name: "Golden Gate Bridge",
        description: "Iconic suspension bridge and symbol of San Francisco."
      }
    ],
    universities: [
      {
        name: "Massachusetts Institute of Technology",
        ranking: "#1 QS World Ranking",
        specialization: "Engineering, Technology, Sciences"
      },
      {
        name: "Harvard University",
        ranking: "#3 QS World Ranking",
        specialization: "Medicine, Law, Business"
      },
      {
        name: "Stanford University",
        ranking: "#5 QS World Ranking",
        specialization: "Engineering, Business, Computer Science"
      }
    ],
    documents: [
      "Valid Passport",
      "Educational Transcripts",
      "TOEFL/IELTS Test Scores",
      "Financial Documents",
      "Employment Letters",
      "Police Clearance",
      "Medical Examination",
      "Sponsor Documents (if applicable)"
    ],
    whyChoose: [
      "World's largest economy",
      "Leading universities and research",
      "Diverse career opportunities",
      "Innovation and entrepreneurship hub",
      "Cultural diversity",
      "Advanced healthcare system",
      "English-speaking environment",
      "Global business connections"
    ],
    processTimeline: [
      {
        step: "Visa Category Selection",
        description: "Determine appropriate visa category",
        duration: "1 week"
      },
      {
        step: "Petition Filing",
        description: "File petition with USCIS",
        duration: "2-4 weeks"
      },
      {
        step: "USCIS Processing",
        description: "Wait for petition approval",
        duration: "6-18 months"
      },
      {
        step: "Consular Processing",
        description: "Interview at US Embassy/Consulate",
        duration: "2-4 months"
      },
      {
        step: "Visa Issuance",
        description: "Receive visa and plan travel",
        duration: "1-2 weeks"
      }
    ]
  },
  {
    id: "uk",
    name: "United Kingdom",
    flag: "🇬🇧",
    flagEmoji: "🇬🇧",
    description: "Study and work in the historic and prestigious UK",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=600&fit=crop",
    overview: "The UK offers various visa routes including the Points-Based System, Student visas, and Family visas. Home to world-renowned universities and rich cultural heritage.",
    visaTypes: [
      "Skilled Worker Visa",
      "Student Visa",
      "Graduate Visa",
      "Global Talent Visa",
      "Innovator Founder Visa",
      "Family Visa"
    ],
    touristPlaces: [
      {
        name: "Big Ben & Houses of Parliament",
        description: "Iconic clock tower and seat of British government in London."
      },
      {
        name: "Edinburgh Castle",
        description: "Historic fortress dominating Edinburgh's skyline in Scotland."
      },
      {
        name: "Stonehenge",
        description: "Mysterious prehistoric monument and UNESCO World Heritage Site."
      },
      {
        name: "Lake District",
        description: "Beautiful national park with lakes, mountains, and literary heritage."
      }
    ],
    universities: [
      {
        name: "University of Cambridge",
        ranking: "#2 QS World Ranking",
        specialization: "Sciences, Engineering, Medicine"
      },
      {
        name: "University of Oxford",
        ranking: "#4 QS World Ranking",
        specialization: "Humanities, Sciences, Medicine"
      },
      {
        name: "Imperial College London",
        ranking: "#6 QS World Ranking",
        specialization: "Engineering, Medicine, Business"
      }
    ],
    documents: [
      "Valid Passport",
      "Educational Certificates",
      "IELTS/UKVI Test Results",
      "Tuberculosis Test Results",
      "Financial Evidence",
      "Job Offer Letter (if applicable)",
      "Sponsor Documents",
      "Criminal Record Certificate"
    ],
    whyChoose: [
      "World-class education system",
      "Rich history and culture", 
      "Gateway to Europe",
      "English-speaking country",
      "Strong economy and job market",
      "Excellent healthcare (NHS)",
      "Diverse and multicultural",
      "Short course durations"
    ],
    processTimeline: [
      {
        step: "Visa Type Selection",
        description: "Choose appropriate visa category",
        duration: "1 week"
      },
      {
        step: "Document Collection",
        description: "Gather required documents and evidence",
        duration: "3-4 weeks"
      },
      {
        step: "Online Application",
        description: "Complete online visa application",
        duration: "1 week"
      },
      {
        step: "Biometrics & Interview",
        description: "Attend biometric appointment",
        duration: "1-2 weeks"
      },
      {
        step: "Decision",
        description: "Receive visa decision",
        duration: "3-8 weeks"
      }
    ]
  },
  {
    id: "europe",
    name: "Europe",
    flag: "🇪🇺",
    flagEmoji: "🇪🇺",
    description: "Explore diverse cultures and opportunities across Europe",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&h=600&fit=crop",
    overview: "Europe offers various opportunities through EU Blue Card, national work permits, and student visas across 27 EU countries. Experience diverse cultures, excellent education, and strong economies.",
    visaTypes: [
      "EU Blue Card",
      "National Work Permit",
      "Student Visa",
      "Business/Investment Visa",
      "Family Reunification",
      "Job Seeker Visa"
    ],
    touristPlaces: [
      {
        name: "Eiffel Tower, Paris",
        description: "Iconic iron lattice tower and symbol of France."
      },
      {
        name: "Colosseum, Rome",
        description: "Ancient amphitheater and symbol of Imperial Rome."
      },
      {
        name: "Neuschwanstein Castle, Germany",
        description: "Fairy-tale castle in the Bavarian Alps."
      },
      {
        name: "Sagrada Familia, Barcelona",
        description: "Gaudí's masterpiece basilica under construction since 1882."
      }
    ],
    universities: [
      {
        name: "ETH Zurich, Switzerland",
        ranking: "#7 QS World Ranking",
        specialization: "Engineering, Technology, Sciences"
      },
      {
        name: "Sorbonne University, France",
        ranking: "#60 QS World Ranking",
        specialization: "Arts, Humanities, Sciences"
      },
      {
        name: "Technical University of Munich",
        ranking: "#37 QS World Ranking",
        specialization: "Engineering, Technology"
      }
    ],
    documents: [
      "Valid Passport",
      "Educational Qualifications",
      "Language Proficiency Test",
      "Health Insurance",
      "Financial Proof",
      "Employment Contract (if applicable)",
      "Accommodation Proof",
      "Criminal Background Check"
    ],
    whyChoose: [
      "Access to 27 EU countries",
      "Rich cultural heritage",
      "Excellent public transportation",
      "High quality of life",
      "Strong social benefits",
      "Diverse languages and cultures",
      "Central location for travel",
      "Innovation and technology hubs"
    ],
    processTimeline: [
      {
        step: "Country Selection",
        description: "Choose target EU country",
        duration: "1 week"
      },
      {
        step: "Document Preparation",
        description: "Collect country-specific documents",
        duration: "4-6 weeks"
      },
      {
        step: "Application Submission",
        description: "Submit visa application",
        duration: "1-2 weeks"
      },
      {
        step: "Processing",
        description: "Embassy/consulate processing",
        duration: "2-3 months"
      },
      {
        step: "Decision & Travel",
        description: "Receive decision and plan travel",
        duration: "1-2 weeks"
      }
    ]
  },
  {
    id: "japan",
    name: "Japan",
    flag: "🇯🇵",
    flagEmoji: "🇯🇵",
    description: "Experience the perfect blend of tradition and innovation",
    image: "https://images.unsplash.com/photo-1480796927426-f609979314bd?w=800&h=600&fit=crop",
    overview: "Japan offers various visa categories including work visas, student visas, and the new Specified Skilled Worker visa. Known for its advanced technology, rich culture, and unique lifestyle.",
    visaTypes: [
      "Engineer/Specialist in Humanities Visa",
      "Specified Skilled Worker Visa",
      "Student Visa",
      "Working Holiday Visa",
      "Business/Investment Visa",
      "Highly Skilled Professional Visa"
    ],
    touristPlaces: [
      {
        name: "Mount Fuji",
        description: "Sacred mountain and symbol of Japan, UNESCO World Heritage Site."
      },
      {
        name: "Kyoto Temples",
        description: "Historic temples and traditional Japanese architecture."
      },
      {
        name: "Tokyo Skyline",
        description: "Modern metropolis with skyscrapers, technology, and culture."
      },
      {
        name: "Hiroshima Peace Memorial",
        description: "Memorial park dedicated to peace and remembrance."
      }
    ],
    universities: [
      {
        name: "University of Tokyo",
        ranking: "#23 QS World Ranking",
        specialization: "Engineering, Sciences, Medicine"
      },
      {
        name: "Kyoto University",
        ranking: "#36 QS World Ranking",
        specialization: "Sciences, Engineering, Medicine"
      },
      {
        name: "Waseda University",
        ranking: "#199 QS World Ranking",
        specialization: "Business, International Studies"
      }
    ],
    documents: [
      "Valid Passport",
      "Certificate of Eligibility",
      "Educational Certificates",
      "Japanese Language Proficiency (JLPT)",
      "Financial Documents",
      "Health Certificate",
      "Employment Contract (if applicable)",
      "Sponsor Documents"
    ],
    whyChoose: [
      "Advanced technology and innovation",
      "Rich cultural heritage",
      "Excellent public safety",
      "High-quality education system",
      "Unique lifestyle and experiences",
      "Strong economy",
      "Efficient transportation system",
      "Respectful and disciplined society"
    ],
    processTimeline: [
      {
        step: "Certificate of Eligibility",
        description: "Sponsor applies for COE in Japan",
        duration: "1-3 months"
      },
      {
        step: "Visa Application",
        description: "Apply for visa at Japanese consulate",
        duration: "1 week"
      },
      {
        step: "Processing",
        description: "Consulate processes visa application",
        duration: "5-10 days"
      },
      {
        step: "Visa Issuance",
        description: "Receive visa and plan travel",
        duration: "1 week"
      },
      {
        step: "Residence Card",
        description: "Obtain residence card upon arrival",
        duration: "Same day"
      }
    ]
  },
  {
    id: "singapore",
    name: "Singapore",
    flag: "🇸🇬",
    flagEmoji: "🇸🇬", 
    description: "Gateway to Asia with excellent business opportunities",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&h=600&fit=crop",
    overview: "Singapore offers various work passes and PR pathways for skilled professionals. Known as a global financial hub with excellent infrastructure and multicultural society.",
    visaTypes: [
      "Employment Pass (EP)",
      "S Pass",
      "Tech.Pass",
      "Student Pass",
      "EntrePass",
      "Dependent Pass"
    ],
    touristPlaces: [
      {
        name: "Marina Bay Sands",
        description: "Iconic hotel and casino with infinity pool and city views."
      },
      {
        name: "Gardens by the Bay",
        description: "Futuristic gardens with Supertrees and climate domes."
      },
      {
        name: "Sentosa Island",
        description: "Resort island with beaches, attractions, and entertainment."
      },
      {
        name: "Merlion Park",
        description: "National symbol statue at Marina Bay waterfront."
      }
    ],
    universities: [
      {
        name: "National University of Singapore",
        ranking: "#8 QS World Ranking",
        specialization: "Engineering, Business, Medicine"
      },
      {
        name: "Nanyang Technological University",
        ranking: "#15 QS World Ranking",
        specialization: "Engineering, Business, Sciences"
      },
      {
        name: "Singapore Management University",
        ranking: "#545 QS World Ranking",
        specialization: "Business, Management, Law"
      }
    ],
    documents: [
      "Valid Passport",
      "Educational Certificates",
      "Professional Qualifications",
      "Employment Letter",
      "Medical Examination",
      "Police Clearance",
      "Passport-sized Photos",
      "Financial Documents"
    ],
    whyChoose: [
      "Strategic location in Asia",
      "Strong economy and job market",
      "Excellent infrastructure",
      "Multicultural society",
      "English-speaking environment",
      "Low crime rate and safety",
      "Efficient government services",
      "Gateway to Southeast Asia"
    ],
    processTimeline: [
      {
        step: "Job Offer",
        description: "Secure employment offer from Singapore company",
        duration: "Variable"
      },
      {
        step: "Work Pass Application",
        description: "Employer applies for work pass",
        duration: "1-2 weeks"
      },
      {
        step: "In-Principle Approval",
        description: "Receive IPA letter",
        duration: "3-5 days"
      },
      {
        step: "Entry to Singapore",
        description: "Travel to Singapore with IPA",
        duration: "As planned"
      },
      {
        step: "Work Pass Collection",
        description: "Complete formalities and collect pass",
        duration: "1 day"
      }
    ]
  }
];