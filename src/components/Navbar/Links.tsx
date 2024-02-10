'use client'
 
import React, { useEffect, useState } from "react";
import { usePathname } from 'next/navigation';
import Link from 'next/link'
import { LinkWrapper } from './Navbar.styles';
import { RxHamburgerMenu } from "react-icons/rx";
import useMediaQuery from "@/hooks/useMediaQuery";
import QuoteBtn from "@/components/Buttons/Quote";

import navRoutes from "./routes";


export const Links = () => {
  const pathname = usePathname();
  const  { desiredBp }  = useMediaQuery();

  const [openNav,setOpenNav] = useState(false);

  useEffect(() => {
    if (openNav && !desiredBp("lg")) {
      setOpenNav(false);
    }
  }, [desiredBp("lg")]);

  useEffect(() => setOpenNav(false), [pathname]);
  
  
  return (
    <LinkWrapper>
      <span className={openNav ? "hamList" : "linkList"}>
        {navRoutes.map((val, ind) => (
          <Link key={ind} href={val.route}>
            <button data-isactive={pathname === val.route}>{val.label}</button>
          </Link>
        ))}
        <QuoteBtn />
      </span>
      <button
        className="hamburger"
        onClick={() => {
          setOpenNav((old) => !old);
        }}
      >
        <RxHamburgerMenu size={32} />
      </button>
    </LinkWrapper>
  );
  
}
