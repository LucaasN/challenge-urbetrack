import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { FaUserAlt } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { useLogin } from "../hooks/useLogin";

interface SidebarProps {
  isOpen: boolean;
}

export const SideBar: React.FC<SidebarProps> = ({ isOpen }) => {
  const { userName, handleLogOut } = useLogin(); // Custom hook de login/logout
  const capitalizeFirstLetter = (name: string) => name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <div
      className={`col-3 bg-light p-3 vh-100 border-right ${
        isOpen ? "d-block" : "d-none"
      }`}
      style={{ transition: "transform 0.3s ease-in-out" }}
    >
      <div>
        <FaUserAlt size={56} className="border rounded-circle p-2" />
        <label className="ms-1">{capitalizeFirstLetter(userName)}</label>
        <hr />
      </div>
      <ul className="list-group mt-4">
        <li className="list-group-item border-0 bg-transparent ">
          <Link to="/home" className="text-decoration-none text-black">
            Inicio
          </Link>
        </li>
        <li className="list-group-item border-0 bg-transparent ">
          <Link to="/myimages" className="text-decoration-none text-black">
            Mis Imágenes
          </Link>
        </li>
        <li className="list-group-item border-0 bg-transparent ">
          <Button variant="outline-danger" type="button" onClick={handleLogOut}>
            <CiLogout />
            Cerrar sesion
          </Button>
        </li>
      </ul>
    </div>
  );
};
