"use client";

import React, { useState } from "react";
import { FormWrapper } from "./quoteForm.styles";
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

const QuoteForm = () => {
  const [formPart, setFormPart] = useState<1 | 2>(1);

  const [quoteField, setQuoteFields] = useState({
    roomAmount: "",
    bathroomAmount: "",
    squareFootage: "",
    services: [""],
    visitFrequency: "",
    contactInfo: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      zipcode: "",
    },
    hearAbout: "",
    canContact: "",
    howSoon: "",
    notes: "",
  });

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

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    console.table(quoteField);
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
      <section className="formSection">
        <label>Contact Information</label>
        <span>
          <TextInput
            label="First Name*"
            type="text"
            value={quoteField.contactInfo.firstName}
            onChange={(e) => {
              setQuoteFields((old) => ({
                ...old,
                contactInfo: {
                  ...old.contactInfo,
                  firstName: e.target.value,
                },
              }));
            }}
            required
          />

          <TextInput
            label="Last Name*"
            type="text"
            value={quoteField.contactInfo.lastName}
            onChange={(e) => {
              setQuoteFields((old) => ({
                ...old,
                contactInfo: {
                  ...old.contactInfo,
                  lastName: e.target.value,
                },
              }));
            }}
            required
          />
        </span>

        <span>
          <TextInput
            label="Email*"
            type="email"
            value={quoteField.contactInfo.email}
            onChange={(e) => {
              setQuoteFields((old) => ({
                ...old,
                contactInfo: {
                  ...old.contactInfo,
                  email: e.target.value,
                },
              }));
            }}
            required
          />
          <TextInput
            label="Phone Number*"
            type="text"
            value={quoteField.contactInfo.phone}
            onChange={(e) => {
              setQuoteFields((old) => ({
                ...old,
                contactInfo: {
                  ...old.contactInfo,
                  phone: e.target.value,
                },
              }));
            }}
            required
          />
          <TextInput
            label="Zip Code*"
            type="text"
            value={quoteField.contactInfo.zipcode}
            onChange={(e) => {
              setQuoteFields((old) => ({
                ...old,
                contactInfo: {
                  ...old.contactInfo,
                  zipcode: e.target.value,
                },
              }));
            }}
            required
          />
        </span>
      </section>

      {/* -- REFFERER -- */}
      <section className="formSection">
        <label>How Did You Hear About Us?</label>
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
        <label>Permission to Call or Text?</label>
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
        <label>How Soon Would You Like a Cleaning?</label>
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
        <Button onClick={handleFormSubmit}>Submit</Button>
      </span>
    </>
  );

  return (
    <>
      <FormWrapper>{formPart === 1 ? formIntro() : formFinal()}</FormWrapper>
    </>
  );
};

export default QuoteForm;
