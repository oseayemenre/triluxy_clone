import { LiaPlaneSolid } from "react-icons/lia";
import { IoBedOutline, IoCarSportOutline, IoEarthSharp } from "react-icons/io5";
import { LuShip } from "react-icons/lu";

export const nav_items = [
  {
    label: "Flights",
  },
  {
    label: "Stays",
    subItems: [
      "Hotels",
      "Apartment",
      "Self Catering",
      "Vacation Rentals",
      "Villas",
      "Beach House",
    ],
  },
  {
    label: "Car Rentals",
    subItems: ["Regular", "Premium"],
  },
  {
    label: "Airport Taxis",
  },
  {
    label: "Cruises",
  },
  {
    label: "Restaurants",
    subItems: ["Order", "Book Reservations"],
  },
  { label: "Become Local Expert" },
];

export const button_labels = [
  {
    label: "Sign Up",
    bgColor: "#FFFFFF",
    borderColor: "#6CCACB",
    textColor: "#6CCACB",
    hoverColor: "#6CCACB",
    hoverText: "#FFFFFF",
  },
  {
    label: "Login",
    bgColor: "#6CCACB",
    textColor: "#FFFFFF",
    hoverBorder: "#6CCACB",
    hoverColor: "#FFFFFF",
    hoverText: "#6CCACB",
  },
];

export const currencies = [
  "AED",
  "AUD",
  "BRL",
  "CAD",
  "CHF",
  "CNY",
  "EUR",
  "GPB",
  "HKD",
  "IDR",
  "INR",
  "JPY",
  "KRW",
  "MYR",
  "NZD",
  "PHP",
  "PLN",
  "RUB",
  "SAR",
  "SGD",
  "THB",
  "TRY",
  "TWD",
  "USD",
  "VND",
  "MXN",
  "ASR",
  "INR",
];

export const countries = [
  {
    name: "Bahasa Indonesia",
    flag: "/indonesia.png",
  },
  {
    name: "Deutsch",
    flag: "/germany.png",
  },
  {
    name: "English(US)",
    flag: "/united-states.png",
  },
  {
    name: "English(UK)",
    flag: "/united-kingdom.png",
  },
  {
    name: "Romania",
    flag: "/romania.png",
  },
  {
    name: "Español",
    flag: "spain.png",
  },
  {
    name: "Francais",
    flag: "/france.png",
  },
  {
    name: "Italanio",
    flag: "/italy.png",
  },
  {
    name: "Polski",
    flag: "/poland.png",
  },
  {
    name: "Portugese",
    flag: "/portugal.png",
  },
  {
    name: "Turkish",
    flag: "/turkey.png",
  },
  {
    name: "Russian",
    flag: "/russia.png",
  },
  {
    name: "Japanese",
    flag: "/japan.png",
  },
  {
    name: "Mandarin",
    flag: "/china.png",
  },
  {
    name: "Mandarin Chinese",
    flag: "",
  },
  {
    name: "Korean",
    flag: "/korea.png",
  },
  {
    name: "Hindi",
    flag: "/india.png",
  },
];

export const hero_options = [
  {
    label: "Flights",
    icon: LiaPlaneSolid,
  },
  {
    label: "Hotels",
    icon: IoBedOutline,
  },
  {
    label: "Cars",
    icon: IoCarSportOutline,
  },
  {
    label: "Cruises",
    icon: LuShip,
  },
  {
    label: "Attractions",
    icon: IoEarthSharp,
  },
] as const;
