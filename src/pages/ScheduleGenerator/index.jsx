import React, { useEffect, useState } from 'react';
import Table from '../../components/Table';
import Schedule from '../../components/Schedule';
import Error from '../../components/Error';
import axios from 'axios';
import { getHeaders } from '../../services/authService';

const ScheduleGenerator = () => {
  const [subjects, setSubjects] = useState([]);
  const [secSelected, setSecSelected] = useState([]);
  const [isBtnWorking, setIsBtnWorking] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  const onGenerate = async () => {
    setData([]);
    let req = [];
    subjects.forEach((subject, index) => {
      const temp = {
        id: subject.id,
        sec: secSelected[index],
      };
      req.push(temp);
    });

    const headers = getHeaders();
    const res = await axios.post(
      'http://localhost:3005/api/schedule/generate',
      {
        subjects: req,
      },
      headers,
    );

    if (res.data.length == 0) {
      setError(true);
      return;
    }

    setError(false);
    setData(res.data);

    // console.log('data', data);
    // console.log('req.body : ', req);
    // console.log('res : ', res.data);
  };

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
      <div className="max-w-screen-2xl mx-auto flex flex-col justify-center">
        <h1 className="mt-14 font-bold text-3xl">Schedule Generator</h1>
        <Table
          subjects={subjects}
          setSubjects={setSubjects}
          secSelected={secSelected}
          setSecSelected={setSecSelected}
        />
        {/* <h2 className="text-center font-bold">หน่วยกิตทั้งหมด {12}</h2> */}
        <div className="flex justify-center items-center mt-7">
          {isBtnWorking ? (
            <button
              className="bg-blue-500 py-3 px-7 rounded-lg text-white hover:brightness-105 active:scale-95"
              onClick={onGenerate}
            >
              Generate
            </button>
          ) : (
            <div className="bg-zinc-400 py-3 px-7 rounded-lg text-white ">Generate</div>
          )}
        </div>

        {error ? (
          <Error header="Subjects are overlapping" tagline="Please check the subject class date and examination date" />
        ) : (
          <>
            {data.length !== 0 && <h1 className="mt-14 font-bold text-3xl">My Schedule ({data.length})</h1>}
            {data.map(dataItem => (
              <Schedule data={dataItem} onGenerate={onGenerate} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default ScheduleGenerator;
