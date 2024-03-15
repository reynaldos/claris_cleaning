"use client";

import React, { useEffect } from "react";
import { Container, Label, Square, Wrapper } from "./FormLoader.styles";

export enum EmailStateEnum {
  SENT = "sent",
  IDLE = "idle",
  LOADING = "loading",
  ERROR = "error",
}

const FormLoader = ({
  email,
  label,
}: {
  email: { emailState: EmailStateEnum; setEmailState: any };
  label?: string;
}) => {
  const { emailState, setEmailState } = email;

  useEffect(() => {
    if (
      emailState === EmailStateEnum.SENT ||
      emailState === EmailStateEnum.ERROR
    )
      setTimeout(() => {
        setEmailState(EmailStateEnum.IDLE);
      }, 2000);
  }, [emailState]);

  return (
    <Container>
      {emailState === EmailStateEnum.LOADING ? (
        <Wrapper>
          <Square id="sq1" />
          <Square id="sq2" />
          <Square id="sq3" />
          <Square id="sq4" />
          <Square id="sq5" />
          <Square id="sq6" />
          <Square id="sq7" />
          <Square id="sq8" />
          <Square id="sq9" />
        </Wrapper>
      ) : (
        <Label>
          {
            <h2>
              {emailState === EmailStateEnum.ERROR ? (
                <>Error, try again.</>
              ) : label ? (
                <>{label}</>
              ) : (
                <>
                  Thank you for reaching out,
                  <br />
                  we will contact you shortly!
                </>
              )}
            </h2>
          }
        </Label>
      )}
    </Container>
  );
};

export default FormLoader;
