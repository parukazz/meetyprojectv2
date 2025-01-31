import { Outlet } from "react-router-dom";
import logo from "../assets/img/logo-horizontal.svg";
import { menuList } from "../constant";

const RootLayout = () => {
  return (
    <main className="app-container relative">
      {/* Heading */}
      <div className="flex justify-between items-center">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className="w-36">
          <h4 className="font-secondary w-full uppercase text-right text-primary font-bold">
            find what you&apos;re searching for
          </h4>
        </div>
      </div>

      {/* Content */}
      <Outlet />

      {/* Menu bar */}
      <div className="fixed left-0 right-0 bottom-0 px-4 py-4 border-t-2">
        <ul className="flex justify-between items-center">
          {menuList.map((item) => (
            <li key={item.id}>
              <button
                className="flex flex-col items-center h-14 justify-between"
                type="button"
              >
                <item.icon size={28} />
                <span className="text-sm">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default RootLayout;
