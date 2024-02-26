import { Outlet, RouterProvider, createHashRouter } from "react-router-dom";
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

const router = createHashRouter([
  {
    path: "/recipes-app/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/:id",
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
