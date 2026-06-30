export const chatbotTree = {
  /* ==============================
            HOME
  ============================== */

  home: {
    id: "home",
    type: "menu",
    parent: null,

    title: "Home",

    message: `👋 Welcome to DOCFLY MBBS Abroad Assistant

I'm here to guide you through your MBBS Abroad journey.

I can help you with:

• MBBS Eligibility
• Countries
• Universities
• Admission Process
• Documents
• Student Visa
• Fees & Budget
• Student Life
• NMC Guidelines
• Free Counselling

Please choose an option below.`,

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
        label: "🏫 Universities",
        next: "universities",
      },

      {
        label: "💰 Fees & Budget",
        next: "fees",
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
        label: "✈️ Student Visa",
        next: "visa",
      },

      {
        label: "🏠 Student Life",
        next: "studentlife",
      },

      {
        label: "📚 NMC Guidelines",
        next: "recognition",
      },

      {
        label: "☎️ Free Counselling",
        next: "counselling",
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

    message: `To study MBBS abroad through DOCFLY, students should generally meet these requirements:

✅ Qualifying NEET-UG score

✅ Minimum age as per current NMC regulations

✅ 10+2 with Physics, Chemistry and Biology

✅ Valid Passport

Before suggesting any university, our counsellors review your NEET score, category and eligibility according to the latest NMC rules.`,

    options: [
      {
        label: "🌍 Countries",
        next: "countries",
      },

      {
        label: "📝 Admission Process",
        next: "admission",
      },

      {
        label: "☎️ Free Counselling",
        next: "counselling",
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

    type: "answer",

    title: "Fees & Budget",

    message: `DOCFLY believes in complete fee transparency.

Instead of promoting donation seats or hidden charges, we shortlist universities that provide:

• Published fee structures

• Fixed tuition mentioned in the offer letter

• No donation or capitation fees

Your final budget depends on:

• Country

• University

• Hostel

• Living expenses

During counselling we recommend universities that match both your NEET score and your budget.`,

    options: [
      {
        label: "🌍 Countries",
        next: "countries",
      },

      {
        label: "🏫 Universities",
        next: "universities",
      },

      {
        label: "☎️ Free Counselling",
        next: "counselling",
      },

      {
        label: "🏠 Main Menu",
        next: "home",
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

    message: `DOCFLY follows a simple 7-step admission process:

1️⃣ Free Eligibility Review

2️⃣ Country & University Shortlisting

3️⃣ Application Filing

4️⃣ Offer Letter & Fee Verification

5️⃣ Fee Payment & Confirmation

6️⃣ Student Visa Filing

7️⃣ Pre-Departure Guidance & Arrival Support

One counsellor stays with your file from your first call until you reach your university.`,

    options: [
      {
        label: "📄 Documents",
        next: "documents",
      },

      {
        label: "✈️ Student Visa",
        next: "visa",
      },

      {
        label: "☎️ Free Counselling",
        next: "counselling",
      },

      {
        label: "🏠 Main Menu",
        next: "home",
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

    message: `Typical documents required include:

• Passport

• 10th Marksheet

• 12th Marksheet

• NEET Scorecard

• Passport-size Photographs

• Application Form

• Supporting attestations (where required)

Our team verifies every document before submitting your university application.`,

    options: [
      {
        label: "✈️ Student Visa",
        next: "visa",
      },

      {
        label: "📝 Admission Process",
        next: "admission",
      },

      {
        label: "☎️ Free Counselling",
        next: "counselling",
      },

      {
        label: "🏠 Main Menu",
        next: "home",
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

    title: "Student Visa",

    message: `DOCFLY provides complete student visa assistance.

Our visa support includes:

• Document Verification

• Visa Application Guidance

• University Documentation

• Financial Guidance

• Pre-departure Support

Our experienced team assists you throughout the visa process until your departure.`,

    options: [
      {
        label: "📄 Documents",
        next: "documents",
      },

      {
        label: "☎️ Free Counselling",
        next: "counselling",
      },

      {
        label: "🏠 Main Menu",
        next: "home",
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

    message: `Our MBBS Abroad experts are happy to help.

📍 Kanpur, Uttar Pradesh

📧 hello@docfly.co.in

Fill out the counselling form available on the website and one dedicated counsellor will contact you shortly.`,

    options: [
      {
        label: "📝 Free Counselling",
        next: "counselling",
      },

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
      "DOCFLY currently assists students for MBBS admissions in the following destinations. Select a country to know more.",

    options: [
      {
        label: "🇵🇱 Poland",
        next: "poland",
      },

      {
        label: "🇭🇺 Hungary",
        next: "hungary",
      },

      {
        label: "🇷🇴 Romania",
        next: "romania",
      },

      {
        label: "🇧🇾 Belarus",
        next: "belarus",
      },

      {
        label: "🇧🇦 Bosnia & Herzegovina",
        next: "bosnia",
      },

      {
        label: "🇬🇪 Georgia",
        next: "georgia",
      },

      {
        label: "🇦🇲 Armenia",
        next: "armenia",
      },

      {
        label: "🏠 Main Menu",
        next: "home",
      },
    ],
  },

  /* ======================================================
                    POLAND
====================================================== */

  poland: {
    id: "poland",

    parent: "countries",

    type: "menu",

    title: "Poland",

    message:
      "Poland offers European-standard medical education with globally recognized universities, advanced clinical exposure and modern healthcare infrastructure.",

    options: [
      {
        label: "🏫 Universities",
        next: "universities_poland",
      },

      {
        label: "💰 Fees",
        next: "fees",
      },

      {
        label: "🎓 Student Life",
        next: "studentlife",
      },

      {
        label: "📚 Recognition",
        next: "recognition",
      },

      {
        label: "📝 Admission",
        next: "admission",
      },

      {
        label: "⬅ Back",
        next: "countries",
      },
    ],
  },

  /* ======================================================
                    HUNGARY
====================================================== */

  hungary: {
    id: "hungary",

    parent: "countries",

    type: "menu",

    title: "Hungary",

    message:
      "Hungary is among Europe's most preferred destinations for international medical education with English-medium MBBS programs.",

    options: [
      {
        label: "🏫 Universities",
        next: "universities_hungary",
      },

      {
        label: "💰 Fees",
        next: "fees",
      },

      {
        label: "🎓 Student Life",
        next: "studentlife",
      },

      {
        label: "📚 Recognition",
        next: "recognition",
      },

      {
        label: "📝 Admission",
        next: "admission",
      },

      {
        label: "⬅ Back",
        next: "countries",
      },
    ],
  },

  /* ======================================================
                    ROMANIA
====================================================== */

  romania: {
    id: "romania",

    parent: "countries",

    type: "menu",

    title: "Romania",

    message:
      "Romania offers affordable European medical education with internationally recognized universities and quality clinical training.",

    options: [
      {
        label: "🏫 Universities",
        next: "universities_romania",
      },

      {
        label: "💰 Fees",
        next: "fees",
      },

      {
        label: "🎓 Student Life",
        next: "studentlife",
      },

      {
        label: "📚 Recognition",
        next: "recognition",
      },

      {
        label: "📝 Admission",
        next: "admission",
      },

      {
        label: "⬅ Back",
        next: "countries",
      },
    ],
  },

  /* ======================================================
                    BELARUS
====================================================== */

  belarus: {
    id: "belarus",

    parent: "countries",

    type: "menu",

    title: "Belarus",

    message:
      "Belarus has long been a preferred destination for medical education due to experienced faculty, quality infrastructure and affordable education.",

    options: [
      {
        label: "🏫 Universities",
        next: "universities_belarus",
      },

      {
        label: "💰 Fees",
        next: "fees",
      },

      {
        label: "🎓 Student Life",
        next: "studentlife",
      },

      {
        label: "📚 Recognition",
        next: "recognition",
      },

      {
        label: "📝 Admission",
        next: "admission",
      },

      {
        label: "⬅ Back",
        next: "countries",
      },
    ],
  },
    /* ======================================================
            BOSNIA & HERZEGOVINA
====================================================== */

  bosnia: {
    id: "bosnia",

    parent: "countries",

    type: "menu",

    title: "Bosnia & Herzegovina",

    message:
      "Bosnia & Herzegovina is an emerging European destination offering quality medical education, modern infrastructure and internationally accepted degrees.",

    options: [
      {
        label: "🏫 Universities",
        next: "universities_bosnia",
      },

      {
        label: "💰 Fees",
        next: "fees",
      },

      {
        label: "🎓 Student Life",
        next: "studentlife",
      },

      {
        label: "📚 Recognition",
        next: "recognition",
      },

      {
        label: "📝 Admission",
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
      "Georgia is one of the most popular MBBS destinations for Indian students because of its modern universities, English-medium education and student-friendly environment.",

    options: [
      {
        label: "🏫 Universities",
        next: "universities_georgia",
      },

      {
        label: "💰 Fees",
        next: "fees",
      },

      {
        label: "🎓 Student Life",
        next: "studentlife",
      },

      {
        label: "📚 Recognition",
        next: "recognition",
      },

      {
        label: "📝 Admission",
        next: "admission",
      },

      {
        label: "⬅ Back",
        next: "countries",
      },
    ],
  },

  /* ======================================================
                    ARMENIA
====================================================== */

  armenia: {
    id: "armenia",

    parent: "countries",

    type: "menu",

    title: "Armenia",

    message:
      "Armenia provides affordable medical education with experienced faculty, quality clinical exposure and a welcoming environment for international students.",

    options: [
      {
        label: "🏫 Universities",
        next: "universities_armenia",
      },

      {
        label: "💰 Fees",
        next: "fees",
      },

      {
        label: "🎓 Student Life",
        next: "studentlife",
      },

      {
        label: "📚 Recognition",
        next: "recognition",
      },

      {
        label: "📝 Admission",
        next: "admission",
      },

      {
        label: "⬅ Back",
        next: "countries",
      },
    ],
  },

  /* ======================================================
                RECOGNITION
====================================================== */

  recognition: {
    id: "recognition",

    parent: "countries",

    type: "answer",

    title: "Recognition",

    message: `DOCFLY recommends universities after carefully reviewing their academic standards and eligibility under applicable regulations.

Our counselling team helps students understand:

• NMC Guidelines

• University Recognition

• Degree Acceptance

• Licensing Pathways

• Country-specific requirements

Students should always verify the latest regulations before applying.`,

    options: [
      {
        label: "🏫 Universities",
        next: "universities",
      },

      {
        label: "☎️ Free Counselling",
        next: "counselling",
      },

      {
        label: "🏠 Main Menu",
        next: "home",
      },
    ],
  },

  /* ======================================================
                STUDENT LIFE
====================================================== */

  studentlife: {
    id: "studentlife",

    parent: "home",

    type: "answer",

    title: "Student Life",

    message: `International students generally enjoy:

• Safe Accommodation

• Modern Campuses

• Practical Clinical Training

• International Classrooms

• Library & Research Facilities

• Sports & Cultural Activities

• Public Transport Access

• Dedicated Student Support

DOCFLY also provides pre-departure guidance so students feel prepared before travelling abroad.`,

    options: [
      {
        label: "🏫 Universities",
        next: "universities",
      },

      {
        label: "☎️ Free Counselling",
        next: "counselling",
      },

      {
        label: "🏠 Main Menu",
        next: "home",
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
      "Select your preferred destination to know about available medical universities.",

    options: [
      {
        label: "🇵🇱 Poland",
        next: "universities_poland",
      },

      {
        label: "🇭🇺 Hungary",
        next: "universities_hungary",
      },

      {
        label: "🇷🇴 Romania",
        next: "universities_romania",
      },

      {
        label: "🇧🇾 Belarus",
        next: "universities_belarus",
      },

      {
        label: "🇧🇦 Bosnia & Herzegovina",
        next: "universities_bosnia",
      },

      {
        label: "🇬🇪 Georgia",
        next: "universities_georgia",
      },

      {
        label: "🇦🇲 Armenia",
        next: "universities_armenia",
      },

      {
        label: "🏠 Main Menu",
        next: "home",
      },
    ],
  },
    /* ======================================================
            POLAND UNIVERSITIES
====================================================== */

  universities_poland: {
    id: "universities_poland",

    parent: "universities",

    type: "answer",

    title: "Poland Universities",

    message: `DOCFLY helps students explore reputed medical universities in Poland based on their eligibility, academic profile and career goals.

Our counsellors guide you in selecting the most suitable university after evaluating your complete profile.`,

    options: [
      {
        label: "💰 Fees",
        next: "fees",
      },

      {
        label: "☎️ Free Counselling",
        next: "counselling",
      },

      {
        label: "⬅ Back",
        next: "universities",
      },
    ],
  },

  /* ======================================================
            HUNGARY UNIVERSITIES
====================================================== */

  universities_hungary: {
    id: "universities_hungary",

    parent: "universities",

    type: "answer",

    title: "Hungary Universities",

    message: `DOCFLY assists students in choosing among leading medical universities in Hungary according to eligibility, budget and future career plans.`,

    options: [
      {
        label: "💰 Fees",
        next: "fees",
      },

      {
        label: "☎️ Free Counselling",
        next: "counselling",
      },

      {
        label: "⬅ Back",
        next: "universities",
      },
    ],
  },

  /* ======================================================
            ROMANIA UNIVERSITIES
====================================================== */

  universities_romania: {
    id: "universities_romania",

    parent: "universities",

    type: "answer",

    title: "Romania Universities",

    message: `Our team helps students identify the most appropriate Romanian medical university based on academic eligibility and preferences.`,

    options: [
      {
        label: "💰 Fees",
        next: "fees",
      },

      {
        label: "☎️ Free Counselling",
        next: "counselling",
      },

      {
        label: "⬅ Back",
        next: "universities",
      },
    ],
  },

  /* ======================================================
            BELARUS UNIVERSITIES
====================================================== */

  universities_belarus: {
    id: "universities_belarus",

    parent: "universities",

    type: "answer",

    title: "Belarus Universities",

    message: `DOCFLY provides guidance for admission to recognized medical universities in Belarus with complete application support.`,

    options: [
      {
        label: "💰 Fees",
        next: "fees",
      },

      {
        label: "☎️ Free Counselling",
        next: "counselling",
      },

      {
        label: "⬅ Back",
        next: "universities",
      },
    ],
  },

  /* ======================================================
      BOSNIA & HERZEGOVINA UNIVERSITIES
====================================================== */

  universities_bosnia: {
    id: "universities_bosnia",

    parent: "universities",

    type: "answer",

    title: "Bosnia & Herzegovina Universities",

    message: `DOCFLY helps students explore quality medical universities in Bosnia & Herzegovina with complete admission assistance.`,

    options: [
      {
        label: "💰 Fees",
        next: "fees",
      },

      {
        label: "☎️ Free Counselling",
        next: "counselling",
      },

      {
        label: "⬅ Back",
        next: "universities",
      },
    ],
  },

  /* ======================================================
            GEORGIA UNIVERSITIES
====================================================== */

  universities_georgia: {
    id: "universities_georgia",

    parent: "universities",

    type: "answer",

    title: "Georgia Universities",

    message: `DOCFLY assists students in selecting reputed Georgian medical universities that match their eligibility and career goals.`,

    options: [
      {
        label: "💰 Fees",
        next: "fees",
      },

      {
        label: "☎️ Free Counselling",
        next: "counselling",
      },

      {
        label: "⬅ Back",
        next: "universities",
      },
    ],
  },

  /* ======================================================
            ARMENIA UNIVERSITIES
====================================================== */

  universities_armenia: {
    id: "universities_armenia",

    parent: "universities",

    type: "answer",

    title: "Armenia Universities",

    message: `DOCFLY helps students apply to leading Armenian medical universities with complete documentation and admission support.`,

    options: [
      {
        label: "💰 Fees",
        next: "fees",
      },

      {
        label: "☎️ Free Counselling",
        next: "counselling",
      },

      {
        label: "⬅ Back",
        next: "universities",
      },
    ],
  },

  /* ======================================================
                WHY DOCFLY
====================================================== */

  why: {
    id: "why",

    parent: "home",

    type: "answer",

    title: "Why DOCFLY",

    message: `Why students choose DOCFLY:

✅ One Dedicated Counsellor

✅ Transparent Guidance

✅ University Shortlisting

✅ Documentation Support

✅ Student Visa Assistance

✅ Pre-Departure Guidance

✅ Honest Counselling

✅ End-to-End Admission Support`,

    options: [
      {
        label: "☎️ Free Counselling",
        next: "counselling",
      },

      {
        label: "🏠 Main Menu",
        next: "home",
      },
    ],
  },

  /* ======================================================
                FREE COUNSELLING
====================================================== */

  counselling: {
    id: "counselling",

    parent: "home",

    type: "action",

    title: "Free Counselling",

    message: `Great!

Our admission experts will help you choose the best university according to your:

• NEET Score

• Budget

• Preferred Country

• Career Goals

Simply fill out the counselling form available on the DOCFLY website and your dedicated counsellor will contact you.`,

    options: [
      {
        label: "☎️ Contact DOCFLY",
        next: "contact",
      },

      {
        label: "🏠 Main Menu",
        next: "home",
      },
    ],
  },

  /* ======================================================
                UNKNOWN
====================================================== */

  unknown: {
    id: "unknown",

    parent: null,

    type: "answer",

    title: "Unknown",

    message: `I'm currently trained to answer questions related to DOCFLY and MBBS Abroad admissions.

For personalized guidance, please connect with a DOCFLY counsellor.`,

    options: [
      {
        label: "☎️ Free Counselling",
        next: "counselling",
      },

      {
        label: "🏠 Main Menu",
        next: "home",
      },
    ],
  },
};