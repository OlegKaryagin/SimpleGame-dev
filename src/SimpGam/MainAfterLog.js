import React from 'react';
import '../MainAfterLog.css';
import {
  Link
} from "react-router-dom"

const MainAfterLog = () => {
  return (
    <div>
      <div className="main">
        <div className="flex-wrapper-fourteen">
          <div className="flex-wrapper-one">
            <p className="s">S</p>
          </div>
          <div className="flex-wrapper-six"><p className="i">i</p></div>
          <div className="flex-wrapper-seven"><p className="i">m</p></div>
          <div className="flex-wrapper-eight"><p className="i">p</p></div>
          <div className="flex-wrapper-nine"><p className="i">l</p></div>
          <div className="flex-wrapper-ten"><p className="i">e</p></div>
        </div>
        <div className="flex-wrapper-fifteen">
          <div className="flex-wrapper-two"><p className="i">G</p></div>
          <div className="flex-wrapper-four"><p className="i">a</p></div>
          <div className="flex-wrapper-five"><p className="i">m</p></div>
          <div className="flex-wrapper-three"><p className="i">e</p></div>
        </div>
        <div className="flex-wrapper-sixteen">
          <Link to = "/single" className="flex-wrapper-eleven">
              <p className="sin-player">
                Single<br />
                player
              </p>
            </Link>
          <Link to ="/MultiplayerGame" className="flex-wrapper-twelve">
              <p className="multi-player">
                Multi<br />
                player
              </p>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default MainAfterLog;
      