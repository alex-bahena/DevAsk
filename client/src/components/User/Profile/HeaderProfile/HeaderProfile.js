import "./HeaderProfile.scss";
import { Button } from "semantic-ui-react";

export default function HeaderProfile(props) {
  const { getUser, auth, handlerModal } = props;

  return (
    <div className="header-profile">
      <h2>{getUser.username}</h2>
      {getUser.username === auth.username ? (
        <Button onClick={() => handlerModal("settings")}>Settings</Button>
      ) : (
        <Button>Follow</Button>
      )}
    </div>
  );
}
