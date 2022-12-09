import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import { Link, useNavigate, useParams } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <nav className="ulNav">
      <div onClick={() => handleNavigate("/")} xyz="hello">
        <img
          className="logo"
          src="https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png?width=256&s=3f7493995143d3cf40b1fedc582607cea194b579"
          alt="react-icon"
        />
      </div>
      <div className="nav-center">
          <Link to='/category/vehiculos'>Vehiculos</Link>
          <Link to='/category/electronica'>Electronica</Link>
          <Link to='/category/libros'>Libros</Link>
      </div>
    </nav>
  );
}
export default NavBar;
