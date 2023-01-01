import logo from "../img/react-logo.png";

function Header() {
  return (
    <>
      <div className="header-wrapper">
        <img className="header-image" src={logo} alt="React logo" />
        <h1 className="header-title">What I like about React.js</h1>
      </div>
    </>
  );
}

export default Header;
