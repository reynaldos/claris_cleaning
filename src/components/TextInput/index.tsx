"use client"

import React from 'react'
import { InputContainer } from './TextInput.styles';

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  inputRef?: React.Ref<HTMLInputElement>;
  label?: string | undefined;
  height?: string | undefined;
}

const TextInput = (props: TextInputProps) => {
  const isFilled = props.value?.toString() !== "" && props.value !== undefined;

  return (
    <InputContainer
        style={{height: props.height ?? "100%"}}
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
            transform: isFilled ? `translate(0px, -15px)` : "",
            fontSize: isFilled ? `14px` : "",
          }}
        >
          {props.label}
        </label>
      )}
    </InputContainer>
  );
};

export default TextInput;