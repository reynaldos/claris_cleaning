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
      message: "",
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
    console.table(quoteField);
    console.table({
      firstName,
      lastName,
      email,
      phone: formatPhoneNumber(phone),
      zipcode,
    });

    setEmailState(EmailStateEnum.LOADING);
    try {
      const result = await emailjs.send(serviceID, quoteTemplateID, {
        ...quoteField,
        ...{
          firstName,
          lastName,
          email,
          phone: formatPhoneNumber(phone),
          zipcode,
        },
      });
      console.log(result.text);
      setEmailState(EmailStateEnum.SENT);

      reset();
      setQuoteFields(defaultQuoteState);
    } catch (error: any) {
      setEmailState(EmailStateEnum.ERROR);
      console.log(error.text);
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
      <section className="formSection">
        <label>Tell Us About Your Area</label>
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
      </section>

      {/* -- SERVICES -- */}
      <section className="formSection">
        <label>Needed Services</label>
        <span className="services">
          {quoteServices.map((service, index) => (
            <button
              aria-label={`Service-${service.label}`}
              key={index}
              className={`serviceButton ${
                quoteField.services.includes(service.label) ? "active" : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                handleServices(service.label);
              }}
            >
              {service.icon}
              <p>{service.label}</p>
            </button>
          ))}
        </span>
      </section>

      {/* -- CLEAN FREQUENCY -- */}
      <section className="formSection">
        <label>How Often Should We Come?</label>
        <span className="radio">
          {EnumToArray(VistFrequency).map((value, index) => (
            <RadioInput
              key={index}
              label={value}
              checked={quoteField.visitFrequency === value}
              onSelect={() => {
                handleRadio("visitFrequency", value);
              }}
            />
          ))}
        </span>
      </section>

      {/* -- BUTTONS -- */}
      <span className="buttonWrap">
        <Button
          aria-label="Next Quote Page"
          disabled={isNextDisabled()}
          onClick={(e) => {
            e.preventDefault();

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
      <section className="formSection">
        <label>Contact Information</label>
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
                  v.length > 16 || "The phone number needs to be 10 characters",
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
      </section>

      {/* -- REFFERER -- */}
      <section className="formSection">
        <label>How Did You Hear About Us? *</label>
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
      </section>

      {/* -- CALL OR TEXT -- */}
      <section className="formSection">
        <label>Permission to Call or Text? *</label>
        <span
          style={{
            justifyContent: "flex-start",
          }}
        >
          {EnumToArray(ContactPermission).map((value, index) => (
            <RadioInput
              key={index}
              label={value}
              checked={quoteField.canContact === value}
              onSelect={() => {
                handleRadio("canContact", value);
              }}
            />
          ))}
        </span>
      </section>

      {/* -- HOW SOON -- */}
      <section className="formSection">
        <label>How Soon Would You Like a Cleaning? *</label>
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
      </section>

      {/* -- NOTES -- */}
      <section className="formSection">
        <label>Notes</label>
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
      </section>

      {/* -- BUTTONS -- */}
      <span className="buttonWrap">
        <Button
          aria-label="Back Quote Page"
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
          aria-label="Submit Quote form"
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
      {emailState !== EmailStateEnum.IDLE && (
        <LoadWrapper>
          <FormLoader
            label={`Thank you for using our quote tool,\nwe will be sending you quote shortly!`}
            email={{ emailState, setEmailState }}
          />
        </LoadWrapper>
      )}
    </>
  );
};

export default QuoteForm;
