import { lazy } from "react";

const CreateNewsPage = lazy(() => import("../pages/Admin/CreateNews"));
const NewsEditPage = lazy(() => import("../pages/Admin/NewsEdit"));
const NewDetailsPage = lazy(() => import("../pages/News/NewDetails"));
const NewsPage = lazy(() => import("../pages/News/News"));
const NewsListPage = lazy(() => import("../pages/Admin/NewsList"));
const LoginCover = lazy(() => import("../pages/Authentication/LoginCover"));

const routes = [
  // News
  {
    path: "/home",
    element: <NewsPage />
  },
  {
    path: "/news/:idnews",
    element: <NewDetailsPage />
  },
  // Admin
  {
    path: "/admin/news",
    element: <NewsListPage />
  },
  {
    path: "/admin/news-create",
    element: <CreateNewsPage />
  },
  {
    path: "/admin/news-edit/:idnews",
    element: <NewsEditPage />
  },
  {
    path: "/admin/login",
    element: <LoginCover />,
    layout: "blank"
  },
  // 404
  {
    path: "*",
    element: <NewsPage />
  }
];

export { routes };
