import * as React from 'react';
import Facebook from './Simulations/Facebook.js'
import Twitter from './Simulations/Twitter.js'
import Telegram from './Simulations/Telegram.js'
import Reddit from './Simulations/Reddit.js'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

function App() {

  return (
    <Router>
        <Routes>
    <Route exact path='/Facebook' element={< Facebook />}></Route>
    <Route exact path='/Reddit' element={< Reddit />}></Route>
    <Route exact path='/Telegram' element={< Telegram />}></Route>
    <Route exact path='/Twitter' element={< Twitter />}></Route>
   
    </Routes>
        
       </Router>
  );
}

export default App;