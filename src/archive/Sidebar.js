import React from "react";
import styled from "styled-components";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import ContactList from "../components/ContactList";

function Sidebar() {
  return <SidebarContainer></SidebarContainer>;
}

export default Sidebar;

const SidebarContainer = styled.div`
  flex: 0.18;
  display: flex;
  flex-direction: column;
  background-color: #ededed;
  border: solid 1px #ededed;
`;
