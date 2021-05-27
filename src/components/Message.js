import React, { useState } from "react";
import styled from "styled-components";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, provider } from "../config/firebase";

const Message = ({
  messageText,
  sentAt,
  senderId,
  senderName,
  senderImage,
}) => {
  const [user] = useAuthState(auth);

  return (
    <MessageContainer className={senderId == user.uid ? "you" : "other"}>
      <img src={senderImage} />
      <MessageDetails>
        <MessageHeader>
          <h4>{senderName} </h4> <small></small>
        </MessageHeader>
        <MessageBody>{messageText}</MessageBody>
      </MessageDetails>
    </MessageContainer>
  );
};

export default Message;

const MessageContainer = styled.div`
  display: flex;
  align-self: flex-start;
  max-width: 350px;
  margin-top: 20px;
  > img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: solid 2px white;
  }
  &.you {
    display: flex;
    flex-direction: row-reverse;
    align-self: flex-end;
    > div {
      background-color: #1cdf5e;
      color: #fff;
    }
  }
`;

const MessageDetails = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f5f6fa;
  padding: 20px;
  border-radius: 10px;
`;

const MessageHeader = styled.div`
  display: flex;
  > h4 {
    font-size: 16px;
    font-weight: 500;
    font-family: roboto;
  }
`;

const MessageBody = styled.div`
  font-size: 13px;
  font-family: Open Sans;
`;
