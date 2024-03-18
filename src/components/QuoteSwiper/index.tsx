"use client";

import React from "react";
import Image from "next/image";
import { SwiperSlideStyled, SwiperStyled, BtnWrap } from "./styles";
import { Autoplay, Mousewheel, Navigation } from "swiper/modules";
import QuotesIcon from "@/assets/icons/quotes";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

interface QuoteType {
  statement: string;
  author: string;
  title?: string | undefined;
}

const QuoteSwiper = () => {

  const QuoteList: QuoteType[] = [
    {
      statement:
        "Gabriel and his crew are the best. They are very professional and pleasant to work with.. Always on time and they never stop until everything is cleaned. I highly recommend them and will continue to use them!!!",
      author: "Elizabeth Daughtrey",
    },
    {
      statement:
        "Clari's Cleaning Crew is a top-notch cleaning service. I use them for my personal home, our rentals, homes that we have for sale and also refer them to all of our clients. They are prompt, courteous and affordable – and clean our homes like we would. Nothing better than walking into a fresh-smelling, clean home. Thank you Clari's Cleaning Crew!",
      author: "David Rhinehart",
      title: "Diversified Real Estate Ventures",
    },
    {
      statement:
        "Clari's Cleaning Crew did a great job on a property we recently renovated! Prior to Clari's arrival, there was a ton of dust everywhere in this home due to the new floor installation and other renovations. They really made our rental property sparkle! I highly recommend Clari's Cleaning Crew for all of your commercial and residential cleaning needs.",
      author: "Rick Wright",
    },
    {
      statement:
        "We are a local birth center and massage practice that just needs help keeping everything clean and tidy. Clari's goes above and beyond to make the environment clean and works hand and hand to keep our facility ready for all. If your looking for professional and trustworthy cleaning, look no further!!",
      author: "James Morrow",
      title: "Celebrate Birth",
    },
    {
      statement:
        "We have had Clari's clean our home a couple of times. Each time has been spectacular! Each time we wonder why we don't have it done regularly (still wondering I guess now that I think about it). Even though we clean regularly ourselves, every time we have them in, we undoubtedly walk in and can see smell and feel the difference!",
      author: "Paul Yamilkoski",
    },
    {
      statement:
        "Gabriel and his team are amazing! The work on my personal home, my office, and my rentals. They are always doing an amazing job!",
      author: "Shannon Cornell",
      title: "PMI Arrico Realty and Property Management Lakeland",
    },
    {
      statement:
        "Claris Cleaning has established a company culture of excellence. I frequently get calls from owners asking what they can do to make my service even better. My place has never been so clean, and yet they honestly desire to do even more. Best cleaning service I've ever had, period.",
      author: "Kevin",
    },
    {
      statement:
        "Clari's Cleaning Crew is a top-notch cleaning service. I use them for my personal home, our rentals, homes that we have for sale and also refer them to all of our clients. They are prompt, courteous and affordable, and clean our homes like we would. Nothing better than walking into a fresh-smelling, clean home. Thank you Clari's Cleaning Crew!",
      author: "David Rhinehart",
      title: "Diversified Real Estate Ventures",
    },
    {
      statement:
        "I just recently engaged Clari's Cleaning Crew to do monthly cleaning at my home. I had a renovation done that required extensive deep cleaning. They did a great job. They arrived when they said they would, worked hard and got most of the renovation dust cleaned up, washed the floors, vacuumed everything, washed the counters and everything on them, and replaced all the items in their original place. Great job…worth every penny!",
      author: "Annie Buckline",
    },
    {
      statement:
        "Clari's Cleaning Crew did a great job on a property we recently renovated! Prior to Clari's arrival, there was a ton of dust everywhere in this home due to the new floor installation and other renovations. They really made our rental property sparkle! I highly recommend Clari’s Cleaning Crew for all of your commercial and residential cleaning needs.",
      author: "Jeff Steve",
    },
  ];

  return (
    <>
      {QuoteList?.length > 0 && (
        <SwiperStyled
          modules={[Navigation, Mousewheel, Autoplay]}
          navigation={{
            prevEl: ".prev",
            nextEl: ".next",
          }}
          loop={true}
          autoplay={{
            delay: 20000,
          }}
          slidesPerView={1}
          spaceBetween={"20px"}
          lazyPreloadPrevNext={1}
          mousewheel={{
            forceToAxis: true,
          }}
          breakpoints={{
            // when window width is >= 430px
            576: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
        >
          {QuoteList.map((quote, index: number) => (
            <SwiperSlideStyled key={index}>
              <QuotesIcon />

              <div className="contentWrap">
                <p>{quote.statement}</p>
                <h4>{quote.author}</h4>
                <h6>{quote.title ?? `\n`}</h6>
              </div>
            </SwiperSlideStyled>
          ))}
        </SwiperStyled>
      )}
      <BtnWrap>
        <button aria-label={`Show previous quote`} className="prev">
          <FaChevronLeft />
        </button>

        <button aria-label={`Show next quote`}  className="next">
          <FaChevronRight />
        </button>
      </BtnWrap>
    </>
  );
};

export default QuoteSwiper;
