// import { useState } from 'react'
import Home from "./routes/home/home.component";
import Categories from "./api/categories"
import {
  Route,
  Routes,
  Link } from "react-router-dom";
// import Directory from "./components/directory/directory.component";
import Navagation from "./components/navigation/navigation.component";
import SignIn from "./routes/sign-in/sign-in.component";
// import Contact from "./routes/contact/contact.component";
// import Shop from "./routes/shop/shop.component";



const App = () => {
  return (
    <Routes>
      <Route path="/" element={ <Navagation/>}>
        <Route index element={ <Home/>} />
        <Route path="sign-in" element={<SignIn/>} />
        {/* <Route path="contact" element={<Contact/>} />
        <Route path="shop" element={<Shop/>} /> */}
      </Route>
    </Routes>      
    
  );
};

export default App;
