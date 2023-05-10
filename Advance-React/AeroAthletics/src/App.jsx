// import { useState } from 'react'
import Directory from "./components/directory/directory.component";
import Categories from "./api/categories"
const App = () => {
  return (
    <Directory categories={Categories}/>
      
    
  );
};

export default App;
