import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';
import BlogReview from '../pages/BlogReview';
import Home from '../pages/Home';
import ScheduleGenerator from '../pages/ScheduleGenerator';
import SubjectFilter from '../pages/SubjectFilter';
import Login from '../pages/LoginPage';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="generator" element={<ScheduleGenerator />} />
        <Route path="filter" element={<SubjectFilter />} />
        <Route path="review" element={<BlogReview />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
