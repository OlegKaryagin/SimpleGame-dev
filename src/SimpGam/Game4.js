import React from 'react';
import '../Game.css';
import TW from '../TW.jpg';
import {
  Link
} from "react-router-dom"

const Game4 = () => {
    return (

          <conteiner_1>
            <div className="name_box">	<p className="name_text"> Total War </p>	</div>
            <text_box>
              <div className="conteiner_2"> <img src={TW}></img> </div>
              <div className="conteiner_3"> <p className="font_1"> Cool strategy game!</p> </div>
            </text_box>
            <div className="comment"> <p className="name_text"> Comment </p> </div> 
            <input type="text" className="comment_box" />
            <button_zone>
              <Link to = "/single" className="button_back"> <p className="name_text"> Back </p> </Link>
              <Link to = "/" className="button_main"> <p className="name_text"> Main </p> </Link>
            </button_zone>
          </conteiner_1>	
      );
}

export default Game4;