"use client";

import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  display: grid;
  place-items: center;

  background-color: transparent;
`;

export const Wrapper = styled.div`
  animation: grow 0.2s 1;
  -webkit-animatixon: grow 0.2s 1;

  @keyframes grow {
    from {
      transform: scale(0);
    }

    to {
      transform: scale(1);
    }
  }
`;



export const Square = styled.div`
  background: ${({ theme }) => theme.colors.secondary};
  width: 10px;
  height: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -5px;
  margin-left: -5px;

  filter: drop-shadow(0px 0px 4px #000);
  -webkit-filter: drop-shadow(0px 0px 4px #000);
  will-change: filter;
`;

export const Label = styled.div`
  border: none;

  z-index: 5;
  height: min-content;
  padding: 2.25rem 1rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  transition: transform 0.25s ease;
  border-radius: 10px;
  width: 340px;

  &:hover {
    transform-origin: center;
    transform: scale(1.05);
  }

  h2 {
    margin: auto;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    color: ${({ theme }) => theme.colors.white};
    white-space: pre-wrap;
  }

  animation: grow 1.5s 1;
  -webkit-animation:  grow 1.5s 1;
  transform-origin: center;
  animation-fill-mode: forwards;

  @keyframes grow {
    0% {
      scale: 0;
    }
    20% {
      scale: 1;
    }
    90% {
      scale: 1;
    }
    100% {
      scale: 0;
    }
  }
`;