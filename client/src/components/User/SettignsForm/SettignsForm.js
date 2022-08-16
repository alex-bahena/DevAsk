import "./SettignsForm.scss";
import { Button } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import { useApolloClient } from "@apollo/client";
import useAuth from "../../../hooks/useAuth";

export default function SettignsForm(props) {
  const { setShowModal } = props;
  const history = useHistory();
  const client = useApolloClient();
  const { logout } = useAuth();

  const onLogout = () => {
    client.clearStore();
    logout();
    history.push("/");
  };

  return (
    <div className="settigns-form">
      <Button>Update Password</Button>
      <Button>Update Email</Button>
      <Button>Update Description</Button>
      <Button>Update Website</Button>
      <Button onClick={onLogout}>Logout</Button>
      <Button onClick={() => setShowModal(false)}>Cancel</Button>
    </div>
  );
}
