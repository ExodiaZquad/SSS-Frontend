import React from 'react';
import './blogreview.css';
import likeIcon from '../../assets/icons/like.svg';
import dislikeIcon from '../../assets/icons/dislike.svg';
import { useState } from 'react';

const LikeDislike = () => {
  const [like, setlike] = useState(0); //like
  const [dislike, setdislike] = useState(0); //dislike
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

const ShowReview = ({ subject_id, subject_name, img, reviewer_name, date, text, star }) => {
  return (
    <div className="review__box">
      <div className="review__type review__grid--column">
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
            <img src={star} alt="" />
          </div>
          <p className="overflow-auto h-20">{text}</p>
        </div>
        <div className="review__like">
          <LikeDislike />
        </div>
      </div>
    </div>
  );
};

export default ShowReview;
