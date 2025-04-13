import { useState } from "react";
import { Navigate, Outlet } from "react-router";
import Footer from "~/components/footer";
import Navbar from "~/components/navbar";
import { useSession } from "~/lib/store";

export default function UserLayout() {

const { session } = useSession();

if (session === null) {
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
