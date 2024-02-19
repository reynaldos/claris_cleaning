"use client"

import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

export const SwiperStyled = styled(Swiper)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 133%;
  padding: 1rem;
  overflow: visible !important;

  @media screen and (max-width: ${({ theme }) => theme.bpts.sm}) {
    width: 100%;
    transform: unset;
    left: 0;
    mask-image: unset;
    -webkit-mask-image: unset;
  }
`;

export const SwiperSlideStyled = styled(SwiperSlide)`
  z-index: 1;
  border-radius: 42px;
  border: 3px solid #fff;
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(100px);

  filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.15));
  -webkit-filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.15));

  transition: opacity 300ms ease-in-out;

  @media screen and (min-width: ${({ theme }) => theme.bpts.sm}) {
    &:not(.swiper-slide-next) {
      opacity: 0.3;
    }
  }

  position: relative;
  padding: 36px 24px;
  height: 244px;
  /* min-width: 390px !important; */

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
    border: 2px solid white;
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

  button:hover {
    background-color: rgba(255, 255, 255, 0.33);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(100px);
  }
`;