"use client";

import styled from "styled-components";

export const VideoContainer = styled.aside`

`


export const VideoWrapper = styled.div`
  position: relative;
  border-radius: 20px;
  overflow: hidden;

  video {
    border-radius: 20px;
    width: 100%;
  }

  span {
    height: 100%;
    width: 100%;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 4;

    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    svg {
      border-radius: 100%;
      background-color: ${({ theme }) => theme.colors.secondary};
      height: 50px;
      width: 50px;
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;


export const ButtonWrap = styled.span`
  margin-top: 8px;
  display: flex;
  gap: 8px;

  button {
    cursor: pointer;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
    background-color: transparent;
    padding: 6px 12px;
    border-radius: 100px;

    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    transition: all 300ms ease-in-out;

    &.active {
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.primary};
    }
  }
`;