
import Link from "next/link";
import { HomeWrapper, BannerSection, ContentWrap } from "./page.style";

import BrandSwiper from "@/components/Swiper/BrandSwiper";
import ThumbUpIcon from "@/assets/icons/thumbUp";
import StarIcon from "@/assets/icons/star";
import CheckBoxIcon from "@/assets/icons/checkBox";
import Button from "@/components/Buttons";

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
          <Link href={'/free-quote'}>
            <Button>Book Your Cleaning Today</Button>
          </Link>
        </ContentWrap>
      </BannerSection>

      <section>Services Preview</section>
      <section>
        Clari&apos;s Cleaning is Trusted By
        <BrandSwiper />
      </section>
    </HomeWrapper>
  );
}
