import React, { useState } from "react";
import styled from "styled-components";
import { db } from "../config/firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, provider } from "../config/firebase";
import firebase from "firebase";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import MoreVertOutlinedIcon from "@material-ui/icons/MoreVertOutlined";
import GroupAddOutlinedIcon from "@material-ui/icons/GroupAddOutlined";
import { Button, Modal } from "react-bootstrap";

import GroupList from "./GroupList";

const Sidebar = () => {
  const [newGroupName, setNewGroupName] = useState("");
  const [user, loading] = useAuthState(auth);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addGroup = () => {
    if (newGroupName) {
      db.collection("groups")
        .add({
          name: newGroupName,
          createdBy: user.uid,
          members: [user.uid],
          groupIcon: null,
          groupType: 1,
        })
        .then((docRef) => {
          //get the users collection where userId = current user
          db.collection("users")
            .doc(user.uid)
            .update({
              groups: firebase.firestore.FieldValue.arrayUnion(docRef.id),
            });
          //add recently added group document id to userGroups
          console.log(docRef.id);
          //close modal
          setNewGroupName("");
          handleClose();
        });
    }
  };

  return (
    <SidebarContainer>
      <SidebarHeader>
        <HeaderTitle>
          <h4>Chats</h4>
          <HeaderAction>
            <MoreVertOutlinedIcon onClick={handleShow} />
          </HeaderAction>
        </HeaderTitle>

        {/* <HeaderOptions>
          <button>All Chats</button>
          <HeaderSearch>
            <input type="text" placeholder="Search messages" />
          </HeaderSearch>
        </HeaderOptions> */}
      </SidebarHeader>
      <SidebarBody>
        <GroupList />
      </SidebarBody>

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
          <input
            type="text"
            value={newGroupName}
            onChange={(e) => setNewGroupName(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addGroup}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </SidebarContainer>
  );
};

export default Sidebar;
const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  flex: 1;
  border: var(--border-color);
  background-color: #ededed;
`;

const SidebarHeader = styled.div`
  overflow: hidden;
  width: 350px;
  max-height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex: 1;
  background-color: #fff;
`;

const HeaderTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;

  > h4 {
    font-weight: 500;
    color: #626570;
  }
`;

const HeaderAction = styled.div`
  > .MuiSvgIcon-root {
    color: var(--text-muted-color);
    cursor: pointer;
  }
`;

const HeaderOptions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  > button {
    background-color: #1cdf5e;
    border: none;
    color: #fff;
    width: 100px;
  }
`;

const HeaderSearch = styled.div`
  width: 200px;
  position: relative;
  > input {
    width: 100%;
    height: 24px;
    padding: 2px 4px 2px 4px;
    border-radius: 5px;
    border: var(--border-color);
  }
  > input:focus {
    outline: none;
  }
`;

const SidebarBody = styled.div`
  flex: 1;
  overflow: hidden;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  height: 100px;
  margin-top: 20px;
  width: 100%;
  background-color: red;
`;
