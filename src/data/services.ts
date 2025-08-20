export interface Service {
  id: string;
  title: string;
  icon: string;
  description: string;
  overview: string;
  features: string[];
  requirements: string[];
  process: {
    step: string;
    description: string;
    duration: string;
  }[];
  benefits: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  countries: string[];
  processingTime: string;
  successRate: string;
  color: string;
}

export const services: Service[] = [
  {
    id: "student-visas",
    title: "Student Visas",
    icon: "GraduationCap",
    description: "Complete guidance for study abroad programs, university applications, and student visa processing.",
    overview: "Our student visa services provide comprehensive support for students aspiring to study abroad. We help you navigate the complex application process, from university selection to visa approval, ensuring your educational dreams become reality.",
    features: ["University Selection", "Application Support", "Visa Documentation", "Scholarship Guidance"],
    requirements: [
      "Valid Passport",
      "Educational Transcripts & Certificates",
      "English Proficiency Test (IELTS/TOEFL/PTE)",
      "Statement of Purpose (SOP)",
      "Letters of Recommendation",
      "Financial Documents (Bank Statements, Sponsor Letters)",
      "Medical Examination Report",
      "Police Clearance Certificate"
    ],
    process: [
      {
        step: "Profile Assessment & Counseling",
        description: "Evaluate academic background and career goals to recommend suitable courses and universities",
        duration: "1-2 days"
      },
      {
        step: "University & Course Selection",
        description: "Shortlist universities based on profile, preferences, and budget",
        duration: "1 week"
      },
      {
        step: "Application Preparation",
        description: "Prepare and submit university applications with required documents",
        duration: "2-3 weeks"
      },
      {
        step: "Offer Letter & Acceptance",
        description: "Receive offer letters and accept admission from preferred university",
        duration: "4-8 weeks"
      },
      {
        step: "Visa Application",
        description: "Prepare and submit student visa application with all supporting documents",
        duration: "2-3 weeks"
      },
      {
        step: "Interview Preparation",
        description: "Mock interviews and guidance for visa interview (if required)",
        duration: "1 week"
      },
      {
        step: "Visa Approval & Pre-departure",
        description: "Receive visa approval and pre-departure briefing",
        duration: "2-4 weeks"
      }
    ],
    benefits: [
      "Access to world-class education and research facilities",
      "Opportunity to work part-time during studies",
      "Post-study work opportunities",
      "Pathway to permanent residency",
      "International exposure and cultural experience",
      "Enhanced career prospects and global network",
      "Potential for higher earning capacity",
      "Access to advanced technology and resources"
    ],
    faqs: [
      {
        question: "What is the minimum English language requirement?",
        answer: "Most universities require IELTS 6.0-7.0 or equivalent TOEFL/PTE scores. Requirements vary by university and program."
      },
      {
        question: "Can I work while studying?",
        answer: "Yes, most countries allow students to work part-time (usually 20 hours per week) during studies and full-time during breaks."
      },
      {
        question: "How much funds do I need to show?",
        answer: "Financial requirements vary by country and course. Generally, you need to show 1-2 years of tuition fees plus living expenses."
      },
      {
        question: "What is the processing time for student visa?",
        answer: "Processing time varies by country: UK (3-6 weeks), Canada (4-12 weeks), Australia (4-6 weeks), USA (2-8 weeks)."
      }
    ],
    countries: ["Canada", "Australia", "UK", "USA", "New Zealand", "Germany", "Ireland"],
    processingTime: "3-6 months",
    successRate: "95%",
    color: "bg-blue-500"
  },
  {
    id: "work-visas",
    title: "Work Visas",
    icon: "Briefcase",
    description: "Professional work visa assistance for skilled workers seeking employment opportunities abroad.",
    overview: "Our work visa services help skilled professionals secure employment opportunities abroad. We provide end-to-end support from skills assessment to visa approval, helping you build a successful international career.",
    features: ["Skills Assessment", "Job Search Support", "Work Permit Processing", "Employer Liaison"],
    requirements: [
      "Valid Passport",
      "Educational Qualifications & Transcripts",
      "Professional Skills Assessment",
      "English Proficiency Test Results",
      "Work Experience Letters",
      "Resume/CV in International Format",
      "Police Clearance Certificate",
      "Medical Examination",
      "Job Offer Letter (if applicable)"
    ],
    process: [
      {
        step: "Skills Assessment",
        description: "Evaluate qualifications and experience against international standards",
        duration: "2-3 months"
      },
      {
        step: "Job Search & Networking",
        description: "Assist with job applications and connect with potential employers",
        duration: "2-6 months"
      },
      {
        step: "Work Permit Application",
        description: "Prepare and submit work permit/visa application",
        duration: "1-2 months"
      },
      {
        step: "Processing & Approval",
        description: "Government processing and visa decision",
        duration: "2-6 months"
      },
      {
        step: "Pre-departure Support",
        description: "Travel arrangements and settlement guidance",
        duration: "2-4 weeks"
      }
    ],
    benefits: [
      "Higher salary potential and better working conditions",
      "International work experience and career growth",
      "Pathway to permanent residency",
      "Access to social benefits and healthcare",
      "Opportunity to bring family members",
      "Professional development and skills enhancement",
      "Global networking opportunities",
      "Better work-life balance"
    ],
    faqs: [
      {
        question: "Do I need a job offer before applying?",
        answer: "Some countries require a job offer (like USA H-1B), while others allow you to apply first and search for jobs later (like Canada Express Entry)."
      },
      {
        question: "What is skills assessment?",
        answer: "Skills assessment evaluates your qualifications and experience against the standards of your destination country's relevant authority."
      },
      {
        question: "Can my family accompany me?",
        answer: "Yes, most work visas allow you to include your spouse and dependent children in your application."
      },
      {
        question: "How long is a work visa valid?",
        answer: "Work visa validity varies: temporary visas (1-4 years) and permanent visas (indefinite with renewal requirements)."
      }
    ],
    countries: ["Canada", "Australia", "USA", "UK", "New Zealand", "Singapore"],
    processingTime: "4-8 months",
    successRate: "88%",
    color: "bg-green-500"
  },
  {
    id: "tourist-visitor-visas",
    title: "Tourist/Visitor Visas",
    icon: "Plane",
    description: "Hassle-free tourist and visitor visa services for leisure travel and business visits.",
    overview: "Our tourist and visitor visa services make your travel dreams come true. Whether it's a leisure trip, business visit, or meeting family, we ensure smooth visa processing with high success rates.",
    features: ["Document Preparation", "Interview Preparation", "Travel Itinerary", "Visa Tracking"],
    requirements: [
      "Valid Passport (6+ months validity)",
      "Completed Visa Application Form",
      "Recent Passport-size Photographs",
      "Bank Statements (3-6 months)",
      "Employment Letter & Salary Slips",
      "Travel Itinerary & Hotel Bookings",
      "Travel Insurance",
      "Invitation Letter (if applicable)"
    ],
    process: [
      {
        step: "Document Collection",
        description: "Gather all required documents and review for completeness",
        duration: "3-5 days"
      },
      {
        step: "Application Preparation",
        description: "Complete visa forms and prepare supporting documentation",
        duration: "2-3 days"
      },
      {
        step: "Submission & Biometrics",
        description: "Submit application and complete biometric data collection",
        duration: "1 day"
      },
      {
        step: "Interview Preparation",
        description: "Prepare for visa interview (if required)",
        duration: "2-3 days"
      },
      {
        step: "Processing & Decision",
        description: "Wait for visa processing and decision",
        duration: "5-30 days"
      }
    ],
    benefits: [
      "Explore new cultures and destinations",
      "Business opportunities and networking",
      "Family visits and reunions",
      "Medical treatment abroad",
      "Educational conferences and seminars",
      "Shopping and leisure activities",
      "Adventure and recreational activities",
      "Personal growth and experiences"
    ],
    faqs: [
      {
        question: "How much bank balance do I need?",
        answer: "Generally, you should show 3-6 months of bank statements with sufficient funds to cover your trip expenses (varies by destination)."
      },
      {
        question: "Do I need travel insurance?",
        answer: "Many countries require travel insurance as mandatory. Even if not required, it's highly recommended for your protection."
      },
      {
        question: "Can I extend my tourist visa?",
        answer: "Some countries allow visa extensions for genuine reasons, but it's generally better to plan your trip duration in advance."
      },
      {
        question: "What if my visa gets rejected?",
        answer: "We analyze the rejection reasons and help you reapply with improved documentation and addressing the concerns."
      }
    ],
    countries: ["USA", "UK", "Canada", "Australia", "Schengen Europe", "Dubai", "Singapore", "Japan"],
    processingTime: "5-30 days",
    successRate: "92%",
    color: "bg-purple-500"
  },
  {
    id: "pr-immigration",
    title: "PR & Immigration",
    icon: "Home",
    description: "Permanent residency and immigration services for long-term settlement abroad.",
    overview: "Our permanent residency services help you establish a new life abroad permanently. We guide you through complex immigration systems to achieve your goal of permanent settlement and eventual citizenship.",
    features: ["Eligibility Assessment", "Points Calculation", "PR Application", "Settlement Support"],
    requirements: [
      "Valid Passport",
      "Educational Credential Assessment (ECA)",
      "Language Proficiency Test Results",
      "Work Experience Documentation",
      "Police Clearance Certificates",
      "Medical Examinations",
      "Proof of Funds",
      "Reference Letters"
    ],
    process: [
      {
        step: "Eligibility Assessment",
        description: "Comprehensive evaluation of your profile and immigration options",
        duration: "1-2 weeks"
      },
      {
        step: "Document Preparation",
        description: "Collect and authenticate all required documents",
        duration: "2-3 months"
      },
      {
        step: "Language & Skills Tests",
        description: "Complete required language and professional assessments",
        duration: "1-2 months"
      },
      {
        step: "Application Submission",
        description: "Submit complete PR application to immigration authorities",
        duration: "1-2 weeks"
      },
      {
        step: "Processing & Review",
        description: "Government processing and background verification",
        duration: "6-18 months"
      },
      {
        step: "Landing & Settlement",
        description: "Arrival assistance and initial settlement support",
        duration: "1-3 months"
      }
    ],
    benefits: [
      "Right to live and work permanently",
      "Access to free healthcare and education",
      "Social security and welfare benefits",
      "Ability to sponsor family members",
      "Path to citizenship after residency period",
      "Freedom to travel with strong passport",
      "Investment and business opportunities",
      "Retirement and pension benefits"
    ],
    faqs: [
      {
        question: "What is the minimum points requirement?",
        answer: "Points requirement varies by program. For example, Canada Express Entry typically requires 400+ points, Australia SkillSelect varies by occupation."
      },
      {
        question: "Can I include my family in PR application?",
        answer: "Yes, you can include your spouse and dependent children (usually under 22) in your PR application."
      },
      {
        question: "How long does PR processing take?",
        answer: "Processing times vary: Canada (6-12 months), Australia (8-12 months), New Zealand (12-18 months)."
      },
      {
        question: "Do I need a job offer for PR?",
        answer: "Not always. Many PR programs are points-based and don't require job offers, though having one can increase your points."
      }
    ],
    countries: ["Canada", "Australia", "New Zealand", "Germany", "Portugal"],
    processingTime: "6-18 months",
    successRate: "85%",
    color: "bg-orange-500"
  },
  {
    id: "business-investor-visas",
    title: "Business/Investor Visas",
    icon: "Building",
    description: "Investment and business visa solutions for entrepreneurs and investors.",
    overview: "Our business and investor visa services are designed for entrepreneurs and investors looking to establish or expand their business internationally. We provide comprehensive guidance for investment migration programs.",
    features: ["Investment Planning", "Business Plan Review", "Visa Application", "Business Setup"],
    requirements: [
      "Valid Passport",
      "Business Plan & Financial Projections",
      "Investment Funds Documentation",
      "Business Experience Evidence",
      "Educational Qualifications",
      "Language Proficiency (if required)",
      "Character & Health Certificates",
      "Due Diligence Reports"
    ],
    process: [
      {
        step: "Investment Consultation",
        description: "Assess investment options and visa requirements",
        duration: "1-2 weeks"
      },
      {
        step: "Business Plan Development",
        description: "Create comprehensive business plan and investment strategy",
        duration: "2-4 weeks"
      },
      {
        step: "Investment Execution",
        description: "Make required investments as per program requirements",
        duration: "4-8 weeks"
      },
      {
        step: "Visa Application",
        description: "Submit business/investor visa application",
        duration: "2-3 weeks"
      },
      {
        step: "Processing & Approval",
        description: "Government processing and due diligence",
        duration: "6-24 months"
      },
      {
        step: "Business Setup",
        description: "Establish business operations and compliance",
        duration: "2-6 months"
      }
    ],
    benefits: [
      "Fast-track residency/citizenship pathway",
      "Access to developed markets and opportunities",
      "Visa-free travel with strong passport",
      "Tax optimization and financial planning",
      "Quality education for children",
      "Healthcare and social security access",
      "Political and economic stability",
      "Generational wealth preservation"
    ],
    faqs: [
      {
        question: "What is the minimum investment amount?",
        answer: "Investment amounts vary widely: Portugal (€280,000), Canada (CAD $200,000), USA EB-5 ($800,000), Australia ($1.5M AUD)."
      },
      {
        question: "Do I need to actively manage the business?",
        answer: "Requirements vary. Some programs require active management, while others allow passive investments in approved projects."
      },
      {
        question: "Can investment funds be borrowed?",
        answer: "Most programs require proof that investment funds are lawfully obtained. Some allow gift funds from family members."
      },
      {
        question: "What happens if the business fails?",
        answer: "Impact depends on the specific program. Some require maintaining investment for a certain period regardless of business performance."
      }
    ],
    countries: ["USA", "Canada", "Australia", "UK", "Portugal", "Greece", "Malta"],
    processingTime: "8-24 months",
    successRate: "78%",
    color: "bg-red-500"
  },
  {
    id: "family-dependent-visas",
    title: "Family/Dependent Visas",
    icon: "Heart",
    description: "Family reunification and dependent visa services to keep families together.",
    overview: "Our family visa services help reunite families by assisting with spouse, child, parent, and other family member visa applications. We understand the importance of keeping families together.",
    features: ["Family Assessment", "Relationship Documentation", "Sponsorship Support", "Interview Prep"],
    requirements: [
      "Valid Passport",
      "Relationship Proof (Marriage Certificate, Birth Certificate)",
      "Sponsor's Status Documents",
      "Financial Support Evidence",
      "Medical Examinations",
      "Police Clearance Certificates",
      "Photographs and Forms",
      "Affidavit of Support"
    ],
    process: [
      {
        step: "Relationship Assessment",
        description: "Evaluate family relationship and eligibility for visa category",
        duration: "1 week"
      },
      {
        step: "Sponsor Preparation",
        description: "Prepare sponsor documentation and financial evidence",
        duration: "2-3 weeks"
      },
      {
        step: "Beneficiary Documentation",
        description: "Collect and prepare all required documents for family member",
        duration: "3-4 weeks"
      },
      {
        step: "Application Submission",
        description: "Submit complete family visa application",
        duration: "1 week"
      },
      {
        step: "Interview Preparation",
        description: "Prepare for consular interview (if required)",
        duration: "1-2 weeks"
      },
      {
        step: "Processing & Approval",
        description: "Wait for government processing and decision",
        duration: "4-18 months"
      }
    ],
    benefits: [
      "Family reunification and togetherness",
      "Shared living expenses and support",
      "Children's access to quality education",
      "Healthcare coverage for family",
      "Cultural preservation and identity",
      "Emotional support and stability",
      "Shared responsibility and care",
      "Long-term settlement opportunities"
    ],
    faqs: [
      {
        question: "Who can sponsor family members?",
        answer: "Citizens and permanent residents can typically sponsor spouses, children, parents, and sometimes siblings (rules vary by country)."
      },
      {
        question: "What is the income requirement for sponsors?",
        answer: "Sponsors must typically demonstrate ability to financially support family members above poverty guidelines (specific amounts vary by country and family size)."
      },
      {
        question: "How long does family visa processing take?",
        answer: "Processing times vary: immediate relatives (6-12 months), other family categories can take several years depending on country quotas."
      },
      {
        question: "Can family members work after arrival?",
        answer: "Depends on visa type. Spouses usually get work authorization, while other family members may need separate work permits."
      }
    ],
    countries: ["USA", "Canada", "Australia", "UK", "New Zealand"],
    processingTime: "6-18 months",
    successRate: "90%",
    color: "bg-pink-500"
  }
];