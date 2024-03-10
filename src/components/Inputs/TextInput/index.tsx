"use client"

import React from 'react'
import { ErrorMessage, InputContainer } from './TextInput.styles';
import { error } from 'console';
import { IoIosWarning, IoMdWarning } from 'react-icons/io';
import { RxCross2, RxCrossCircled } from 'react-icons/rx';
import { FaCrosshairs } from 'react-icons/fa6';

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  inputRef?: React.Ref<HTMLInputElement>;
  label?: string | undefined;
  height?: string | undefined;
  error?: boolean | undefined;
  errorMessage?: string | undefined;
}

const TextInput = (props: TextInputProps) => {
  const isFilled = props.value?.toString() !== "" && props.value !== undefined;

  return (
      <InputContainer
        style={{
          height: props.height ?? "50px",
          border: props.error ? "2px solid red" : "2px solid transparent",
          backgroundColor: props.error ? "#FFE8E8" : "white",
          marginBottom: props.error ? "20px" : "0"
        }}
      >
        <input
          {...props}
          id={props.label ? `input-${props.label}` : ""}
          // ref={props.inputRef}
          type="text"
          style={{
            padding: isFilled ? `28px 20px 12px 20px` : "20px",
          }}
        />

        {props.label && (
          <label
            htmlFor={`input-${props.label}`}
            style={{
              transform: isFilled ? `translate(0px, -8px)` : "",
              fontSize: isFilled ? `14px` : "",
            }}
          >
            {props.label}
          </label>
        )}
        {props.error && <ErrorMessage>
            <RxCross2 />
          {props.errorMessage}</ErrorMessage>}
      </InputContainer>
  );
};

export default TextInput;