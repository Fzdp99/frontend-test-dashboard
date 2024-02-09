import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUp } from "@fortawesome/free-regular-svg-icons";
import LineDiagram from "../../diagram/Line-diagram";
import BarDiagram from "../../diagram/Bar-diagram";

function Top() {
  return (
    <div className="bg-slate-100 grid grid-cols-5 gap-4">
      <div className="col-span-3 bg-white rounded-lg p-5">
        <div className="flex justify-between">
          <p>Balence statistics</p>
          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="btn m-1">
              Filter
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex">
          <div className="w-2/5 mr-3">
            <div className="text-3xl font-bold ">$564</div>
            <div className="flex border-b-2 mb-2">
              <img
                className="w-12"
                src="https://static.vecteezy.com/system/resources/thumbnails/000/379/337/small/Business_2__2884_29.jpg"
                alt=""
              />
              <p className="text-sm">Your total balance</p>
            </div>
            <div className="flex items-center mb-4">
              <LineDiagram />
              <FontAwesomeIcon className="text-xl" icon={faCircleUp} />
              <h1 className="text-lg">6%</h1>
            </div>
            <p className="text-sm text-slate-400">
              Always see your earnings updates
            </p>
          </div>
          <div className="w-full overflow-auto">
            <BarDiagram />
          </div>
        </div>
      </div>
      <div className="bg-[url('https://www.svgbackgrounds.com/wp-content/uploads/2021/05/protruding-squares-orange-background.png')] p-5 w-full col-span-2 rounded-lg grid grid-cols-2 gap-4 place-content-between">
        <h1 className="font-bold text-3xl text-white">S.</h1>
        <p></p>
        <div>
          <p className="text-white">****9838</p>
          <h1 className="text-white">Jhon Demon</h1>
        </div>
        <p className="text-right text-white">08/12</p>
      </div>
    </div>
  );
}

export default Top;
