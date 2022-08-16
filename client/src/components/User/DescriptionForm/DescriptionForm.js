import "./DescriptionForm.scss";
import { Form, TextArea, Button } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useMutation } from "@apollo/client";
import { UPDATE_USER } from "../../../gql/user";


export default function DescriptionForm(props) {

  const { setShowModal, currentDescription, refetch } = props;
  const [updateUser] = useMutation(UPDATE_USER);

  const formik = useFormik({
    initialValues: {
      description: currentDescription || "",
    },
    validationSchema: Yup.object({
      description: Yup.string().required(),
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
        // toast.error("Error while updating your Bio");
        console.log('Error while updating your Bio');
      }
    },
  });

  return (
    <Form className="description-form" onSubmit={formik.handleSubmit}>
      <TextArea
        name="description"
        value={formik.values.description}
        onChange={formik.handleChange}
        className={formik.errors.description && "error"}
      />
      <Button type="submit" className="btn-submit">
        Update
      </Button>
    </Form>
  );
}
