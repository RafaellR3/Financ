/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from 'assests/img/logo.png';

function NavBar() {
  return (
    <div className="d-flex flex-column flex-md-row  p-3 border-bottom shadow-sm">
      <div >
        <nav className="navbar  ">
          <a href="/Home">
            <img src={logo} alt="FinancR3" width="120" />
          </a>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;

