"use client";

import React, { useState } from "react";
import { FormWrap } from "./ContactForm.styles";

import Button from "../../Buttons";
import TextInput from "../../Inputs/TextInput";
import TextArea from "../../Inputs/TextArea";

import { useForm, useWatch, Controller } from "react-hook-form";
import { formatPhoneNumber } from "@/utils/sting";
import emailjs from "@emailjs/browser";
import FormLoader, { EmailStateEnum } from "@/components/FormLoader";

const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";

const ContactForm = () => {
  // Forms
  const {
    reset,
    handleSubmit,
    formState: { errors },
    control,
    watch,
  } = useForm({
    defaultValues: {
      name: "",
      phoneNumber: "",
      email: "",
      message: "",
    },
  });

  const [emailState, setEmailState] = useState(EmailStateEnum.IDLE);

  const handleFormSubmit = async (data: any) => {
    console.table({
      ...data,
      phoneNumber: formatPhoneNumber(data.phoneNumber),
    });

    setEmailState(EmailStateEnum.LOADING);
    try {
      const result = await emailjs.send(serviceID, templateID, {
        ...data,
        phoneNumber: formatPhoneNumber(data.phoneNumber),
      });
      console.log(result.text);
      setEmailState(EmailStateEnum.SENT);

      reset();
    } catch (error: any) {
      setEmailState(EmailStateEnum.ERROR);
      console.log(error.text);
    }


  };

  return (
    <FormWrap onSubmit={handleSubmit(handleFormSubmit)}>
      <span>
        <h2 className="title">Chat with Us</h2>
      </span>
      <span>
        <Controller
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              label="Name"
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              error={errors.name && true}
              errorMessage={"Name needs at least 3 characters"}
              required
            />
          )}
          name="name"
          control={control}
          rules={{ minLength: 3, required: true }}
        />

        <Controller
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              label="Phone Number (optional)"
              type="phone"
              onChange={onChange}
              onBlur={onBlur}
              value={formatPhoneNumber(value)}
              error={errors.phoneNumber && true}
              errorMessage={
                errors.phoneNumber?.message || "Invalid phone number"
              }
            />
          )}
          name="phoneNumber"
          control={control}
          rules={{
            required: false,
            validate: {
              maxLength: (v) =>
                v.length <= 10 || "The phone number needs to be 10 characters",
              // matchPattern: (v) =>
              //   /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
              //   "Invalid phone number pattern",
            },
          }}
        />
      </span>
      <span>
        <Controller
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              label="Email"
              type="email"
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              error={errors.email && true}
              errorMessage={errors.email?.message || "Invalid email address"}
              required
            />
          )}
          name="email"
          control={control}
          rules={{
            required: true,
            validate: {
              minLength: (v) =>
                v.length > 10 || "The email should have at least 10 characters",
              maxLength: (v) =>
                v.length <= 50 || "The email should have at most 50 characters",
              matchPattern: (v) =>
                /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                "Invalid email address",
            },
          }}
        />
      </span>
      <span>
        <Controller
          render={({ field: { onChange, onBlur, value } }) => (
            <TextArea
              label="Message"
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              error={errors.message && true}
              errorMessage={"Message needs at least 10 characters"}
              required
              height="162px"
            />
          )}
          name="message"
          control={control}
          rules={{ required: true, minLength: 10 }}
        />
      </span>
      <Button
        style={{ width: "fit-content" }}
        type="submit"
        // onClick={handleFormSubmit}
      >
        Send Message
      </Button>

      {emailState !== EmailStateEnum.IDLE && (
        <FormLoader email={{ emailState, setEmailState }} />
      )}
    </FormWrap>
  );
};

export default ContactForm;
