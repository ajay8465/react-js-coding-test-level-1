import "./App.css";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Home() {
  const [text, setText] = useState("");
  const [isReady, setIsReady] = useState(false);

  const changeHandler=(e)=>{
    setIsReady({...isReady,[e.target.name]:e.target.value});
  }

  return (
    <div className="App">
      <header className="App-header">
        <a href="https://www.freeiconspng.com/uploads/file-pokeball-png-0.png"/><img
          hidden={isReady}
          src="https://www.freeiconspng.com/uploads/file-pokeball-png-0.png"
          className="App-logo"
          alt="logo"
          style={{ padding: "10px" }}
        />
        <b>
          Requirement: Try to show the hidden image and make it clickable that
          goes to /pokedex when the input below is "Ready!" remember to hide the
          red text away when "Ready!" is in the textbox.
        </b>
        <p>Are you ready to be a pokemon master?</p>
        <input type="text" name="name" isReady={changeHandler}/>
        <span style={{ color: "red" }}>I am not ready yet!</span>
      </header>
    </div>
  );
}

export default Home;
