import "../src/index.css";
import { Route,  Routes } from "react-router-dom";
import HomePage from "./Pages/Homepage";
import Aboutus from "./Pages/Aboutus";
function App() {

  return (
    <>
      <Routes>
          <Route path="/" element = {<HomePage/>} ></Route>
          <Route path="/about" element = {<Aboutus/>} ></Route>
      </Routes>
      
    </>
  )
}

export default App
