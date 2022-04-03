import React from 'react';
import Navbar from '../../components/Navbar';
import { useState } from 'react';
import './blogreview.css';
import likeIcon from './like.svg';
import dislikeIcon from './dislike.svg';

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

const ShowReview = ({ subject_id, subject_name, img, reviewer_name, date, text, star, like }) => (
  <div className="review__box">
    <div className="review__type">
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
        <p>{text}</p>
      </div>
      <div className="review__like">{like}</div>
    </div>
  </div>
);

const BlogReview = () => {
  return (
    <div>
      <div className='main'>
        <ShowReview
          subject_name="ENGLISH FROM ENTERTAINMENT MEDIA"
          subject_id="90201039"
          img="https://media.discordapp.net/attachments/910957790992941129/956834086184423444/Pngtreeman_laugh_icon_3732075.png?width=676&height=676"
          reviewer_name="Thanakorn"
          date="19 Mar 2022"
          star="https://media.discordapp.net/attachments/936258296136990743/956858765297192980/5.png?width=1440&height=350"
          text="เป็นวิชาที่น่าเรียนมากๆ อาจารย์น่ารักมีให้
              ร้องเพลงอิ๊งกับแสดงละครเป็นกลุ่มไม่มีการบ้าน 
              แต่อาจารย์ชอบเรียกถาม แต่ก็น่าจะไม่มีเช็คชื่อ"
          like={<LikeDislike />}
        />
        <ShowReview
          subject_name="ENGLISH FROM ENTERTAINMENT MEDIA"
          subject_id="90201039"
          img="https://media.discordapp.net/attachments/910957790992941129/956834086184423444/Pngtreeman_laugh_icon_3732075.png?width=676&height=676"
          reviewer_name="Thanakorn"
          date="19 Mar 2022"
          star="https://media.discordapp.net/attachments/936258296136990743/956858765297192980/5.png?width=1440&height=350"
          text="เป็นวิชาที่น่าเรียนมากๆ อาจารย์น่ารักมีให้
              ร้องเพลงอิ๊งกับแสดงละครเป็นกลุ่มไม่มีการบ้าน 
              แต่อาจารย์ชอบเรียกถาม แต่ก็น่าจะไม่มีเช็คชื่อ"
          like={<LikeDislike />}
        />
        <ShowReview
          subject_name="ENGLISH FROM ENTERTAINMENT MEDIA"
          subject_id="90201039"
          img="https://media.discordapp.net/attachments/910957790992941129/956834086184423444/Pngtreeman_laugh_icon_3732075.png?width=676&height=676"
          reviewer_name="Thanakorn"
          date="19 Mar 2022"
          star="https://media.discordapp.net/attachments/936258296136990743/956858765297192980/5.png?width=1440&height=350"
          text="เป็นวิชาที่น่าเรียนมากๆ อาจารย์น่ารักมีให้
              ร้องเพลงอิ๊งกับแสดงละครเป็นกลุ่มไม่มีการบ้าน 
              แต่อาจารย์ชอบเรียกถาม แต่ก็น่าจะไม่มีเช็คชื่อ"
          like={<LikeDislike />}
        />
        <ShowReview
          subject_name="Calculus 1"
          subject_id="90201039"
          img="https://media.discordapp.net/attachments/910957790992941129/956834086184423444/Pngtreeman_laugh_icon_3732075.png?width=676&height=676"
          reviewer_name="Thanakorn"
          date="19 Mar 2022"
          star="https://media.discordapp.net/attachments/936258296136990743/956858765297192980/5.png?width=1440&height=350"
          text="เป็นวิชาที่น่าเรียนมากๆ อาจารย์น่ารักมีให้
              ร้องเพลงอิ๊งกับแสดงละครเป็นกลุ่มไม่มีการบ้าน 
              แต่อาจารย์ชอบเรียกถาม แต่ก็น่าจะไม่มีเช็คชื่อ"
          like={<LikeDislike />}
        />
      </div>
    </div>
  );
};

export default BlogReview;
