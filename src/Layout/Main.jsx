import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import "./Main.css";

const Main = () => {
  return (
    <div className="container">
      <Header />
      <Outlet />
    </div>
  );
};

export default Main;
