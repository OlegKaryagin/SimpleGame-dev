import './App.css';
import Main from './SimpGam/Main';
import SingleGame from './SimpGam/SingleGame';
import Game1 from './SimpGam/Game 1';
import Game2 from './SimpGam/Game 2';
import Game3 from './SimpGam/Game3';
import Game4 from './SimpGam/Game4';
import Reg from './SimpGam/Reg';
import Log from './SimpGam/Log';
import MGame1 from './SimpGam/MGame 1';
import MGame2 from './SimpGam/MGame 2';
import MGame3 from './SimpGam/MGame 3';
import MGame4 from './SimpGam/MGame 4';
import MainAfterLog from './SimpGam/MainAfterLog';
import MultiplayerGame from './SimpGam/MultiplayerGame';
// import SingleGame from './SimpGam/SingleGame';
// import SingleGame from './SimpGam/SingleGame';
// import SingleGame from './SimpGam/SingleGame';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      {/* <Main/> */}
      <Routes>
        <Route exact path="/" element={<Main/>}/>
        <Route exact path="/single" element={<SingleGame/>}/>
        <Route exact path="/game_1" element={<Game1/>}/>
        <Route exact path="/game_2" element={<Game2/>}/>
        <Route exact path="/game_3" element={<Game3/>}/>
        <Route exact path="/game_4" element={<Game4/>}/>
        <Route exact path="/reg" element={<Reg/>}/>
        <Route exact path="/login" element={<Log/>}/>
        <Route exact path="/mgame1" element={<MGame1/>}/>
        <Route exact path="/mgame2" element={<MGame2/>}/>
        <Route exact path="/mgame3" element={<MGame3/>}/>
        <Route exact path="/mgame4" element={<MGame4/>}/>
        <Route exact path="/MainAfterLog" element={<MainAfterLog/>}/>
        <Route exact path="/MultiplayerGame" element={<MultiplayerGame/>}/>
        
        {/* <Route exact path="/single" element={<SingleGame/>}/>
        <Route exact path="/single" element={<SingleGame/>}/>
        <Route exact path="/single" element={<SingleGame/>}/> */}
      </Routes>
    </Router>
  );
}

export default App;
