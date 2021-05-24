import React from "react";
import styled from "styled-components";
import ForumOutlinedIcon from "@material-ui/icons/ForumOutlined";
import CallIcon from "@material-ui/icons/Call";
import GroupIcon from "@material-ui/icons/Group";
import SettingsIcon from "@material-ui/icons/Settings";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, provider } from "../config/firebase";
const Nav = () => {
  const [user] = useAuthState(auth);

  const signOut = () => {
    auth
      .signOut()
      .then(() => {
        console.log("Signed Out Successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <NavContainer>
      <NavContents>
        <NavHeader>
          <ForumOutlinedIcon />
        </NavHeader>
        <NavBody>
          <GroupIcon />
          <CallIcon />
          <NotificationsNoneOutlinedIcon />
          <SettingsIcon />
        </NavBody>
        <NavFooter>
          <UserAvatar src={user?.photoURL} onClick={signOut} />
        </NavFooter>
      </NavContents>
    </NavContainer>
  );
};

export default Nav;
const NavContainer = styled.div`
  background: #1cdf5e;
  position: relative;
`;

const NavHeader = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #1cdf5e;
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
const NavBody = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  > .MuiSvgIcon-root {
    color: #fff;
    font-size: 22px;
    margin-top: 24px;
    cursor: pointer;
  }
`;

const NavFooter = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const UserAvatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: solid 3px white;
  cursor: pointer;
`;
