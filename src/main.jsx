import "~/assets/index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import UserLayout from "~/layouts/user-layout";
import Home from "~/pages/home";
import Movies from "~/pages/movies";
import Payment from "~/pages/payment";
import PaymentDetail from "~/pages/payment-detail";
import Pricing from "~/pages/pricing";
import Profile from "~/pages/profile";
import Series from "~/pages/series";
import SignIn from "~/pages/sign-in";
import SignUp from "~/pages/sign-up";
import Watch from "~/pages/watch";
import Watchlist from "~/pages/watchlist";
import WatchMovie from "./pages/watch-movie";

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="series" element={<Series />} />
          <Route path="watch" element={<Watch />} />
          <Route path="watch-movie" element={<WatchMovie />} />
          <Route path="watchlist" element={<Watchlist />} />
          <Route path="profile" element={<Profile />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="payment" element={<Payment />} />
          <Route path="payment/:paymentId" element={<PaymentDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
