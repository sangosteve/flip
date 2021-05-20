import React from "react";
import styled from "styled-components";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import ContactList from "./ContactList";

function Sidebar() {
  return (
    <SidebarContainer>
      <ContactList />
    </SidebarContainer>
  );
}

export default Sidebar;

const SidebarContainer = styled.div`
  flex: 0.2;
  display: flex;
  flex-direction: column;
  background-color: #ededed;
  border: solid 1px #ededed;
`;
