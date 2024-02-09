import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

function Navbottom() {
  return (
    <div className="navbottom">
      <div className="avatar">
        <div className="w-10 rounded-full">
          <img src="https://cdn-icons-png.flaticon.com/512/1754/1754644.png" />
        </div>
      </div>
      <ul className="menu rounded-box mr-auto ml-auto">
        <li>
          <a>
            <FontAwesomeIcon icon={faRightFromBracket} size="lg" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbottom;
