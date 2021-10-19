import axios from 'axios';
import React, { useState, useEffect, useContext} from 'react';
import {StoreContext} from '../../store/context'


const PlaneCard = () => {
    const [dataCards, setDataCards] = useState([]);
    const {count, setCount} = useContext(StoreContext);

    useEffect(() => {
        getData();
      }, []);

    
    async function getData() {
        let arrData=[];
        
        for(let i = 1; i <= 6; i++ ){
        await axios.get(`https://mtgify.app/api/card?page=${i}&search=&sets[]=237`)
        
        // eslint-disable-next-line no-loop-func
        .then(response => {
        arrData = [...response.data.data, ...arrData]
      })};
      let shuffled = arrData
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

        setDataCards(shuffled);
        console.log("Shuffled : ", shuffled);
  };
  

  
if(dataCards.length > 0){
    return(
        <>
        {/* <span>{count}</span> */}
        <div className="dot">
        <img src={dataCards[count].image_url} alt={"logo"} className="img_plane"/>
            {/* <ul key = {dataCards[i].id} style={{listStyleType: "none"}}>
                <li> <img src={dataCards[i].image_url} alt={"logo"} className="img_plane"/></li>
                <li>Name:{dataCards[i].matched_names[0].name}</li>
                <li>Type:{dataCards[i].matched_names[0].type}</li>
                <li>Text:{dataCards[i].matched_names[0].text}</li>
            </ul> */}
            
        </div>
       {(dataCards[count].matched_names[0].type === 'Phenomenon') ? <div> <button onClick = {()=> setCount(prev => prev + 1)}>Next</button></div> : null}
            
        <div>
            <button onClick = {()=> setCount(prev => prev - 1)}>-</button>
            <span>{count}</span>
            <button onClick = {()=> setCount(prev => prev + 1)}>+</button>
            
        </div>
        </>
    )}

    return (
        <div>
            Connect to ServerData
        </div>
    )
};

export default PlaneCard;