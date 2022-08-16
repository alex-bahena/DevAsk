import "./SettignsForm.scss";
import { Button } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import { useApolloClient } from "@apollo/client";
import useAuth from "../../../hooks/useAuth";
import PasswordForm from "../PasswordForm";
import DescriptionForm from "../DescriptionForm";
import SiteWebForm from "../SiteWebForm";
import EmailForm from "../EmailForm";

export default function SettignsForm(props) {
  const { setShowModal, setTitleModal, setChildrenModal, getUser, refetch } = props;
  const history = useHistory();
  const client = useApolloClient();
  const { logout } = useAuth();

  const onChangePassoword = () => {
    setTitleModal("Change Password");
    setChildrenModal(<PasswordForm logout={onLogout} />);
  };

  const onChangeEmail = () => {
    setTitleModal("Change Email");
    setChildrenModal(
      <EmailForm
        setShowModal={setShowModal}
        currentEmail={getUser.email}
        refetch={refetch}
      />
    );
  };

  const onChangeDescription = () => {
    setTitleModal("Update your Bio");
    setChildrenModal(
      <DescriptionForm
        setShowModal={setShowModal}
        currentDescription={getUser.description}
        refetch={refetch}
      />
    );
  };

  const onChangeSiteWeb = () => {
    setTitleModal("Update Website");
    setChildrenModal(
      <SiteWebForm
        setShowModal={setShowModal}
        currentSiteWeb={getUser.siteWeb}
        refetch={refetch}
      />
    );
  };

  const onLogout = () => {
    client.clearStore();
    logout();
    history.push("/");
  };

  return (
    <div className="settigns-form">
      <Button onClick={onChangePassoword}>Update Password</Button>
      <Button onClick={onChangeEmail}>Update Email</Button>
      <Button onClick={onChangeDescription}>Update Description</Button>
      <Button onClick={onChangeSiteWeb}>Update Website</Button>
      <Button onClick={onLogout}>Logout</Button>
      <Button onClick={() => setShowModal(false)}>Cancel</Button>
    </div>
  );
}
