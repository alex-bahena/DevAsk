import React, {useState, useEffect } from 'react';
import { size } from "lodash";
import { useQuery } from "@apollo/client";
import { GET_FOLLOWERS } from "../../../../gql/follow";
import ModalBasic from "../../../Modal/ModalBasic";
import ListUsers from "../../ListUsers";
import "./Followers.scss";

export default function Followers(props) {
    const { username } = props;
    const [showModal, setShowModal] = useState(false);
    const [titleModal, setTitleModal] = useState("");
    const [childrenModal, setchildrenModal] = useState(null);
 
    const {
      data: dataFollowers,
      loading: loadingFollowers,
      startPolling: startPollingFollowers,
      stopPolling: stopPollingFollowers,
     } = useQuery(GET_FOLLOWERS, {
      variables: { username }
    });
    
   useEffect(() => {
    startPollingFollowers(1000);
    return () => {
      stopPollingFollowers();
    } 
   }, [startPollingFollowers, stopPollingFollowers]);

   const openFollowers = () => {
    setTitleModal("Followers");
    setchildrenModal(
     <ListUsers users={getFollowers} setShowModal={setShowModal} />
    );
    setShowModal(true);
   };

    if(loadingFollowers) return null;
    const { getFollowers } = dataFollowers;
    console.log(getFollowers);
    


  return (
    <>
    <div className='followers'>
     <p className='link'><span>**</span> posts</p>
     <p className='link' onClick={openFollowers}><span>{size(getFollowers)}</span> followers</p>
     <p className='link'><span>**</span> following</p>
     </div>
     <ModalBasic show={showModal} setShow={setShowModal} title={titleModal}>
      {childrenModal}
     </ModalBasic>
     </>
  );
}
