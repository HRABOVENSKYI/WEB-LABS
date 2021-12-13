import React, { useContext } from "react";

import CustomLink from "../components/Forms/CancelLink";
import SubmitButton from "../components/Forms/SubmitButton";

import * as Yup from "yup";
import { Form, Formik } from "formik";

import FormikInput from "../components/Checkout/FormikInput";
import { GlobalContext } from "../context/GlobalState";
import authApi from "../api/auth";
import { useHistory } from "react-router-dom";

const RegistrationForm = () => {
  let history = useHistory();
  const { setUser, setIsAuth } = useContext(GlobalContext);

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    repeatPassword: "",
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
    email: Yup.string()
      .required("This field is required")
      .email("Email is not valid"),
    password: Yup.string()
      .required("This field is required")
      .min(4, "Password must be at least 4 symbols long"),
    repeatPassword: Yup.string()
      .required("This field is required")
      .when("password", {
        is: (val) => val && val.length > 0,
        then: Yup.string().oneOf(
          [Yup.ref("password")],
          "Passwrod doesn't match"
        ),
      }),
  });

  async function registration({ firstName, lastName, email, password }) {
    try {
      const response = await authApi.registration({
        firstName,
        lastName,
        email,
        password,
      });
      localStorage.setItem("token", response.data.token);
      setUser(response.data.user);
      setIsAuth(true);
    } catch (e) {
      console.log(e.response?.data?.message);
    }
  }

  const onSubmit = (values) => {
    registration({
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      password: values.password,
    });
    history.push("/");
  };

  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
      <div className="container max-w-md mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 rounded shadow-md text-black w-full">
          <h1 className="text-3xl text-center">Sign up</h1>
          <div className="w-full max-w-md container my-10 mx-auto">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              <Form>
                <div className="flex space-x-8 firm-control w-full">
                  <FormikInput
                    label="First name"
                    name="firstName"
                    type="text"
                  />
                  <FormikInput label="Last name" name="lastName" type="text" />
                </div>
                <FormikInput label="Email" name="email" type="email" />
                <div className="flex space-x-8 firm-control w-full">
                  <FormikInput
                    label="Password"
                    name="password"
                    type="password"
                  />
                  <FormikInput
                    label="Repeat password"
                    name="repeatPassword"
                    type="password"
                  />
                </div>
                <SubmitButton buttonText="Sign up" />
              </Form>
            </Formik>
            <div className="text-center text-sm text-grey-dark mt-4">
              Already have an account?
              <CustomLink to="/" name="Log in" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
