
import { Button } from "semantic-ui-react";
import { useDropzone } from "react-dropzone";
import React, { useCallback } from "react";
import "./AvatarForm.scss";

export default function AvatarForm(props) {
  const { setShowModal } = props;

  const onDrop = useCallback((acceptedFile) => {
    console.log(acceptedFile);
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
