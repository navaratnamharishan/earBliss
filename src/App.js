import Home from "./components/home";
import Hero from "./components/hero";
import { click } from "@testing-library/user-event/dist/click";
import Item from "./components/item";
import Navbar from "./components/nav";
import Login from "./components/login";
import Register from "./components/register";
import { ValueProvider } from "./global/valueContext";
import Footer from "./components/footer";

function App() {
  
    return (
     <> 
     <ValueProvider>
     <Navbar/>
      <Home/>
     <Hero/>
      <Item/>
      <Footer/>
     
     
     
      
      
      
     
      
      </ValueProvider>
  
       </> 
    )  ;
        
  }
 
  
     
 
    
 
export default App;
