import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Booking from './Booking';




function App() {
  return (
    <>

    
      
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/Contact' element={<Contact/>} />
          <Route path='/booking' element={<Booking/>} />
        </Routes>      
         </>
  );
}

export default App;