import React from 'react';
import '../SingleGame.css';
import {
  Link
} from "react-router-dom"

const MultiplayerGame = () => {
    return (
        
          <conteiner_1>
            <conteiner_2>
              <Link to = "/mgame1"> <div className="game_box_1"> <p className="font_1"> Game 1 </p>	</div> </Link>
              <Link to = "/mgame2"> <div className="game_box_2">	<p className="font_1"> Game 2 </p>	</div> </Link>
            </conteiner_2>
            <conteiner_3>
              <Link to = "/mgame3"> <div className="game_box_1">	<p className="font_1"> Game 3 </p>	</div> </Link>
              <Link to = "/mgame4"> <div className="game_box_2">	<p className="font_1"> Game 4 </p>	 </div> </Link>
            </conteiner_3>
            <conteiner_4>
              <Link to = "/"> <div className="main_button">	<p className="font_1"> Main </p>	</div> </Link>
            </conteiner_4>
          </conteiner_1>
        
      );
}

export default MultiplayerGame;