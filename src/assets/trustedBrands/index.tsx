import { StaticImageData } from 'next/image';
import BetterEarth from './betterearth-logo.webp';
import ChildrenDental from "./childrenDental-logo.webp";
import Firestone from "./firestone-logo.webp";
import Henry from "./henry-logo.webp";
import Keller from "./keller-logo.webp";
import Mazzella from "./mazzella-logo.webp";
import SouthState from "./southstate-logo.webp";

const brands: {
  src: StaticImageData;
  alt: String;
}[] = [
  { src: BetterEarth, alt: "Better Earth" },
  { src: ChildrenDental, alt: "Children & Teen Dental of Florida" },
  { src: Firestone, alt: "Firestone Complete Auto Care" },
  { src: Henry, alt: "Henry" },
  { src: Keller, alt: "Keller Williams Reality" },
  { src: Mazzella, alt: "Mazzella" },
  { src: SouthState, alt: "South State" },
];



export default brands;