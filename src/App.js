
import './App.css';
import Home from "./components/Home"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
import {Route, Routes,BrowserRouter} from "react-router-dom"
import Countries from './components/Countries';




function App() {
  return (
    <div className="App">
    <BrowserRouter>
  <Routes>
  <Route exact path="/" element={<Home/>}/>
  <Route exact  path="/Countries" element={<Countries/>}/>
  </Routes>
  </BrowserRouter>

    </div>
  );
}

export default App;
