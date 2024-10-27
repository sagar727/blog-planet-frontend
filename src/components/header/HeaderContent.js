import logo from "../../logo/blog.png";
import "./Header.css";
import { NavLink } from "react-router-dom";

const HeaderContent = () => {
  return (
    <header className="App-header">
      <div className="Title-container">
        <img className="image" src={logo} alt="Logo" />
        <h1>Blog-Planet</h1>
      </div>
      <div className="Link-container">
        <NavLink to="/">Home</NavLink>
        <NavLink to="addBlog">Write Blog</NavLink>
        <NavLink to="about">About</NavLink>
      </div>
    </header>
  );
};

export default HeaderContent;
