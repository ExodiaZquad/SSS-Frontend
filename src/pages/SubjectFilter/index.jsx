import React, { useState, useEffect } from 'react';
import Table from '../../components/Table';

const SubjectFilter = () => {
  const [subjects, setSubjects] = useState([]);
  const [secSelected, setSecSelected] = useState([]);
  const [isBtnWorking, setIsBtnWorking] = useState(false);

  useEffect(() => {
    updateGenerateBtn();
  }, [subjects]);

  const updateGenerateBtn = () => {
    let totalCredit = 0;
    subjects.forEach(subject => {
      totalCredit += subject.credit;
    });
    if (totalCredit === 0 || totalCredit >= 25) setIsBtnWorking(false);
    else setIsBtnWorking(true);
  };

  return (
    <div>
      <div className="max-w-screen-2xl mx-auto flex flex-col jusitfy-center">
        <h1 className="mt-14 font-bold text-3xl">Filter Subject</h1>
        <Table
          subjects={subjects}
          setSubjects={setSubjects}
          secSelected={secSelected}
          setSecSelected={setSecSelected}
        />
        <div className="flex justify-center items-center mt-7">
          {isBtnWorking ? (
            <button className="bg-blue-500 py-3 w-[150px] rounded-lg text-white hover:brightness-105 active:scale-95">
              Filter
            </button>
          ) : (
            <div className="bg-zinc-400 py-3 w-[150px] rounded-lg text-white text-center">Filter</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SubjectFilter;
