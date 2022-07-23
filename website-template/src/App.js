import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import BlogPost from "./pages/BlogPost";
const documents = require("./documents_from_dropbox/documents.json") 

const App = () => {
  return <div className="App">
    <BrowserRouter>
      <Routes>
        {documents.map(({path, title, status}) => (
          <Route path={ path } element={ <BlogPost title={ title } /> } />
        ))}
        <Route path="/" element={ <Home /> }/>
      </Routes>
    </BrowserRouter>
  </div>
}

export default App;
