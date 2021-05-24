import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import SendIcon from "@material-ui/icons/Send";
import { RoomContext } from "../contexts/RoomContext";
import firebase from "firebase";
import { db } from "../config/firebase";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, provider } from "../config/firebase";
import Message from "./Message";

const Chat = () => {
  const [user] = useAuthState(auth);

  const { roomId, setRoomId } = useContext(RoomContext);
  const [newMessage, setNewMessage] = useState("");
  const [roomDetails] = useDocument(
    roomId && db.collection("groups").doc(roomId)
  );

  const [roomMessages] = useCollection(
    roomId &&
      db
        .collection("message")
        .doc(roomId)
        .collection("messages")
        .orderBy("sentAt", "asc")
  );

  const saveMessage = () => {
    db.collection("message")
      .doc(roomId)
      .collection("messages")
      .add({
        messageText: newMessage,
        sentAt: firebase.firestore.FieldValue.serverTimestamp(),
        sentBy: user.uid,
      })
      .then(() => setNewMessage(""));
  };
  return (
    <ChatContainer>
      <ChatHeader>
        <h6>{roomDetails?.data().name}</h6>
      </ChatHeader>
      <ChatBody>
        {roomMessages?.docs.map((doc) => {
          const { messageText, sentAt, sentBy } = doc.data();
          {
            /* db.collection("users")
            .doc(sentBy)
            .get()
            .then((userDetails) => {
              // console.log(userDetails.data());
              setSender(userDetails.data());
              console.log(sender?.sender.userId);
            }); */
          }
          return (
            <Message key={doc.id} messageText={messageText} sentAt={sentAt} />
          );
        })}
      </ChatBody>
      <ChatFooter>
        <textarea
          placeholder="Write a message"
          value={newMessage}
          onChange={(e) => {
            setNewMessage(e.target.value);
          }}
        ></textarea>
        <SendIcon onClick={saveMessage} />
      </ChatFooter>
    </ChatContainer>
  );
};

export default Chat;
const ChatContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  border: var(--border-color);
`;

const ChatHeader = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: var(--border-color);
  padding: 17px 30px;
`;
const ChatBody = styled.div`
  flex: 1;
  padding: 30px;
  overflow: auto;
`;

const Content = styled.div`
  height: 300px;
  margin-top: 20px;
  width: 100%;
  background-color: red;
`;

const ChatFooter = styled.div`
  padding: 20px 20px;
  border-top: solid 1px #ededed;
  > textarea {
    flex-grow: 1;
    overflow: hidden;
    width: 90%;
    height: 20px;
    padding: 5px;
    resize: none;
    border: none;
  }
  > textarea:focus {
    outline: none;
  }
  > .MuiSvgIcon-root {
    color: #1cdf5e;
    font-size: 30px;
    cursor: pointer;
  }
`;
