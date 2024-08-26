import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Game from "../game";
import App from "../App";
import Header from "../components/header/Header";
import { useEffect, useState } from "react";
import { SearchRes } from "../utils/types/type";

import { GamesController } from "../utils/GamesController";

const Routes = () => {
  const [searchRes, setSearchRes] = useState<SearchRes>({ data: [] });

  const withLayout = (children: any) => {
    return (
      <>
        <Header setSearch={setSearchRes} />
        <div className="top-[57px] relative">{children}</div>
      </>
    );
  };
  useEffect(() => {
    const submit = async () => {
      const auth = new GamesController();
      await auth
        .authenticate()
        .then((response) => {
          localStorage.setItem("access_token", JSON.stringify(response));
          return true;
        })
        .catch(() => false);
    };

    submit();
  });
  // Define routes accessible only to non-authenticated users
  const routes = [
    {
      path: "/",
      element: <App searchRes={searchRes} />,
    },
    {
      path: "/game",
      element:
        searchRes.data.length > 0 ? <App searchRes={searchRes} /> : <Game />,
    },
  ];

  // Combine and conditionally include routes based on authentication status
  const router = createBrowserRouter([
    ...[...routes].map((route) => ({
      ...route,
      element: withLayout(route.element),
    })),
  ]);

  // Provide the router configuration using RouterProvider
  return <RouterProvider router={router} />;
};

export default Routes;
