import logoImg from './../../img/icons/Logo.svg';
import './header.css';
function Header() {
  return (
    <header className="header">
      <div className="countainer">
        <div className="header_row">
          <div className="header_logo">
            <img src={logoImg} alt="Logo" />
            <span>Fasion</span>
          </div>
          <nav className="header_nav">
            <ul>
              <li>
                <a href="#!">CATALOGE</a>
              </li>
              <li>
                <a href="#!">FASHION</a>
              </li>
              <li>
                <a href="#!">FAVORITE</a>
              </li>
              <li>
                <a href="#!">LIFESTYLE</a>
              </li>
              <li>
                <a href="#!" className="header_nav-btn">
                  SIGN UP
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
export default Header;
