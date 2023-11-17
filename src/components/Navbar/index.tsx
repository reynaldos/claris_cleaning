import Image from "next/image";
import React from "react";

import {
  BottomNavContainer,
  TopNavContainer,
} from "./Navbar.styles";
import { Links } from "./Links";

import { FaFacebook, FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import Logo from "@/assets/ccc_logo.png";
import { MaxWidthWrapper } from "../Container";

const Navbar = () => {
 

  return (
    <>
      {/* main nav */}
      <TopNavContainer>
        <span className="bar">
          <MaxWidthWrapper style={{ display: "flex", justifyContent: "flex-end" }}>
            <a>
              <FaPhone size={18} />
              863-808-766
            </a>

            <a>
              <IoIosMail size={28} />
              gabriel@clariscleaning.com
            </a>
          </MaxWidthWrapper>
        </span>

        <section>
          <Image
            src={Logo}
            width="200"
            alt="Clari's Cleaning Crew logo"
            priority
            quality={100}
          />

          <Links />

        </section>
      </TopNavContainer>

      {/* mobile bottom nav */}
      <BottomNavContainer>
        <button>
          <a>
            <FaFacebook size={38}/>
          </a>
        </button>
        <button>
          <a>
            <FaPhone size={40}/>
          </a>
        </button>
        <button>
          <a>
            <IoIosMail size={38}/>
          </a>
        </button>
      </BottomNavContainer>
    </>
  );
};

export default Navbar;
