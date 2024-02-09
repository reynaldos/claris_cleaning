import React from 'react'
import { FooterConainer, FooterWrap } from './Footer.styles'
import routes from '@/constants/routes';
import Link from 'next/link';
import Image from "next/image";
import Logo from "@/assets/ccc_logo.png";
import Melaleuca from "@/assets/melaleuca_logo.png";

;
import { FaClock, FaFacebook, FaInstagram, FaLocationDot, FaPhone } from 'react-icons/fa6';
import { IoIosMail } from 'react-icons/io';


const Footer = () => {
  return (
    <FooterConainer>
      <FooterWrap>
        {/* about */}
        <section>
          <a>
            <FaPhone size={18} />
            863-808-766
          </a>

          <a>
            <IoIosMail size={22} />
            gabriel@clariscleaning.com
          </a>

          <a>
            <FaLocationDot size={20} />
            2861 Kinsley Dr,
            <br />
            Lakelend, FL 33813
          </a>

          <a>
            <FaClock size={18} />
            Always Open
          </a>
        </section>

        {/* navigation */}
        <section>
          {routes.map((val, ind) => (
            <Link key={ind} href={val.route}>
              <button>{val.label}</button>
            </Link>
          ))}
        </section>

        {/* logo */}
        <section>
          {/* <Image
            src={Logo}
            width="250"
            alt="Clari's Cleaning Crew logo"
            priority
            quality={100}
          /> */}

          <p>Enjoyed our service?</p>
          <button className="survey">Take Survey</button>

          <div>
            <FaFacebook size={22} />
            <FaInstagram size={22} />
          </div>
        </section>

        {/* ad */}
        <section>
          <a href="" target="_blank">
            <Image
              src={Melaleuca}
              height="60"
              alt="Melaleuca logo"
              priority
              quality={100}
            />
          </a>

          <p>
            We At Clari&apos;s Cleaning Use Green and Safe Cleaning Products
          </p>
        </section>
      </FooterWrap>

      <span>
        <a>Designed & Built By Rey Sanchez</a>
        <p>©2023 Clari&apos;s Cleaning - All Rights Reserved</p>
      </span>
    </FooterConainer>
  );
}

export default Footer

