import Link from 'next/dist/client/link';
import React from 'react'

const routes = [
  { label: "Home", route: "/" },
  { label: "About", route: "/about" },
  { label: "Services", route: "/services" },
  { label: "Testimonials", route: "/testimonials" },
  { label: "Contact", route: "/contact" },
];

const Navbar = () => {
  return <div>
    {routes.map((val,ind)=>
     <Link key={ind} href={val.route}>{val.label}</Link>
  )}</div>;
}

export default Navbar