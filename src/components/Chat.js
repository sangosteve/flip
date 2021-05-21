import React from "react";
import styled from "styled-components";
import SendIcon from "@material-ui/icons/Send";

const Chat = () => {
  return (
    <ChatContainer>
      <ChatHeader>
        <h6>Header</h6>
      </ChatHeader>
      <ChatBody></ChatBody>
      <ChatFooter>
        <textarea placeholder="Write a message"></textarea>
        <SendIcon />
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
