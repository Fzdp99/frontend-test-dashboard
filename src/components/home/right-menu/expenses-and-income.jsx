function Top() {
  return (
    <div className="w-full border-2 rounded-xl border-slate-300 p-3">
      <h1 className="text-left font-semibold text-xl mb-5">
        Expenses and income
      </h1>
      <div className="flex justify-between text-left mb-3">
        <div className="justify-between">
          <p className="font-medium">Expense</p>
          <p className="text-lg font-bold">75%</p>
          <p className="text-sm text-slate-400">5.653</p>
        </div>
        <div className="justify-between text-center">
          <p className="text-md">I</p>
          <p className="text-md">VS</p>
          <p className="text-md">I</p>
        </div>
        <div className="text-sm justify-between text-right">
          <p className="font-medium">Income</p>
          <p className="text-lg font-bold">40%</p>
          <p className="text-sm text-slate-400">2.656</p>
        </div>
      </div>
      <div className="flex">
        <div className="h-5 bg-blue-600 w-9/12 rounded-md  mr-1"></div>
        <div className="h-5 bg-orange-500 w-3/12 rounded-md"></div>
      </div>
    </div>
  );
}

export default Top;
