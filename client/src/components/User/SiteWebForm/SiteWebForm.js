import React from "react";
import { Form, Button } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useMutation } from "@apollo/client";
import { UPDATE_USER } from "../../../gql/user";
import "./SiteWebForm.scss";

export default function SiteWebForm(props) {
  const { setShowModal, currentSiteWeb, refetch } = props;
  const [updateUser] = useMutation(UPDATE_USER);

  const formik = useFormik({
    initialValues: {
      siteWeb: currentSiteWeb || "",
    },
    validationSchema: Yup.object({
      siteWeb: Yup.string().required(),
    }),
    onSubmit: async (formData) => {
      try {
        await updateUser({
          variables: {
            input: formData,
          },
        });
        refetch();
        setShowModal(false);
      } catch (error) {
        // toast.error("Error while updating Page!");
        console.log('Error while updating Website!');
      }
    },
  });

  return (
    <Form className="site-web-form" onSubmit={formik.handleSubmit}>
      <Form.Input
        placeholder="URL web"
        name="siteWeb"
        value={formik.values.siteWeb}
        onChange={formik.handleChange}
        error={formik.errors.siteWeb && true}
      />
      <Button type="submit" className="btn-submit">
        Update
      </Button>
    </Form>
  );
}
