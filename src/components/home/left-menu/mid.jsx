import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faPlus,
  faEllipsisVertical,
  faPaperclip,
} from "@fortawesome/free-solid-svg-icons";
import { faFaceSmile } from "@fortawesome/free-regular-svg-icons";

function Mid() {
  return (
    <div className="grid grid-cols-9 gap-1 mt-5">
      <div className="bg-white col-span-5 rounded-l-xl p-5">
        <h1 className="font-bold mb-3">List of items to buy</h1>
        <div className="flex items-center mb-3">
          <div className="mr-5">
            <h1 className="font-bold text-2xl">02:00</h1>
            <p className="text-sm text-slate-400">Sat. August 12</p>
          </div>
          <FontAwesomeIcon
            className="text-slate-400 text-xl"
            icon={faChevronRight}
          />
          <div className="ml-5">
            <h1 className="font-bold text-2xl">05:00</h1>
            <p className="text-sm text-slate-400">Sat. September 12</p>
          </div>
        </div>
        <div className="flex justify-between mb-3">
          <div className="flex items-center">
            <p className="text-sm text-slate-400 mr-2">0/3</p>
            <p className="text-sm">Shopping list</p>
          </div>
          <div className="flex items-center cursor-pointer hover:bg-slate-500 hover:text-white duration-300 p-2 rounded-xl">
            <FontAwesomeIcon className="mr-2" icon={faPlus} />
            <p className="text-sm">Add an item</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="flex justify-between rounded-lg bg-slate-200 p-3 items-center">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="checkbox mr-2 checkbox-primary"
              />
              <p className="font-bold text-xs">Macbook</p>
            </div>
            <FontAwesomeIcon
              className="cursor-pointer"
              icon={faEllipsisVertical}
            />
          </div>
          <div className="flex justify-between rounded-lg bg-slate-200 p-3 items-center">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="checkbox mr-2 checkbox-primary"
              />
              <p className="font-bold text-xs">Bicycle</p>
            </div>
            <FontAwesomeIcon
              className="cursor-pointer"
              icon={faEllipsisVertical}
            />
          </div>
          <div className="flex justify-between rounded-lg bg-slate-200 p-3 items-center">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="checkbox mr-2 checkbox-primary"
              />
              <p className="font-bold text-xs">Motorcycle</p>
            </div>
            <FontAwesomeIcon
              className="cursor-pointer"
              icon={faEllipsisVertical}
            />
          </div>
          <div className="flex justify-between rounded-lg bg-slate-200 p-3 items-center">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="checkbox mr-2 checkbox-primary"
              />
              <p className="font-bold text-xs">Iphone 14Pro max</p>
            </div>
            <FontAwesomeIcon
              className="cursor-pointer"
              icon={faEllipsisVertical}
            />
          </div>
        </div>
      </div>
      <div className="bg-white col-span-4 rounded-r-xl p-5">
        <h1 className="font-bold mb-3">Esther Hoard</h1>
        <div className="chat chat-end">
          <div className="chat-image avatar">
            <div className="w-8 rounded-full">
              <img
                alt="Tailwind CSS chat bubble component"
                src="https://cdn-icons-png.flaticon.com/512/1754/1754644.png"
              />
            </div>
          </div>
          <div className="chat-bubble text-sm chat-bubble-info">
            Are you ready ?
          </div>
        </div>
        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-8 rounded-full">
              <img
                alt="Tailwind CSS chat bubble component"
                src="https://cdn-icons-png.flaticon.com/512/5526/5526465.png"
              />
            </div>
          </div>
          <div className="chat-bubble text-sm chat-bubble-error">
            I have prepared everything
          </div>
        </div>
        <div className="bg-slate-200 mt-4 rounded-xl">
          <input
            type="text"
            placeholder="Type here"
            className="input w-full max-w-xs bg-slate-200"
          />
          <div className="flex justify-between p-3">
            <div className="flex items-center">
              <FontAwesomeIcon
                className="mr-2 cursor-pointer"
                icon={faFaceSmile}
              />
              <FontAwesomeIcon className="cursor-pointer" icon={faPaperclip} />
            </div>
            <div className="hover:bg-blue-900 duration-500 rounded-lg text-white font-bold text-xs bg-blue-600 cursor-pointer p-2">
              Send now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mid;
