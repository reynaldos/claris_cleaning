'use client'
 
import React, { useEffect, useState } from "react";
import { usePathname } from 'next/navigation';
import Link from 'next/link'
import { LinkWrapper } from './Navbar.styles';
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import useMediaQuery from "@/hooks/useMediaQuery";

import navRoutes from "./routes";
import Button from "../Buttons";
import { PAGE_ROUTE, SURVEY_LINK } from "@/constants/info";

import {
  unlock as enableBodyScroll,
  lock as disableBodyScroll,
} from "tua-body-scroll-lock";


export const Links = () => {
  const pathname = usePathname();
  const  { windowWidth, desiredBp }  = useMediaQuery();

  const [openNav,setOpenNav] = useState(false);

  useEffect(() => {
    if (openNav && !desiredBp("md")) {
      setOpenNav(false);
      enableBodyScroll();
    }
  }, [desiredBp("md"), windowWidth]);

  useEffect(() => {setOpenNav(false);  enableBodyScroll();}, [pathname]);

  const routeLinks = navRoutes.map((val) => (
    <Link
      key={val.route}
      href={val.route}
      className="link"
      data-isactive={pathname === val.route}
      aria-current={pathname === val.route ? "page" : undefined}
    >
      {val.label}
    </Link>
  ));
  
  return (
    <LinkWrapper $mobileNavOpen={openNav}>
      <span className={"linkList"}>
        {routeLinks}
        <Button href={PAGE_ROUTE.FREE_QUOTE} className="nav-btn">
          Get a Quote
        </Button>
        <Button href={SURVEY_LINK} target="_blank" className="nav-btn">
          Leave Review
        </Button>
      </span>

      <span className={"hamList"} id="mobile-nav">
        {routeLinks}

        <div className="btnWrap">
          <Button href={PAGE_ROUTE.FREE_QUOTE}>
            Book Your<br/>Cleaning
          </Button>
          <Button href={SURVEY_LINK} target="_blank">
            Leave<br/>Review
          </Button>
        </div>
      </span>

      <button
        type="button"
        aria-label={openNav ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={openNav}
        aria-controls="mobile-nav"
        className="hamburger"
        onClick={() => {
          !openNav ? disableBodyScroll() : enableBodyScroll();

          setOpenNav((old) => !old);
        }}
      >
        {openNav ? <RxCross1 size={32} aria-hidden="true" /> : <RxHamburgerMenu size={32} aria-hidden="true" />}
      </button>
    </LinkWrapper>
  );
  
}
