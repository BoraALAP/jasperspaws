import React from "react";
import styled from "styled-components";
import { media } from "../../styles/media";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import Title from "../ui/Title";
import Button from "../ui/Button";

const ValidationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Required"),
  phoneNumber: Yup.number().required("Required"),
  address: Yup.string()
    .min(10, "Too Short!")
    .max(100, "Too Long!")
    .required("Required"),
  city: Yup.string()
    .min(2, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
  province: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  message: Yup.string()
    .min(2, "Too Short!")
    .max(250, "Too Long!")
    .required("Required")
});

const CardForm = ({ name }) => {
  const handleReset = values => {
    values = {
      dogName: name,
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      address: "",
      city: "",
      province: "",
      message: ""
    };
  };
  return (
    <Container>
      <Title title={`Ask About ${name}`} />
      <Formik
        initialValues={{
          dogName: name,
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          address: "",
          city: "",
          province: "",
          message: ""
        }}
        validationSchema={ValidationSchema}
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <FormS>
            <Left>
              <FormField>
                <label htmlFor="firstName">First Name</label>
                <FieldS type="text" name="firstName" placeholder="Type..." />
                <ErrorMessage name="firstName" component="div" />
              </FormField>
              <FormField>
                <label htmlFor="lastName">Last Name</label>
                <FieldS type="text" name="lastName" placeholder="Type..." />
                <ErrorMessage name="lastName" component="div" />
              </FormField>
              <FormField>
                <label htmlFor="email">Email</label>
                <FieldS type="email" name="email" placeholder="Type..." />
                <ErrorMessage name="email" component="div" />
              </FormField>
              <FormField>
                <label htmlFor="phoneNumber">Phone Number</label>
                <FieldS
                  name="phoneNumber"
                  render={({ field }) => (
                    <input maxLength={11} type="tel" placeholder="Type..." {...field} />
                  )}
                />
                {/* <FieldS type="text" name="phoneNumber" placeholder="Type..." /> */}
                <ErrorMessage name="phoneNumber" component="div" />
              </FormField>
              <FormFieldTwo>
                <label htmlFor="address">Address</label>
                <FieldS type="text" name="address" placeholder="Type..." />
                <ErrorMessage name="address" component="div" />
              </FormFieldTwo>
              <FormField>
                <label htmlFor="city">City</label>
                <FieldS type="text" name="city" placeholder="Type..." />
                <ErrorMessage name="city" component="div" />
              </FormField>
              <FormField>
                <label htmlFor="province">Province</label>
                <FieldS type="text" name="province" placeholder="Type..." />
                <ErrorMessage name="province" component="div" />
              </FormField>
            </Left>

            <Right>
              <FormFieldMessage>
                <label htmlFor="message">Message</label>
                <Field
                  type="textarea"
                  name="message"
                  placeholder="Type..."
                  className="area"
                  component="textarea"
                  rows="4"
                />
                <ErrorMessage name="message" component="div" />
              </FormFieldMessage>

              <ButtonContainer>
                <Button type="submit" disabled={isSubmitting}>
                  Submit
                </Button>

                <Button secondary type="reset" disabled={isSubmitting} onClick={handleReset}>
                  Reset
                </Button>
              </ButtonContainer>
            </Right>
          </FormS>
        )}
      </Formik>
    </Container>
  );
};

const Container = styled.div`
  background-color: ${({ theme }) => theme.color.two_bg};
  padding: calc(${({ theme }) => theme.pagePadding} * 2);
  box-sizing: border-box;
  display: grid;
  margin: 0 -6% -6%;
`;

const FormField = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-gap: 0.5em;
  align-content: start;
`;

const FormFieldTwo = styled(FormField)`
  @media ${media.tablet} {
    grid-column-start: 1;
    grid-column-end: 3;
  }
`;

const FormFieldMessage = styled(FormField)`
  @media ${media.tablet} {
    grid-template-rows: min-content 1fr;
  }
`;

const FieldS = styled(Field)`
  display: grid;
  grid-gap: 1.5em;
`;

const ButtonContainer = styled.div`
  display: grid;
  grid-gap: 1.5em;

  @media ${media.tablet} {
    grid-auto-flow: column;
    align-items: end;
  }
`;

const FormS = styled(Form)`
  display: grid;
  grid-gap: 1.25em;

  input,
  textarea {
    border-radius: ${({ theme }) => theme.radius};
    padding: 0.75em 1em;
    border: none;
    box-shadow: ${({ theme }) => theme.buttonshadow};
    display: grid;
    font-family: ${({ theme }) => theme.font.family.body};
  }

  .area {
    align-self: stretch;
  }

  @media ${media.tablet} {
    grid-auto-flow: column;
    grid-template-columns: 1fr 1fr;
    grid-gap: 3em;
  }
`;

const Left = styled.div`
  display: grid;
  grid-gap: 1.25em;
`;

const Right = styled.div`
  display: grid;
  grid-gap: 1.25em;
  grid-template-rows: 3fr auto;
`;

export default CardForm;
