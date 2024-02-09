import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import DoughnutDiagram from "../../diagram/doughnut-diagram";

function Bottom() {
  return (
    <div className="mt-5 grid grid-cols-6 gap-4">
      <div className="bg-white col-span-4 rounded-lg p-5">
        <div className="flex justify-between items-center mb-5">
          <h1 className="font-bold">Last transaction</h1>
          <div className="flex items-center">
            <p className="text-slate-400 mr-3 cursor-pointer hover:text-black duration-300">
              Newest
            </p>
            <p className="text-slate-400 cursor-pointer hover:text-black duration-300">
              Oldes
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center border-t-2 pt-5 pb-5">
          <div className="flex items-center">
            <div className="avatar">
              <div className="w-12 mr-3 rounded-full">
                <img src="https://png.pngtree.com/png-vector/20230823/ourlarge/pngtree-cartoon-illustration-of-a-young-man-wearing-sports-gear-in-flat-vector-png-image_6877433.png" />
              </div>
            </div>
            <div>
              <h1 className="font-bold text-sm">Bessie Cooper</h1>
              <p className="text-xs text-slate-400">02 July 2023</p>
            </div>
          </div>
          <div className="flex items-center">
            <p className="font-bold">-$3,000</p>
            <FontAwesomeIcon
              className="cursor-pointer ml-3"
              icon={faEllipsisVertical}
            />
          </div>
        </div>
        <div className="flex justify-between items-center border-t-2 pt-5 pb-5">
          <div className="flex items-center">
            <div className="avatar">
              <div className="w-12 mr-3 rounded-full">
                <img src="https://img.freepik.com/premium-vector/cute-cool-boy-dabbing-pose-cartoon-vector-illustration_1062857-667.jpg" />
              </div>
            </div>
            <div>
              <h1 className="font-bold text-sm">Guy Hawkins</h1>
              <p className="text-xs text-slate-400">02 July 2023</p>
            </div>
          </div>
          <div className="flex items-center">
            <p className="font-bold">+$1,970</p>
            <FontAwesomeIcon
              className="cursor-pointer ml-3"
              icon={faEllipsisVertical}
            />
          </div>
        </div>
        <div className="flex justify-between items-center border-t-2 pt-5">
          <div className="flex items-center">
            <div className="avatar">
              <div className="w-12 mr-3 rounded-full">
                <img src="https://img.freepik.com/premium-vector/vector-illustration-standing-cartoon-character-schoolboy_126712-3545.jpg" />
              </div>
            </div>
            <div>
              <h1 className="font-bold text-sm">Floyd Miles</h1>
              <p className="text-xs text-slate-400">02 July 2023</p>
            </div>
          </div>
          <div className="flex items-center">
            <p className="font-bold">-$5,000</p>
            <FontAwesomeIcon
              className="cursor-pointer ml-3"
              icon={faEllipsisVertical}
            />
          </div>
        </div>
      </div>
      <div className="bg-white col-span-2 rounded-lg p-5">
        <div className="flex justify-between items-center">
          <h1 className="font-bold">Analytics</h1>
          <FontAwesomeIcon
            className="cursor-pointer"
            icon={faEllipsisVertical}
          />
        </div>
        <DoughnutDiagram />
        <h1 className="font-bold text-2xl text-center mt-3">90%</h1>
        <p className="text-slate-400 text-sm text-center">Done</p>
      </div>
    </div>
  );
}

export default Bottom;
