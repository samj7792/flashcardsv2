import { Outlet, Link } from "react-router-dom";
import Homepage from "./Homepage";

export default function Layout() {
  return (
    <>
      <Link to="/">
        <Homepage />
      </Link>
      <Outlet />
    </>
  );
}
