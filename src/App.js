import Tours from "./components/Tours";
import data from "./database/data";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="app">
    <Tours tours={data}></Tours>
    <Footer/>
    <ToastContainer position="top-right" autoClose={2500} />
    </div>
  );
}

export default App;
