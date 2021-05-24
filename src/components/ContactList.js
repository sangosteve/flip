import React, { useState } from "react";
import ContactCard from "./ContactCard.js";
import styled from "styled-components";
import { db } from "../config/firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { RoomContext } from "../contexts/RoomContext";
function ContactList() {
  const [channels, loading, error] = useCollection(db.collection("groups"));
  const [contacts, setContacts] = useState([
    {
      id: 1,
      displayName: "steve sango",
      userImg: "https://via.placeholder.com/150",
      lastMessage: "Talk later im getting into a meeting right now",
      lastMessageTime: "10 mins",
    },
    {
      id: 2,
      displayName: "steve sango",
      userImg: "https://via.placeholder.com/150",
      lastMessage: "Talk later im getting into a meeting right now",
      lastMessageTime: "10 mins",
    },
    {
      id: 3,
      displayName: "steve sango",
      userImg: "https://via.placeholder.com/150",
      lastMessage: "Talk later im getting into a meeting right now",
      lastMessageTime: "10 mins",
    },
    {
      id: 4,
      displayName: "steve sango",
      userImg: "https://via.placeholder.com/150",
      lastMessage: "Talk later im getting into a meeting right now",
      lastMessageTime: "10 mins",
    },
    {
      id: 5,
      displayName: "steve sango",
      userImg: "https://via.placeholder.com/150",
      lastMessage: "Talk later im getting into a meeting right now",
      lastMessageTime: "10 mins",
    },
    {
      id: 6,
      displayName: "steve sango",
      userImg: "https://via.placeholder.com/150",
      lastMessage: "Talk later im getting into a meeting right now",
      lastMessageTime: "10 mins",
    },
    {
      id: 7,
      displayName: "steve sango",
      userImg: "https://via.placeholder.com/150",
      lastMessage: "Talk later im getting into a meeting right now",
      lastMessageTime: "10 mins",
    },
    {
      id: 8,
      displayName: "steve sango",
      userImg: "https://via.placeholder.com/150",
      lastMessage: "Talk later im getting into a meeting right now",
      lastMessageTime: "10 mins",
    },
    {
      id: 9,
      displayName: "steve sango",
      userImg: "https://via.placeholder.com/150",
      lastMessage: "Talk later im getting into a meeting right now",
      lastMessageTime: "10 mins",
    },
    {
      id: 10,
      displayName: "steve sango",
      userImg: "https://via.placeholder.com/150",
      lastMessage: "Talk later im getting into a meeting right now",
      lastMessageTime: "10 mins",
    },
  ]);
  return (
    <ContactListContainer>
      {contacts.map((contact) => (
        <ContactCard
          key={contact.id}
          id={contact.id}
          displayName={contact.displayName}
          userImg={contact.userImg}
          lastMessage={contact.lastMessage}
          lastMessageTime={contact.lastMessageTime}
        />
      ))}
    </ContactListContainer>
  );
}

export default ContactList;
const ContactListContainer = styled.div`
  width: 100%;
`;
