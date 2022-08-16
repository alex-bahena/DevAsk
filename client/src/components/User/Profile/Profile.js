import "./Profile.scss";
import React, { useState } from "react";
import { Grid, Image } from "semantic-ui-react";
import { useQuery } from "@apollo/client";
import { GET_USER } from "../../../gql/user";
import ImageNotFound from "../../../assets/avatar.png";
import UserNotFound from "../../UserNotFound"
import ModalBasic from "../../Modal/ModalBasic";
import AvatarForm from "../AvatarForm";
import HeaderProfile from "./HeaderProfile";
import userAuth from "../../../hooks/useAuth";
import SettignsForm from "../SettignsForm";


export default function Profile(props) {
  const { username } = props;
  const [showModal, setShowModal] = useState(false);
  const [titleModal, setTitleModal] = useState("");
  const [childrenModal, setChildrenModal] = useState(null);
  const { auth } = userAuth();
  const { data, loading, error } = useQuery(GET_USER, {
    variables: { username },
  });

  if (loading) return null;
  if (error) return <UserNotFound />;
  const { getUser } = data;

  const handlerModal = (type) => {
    switch (type) {
      case "avatar":
        setTitleModal("Update Profile Photo");
        setChildrenModal(
          <AvatarForm setShowModal={setShowModal} auth={auth} />
        );
        setShowModal(true);
        break;
      case "settings":
        setTitleModal("");
        setChildrenModal(
          <SettignsForm
            setShowModal={setShowModal}
            setTitleModal={setTitleModal}
            setChildrenModal={setChildrenModal}
          />
        );
        setShowModal(true);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Grid className="profile">
        <Grid.Column width={5} className="profile__left">
          <Image
            src={getUser.avatar ? getUser.avatar : ImageNotFound}
            avatar
            onClick={() => username === auth.username && handlerModal("avatar")}
          />
        </Grid.Column>
        <Grid.Column width={11} className="profile__right">
          <HeaderProfile
            getUser={getUser}
            auth={auth}
            handlerModal={handlerModal} />
          <div>Followers</div>
          <div className="other">
            <p className="name">{getUser.name}</p>
            {getUser.siteWeb && (
              <a
                href={getUser.siteWeb}
                className="siteWeb"
                target="_blank"
                rel="noopener noreferrer"
              >
                {getUser.siteWeb}
              </a>
            )}
            {getUser.description && (
              <p className="description">{getUser.description}</p>
            )}
          </div>
        </Grid.Column>
      </Grid>
      <ModalBasic show={showModal} setShow={setShowModal} title={titleModal}>
        {childrenModal}
      </ModalBasic>
    </>
  )
}