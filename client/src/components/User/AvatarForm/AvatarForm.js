
import { Button } from "semantic-ui-react";
import "./AvatarForm.scss";

export default function AvatarForm(props) {
  const { setShowModal } = props;


  return (

    <div className="avatar-form">
      <Button>Upload Photo</Button>
      <Button>Delete Current Photo</Button>
      <Button onClick={() => setShowModal(false)}>Cancel</Button>
    </div>
  )

}
