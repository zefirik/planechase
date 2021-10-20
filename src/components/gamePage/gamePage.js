import React,{useState} from "react";
import RollDice from "../dice/dice";
import PlaneCard from "../planeCard/planeCard";
// import StorePlane from "../../store/storePlane"; 
// import {observer} from 'mobx-react-lite'
import {StoreContext} from '../../store/context'


const GamePage = () => {
  const [count, setCount] = useState(0);
  const [sideDice, setSideDice] = useState(0);
  const [diceRoll, setDiceRoll] = useState(0);
  
  return (
    <StoreContext.Provider value={{count, setCount, 
                                   sideDice, setSideDice, 
                                   diceRoll, setDiceRoll}}>
    <div className="game_page">
      <div>
      <RollDice/>
      </div>
      <div>
      <PlaneCard/>   
      </div>
    </div>
    </StoreContext.Provider>
  );
};

export default GamePage;
