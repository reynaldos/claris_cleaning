"use client"

import React, { useId } from 'react'
import { ErrorMessage, InputContainer } from './TextInput.styles';
import { RxCross2 } from 'react-icons/rx';

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string | undefined;
  height?: string | undefined;
  error?: boolean | undefined;
  errorMessage?: string | undefined;
}

const TextInput = ({ label, height, error, errorMessage, type = "text", ...props }: TextInputProps) => {
  const id = useId();
  const isFilled = props.value?.toString() !== "" && props.value !== undefined;

  return (
      <InputContainer
        style={{
          height: height ?? "50px",
          border: error ? "2px solid red" : "2px solid transparent",
          backgroundColor: error ? "#FFE8E8" : "white",
          marginBottom: error ? "20px" : "0"
        }}
      >
        <input
          {...props}
          id={id}
          type={type}
          aria-invalid={error || undefined}
          aria-describedby={error ? `${id}-error` : undefined}
          style={{
            padding: isFilled ? `28px 20px 12px 20px` : "20px",
          }}
        />

        {label && (
          <label
            htmlFor={id}
            style={{
              transform: isFilled ? `translate(0px, -8px)` : "",
              fontSize: isFilled ? `14px` : "",
            }}
          >
            {label}
          </label>
        )}
        {error && <ErrorMessage id={`${id}-error`}>
            <RxCross2 aria-hidden="true" />
          {errorMessage}</ErrorMessage>}
      </InputContainer>
  );
};

export default TextInput;
