import React from "react";
import styled from "styled-components";
import ForumOutlinedIcon from "@material-ui/icons/ForumOutlined";
import CallIcon from "@material-ui/icons/Call";
const Nav = () => {
  return (
    <NavContainer>
      <NavContents>
        <NavHeader>
          <ForumOutlinedIcon />
        </NavHeader>
        <NavBody>
          <CallIcon />
        </NavBody>
      </NavContents>
    </NavContainer>
  );
};

export default Nav;
const NavContainer = styled.div`
  background: #fff;
  /* border-right: 1px var(--border-color); */
`;

const NavHeader = styled.div`
  flex: 1;
  padding: 20px;
  /* background-color: #23c85b; */
  display: flex;
  align-items: center;
  justify-content: center;
  > .MuiSvgIcon-root {
    color: #23c85b;
    font-size: 30px;
  }
`;

const NavContents = styled.div`
  width: 70px;
  display: flex;
  flex-direction: column;
`;
const NavBody = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
