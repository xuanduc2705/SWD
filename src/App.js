import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Navigate,
} from "react-router-dom";
import { errorPage, routes } from "./routes";
import { Fragment, useEffect, useRef, useState } from "react";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primeicons/primeicons.css";
import "/node_modules/primeflex/primeflex.css";
import "./App.css";
import { Toast } from "primereact/toast";
import { useUserInfo } from "./axios/utils";
import ErrorPath from "./module/error/error";
import { Login } from "./module/login";
import { useDispatch, useSelector } from "react-redux";
import { hideToast } from "./redux/features";
import { Home } from "./module/home";
import Layout from "./layout";
import AdminLayout from "./AdminLayout";
import { UserProfile } from "./module/home/api";
import { useGetUserProfile } from "./module/home/utils";
const NavigationScroll = ({ children }) => {
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);
  return children || null;
};
function App() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);
  const toastOptions = useSelector((state) => state.toast);
  const toast = useRef(null);
  const token = localStorage.getItem("token");
  const data = useGetUserProfile();
  const clientId = localStorage.getItem("clientId");
  const [checkAuth, setCheckAuth] = useState(true);
  const res = useUserInfo();
  useEffect(() => {
    if (toastOptions.severity) {
      const show = () => {
        toast.current?.show({ ...toastOptions });
      };
      show();
      dispatch(hideToast());
    }
  }, [toastOptions]);
  // useEffect(() => {
  //   if (res?.mess == "bạn không có quyền truy cập") {
  //     setCheckAuth(false);
  //   } else {
  //     setCheckAuth(true);
  //   }
  // }, [res]);
  const adminToken = data?.role;
  console.log(token);
  return (
    <Router>
      <Toast ref={toast} />
      <NavigationScroll>
        <Routes>
          {routes.map((route, index) => {
            const Page = route.component;
            const checkAccessRoute = Boolean(route.public);
            const DefaultLayout = route.layout ? Layout : Fragment;
            const isAdmin = route?.isAdmin;
            const AdminLay = route.adminlayout ? AdminLayout : Fragment;
            return (
              <>
                {isAdmin ? (
                  <>
                    {checkAccessRoute ? (
                      <>
                        {token ? (
                          <>
                            {!route.token_render && (
                              <Route
                                key={index}
                                path={route.path}
                                element={
                                  <AdminLay>
                                    <Page />
                                  </AdminLay>
                                }
                              ></Route>
                            )}
                          </>
                        ) : (
                          <Route
                            key={index}
                            path={route.path}
                            element={
                              <AdminLay>
                                <Page />
                              </AdminLay>
                            }
                          ></Route>
                        )}
                      </>
                    ) : (
                      <Route path={errorPage.path} element={<ErrorPath />} />
                    )}
                  </>
                ) : (
                  <>
                    {checkAccessRoute ? (
                      <>
                        {token ? (
                          <>
                            {!route.token_render && (
                              <Route
                                key={index}
                                path={route.path}
                                element={
                                  <DefaultLayout>
                                    <Page />
                                  </DefaultLayout>
                                }
                              ></Route>
                            )}
                          </>
                        ) : (
                          <Route
                            key={index}
                            path={route.path}
                            element={
                              <DefaultLayout>
                                <Page />
                              </DefaultLayout>
                            }
                          ></Route>
                        )}
                      </>
                    ) : (
                      <Route path={errorPage.path} element={<ErrorPath />} />
                    )}
                  </>
                )}
              </>
            );
          })}
          <Route path={errorPage.path} element={<ErrorPath />} />
        </Routes>
      </NavigationScroll>
    </Router>
  );
}

export default App;
