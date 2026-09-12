export const resources = {
  utility_assistance: {
    name: "Kentucky LIHEAP",
    description:
      "LIHEAP helps eligible Kentucky households with home energy costs.",
    action: "Apply through your local Community Action Agency.",
    url: "https://www.capky.org/",
  },

  food_assistance: {
    name: "Kentucky SNAP",
    description:
      "SNAP helps eligible Kentucky households buy food.",
    action: "Apply through kynect benefits.",
    url: "https://kynect.ky.gov/",
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
};
