import React from "react";
import { useHistory } from "react-router-dom";

import CancelLink from "../components/Forms/CancelLink";
import SubmitButton from "../components/Forms/SubmitButton";

import * as Yup from "yup";
import { Form, Formik } from "formik";

import CheckoutInput from "../components/Checkout/CheckoutInput";

const Checkout = () => {
  let history = useHistory();

  const initialValues = {
    firstName: "",
    lastName: "",
    age: 0,
    email: "",
    phoneNumber: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .required("This field is required")
      .min(2, "Should have at least 2 characters")
      .max(100, "Should not be longer than 100 characters"),
    lastName: Yup.string()
      .required("This field is required")
      .min(2, "Should have at least 2 characters")
      .max(100, "Should not be longer than 100 characters"),
    age: Yup.number()
      .required("This field is required")
      .positive("Age is not valid")
      .min(18, "You should be 18 years old"),
    email: Yup.string()
      .required("This field is required")
      .email("Email is not valid"),
    phoneNumber: Yup.string().matches(/\+[0-9]{12}/, {
      message: "Phone number is not valid",
      excludeEmptyString: true,
    }),
  });

  const onSubmit = (e) => {
    history.push("/success");
  };

  return (
    <React.Fragment>
      <div className="w-full max-w-md container my-20 mx-auto">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(props) => (
            <Form>
              <div className="flex space-x-8 firm-control w-full">
                <CheckoutInput
                  label="First name"
                  name="firstName"
                  type="text"
                />
                <CheckoutInput label="Last name" name="lastName" type="text" />
              </div>
              <div className="flex space-x-8 firm-control w-full">
                <CheckoutInput label="Age" name="age" type="number" />
                <CheckoutInput
                  label="Phone number"
                  name="phoneNumber"
                  type="tel"
                />
              </div>
              <CheckoutInput label="Email" name="email" type="email" />
              <SubmitButton buttonText="Continue" />
              <CancelLink to="/cart" />
            </Form>
          )}
        </Formik>
      </div>
    </React.Fragment>
  );
};

export default Checkout;
