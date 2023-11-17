'use client'
 
import React, { useEffect, useState } from "react";
import { usePathname } from 'next/navigation';
import Link from 'next/link'
import routes from '@/constants/routes';
import { LinkWrapper } from './Navbar.styles';
import { RxHamburgerMenu } from "react-icons/rx";
import useMediaQuery from "@/hooks/useMediaQuery";


export const Links = () => {
  const pathname = usePathname();
  const  { desiredBp }  = useMediaQuery();

  const [openNav,setOpenNav] = useState(false);

  useEffect(() => {
    if (openNav && !desiredBp("md")) {
      setOpenNav(false);
    }
  }, [desiredBp("md")]);

  useEffect(() => setOpenNav(false), [pathname]);
  
  
  return (
    <LinkWrapper>
      <span className={openNav ? "hamList" : "linkList"}>
        {routes.map((val, ind) => (
          <Link href={val.route}>
            <button key={ind} data-isactive={pathname === val.route}>
              {val.label}
            </button>
          </Link>
        ))}
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
