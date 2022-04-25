import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Table from '../../components/Table';
import OutputTable from '../../components/OutputTable';
import Error from '../../components/Error';
import { getHeaders } from '../../services/authService';
import { getToken } from '../../services/authService';
import { VscTriangleDown, VscTriangleUp } from 'react-icons/vsc';
import config from '../../config';

const SubjectFilter = () => {
  const [subjects, setSubjects] = useState([]);
  const [secSelected, setSecSelected] = useState([]);
  const [isBtnWorking, setIsBtnWorking] = useState(false);
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState('Select Schedule');
  const [dropdownOptions, setDropdownOptions] = useState([]);
  const [favSchedules, setFavSchedules] = useState([]);
  const [lstSubjectIdFromFav, setLstSubjectIdFromFav] = useState([]);

  const [error, setError] = useState(false);

  const getFavSchedules = async () => {
    const token = getToken();
    const { data } = await axios.get(config.API_URL + '/users/profile/', {
      headers: { 'x-auth-token': token },
    });

    if (data.favSchedule.length == 0) {
      setFavSchedules([]);
    } else {
      let temp = [];
      for (let i = 1; i <= data.favSchedule.length; i++) {
        temp.push(`Favourite Schedule ${i}`);
      }
      setDropdownOptions(temp);
      setFavSchedules(data.favSchedule);
    }
  };

  // useEffect(() => {
  //   getFavSchedules();
  // }, []);

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
        config.API_URL + '/subject/filter/',
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
  };

  return (
    <div>
      <div className="max-w-screen-2xl mx-auto flex flex-col jusitfy-center">
        <h1 className="mt-14 font-bold text-3xl">Filter Subject</h1>
        <Dropdown
          selected={selected}
          setSelected={setSelected}
          favSchedules={favSchedules}
          dropdownOptions={dropdownOptions}
          setSubjects={setSubjects}
          setSecSelected={setSecSelected}
          setLstSubjectIdFromFav={setLstSubjectIdFromFav}
          getFavSchedules={getFavSchedules}
        />
        <Table
          subjects={subjects}
          setSubjects={setSubjects}
          secSelected={secSelected}
          setSecSelected={setSecSelected}
          lstSubjectIdFromFav={lstSubjectIdFromFav}
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

const Dropdown = ({
  favSchedules,
  selected,
  setSelected,
  dropdownOptions,
  setSecSelected,
  setSubjects,
  setLstSubjectIdFromFav,
  getFavSchedules,
}) => {
  const [isActive, setIsActive] = useState(false);
  const options = [...dropdownOptions];

  // send list of subject ids when select fav schedule option from dropdown
  // set selected section of each subject according to selected fav schedule
  const dropdownHandle = index => {
    const subjectsFromFav = favSchedules[index].array;
    let lstSubjectId = [];
    let lstSelectedSec = [];
    subjectsFromFav.forEach(subject => {
      if (subject.type === 'Theory') {
        lstSubjectId.push(subject.id);
        lstSelectedSec.push(subject.sec);
      }
    });
    setLstSubjectIdFromFav(lstSubjectId);
    // clear input
    setSubjects([]);
    // set section for each subject in the selected favorite schedule
    setSecSelected(lstSelectedSec);
    // close dropdown
    setIsActive(false);
  };

  return (
    <div className="select-none relative w-[270px] my-4">
      <div
        className="bg-white py-2 px-6 rounded-lg shadow-md flex justify-evenly items-center text-lg cursor-pointer"
        onClick={e => {
          setIsActive(!isActive);
          getFavSchedules();
        }}
      >
        <span className="mr-1">{selected}</span>
        {isActive ? <VscTriangleUp color="orange" /> : <VscTriangleDown color="orange" />}
      </div>
      {isActive && (
        <div className="absolute w-full bg-white rounded-md shadow-lg top-[120%] left-0 z-10">
          {options.map((option, index) => (
            <div
              onClick={e => {
                setSelected(option);
                dropdownHandle(index);
              }}
              className="py-2 px-4 hover:bg-zinc-200 rounded-md text-lg active:ring transition cursor-pointer"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SubjectFilter;
