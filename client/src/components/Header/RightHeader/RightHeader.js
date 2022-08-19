import React, { useState } from "react";
import { Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth"
import ModalUpload from "../../Modal/ModalUpload";
import ImageNotFound from "../../../assets/avatar.png";
import { useQuery } from "@apollo/client";
import { GET_USER } from "../../../gql/user";
import { HomeIcon } from '@heroicons/react/solid'
import { PlusIcon } from '@heroicons/react/solid'
import "./RightHeader.scss";

export default function RightHeader() {
  const [showModal, setShowModal] = useState(false);
  const { auth } = useAuth();
  const { data, loading, error } = useQuery(GET_USER, {
    variables: { username: auth.username },
  });

  if (loading || error) return null;
  const { getUser } = data;

  return (
    <>
      <div className="right-header">
        <Link to="/">
          <HomeIcon className="home-icon" />
          {/* <Icon name="home" /> */}
        </Link>
        {/* <Icon name="plus" /> */}
        <PlusIcon className="plus-icon" onClick={() => setShowModal(true)} />
        <Link to={`/${auth.username}`}>
          <Image src={getUser.avatar ? getUser.avatar : ImageNotFound} avatar />
        </Link>
      </div>
      <ModalUpload show={showModal} setShow={setShowModal} />
    </>
  );
}
