import React from "react";
import { Outlet, Navigate, Route, Routes, useLocation } from "react-router-dom";

import { Footer, Navbar } from "./components";
import {
  About,
  AuthPage,
  CompanyProfile,
  EventDetail,
  FindEvents,
  UploadEvent,
  UserProfile,
} from "./pages";

function Layout() {
  const user = true;
  const location = useLocation();

  return user ? (
    <Outlet />
  ) : (
    <Navigate to="user-auth" state={{ from: location }} replace />
  );
}
function App() {
  const user = {};
  return (
    <main>
      <Navbar />
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={<Navigate to="find-events" replace={true} />}
          />
          <Route path="/find-events" element={<FindEvents />} />
          <Route
            path={
              user?.user?.accountType === "seeker"
                ? "/user-profile"
                : "/user-profile/:id"
            }
            element={<UserProfile />}
          />

          <Route path={"/company-profile"} element={<CompanyProfile />} />
          <Route path={"/company-profile/:id"} element={<CompanyProfile />} />
          <Route path={"/upload-event"} element={<UploadEvent />} />
          <Route path={"/event-detail/:id"} element={<EventDetail />} />
        </Route>

        <Route path="/about-us" element={<About />} />
        <Route path="/user-auth" element={<AuthPage />} />
      </Routes>

      {user && <Footer />}
    </main>
  );
}

export default App;
