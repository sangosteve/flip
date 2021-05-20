import React from "react";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
function Header() {
  return (
    <HeaderContainer>
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
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  padding: 10px 0;
  align-items: center;
  border: solid 1px #ededed;
  display: flex;
  justify-content: flex-end;
  width: 100%;
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
  padding: 0px 15px;
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
