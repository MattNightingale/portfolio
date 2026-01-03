import { createBrowserRouter, Outlet } from "react-router-dom";
import { Header } from "./Components/Header/Header.jsx";
import { Footer } from "./Components/Footer/Footer.jsx";
import Home from "./Pages/Home/Home.jsx";
import About from "./Pages/About/About.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import Projects from "./Pages/Projects/ProjectsPage.jsx";
import "./App.css";

function Root() {
  return (
    <div className="rootLayout">
      <Header />
      <main className="mainContent">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: "projects", element: <Projects /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);
