import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisVertical,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

function Mid() {
  return (
    <div className="w-full border-2 rounded-xl border-slate-300 p-3 mt-5">
      <div className="flex justify-between">
        <h1 className="text-left font-semibold text-xl mb-5">
          Latest spending
        </h1>
        <FontAwesomeIcon icon={faEllipsisVertical} />
      </div>
      <div className="flex pb-3 border-b-2">
        <div className="avatar">
          <div className="w-16 mr-5 rounded-full">
            <img src="https://img.freepik.com/premium-vector/woman-ordering-clothes-online-store-via-smartphone-vector-illustration_357257-1348.jpg" />
          </div>
        </div>
        <div className="text-left my-auto">
          <h1 className="font-bold">Online store</h1>
          <p className="text-slate-300">May 30. 2023 at 08.00 pm</p>
        </div>
      </div>
      <div className="flex pt-3 pb-3 border-b-2">
        <div className="avatar">
          <div className="w-16 mr-5 rounded-full">
            <img src="https://i.pinimg.com/736x/f3/4c/bb/f34cbb2eb06fbb5863a587581fbe084d.jpg" />
          </div>
        </div>
        <div className="text-left my-auto">
          <h1 className="font-bold">Pay the hospial</h1>
          <p className="text-slate-300">May 28. 2023 at 10.00 pm</p>
        </div>
      </div>
      <div className="flex pt-3 pb-3 border-b-2">
        <div className="avatar">
          <div className="w-16 mr-5 rounded-full">
            <img src="https://png.pngtree.com/png-vector/20191113/ourmid/pngtree-ticket-icon-flat-style-png-image_1977183.jpg" />
          </div>
        </div>
        <div className="text-left my-auto">
          <h1 className="font-bold">Tickets</h1>
          <p className="text-slate-300">May 10. 2023 at 12.00 pm</p>
        </div>
      </div>
      <div className="flex justify-center mt-3">
        <p className="my-auto mr-3 text-blue-500 cursor-pointer">View All</p>
        <FontAwesomeIcon
          className="my-auto text-blue-500 cursor-pointer"
          icon={faArrowRight}
        />
      </div>
    </div>
  );
}

export default Mid;
