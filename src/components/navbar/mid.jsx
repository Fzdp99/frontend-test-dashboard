import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faPeopleLine,
  faWallet,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import { faBell, faClock } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";

function Navmid() {
  const navigate = useNavigate();

  return (
    <div className="navmid">
      <ul className="menu bg-slate-100 rounded-box mr-auto ml-auto">
        <li className="mb-2" onClick={() => navigate("/")}>
          <a>
            <FontAwesomeIcon icon={faHouse} size="lg" />
          </a>
        </li>
        <li className="mb-2" onClick={() => navigate("/coming-soon")}>
          <a>
            <FontAwesomeIcon icon={faBell} size="xl" />
          </a>
        </li>
        <li className="mb-2" onClick={() => navigate("/coming-soon")}>
          <a>
            <FontAwesomeIcon icon={faClock} size="xl" />
          </a>
        </li>
        <li className="mb-2" onClick={() => navigate("/coming-soon")}>
          <a>
            <FontAwesomeIcon icon={faPeopleLine} size="lg" />
          </a>
        </li>
        <li className="mb-2" onClick={() => navigate("/coming-soon")}>
          <a>
            <FontAwesomeIcon icon={faWallet} size="xl" />
          </a>
        </li>
        <li onClick={() => navigate("/coming-soon")}>
          <a>
            <FontAwesomeIcon icon={faGear} size="xl" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navmid;
