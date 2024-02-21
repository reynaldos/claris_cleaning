"use client";

import Button from "@/components/Buttons";
import { PAGE_ROUTE } from "@/constants/info";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

const ErrorPage = () => {
  return <Errorbox>
    <h1>Page Not Found!</h1>
    <Link href={PAGE_ROUTE.HOME}>
    <Button>Go Back Home</Button>
    </Link>
  </Errorbox>;
};

export default ErrorPage;


const Errorbox = styled.div`
  height: 360px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;



