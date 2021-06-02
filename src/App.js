import "./App.css";
import React from "react";
import styled from "styled-components";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "./config/firebase";
import Login from "./components/Login";
import { RoomProvider } from "./contexts/RoomContext";

function App() {
  const [user, loading] = useAuthState(auth);

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
    <AppContainer>
      <RoomProvider>
        <Router>
          {!user ? (
            <Login></Login>
          ) : (
            <Switch>
              <Route exact path="/">
                {/* <Nav /> */}
                <Sidebar />
                <Chat />
              </Route>
            </Switch>
          )}
        </Router>
      </RoomProvider>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex: 1;
`;
