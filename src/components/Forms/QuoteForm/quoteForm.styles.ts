"use client"

import styled from "styled-components";


export const FormWrapper = styled.form`
  position: relative;
  top: -200px;
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  max-width: 864px;
  border-radius: 20px;
  padding: 36px;

  display: flex;
  flex-direction: column;
  gap: 36px;

  @media screen and (max-width: ${({ theme }) => theme.bpts.md}) {
    top: -160px;
  }

  @media screen and (max-width: ${({ theme }) => theme.bpts.xs}) {
    width: calc(100% + 42px);
    padding: 36px 20px;
  }

  .formSection {
    display: flex;
    flex-direction: column;
    gap: 16px;

    & > label {
      color: ${({ theme }) => theme.colors.white};
      font-size: 24px;
      font-style: normal;
      font-weight: 800;
      line-height: 1;
    }

    & > span {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 16px;

      &.services {
        flex-wrap: wrap;
      }

      @media screen and (max-width: ${({ theme }) => theme.bpts.md}) {
        flex-wrap: wrap;
        gap: 16px;

        &.radio {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
        }
      }

      @media screen and (max-width: ${({ theme }) => theme.bpts.xs}) {
        &.radio {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
        }
      }
    }
  }

  .buttonWrap {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;

    button {
      width: 126px;
    }
  }

  .serviceButton {
    display: flex;
    height: 150px;
    min-width: 170px;
    padding: 0px 28px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;
    flex: 1 0 0;
    border-radius: 20px;
    background: rgba(3, 179, 255, 0.75);
    border: none;

    color: ${({ theme }) => theme.colors.white};

    cursor: pointer;

    transition: all 200ms ease-in-out;

    @media screen and (max-width: ${({ theme }) => theme.bpts.lg}){
      min-width: calc(50% - 16px);
    } 
    
    p {
      width: 120px;
      text-align: center;
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      line-height: 1;
    }

    &:hover {
      filter: drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.3));
      -webkit-filter: drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.3));
    }

    &.active {
      background: ${({ theme }) => theme.colors.secondary};
      filter: drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.3));
      -webkit-filter: drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.3));
    }
  }
`;