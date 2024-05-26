import React from 'react';
import "./App.css"
import { Route,Routes } from 'react-router-dom';
import Home from "./home"
import Login from './Auth/login';
import Signup from './Auth/signup';
function App() {
  return (
    <div className="App">
       <Routes>
       <Route path="/">
       <Route  index element={<Login></Login>}/>
         <Route path='/home' element={<Home></Home>}/>
         <Route  path='/login' element={<Login></Login>}/>
         <Route path='/signup/*' element={<Signup></Signup>}/>
         </Route>
       </Routes>
    </div>
  );
}

export default App;

