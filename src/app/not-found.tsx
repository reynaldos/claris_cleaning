"use client";

import Button from "@/components/Buttons";
import { PAGE_ROUTE } from "@/constants/info";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

import errorImage from '@/assets/icons/404.svg';
import Image from "next/image";

const ErrorPage = () => {
  return (
    <Errorbox>
      <span>
        <Image src={errorImage} alt="404" />
      </span>

      <span>
        <h1>Page Not Found!</h1>
        <Link href={PAGE_ROUTE.HOME}>
          <Button>Go Back Home</Button>
        </Link>
      </span>
    </Errorbox>
  );
};

export default ErrorPage;


const Errorbox = styled.div`
  padding: 24px;
  min-height: 360px;
  width: 100%;
  display: flex;
  flex-direction: column;

  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 24px;
  color: #3f3d56;

  img {
    height: 250px;
    width: fit-content;
    object-fit: contain;
  }

  span {
    width: 390px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;
  }
`;



