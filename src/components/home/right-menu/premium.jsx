function Bottom() {
  return (
    <div className="w-full border-2 rounded-xl border-slate-300 p-3 mt-5">
      <h1 className="font-semibold text-xl mb-5">Go to premium</h1>
      <img
        className="w-48"
        src="https://img.freepik.com/free-vector/golden-crown-classic-decorative-icon_18591-82025.jpg"
      />
      <h1 className="font-semibold text-xl text-left">Need more features ?</h1>
      <p className="text-slate-400 text-left">
        Update your account to premium to get more features
      </p>
      <button className="btn btn-block btn-info mt-5">Get now</button>
    </div>
  );
}

export default Bottom;
