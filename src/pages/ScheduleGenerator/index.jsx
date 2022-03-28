import React from 'react';
import Navbar from '../../components/Navbar';
import Schedule from '../../components/schedule';

const ScheduleGenerator = () => {
  return (
    <div>
      <Navbar />
      <h1>Schedule Generator page.</h1>
      <Schedule />
    </div>
  );
};

export default ScheduleGenerator;
