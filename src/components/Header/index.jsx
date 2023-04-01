import "./style.css";
import About from "../../objects/About";
import Logo from "../../objects/Logo";
import Menu from "../../objects/Menu";

function Header() {
  return (
    <header className="header">
      <Logo />
      <About />
      <Menu />
    </header>
  );
}

export default Header;
