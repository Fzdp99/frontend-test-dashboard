import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./pages/navbar";
import ComingSoon from "./pages/coming-soon";
import "./App.css";

function App() {
  const link = [
    {
      path: "/",
      component: <Home />,
    },
    {
      path: "/coming-soon",
      component: <ComingSoon />,
    },
  ];

  return (
    <div className="App">
      <Navbar />
      <header>
        <Routes>
          {link.map((data, i) => (
            <Route key={i} path={data.path} element={data.component}></Route>
          ))}
        </Routes>
      </header>
    </div>
  );
}

export default App;
