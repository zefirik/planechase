import React,{useState} from "react";
import RollDice from "../dice/dice";
import PlaneCard from "../planeCard/planeCard";
// import StorePlane from "../../store/storePlane"; 
// import {observer} from 'mobx-react-lite'
import {StoreContext} from '../../store/context'


const GamePage = () => {
  const [count, setCount] = useState(0); 
  
  return (
    <StoreContext.Provider value={{count, setCount}}>
    <div className="game_page">
      <RollDice/>
      <PlaneCard/>   
    </div>
    </StoreContext.Provider>
  );
};

export default GamePage;
