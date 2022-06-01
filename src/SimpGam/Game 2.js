import React from 'react';
import '../Game.css';
import Mafia from '../Mafia.jpg';
import {
  Link
} from "react-router-dom"

const Game2 = () => {

  const items = [
    "Nice",
    "OK"
  ]
    return (
        
          <conteiner_1>
            <div className="name_box">	<p className="name_text"> Mafia </p>	</div>
            <text_box>
              <div className="conteiner_2"> <img src={Mafia}></img> </div>
              <div className="conteiner_3"> <p className="font_1"> Cool game about gangsters!</p> </div>
            </text_box>
            <div className="comment"> <p className="name_text"> Comment </p> </div> 
            {/* <input type="text" className="comment_box" /> */}
            <ul>
              
              {items.map((value, index) => {
                return <li key={index}>{value}</li>
              })}
            </ul>
            <button_zone>
              <Link to = "/single" className="button_back"> <p className="name_text"> Back </p> </Link>
              <Link to = "/" className="button_main"> <p className="name_text"> Main </p> </Link>
            </button_zone>
          </conteiner_1>	
        
      );
}

export default Game2;