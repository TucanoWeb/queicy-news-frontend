import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BlankLayout from "../components/Layouts/BlankLayout";
import DefaultLayout from "../components/Layouts/DefaultLayout";
import { routes } from "./routes";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../store";
import { userData } from "../store/userSlice";
import LoginCover from "../pages/Authentication/LoginCover";
import { useEffect } from "react";
import useSession from "../hooks/useAuth/useSession";
import { session } from "../store/sessionSlice";
import NewsPage from "../pages/News/News";
import NewDetailsPage from "../pages/News/NewDetails";

const RouterComponent = () => {
  // hooks
  const dispatch = useDispatch();
  const { data: validationSession, loading } = useSession(); // validate to refresh and get user's data

  // subscribe to change global status
  const sessionData = useSelector((state: IRootState) => state.sessionConfig);

  useEffect(() => {
    if (validationSession.id) {
      dispatch(userData(validationSession));
      dispatch(
        session({
          valid: true,
          code: 200
        })
      );
    }
  }, [validationSession]);

  if (loading) {
    return <></>;
  }

  const finalRoutes =
    sessionData.code === 200
      ? routes.map((route) => ({
          ...route,
          element:
            route.layout === "blank" ? (
              <BlankLayout>{route.element}</BlankLayout>
            ) : (
              <DefaultLayout>{route.element}</DefaultLayout>
            )
        }))
      : routes.map((route) => ({
          ...route,
          element:
            route?.path === "/home" ? (
              <DefaultLayout>
                <NewsPage />
              </DefaultLayout>
            ) : route?.path === "/news/:idnews" ? (
              <DefaultLayout>
                <NewDetailsPage />
              </DefaultLayout>
            ) : (
              <BlankLayout>
                <LoginCover />
              </BlankLayout>
            )
        }));

  const router = createBrowserRouter(finalRoutes);

  return <RouterProvider router={router} />;
};

export default RouterComponent;
