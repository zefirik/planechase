import React, { useState } from 'react';
import "./style.css";
import chaos from "./img_dice/CHAOS.svg"
import mana from "./img_dice/mtg_mana.jpg"

  
  function toggleClasses(die) {
    die.classList.toggle("odd-roll");
    die.classList.toggle("even-roll");
  }
  
  function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
    
  
 

  const DiceApp = () =>{
    const [diceSide,setDiceSide] = useState();
    
    function rollDice() {
      const dice = [...document.querySelectorAll(".die-list")];
      dice.forEach(die => {
        toggleClasses(die);
        die.dataset.roll = getRandomNumber(1, 6);
        setDiceSide(die.dataset.roll);
      });
    }
    console.log(diceSide, typeof(diceSide));
    

    if (diceSide === "1") {
      console.log('Go to new Plane')
    };
    return(
      <div className="body_dice">
        <div className="dice">
      <ol className="die-list even-roll" data-roll="1" id="die-1">
        <li className="die-item" data-side="1">
          <span className="dot">
            <img src={mana} alt="plane_walk" width="50" height="70"/>
          </span>
        </li>
        <li className="die-item" data-side="2">
          
        </li>
        <li className="die-item" data-side="3">
          
        </li>
        <li className="die-item" data-side="4"></li>
        <li className="die-item" data-side="5"></li>
        <li className="die-item" data-side="6">
          <span className="dot">
            <img src={chaos} alt="chaos" width="70" height="70"/>
          </span>
        </li>
      </ol>
    </div>
    <div>
      <button className="button_dice" onClick={rollDice}>Roll Dice</button>
    </div>
    </div>
    )
  }

  export default DiceApp;