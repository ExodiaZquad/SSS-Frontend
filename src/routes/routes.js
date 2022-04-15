import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ProtectedRoute from '../components/ProtectedRoute';
import BlogReview from '../pages/BlogReview';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import ScheduleGenerator from '../pages/ScheduleGenerator';
import SubjectFilter from '../pages/SubjectFilter';

const Routes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" element={<Home />} />
        <Route
          path="generator"
          element={
            <ProtectedRoute user={user}>
              <ScheduleGenerator />
            </ProtectedRoute>
          }
        />
        <Route
          path="filter"
          element={
            <ProtectedRoute user={user}>
              <SubjectFilter />
            </ProtectedRoute>
          }
        />
        <Route
          path="review"
          element={
            <ProtectedRoute user={user}>
              <BlogReview />
            </ProtectedRoute>
          }
        />
        <Route
          path="profile"
          element={
            <ProtectedRoute user={user}>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
