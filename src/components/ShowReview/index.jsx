import React, { useEffect } from 'react';
import { getToken } from '../../services/authService';

import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { FaRegStar } from 'react-icons/fa';
import { FaTrashAlt } from 'react-icons/fa';

import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';
import { AiFillDislike } from 'react-icons/ai';
import { AiOutlineDislike } from 'react-icons/ai';

import axios from 'axios';
import './blogreview.css';
import { useLocation } from 'react-router-dom';

const LikeDislike = ({ objId, userId_Like, userId_Dislike, userId, getReviews }) => {
  const [likeactive, setlikeactive] = useState(false); //likeactive
  const [dislikeactive, setdislikeactive] = useState(false); //dislikeactive

  const isLiked = userId_Like.includes(userId);
  const isDisLiked = userId_Dislike.includes(userId);

  useEffect(() => {
    if (isLiked) setlikeactive(true);
    if (isDisLiked) setdislikeactive(true);
  }, []);

  const toggleLike = () => {
    if (likeactive) {
      setlikeactive(false);
    } else {
      setlikeactive(true);
      if (dislikeactive) {
        setdislikeactive(false);
      }
    }
  };

  const toggleDislike = () => {
    if (dislikeactive) {
      setdislikeactive(false);
    } else {
      setdislikeactive(true);
      if (likeactive) {
        setlikeactive(false);
      }
    }
  };

  const onLike = async () => {
    const token = getToken();
    await axios.put(
      'http://localhost:3005/api/blogreviews/like',
      { target_id: objId },
      {
        headers: { 'x-auth-token': token },
      },
    );

    await getReviews();
    // toggleLike();
  };

  const onDisLike = async () => {
    const token = getToken();
    await axios.put(
      'http://localhost:3005/api/blogreviews/dislike',
      { target_id: objId },
      {
        headers: { 'x-auth-token': token },
      },
    );

    await getReviews();
    // toggleDislike();
  };

  return (
    <div className="review_button">
      <button onClick={onLike} className={userId_Like.includes(userId) ? 'active_like' : 'btn-like'}>
        <span className="mr-2">{userId_Like.includes(userId) ? <AiFillHeart /> : <AiOutlineHeart />}</span>
        <div className="btn_like">{userId_Like.length}</div>
      </button>
      <button onClick={onDisLike} className={userId_Dislike.includes(userId) ? 'active_like' : 'btn-like'}>
        <span className="mr-2">{userId_Dislike.includes(userId) ? <AiFillDislike /> : <AiOutlineDislike />}</span>
        <div className="btn_like">{userId_Dislike.length}</div>
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
    <div
      className="absolute bottom-5 right-7 bg-[#FF5349] p-2 rounded shadow-md cursor-pointer hover:bg-[#e50f0f] active:bg-[#FF5349]"
      onClick={onDelete}
    >
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
}) => {
  const colorStar = Array.from(Array(rate).keys());
  const lineStar = Array.from(Array(5 - rate).keys());
  const location = useLocation();

  return (
    <div className="review__box">
      <div className="review__type review__grid--column relative shadow-md">
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
          <div dangerouslySetInnerHTML={{ __html: text }} className="overflow-auto h-20 whitespace-normal" />
        </div>
        <div className="review__like">
          <LikeDislike
            objId={objId}
            userId_Like={userId_Like}
            userId_Dislike={userId_Dislike}
            userId={userId}
            getReviews={getReviews}
          />
        </div>

        {location.pathname === '/profile' && <DeleteBtn objId={objId} getReviews={getReviews} />}
      </div>
    </div>
  );
};

export default ShowReview;
