import React from 'react';
import { getToken } from '../../services/authService';
import likeIcon from '../../assets/icons/like.svg';
import dislikeIcon from '../../assets/icons/dislike.svg';
import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { FaRegStar } from 'react-icons/fa';
import { FaTrashAlt } from 'react-icons/fa';
import axios from 'axios';
import './blogreview.css';

const LikeDislike = ({ likeCount, dislikeCount }) => {
  const [like, setlike] = useState(likeCount); //like
  const [dislike, setdislike] = useState(dislikeCount); //dislike
  const [likeactive, setlikeactive] = useState(false); //likeactive
  const [dislikeactive, setdislikeactive] = useState(false); //dislikeactive

  //function Like
  const Like_on = () => {
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

const DeleteBtn = objId => {
  const onDelete = async () => {
    const token = getToken();
    console.log(objId.objId);
    const res = await axios.post(
      'http://localhost:3005/api/blogreviews/delete',
      { target_id: objId.objId },
      {
        headers: { 'x-auth-token': token },
      },
    );

    alert('Delete on!!!');
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
  likeCount,
  dislikeCount,
  objId,
}) => {
  const colorStar = Array.from(Array(rate).keys());
  const lineStar = Array.from(Array(5 - rate).keys());

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
          <LikeDislike likeCount={likeCount} dislikeCount={dislikeCount} />
        </div>

        <DeleteBtn objId={objId} />
      </div>
    </div>
  );
};

export default ShowReview;
