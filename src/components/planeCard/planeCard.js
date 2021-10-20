import axios from 'axios';
import React, { useState, useEffect, useContext} from 'react';
import {StoreContext} from '../../store/context'



const PlaneCard = () => {
    const {count, sideDice} = useContext(StoreContext);
    const [dataCards, setDataCards] = useState([]);
    let chaos = 0;

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
  
  function chaosText(text){
    const re = text.split("\nWhenever you roll {CHAOS},");
     return chaos = re[1];
    };

  if(sideDice === '4'){chaosText(dataCards[count].matched_names[0].text)}
  console.log("Chaos state :",chaos);
  
if(dataCards.length > 0){
    return(
        <div className="wrapper_img">
            <div className="dot">
                <img src={dataCards[count].image_url} alt={"logo"} className="img_plane"/>
            </div>
        </div>
    )}

    return (
        <div>
            Connect to ServerData
        </div>
    )
};

export default PlaneCard;