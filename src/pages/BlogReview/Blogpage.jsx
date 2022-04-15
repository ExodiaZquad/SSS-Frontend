import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { FaCaretDown } from 'react-icons/fa';
import { FaSistrix } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import ShowReview from '../../components/ShowReview';
import config from '../../config';
import { getToken, getUserObjId } from '../../services/authService';
import ReCAPTCHA from 'react-google-recaptcha';

const Blogpage = () => {
  const { id: userId } = getUserObjId();

  const [selected, setSelected] = useState('Subject Major filter');
  const [modalOpen, setModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  // console.log(currentPage);
  const [postsPerPage] = useState(10);
  const [search, setSearch] = useState('');
  const [newReview, setNewReview] = useState({
    subjectId: '',
    textBlogreview: '',
    rate: 1,
  });

  const [reviews, setReviews] = useState([]);
  // console.log(reviews);

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
    try {
      const token = getToken();
      const res = await axios.post(config.API_URL + '/blogreviews', newReview, {
        headers: { 'x-auth-token': token },
      });

      // if (res) console.log(res.data);

      setModalOpen(false);
      getReviews();
      alert('Post Completed!!!');
    } catch (error) {
      alert('Subject Id not found.');
      return null;
    }
  };

  const getReviews = async () => {
    const token = getToken();
    const res = await axios.get('http://localhost:3005/api/blogreviews/', {
      headers: { 'x-auth-token': token },
    });

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
    const filterSubjectName = filter.filter(review => review.subjectName.toLowerCase().includes(search.toLowerCase()));
    filter = [...new Set([...filterSubjectNum, ...filterSubjectName])];
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
  const paginate = pageNumber => setCurrentPage(pageNumber);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filter.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="Review-container overflow-y-hidden">
      <div className="Blog-contain">
        <div className="Blog-header">Blog Review</div>
        <div className="Blog-function">
          <Dropdown selected={selected} setSelected={setSelected} setCurrentPage={setCurrentPage} />
          <div className="search-post">
            <Searchbar search={search} setSearch={setSearch} setCurrentPage={setCurrentPage} />
            <button
              className="openModalBtn shadow-md hover:bg-[#ff7957] active:bg-[#ff8357]/[0.5]"
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
              newReview={newReview}
            />
          )}
        </div>
      </div>

      <div className="Blog-contain ">
        <div className="review__grid--column px-[40px]">
          <div className="sort-subject">
            <h1>Subject</h1>
            <i>
              <FaCaretDown size={20} />
            </i>
          </div>
          <div className="sort-date">
            <h1>Reviewer</h1>
            <i>
              <FaCaretDown size={20} />
            </i>
          </div>
          <div className="sort-review">
            <h1>Review</h1>
            <i>
              <FaCaretDown size={20} />
            </i>
          </div>
          <div className="sort-like">
            <h1>Like</h1>
            <i>
              <FaCaretDown size={20} />
            </i>
          </div>
        </div>
        <hr className="line-sort" />
        <div className="">
          {currentPosts.map((review, index) => {
            return (
              <ShowReview
                key={index}
                objId={review._id}
                subject_name={review.subjectName}
                subject_id={review.subjectId}
                img={review.imageUrl}
                reviewer_name={review.userName_Blogreview}
                date={transformDate(review.date)}
                rate={review.rate}
                star="https://media.discordapp.net/attachments/936258296136990743/956858765297192980/5.png?width=1440&height=350"
                text={review.textBlogreview}
                userId_Like={review.userId_Like}
                userId_Dislike={review.userId_Dislike}
                getReviews={getReviews}
                userId={userId}
              />
            );
          })}
          <div className="blog-pagination">
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={filter.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

function Dropdown({ selected, setSelected, setCurrentPage }) {
  const [isActive, setIsActive] = useState(false);
  const options = ['All', '901', '902', '903', '904', '905'];
  return (
    <div className="dropdown relative z-50">
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
                setCurrentPage(1);
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
function Searchbar({ search, setSearch, setCurrentPage }) {
  const searchWord = word => {
    setSearch(word);
    setCurrentPage(1);
  };
  return (
    <div className="search-bar shadow-md">
      <i>
        <FaSistrix />
      </i>
      <input type="text" placeholder="search" onChange={e => searchWord(e.currentTarget.value)} className="py-2" />
    </div>
  );
}
function Modal({ setOpenModal, rate, setRate, submitReview, handleNewReview, newReview }) {
  const [passCaptcha, setPassCaptcha] = useState(false);
  const { subjectId, textBlogreview } = newReview;
  console.log(newReview);

  function onChange(value) {
    // console.log('Captcha value:', value);
    setPassCaptcha(true);
  }

  return (
    <div className="w-screen h-screen fixed top-0 left-0 flex justify-center items-center z-50">
      <div
        className="w-screen h-screen absolute top-0 left-0 bg-black/70 cursor-pointer"
        onClick={() => setOpenModal(false)}
      ></div>

      {/*  px-16 py-14 */}
      <div className="bg-white pt-14 pb-10 px-16 absolute rounded-lg shadow-lg relative">
        <div className="flex justify-between">
          <div className="text-3xl font-bold pb-8 ">Post Review</div>

          <div className="">
            {/* <img src={close} alt="" className="w-11 cursor-pointer" onClick={() => setOpenModal(false)} /> */}
            <AiOutlineCloseCircle
              className="text-3xl rounded-full cursor-pointer  hover:text-[#ff8357] active:text-[#ff8357]/[0.5]"
              onClick={() => setOpenModal(false)}
            />
          </div>
        </div>

        <div className="h-[1px] bg-[#E3E9EF] absolute w-full left-0"></div>

        <div className="pt-8">
          <div className="mb-5">
            <h1 className="text-xl font-semibold mb-2">
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
            <h1 className="text-xl font-semibold mb-2">
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

          <div className="flex justify-between">
            <Star rate={rate} setRate={setRate} />
            <ReCAPTCHA sitekey="6LcRF_UdAAAAAPV35EbgUVJoz-SGy2MyqpcR3DcZ" onChange={onChange} />
          </div>

          <div className="flex justify-center mt-8">
            {passCaptcha && textBlogreview.length <= 250 && subjectId && textBlogreview ? (
              <div
                className="bg-blue-300 px-6 py-3 rounded-full select-none cursor-pointer active:bg-blue-500 hover:bg-blue-400"
                onClick={submitReview}
              >
                Confirm
              </div>
            ) : (
              <div className="bg-black/30 text-white shadow-md px-6 py-3 rounded-full select-none cursor-default">
                Confirm
              </div>
            )}
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
      <h1 className="text-xl font-semibold mb-2">Rate</h1>
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
const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination justify-end">
      {pageNumbers.map(number => (
        <div key={number} className="page-item">
          <div
            onClick={() => paginate(number)}
            href="!#"
            className={
              'page-link text-white shadow-md ' +
              (number === currentPage ? 'bg-[#ff8357] hover:bg-[#ff7957]' : ' bg-white text-black hover:bg-[#d6d6d6]')
            }
          >
            {number}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blogpage;
