"use client";

import React, { useId } from "react";
import { InputContainer } from "./DropDownInput";
import { FaChevronDown } from "react-icons/fa6";

interface DropDownInputProps {
  label: string;
  options: string[];
  setValue: (item: string) => void;
  value: string;
  height?: string | undefined;
}

// Native select: keyboard + screen reader support for free
const DropDownInput = ({
  label,
  value,
  options,
  setValue,
  height,
}: DropDownInputProps) => {
  const id = useId();
  const isFilled = value !== "";

  return (
    <InputContainer style={{ height: height ?? "50px" }}>
      <select
        id={id}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{ paddingTop: isFilled ? "14px" : "0" }}
      >
        <option value=""></option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <label
        htmlFor={id}
        style={{
          transform: isFilled ? `translate(0px, -8px)` : "",
          fontSize: isFilled ? `14px` : "",
        }}
      >
        {label}
      </label>
      <span className="arrow" aria-hidden="true">
        <FaChevronDown />
      </span>
    </InputContainer>
  );
};

export default DropDownInput;
