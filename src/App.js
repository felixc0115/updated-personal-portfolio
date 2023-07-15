import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import RootPage from "./pages/Root";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";

import { personalInfo } from "./data/customizablelnfo";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootPage />,
      children: [
        { path: "", element: <Home personalInfo={personalInfo} /> },
        { path: "about", element: <About /> },
        { path: "projects", element: <Projects /> },
        { path: "resume", element: <Resume /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
