import React, { useContext, useState } from "react";

import CustomLink from "../components/Forms/CancelLink";
import SubmitButton from "../components/Forms/SubmitButton";

import * as Yup from "yup";
import { Form, Formik } from "formik";

import FormikInput from "../components/Checkout/FormikInput";
import { GlobalContext } from "../context/GlobalState";
import authApi from "../api/auth";

const RegistrationForm = () => {
  const { setUser } = useContext(GlobalContext);
  const [errorMessage, setErrorMessage] = useState("");

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .required("This field is required")
      .email("Email is not valid"),
    password: Yup.string()
      .required("This field is required")
      .min(4, "Password must be at least 4 symbols long"),
  });

  async function login(email, password) {
    try {
      const response = await authApi.login(email, password);
      localStorage.setItem("token", response.data.token);
      setUser(response.data.user);
    } catch (e) {
      setErrorMessage("Invalid email or password");
      console.log(e.response?.data?.message);
    }
  }

  const onSubmit = (values) => {
    login(values.email, values.password);
  };

  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 rounded shadow-md text-black w-full">
          <h1 className="text-3xl text-center">Log in</h1>
          <div className="w-full max-w-md container my-20 mx-auto">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              <Form>
                <FormikInput label="Email" name="email" type="email" />
                <FormikInput label="Password" name="password" type="password" />
                <small className="text-red-600">{errorMessage}</small>
                <SubmitButton buttonText="Log in" />
              </Form>
            </Formik>
            <div className="text-center text-sm text-grey-dark mt-4">
              Don't have an account?
              <CustomLink to="/register" name="Sign up" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
