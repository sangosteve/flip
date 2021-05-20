import React from "react";
import styled from "styled-components";
import ForumIcon from "@material-ui/icons/Forum";

function OptionsBar() {
  return (
    <OptionsBarContainer>
      <OptionsBarHeader>
        <ForumIcon color="#FFF" />
      </OptionsBarHeader>
    </OptionsBarContainer>
  );
}

export default OptionsBar;
const OptionsBarContainer = styled.div`
  flex: 0.04;
  height: 100vh;
  background-color: #1a232e;
  display: flex;
  flex-direction: column;
  z-index: 2;
`;

const OptionsBarHeader = styled.div`
  flex: 0.08;
  background-color: #23c85b;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > .MuiSvgIcon-root {
    color: #fff;
    font-size: 32px;
  }
`;
