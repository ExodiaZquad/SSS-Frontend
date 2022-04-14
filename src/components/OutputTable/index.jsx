import React, { useState, useEffect } from 'react';
import { VscTriangleDown, VscTriangleUp } from 'react-icons/vsc';
import axios from 'axios';

const OutputTable = ({ subjects }) => {
  return (
    <div className="mt-4 mb-14">
      <table className="w-full text-center font-medium ">
        <tr className="rounded">
          <th className="border-zinc-300 p-3 bg-orange-200 text-orange-500  w-[300px]">รหัสวิชา</th>
          <th className="border-zinc-300 p-3 bg-orange-200 text-orange-500">ชื่อวิชา</th>
          <th className="p-3 bg-orange-200 text-orange-500">หน่วยกิต</th>
          <th className="p-3 bg-orange-200 text-orange-500">ประเภท</th>
          <th className="p-3 bg-orange-200 text-orange-500">กลุ่ม</th>
        </tr>
        {subjects.map(subject => {
          return (
            <TableRow
              id={subject.id}
              name={subject.name}
              credit={subject.credit}
              type={subject.type}
              sec={subject.sec}
              hasLab={subject.hasLab}
            />
          );
        })}
      </table>
    </div>
  );
};

const TableRow = ({ id, name, credit, type, sec, hasLab }) => {
  return (
    <>
      <tr className="hover:bg-zinc-100">
        <td className="p-3 border">{id}</td>
        <td className="p-3 max-w-xs border">{name}</td>
        <td className="p-3 border">{credit}</td>
        <td className="p-3 border">{type}</td>
        <td className="p-3 flex justify-center items-center border">{sec}</td>
      </tr>
    </>
  );
};

export default OutputTable;
