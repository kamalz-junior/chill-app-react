import { useState } from "react";
import { Navigate, Outlet } from "react-router";
import Footer from "~/components/footer";
import Navbar from "~/components/navbar";

export default function UserLayout() {
  const [user, _setUser] = useState(
    JSON.parse(window.localStorage.getItem("user")),
  );

  if (!user) {
    return <Navigate to="/sign-in" replace />;
  }

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
