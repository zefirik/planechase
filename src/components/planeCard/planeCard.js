import axios from 'axios';
import React, { useState} from 'react';

function PlaneCard () {
    
    const [dataCards, setDataCards] = useState([]);
    
    function getData () {
        let arrData=[];
        
        for(let i = 1; i <= 6; i++ ){
        axios.get(`https://mtgify.app/api/card?page=${i}&search=&sets[]=237`)
        // eslint-disable-next-line no-loop-func
        .then(response => {
        arrData = [...response.data.data, ...arrData];

        console.log("RESPONS FOR FIND", arrData);
        setDataCards(arrData);
      })}
  };
  

 
  //console.log("Output data: ",dataCards)
  
    return(
        <>
        <br/>
        <button onClick={getData}>getData</button>
        <div>
         <tbody>
            {dataCards.map((item) => (
             <tr key = {item.id}>
                <td> - </td>
                <td> <img src={item.image_url} alt={"logo"} className="img_plane"/></td>
                <td>Name:{item.matched_names[0].name}</td>
                <td>Type:{item.matched_names[0].type}</td>
            </tr>))
            }
        </tbody>
        </div>
        </>
    )
}

export default PlaneCard;