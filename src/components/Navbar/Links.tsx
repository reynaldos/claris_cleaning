'use client'
 
import React, { useEffect, useState } from "react";
import { usePathname } from 'next/navigation';
import Link from 'next/link'
import { LinkWrapper } from './Navbar.styles';
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import useMediaQuery from "@/hooks/useMediaQuery";

import navRoutes from "./routes";
import Button from "../Buttons";
import { PAGE_ROUTE } from "@/constants/info";


export const Links = () => {
  const pathname = usePathname();
  const  { windowWidth, desiredBp }  = useMediaQuery();

  const [openNav,setOpenNav] = useState(false);

  useEffect(() => {
    if (openNav && !desiredBp("md")) {
      setOpenNav(false);
    }
  }, [desiredBp("md"), windowWidth]);

  useEffect(() => setOpenNav(false), [pathname]);
  
  
  return (
    <LinkWrapper $mobileNavOpen={openNav}>
      <span className={"linkList"}>
        {navRoutes.map((val, ind) => (
          <Link key={ind} href={val.route}>
            <button className="link" data-isactive={pathname === val.route}>
              {val.label}
            </button>
          </Link>
        ))}
        <Link href={PAGE_ROUTE.FREE_QUOTE}>
          <Button>Get A Quote</Button>
        </Link>
      </span>

      <span className={"hamList"}>
        {navRoutes.map((val, ind) => (
          <Link key={ind} href={val.route}>
            <button className="link" data-isactive={pathname === val.route}>
              {val.label}
            </button>
          </Link>
        ))}

        <div className="btnWrap">
          <Link href={PAGE_ROUTE.FREE_QUOTE} className="quote">
            <Button>Book Your Cleaning</Button>
          </Link>
        </div>
      </span>

      <button
        className="hamburger"
        onClick={() => {
          setOpenNav((old) => !old);
        }}
      >
        {openNav ? <RxCross1 size={32} /> : <RxHamburgerMenu size={32} />}
      </button>
    </LinkWrapper>
  );
  
}
