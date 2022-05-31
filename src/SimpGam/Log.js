import React from 'react';
import '../Log.css';
import axios from 'axios'
import {
  Link
} from "react-router-dom"


function handleSubmit(e) {
  e.preventDefault()
  const {username, password, password_2 } = e.target.elements
  console.log({username: username.value, password: password.value})
  // let reqInstance = axios.create(
  //   {
      
  //   }
  // )
  // let comment = reqInstance.get('http://51.250.97.189:8080/auth/signup').then((response) => {
  //   // console.log(response.data)
  //   return response.data
  // });

  const json = JSON.stringify({ login: username.value, password: password.value});
  console.log(json)
  const res = axios.post('http://51.250.97.189:8080/auth/signin', json,
  {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' : '*'
    }
  })
  console.log(res.data)
}

const Log = () => {
  return (
    		
      <autentification>
        <count-1>
          <flex-wrapper-twelv>
            <div className="flex-wrapper-five"><p className="font_1">W</p></div>
            <div className="flex-wrapper-six"><p className="font_1">e</p></div>
            <div className="flex-wrapper-seven"><p className="font_1">l</p></div>
            <div className="flex-wrapper-eight"><p className="font_1">l</p></div>
          </flex-wrapper-twelv>
          <flex-wrapper-thirteen>
            <div className="flex-wrapper-one"><p className="font_1">c</p></div>
            <div className="flex-wrapper-three"><p className="font_1">o</p></div>
            <div className="flex-wrapper-four"><p className="font_1">m</p></div>
            <div className="flex-wrapper-two"><p className="font_1">e</p></div>
            </flex-wrapper-thirteen>
        </count-1>
        <form onSubmit={handleSubmit}>
         <count-2>
          <flex-wrapper-fourt>
            <flex-wrapper-elev>
              <p className="font_1">Login:</p>
            </flex-wrapper-elev>
            <input type="text" id="username" className="rectangle-13"/>
          </flex-wrapper-fourt>
          <flex-wrapper-fift>
            <flex-wrapper-ten>
              <p className="font_2">Password:</p>
            </flex-wrapper-ten>
            <input type="text" id="password" className="rectangle-13"/>
          </flex-wrapper-fift>
        </count-2>
        <count-3>
          <Link to = "/MainAfterLog" className = "flex-wrapper-nin">
               <input className="font_3" type="submit" value="Login" />
          </Link>
        </count-3> 
</form>
      </autentification>
    
  );
};

export default Log;
     
