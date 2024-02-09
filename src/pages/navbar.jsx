import NavTop from "../components/navbar/top";
import Navmid from "../components/navbar/mid";
import Navbottom from "../components/navbar/bottom";

function Navbar() {
  return (
    <div className="grid content-between px-3 py-3 w-24 bg-white fixed inset-y-0 left-0">
      <NavTop />
      <Navmid />
      <Navbottom />
    </div>
  );
}

export default Navbar;
