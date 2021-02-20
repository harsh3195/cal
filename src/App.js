import logo from "./logo.svg";
import "./App.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";
import Diary from "./components/screens/Diary";
function App() {
  
  return (
    <div  style={{alignItems:"center"}}>
      <Diary/>
    </div>
  );
}

export default App;
