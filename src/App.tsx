import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Recipe from "./pages/Recipe";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/recipes-app/",
    element: <Layout />,
    children: [
      {
        path: "/recipes-app/",
        element: <Home />,
      },
      {
        path: "/recipes-app/:id",
        element: <Recipe />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
