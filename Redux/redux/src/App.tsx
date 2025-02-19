import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import MoviesList from "./components/MovieList";
import Counter from "./components/Counter";
import ErrorBoundary from "./components/ErrorBoundry/ErrorBoundry";
// Lazy Load Pages
const ProfileHome = React.lazy(() => import("../src/components/profile/ProfileHome"));
const UserProfile = React.lazy(() => import("../src/components/profile/UserProfile"));
const NotFound = React.lazy(() => import("../src/components/profile/NotFound"));

const App: React.FC = () => {
  return (
    <Router>
      <ErrorBoundary>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Routes>
        {/* <Route path="/" element={<Counter />} /> */}
          <Route path="/" element={<MoviesList />} />
          <Route path="/home" element={<ProfileHome />} />
          
          <Route path="/user/:username" element={<UserProfile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      </ErrorBoundary>
    </Router>
  );
};

export default App;
