import { Avatar } from "@material-ui/core";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import React from "react";
import styled from "styled-components";

function Chat() {
  return (
    <ChatContainer>
      <ChatHeader>
        <AvatarContainer>
          <Avatar />
          <AvatarInfo>
            <h5>John Doe</h5>
            <small>
              <FiberManualRecordIcon /> Available
            </small>
          </AvatarInfo>
          <ExpandMoreIcon />
        </AvatarContainer>
      </ChatHeader>

      <ChatFooter>
        <textarea placeholder="Message #Steve" />
      </ChatFooter>
    </ChatContainer>
  );
}

export default Chat;
const ChatContainer = styled.div`
  flex: 0.8;
`;

const ChatHeader = styled.div`
  flex: 0.5;
  border: solid 1px #ededed;
  height: 53px;
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 77%;
`;

const AvatarContainer = styled.div`
  height: 100%;
  display: flex;
  width: 250px;
  align-self: flex-end;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: 0px 20px;
  > .MuiSvgIcon-root {
    color: #73757b;
    align-self: flex-start;
    margin-top: 10px;
    cursor: pointer;
  }
`;

const AvatarInfo = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 5px;
  > h5 {
    font-weight: 500;
  }
  > small {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: #73757b;
    > .MuiSvgIcon-root {
      color: #23c85b;
      font-size: 14px;
    }
  }
`;

const ChatFooter = styled.div`
  position: fixed;
  padding: 20px;
  bottom: 0;
  width: 74vw;
  height: 65px;
  > textarea {
    width: 100%;
    height: 60px;
    padding: 10px 0px 10px 10px;
    border-radius: 5px;
  }
  > textarea:focus {
    outline: none;
  }
`;
