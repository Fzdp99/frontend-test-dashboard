import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-regular-svg-icons";

function Navtop() {
  return (
    <div className="navtop">
      <h1 className="font-sans text-3xl font-bold">S.</h1>
      <ul className="menu rounded-box mr-auto ml-auto">
        <li>
          <a>
            <FontAwesomeIcon icon={faComments} size="lg" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navtop;
