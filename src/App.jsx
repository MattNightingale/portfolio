import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes.jsx";

function App() {
  return <RouterProvider router={router} className="app"/>;
}

export default App;
