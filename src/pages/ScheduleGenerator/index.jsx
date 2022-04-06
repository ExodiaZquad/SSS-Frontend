import React from 'react';
import Navbar from '../../components/Navbar';
import Table from '../../components/Table';

const ScheduleGenerator = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-screen-2xl mx-auto">
        <h1 className="mt-14 font-bold text-3xl">Schedule Generator</h1>
        <Table />
      </div>
    </div>
  );
};

export default ScheduleGenerator;
