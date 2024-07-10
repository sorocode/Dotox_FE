import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/pages/RootLayout";
import IndexPage from "../components/pages/IndexPage";
import SelectHobbiesPage from "../components/pages/SelectHobbiesPage";
import RankingPage from "../components/pages/RankingPage";
import StorePage from "../components/pages/StorePage";
import RecommendPage from "../components/pages/RecommendPage";
import QuestPage from "../components/pages/QuestPage";
import LoginPage from "@/components/pages/LoginPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <IndexPage />,
      },
      {
        path: "select",
        element: <SelectHobbiesPage />,
      },
      {
        path: "quest",
        element: <QuestPage />,
      },
      {
        path: "ranking",
        element: <RankingPage />,
      },
      {
        path: "store",
        element: <StorePage />,
      },
      {
        path: "recommend",
        element: <RecommendPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
    ],
  },
]);
