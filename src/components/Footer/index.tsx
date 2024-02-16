import React from 'react';
import { FooterConainer, FooterWrap } from './Footer.styles'
import routes from '@/components/Navbar/routes';
import Link from 'next/link';
import Image from "next/image";
import Logo from "@/assets/ccc_logo.png";
import Melaleuca from "@/assets/melaleuca_logo.png";


import { FaClock, FaFacebook, FaInstagram, FaLocationDot, FaPhone } from 'react-icons/fa6';
import { IoIosMail } from 'react-icons/io';
import Button from '../Buttons';


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
            <a>
              <FaFacebook size={40} />
            </a>
            <a>
              <FaInstagram size={40} />
            </a>
          </div>
        </section>

        {/* nav routes */}
        <section className="routes">
          <div>
            <Link href={"/"}>Home</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/services"}>Services</Link>
            <Link href={"/contact"}>Contact Us</Link>
          </div>
          <div>
            <a href={""}>
              <Button>Take Survey</Button>
            </a>
            <Link href={"/free-quote"}>
              <Button>Get A Free Quote</Button>
            </Link>
            <a href={""}>
              <Button>
                <FaPhone size={18} />
                Call Us Now
              </Button>
            </a>
          </div>
        </section>

        {/* about */}
        <section className="infoStrip">
          <a>
            <FaPhone size={18} />
            863-808-766
          </a>

          <a>
            <IoIosMail size={24} />
            gabriel@clariscleaning.com
          </a>

          <a>
            <FaLocationDot size={20} />
            {/* 2861 Kinsley Dr,  */}
            Lakelend, FL
            {/* 33813 */}
          </a>
          {/* 
          <a>
            <FaClock size={18} />
            Always Open
          </a> */}
        </section>
      </FooterWrap>

      <span>
        <a href="https://reysanchez.dev" target="_blank">
          Designed & Built By Rey Sanchez
        </a>
        <p>©2023 Clari&apos;s Cleaning - All Rights Reserved</p>
      </span>
    </FooterConainer>
  );
}

export default Footer

