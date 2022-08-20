import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../../../gql/user";
import { setToken, decodeToken } from "../../../utils/token";
import useAuth from "../../../hooks/useAuth";
import "./LoginForm.scss";

export default function LoginForm() {
  const [error, setError] = useState("");
  const [login] = useMutation(LOGIN);
  const { setUser } = useAuth();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Email not valid")
        .required("Email is required!"),
      password: Yup.string().required("Password is required!"),
    }),
    onSubmit: async (formData) => {
      setError("");
      try {
        const { data } = await login({
          variables: {
            input: formData,
          },
        });
        // console.log(data);
        const { token } = data.login || {};
        // console.log(token);

        setToken(token);
        setUser(decodeToken(token));
      } catch (error) {
        setError(error.message);
      }
    },
  });

  return (
    <>
      <div>
        <h1>
          <p>
            Welcome to dev-ask!
          </p>
        </h1>
        <p>The number one spot for all developers. Find inspiration, connect with others, share your work
          and get support from a great community of developers.</p>
      </div>
      <br></br>
      <Form className="login-form" onSubmit={formik.handleSubmit}>
        <Form.Input
          type="text"
          placeholder="Email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.errors.email && true}
        />
        <Form.Input
          type="password"
          placeholder="Password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.errors.password && true}
        />
        <Button type="submit" className="btn-submit ui blue button">
          Login
        </Button>
        {error && <p className="submit-error">{error}</p>}
      </Form>
    </>
  );
}

function initialValues() {
  return {
    email: "",
    password: "",
  };
}
