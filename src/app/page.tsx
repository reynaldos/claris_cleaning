import Link from "next/link";
import { HomeWrapper, BannerSection, ContentWrap } from "./page.style";

import { PAGE_ROUTE } from "@/constants/info";

import ThumbUpIcon from "@/assets/icons/thumbUp";
import StarIcon from "@/assets/icons/star";
import CheckBoxIcon from "@/assets/icons/checkBox";
import Button from "@/components/Buttons";

// sections
import ServiceArea from "@/sections/serviceArea";
import GreenCleaning from "@/sections/greenCleaning";
import HomeIntro from "@/sections/homeIntro";
import Testimonials from "@/sections/testimonials";
import TrustedBrandsSection from "@/sections/trustedBrands";

export default function Home() {
  return (
    <HomeWrapper>
      <BannerSection>
        <ContentWrap>
          <h1>
            Clean Living
            <br />
            Starts Here
          </h1>
          <span>
            <div>
              <ThumbUpIcon />
              <p>Quality</p>
            </div>
            <div>
              <StarIcon />
              <p>Consistency</p>
            </div>
            <div>
              <CheckBoxIcon />
              <p>Trustworthy</p>
            </div>
          </span>
          <Link href={PAGE_ROUTE.FREE_QUOTE}>
            <Button>Book Your Cleaning Today</Button>
          </Link>
        </ContentWrap>
      </BannerSection>

      <HomeIntro />

      <ServiceArea />

      <Testimonials />

      <GreenCleaning />

      <TrustedBrandsSection />
    </HomeWrapper>
  );
}
