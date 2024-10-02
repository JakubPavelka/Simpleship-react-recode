import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import ErrorLayout from "./components/errorLayout/ErrorLayout";

import { useEffect } from "react";
import i18n from "./i18n";

import { useAppSelector } from "./store/store";
import Contacts from "./pages/Contacts";

const Layout = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "contacts", element: <Contacts /> },
    ],
  },
  {
    path: "*",
    element: <ErrorLayout />,
    children: [{ path: "*", element: <ErrorPage /> }],
  },
]);

const App = () => {
  const locale = useAppSelector((state) => state.language.locale);

  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
