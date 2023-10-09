import React from "react";
import { Outlet, Navigate, Route, Routes, useLocation } from "react-router-dom";

import { Footer, Navbar } from "./components";
import {
  About,
  AuthPage,
  CompanyProfile,
  JobDetail,
  FindJobs,
  UploadJob,
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
            element={<Navigate to="find-jobs" replace={true} />}
          />
          <Route path="/find-jobs" element={<FindJobs />} />
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
          <Route path={"/upload-job"} element={<UploadJob />} />
          <Route path={"/job-detail/:id"} element={<JobDetail />} />
        </Route>

        <Route path="/about-us" element={<About />} />
        <Route path="/user-auth" element={<AuthPage />} />
      </Routes>

      {user && <Footer />}
    </main>
  );
}

export default App;
