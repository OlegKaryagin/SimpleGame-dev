import React from 'react';
import '../Game.css';
import DS from '../DS.jpeg';
import axios from 'axios'
import {
  Link
} from "react-router-dom"

const Game1 = () => {

    // const [comment, setComment] = React.useState(null);
    // React.useEffect(() => {
    //   axios.get('http://51.250.97.189:8080/comment/get?game_id=1',
    //   {
    //     'Signature':'b863da84-0c3c-44fa-a2f9-fd6dd8d8bccd',
    //     // 'Game-Id': 1
    //   }
    //   ).then((response) => {
    //     setComment(response.data);
    //   });
    // }, []);

    let reqInstance = axios.create(
      {
        headers: {
          Signature: 'b863da84-0c3c-44fa-a2f9-fd6dd8d8bccd'
        }
      }
    )
    let comment = reqInstance.get('http://51.250.97.189:8080/comment/get?game_id=1').then((response) => {
      // console.log(response.data)
      return response.data
    });
    console.log(comment)
    return (
        <div>
          <conteiner_1>
            <div className="name_box">	<p className="name_text"> Dark Souls </p>	</div>
            <text_box>
              <div className="conteiner_2"> <img src={DS}></img> </div>
              <div className="conteiner_3"> <p className="font_1"> Cool game about fantasy world!</p> </div>
            </text_box>
            <div className="comment"> <p className="name_text"> Comment </p> </div> 
            <input type="text" className="comment_box" />
            <button_zone>
              <Link to = "/single" className="button_back"> <p className="name_text"> Back </p>  </Link>
              <Link to = "/" className="button_main"> <p className="name_text"> Main </p> </Link>
            </button_zone>
          </conteiner_1>	
        </div>
      );
}
      
export default Game1;
