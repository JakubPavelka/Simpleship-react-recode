import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";

import { useEffect } from "react";
import i18n from "./i18n";

import { useAppDispatch, useAppSelector } from "./store/store";
import { changeLanguage } from "./store/features/languageSlice";

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
      { path: "*", element: <ErrorPage /> },
    ],
  },
]);

const App = () => {
  const dispatch = useAppDispatch();
  const locale = useAppSelector((state) => state.language.locale);

  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(changeLanguage(event.target.value));
  };
  return (
    <>
      <div>
        <select value={locale} onChange={handleChange}>
          <option value="en">English</option>
          <option value="cs">Czech</option>
        </select>
      </div>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
