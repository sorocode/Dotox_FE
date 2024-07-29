import { createBrowserRouter } from "react-router-dom";
import RootLayout from "@/pages/RootLayout";
import IndexPage from "@/pages/Index/IndexPage.jsx";
import SelectHobbiesPage from "@/pages/SelectHobbies/SelectHobbiesPage.jsx";
import RankingPage from "@/pages/Ranking/RankingPage.jsx";
import StorePage from "@/pages/Store/StorePage.jsx";
import RecommendPage from "@/pages/Recommend/RecommendPage.jsx";
import QuestPage from "@/pages/Quest/QuestPage.jsx";
import LoginPage from "@/pages/Login/LoginPage.jsx";

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
