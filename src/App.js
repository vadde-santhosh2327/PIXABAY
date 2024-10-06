import React,{Component} from "react";
import Nav from "./Components/Nav";
import "./style.css"
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Register from "./Pages/Register";
import Footer from "./Components/Footer";
import Login from "./Pages/Login";
export default class App extends Component{
  render(){
    return(
      <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="/Login" element={<Login/>}/>
      </Routes>
      </BrowserRouter>
      

      </>
    )
  }
}