import Tours from "./components/Tours";
// import data from "./database/data";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import Footer from "./components/Footer";

// function sum (a,b){
//   return a+b;
// }

// const sum = (a,b) =>{
//   return a+b;
// }

//  console.log("output =>",sum(4,3));

 
const App = () => {
  return (
    <div className="app">
    <Tours />
    <Footer/>
    <ToastContainer position="top-right" autoClose={2500} />
    </div>
    
  );
}


export default App;
