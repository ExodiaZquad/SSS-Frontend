import React from 'react';

const OutputTable = ({ subjects }) => {
  return (
    <div className="mt-4 mb-14">
      <table className="w-full text-center font-medium ">
        <tr className="rounded">
          <th className="border-zinc-300 p-3 bg-sky-200 text-sky-600 font-IBM">รหัสวิชา</th>
          <th className="border-zinc-300 p-3 bg-sky-200 text-sky-600 font-IBM">ชื่อวิชา</th>
          <th className="p-3 bg-sky-200 text-sky-600 font-IBM">หน่วยกิต</th>
          <th className="p-3 bg-sky-200 text-sky-600 w-[400px] font-IBM">กลุ่ม</th>
        </tr>
        {subjects.map(subject => {
          return (
            <TableRow
              id={subject.id}
              name={subject.name}
              credit={subject.credit}
              sec={subject.sec}
              hasLab={subject.hasLab}
            />
          );
        })}
      </table>
    </div>
  );
};

const TableRow = ({ id, name, credit, sec, hasLab }) => {
  const colors = ['bg-green-400', 'bg-red-400', 'bg-blue-400', 'bg-orange-400'];

  return (
    <>
      <tr className="hover:bg-zinc-100">
        <td className="p-3 border">{id}</td>
        <td className="p-3 max-w-xs border">{name}</td>
        <td className="p-3 border">{credit}</td>
        <td className="p-3 flex justify-start items-center border gap-4">
          {sec.map((secItem, index) => (
            <div className="py-1 px-2 rounded-lg shadow-md bg-white flex items-center gap-1">
              <div className={colors[index % 4] + ' rounded-full w-2 h-2'}></div>
              {secItem}
            </div>
          ))}
        </td>
      </tr>
    </>
  );
};

export default OutputTable;
