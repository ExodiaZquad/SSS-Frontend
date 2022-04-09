import React, { useState, useRef } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { BsSquareFill } from 'react-icons/bs';
import './index.css';
import fake from './testData.json';

const Schedule = () => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const colors = [
    '#19afd0',
    '#6967ce',
    '#ffb900',
    '#fd636b',
    '#8ad879',
    '#a5e1e9',
    '#d5edb9',
    '#c4bdf3',
    '#fce8a5',
    '#ffc296',
    '#f8cadc',
    '#3ae8b0',
  ];
  const [fav, setFav] = useState(false);
  const runcolor = useRef(0);
  const dateReviver = function (value) {
    return new Date(value);
  };
  const isLike = () => {
    setFav(!fav);
  };
  const nextColor = () => {
    runcolor.current += 1;
    runcolor.current = runcolor.current % 12;
    console.log(runcolor.current);
  };
  const reColor = () => {
    runcolor.current = 0;
  };

  let alldate = [];
  let allhour = [];
  //get day,hour of data
  fake.map((fak, index) => {
    alldate.push(dateReviver(fak.class.start).getDay());
    alldate.push(dateReviver(fak.class.end).getDay());

    allhour.push(dateReviver(fak.class.start).getHours());
    allhour.push(dateReviver(fak.class.end).getHours());
  });
  console.log(alldate, allhour);

  let bars_temp = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];
  let start_point = [[], [], [], [], []];
  for (let i = 0; i < alldate.length; i++) {
    //if number is already 1 next index will be plus 1
    bars_temp[alldate[i] - 1][allhour[i] - 8] += 1;
  }
  for (let i = 0; i < alldate.length; i += 2) {
    //collect start point what box is start
    start_point[alldate[i] - 1].push(allhour[i] - 8);
  }
  console.log('start point(index) = ', start_point);
  console.log('bars_temp = ', bars_temp);

  let bars = [];
  for (let i = 0; i < bars_temp.length; i++) {
    let toggle = false;
    let between1 = [];
    for (let j = 0; j < bars_temp[i].length; j++) {
      if (bars_temp[i][j] === 1) {
        toggle = !toggle;
      }
      between1.push(toggle);
    }
    bars.push(between1);
    // console.log(between1);
  }
  console.log('bars = ', bars);

  //ColorZone
  reColor();
  let subjects = [];
  let subjects_name_sort = [];
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < start_point[i].length; j++)
      fake.map(fak => {
        if (
          dateReviver(fak.class.start).getDay() - 1 == i &&
          dateReviver(fak.class.start).getHours() == start_point[i][j] + 8
        ) {
          subjects.push(fak);
          subjects_name_sort.push(fak.name);
        }
      });
  }
  console.log(subjects, subjects_name_sort);

  return (
    <div className="sch_box-shadow">
      <div className="sch_box">
        <div className="sch_headbox">
          {fav ? (
            <AiFillHeart color="red" size="2.5em" className="sch_like" onClick={isLike} />
          ) : (
            <AiFillHeart color="gray" size="2.5em" className="sch_like" onClick={isLike} />
          )}
        </div>
        <div className="sch_body">
          <div></div>
          <div className="sch_hourbox">
            {/* <div className="sch_eachhour"></div> */}
            {(() => {
              let posts = [];
              for (let i = 0; i < 13; i++) {
                posts.push(
                  <div key={i} className="sch_eachhour">
                    {i + 8}
                  </div>,
                );
              }
              return posts;
            })()}
          </div>
        </div>

        {days.map((day, index) => (
          <div key={index} className="sch_body">
            <div className="sch_daybox">{day}</div>
            <div className="sch_barbox">
              {bars[index].map((bar, indey) => {
                for (let i = 0; i < start_point[index].length; i++) {
                  if (indey == start_point[index][i]) {
                    nextColor();
                  }
                }
                if (bar) {
                  return <div key={indey} className={'sch_barbox-act' + String(runcolor.current)}></div>;
                } else {
                  return <div key={indey} className="sch_barbox-nact"></div>;
                }
              })}
            </div>
          </div>
        ))}
        <div className="sch_body">
          <div></div>
          <div className="sch_tailbox">
            {subjects_name_sort.map((s, index) => (
              <div key={index} className="sch_each-detail">
                <BsSquareFill color={String(colors[index])} size="1.2em" />
                {s}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
