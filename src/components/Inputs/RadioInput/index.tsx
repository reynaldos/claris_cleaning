"use client"

import React from 'react'
import { IoMdRadioButtonOff, IoMdRadioButtonOn } from 'react-icons/io';
import { RadioWrap } from './radioInput.styles';


interface RadioInputProps{
  label: string | any;
  checked: boolean;
  onSelect: ()=>void;
  width?: string;
}

const RadioInput = ({ width, onSelect, checked, label }: RadioInputProps) => {
  return (
    <RadioWrap style={{ width: width ?? 'fit-content'}} onClick={onSelect}>
      {checked ? <IoMdRadioButtonOn /> : <IoMdRadioButtonOff />}

      <label>{label}</label>
    </RadioWrap>
  );
};

export default RadioInput