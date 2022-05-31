import React from 'react';
import '../Main.css';



import {
  Link
} from "react-router-dom"



const Main = () =>{
  return (
    <div>
      <meta charSet="utf-8" />
      
      <main>
        <flex-wrapper-fourteen>
          <div className="flex-wrapper-one">
            <p className="s">S</p>
          </div>
          <div className="flex-wrapper-six"><p className="i">i</p></div>
          <div className="flex-wrapper-seven"><p className="i">m</p></div>
          <div className="flex-wrapper-eight"><p className="i">p</p></div>
          <div className="flex-wrapper-nine"><p className="i">l</p></div>
          <div className="flex-wrapper-ten"><p className="i">e</p></div>
        </flex-wrapper-fourteen>
        <flex-wrapper-fifteen>
          <div className="flex-wrapper-two"><p className="i">G</p></div>
          <div className="flex-wrapper-four"><p className="i">a</p></div>
          <div className="flex-wrapper-five"><p className="i">m</p></div>
          <div className="flex-wrapper-three"><p className="i">e</p></div>
        </flex-wrapper-fifteen>
        <flex-wrapper-sixteen>
          <flex-wrapper-eleven>
          <Link to="/single">
            
                <p className="single-player">
                  Single<br />
                  player
                </p>
              
          </Link>
          </flex-wrapper-eleven>

          <flex-wrapper-twelve>
          <Link to = "/MultiplayerGame" >
           
              <p className="multi-player">
                Multi<br />
                player
              </p>
            </Link>
            </flex-wrapper-twelve>
        </flex-wrapper-sixteen>
        <flex-wrapper-seventeen>
          <Link to="/login" className="flex-wrapper-thirteen">
              <p className="log">LogIn</p>
             </Link>
            <Link to="/reg" className="rectangle-13">
              <p className="registration">Registration</p>
            </Link>
        </flex-wrapper-seventeen>
      </main>
    </div>
  );
};

export default Main;