import { useEffect, useState } from "react";
import "./App.css";
import MainRout from "./routes/MainRout";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <MainRout />
    </div>
  );
}

export default App;
