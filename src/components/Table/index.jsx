import React, { useState, useEffect } from 'react';
import { VscTriangleDown } from 'react-icons/vsc';

const data = [
  {
    id: '01076008',
    name: 'SOFTWARE DEVELOPMENT PROCESSES',
    category: '010',
    sec: [1, 2, 3],
    credit: 4,
    day: 2,
    note: 'รับเฉพาะกู',
    teachers: ['ผศ.ดร.รัฐชัย ชาวอุทัย'],
    class: [
      {
        start: 'March 2, 2020 13:00:00',
        end: 'March 2, 2020 16:15:00',
      },
      {
        start: 'March 3, 2020 08:45:00',
        end: 'March 3, 2020 12:00:00',
      },
      {
        start: 'March 4, 2020 08:45:00',
        end: 'March 4, 2020 12:00:00',
      },
    ],
    type: 'Theory',
    hasLab: true,
  },
  {
    id: '01076008',
    name: 'SOFTWARE DEVELOPMENT PROCESSES',
    category: '010',
    sec: [1, 2, 3],
    credit: 4,
    day: 2,
    note: 'รับเฉพาะกู',
    teachers: ['ผศ.ดร.รัฐชัย ชาวอุทัย'],
    class: [
      {
        start: 'March 5, 2020 13:00:00',
        end: 'March 5, 2020 16:00:00',
      },
      {
        start: 'March 5, 2020 09:00:00',
        end: 'March 5, 2020 12:00:00',
      },
      {
        start: 'March 5, 2020 13:00:00',
        end: 'March 5, 2020 16:00:00',
      },
    ],
    type: 'Lab',
    hasLab: true,
  },
  {
    id: '01076253',
    name: 'PROBABILITY AND STATISTICS',
    category: '010',
    sec: [1, 2, 3],
    credit: 3,
    day: 5,
    note: 'รับเฉพาะกู',
    teachers: ['รศ.ดร.ศักดิ์ชัย ทิพย์จักษุรัตน์'],
    class: {
      start: 'March 5, 2020 08:45:00',
      end: 'March 5, 2020 12:00:00',
    },
    midterm: {
      start: 'March 8, 2022 09:30:00',
      end: 'March 8, 2022 12:30:00',
    },
    final: {
      ' start': 'May 17, 2022 09:30:00',
      end: 'May 17, 2022 12:30:00',
    },
    type: 'Theory',
  },
  {
    id: '01076010',
    name: 'COMPUTER NETWORKS',
    category: '010',
    sec: [1, 2],
    credit: 4,
    day: 3,
    note: 'รับเฉพาะกู',
    teachers: ['รศ.ดร.ศักดิ์ชัย ทิพย์จักษุรัตน์'],
    class: {
      start: 'March 3, 2020 08:45:00',
      end: 'March 3, 2020 12:00:00',
    },
    midterm: {
      start: 'March 11, 2022 09:30:00',
      end: 'March 11, 2022 12:30:00',
    },
    final: {
      start: 'May 20, 2022 13:30:00',
      end: 'May 20, 2022 16:30:00',
    },
    type: 'Theory',
    hasLab: true,
  },
  {
    id: '01076009',
    name: 'COMPUTER ORGANIZATION AND ASSEMBLY LANGUAGE',
    category: '010',
    sec: [1, 2, 3],
    credit: 4,
    day: 4,
    note: 'รับเฉพาะกู',
    teachers: ['ผศ.ดร.สุรินทร์ กิตติธรกุล'],
    class: {
      start: 'March 4, 2020 08:45:00',
      end: 'March 4, 2020 12:00:00',
    },
    midterm: {
      start: 'March 10, 2022 09:30:00',
      end: 'March 10, 2022 12:30:00',
    },
    final: {
      start: 'May 11, 2022 09:30:00',
      end: 'May 11, 2022 12:30:00',
    },
    type: 'Theory',
    hasLab: true,
  },
];

const Table = () => {
  const [classId, setClassId] = useState('');
  const [subjects, setSubjects] = useState([]);
  const [dropDownControl, setDropDownControl] = useState([]);

  return (
    <div className="mt-4">
      <table className="w-full text-center font-medium ">
        <tr className="rounded">
          <th className="border-zinc-300 p-3 bg-orange-200 text-orange-500">รหัสวิชา</th>
          <th className="border-zinc-300 p-3 bg-orange-200 text-orange-500">ชื่อวิชา</th>
          <th className="p-3 bg-orange-200 text-orange-500">หน่วยกิต</th>
          <th className="p-3 bg-orange-200 text-orange-500">ประเภท</th>
          <th className="p-3 bg-orange-200 text-orange-500">กลุ่ม</th>
          <th className="p-3 bg-orange-200 text-orange-500">เวลาเรียน</th>
        </tr>
        {subjects.map((subject, index) => {
          return (
            <TableRow
              index={index}
              id={subject.id}
              name={subject.name}
              credit={subject.credit}
              type={subject.type}
              sec={subject.sec}
              dropdownControl={dropDownControl}
              setDropDownControl={setDropDownControl}
            />
          );
        })}
        {/* input field table row */}
        <tr className="hover:bg-zinc-100">
          <td className="p-3">
            <input
              type="text"
              className="rounded border-none outline-none py-2 pl-2 w-1/2 h-3/4 font-medium bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-orange-200"
              value={classId}
              onChange={e => setClassId(e.target.value)}
              onKeyDown={e => {
                // not the best approach! ask someone later!
                if (e.key === 'Enter') {
                  const res = data.filter(item => {
                    return item.id === classId;
                  });
                  setSubjects([...subjects.concat(res)]);
                  setClassId('');
                  for (let i = 0; i < res.length; i++) {
                    setDropDownControl([...dropDownControl.concat(false)]);
                  }
                  console.log(subjects);
                }
              }}
            />
          </td>
          <td className="p-3"></td>
          <td className="p-3"></td>
          <td className="p-3"></td>
          <td className="p-3"></td>
          <td className="p-3"></td>
        </tr>
      </table>
      <h2 className="text-center font-bold">หน่วยกิตทั้งหมด {12}</h2>
    </div>
  );
};

const TableRow = ({ index, id, name, credit, type, sec, date, dropDownControl, setDropDownControl }) => {
  const [selected, setSelected] = useState('ALL');
  const [isActive, setIsActive] = useState(false);

  if (dropDownControl[index]) {
    setIsActive(true);
  }

  return (
    <tr className="hover:bg-zinc-100">
      <td className="p-3">{id}</td>
      <td className="p-3 max-w-xs">{name}</td>
      <td className="p-3">{credit}</td>
      <td className="p-3">{type}</td>
      <td className="p-3 flex justify-center items-center">
        <Dropdown
          sections={sec}
          selected={selected}
          setSelected={setSelected}
          isActive={isActive}
          setIsActive={setIsActive}
          dropdownControl={dropDownControl}
          setDropDownControl={setDropDownControl}
          index={index}
        />
      </td>
      <td className="p-3">{date}</td>
    </tr>
  );
};

const Dropdown = ({
  sections,
  selected,
  setSelected,
  isActive,
  setIsActive,
  dropDownControl,
  setDropDownControl,
  index,
}) => {
  const options = ['ALL', ...sections];
  return (
    <div className="select-none relative">
      <div
        className="bg-white w-14 py-1 rounded shadow-md flex justify-evenly items-center text-sm"
        onClick={e => {
          setIsActive(!isActive);
          setDropDownControl(
            dropDownControl.map((item, i) => {
              if (i === index) item = false;
            }),
          );
        }}
      >
        {selected}
        <VscTriangleDown color="orange" />
      </div>
      {isActive && (
        <div className="absolute bg-white top-[120%] left-0 z-10">
          {options.map(option => (
            <div
              className="py-1 px-3 hover:bg-zinc-200 active:ring transition"
              onClick={e => {
                setSelected(option);
                setIsActive(false);
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
