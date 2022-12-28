import logo from "../img/react-logo.png";

function Header() {
  return (
    <div className="header-wrapper">
      <img className="header-image" src={logo} alt="React logo" />
    </div>
  );
}

export default Header;
