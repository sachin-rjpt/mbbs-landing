export const chatbotTree = {
  /* ==============================
            HOME
  ============================== */

  home: {
    id: "home",
    type: "menu",
    parent: null,

    title: "Home",

    message: `👋 Welcome to EduAbroad AI Assistant

I'm here to help you with your MBBS Abroad journey.

I can answer questions related to:

• Eligibility
• Countries
• Universities
• MBBS Fees
• Admission Process
• Visa
• Documents
• Hostel & Student Life
• FMGE / NExT

Please choose one of the options below.`,

    options: [
      {
        label: "🎓 Eligibility",
        next: "eligibility",
      },

      {
        label: "🌍 Countries",
        next: "countries",
      },

      {
        label: "💰 MBBS Fees",
        next: "fees",
      },

      {
        label: "🏫 Universities",
        next: "universities",
      },

      {
        label: "📝 Admission Process",
        next: "admission",
      },

      {
        label: "📄 Documents Required",
        next: "documents",
      },

      {
        label: "✈️ Visa",
        next: "visa",
      },

      {
        label: "🏠 Hostel & Food",
        next: "hostel",

      },

      {
        label: "📚 FMGE / NExT",
        next: "fmge",
      },

      {
        label: "☎️ Talk to Counsellor",
        next: "contact",
      },
    ],
  },

  /* ==============================
          ELIGIBILITY
  ============================== */

  eligibility: {
    id: "eligibility",

    parent: "home",

    type: "answer",

    title: "Eligibility",

    message: `Students must satisfy the following eligibility criteria for MBBS Abroad:

✅ Qualified NEET

✅ Minimum 50% marks in Physics, Chemistry & Biology (40% for reserved categories as per regulations)

✅ Minimum age should be 17 years before admission

✅ Valid Passport

✅ Medical Fitness Certificate

No IELTS or TOEFL is required for admission.`,

    options: [
      {
        label: "💰 MBBS Fees",
        next: "fees",
      },

      {
        label: "📄 Documents Required",
        next: "documents",
      },

      {
        label: "📝 Admission Process",
        next: "admission",
      },

      {
        label: "🏠 Main Menu",
        next: "home",
      },
    ],
  },

  /* ==============================
            FEES
  ============================== */

  fees: {
    id: "fees",

    parent: "home",

    type: "menu",

    title: "Fees",

    message:
      "Which country's MBBS fee would you like to know?",

    options: [
      {
        label: "🇰🇬 Kyrgyzstan",
        next: "fee_kyrgyzstan",
      },

      {
        label: "🇷🇺 Russia",
        next: "fee_russia",
      },

      {
        label: "🇬🇪 Georgia",
        next: "fee_georgia",
      },

      {
        label: "🇰🇿 Kazakhstan",
        next: "fee_kazakhstan",
      },

      {
        label: "🇺🇿 Uzbekistan",
        next: "fee_uzbekistan",
      },

      {
        label: "🏠 Main Menu",
        next: "home",
      },
    ],
  },

  fee_kyrgyzstan: {
    id: "fee_kyrgyzstan",

    parent: "fees",

    type: "answer",

    title: "Kyrgyzstan Fees",

    message:
      "MBBS in Kyrgyzstan generally costs between ₹18 Lakhs and ₹30 Lakhs depending on the university, hostel and living expenses.",

    options: [
      {
        label: "🏫 Universities",
        next: "universities",
      },

      {
        label: "📝 Admission Process",
        next: "admission",
      },

      {
        label: "🌍 Countries",
        next: "countries",
      },
    ],
  },

  fee_russia: {
    id: "fee_russia",

    parent: "fees",

    type: "answer",

    title: "Russia Fees",

    message:
      "MBBS in Russia generally costs between ₹25 Lakhs and ₹45 Lakhs depending on the university.",

    options: [
      {
        label: "🌍 Countries",
        next: "countries",
      },
    ],
  },

  fee_georgia: {
    id: "fee_georgia",

    parent: "fees",

    type: "answer",

    title: "Georgia Fees",

    message:
      "MBBS in Georgia generally costs between ₹35 Lakhs and ₹55 Lakhs.",

    options: [
      {
        label: "🌍 Countries",
        next: "countries",
      },
    ],
  },

  fee_kazakhstan: {
    id: "fee_kazakhstan",

    parent: "fees",

    type: "answer",

    title: "Kazakhstan Fees",

    message:
      "MBBS in Kazakhstan generally costs between ₹20 Lakhs and ₹35 Lakhs.",

    options: [
      {
        label: "🌍 Countries",
        next: "countries",
      },
    ],
  },

  fee_uzbekistan: {
    id: "fee_uzbekistan",

    parent: "fees",

    type: "answer",

    title: "Uzbekistan Fees",

    message:
      "MBBS in Uzbekistan generally costs between ₹20 Lakhs and ₹35 Lakhs.",

    options: [
      {
        label: "🌍 Countries",
        next: "countries",
      },
    ],
  },

  /* ==============================
        ADMISSION PROCESS
  ============================== */

  admission: {
    id: "admission",

    parent: "home",

    type: "answer",

    title: "Admission Process",

    message: `Our admission process is simple:

1️⃣ Free Counselling

2️⃣ Choose Country & University

3️⃣ Submit Documents

4️⃣ Receive Offer Letter

5️⃣ Pay Initial Fees

6️⃣ Visa Processing

7️⃣ Travel Assistance

8️⃣ Airport Pickup

9️⃣ University Registration`,

    options: [
      {
        label: "📄 Documents",
        next: "documents",
      },

      {
        label: "✈️ Visa",
        next: "visa",
      },

      {
        label: "☎️ Talk to Counsellor",
        next: "contact",
      },
    ],
  },

  /* ==============================
        DOCUMENTS
  ============================== */

  documents: {
    id: "documents",

    parent: "home",

    type: "answer",

    title: "Documents",

    message: `Documents required for MBBS Abroad:

• Passport

• 10th Marksheet

• 12th Marksheet

• NEET Scorecard

• Passport Size Photos

• Medical Fitness Certificate

• Admission Application Form`,

    options: [
      {
        label: "✈️ Visa",
        next: "visa",
      },

      {
        label: "📝 Admission Process",
        next: "admission",
      },

      {
        label: "☎️ Counsellor",
        next: "contact",
      },
    ],
  },

  /* ==============================
          VISA
  ============================== */

  visa: {
    id: "visa",

    parent: "home",

    type: "answer",

    title: "Visa",

    message:
      "Our team assists you with complete visa documentation, application, interview guidance (if required) and travel support until your departure.",

    options: [
      {
        label: "📄 Documents",
        next: "documents",
      },

      {
        label: "☎️ Talk to Counsellor",
        next: "contact",
      },
    ],
  },

  /* ==============================
      CONTACT
  ============================== */

  contact: {
    id: "contact",

    parent: "home",

    type: "action",

    title: "Contact",

    message: `Our admission experts will be happy to guide you personally.

📞 +91 XXXXXXXXXX

📧 info@goeduabroad.com

You can also fill out the counselling form available on this page, and our team will contact you shortly.`,

    options: [
      {
        label: "🏠 Main Menu",
        next: "home",
      },
    ],
  },
  /* ======================================================
                    COUNTRIES MENU
====================================================== */

countries: {
    id: "countries",

    parent: "home",

    type: "menu",

    title: "Countries",

    message:
        "We currently assist students for MBBS admissions in the following countries. Select one to know more.",

    options: [
        {
            label: "🇰🇬 Kyrgyzstan",
            next: "kyrgyzstan",
        },

        {
            label: "🇷🇺 Russia",
            next: "russia",
        },

        {
            label: "🇬🇪 Georgia",
            next: "georgia",
        },

        {
            label: "🇰🇿 Kazakhstan",
            next: "kazakhstan",
        },

        {
            label: "🇺🇿 Uzbekistan",
            next: "uzbekistan",
        },

        {
            label: "🏠 Main Menu",
            next: "home",
        },
    ],
},

/* ======================================================
                KYRGYZSTAN
====================================================== */

kyrgyzstan: {
    id: "kyrgyzstan",

    parent: "countries",

    type: "menu",

    title: "Kyrgyzstan",

    message:
        "MBBS in Kyrgyzstan is one of the most popular choices for Indian students because of affordable tuition fees, English-medium education and NMC-approved universities.\n\nWhat would you like to know?",

    options: [
        {
            label: "💰 Fees",
            next: "fee_kyrgyzstan",
        },

        {
            label: "🏫 Universities",
            next: "universities_kyrgyzstan",
        },

        {
            label: "🏠 Hostel",
            next: "hostel",
        },

        {
            label: "🌎 Recognition",
            next: "recognition",
        },

        {
            label: "🎓 Student Life",
            next: "studentlife",
        },

        {
            label: "📝 Admission Process",
            next: "admission",
        },

        {
            label: "⬅ Back",
            next: "countries",
        },
    ],
},

/* ======================================================
                RUSSIA
====================================================== */

russia: {
    id: "russia",

    parent: "countries",

    type: "menu",

    title: "Russia",

    message:
        "Russia has some of the world's oldest medical universities with modern infrastructure and global recognition.",

    options: [
        {
            label: "💰 Fees",
            next: "fee_russia",
        },

        {
            label: "🏫 Universities",
            next: "universities_russia",
        },

        {
            label: "🏠 Hostel",
            next: "hostel",
        },

        {
            label: "🌎 Recognition",
            next: "recognition",
        },

        {
            label: "🎓 Student Life",
            next: "studentlife",
        },

        {
            label: "📝 Admission Process",
            next: "admission",
        },

        {
            label: "⬅ Back",
            next: "countries",
        },
    ],
},

/* ======================================================
                GEORGIA
====================================================== */

georgia: {
    id: "georgia",

    parent: "countries",

    type: "menu",

    title: "Georgia",

    message:
        "Georgia is well known for its high-quality education, European lifestyle and English-medium MBBS programs.",

    options: [
        {
            label: "💰 Fees",
            next: "fee_georgia",
        },

        {
            label: "🏫 Universities",
            next: "universities_georgia",
        },

        {
            label: "🏠 Hostel",
            next: "hostel",
        },

        {
            label: "🌎 Recognition",
            next: "recognition",
        },

        {
            label: "🎓 Student Life",
            next: "studentlife",
        },

        {
            label: "📝 Admission Process",
            next: "admission",
        },

        {
            label: "⬅ Back",
            next: "countries",
        },
    ],
},

/* ======================================================
                KAZAKHSTAN
====================================================== */

kazakhstan: {
    id: "kazakhstan",

    parent: "countries",

    type: "menu",

    title: "Kazakhstan",

    message:
        "Kazakhstan offers affordable MBBS education with experienced faculty and modern teaching facilities.",

    options: [
        {
            label: "💰 Fees",
            next: "fee_kazakhstan",
        },

        {
            label: "🏫 Universities",
            next: "universities_kazakhstan",
        },

        {
            label: "🏠 Hostel",
            next: "hostel",
        },

        {
            label: "🌎 Recognition",
            next: "recognition",
        },

        {
            label: "🎓 Student Life",
            next: "studentlife",
        },

        {
            label: "📝 Admission Process",
            next: "admission",
        },

        {
            label: "⬅ Back",
            next: "countries",
        },
    ],
},

/* ======================================================
                UZBEKISTAN
====================================================== */

uzbekistan: {
    id: "uzbekistan",

    parent: "countries",

    type: "menu",

    title: "Uzbekistan",

    message:
        "Uzbekistan has become a preferred destination for Indian students due to affordable tuition, quality education and excellent hostel facilities.",

    options: [
        {
            label: "💰 Fees",
            next: "fee_uzbekistan",
        },

        {
            label: "🏫 Universities",
            next: "universities_uzbekistan",
        },

        {
            label: "🏠 Hostel",
            next: "hostel",
        },

        {
            label: "🌎 Recognition",
            next: "recognition",
        },

        {
            label: "🎓 Student Life",
            next: "studentlife",
        },

        {
            label: "📝 Admission Process",
            next: "admission",
        },

        {
            label: "⬅ Back",
            next: "countries",
        },
    ],
},

/* ======================================================
            COMMON COUNTRY NODES
====================================================== */

recognition: {
    id: "recognition",

    parent: "countries",

    type: "answer",

    title: "Recognition",

    message:
        "The universities we work with are recognized by NMC, WHO and other international medical bodies, making graduates eligible for licensing pathways according to the regulations of the country where they wish to practice.",

    options: [
        {
            label: "🏠 Main Menu",
            next: "home",
        },

        {
            label: "☎ Talk to Counsellor",
            next: "contact",
        },
    ],
},

studentlife: {
    id: "studentlife",

    parent: "countries",

    type: "answer",

    title: "Student Life",

    message:
        "Students enjoy modern hostels, Indian food options, multicultural classrooms, campus activities and a safe learning environment with complete support throughout their MBBS journey.",

    options: [
        {
            label: "🏠 Main Menu",
            next: "home",
        },

        {
            label: "☎ Talk to Counsellor",
            next: "contact",
        },
    ],
},
/* ======================================================
                UNIVERSITIES MENU
====================================================== */

universities: {
    id: "universities",

    parent: "home",

    type: "menu",

    title: "Universities",

    message:
        "Select the country to view our partner medical universities.",

    options: [
        {
            label: "🇰🇬 Kyrgyzstan",
            next: "universities_kyrgyzstan",
        },

        {
            label: "🇷🇺 Russia",
            next: "universities_russia",
        },

        {
            label: "🇬🇪 Georgia",
            next: "universities_georgia",
        },

        {
            label: "🇰🇿 Kazakhstan",
            next: "universities_kazakhstan",
        },

        {
            label: "🇺🇿 Uzbekistan",
            next: "universities_uzbekistan",
        },

        {
            label: "🏠 Main Menu",
            next: "home",
        },
    ],
},

/* ======================================================
            KYRGYZSTAN UNIVERSITIES
====================================================== */

universities_kyrgyzstan:{
    id:"universities_kyrgyzstan",

    parent:"universities",

    type:"menu",

    title:"Kyrgyzstan Universities",

    message:"Choose a university to know more.",

    options:[
        {
            label:"🏫 Bishkek International Medical Institute (BIMI)",
            next:"bimi"
        },

        {
            label:"🏫 Osh State University",
            next:"osh"
        },

        {
            label:"🏫 Asian Medical Institute",
            next:"asian"
        },

        {
            label:"⬅ Back",
            next:"universities"
        }
    ]
},

bimi:{
    id:"bimi",

    parent:"universities_kyrgyzstan",

    type:"answer",

    title:"BIMI",

    message:
`Bishkek International Medical Institute (BIMI)

• Country : Kyrgyzstan

• Medium : English

• Duration : 6 Years

• Recognition : NMC & WHO

• Modern Campus

• Indian Food Available

• Separate Hostel

• Affordable Tuition Fees

BIMI is one of our recommended universities for Indian students.`,

    options:[
        {
            label:"💰 Fees",
            next:"fee_kyrgyzstan"
        },

        {
            label:"📝 Admission Process",
            next:"admission"
        },

        {
            label:"☎ Talk to Counsellor",
            next:"contact"
        },

        {
            label:"⬅ Universities",
            next:"universities_kyrgyzstan"
        }
    ]
},

osh:{
    id:"osh",

    parent:"universities_kyrgyzstan",

    type:"answer",

    title:"Osh State University",

    message:
`Osh State University

• Government University

• English Medium

• NMC Approved

• WHO Recognized

• Excellent Clinical Exposure

• Affordable Hostel

• Indian Students Every Year`,

    options:[
        {
            label:"💰 Fees",
            next:"fee_kyrgyzstan"
        },

        {
            label:"☎ Counsellor",
            next:"contact"
        },

        {
            label:"⬅ Universities",
            next:"universities_kyrgyzstan"
        }
    ]
},

asian:{
    id:"asian",

    parent:"universities_kyrgyzstan",

    type:"answer",

    title:"Asian Medical Institute",

    message:
`Asian Medical Institute

• English Medium

• NMC Approved

• WHO Listed

• Indian Hostel

• Indian Mess

• Affordable Tuition

• Safe Campus`,

    options:[
        {
            label:"💰 Fees",
            next:"fee_kyrgyzstan"
        },

        {
            label:"☎ Counsellor",
            next:"contact"
        },

        {
            label:"⬅ Universities",
            next:"universities_kyrgyzstan"
        }
    ]
},

/* ======================================================
            RUSSIA UNIVERSITIES
====================================================== */

universities_russia:{
    id:"universities_russia",

    parent:"universities",

    type:"answer",

    title:"Russia",

    message:
`We work with multiple NMC-approved Russian Medical Universities.

Our counsellor will recommend the most suitable university according to your NEET score, budget and preferences.`,

    options:[
        {
            label:"💰 MBBS Fees",
            next:"fee_russia"
        },

        {
            label:"☎ Talk to Counsellor",
            next:"contact"
        },

        {
            label:"⬅ Universities",
            next:"universities"
        }
    ]
},

/* ======================================================
            GEORGIA
====================================================== */

universities_georgia:{
    id:"universities_georgia",

    parent:"universities",

    type:"answer",

    title:"Georgia",

    message:
`We partner with leading medical universities in Georgia that offer English-medium MBBS programs with global recognition.`,

    options:[
        {
            label:"💰 MBBS Fees",
            next:"fee_georgia"
        },

        {
            label:"☎ Counsellor",
            next:"contact"
        },

        {
            label:"⬅ Universities",
            next:"universities"
        }
    ]
},

/* ======================================================
            KAZAKHSTAN
====================================================== */

universities_kazakhstan:{
    id:"universities_kazakhstan",

    parent:"universities",

    type:"answer",

    title:"Kazakhstan",

    message:
`Kazakhstan offers affordable MBBS programs with modern infrastructure and experienced faculty members.`,

    options:[
        {
            label:"💰 MBBS Fees",
            next:"fee_kazakhstan"
        },

        {
            label:"☎ Counsellor",
            next:"contact"
        },

        {
            label:"⬅ Universities",
            next:"universities"
        }
    ]
},

/* ======================================================
            UZBEKISTAN
====================================================== */

universities_uzbekistan:{
    id:"universities_uzbekistan",

    parent:"universities",

    type:"answer",

    title:"Uzbekistan",

    message:
`We assist students in securing admission to reputed medical universities in Uzbekistan with complete admission support.`,

    options:[
        {
            label:"💰 MBBS Fees",
            next:"fee_uzbekistan"
        },

        {
            label:"☎ Counsellor",
            next:"contact"
        },

        {
            label:"⬅ Universities",
            next:"universities"
        }
    ]
},
/* ======================================================
                HOSTEL & FOOD
====================================================== */

hostel: {
    id: "hostel",

    parent: "home",

    type: "answer",

    title: "Hostel & Food",

    message:
`Students are provided with safe and comfortable hostel accommodation.

Facilities include:

• Separate hostel for boys & girls

• Indian food available

• Wi-Fi

• Laundry

• Security

• CCTV

• Study rooms

• Walking distance from university (depending on university).`,

    options: [

        {
            label:"🍛 Food",
            next:"food"
        },

        {
            label:"🎓 Student Life",
            next:"studentlife"
        },

        {
            label:"📝 Admission Process",
            next:"admission"
        },

        {
            label:"☎ Talk to Counsellor",
            next:"contact"
        }

    ]
},

food:{
    id:"food",

    parent:"hostel",

    type:"answer",

    title:"Indian Food",

    message:
`Most partner universities provide Indian mess facilities.

Students can also cook their own meals in hostel kitchens.

Vegetarian and Non-Vegetarian meals are available.`,

    options:[
        {
            label:"🏠 Hostel",
            next:"hostel"
        },

        {
            label:"🎓 Student Life",
            next:"studentlife"
        },

        {
            label:"☎ Counsellor",
            next:"contact"
        }
    ]
},

/* ======================================================
                    FMGE
====================================================== */

fmge:{
    id:"fmge",

    parent:"home",

    type:"answer",

    title:"FMGE / NExT",

    message:
`Students graduating from NMC-approved universities can appear for FMGE/NExT according to the latest NMC regulations.

We also guide students regarding licensing pathways after MBBS.`,

    options:[

        {
            label:"🌎 Recognition",
            next:"recognition"
        },

        {
            label:"🏫 Universities",
            next:"universities"
        },

        {
            label:"☎ Talk to Counsellor",
            next:"contact"
        }

    ]
},

/* ======================================================
                    WHY EDUABROAD
====================================================== */

why:{
    id:"why",

    parent:"home",

    type:"answer",

    title:"Why EduAbroad",

    message:
`Why choose EduAbroad?

✅ Experienced Admission Counsellors

✅ NMC Approved Universities

✅ Transparent Fee Structure

✅ Visa Assistance

✅ Airport Pickup

✅ Hostel Assistance

✅ University Registration

✅ Support Throughout MBBS Journey`,

    options:[
        {
            label:"☎ Contact Expert",
            next:"contact"
        },

        {
            label:"📝 Free Counselling",
            next:"counselling"
        }
    ]
},

/* ======================================================
                FREE COUNSELLING
====================================================== */

counselling:{
    id:"counselling",

    parent:"home",

    type:"action",

    title:"Free Counselling",

    message:
`🎉 Great!

Our admission experts can help you choose the best university according to your:

• NEET Score

• Budget

• Preferred Country

• Career Goals

Please fill the counselling form available on this page and our counsellor will contact you shortly.`,

    options:[

        {
            label:"📄 Open Counselling Form",
            next:"form"
        },

        {
            label:"☎ Contact Expert",
            next:"contact"
        }

    ]
},

/* ======================================================
                FORM
====================================================== */

form:{
    id:"form",

    parent:"counselling",

    type:"action",

    title:"Counselling Form",

    message:
`Please scroll down and fill the counselling form available on this page.

Our team usually contacts students within a few hours.`,

    options:[
        {
            label:"☎ Call Now",
            next:"contact"
        },

        {
            label:"🏠 Main Menu",
            next:"home"
        }
    ]
},

/* ======================================================
                UNKNOWN QUERY
====================================================== */

unknown:{
    id:"unknown",

    parent:null,

    type:"answer",

    title:"Unknown",

    message:
`I'm currently trained to answer only questions related to EduAbroad and MBBS Abroad admissions.

For personalised guidance, please connect with one of our admission experts.`,

    options:[

        {
            label:"☎ Contact Expert",
            next:"contact"
        },

        {
            label:"📝 Book Free Counselling",
            next:"counselling"
        },

        {
            label:"🏠 Main Menu",
            next:"home"
        }

    ]
},
};