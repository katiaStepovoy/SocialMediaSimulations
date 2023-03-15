import * as React from "react";
import Facebook from "./Simulations/Facebook.js";
import Twitter from "./Simulations/Twitter.js";
import Telegram from "./Simulations/Telegram.js";
import Reddit from "./Simulations/Reddit.js";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/facebook" element={<Facebook />}></Route>
        <Route exact path="/reddit" element={<Reddit />}></Route>
        <Route exact path="/telegram" element={<Telegram />}></Route>
        <Route exact path="/twitter" element={<Twitter />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
