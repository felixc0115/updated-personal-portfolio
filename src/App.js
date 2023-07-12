import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import RootPage from "./pages/Root";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";

import personalInfo from "./data/personalnfo";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootPage />,
      children: [
        { path: "", element: <Home personalInfo={personalInfo} /> },
        { path: "about", element: <About /> },
        { path: "projects", element: <Projects /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
