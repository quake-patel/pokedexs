import Logo from "./Logo";
import Nav from "./Nav";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header-inner">
          <Logo />
          <Nav />
        </div>
      </div>
    </header>
  );
};

export default Header;
