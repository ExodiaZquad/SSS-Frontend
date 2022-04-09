import React from 'react';
import Table from '../../components/Table';
import Schedule from '../../components/Schedule';

const ScheduleGenerator = () => {
  const data = [
    {
      id: '01076008',
      name: 'SOFTWARE',
      category: '010',
      sec: 1,
      credit: 4,
      day: 2,
      note: 'รับเฉพาะกู',
      teachers: ['ผศ.ดร.รัฐชัย ชาวอุทัย'],
      class: {
        start: 'March 2, 2020 15:00:00',
        end: 'March 2, 2020 18:15:00',
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
      name: 'SOFTWARE',
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
        end: 'March 4, 2020 11:00:00',
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
        start: 'March 4, 2020 14:00:00',
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
        end: 'March 3, 2020 17:00:00',
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
      id: '01076254',
      name: 'PROBABILITY AND STATISTICS',
      category: '010',
      sec: 1,
      credit: 3,
      day: 5,
      note: 'รับเฉพาะกู',
      teachers: ['รศ.ดร.ศักดิ์ชัย ทิพย์จักษุรัตน์'],
      class: {
        start: 'March 6, 2020 10:45:00',
        end: 'March 6, 2020 13:00:00',
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
  ];

  return (
    <div>
      <div className="max-w-screen-2xl mx-auto flex flex-col justify-center">
        <h1 className="mt-14 font-bold text-3xl">Schedule Generator</h1>
        <Table />
        <h2 className="text-center font-bold">หน่วยกิตทั้งหมด {12}</h2>
        <div className="flex justify-center items-center mt-7">
          <button className="bg-blue-500 py-3 px-7 rounded-lg text-white hover:brightness-105">Generate</button>
        </div>
        <Schedule data={data} />
      </div>
    </div>
  );
};

export default ScheduleGenerator;
