"use client"

import React from 'react'
import { ErrorMessage, InputContainer } from './TextArea.styles';
import { RxCross2 } from 'react-icons/rx';

interface TextInputProps
  extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  inputRef?: React.Ref<HTMLInputElement>;
  label?: string | undefined;
  height?: string | undefined;
  error?: boolean | undefined;
  errorMessage?: string | undefined;
}

const TextArea = (props: TextInputProps) => {
  const isFilled = props.value?.toString() !== "" && props.value !== undefined;

  return (
    <InputContainer
      style={{
        height: props.height ?? "100%",
        border: props.error ? "2px solid red" : "2px solid transparent",
        backgroundColor: props.error ? "#FFE8E8" : "white",
        marginBottom: props.error ? "30px" : "0",
      }}
    >
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
      {props.error && (
        <ErrorMessage>
          <RxCross2 />
          {props.errorMessage}
        </ErrorMessage>
      )}
    </InputContainer>
  );
};

export default TextArea;