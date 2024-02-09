
import Image from "next/image";
import BrandSwiper from "@/components/Swiper/BrandSwiper";
import { HomeWrapper } from "./page.style";
import HeroBG from '@/assets/hero.jpg'

export default function Home() {
  return (
    <HomeWrapper>
      <section className="hero">
        <Image src={HeroBG} alt="hero background"/>
      </section>
      <section>Services Preview</section>
      <section>
        Clari's Cleaning is Trusted By
        <BrandSwiper />
      </section>
    </HomeWrapper>
  );
}
