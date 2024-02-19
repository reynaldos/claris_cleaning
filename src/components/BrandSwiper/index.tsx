"use client";

import React from "react";
import Image from "next/image";
import {  SwiperSlideStyled, SwiperStyled } from "@/components/BrandSwiper/styles";
import { Autoplay, EffectCoverflow, Mousewheel, Navigation,Pagination } from "swiper/modules";

import BrandList from "@/assets/trustedBrands";

const BrandSwiper = () => {
  return (
    <>
      {BrandList?.length > 0 && (
        <SwiperStyled
          modules={[Pagination, Mousewheel, Autoplay]}
          pagination={{
            clickable:true
          }}
          loop={true}
          autoplay={{
            delay: 5000
          }}
          slidesPerView={2}
          spaceBetween={"20px"}
          lazyPreloadPrevNext={1}
          mousewheel={{
            forceToAxis: true,
          }}
          breakpoints={{
            // when window width is >= 430px
            430: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            // when window width is >= 767px
            767: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            // when window width is >= 1000px
            1000: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
        >
          {BrandList.map((brand, index: number) => (
            <SwiperSlideStyled key={index} className="brand">
              <Image src={brand.src} alt={brand.alt + " logo"} />
            </SwiperSlideStyled>
          ))}
        </SwiperStyled>
      )}
    </>
  );
};

export default BrandSwiper;
