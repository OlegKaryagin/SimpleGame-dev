import React, {useState, useEffect} from 'react';
import '../Game.css';
import DS from '../DS.jpeg';
import axios from 'axios'
import {
  Link
} from "react-router-dom"

const Game1 = () => {

    let a = []

    const [comment, setComment] = useState([]);

    const get_stat_data = () => {

      axios.get('http://51.250.97.189:8080/comment/get?game_id=1',
		  {
			  headers: {
				'Signature':localStorage.getItem('sign'),
			  }
		  }
      ).then((response) => {
        console.log(response.data)
        // a = response.data.content
        setComment(response.data.content);
      }).catch(error => console.error(error));

    }

    useEffect(() => {

      get_stat_data()

    }, []);

    const items = [1,2,3,4]


    // if (comment == undefined){
    //   a = []
    // } else {
    //   a = comment
    // }

    // console.log(a)




    return (
        <div>
          <conteiner_1>
            <div className="name_box">	<p className="name_text"> Dark Souls </p>	</div>
            <text_box>
              <div className="conteiner_2"> <img src={DS}></img> </div>
              <div className="conteiner_3"> <p className="font_1"> Cool game about fantasy world!</p> </div>
            </text_box>
            <div className="comment"> <p className="name_text"> Comment </p> </div> 
            {/* <input type="text" className="comment_box" /> */}
            <ul>
              
      {items.map((value, index) => {
        return <li key={index}>{value}</li>
      })}
    </ul>
            <button_zone>
              <Link to = "/single" className="button_back"> <p className="name_text"> Back </p>  </Link>
              <Link to = "/" className="button_main"> <p className="name_text"> Main </p> </Link>
            </button_zone>
          </conteiner_1>	
        </div>
      );
}
      
export default Game1;
