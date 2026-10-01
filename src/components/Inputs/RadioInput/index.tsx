"use client"

import React from 'react'
import { IoMdRadioButtonOff, IoMdRadioButtonOn } from 'react-icons/io';
import { RadioWrap } from './radioInput.styles';


interface RadioInputProps{
  label: string;
  name: string;
  checked: boolean;
  onSelect: ()=>void;
  width?: string;
}

const RadioInput = ({ width, name, onSelect, checked, label }: RadioInputProps) => {
  return (
    <RadioWrap style={{ width: width ?? 'fit-content'}}>
      <input type="radio" name={name} value={label} checked={checked} onChange={onSelect} />
      {checked ? <IoMdRadioButtonOn aria-hidden="true" /> : <IoMdRadioButtonOff aria-hidden="true" />}
      {label}
    </RadioWrap>
  );
};

export default RadioInput
