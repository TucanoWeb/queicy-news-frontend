import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { IRootState } from "../../store";
import IconLogout from "../Icon/IconLogout";
import useAuth from "../../hooks/useAuth/useAuth";
import Dropdown from "../Dropdown";
import IconEdit from "../Icon/IconEdit";

const Header = () => {
  // hooks
  const user = useSelector((state: IRootState) => state.userConfig);
  const session = useSelector((state: IRootState) => state.sessionConfig.valid);
  const { logout } = useAuth();
  const navigate = useNavigate();

  // render
  return (
    <header className={`z-40`}>
      <div className="shadow-sm">
        <div className="relative bg-white flex w-full items-center px-5 py-2.5 dark:bg-black">
          <div className="horizontal-logo flex lg:hidden justify-between items-center ltr:mr-2 rtl:ml-2">
            <Link to="/home" className="main-logo flex items-center shrink-0">
              <span className="text-2xl ltr:ml-1.5 rtl:mr-1.5  font-semibold  align-middle md:inline dark:text-white-light transition-all duration-300">
                {"Notícias"}
              </span>
            </Link>
          </div>

          <div className="sm:flex-1 ltr:sm:ml-0 ltr:ml-auto sm:rtl:mr-0 rtl:mr-auto flex items-center space-x-1.5 lg:space-x-2 rtl:space-x-reverse dark:text-[#d0d2d6]">
            <div className="sm:ltr:mr-auto sm:rtl:ml-auto"></div>

            {session ? (
              <div className="dropdown shrink-0 flex">
                <Dropdown
                  offset={[0, 8]}
                  placement={"bottom-end"}
                  btnClassName="relative group block"
                  button={
                    <img
                      className="w-9 h-9 rounded-full object-cover saturate-50 group-hover:saturate-100 dark:bg-white"
                      src={"/assets/images/profile-4.jpeg"}
                      alt="userProfile"
                    />
                  }
                >
                  <ul className="text-dark dark:text-white-dark !py-0 w-[230px] font-semibold dark:text-white-light/90">
                    <li>
                      <div className="flex items-center px-4 py-4">
                        <img
                          className="rounded-md w-10 h-10 object-cover dark:bg-white"
                          src={"/assets/images/profile-4.jpeg"}
                          alt="userProfile"
                        />
                        <div className="ltr:pl-4 rtl:pr-4 truncate">
                          <h4 className="text-base">{user.name.split(" ")[0]}</h4>
                          <span className="text-xs bg-success-light rounded text-success px-1 ltr:ml-2 rtl:ml-2">
                            {"Admin"}
                          </span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <Link to="/admin/news" className="dark:hover:text-white">
                        <IconEdit className="w-4.5 h-4.5 ltr:mr-2 rtl:ml-2 shrink-0" />
                        {"Notícias"}
                      </Link>
                    </li>

                    <li className="border-t border-white-light dark:border-white-light/10" onClick={logout}>
                      <Link to="#" className="text-danger !py-3">
                        <IconLogout className="w-4.5 h-4.5 ltr:mr-2 rtl:ml-2 rotate-90 shrink-0" />
                        {"Logout"}
                      </Link>
                    </li>
                  </ul>
                </Dropdown>
              </div>
            ) : (
              <>
                <button className="btn btn-primary" onClick={() => navigate("/login")}>
                  {" "}
                  LOGIN
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
