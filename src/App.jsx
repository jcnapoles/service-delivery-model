import { BrowserRouter } from "react-router-dom";
import { Experience, Hero, Navbar, Contact } from "./components";
import { StarsCanvas } from "./components/canvas";


const App = () => {
  
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>        
          <Navbar />
          <Hero />
        </div>

        <div className='relative z-0'>
          <Experience /> 
          <StarsCanvas />
        </div>         
       
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
        <StarsCanvas />               
      </div>
    </BrowserRouter>
  );
}

export default App;
