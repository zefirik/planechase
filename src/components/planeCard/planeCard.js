import axios from 'axios';
import React, { useState, useEffect} from 'react';

function PlaneCard () {
    
    const [dataCards, setDataCards] = useState([]);
    
    async function getData() {
        let arrData=[];
        
        for(let i = 1; i <= 6; i++ ){
        await axios.get(`https://mtgify.app/api/card?page=${i}&search=&sets[]=237`)
        // eslint-disable-next-line no-loop-func
        .then(response => {
        arrData = [...response.data.data, ...arrData];

        console.log("RESPONS FOR FIND", arrData);
        setDataCards(arrData);
      })}
  };
  
  useEffect(() => {
    getData();
  }, []);

 
      
  
if(dataCards.length > 0){
    return(
        <>
        <br/>
        {/* <button onClick={getData}>getData</button> */}
        <div>
            <ul key = {dataCards[0].id} style={{listStyleType: "none"}}>
                <li> <img src={dataCards[0].image_url} alt={"logo"} className="img_plane"/></li>
                <li>Name:{dataCards[0].matched_names[0].name}</li>
                <li>Type:{dataCards[0].matched_names[0].type}</li>
                <li>Type:{dataCards[0].matched_names[0].text}</li>
            </ul>
      
        </div>
        </>
    )}

    return (
        <div>
            Somme problem
        </div>
    )
}

export default PlaneCard;