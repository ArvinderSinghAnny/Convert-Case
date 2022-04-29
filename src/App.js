import logo from "./logo.svg";
import React, { useState } from "react";
// import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import "./App.css";
import Navbar from "./Component/Navbar";
import Textform from "./Component/Textform";
import About from "./Component/About";
import Privacy from "./Component/Privacy";
import Term from "./Component/Term";
import Desc from "./Component/Desc";
import Anny from "./Component/Anny";
import Intro from "./Component/Arvind";

function App() {
   const [mode, settext] = useState("light");
   const toogle = () => {
      if (mode === "light") {
         settext("dark");
         document.body.style.backgroundColor = "#042743";
         document.body.style.color = "white";
         document.getElementById("anny").style.background = "grey";
         document.getElementById("anny").style.color = "white";
      } else {
         settext("light");
         document.body.style.backgroundColor = "white";
         document.body.style.color = "black";
         document.getElementById("anny").style.background = "white";
         document.getElementById("anny").style.color = "black";
      }
   };
   return (
      <>

         <Navbar mode={mode} toogle={toogle} />
         <div className="container"></div>
         <Textform />

      </>
   );
}

export default App;
