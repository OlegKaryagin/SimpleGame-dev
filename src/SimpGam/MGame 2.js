import React from 'react';
import '../Game.css';
import Lin from '../Lin.jpg';
import {
  Link
} from "react-router-dom"

const MGame2 = () => {
    return (
          <conteiner_1>
            <div className="name_box">	<p className="name_text"> Lineage  2 </p>	</div>
            <text_box>
              <div className="conteiner_2"> <img src={Lin}></img> </div>
              <div className="conteiner_3"> <p className="font_1"> Cool game about fantasy world!</p> </div>
            </text_box>
            <div className="comment"> <p className="name_text"> Comment </p> </div> 
            <input type="text" className="comment_box" />
            <button_zone>
            <Link to = "/MultiplayerGame" className="button_back"> <p className="name_text"> Back </p> </Link>
              <Link to = "/" className="button_main"> <p className="name_text"> Main </p> </Link>
            </button_zone>
          </conteiner_1>	
      );
}

export default MGame2;