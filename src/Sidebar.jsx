import { Link, NavLink } from "react-router-dom";

const Sidebar = (props) => {
  return (
    <div className="flex fixed z-0 top-0 left-0 overflow-x-hidden h-full">
      <div className="flex flex-col w-56 bg-gray-800 font-semibold text-white text-sm">
        <Link to="/" className="px-4 py-2 text-2xl">
          CODEYOGI
        </Link>
        <NavLink
          to="/"
          className={(navData) =>
            navData.isActive
              ? "bg-gray-900 px-4 py-2 mx-2 rounded-md"
              : "bg-gray-800 px-4 py-2 mx-2 hover:bg-gray-600 rounded-md"
          }
        >
          <div className="">Lectures</div>
        </NavLink>
        <NavLink
          to="/assignments"
          className={(navData) =>
            navData.isActive
              ? "bg-gray-900 px-4 py-2 mx-2 rounded-md"
              : "bg-gray-800 px-4 py-2 mx-2 hover:bg-gray-600 rounded-md"
          }
        >
          Assignments
        </NavLink>
        <NavLink
          to="/quiz"
          className={(navData) =>
            navData.isActive
              ? "bg-gray-900 px-4 py-2 mx-2 rounded-md"
              : "bg-gray-800 px-4 py-2 mx-2 hover:bg-gray-600 rounded-md"
          }
        >
          Quiz
        </NavLink>

        <span className="grow"></span>
        <p className="px-4 py-2 m-2 hover:bg-gray-400 rounded-md">Profile</p>
      </div>
    </div>
  );
};
export default Sidebar;
