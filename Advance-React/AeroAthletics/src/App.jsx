// import { useState } from 'react'
import Home from "./routes/home/home.component";
import {
  Route,
  Routes
} from "react-router-dom";
// import Directory from "./components/directory/directory.component";
import Navagation from "./components/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
<<<<<<< HEAD
import CheckOut from "./routes/checkout/checkout.component";
=======
>>>>>>> f196d9747745bb0c23b7b82bd753ef14d6440a01

// import Contact from "./routes/contact/contact.component";
// import Shop from "./routes/shop/shop.component";



const App = () => {
  return (
    <Routes>
      <Route path="/" element={ <Navagation/> }>
        <Route index element={ <Home/>} />
        <Route path="/auth" element={<Authentication />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/checkout" element={ <CheckOut/>} />
      </Route>
    </Routes>      
    
  );
};

export default App;
