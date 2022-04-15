import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Table from '../../components/Table';
import OutputTable from '../../components/OutputTable';
import Error from '../../components/Error';
import { getHeaders } from '../../services/authService';

const SubjectFilter = () => {
  const [subjects, setSubjects] = useState([]);
  const [secSelected, setSecSelected] = useState([]);
  const [isBtnWorking, setIsBtnWorking] = useState(false);
  const [data, setData] = useState([]);

  const [error, setError] = useState(false);

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

  const onFilter = async () => {
    let req = [];
    subjects.forEach((subject, index) => {
      const temp = {
        id: subject.id,
        sec: secSelected[index],
      };
      req.push(temp);
    });

    try {
      const headers = getHeaders();
      const res = await axios.post(
        'http://localhost:3005/api/subject/filter',
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
    } catch (err) {
      alert('Nothing found.');
    }
    // setData(res.data);
    // console.log('data', data);
    // console.log('req.body : ', req);
    // console.log('res : ', res.data);
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
            <button
              className="bg-blue-500 py-3 px-10 rounded-lg text-white hover:brightness-105 active:scale-95"
              onClick={onFilter}
            >
              Filter
            </button>
          ) : (
            <div className="bg-zinc-400 py-3 px-10 rounded-lg text-white text-center">Filter</div>
          )}
        </div>

        {error ? (
          <Error
            header="No subject can be added in this schedule"
            tagline="Please check the subject class date and examination date"
          />
        ) : (
          data.length != 0 && (
            <>
              <h1 className="mt-14 font-bold text-3xl">Result ({data.length})</h1>
              <OutputTable subjects={data} />
            </>
          )
        )}
      </div>
    </div>
  );
};

export default SubjectFilter;
