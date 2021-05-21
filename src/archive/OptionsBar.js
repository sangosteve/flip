import React from "react";
import styled from "styled-components";
import ForumIcon from "@material-ui/icons/Forum";

function OptionsBar() {
  return <OptionsBarContainer></OptionsBarContainer>;
}

export default OptionsBar;
const OptionsBarContainer = styled.div`
  flex: 0.04;
  background-color: #1a232e;
  display: flex;
  flex-direction: column;
`;
