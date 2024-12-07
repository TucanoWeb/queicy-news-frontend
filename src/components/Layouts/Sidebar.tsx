import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import IconSearch from "../Icon/IconSearch";
import { useSelector } from "react-redux";
import { IRootState } from "../../store";

const Sidebar = () => {
  const session = useSelector((state: IRootState) => state.sessionConfig.valid);

  useEffect(() => {
    const selector = document.querySelector('.sidebar ul a[href="' + window.location.pathname + '"]');
    if (selector) {
      selector.classList.add("active");
      const ul: any = selector.closest("ul.sub-menu");
      if (ul) {
        let ele: any = ul.closest("li.menu").querySelectorAll(".nav-link") || [];
        if (ele.length) {
          ele = ele[0];
          setTimeout(() => {
            ele.click();
          });
        }
      }
    }
  }, []);

  return (
    <div className={""}>
      <nav
        className={`${
          !session && "hidden"
        } sidebar fixed min-h-screen h-full top-0 bottom-0 w-[260px] shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] z-50 transition-all duration-300`}
      >
        <div className="bg-white dark:bg-black h-full">
          <div className={`flex justify-between items-center px-6 py-5 border-b border-gray-200`}>
            <NavLink to="/" className="flex items-center space-x-3">
              <span className="text-xl font-bold">{"Notícias"}</span>
            </NavLink>
          </div>
          <ul className="py-4 px-4 space-y-1">
            <li className="nav-item">
              <NavLink to="/admin/news" className="group">
                <div className="flex items-center">
                  <IconSearch className="group-hover:!text-primary shrink-0" />
                  <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">
                    News
                  </span>
                </div>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
