import React from 'react';
import '../SingleGame.css';
import {
	Link
  } from "react-router-dom"


const SingleGame = () => {
    return (

	<div>
		<conteiner_1>
		<conteiner_2>
			{/* <a href="Game 1.js"> <div className="game_box_1"> <p className="font_1"> Game 1 </p>	</div> </a> */}
			<Link to="/game_1"> <div className="game_box_1"> <p className="font_1"> Game 1 </p>	</div> </Link>
			<Link to="/game_2"> <div className="game_box_2">	<p className="font_1"> Game 2 </p>	</div> </Link>
		</conteiner_2>
		<conteiner_3>
			<Link to="/game_3"> <div className="game_box_1">	<p className="font_1"> Game 3 </p>	</div> </Link>
			<Link to="/game_4"> <div className="game_box_2">	<p className="font_1"> Game 4 </p>	 </div> </Link>
		</conteiner_3>
		<conteiner_4>
			<Link to="/"><div className="main_button">	<p className="font_1"> Main </p> </div>	 </Link>
		</conteiner_4>
		</conteiner_1>
	</div>
      );
}
      
export default SingleGame;