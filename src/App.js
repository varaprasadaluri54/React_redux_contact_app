import React from "react";
import { ToastContainer } from "react-toastify";
import Navbar from "./component/Navbar";
import "./styles.css";
import { Route, Switch } from "react-router-dom";
import Home from "./component/Home";
import AddContact from "./component/AddContact";
import EditContact from "./component/EditContact";

export default function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/add">
          <AddContact />
        </Route>
        <Route path="/edit/:id">
          <EditContact />
        </Route>
      </Switch>
    </div>
  );
}
