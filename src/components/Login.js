import { Button } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { auth, db, provider } from "../config/firebase";
const Login = () => {
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithPopup(provider)
      .then((result) => {
        db.collection("users").doc(result.user.uid).set({
          userId: result.user.uid,
          userName: result.user.displayName,
          userImg: result.user.photoURL,
          userEmail: result.user.email,
          groups: [],
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <LoginContainer>
      <Button color="primary" onClick={signIn}>
        Signin With Google
      </Button>
    </LoginContainer>
  );
};

export default Login;

const LoginContainer = styled.div`
  flex: 1;
`;
