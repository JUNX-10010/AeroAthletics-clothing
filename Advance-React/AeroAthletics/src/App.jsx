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
// import Contact from "./routes/contact/contact.component";
// import Shop from "./routes/shop/shop.component";



const App = () => {
  return (
    <Routes>
      <Route path="/" element={ <Navagation/> }>
        <Route index element={ <Home/>} />
        <Route path="/auth" element={<Authentication />} />
        <Route path="/shop" element={<Shop/>} />
      </Route>
    </Routes>      
    
  );
};

export default App;
