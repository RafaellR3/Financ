/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from 'assests/img/logo.png';
import Autenticarusuario from 'components/AutenticarUsuario';
import { logout } from 'services/auth';

function NavBar() {

  const onClick = () => {
    if (window.confirm(`Você tem certeza que deseja sair?`)) {
      <Autenticarusuario />
      logout();
    }

  }

  return (
    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-light border-bottom shadow-sm">
      <div className="container">
        <nav className="navbar navbar-expand-sm justify-content-end ">
          <a href="/Home">
            <img src={logo} alt="FinancR3" width="120" />
          </a>
          <a className="navbar-brand" onClick={onClick} href='#'> 
            Sair
          </a>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;

