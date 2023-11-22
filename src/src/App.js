import logo from './logo.svg';
import './App.css';
import Date from './Date'
// import Place from './Place';
// import { Route, Routes } from "react-router-dom";
import AppRoutes from './AppRoutes';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
           <BrowserRouter>
           <Date></Date>

           </BrowserRouter>
{/* <Place></Place> */}
    </div>
  );
}

export default App;
