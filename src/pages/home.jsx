import Rightmenu from "../components/home/right-menu/index";
import Leftmenu from "../components/home/left-menu/index";

function Home() {
  return (
    <div className="grid grid-cols-3 gap-0">
      <Leftmenu />
      <Rightmenu />
    </div>
  );
}

export default Home;
