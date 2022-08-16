import "./SettignsForm.scss";
import { Button } from "semantic-ui-react";

export default function SettignsForm(props) {
  const {
    setShowModal
  } = props;

  return (
    <div className="settigns-form">
      <Button>Update Password</Button>
      <Button>Update Email</Button>
      <Button>Update Description</Button>
      <Button>Update Website</Button>
      <Button >Logout</Button>
      <Button onClick={() => setShowModal(false)}>Cancel</Button>
    </div>
  );
}
