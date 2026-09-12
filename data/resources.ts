export const resources = {
  utility_assistance: {
    name: "Kentucky LIHEAP",
    description:
      "LIHEAP helps eligible Kentucky households with home energy costs.",
    action: "Apply through your local Community Action Agency.",
    prepare: "Your most recent electric bill and proof of household income from the previous month.",
say: "I need help paying my electric bill and would like to ask about energy assistance.",
phone: "1-800-456-3452",
    url: "https://www.capky.org/",
  },

  food_assistance: {
    name: "Kentucky SNAP",
    description:
      "SNAP helps eligible Kentucky households buy food.",
    action: "Apply through kynect benefits.",
    prepare: "Have identification, household income information, and recent bills or expenses available if you have them.",
say: "I need help applying for food assistance and would like to ask about SNAP.",
phone: "1-855-306-8959",
    url: "https://kynect.ky.gov/",
  },
  housing_assistance: {
  name: "Kentucky Housing Corporation Rental Assistance Resources",
  description:
    "Kentucky Housing Corporation provides rental assistance resources and connects Kentuckians with housing programs that may fit their situation.",
  action:
    "Use Kentucky Housing Corporation's Rental Assistance Resources page to find housing help that matches your situation.",
  prepare:
    "Have your lease, rent amount, household income information, and any eviction or late-rent notices available if you have them.",
  say:
    "I need help with my rent or housing and would like to know what assistance may be available.",
  phone: "1-800-633-8896",
  url: "https://www.kyhousing.org/page/rental-assistance-resources",
  source: "Kentucky Housing Corporation",
verified: "2026-09-12",
},
employment_assistance: {
  name: "Kentucky Career Center",
  description:
    "Kentucky Career Center helps job seekers with job searches, resumes, interviews, training, and employment services.",
  action:
    "Contact Kentucky Career Center or visit a local career center for job-search and employment assistance.",
  prepare:
    "Have your work history, resume if you have one, and the types of jobs you are looking for.",
  say:
    "I need help finding a job and would like assistance with my job search.",
  phone: "502-564-0871",
  url: "https://kcc.ky.gov/career/employment-assistance/Pages/Resume-and-Job-Search.aspx",
  source: "Kentucky Career Center",
  verified: "2026-09-12",
},
medical_transportation: {
  name: "Kentucky Medicaid Medical Transportation",
  description:
    "Kentucky Medicaid may provide transportation to and from covered medical appointments for eligible members who do not have suitable transportation.",
  action:
    "Use the Kentucky Medicaid transportation page to find the transportation provider for your area.",
    prepare:
  "Your Medicaid card, appointment date and time, doctor's name, and the address of your appointment",
say:
  "I need help arranging transportation to a medical appointment.",
  url: "https://www.chfs.ky.gov/agencies/dms/member/Pages/Medical-Transportation.aspx",
  phone: "1-800-444-7433",
},
};
export const medicalTransportationByCounty = {
  Pike: {
    provider: "Sandy Valley Transportation Services",
    phone: "1-800-444-7433",
  },
  Jefferson: {
  provider: "Federated Transportation Services of the Bluegrass",
  phone: "1-888-848-0989",
},
};
export const utilityAssistanceByCounty = {
  Jefferson: {
    provider: "Louisville Metro Office of Social Services",
    phone: "502-991-8391",
  },
};