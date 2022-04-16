import React, { useState, useRef, useEffect } from 'react';
import { getToken } from '../../services/authService';
import { AiFillHeart } from 'react-icons/ai';
import { BsSquareFill } from 'react-icons/bs';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { isEmpty, isEqual, set, xorWith } from 'lodash';
import axios from 'axios';
import './index.css';

const Schedule = ({ data, onGenerate, autoFill = false }) => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const colors = [
    '#8985A6',
    '#6CA4A6',
    '#FF8E8A',
    '#B9F2B6',
    '#FAC998',
    '#C98667',
    '#8CD1BA',
    '#9ED1D9',
    '#A68F86',
    '#FBBCCF',
    '#A35D61',
    '#A6BDDE',
  ];
  const [fav, setFav] = useState(false);
  const runcolor = useRef(0);

  /* Like Dislike Schdule */

  const [userFavSchedules, setUserFavSchdules] = useState([]);

  const onLike = async () => {
    try {
      const token = getToken();

      const res = await axios.put(
        'http://localhost:3005/api/users/like_schedule',
        { new_fav: data },
        {
          headers: { 'x-auth-token': token },
        },
      );

      if (autoFill) onGenerate();
      mapCheckFav();
    } catch (error) {
      if (error.response && error.response.status == 400 && error.response.data == 'isSame') {
        console.log(error.response);
      }
    }
  };

  const getFavSchedules = async () => {
    const token = getToken();
    const { data } = await axios.get('http://localhost:3005/api/users/profile', {
      headers: { 'x-auth-token': token },
    });

    setUserFavSchdules(data.favSchedule);
    return data.favSchedule;
  };

  const mapCheckFav = async () => {
    console.log('TEST');
    const favSchedules = await getFavSchedules();
    setFav(undefined);
    for (let i = 0; i < favSchedules.length; i++) {
      const hasFav = isEmpty(xorWith(favSchedules[i].array, data, isEqual));
      if (hasFav) {
        setFav(true);
        return;
      }
    }

    setFav(false);
  };

  useEffect(() => {
    mapCheckFav();
  }, []);

  /********************** */

  const dateReviver = function (value) {
    return new Date(value);
  };
  const hyperhour = date => {
    if (date.getMinutes() >= 30) {
      return date.getHours() + 1;
    }
    return date.getHours();
  };

  const isLike = () => {
    setFav(!fav);
  };

  const nextColor = () => {
    runcolor.current += 1;
    runcolor.current = runcolor.current % 12;
    // console.log(runcolor.current);
  };
  const reColor = () => {
    runcolor.current = 0;
  };

  let alldate = [];
  let allhour = [];
  //get day,hour of data
  data.map((fak, index) => {
    alldate.push(dateReviver(fak.class.start).getDay());
    alldate.push(dateReviver(fak.class.end).getDay());

    let st = hyperhour(dateReviver(fak.class.start));
    let ed = hyperhour(dateReviver(fak.class.end));
    allhour.push(st);
    allhour.push(ed);
  });
  // console.log(alldate, allhour);

  let bars_temp = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];
  let start_point = [[], [], [], [], []];
  for (let i = 0; i < alldate.length; i++) {
    //plus 1 at index that start class and end class (box)
    bars_temp[alldate[i] - 1][allhour[i] - 8] += 1;
  }
  for (let i = 0; i < alldate.length; i += 2) {
    //collect start point what box is start
    start_point[alldate[i] - 1].push(allhour[i] - 8);
  }
  for (let i = 0; i < start_point.length; i += 1) {
    //startPoint
    start_point[i].sort(function (a, b) {
      return a - b;
    });
  }
  // console.log('start point(index) = ', start_point);
  // console.log('bars_temp = ', bars_temp);

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
  // console.log('bars = ', bars);

  //ColorZone
  reColor();
  let subjects = [];
  let subjects_name_sort = [];
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < start_point[i].length; j++)
      data.map(fak => {
        if (
          dateReviver(fak.class.start).getDay() - 1 == i &&
          hyperhour(dateReviver(fak.class.start)) == start_point[i][j] + 8
        ) {
          subjects.push(fak);
          subjects_name_sort.push(fak.name);
        }
      });
  }
  // console.log(subjects, subjects_name_sort);

  return (
    // <div className="sch_box-shadow mt-7">
    <div className="sch_box mb-10">
      <div className="sch_headbox">
        {fav || autoFill ? (
          <FaHeart color="red" size="2em" className="sch_like" onClick={onLike} />
        ) : (
          <FaRegHeart size="2em" className="sch_like" onClick={onLike} />
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
                return <div key={indey} className={'sch_barbox-act sch_barbox-act' + String(runcolor.current)}></div>;
              } else {
                return <div key={indey} className="sch_barbox-act sch_barbox-nact"></div>;
              }
            })}
          </div>
        </div>
      ))}

      <div className="sch_tailbox">
        {subjects.map((s, index) => (
          <div key={index} className="sch_each-detail mr-3">
            <BsSquareFill color={String(colors[index])} className="mr-1 text-[12px]" />
            {s.name + ' (' + s.type + ' ' + s.sec + ')'}
          </div>
        ))}
      </div>
    </div>
    // </div>
  );
};

export default Schedule;
