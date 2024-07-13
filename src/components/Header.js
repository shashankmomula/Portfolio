import { Link } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom/dist";



const Header = () =>{
    return (
      <div className="flex justify-between sm: bg-orange-100 w-90 h-30 from-stone-400">
        <div className="logo-container">
          {/* <link href="IMG_4449"></link> */}
        </div>
        <div className="flex items-center">
          <ul className="flex p-4 m-4">
           
            <li className="px-4">
              <Link to="/">Home</Link>
            </li>
            <li className="px-4">
              <Link to="/about">About Me</Link>
            </li>
            <li className="px-4">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="px-4">
              <Link to="/grocery">Projects</Link>
            </li>
           
          
          </ul>
        </div>
      </div>
    );
};



export default Header;

