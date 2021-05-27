import React, { useState } from "react";
import { db } from "../config/firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, provider } from "../config/firebase";
import { RoomContext } from "../contexts/RoomContext";
import styled from "styled-components";
import GroupCard from "./GroupCard";

const GroupList = () => {
  const [user] = useAuthState(auth);
  const [channels, loading, error] = useCollection(
    db.collection("groups").where("members", "array-contains", user.uid)
  );

  return (
    <GroupListContainer>
      {channels?.docs.map((doc) => (
        <GroupCard
          key={doc.id}
          id={doc.id}
          name={doc.data().name}
          icon={
            doc.data().groupIcon
              ? doc.data().groupIcon
              : "https://via.placeholder.com/150"
          }
        />
      ))}
    </GroupListContainer>
  );
};

export default GroupList;
const GroupListContainer = styled.div`
  width: 100%;
`;
