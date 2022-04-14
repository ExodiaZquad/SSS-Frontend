import React, { useState, useEffect } from 'react';
import { VscTriangleDown, VscTriangleUp } from 'react-icons/vsc';
import axios from 'axios';

const Table = ({ subjects, setSubjects, secSelected, setSecSelected }) => {
  const [classId, setClassId] = useState('');
  // const [subjects, setSubjects] = useState([]);
  const [dropDownControl, setDropDownControl] = useState([]);
  const [creditCount, setCreditCount] = useState(0);
  // const [secSelected, setSecSelected] = useState([]);

  const getSubject = async () => {
    const res = await axios.get('http://localhost:3005/api/subject/', {
      params: { id: classId },
    });
    // setDropDownControl([...dropDownControl.concat([false])]);
    setDropDownControl(prev => prev.concat([false]));
    setSecSelected(prev => prev.concat(['-1']));
    console.log('control: ', dropDownControl);
    // setSubjects([...subjects.concat(res.data)]);
    setSubjects(prevSubjects => prevSubjects.concat(res.data));
    setCreditCount(prev => prev + res.data.credit);
  };

  return (
    <div className="mt-4">
      <table className="w-full text-center font-medium ">
        <tr className="rounded">
          <th className="border-zinc-300 p-3 bg-orange-200 text-orange-500  w-[300px]">รหัสวิชา</th>
          <th className="border-zinc-300 p-3 bg-orange-200 text-orange-500">ชื่อวิชา</th>
          <th className="p-3 bg-orange-200 text-orange-500">หน่วยกิต</th>
          <th className="p-3 bg-orange-200 text-orange-500">ประเภท</th>
          <th className="p-3 bg-orange-200 text-orange-500">กลุ่ม</th>
          <th className="p-3 bg-orange-200 text-orange-500  w-[300px]">เวลาเรียน</th>
        </tr>
        {subjects.map((subject, idx) => {
          return (
            <TableRow
              index={idx}
              id={subject.id}
              name={subject.name}
              credit={subject.credit}
              type={subject.type}
              sec={subject.sec}
              theoryTime={subject.theoryTime}
              labSec={subject.labSec}
              labTime={subject.labTime}
              hasLab={subject.hasLab}
              dropDownControl={dropDownControl}
              setDropDownControl={setDropDownControl}
              secSelected={secSelected}
              setSecSelected={setSecSelected}
            />
          );
        })}
        {/* input field table row */}
        <tr className="hover:bg-zinc-100">
          <td className="p-3 border">
            <input
              type="text"
              className="rounded border-none outline-none py-2 pl-2 w-1/2 h-3/4 font-medium bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-orange-200"
              value={classId}
              onChange={e => setClassId(e.currentTarget.value)}
              onKeyDown={e => {
                // not the best approach! ask someone later!
                if (e.key === 'Enter') {
                  // prevent error here vvvv (no more 8 char no less 8 char no special char no alphabet)
                  if (classId === '' || classId.length !== 8 || classId.includes(' ')) {
                    alert('Invalid Input');
                  } else {
                    // console.log('subjects : ', subjects, 'classId : ', classId);
                    let check = false;
                    subjects.forEach(subject => {
                      if (subject.id === classId) {
                        alert('Duplicated Input');
                        check = true;
                      }
                    });
                    if (!check) getSubject();
                  }
                  setClassId('');
                }
              }}
            />
          </td>
          <td className="p-3 border"></td>
          <td className="p-3 border"></td>
          <td className="p-3 border"></td>
          <td className="p-3 border"></td>
          <td className="p-3 border"></td>
        </tr>
      </table>
      <h2 className="text-center font-bold mt-7">หน่วยกิตทั้งหมด {creditCount}</h2>
    </div>
  );
};

const TableRow = ({
  index,
  id,
  name,
  credit,
  type,
  sec,
  theoryTime,
  labSec,
  labTime,
  hasLab,
  dropDownControl,
  setDropDownControl,
  secSelected,
  setSecSelected,
}) => {
  const [selected, setSelected] = useState('ALL');
  const [theoryDate, setTheoryDate] = useState('');
  const [labDate, setLabDate] = useState('');
  const [labSecText, setLabSecText] = useState('');

  useEffect(() => {
    setTheoryDate(theoryTime[sec.findIndex(element => element === selected)]);
    if (hasLab) {
      let idx = sec.findIndex(element => element === selected);
      if (idx === -1) {
        setLabSecText('ALL');
      } else setLabSecText(labSec[idx]);
      setLabDate(labTime[idx]);
    }
  }, [selected]);

  return (
    <>
      {hasLab ? (
        <>
          <tr className="hover:bg-zinc-100">
            <td className="p-3 border-x border-t">{id}</td>
            <td className="p-3 max-w-xs border-x border-t">{name}</td>
            <td className="p-3 border-x border-t">{credit}</td>
            <td className="p-3 border">{type}</td>
            <td className="p-3 flex justify-center items-center border">
              <Dropdown
                sections={sec}
                selected={selected}
                setSelected={setSelected}
                dropDownControl={dropDownControl}
                setDropDownControl={setDropDownControl}
                index={index}
                secSelected={secSelected}
                setSecSelected={setSecSelected}
              />
            </td>
            <td className="p-3 border">{theoryDate}</td>
          </tr>
          <tr className="hover:bg-zinc-100">
            <td className="p-3 border-x border-b"></td>
            <td className="p-3 max-w-xs border-x border-b"></td>
            <td className="p-3 border-x border-b"></td>
            <td className="p-3 border">Lab</td>
            <td className="p-3 flex justify-center items-center border">{labSecText}</td>
            <td className="p-3 border">{labDate}</td>
          </tr>
        </>
      ) : (
        <tr className="hover:bg-zinc-100">
          <td className="p-3 border">{id}</td>
          <td className="p-3 max-w-xs border">{name}</td>
          <td className="p-3 border">{credit}</td>
          <td className="p-3 border">{type}</td>
          <td className="p-3 flex justify-center items-center border">
            <Dropdown
              sections={sec}
              selected={selected}
              setSelected={setSelected}
              dropDownControl={dropDownControl}
              setDropDownControl={setDropDownControl}
              index={index}
              secSelected={secSelected}
              setSecSelected={setSecSelected}
            />
          </td>
          <td className="p-3 border">{theoryDate}</td>
        </tr>
      )}
    </>
  );
};

const Dropdown = ({
  sections,
  selected,
  setSelected,
  dropDownControl,
  setDropDownControl,
  index,
  secSelected,
  setSecSelected,
}) => {
  const options = ['ALL', ...sections];
  return (
    <div className="select-none relative">
      <div
        className="bg-white w-14 py-1 rounded shadow-md flex justify-evenly items-center text-sm hover:cursor-pointer"
        onClick={() => {
          dropDownControl.forEach((dropdown, i) => {
            if (i === index) {
              dropDownControl[i] = !dropDownControl[i];
            } else {
              dropDownControl[i] = false;
            }
          });
          setDropDownControl([...dropDownControl]);
        }}
      >
        {selected}
        {dropDownControl[index] ? <VscTriangleUp color="orange" /> : <VscTriangleDown color="orange" />}
      </div>
      {dropDownControl[index] && (
        <div className="absolute bg-white rounded-md shadow-lg top-[120%] left-0 z-10">
          {options.map(option => (
            <div
              className="py-1 px-3 hover:bg-zinc-200 rounded-md active:ring transition hover:cursor-pointer"
              onClick={e => {
                setSelected(option);
                if (option === 'ALL') {
                  secSelected[index] = '-1';
                } else secSelected[index] = option;
                setSecSelected([...secSelected]);
                console.log('sec selected : ', secSelected);
                dropDownControl[index] = false;
                setDropDownControl([...dropDownControl]);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Table;
