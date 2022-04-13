import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
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
        <Route path="generator" element={<ScheduleGenerator />} />
        <Route path="filter" element={<SubjectFilter />} />
        <Route path="review" element={<BlogReview />} />
        <Route path="profile" element={<Profile />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
