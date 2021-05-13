import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  const [greetings, setGreetings] = useState(null);
  const onclicking = () => {
     setGreetings("Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy");
  }
  return (
    <div id="main">
    <button id="click" type ="button" onClick = {onclicking}>Click Me</button>
    <para id="para">{greetings}</para>
      // Do not alter the main div
    </div>
  );
}


export default App;
