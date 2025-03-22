import "~/assets/index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import UserLayout from "~/layouts/user-layout";
import Home from "~/pages/home";
import Movies from "~/pages/movies";
import Payment from "~/pages/payment";
import Checkout from "~/pages/checkout";
import Profile from "~/pages/profile";
import Series from "~/pages/series";
import SignIn from "~/pages/sign-in";
import SignUp from "~/pages/sign-up";
import Watch from "~/pages/watch";
import Watchlist from "~/pages/watchlist";
import WatchMovie from "./pages/watch-movie";
import Premium from "./pages/premium";
import CardSubscibe from "./components/card-subscribe";

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="card-subscribe" element={<CardSubscibe />} />
        <Route element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="series" element={<Series />} />
          <Route path="watch" element={<Watch />} />
          <Route path="watch-movie" element={<WatchMovie />} />
          <Route path="watchlist" element={<Watchlist />} />
          <Route path="profile" element={<Profile />} />
          <Route path="premium" element={<Premium />} />
          <Route path="checkout/:checkoutId" element={<Checkout />} />
          <Route path="checkout/:checkoutId/pay" element={<Payment />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
