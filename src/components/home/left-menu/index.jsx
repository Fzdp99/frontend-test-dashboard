import Top from "./top";
import Mid from "./mid";
import Bottom from "./bottom";
function Leftmenu() {
  return (
    <div className="bg-slate-100 col-span-2 text-left pl-32 pr-5 pt-5 pb-5">
      <div className="flex justify-between mb-5">
        <div>
          <h1 className="text-3xl font-bold">Hello, Jhon.D</h1>
          <p className="font-medium">View and control your finances hire!</p>
        </div>
        <button className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
      <Top />
      <Mid />
      <Bottom />
    </div>
  );
}

export default Leftmenu;
