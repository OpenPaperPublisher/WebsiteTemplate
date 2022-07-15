import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> }/>
      </Routes>
    </BrowserRouter>
  </div>
)

export default App;
