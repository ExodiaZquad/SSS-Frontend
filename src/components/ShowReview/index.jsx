import React, { useEffect } from 'react';
import { getToken } from '../../services/authService';
import likeIcon from '../../assets/icons/like.svg';
import dislikeIcon from '../../assets/icons/dislike.svg';
import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { FaRegStar } from 'react-icons/fa';
import { FaTrashAlt } from 'react-icons/fa';
import axios from 'axios';
import './blogreview.css';
import { useLocation } from 'react-router-dom';

const LikeDislike = ({ objId, userId_Like, userId_Dislike, userId, setReRender }) => {
  const [like, setlike] = useState(userId_Like.length); //like
  const [dislike, setdislike] = useState(userId_Dislike.length); //dislike
  const [likeactive, setlikeactive] = useState(false); //likeactive
  const [dislikeactive, setdislikeactive] = useState(false); //dislikeactive

  // console.log(userId_Like.includes(userId));
  console.log(userId_Like, userId_Dislike);

  const isLiked = userId_Like.includes(userId);
  const isDisLiked = userId_Dislike.includes(userId);

  //function Like
  const Like_on = () => {
    const token = getToken();
    const res = axios.put(
      'http://localhost:3005/api/blogreviews/like',
      { target_id: objId },
      {
        headers: { 'x-auth-token': token },
      },
    );

    // setReRender('xx');
    if (likeactive) {
      setlikeactive(false);
      setlike(like - 1);
    } else {
      setlikeactive(true);
      setlike(like + 1);
      if (dislikeactive) {
        setdislikeactive(false);
        setlike(like + 1);
        setdislike(dislike - 1);
      }
    }
  };
  //function Dislike
  const Dislike_on = () => {
    const token = getToken();
    const res = axios.put(
      'http://localhost:3005/api/blogreviews/dislike',
      { target_id: objId },
      {
        headers: { 'x-auth-token': token },
      },
    );

    if (dislikeactive) {
      setdislikeactive(false);
      setdislike(dislike - 1);
    } else {
      setdislikeactive(true);
      setdislike(like + 1);
      if (likeactive) {
        setlikeactive(false);
        setdislike(dislike + 1);
        setlike(like - 1);
      }
    }
  };

  useEffect(() => {
    if (isLiked) setlikeactive(true);

    if (isDisLiked) setdislikeactive(true);
  }, []);

  return (
    <div className="review_button">
      <button onClick={Like_on} className={likeactive ? 'active_like' : 'btn-like'}>
        <img src={likeIcon} alt="" className="img_btn" />
        <div className="btn_like">{like}</div>
      </button>
      <button onClick={Dislike_on} className={dislikeactive ? 'active_like' : 'btn-like'}>
        <img src={dislikeIcon} alt="" className="img_btn" />
        <div className="btn_like">{dislike}</div>
      </button>
    </div>
  );
};

const DeleteBtn = ({ objId, getReviews }) => {
  const onDelete = async () => {
    const token = getToken();

    const res = await axios.post(
      'http://localhost:3005/api/blogreviews/delete',
      { target_id: objId },
      {
        headers: { 'x-auth-token': token },
      },
    );

    alert('Delete on!!!');
    getReviews();
    console.log(res.data);
  };

  return (
    <div className="absolute bottom-5 right-7 bg-[#FF5349] p-2 rounded shadow-md cursor-pointer" onClick={onDelete}>
      <FaTrashAlt className="text-lg text-white" />
    </div>
  );
};

const ShowReview = ({
  subject_id,
  subject_name,
  img,
  reviewer_name,
  date,
  rate,
  text,
  star,
  userId_Like,
  userId_Dislike,
  objId,
  getReviews,
  userId,
  setReRender,
}) => {
  const colorStar = Array.from(Array(rate).keys());
  const lineStar = Array.from(Array(5 - rate).keys());
  const location = useLocation();

  return (
    <div className="review__box">
      <div className="review__type review__grid--column relative">
        <div className="review__sub">
          <div className="sub_name">
            <h2>{subject_name}</h2>
          </div>
          <div className="sub_num">
            <h2>{subject_id}</h2>
          </div>
        </div>
        <div className="review_reviewer">
          <div className="review__img">
            <img src={img} alt="" />
          </div>
          <div className="review__name_date">
            <div className="r_name">
              <h2>{reviewer_name}</h2>
            </div>
            <div className="r_date">
              <h2>{date}</h2>
            </div>
          </div>
        </div>
        <div className="review__text">
          <div className="review__star">
            <div className="flex mb-1">
              {colorStar.map(star => (
                <FaStar className="text-[#f27405] w-[18px]" />
              ))}
              {lineStar.map(star => (
                <FaRegStar className="text-[#d1d0d0] w-[18px]" />
              ))}
            </div>
          </div>
          <p className="overflow-auto h-20">{text}</p>
        </div>
        <div className="review__like">
          <LikeDislike
            objId={objId}
            userId_Like={userId_Like}
            userId_Dislike={userId_Dislike}
            userId={userId}
            setReRender={setReRender}
          />
        </div>

        {location.pathname === '/profile' && <DeleteBtn objId={objId} getReviews={getReviews} />}
      </div>
    </div>
  );
};

export default ShowReview;
