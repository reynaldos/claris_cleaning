"use client";

import React, { useState } from "react";
import { FormWrapper, LoadWrapper } from "./quoteForm.styles";
import Button from "../../Buttons";
import DropDownInput from "../../Inputs/DropDownInput";
import { EnumToArray } from "@/utils/object";
import TextInput from "../../Inputs/TextInput";
import TextArea from "../../Inputs/TextArea";
import {
  BathroomCount,
  ContactPermission,
  HearAboutUs,
  HowSoon,
  RoomCount,
  SquareFootage,
  VistFrequency,
  quoteServices,
} from "./formValues";
import RadioInput from "@/components/Inputs/RadioInput";

import { useForm, Controller } from "react-hook-form";
import { formatPhoneNumber } from "@/utils/sting";
import { logSubmission } from "@/utils/logSubmission";

import emailjs from "@emailjs/browser";
import FormLoader, { EmailStateEnum } from "@/components/FormLoader";

const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
const quoteTemplateID = process.env.NEXT_PUBLIC_EMAILJS_QUOTE_TEMPLATE_ID || "";

interface IQuoteProps {
  roomAmount: string;
  bathroomAmount: string;
  squareFootage: string;
  services: string[];
  visitFrequency: string;
  hearAbout: string;
  canContact: string;
  howSoon: string;
  notes: string;
}

const defaultQuoteState = {
  roomAmount: "",
  bathroomAmount: "",
  squareFootage: "",
  services: [],
  visitFrequency: "",
  hearAbout: "",
  canContact: "",
  howSoon: "",
  notes: "",
};

const QuoteForm = () => {
  const [formPart, setFormPart] = useState<1 | 2>(1);

  const {
    reset,
    handleSubmit,
    formState: { errors },
    control,
    watch,
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      zipcode: "",
    },
  });

  const [emailState, setEmailState] = useState(EmailStateEnum.IDLE);

  const firstName = watch("firstName");
  const lastName = watch("lastName");
  const phone = watch("phone");
  const email = watch("email");
  const zipcode = watch("zipcode");

  const [quoteField, setQuoteFields] = useState<IQuoteProps>(defaultQuoteState);

  // -- functions --
  const handleRadio = (section: keyof typeof quoteField, value: any) => {
    const isDeselect = quoteField[section] === value;

    setQuoteFields((old) => ({ ...old, [section]: isDeselect ? "" : value }));
  };

  const handleServices = (service: string) => {
    const isRemoving = quoteField.services.includes(service);
    const newServices = isRemoving
      ? quoteField.services.filter((value) => value !== service)
      : [...quoteField.services, service];

    setQuoteFields((old) => ({ ...old, services: newServices }));
  };

  const handleFormSubmit = async () => {
    const payload = {
      ...quoteField,
      services: quoteField.services.toString().replace(/\n/g, ""),
      firstName,
      lastName,
      email,
      phone: formatPhoneNumber(phone),
      zipcode,
    };
    console.table(payload);

    setEmailState(EmailStateEnum.LOADING);
    try {
      const result = await emailjs.send(serviceID, quoteTemplateID, payload);
      console.log(result.text);
      setEmailState(EmailStateEnum.SENT);

      logSubmission({ formType: "QUOTE", status: "SUCCESS", data: payload });
      reset();
      setQuoteFields(defaultQuoteState);
    } catch (error: any) {
      setEmailState(EmailStateEnum.ERROR);
      console.log(error.text);

      logSubmission({
        formType: "QUOTE",
        status: "ERROR",
        data: payload,
        errorMessage: error?.text,
      });
    }
  };

  const isNextDisabled = () => {
    if (
      quoteField.roomAmount &&
      quoteField.bathroomAmount &&
      quoteField.squareFootage &&
      quoteField.services.length > 0 &&
      quoteField.visitFrequency
    ) {
      return false;
    } else {
      return true;
    }
  };

  const isSubmitDisabled = () => {
    if (quoteField.hearAbout && quoteField.canContact && quoteField.howSoon) {
      return false;
    } else {
      return true;
    }
  };

  // first part of form
  const formIntro = () => (
    <>
      {/* -- AREA INFO -- */}
      <fieldset className="formSection">
        <legend>Tell Us About Your Area</legend>
        <span>
          <DropDownInput
            options={EnumToArray(RoomCount)}
            setValue={(option: any) => {
              setQuoteFields((old) => ({ ...old, roomAmount: option }));
            }}
            value={quoteField.roomAmount}
            label={"Room Amount"}
          />

          <DropDownInput
            options={EnumToArray(BathroomCount)}
            setValue={(option: any) => {
              setQuoteFields((old) => ({
                ...old,
                bathroomAmount: option,
              }));
            }}
            value={quoteField.bathroomAmount}
            label={"Bathrom Amount"}
          />
          <DropDownInput
            options={EnumToArray(SquareFootage)}
            setValue={(option: any) => {
              setQuoteFields((old) => ({
                ...old,
                squareFootage: option,
              }));
            }}
            value={quoteField.squareFootage}
            label={"Square Footage"}
          />
        </span>
      </fieldset>

      {/* -- SERVICES -- */}
      <fieldset className="formSection">
        <legend>Needed Services</legend>
        <span className="services">
          {quoteServices.map((service, index) => (
            <button
              type="button"
              key={index}
              aria-pressed={quoteField.services.includes(service.label)}
              className={`serviceButton ${
                quoteField.services.includes(service.label) ? "active" : ""
              }`}
              onClick={() => handleServices(service.label)}
            >
              {service.icon}
              <p>{service.label}</p>
            </button>
          ))}
        </span>
      </fieldset>

      {/* -- CLEAN FREQUENCY -- */}
      <fieldset className="formSection">
        <legend>How Often Should We Come?</legend>
        <span className="radio">
          {EnumToArray(VistFrequency).map((value, index) => (
            <RadioInput
              key={index}
              name="visitFrequency"
              label={value}
              checked={quoteField.visitFrequency === value}
              onSelect={() => {
                handleRadio("visitFrequency", value);
              }}
            />
          ))}
        </span>
      </fieldset>

      {/* -- BUTTONS -- */}
      <span className="buttonWrap">
        <Button
          type="button"
          disabled={isNextDisabled()}
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
            setFormPart(2);
          }}
        >
          Next
        </Button>
      </span>
    </>
  );

  // last part of form
  const formFinal = () => (
    <>
      {/* -- CONTACT -- */}
      <fieldset className="formSection">
        <legend>Contact Information</legend>
        <span>
          <Controller
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                label="First Name*"
                type="text"
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                error={errors.firstName && true}
                errorMessage={"Name needs at least 3 characters"}
                required
              />
            )}
            name="firstName"
            control={control}
            rules={{ minLength: 3, required: true }}
          />

          <Controller
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                label="Last Name*"
                type="text"
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                error={errors.lastName && true}
                errorMessage={"Name needs at least 3 characters"}
                required
              />
            )}
            name="lastName"
            control={control}
            rules={{ minLength: 3, required: true }}
          />
        </span>

        <span>
          <Controller
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                label="Email*"
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
                  v.length > 10 ||
                  "The email should have at least 10 characters",
                maxLength: (v) =>
                  v.length <= 50 ||
                  "The email should have at most 50 characters",
                matchPattern: (v) =>
                  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                  "Invalid email address",
              },
            }}
          />

          <Controller
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                label="Phone Number*"
                type="text"
                onChange={onChange}
                onBlur={onBlur}
                value={formatPhoneNumber(value)}
                error={errors.phone && true}
                errorMessage={errors.phone?.message || "Invalid phone number"}
                required
              />
            )}
            name="phone"
            control={control}
            rules={{
              required: true,
              validate: {
                maxLength: (v) =>
                  v.length < 17 || "The phone number needs to be 10 characters",
                // matchPattern: (v) =>
                //   /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                //   "Invalid phone number pattern",
              },
            }}
          />

          <Controller
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                label="Zip Code*"
                type="text"
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                error={errors.zipcode && true}
                errorMessage={errors.zipcode?.message || "Invalid zip code"}
                required
              />
            )}
            name="zipcode"
            control={control}
            rules={{ required: true, minLength: 5, maxLength: 5 }}
          />
        </span>
      </fieldset>

      {/* -- REFFERER -- */}
      <fieldset className="formSection">
        <legend>How Did You Hear About Us? *</legend>
        <span>
          <DropDownInput
            options={EnumToArray(HearAboutUs)}
            setValue={(option: any) => {
              setQuoteFields((old) => ({ ...old, hearAbout: option }));
            }}
            value={quoteField.hearAbout}
            label={"Source"}
          />
        </span>
      </fieldset>

      {/* -- CALL OR TEXT -- */}
      <fieldset className="formSection">
        <legend>Permission to Call or Text? *</legend>
        <span
          style={{
            justifyContent: "flex-start",
          }}
        >
          {EnumToArray(ContactPermission).map((value, index) => (
            <RadioInput
              key={index}
              name="canContact"
              label={value}
              checked={quoteField.canContact === value}
              onSelect={() => {
                handleRadio("canContact", value);
              }}
            />
          ))}
        </span>
      </fieldset>

      {/* -- HOW SOON -- */}
      <fieldset className="formSection">
        <legend>How Soon Would You Like a Cleaning? *</legend>
        <span>
          <DropDownInput
            options={EnumToArray(HowSoon)}
            setValue={(option: any) => {
              setQuoteFields((old) => ({ ...old, howSoon: option }));
            }}
            value={quoteField.howSoon}
            label={"Time Frame"}
          />
        </span>
      </fieldset>

      {/* -- NOTES -- */}
      <fieldset className="formSection">
        <legend>Notes</legend>
        <span>
          <TextArea
            height="162px"
            label="Any additonal details..."
            value={quoteField.notes}
            onChange={(e) => {
              setQuoteFields((old) => ({ ...old, notes: e.target.value }));
            }}
          />
        </span>
      </fieldset>

      {/* -- BUTTONS -- */}
      <span className="buttonWrap">
        <Button
          type="button"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
            setFormPart(1);
          }}
        >
          Previous
        </Button>
        <Button
          type="submit"
          disabled={isSubmitDisabled()}
        >
          Submit
        </Button>
      </span>
    </>
  );

  return (
    <>
      <FormWrapper onSubmit={handleSubmit(handleFormSubmit)}>
        {formPart === 1 ? formIntro() : formFinal()}
      </FormWrapper>
      {/* always-present live region so the result gets announced */}
      <div role="status" aria-live="polite" style={{ position: "absolute" }}>
        {emailState !== EmailStateEnum.IDLE && (
          <LoadWrapper>
            <FormLoader
              label={`Thank you for using our quote tool,\nwe will be sending you quote shortly!`}
              email={{ emailState, setEmailState }}
            />
          </LoadWrapper>
        )}
      </div>
    </>
  );
};

export default QuoteForm;
