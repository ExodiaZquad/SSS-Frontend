import React from 'react';

const Table = () => {
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
        <tr className="hover:bg-zinc-100">
          <td className="p-3">01076008</td>
          <td className="p-3 max-w-xs">SOFTWARE DEVELOPMENT PROCESS</td>
          <td className="p-3">3</td>
          <td className="p-3">101</td>
          <td className="p-3">Monday 9:30 - 12:30</td>
        </tr>
        <tr className="hover:bg-zinc-100">
          <td className="p-3">01076009</td>
          <td className="p-3 max-w-xs">
            COMPUTER ORGANIZATION AND ASSEMBLY LANGUAGE AND SOME OTHER BULL SHIT HE SAID IN THE CLASS{' '}
          </td>
          <td className="p-3">4</td>
          <td className="p-3">101</td>
          <td className="p-3">Monday 9:30 - 12:30</td>
        </tr>
        <tr className="hover:bg-zinc-100">
          <td className="p-3">
            <input
              type="text"
              className="rounded border-none outline-none py-2 pl-2 w-1/2 h-3/4 font-medium bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-orange-200"
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
