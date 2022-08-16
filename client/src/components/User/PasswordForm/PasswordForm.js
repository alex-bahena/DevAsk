import "./PasswordForm.scss";
import { Form, Button } from "semantic-ui-react";
import { useFormik } from "formik";
import { useMutation } from "@apollo/client";
import { UPDATE_USER } from "../../../gql/user";
import * as Yup from "yup";
// import { toast } from "react-toastify";



export default function PasswordForm(props) {
  const { logout } = props;
  const [updateUser] = useMutation(UPDATE_USER);


  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object({
      currentPassword: Yup.string().required(),
      newPassword: Yup.string()
        .required()
        .oneOf([Yup.ref("repeatNewPassoword")]),
      repeatNewPassoword: Yup.string()
        .required()
        .oneOf([Yup.ref("newPassword")]),
    }),
    onSubmit: async (formValues) => {
      try {
        const result = await updateUser({
          variables: {
            input: {
              currentPassword: formValues.currentPassword,
              newPassword: formValues.newPassword,
            },
          },
        });

        if (!result.data.updateUser) {
          // toast.error("Errow While Updating Password");

        } else {
          logout();
          console.log('Success!');
        }
      } catch (error) {
        // toast.error("Errow While Updating Password");
      }
    },
  });

  return (
    <Form className="password-form" onSubmit={formik.handleSubmit} >
      <Form.Input
        type="password"
        placeholder="Current Password"
        name="currentPassword"
        value={formik.values.currentPassword}
        onChange={formik.handleChange}
        error={formik.errors.currentPassword && true}
      />
      <Form.Input
        type="password"
        placeholder="New Password"
        name="newPassword"
        value={formik.values.newPassword}
        onChange={formik.handleChange}
        error={formik.errors.newPassword && true}
      />
      <Form.Input
        type="password"
        placeholder="Repeat New Password"
        name="repeatNewPassoword"
        value={formik.values.repeatNewPassoword}
        onChange={formik.handleChange}
        error={formik.errors.repeatNewPassoword && true}
      />
      <Button type="submit" className="btn-submit">
        Update
      </Button>
    </Form >
  );
}

function initialValues() {
  return {
    currentPassword: "",
    newPassword: "",
    repeatNewPassoword: "",
  };
}
