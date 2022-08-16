
import { Button } from "semantic-ui-react";
import { useDropzone } from "react-dropzone";
import React, { useState, useCallback } from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_AVATAR, GET_USER } from "../../../gql/user";
import { toast } from "react-toastify"
import "./AvatarForm.scss";

export default function AvatarForm(props) {
  const { setShowModal, auth } = props;
  const [loading, setLoading] = useState(false);

  const [updateAvatar] = useMutation(UPDATE_AVATAR, {
    update(cache, { data: { updateAvatar } }) {
      const { getUser } = cache.readQuery({
        query: GET_USER,
        variables: { username: auth.username },
      });

      cache.writeQuery({
        query: GET_USER,
        variables: { username: auth.username },
        data: {
          getUser: { ...getUser, avatar: updateAvatar.urlAvatar },
        },
      });
    },
  });

  const onDrop = useCallback(async (acceptedFile) => {
    const file = acceptedFile[0];

    try {
      setLoading(true);
      const result = await updateAvatar({ variables: { file } });
      const { data } = result;

      if (!data.updateAvatar.status) {
        toast.warning("Error while updating avatar!");
        setLoading(false);
      } else {
        setLoading(false);
        setShowModal(false);
      }
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
      <Button {...getRootProps()} loading={loading}>Upload Photo</Button>
      <Button>Delete Current Photo</Button>
      <Button onClick={() => setShowModal(false)}>Cancel</Button>
      <input {...getInputProps()} />
    </div>
  )

}
