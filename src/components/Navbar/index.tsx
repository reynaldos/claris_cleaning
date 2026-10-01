import Image from "next/image";
import React from "react";
import Link from "next/link";

import { BottomNavContainer, TopNavContainer } from "./Navbar.styles";
import { Links } from "./Links";

import { FaFacebook, FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import Logo from "@/assets/ccc_logo.webp";
import { MaxWidthWrapper } from "../Container";

import {
  BUSINESS_EMAIL,
  BUSINESS_PHONE,
  FACEBOOK_LINK,
  PAGE_ROUTE,
} from "@/constants/info";
import { formatPhoneNumber } from "@/utils/sting";

const Navbar = () => {
  return (
    <>
      {/* main nav */}
      <TopNavContainer aria-label="Main">
        <span className="bar">
          <MaxWidthWrapper
            style={{ display: "flex", justifyContent: "flex-end" }}
          >
            <a href={`tel:${BUSINESS_PHONE}`}>
              <FaPhone size={18} aria-hidden="true" />
              {formatPhoneNumber(BUSINESS_PHONE)}
            </a>

            <a
              href={`mailto:${BUSINESS_EMAIL}?subject = Cleaning Service Questions`}
            >
              <IoIosMail size={28} aria-hidden="true" />
              {BUSINESS_EMAIL}
            </a>
          </MaxWidthWrapper>
        </span>

        <section>
          <Link href={PAGE_ROUTE.HOME} aria-label="Clari's Cleaning Crew home">
            <Image
              src={Logo}
              width="200"
              alt="Clari's Cleaning Crew logo"
              priority
              quality={100}
            />
          </Link>

          <Links />
        </section>
      </TopNavContainer>

      {/* mobile bottom nav */}
      <BottomNavContainer aria-label="Quick contact">
        <a
          aria-label="Clari's Cleaning Facebook"
          href={FACEBOOK_LINK}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook size={38} aria-hidden="true" />
        </a>
        <a aria-label="Call Clari's Cleaning" href={`tel:${BUSINESS_PHONE}`}>
          <FaPhone size={40} aria-hidden="true" />
        </a>
        <a
          aria-label="Email Clari's Cleaning"
          href={`mailto:${BUSINESS_EMAIL}?subject = Cleaning Service Questions`}
        >
          <IoIosMail size={38} aria-hidden="true" />
        </a>
      </BottomNavContainer>
    </>
  );
};

export default Navbar;
