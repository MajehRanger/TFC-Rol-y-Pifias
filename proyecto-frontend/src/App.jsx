import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { LateralComponent } from "./components/lateral-menu/LateralComponent";
import { HeaderComponent } from "./components/header/HeaderComponent";
import {ListSheetComponent} from "./components/sheetList/ListSheetComponent";

function App() {
  return (
    <>
      <HeaderComponent />
      <main>
      <LateralComponent />
      <ListSheetComponent/>
      </main>
      

      
    </>
  );
}

export default App;
