import { Link } from "react-router-dom";

const Navbar = () => {

    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-info">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">Home</Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/business">business</Link>
                </li><li className="nav-item">
                  <Link className="nav-link" to="/entertainment">entertainment</Link>
                </li><li className="nav-item">
                  <Link className="nav-link" to="/general">general</Link>
                </li><li className="nav-item">
                  <Link className="nav-link" to="/health">health</Link>
                </li><li className="nav-item">
                  <Link className="nav-link" to="/science">science</Link>
                </li><li className="nav-item">
                  <Link className="nav-link" to="/sports">sports</Link>
                </li><li className="nav-item">
                  <Link className="nav-link" to="/technology">technology</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
};

export default Navbar;
