import LayoutDefault from "../layout/LayoutDefault";
import Home from "../page/Home";
import Cart from "../page/Cart";

export const routers = [
  {
    path: "/",
    element: <LayoutDefault />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
];
