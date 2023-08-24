import "./header.css";
const Header = () => {
  return (
    <div className="header">
      <h1 className="header-name">MOHIT KASHYAP</h1>
      <div className="navbar">
        <ul className="nav-items">
          <li className="nav-links">PROJECTS</li>
          <li className="nav-links">WRITING</li>
          <li className="nav-links">CONTACT</li>
          <li className="nav-links">ABOUT</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
