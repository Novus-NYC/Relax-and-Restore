export const site = {
  name: "Relax & Restore",
  legalName: "Relax and Restore Massage LLC.",
  phoneDisplay: "214-230-9088",
  phoneHref: "tel:+12142309088",
  bookingUrl:
    "https://booksy.com/en-us/1625981_relax-restore-massage_massage_36433_plano?do=invite#ba_s=dl_1",
  hours: [
    { days: "Sunday – Friday", hours: "11 AM – 6 PM" },
    { days: "Saturday", hours: "12 PM – 6 PM" },
  ],
  services: [
    { duration: "60 minutes", price: "$100", label: "Full custom massage" },
    { duration: "90 minutes", price: "$130", label: "Extended custom massage" },
  ],
} as const
