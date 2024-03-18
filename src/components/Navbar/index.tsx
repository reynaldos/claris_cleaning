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
      <TopNavContainer>
        <span className="bar">
          <MaxWidthWrapper
            style={{ display: "flex", justifyContent: "flex-end" }}
          >
            <a href={`tel:${BUSINESS_PHONE}`}>
              <FaPhone size={18} />
              {formatPhoneNumber(BUSINESS_PHONE)}
            </a>

            <a
              href={`mailto:${BUSINESS_EMAIL}?subject = Cleaning Service Questions`}
            >
              <IoIosMail size={28} />
              {BUSINESS_EMAIL}
            </a>
          </MaxWidthWrapper>
        </span>

        <section>
          <Link href={PAGE_ROUTE.HOME}>
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
      <BottomNavContainer>
        <button aria-label={`Facebook`} role="link">
          <a href={FACEBOOK_LINK} target="_blank">
            <FaFacebook size={38} />
          </a>
        </button>
        <button aria-label={`Phone number`} role="link">
          <a href={`tel:${BUSINESS_PHONE}`}>
            <FaPhone size={40} />
          </a>
        </button>
        <button aria-label={`Email`} role="link">
          <a
            href={`mailto:${BUSINESS_EMAIL}?subject = Cleaning Service Questions`}
          >
            <IoIosMail size={38} />
          </a>
        </button>
      </BottomNavContainer>
    </>
  );
};

export default Navbar;
