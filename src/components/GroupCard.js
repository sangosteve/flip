import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { RoomContext } from "../contexts/RoomContext";

const GroupCard = ({ id, name, icon }) => {
  const { roomId, setRoomId } = useContext(RoomContext);
  const selectChannel = () => {
    if (id) {
      console.log(id);
      setRoomId(id);
    }
  };
  return (
    <GroupCardContainer onClick={selectChannel}>
      <GroupIcon src={icon} /> <small>{name}</small>
    </GroupCardContainer>
  );
};

export default GroupCard;
const GroupCardContainer = styled.div`
  width: 100%;
  background-color: #fff;
  display: flex;
  margin-top: 2px;
  padding: 10px;
  cursor: pointer;
  /* border: solid 1px #ededed; */
`;

const GroupIcon = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;
