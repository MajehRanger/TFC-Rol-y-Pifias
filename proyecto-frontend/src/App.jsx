import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ListSheetComponent from "./components/ListSheetComponent";
import { HeaderComponent } from "./components/HeaderComponent";
import { FooterComponent } from "./components/FooterComponent";

function App() {
  return (
    <>
      <HeaderComponent />
      <div className="ficha">
        <ListSheetComponent />
      </div>
      <FooterComponent />
    </>
  );
}

export default App;
