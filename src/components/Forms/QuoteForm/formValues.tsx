import { ReactElement } from "react";

import ResidentialIcon from "@/assets/icons/residential";
import OfficeIcon from "@/assets/icons/office";
import BadgeIcon from "@/assets/icons/badge";
import ConstructionIcon from "@/assets/icons/construction";



export enum RoomCount {
  ONE = "1 Room",
  TWO = "2 Rooms",
  THREE = "3 Rooms",
  FOUR = "4 Rooms",
  FIVE = "5 Rooms",
  PLUS = "6+ Rooms",
}

export enum BathroomCount {
  ONE = "1 Bathroom",
  TWO = "2 Bathrooms",
  THREE = "3 Bathrooms",
  FOUR = "4 Bathrooms",
  FIVE = "5 Bathrooms",
  PLUS = "6+ Bathrooms",
}

export enum SquareFootage {
  XXS = "Less than 1000 sq. ft.",
  XS = "1000 sq. ft.",
  S = "2000 sq. ft.",
  M = "3000 sq. ft.",
  LG = "4000 sq. ft.",
  XL = "5000 sq. ft.",
  XXL = "6000+ sq. ft.",
}


export enum HearAboutUs {
  SEARCH = "Internet Search (Google, Bing, etc.)",
  FACEBOOK = "Facebook",
  STREET_SIGN = "Street Sign",
  REFFERED = "Referral",
  YELP = "Yelp",
  OTHER = "Other",
}

export enum HowSoon {
  ASAP = "ASAP",
  TWO = "Within next Two Weeks",
  MONTH = "Within the month",
  FLEX = "Flexible"
}


export enum ContactPermission {
  YES = "Yes",
  NO = "No",
}


export enum VistFrequency {
  WEEKLY = "Weekly",
  BIWEEKLY = "Every Other Week",
  MONTHLY = "Monthly",
  TRY = "Try Us Out",
}


interface ServiceType {
  label: string;
  icon: ReactElement;
}

export const quoteServices: ServiceType[] | any[] = [
  {
    label: `Residential\nCleaning`,
    icon: <ResidentialIcon color="#fff" />,
  },
  {
    label: `Office\nCleaning`,
    icon: <OfficeIcon color="#fff" />,
  },
  ,
  {
    label: `Construction\nCleaning`,
    icon: <ConstructionIcon color="#fff" />,
  },
  {
    label: `Other\n`,
    icon: <BadgeIcon color="#fff" />,
  },
];