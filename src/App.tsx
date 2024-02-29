import React from 'react';
import logo from './logo.svg';
import './App.css';
import Getemployee from './Pages/Getemployee';
import Createemployee from './Pages/Createemployee';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Pages/Navbar';
import Updateemployee from './Pages/Updateemployee';
import Homepage from './Pages/Homepage';

function App() {
  return (
    <div className="App">

<BrowserRouter>
<Navbar />
<Routes>
<Route path='/home' element={<Homepage /> } />
<Route  path="/getEmployee" element={<Getemployee /> } />
<Route path='/createEmployee' element={<Createemployee/>  } />
<Route path='/update/:id' element={<Updateemployee /> } />

</Routes>
</BrowserRouter>

    </div>
  );
}

export default App;
