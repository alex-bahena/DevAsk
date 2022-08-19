import "./HeaderProfile.scss";
import { Button } from "semantic-ui-react";
import { useQuery } from "@apollo/client";
import { IS_FOLLOW } from "../../../../gql/follow";

export default function HeaderProfile(props) {
  const { getUser, auth, handlerModal } = props;
  
  const { data, loading } = useQuery(IS_FOLLOW, {
    variables: { username: getUser.username },
  });



 const buttonFollow = () => {
  if(data.isFollow) {
    return  <Button className="btn-danger">Unfollow</Button>;
       
} else {
    return <Button className="btn-action">Follow</Button>;
  }
 };

  return (
    <div className="header-profile">
      <h2>{getUser.username}</h2>
      {getUser.username === auth.username ? (
        <Button onClick={() => handlerModal("settings")}>Settings</Button>
      ) : (
        !loading && buttonFollow()
      )}
    </div>
  );
}
