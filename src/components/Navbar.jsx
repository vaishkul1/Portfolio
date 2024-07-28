import logo from "../assets/finaluser32.png";
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-9" src={logo} alt="logo" />
    </div> 
    <div className="m-8 flex items-center justify-cente gap-4 text-2xl">
    <a href="https://www.linkedin.com/in/vaishnavi-kulkarni-674b341b3/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <FaLinkedin/> </a>

    <a href="https://github.com/vaishkul1/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
    </div>

    </nav>
  );
}

export default Navbar;