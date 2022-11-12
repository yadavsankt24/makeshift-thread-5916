import React, { useState } from "react";
import Homepage from "../../Homepage/Homepage";
import Megha from "../../Meghamenu/Megha";
import { Example } from "../Dialoguebox/Popup";


const Main = () => {
  const [men, setMen] = useState(false);
  return (
    <>
      <Megha />
       <div className="maincontainer" style={{ margin: "10px" }}>
        <Homepage/>
        <Example style={{ border: "1px solid red" }}></Example>
      </div>
    </>
  );
};

export default Main;
