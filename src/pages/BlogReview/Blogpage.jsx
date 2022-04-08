import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { FaCaretDown } from 'react-icons/fa';
import { FaSistrix } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';
import ShowReview from '../../components/ShowReview';
import config from '../../config';
import { getToken } from '../../services/authService';

const Blogpage = () => {
  const [selected, setSelected] = useState('Subject Major filter');
  const [modalOpen, setModalOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [newReview, setNewReview] = useState({
    subjectId: '',
    textBlogreview: '',
    rate: 0,
  });

  const [reviews, setReviews] = useState([]);

  const handleNewReview = ({ currentTarget: target }) => {
    let temp = { ...newReview };
    temp[target.name] = target.value;
    setNewReview(temp);
  };

  const setRate = value => {
    let temp = { ...newReview };
    temp.rate = value;
    setNewReview(temp);
  };

  const submitReview = async () => {
    const token = getToken();
    const res = await axios.post(config.API_URL + '/blogreviews', newReview, {
      headers: { 'x-auth-token': token },
    });

    if (res) console.log(res.data);

    setModalOpen(false);
    alert('Auan tum kuay rai i sus !?');
  };

  const getReviews = async () => {
    const token = getToken();
    const res = await axios.get('http://localhost:3005/api/blogreviews/', {
      headers: { 'x-auth-token': token },
    });

    // console.log(res.data);
    setReviews(res.data);
  };

  useEffect(() => {
    getReviews();
  }, []);

  const transformDate = date => {
    return date.slice(0, 10);
  };

  let filter = reviews;
  if (search) {
    const filterSubjectNum = filter.filter(review => review.subjectId.toString().includes(search));
    filter = [...new Set([...filterSubjectNum])];
  }
  if (selected) {
    const subjectMajorFilter = filter.filter(review => {
      if (selected === 'All' || selected === 'Subject Major filter') {
        return review;
      } else {
        return review.subjectId.toString().includes(selected);
      }
    });
    filter = [...new Set([...subjectMajorFilter])];
  }

  return (
    <div className="Review-container">
      <div className="Blog-contain">
        <div className="Blog-header">Blog Review</div>
        <div className="Blog-function">
          <Dropdown selected={selected} setSelected={setSelected} />
          <div className="search-post">
            <Searchbar search={search} setSearch={setSearch} />
            <button
              className="openModalBtn"
              onClick={() => {
                setModalOpen(true);
              }}
            >
              Post +
            </button>
          </div>

          {modalOpen && (
            <Modal
              setOpenModal={setModalOpen}
              rate={newReview.rate}
              setRate={setRate}
              submitReview={submitReview}
              handleNewReview={handleNewReview}
            />
          )}
        </div>
      </div>

      <div className="Blog-contain ">
        <div className="review__grid--column px-[40px]">
          <h1 className="">Subject</h1>
          <h1>Date</h1>
          <h1>Review</h1>
          <h1 className="flex justify-center">Like</h1>
        </div>
        <div className="h-[68vh] overflow-auto mt-3">
          {filter.map((review, index) => {
            return (
              <ShowReview
                key={index}
                subject_name={'ENGLISH FROM ENTERTAINMENT MEDIA'}
                subject_id={review.subjectId}
                img="https://media.discordapp.net/attachments/910957790992941129/956834086184423444/Pngtreeman_laugh_icon_3732075.png?width=676&height=676"
                reviewer_name="Thanakorn"
                date={transformDate(review.date)}
                star="https://media.discordapp.net/attachments/936258296136990743/956858765297192980/5.png?width=1440&height=350"
                text={review.textBlogreview}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

function Dropdown({ selected, setSelected }) {
  const [isActive, setIsActive] = useState(false);
  const options = ['All', '901', '902', '903', '904', '905'];
  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={e => setIsActive(!isActive)}>
        {selected}
        <i>
          <FaCaretDown color="orange" size={20} />
        </i>
      </div>
      {isActive && (
        <div className="dropdown-content">
          {options.map(option => (
            <div
              onClick={e => {
                setSelected(option);
                setIsActive(false);
              }}
              className="dropdown-item"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
function Searchbar({ search, setSearch }) {
  const searchWord = word => {
    setSearch(word);
  };
  return (
    <div className="search-bar">
      <i>
        <FaSistrix />
      </i>
      <input type="text" placeholder="search" onChange={e => searchWord(e.currentTarget.value)} />
    </div>
  );
}
function Modal({ setOpenModal, rate, setRate, submitReview, handleNewReview }) {
  return (
    <div className="w-screen h-screen absolute top-0 left-0 flex justify-center items-center">
      <div
        className="w-screen h-screen absolute top-0 left-0 bg-black/70 cursor-pointer"
        onClick={() => setOpenModal(false)}
      ></div>
      <div className="bg-white px-16 py-14 absolute rounded-lg shadow-lg">
        <div className="mb-5">
          <h1 className="text-2xl font-bold mb-2">
            Subject ID<span className="text-red-500">*</span>
          </h1>
          <input
            name="subjectId"
            type="text"
            onChange={handleNewReview}
            className="text-lg px-4 py-2 border rounded"
            placeholder="รหัสวิชา"
            maxLength="8"
          />
        </div>

        <div className="mb-2">
          <h1 className="text-2xl font-bold mb-2">
            Detail<span className="text-red-500">*</span>
          </h1>
          <textarea
            name="textBlogreview"
            placeholder="รีวิววิชา"
            onChange={handleNewReview}
            className="p-4 w-[700px] h-80 border rounded text-lg resize-none"
            maxLength="250"
          ></textarea>
        </div>

        <Star rate={rate} setRate={setRate} />

        <div className="flex justify-center mt-6">
          <div
            className="bg-blue-300 px-6 py-3 rounded-full select-none cursor-pointer active:bg-blue-500"
            onClick={submitReview}
          >
            Confirm
          </div>
        </div>
      </div>
    </div>
  );
}
function Star({ rate: currentValue, setRate: setCurrentValue }) {
  // const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0);

  const handleClick = value => {
    setCurrentValue(value);
  };

  const handleMouseOver = newHoverValue => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  return (
    <div style={styles.container}>
      {/* <textarea placeholder="What's your experience?" style={styles.textarea} /> */}
      <h1 className="text-2xl font-bold mb-2">Rate</h1>
      <div style={styles.stars}>
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={24}
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
              color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
              style={{
                marginRight: 10,
                cursor: 'pointer',
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
const colors = {
  orange: '#FFBA5A',
  grey: '#a9a9a9',
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  stars: {
    display: 'flex',
    flexDirection: 'row',
  },
  textarea: {
    border: '1px solid #a9a9a9',
    padding: 10,
    borderRadius: 5,
    minHeight: 100,
    width: 300,
  },
  button: {
    border: '1px solid #a9a9a9',
    borderRadius: 5,
    width: 300,
    padding: 10,
  },
};

export default Blogpage;
