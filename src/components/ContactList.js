import React, { useState } from "react";
import ContactCard from "./ContactCard.js";
import styled from "styled-components";
function ContactList() {
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
