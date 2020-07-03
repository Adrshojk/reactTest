import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { UserProvider } from "./context/userState";
import { Header } from "./components/Header";
import { Login } from "./components/Login";
import {Home} from "./components/Home";


function App() {
  return (
    <div className="App">
      <UserProvider>
        <Header />
        <Home/>
      </UserProvider>
    </div>
  );
}

export default App;
