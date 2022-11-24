
import { BrowserRouter, Link, Route } from "react-router-dom";

function Home() {
    return (
      <div>
        <h1 className ='lg:text-green-600 text-4xl md:text-red-700 sm:text-orange-800'>Home page</h1>
        <Link to='/contact'>home</Link>
      </div>
    );
  }
  
  export default Home;
  