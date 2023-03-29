import * as React from "react";
import Facebook from "./Simulations/Facebook.js";
import Twitter from "./Twitter/Twitter.js";
import DarkWeb from "./DarkWeb/DarkWeb.js";
import Reddit from "./Reddit/Reddit.js";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/facebook" element={<Facebook />}></Route>
        <Route exact path="/reddit" element={<Reddit />}></Route>
        <Route exact path="/twitter" element={<Twitter />}></Route>
        <Route exact path="/darkweb" element={<DarkWeb />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
