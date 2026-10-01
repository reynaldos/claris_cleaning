import React from "react";
import { FooterConainer, FooterWrap } from "./Footer.styles";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/ccc_logo.webp";

import {
  FaFacebook,
  FaInstagram,
  FaLocationDot,
  FaPhone,
} from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import Button from "../Buttons";

import {
  BUSINESS_ADDRESS,
  BUSINESS_EMAIL,
  BUSINESS_PHONE,
  GOOGLE_MAPS_LINK,
  DEV_LINK,
  FACEBOOK_LINK,
  INSTAGRAM_LINK,
  PAGE_ROUTE,
  SURVEY_LINK,
} from "@/constants/info";
import navRoutes from "@/components/Navbar/routes";
import { formatPhoneNumber } from "@/utils/sting";

const Footer = () => {
  return (
    <FooterConainer>
      <FooterWrap>
        {/* logo */}
        <section className="logo-socials">
          <div>
            <Image src={Logo} alt={"Claris Cleaning Crew Logo"} />
          </div>
          <div>
            <a
              aria-label="Clari's Cleaning Facebook"
              href={FACEBOOK_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={40} aria-hidden="true" />
            </a>
            <a
              aria-label="Clari's Cleaning Instagram"
              href={INSTAGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={40} aria-hidden="true" />
            </a>
          </div>
        </section>

        {/* nav routes */}
        <section className="routes">
          <div>
            {navRoutes.map((link, index) => (
              <Link key={index} href={link.route}>
                {link.label}
              </Link>
            ))}
          </div>
          <div>
            <Button href={SURVEY_LINK} target="_blank">
              Leave A Review
            </Button>
            <Button href={PAGE_ROUTE.FREE_QUOTE}>Get A Free Quote</Button>
            <Button href={`tel:${BUSINESS_PHONE}`}>
              <FaPhone size={18} aria-hidden="true" />
              Call Us Now
            </Button>
          </div>
        </section>

        {/* about */}
        <section className="infoStrip">
          <a href={`tel:${BUSINESS_PHONE}`}>
            <FaPhone size={18} aria-hidden="true" />
            {formatPhoneNumber(BUSINESS_PHONE)}
          </a>

          <a
            href={`mailto:${BUSINESS_EMAIL}?subject = Cleaning Service Questions`}
          >
            <IoIosMail size={24} aria-hidden="true" />
            {BUSINESS_EMAIL}
          </a>

          <a href={`${GOOGLE_MAPS_LINK}${BUSINESS_ADDRESS}`}>
            <FaLocationDot size={20} aria-hidden="true" />
            {BUSINESS_ADDRESS}
          </a>
          {/* 
          <a>
            <FaClock size={18} />
            Always Open
          </a> */}
        </section>
      </FooterWrap>

      <span>
        <a href={DEV_LINK} target="_blank" rel="noopener noreferrer">
          Designed & Built By Rey Sanchez
        </a>
        <p>
          ©{new Date().getFullYear()} Clari&apos;s Cleaning - All Rights
          Reserved
        </p>
      </span>
    </FooterConainer>
  );
};

export default Footer;
