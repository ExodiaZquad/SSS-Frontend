import React from 'react';

const Table = () => {
  return (
    <div>
      <table className="mx-auto">
        <tr className="rounded">
          <th className="border-[1px] border-solid border-zinc-300 p-3 bg-orange-200 text-orange-500">รหัสวิชา</th>
          <th className="border-[1px] border-solid border-zinc-300 p-3 bg-orange-200 text-orange-500">ชื่อวิชา</th>
          <th className="border-[1px] p-3 bg-orange-200 text-orange-500">หน่วยกิต</th>
          <th className="border-[1px] p-3 bg-orange-200 text-orange-500">กลุ่ม</th>
          <th className="border-[1px] p-3 bg-orange-200 text-orange-500">เวลาเรียน</th>
        </tr>
        <tr className="hover:bg-zinc-100">
          <td className="border-[1px] p-3">01076008</td>
          <td className="border-[1px] p-3">SOFTWARE DEVELOPMENT PROCESS</td>
          <td className="border-[1px] p-3">3</td>
          <td className="border-[1px] p-3">101</td>
          <td className="border-[1px] p-3">Monday 9:30 - 12:30</td>
        </tr>
        <tr className="hover:bg-zinc-100">
          <td className="border-2">
            <input
              type="text"
              className="rounded py-2 pl-2 w-full font-bold bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-orange-200"
            />
          </td>
          <td className="border-2 p-3"></td>
          <td className="border-2 p-3"></td>
          <td className="border-2 p-3"></td>
          <td className="border-2 p-3"></td>
        </tr>
        <tr>
          <td className="border-2 p-3"></td>
          <td className="border-2 p-3"></td>
          <td className="border-2 p-3"></td>
          <td className="border-2 p-3"></td>
          <td className="border-2 p-3"></td>
        </tr>
        <tr>
          <td className="border-2 p-3"></td>
          <td className="border-2 p-3"></td>
          <td className="border-2 p-3"></td>
          <td className="border-2 p-3"></td>
          <td className="border-2 p-3"></td>
        </tr>
      </table>
    </div>
  );
};

export default Table;
