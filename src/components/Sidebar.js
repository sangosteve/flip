import React from "react";
import styled from "styled-components";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import MoreVertOutlinedIcon from "@material-ui/icons/MoreVertOutlined";

import ContactList from "./ContactList";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarHeader>
        <HeaderTitle>
          <h4>Chats</h4>
          <HeaderAction>
            <MoreVertOutlinedIcon />
          </HeaderAction>
        </HeaderTitle>

        <HeaderOptions>
          <button>All Chats</button>
          <HeaderSearch>
            <input type="text" placeholder="Search messages" />
          </HeaderSearch>
        </HeaderOptions>
      </SidebarHeader>
      <SidebarBody>
        <ContactList />
      </SidebarBody>
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
  max-height: 150px;
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
    color: #23c85b;
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
