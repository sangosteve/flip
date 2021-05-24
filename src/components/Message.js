import React, { useState } from "react";
import styled from "styled-components";

const Message = ({ messageText, sentAt }) => {
  return (
    <MessageContainer>
      <small>{messageText}</small>
    </MessageContainer>
  );
};

export default Message;

const MessageContainer = styled.div`
  margin-left: 300px;
`;
