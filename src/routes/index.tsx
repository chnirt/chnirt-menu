import StyleGuide from "@/pages/StyleGuide";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <StyleGuide />,
  },
]);
