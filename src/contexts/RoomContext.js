import React, { useState, createContext, useEffect } from "react";
export const RoomContext = createContext();

export const RoomProvider = (props) => {
  const [roomId, setRoomId] = useState("");
  return (
    <RoomContext.Provider value={{ roomId, setRoomId }}>
      {props.children}
    </RoomContext.Provider>
  );
};
