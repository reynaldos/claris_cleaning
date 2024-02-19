import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

export const SwiperStyled = styled(Swiper)`
  height: 100%;
  width: calc(100% - 4rem);
  margin: 0 2rem;
  padding: 1rem;

  .swiper-pagination {
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: end;
    gap: 8px;

    .swiper-pagination-bullet {
      background-color: ${({ theme }) => theme.colors.grey300};
      height: 15px;
      width: 15px;
      border-radius: 100%;
			cursor: pointer;
    }

    .swiper-pagination-bullet-active {
      background-color: ${({ theme }) => theme.colors.grey700};
    }
  }

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

  &.brand {
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 20px;
    filter: drop-shadow(2px 2px 5px #00000053);
    -ms-filter: drop-shadow(2px 2px 5px #00000053);
    -webkit-filter: drop-shadow(2px 2px 5px #00000053);

    img {
      pointer-events: none;
      padding: 0.5rem;

      margin: 0 auto;
      height: 100%;
      width: 100%;
      max-width: 200px;
      object-fit: contain;
    }
  }
`;
