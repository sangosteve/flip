import React from "react";
import styled from "styled-components";
import ForumOutlinedIcon from "@material-ui/icons/ForumOutlined";

const Nav = () => {
  return (
    <NavContainer>
      <NavContents>
        <NavHeader>
          <ForumOutlinedIcon />
        </NavHeader>
      </NavContents>
    </NavContainer>
  );
};

export default Nav;
const NavContainer = styled.div`
  background: #1a232e;
  /* border-right: 1px var(--border-color); */
`;

const NavHeader = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #23c85b;
  display: flex;
  align-items: center;
  justify-content: center;
  > .MuiSvgIcon-root {
    color: #fff;
    font-size: 30px;
  }
`;

const NavContents = styled.div`
  width: 70px;
  display: flex;
  flex-direction: column;
`;
