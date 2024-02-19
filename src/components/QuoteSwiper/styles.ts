"use client"

import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

export const SwiperStyled = styled(Swiper)`
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  height: 100%;
  width: calc(150% - 4rem);
  margin: 0 2rem;
  padding: 1rem;
  overflow-y: visible !important;

  -webkit-mask-image: linear-gradient(
    to right,
    transparent,
    black 1rem,
    black calc(100% - 1rem),
    transparent
  );
  mask-image: linear-gradient(
    to right,
    transparent,
    black 1rem,
    black calc(100% - 1rem),
    transparent
  );
`;

export const SwiperSlideStyled = styled(SwiperSlide)`
  z-index: 1;
  border-radius: 42px;
  border: 3px solid #fff;
  /* background: rgba(255, 255, 255, 0.13); */
  background-color: rgba(255, 255, 255, 0.33);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(100px);

  position: relative;
  padding: 36px 24px;
  height: 244px;
  min-width: 390px !important;

  svg {
    height: 50px;
    position: absolute;
    left: 42px;
    top: 0;
    transform: translate(0%, -50%);
  }

  .contentWrap {
    margin-top: 12px;
    height: 100%;

    display: flex;
    flex-direction: column;
    /* min-width: 580px !important; */

    p {
      flex: 1;
      height: 65px;
      color: #fff;
      text-align: center;
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: 1.25; /* 131% */
      /* letter-spacing: 0.4px; */
      overflow-y: auto;
      color: ${({ theme }) => theme.colors.white};

      -webkit-mask-image: linear-gradient(
        to bottom,
        transparent,
        black 4px,
        black calc(100% - 4px),
        transparent
      );
      mask-image: linear-gradient(
        to bottom,
        transparent,
        black 4px,
        black calc(100% - 4px),
        transparent
      );

      &::-webkit-scrollbar {
        -webkit-appearance: none;
        width: 7px;
      }

      &::-webkit-scrollbar-thumb {
        border-radius: 4px;
        background-color: rgba(255, 255, 255, 0.65);
        box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
      }

      &::-webkit-scrollbar:vertical {
        border-radius: 4px;
        background-color: rgba(255, 255, 255, 0.25);
      }
    }

    h4 {
      font-size: 22px;
      margin-top: 8px;
      text-align: center;
      color: ${({ theme }) => theme.colors.gold400};
    }

    h6 {
      font-size: 12px;
      white-space: pre-line;
      text-align: center;
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;


export const BtnWrap = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  gap: 36px;
  bottom: 30px;
  left: 0;
  width: 100%;

  button {
    background-color: transparent;
    color: white;
    border: 1px solid white;
    border-radius: 100%;
    height: 40px;
    width: 40px;

    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    svg {
      height: 20px;
      width: 20px;
    }
  }

  .swiper-button-lock {
    display: block !important;
  }
`;