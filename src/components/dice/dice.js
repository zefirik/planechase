import React, { useContext } from 'react';
import chaos from "./img_dice/CHAOS.svg"
import mana from "./img_dice/mtg_mana.jpg"
import {StoreContext} from '../../store/context'


  
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
    const {count, setCount, setSideDice, diceRoll, setDiceRoll} = useContext(StoreContext);
    
    function rollDice() {
      const dice = [...document.querySelectorAll(".die-list")];
      dice.forEach(die => {
        toggleClasses(die);
        die.dataset.roll = getRandomNumber(1, 6);
        setSideDice(die.dataset.roll);
        setDiceRoll(prev => prev + 1);
        if (die.dataset.roll === "3") {
          setCount(prev => prev + 1);
          console.log('Next Plane')
        };
        if (die.dataset.roll === "4") {
          console.log('Use Chaos')
        };
      });
    }

    function nextMove(){
      setDiceRoll(0)
      setSideDice(0);
    };
    
    
    
    return(
      <>
      <div className="dice ">
        <ol className="die-list even-roll" data-roll="3">
          <li className="die-item" data-side="1"></li>
          <li className="die-item" data-side="2"></li>
          <li className="die-item" data-side="3">
            <span className="dot_dice">
              <img src={mana} alt="plane_walk" width="50" height="70"/>
            </span>
          </li>
          <li className="die-item" data-side="4">
            <span className="dot_dice">
              <img src={chaos} alt="chaos" width="70" height="70"/>
            </span>
          </li>
          <li className="die-item" data-side="5"></li>
          <li className="die-item" data-side="6"></li>
        </ol>
      </div>

      <div className="dot_dice">
        <div className="text_white">Next Roll: +{diceRoll} Mana</div>
          <button className="button_dice" onClick={rollDice}>Roll Dice</button>
          <button className="button_dice" onClick={nextMove}>Next Turn</button>
              <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop:'5px'
                }}> 
                {(count !== 0) ? <button className="button_click" onClick = {()=> setCount(prev => prev - 1)}>↶</button> : null}
                <button className="button_click" onClick = {()=> setCount(prev => prev + 1)}>↷</button> 
              </div>   
      </div>
  </>
    )
  };

  export default DiceApp;