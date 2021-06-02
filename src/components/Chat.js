import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import SendIcon from "@material-ui/icons/Send";
import GroupAddOutlinedIcon from "@material-ui/icons/GroupAddOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import { RoomContext } from "../contexts/RoomContext";
import firebase from "firebase";
import { db } from "../config/firebase";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, provider } from "../config/firebase";
import Message from "./Message";
import { Dropdown, Modal, Button } from "react-bootstrap";
import { Multiselect } from "multiselect-react-dropdown";
const Chat = () => {
  const [options, setOptions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const onSelect = (selectedList, selectedItem) => {
    setSelectedOptions([...selectedList]);
    console.log(selectedOptions);
  };
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [user] = useAuthState(auth);
  const [sender, setSender] = useState(null);
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
        senderId: user.uid,
        senderName: user.displayName,
        senderImage: user.photoURL,
      })
      .then(() => setNewMessage(""));
  };

  const addToGroup = () => {
    let res = selectedOptions.map((x) => x.userId);
    console.log(res);
    db.collection("groups")
      .doc(roomId)
      .update({
        members: firebase.firestore.FieldValue.arrayUnion(...res),
      });
  };

  if (loading) {
    <div>
      <p>Loading...</p>
    </div>;
  }

  useEffect(() => {
    //fetch users to be displayed by the MultipleSelect component
    db.collection("users")
      //Filter so that we dont show the selected user
      .where("userId", "!=", user.uid)
      .onSnapshot((snapshot) => {
        setOptions(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);
  return (
    <ChatContainer>
      <ChatHeader>
        <h6>{roomDetails?.data().name}</h6>
        <Dropdown>
          <Dropdown.Toggle>
            <InfoOutlinedIcon />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1" onClick={handleShow}>
              Add People
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2">Rename Group</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Delete</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </ChatHeader>
      <ChatBody>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Multiselect
              showArrow={false}
              options={options} // Options to display in the dropdown
              displayValue="userEmail" // Property name to display in the dropdown options
              onSelect={onSelect}
              selectedValues={selectedOptions}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={addToGroup}>
              Add
            </Button>
          </Modal.Footer>
        </Modal>

        {roomMessages?.docs.map((doc) => {
          const { messageText, sentAt, senderId, senderName, senderImage } =
            doc.data();

          // db.collection("users")
          //   .doc(sentBy)
          //   .get()
          //   .then((userDetails) => {
          //     setSender(userDetails.data());
          //     setLoading(false);
          //     // console.log(userDetails.data().userName);
          //   });
          return (
            <Message
              key={doc.id}
              messageText={messageText}
              sentAt={sentAt}
              senderId={senderId}
              senderName={senderName}
              senderImage={senderImage}
            />
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
  > h6 {
    font-family: Roboto;
    font-size: 14px;
    color: #626570;
  }
  > .MuiSvgIcon-root {
    font-size: 30px;
    cursor: pointer;
  }
`;
const ChatBody = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
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
    color: #0984e3;
    font-size: 30px;
    cursor: pointer;
  }
`;
