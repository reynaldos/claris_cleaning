import React from "react";
import { FooterConainer, FooterWrap } from "./Footer.styles";
import routes from "@/components/Navbar/routes";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/ccc_logo.webp";
import Melaleuca from "@/assets/melaleuca_logo.webp";

import {
  FaClock,
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
              aria-label="Claris Cleaning Facebook"
              href={FACEBOOK_LINK}
              target="_blank"
            >
              <FaFacebook size={40} />
            </a>
            <a
              aria-label="Claris Cleaning Instagram"
              href={INSTAGRAM_LINK}
              target="_blank"
            >
              <FaInstagram size={40} />
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
            <a href={SURVEY_LINK} target="_blank">
              <Button role="link" aria-label="Take Survey">
                Take Survey
              </Button>
            </a>
            <Link href={PAGE_ROUTE.FREE_QUOTE}>
              <Button role="link" aria-label="Get a free quote">
                Get A Free Quote
              </Button>
            </Link>
            <a href={`tel:${BUSINESS_PHONE}`}>
              <Button role="link" aria-label="Call Claris Cleaning">
                <FaPhone size={18} />
                Call Us Now
              </Button>
            </a>
          </div>
        </section>

        {/* about */}
        <section className="infoStrip">
          <a
            aria-label="Claris Cleaning Phone NUmber"
            href={`tel:${BUSINESS_PHONE}`}
          >
            <FaPhone size={18} />
            {formatPhoneNumber(BUSINESS_PHONE)}
          </a>

          <a
            aria-label="Claris Cleaning Email"
            href={`mailto:${BUSINESS_EMAIL}?subject = Cleaning Service Questions`}
          >
            <IoIosMail size={24} />
            {BUSINESS_EMAIL}
          </a>

          <a
            aria-label="Claris Cleaning Location"
            href={`${GOOGLE_MAPS_LINK}${BUSINESS_ADDRESS}`}
          >
            <FaLocationDot size={20} />
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
        <a
          aria-label="Website designer and builder portfolio"
          href={DEV_LINK}
          target="_blank"
        >
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
