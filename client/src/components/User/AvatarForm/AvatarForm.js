
import { Button } from "semantic-ui-react";
import { useDropzone } from "react-dropzone";
import React, { useCallback } from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_AVATAR } from "../../../gql/user";
import "./AvatarForm.scss";

export default function AvatarForm(props) {
  const { setShowModal } = props;

  const [updateAvatar] = useMutation(UPDATE_AVATAR)

  const onDrop = useCallback(async (acceptedFile) => {
    const file = acceptedFile[0];

    try {
      const result = await updateAvatar({ variables: { file } });
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/jpeg, image/png",
    noKeyboard: true,
    multiple: false,
    onDrop,
  });


  return (

    <div className="avatar-form">
      <Button {...getRootProps()}>Upload Photo</Button>
      <Button>Delete Current Photo</Button>
      <Button onClick={() => setShowModal(false)}>Cancel</Button>
      <input {...getInputProps()} />
    </div>
  )

}
