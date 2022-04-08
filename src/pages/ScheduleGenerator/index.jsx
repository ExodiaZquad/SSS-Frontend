import React from 'react';
import Navbar from '../../components/Navbar';
import Table from '../../components/Table';

const ScheduleGenerator = () => {
  return (
    <div>
      <div className="max-w-screen-2xl mx-auto flex flex-col justify-center">
        <h1 className="mt-14 font-bold text-3xl">Schedule Generator</h1>
        <Table />
        <h2 className="text-center font-bold">หน่วยกิตทั้งหมด {12}</h2>
        <div className="flex justify-center items-center mt-7">
          <button className="bg-blue-500 py-3 px-7 rounded-lg text-white hover:brightness-105">Generate</button>
        </div>
      </div>
    </div>
  );
};

export default ScheduleGenerator;
