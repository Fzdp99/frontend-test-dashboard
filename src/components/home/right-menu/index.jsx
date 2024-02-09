import Top from "./expenses-and-income";
import Mid from "./latest-spending";
import Bottom from "./premium";

function Rightmenu() {
  return (
    <div className="bg-white w-auto px-3 py-3">
      <Top />
      <Mid />
      <Bottom />
    </div>
  );
}

export default Rightmenu;
