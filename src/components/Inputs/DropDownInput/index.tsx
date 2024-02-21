"use client";

import React, { useState } from "react";
import { InputContainer, OptionsList } from "./DropDownInput";
import { FaChevronDown } from "react-icons/fa6";

interface DropDownInputProps
  extends React.InputHTMLAttributes<HTMLSelectElement> {
  label?: string | undefined;
  options: string[] | any[];
  setValue: (item: string | any) => void;
  value: string | any;
  height?: string | undefined;
}

const DropDownInput = ({
  label,
  value,
  options,
  setValue,
  height,
}: DropDownInputProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const onSelected = (e: any, option: string) => {
    e.preventDefault();

    if (value === option) {
      setValue("");
    } else {
      setValue(option);
    }

    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen((old) => !old);
  };

  const isFilled = value?.toString() !== "";

  return (
    <InputContainer style={{ height: height ?? "50px" }} $isOpen={menuOpen}>
      <div
        className="input"
        onClick={toggleMenu}
        id={label ? `input-${label}` : ""}
        style={{
          padding: isFilled ? `28px 20px 12px 20px` : "20px",
        }}
      >
        {value}
      </div>

      {label && (
        <label
          htmlFor={`input-${label}`}
          style={{
            transform: isFilled ? `translate(0px, -8px)` : "",
            fontSize: isFilled ? `14px` : "",
          }}
        >
          {label}
        </label>
      )}
      <span className="arrow" 
      // style={{opacity: isFilled ? '1' : '.65'}}
      >
        <FaChevronDown />
      </span>

      <OptionsList $isOpen={menuOpen}>
        {options.map((option, index) => (
          <button
          className={`${option === value ? 'active' : ''}`}
            key={index}
            onClick={(e) => {
              onSelected(e, option);
            }}
          >
            {option}
          </button>
        ))}
      </OptionsList>
    </InputContainer>
  );
};

export default DropDownInput;
