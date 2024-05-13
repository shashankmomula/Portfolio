import { Link } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom/dist";
import Body from "./body";

const Header = () =>{
    console.log("Test");
        return(
            <div className="header">
                <div className="logo-container">
                    <img className="img"src=""/> 
                    {/* <h2>SHASHANK</h2>      */}
                 </div>
                 <div className="items-container">
        <ul >
         
          <li>
            <Link to="/" className="home">Home</Link>
          </li>
          <li>
            <Link to="/about" className="about">About me</Link>
          </li>
          <li>
            <Link to="/contact" className="contact">Contact me</Link>
          </li>
          <li>
            <Link to="/books" className="books">Books</Link>
          </li>
          <li>
            <Link to="/projects" className="projects">Projects</Link>
          </li>
        </ul>
      </div>
            </div>
        );
};



export default Header;

