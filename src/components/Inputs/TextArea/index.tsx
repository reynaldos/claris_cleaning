"use client"

import React from 'react'
import { InputContainer } from './TextArea.styles';

interface TextInputProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  inputRef?: React.Ref<HTMLInputElement>;
  label?: string | undefined;
  height?: string | undefined;
}

const TextArea = (props: TextInputProps) => {
  const isFilled = props.value?.toString() !== "" && props.value !== undefined;

  return (
    <InputContainer style={{ height: props.height ?? "100%" }}>
      <textarea
        {...props}
        id={props.label ? `textarea-${props.label}` : ""}
        style={{
          padding: isFilled ? `28px 20px 12px 20px` : "20px",
        }}
      />

      {props.label && (
        <label
          htmlFor={`textarea-${props.label}`}
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

export default TextArea;