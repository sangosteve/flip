import { Avatar } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

function ContactCard({
  id,
  displayName,
  userImg,
  lastMessage,
  lastMessageTime,
}) {
  return (
    <ContactCardContainer>
      <img src={userImg} />
      <ContactInfo>
        <h5>{displayName}</h5>
        {lastMessage}
      </ContactInfo>
      <MsgTimeContainer>
        <p>{lastMessageTime}</p>
        <MoreHorizIcon />
      </MsgTimeContainer>
    </ContactCardContainer>
  );
}

export default ContactCard;

const ContactCardContainer = styled.div`
  width: 100%;
  background-color: #fff;
  display: flex;
  margin-top: 2px;
  padding: 10px;
  cursor: pointer;
  border: solid 1px #ededed;

  > img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 7px;
  flex: 0.6;
  overflow: hidden;
  display: inline-block;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 14px;
  display: inline-block;
  text-overflow: ellipsis;
  white-space: nowrap;
  > p {
  }
`;

const MsgTimeContainer = styled.div`
  flex: 0.3;
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: flex-end;
  > p {
    font-size: 14px;
  }
`;
