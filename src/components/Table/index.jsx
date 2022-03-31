import React, { useState, useEffect } from 'react';

const data = [
  {
    id: '01076008',
    name: 'SOFTWARE DEVELOPMENT PROCESSES',
    category: '010',
    sec: 1,
    credit: 4,
    day: 2,
    note: 'รับเฉพาะกู',
    teachers: ['ผศ.ดร.รัฐชัย ชาวอุทัย'],
    class: {
      start: 'March 2, 2020 13:00:00',
      end: 'March 2, 2020 16:15:00',
    },
    midterm: {
      start: 'March 9, 2022 09:30:00',
      end: 'March 9, 2022 12:30:00',
    },
    final: {
      start: 'May 12, 2022 09:30:00',
      end: 'May 12, 2022 12:30:00',
    },
    type: 'Theory',
  },
  {
    id: '01076008',
    name: 'SOFTWARE DEVELOPMENT PROCESSES',
    category: '010',
    sec: 101,
    credit: 4,
    day: 5,
    note: 'รับเฉพาะกู',
    teachers: ['ผศ.ดร.รัฐชัย ชาวอุทัย'],
    class: {
      start: 'March 5, 2020 13:00:00',
      end: 'March 5, 2020 16:00:00',
    },
    midterm: {
      start: 'จัดสอบเอง',
      end: 'จัดสอบเอง',
    },
    final: {
      start: 'จัดสอบเอง',
      end: 'จัดสอบเอง',
    },
    type: 'Lab',
  },
  {
    id: '01076008',
    name: 'SOFTWARE DEVELOPMENT PROCESSES',
    category: '010',
    sec: 2,
    credit: 4,
    day: 3,
    note: 'รับเฉพาะกู',
    teachers: ['ผศ.ดร.ชุติเมษฏ์ ศรีนิลทา'],
    class: {
      start: 'March 3, 2020 08:45:00',
      end: 'March 3, 2020 12:00:00',
    },
    midterm: {
      start: 'March 9, 2022 09:30:00',
      end: 'March 9, 2022 12:30:00',
    },
    final: {
      start: 'May 12, 2022 09:30:00',
      end: 'May 12, 2022 12:30:00',
    },
    type: 'Theory',
  },
  {
    id: '01076008',
    name: 'SOFTWARE DEVELOPMENT PROCESSES',
    category: '010',
    sec: 102,
    credit: 4,
    day: 5,
    note: 'รับเฉพาะกู',
    teachers: ['ผศ.ดร.รัฐชัย ชาวอุทัย', 'ผศ.ดร.ชุติเมษฏ์ ศรีนิลทา'],
    class: {
      start: 'March 5, 2020 09:00:00',
      end: 'March 5, 2020 12:00:00',
    },
    midterm: {
      start: 'จัดสอบเอง',
      end: 'จัดสอบเอง',
    },
    final: {
      start: 'จัดสอบเอง',
      end: 'จัดสอบเอง',
    },
    type: 'Lab',
  },
  {
    id: '01076008',
    name: 'SOFTWARE DEVELOPMENT PROCESSES',
    category: '010',
    sec: 3,
    credit: 4,
    day: 4,
    note: 'รับเฉพาะกู',
    teachers: ['ผศ.ดร.ชุติเมษฏ์ ศรีนิลทา'],
    class: {
      start: 'March 4, 2020 08:45:00',
      end: 'March 4, 2020 12:00:00',
    },
    midterm: {
      start: 'March 9, 2022 09:30:00',
      end: 'March 9, 2022 12:30:00',
    },
    final: {
      start: 'May 12, 2022 09:30:00',
      end: 'May 12, 2022 12:30:00',
    },
    type: 'Theory',
  },
  {
    id: '01076008',
    name: 'SOFTWARE DEVELOPMENT PROCESSES',
    category: '010',
    sec: 103,
    credit: 4,
    day: 5,
    note: 'รับเฉพาะกู',
    teachers: ['ผศ.ดร.ชุติเมษฏ์ ศรีนิลทา'],
    class: {
      start: 'March 5, 2020 13:00:00',
      end: 'March 5, 2020 16:00:00',
    },
    midterm: {
      start: 'จัดสอบเอง',
      end: 'จัดสอบเอง',
    },
    final: {
      start: 'จัดสอบเอง',
      end: 'จัดสอบเอง',
    },
    type: 'Lab',
  },
  {
    id: '01076253',
    name: 'PROBABILITY AND STATISTICS',
    category: '010',
    sec: 1,
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
    id: '01076253',
    name: 'PROBABILITY AND STATISTICS',
    category: '010',
    sec: 2,
    credit: 3,
    day: 5,
    note: 'รับเฉพาะกู',
    teachers: ['รศ.ดร.ศักดิ์ชัย ทิพย์จักษุรัตน์'],
    class: {
      start: 'March 5, 2020 13:00:00',
      end: 'March 5, 2020 16:15:00',
    },
    midterm: {
      start: 'March 8, 2022 09:30:00',
      end: 'March 8, 2022 12:30:00',
    },
    final: {
      start: 'May 17, 2022 09:30:00',
      end: 'May 17, 2022 12:30:00',
    },
    type: 'Theory',
  },
  {
    id: '01076253',
    name: 'PROBABILITY AND STATISTICS',
    category: '010',
    sec: 3,
    credit: 3,
    day: 5,
    note: 'รับเฉพาะกู',
    teachers: ['ผศ.ดร.สุรินทร์ กิตติธรกุล'],
    class: {
      start: 'March 5, 2020 16:30:00',
      end: 'March 5, 2020 19:45:00',
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
    sec: 1,
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
  },
  {
    id: '01076010',
    name: 'COMPUTER NETWORKS',
    category: '010',
    sec: 101,
    credit: 4,
    day: 3,
    note: 'รับเฉพาะกู',
    teachers: ['รศ.ดร.ศักดิ์ชัย ทิพย์จักษุรัตน์', 'ผศ.ธนา หงษ์สุวรรณ', 'ดร.ปริญญา เอกปริญญา'],
    class: {
      start: 'March 3, 2020 13:00:00',
      end: 'March 3, 2020 16:00:00',
    },
    midterm: {
      start: 'จัดสอบเอง',
      end: 'จัดสอบเอง',
    },
    final: {
      start: 'จัดสอบเอง',
      end: 'จัดสอบเอง',
    },
    type: 'Lab',
  },
  {
    id: '01076010',
    name: 'COMPUTER NETWORKS',
    category: '010',
    sec: 2,
    credit: 4,
    day: 4,
    note: 'รับเฉพาะกู',
    teachers: ['ดร.ปริญญา เอกปริญญา'],
    class: {
      start: 'March 4, 2020 08:45:00',
      end: 'March 4, 2020 12:00:00',
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
  },
  {
    id: '01076010',
    name: 'COMPUTER NETWORKS',
    category: '010',
    sec: 102,
    credit: 4,
    day: 4,
    note: 'รับเฉพาะกู',
    teachers: ['รศ.ดร.ศักดิ์ชัย ทิพย์จักษุรัตน์', 'ผศ.ธนา หงษ์สุวรรณ', 'ดร.ปริญญา เอกปริญญา'],
    class: {
      start: 'March 4, 2020 13:00:00',
      end: 'March 4, 2020 16:00:00',
    },
    midterm: {
      start: 'จัดสอบเอง',
      end: 'จัดสอบเอง',
    },
    final: {
      start: 'จัดสอบเอง',
      end: 'จัดสอบเอง',
    },
    type: 'Lab',
  },
  {
    id: '01076010',
    name: 'COMPUTER NETWORKS',
    category: '010',
    sec: 3,
    credit: 4,
    day: 2,
    note: 'รับเฉพาะกู',
    teachers: ['รศ.ดร.ศักดิ์ชัย ทิพย์จักษุรัตน์'],
    class: {
      start: 'March 2, 2020 08:45:00',
      end: 'March 2, 2020 12:00:00',
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
  },
  {
    id: '01076010',
    name: 'COMPUTER NETWORKS',
    category: '010',
    sec: 103,
    credit: 4,
    day: 2,
    note: 'รับเฉพาะกู',
    teachers: ['รศ.ดร.ศักดิ์ชัย ทิพย์จักษุรัตน์', 'ผศ.ธนา หงษ์สุวรรณ', 'ดร.ปริญญา เอกปริญญา'],
    class: {
      start: 'March 2, 2020 13:00:00',
      end: 'March 2, 2020 16:00:00',
    },
    midterm: {
      start: 'จัดสอบเอง',
      end: 'จัดสอบเอง',
    },
    final: {
      start: 'จัดสอบเอง',
      end: 'จัดสอบเอง',
    },
    type: 'Lab',
  },
  {
    id: '01076009',
    name: 'COMPUTER ORGANIZATION AND ASSEMBLY LANGUAGE',
    category: '010',
    sec: 1,
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
  },
  {
    id: '01076009',
    name: 'COMPUTER ORGANIZATION AND ASSEMBLY LANGUAGE',
    category: '010',
    sec: 101,
    credit: 4,
    day: 4,
    note: 'รับเฉพาะกู',
    teachers: ['ผศ.ดร.สุรินทร์ กิตติธรกุล'],
    class: {
      start: 'March 4, 2020 13:00:00',
      end: 'March 4, 2020 16:00:00',
    },
    midterm: {
      start: 'จัดสอบเอง',
      end: 'จัดสอบเอง',
    },
    final: {
      start: 'จัดสอบเอง',
      end: 'จัดสอบเอง',
    },
    type: 'Lab',
  },
  {
    id: '01076009',
    name: 'COMPUTER ORGANIZATION AND ASSEMBLY LANGUAGE',
    category: '010',
    sec: 2,
    credit: 4,
    day: 2,
    note: 'รับเฉพาะกู',
    teachers: ['ผศ.ดร.สุรินทร์ กิตติธรกุล'],
    class: {
      start: 'March 2, 2020 08:45:00',
      end: 'March 2, 2020 12:00:00',
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
  },
  {
    id: '01076009',
    name: 'COMPUTER ORGANIZATION AND ASSEMBLY LANGUAGE',
    category: '010',
    sec: 102,
    credit: 4,
    day: 2,
    note: 'รับเฉพาะกู',
    teachers: ['ผศ.ดร.สุรินทร์ กิตติธรกุล'],
    class: {
      start: 'March 2, 2020 13:00:00',
      end: 'March 2, 2020 16:00:00',
    },
    midterm: {
      start: 'จัดสอบเอง',
      end: 'จัดสอบเอง',
    },
    final: {
      start: 'จัดสอบเอง',
      end: 'จัดสอบเอง',
    },
    type: 'Lab',
  },
  {
    id: '01076009',
    name: 'COMPUTER ORGANIZATION AND ASSEMBLY LANGUAGE',
    category: '010',
    sec: 3,
    credit: 4,
    day: 3,
    note: 'รับเฉพาะกู',
    teachers: ['ผศ.ดร.สุรินทร์ กิตติธรกุล'],
    class: {
      start: 'March 3, 2020 08:45:00',
      end: 'March 3, 2020 12:00:00',
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
  },
  {
    id: '01076009',
    name: 'COMPUTER ORGANIZATION AND ASSEMBLY LANGUAGE',
    category: '010',
    sec: 103,
    credit: 4,
    day: 3,
    note: 'รับเฉพาะกู',
    teachers: ['ผศ.ดร.สุรินทร์ กิตติธรกุล'],
    class: {
      start: 'March 3, 2020 13:00:00',
      end: 'March 3, 2020 16:00:00',
    },
    midterm: {
      start: 'จัดสอบเอง',
      end: 'จัดสอบเอง',
    },
    final: {
      start: 'จัดสอบเอง',
      end: 'จัดสอบเอง',
    },
    type: 'Lab',
  },
];

const Table = () => {
  const [classId, setClassId] = useState('');
  const [subjects, setSubjects] = useState([]);

  return (
    <div>
      <table className="mx-auto w-9/12 text-center font-medium ">
        <tr className="rounded">
          <th className="border-zinc-300 p-3 bg-orange-200 text-orange-500">รหัสวิชา</th>
          <th className="border-zinc-300 p-3 bg-orange-200 text-orange-500">ชื่อวิชา</th>
          <th className="p-3 bg-orange-200 text-orange-500">หน่วยกิต</th>
          <th className="p-3 bg-orange-200 text-orange-500">กลุ่ม</th>
          <th className="p-3 bg-orange-200 text-orange-500">เวลาเรียน</th>
        </tr>
        {subjects.map(subject => (
          <tr className="hover:bg-zinc-100">
            <td className="p-3">{subject.id}</td>
            <td className="p-3 max-w-xs">{subject.name}</td>
            <td className="p-3">{subject.credit}</td>
            <td className="p-3">{subject.sec}</td>
            <td className="p-3">Monday 9:30 - 12:30</td>
          </tr>
        ))}
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
                if (e.key == 'Enter') {
                  const res = data.filter(item => {
                    return item.id == classId;
                  });
                  setSubjects([...subjects.concat(res)]);
                  setClassId('');
                }
              }}
            />
          </td>
          <td className="p-3"></td>
          <td className="p-3"></td>
          <td className="p-3"></td>
          <td className="p-3"></td>
        </tr>
      </table>
    </div>
  );
};

export default Table;
