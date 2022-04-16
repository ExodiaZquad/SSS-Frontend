import React, { useState, useEffect } from 'react';
import ShowReview from '../../components/ShowReview';
import { getToken, getUserObjId } from '../../services/authService';
import axios from 'axios';
import Schedule from '../Schedule';

const Tab = ({ label, count, index, tab, setTab }) => {
  const active = index == tab;
  const activeLabel = active ? 'text-[#0583F2]' : '';
  const activeLine = active
    ? "after:content-[' '] after:absolute after:w-full after:h-1 after:bg-[#0583F2] after:bottom-0 after:left-0"
    : '';

  return (
    <div className={activeLabel + ' cursor-pointer mr-5  pb-2 relative'} onClick={() => setTab(index)}>
      <div className={activeLine}>{label}</div>
      <div className="text-center">{count}</div>
    </div>
  );
};

const FavoriteSchedules = ({ favSchedule, getUserProfile }) => {
  return (
    <div>
      {favSchedule.map((schedule, index) => (
        <>
          <div className="text-xl mb-3 bg-[#FF837E] text-white w-fit px-5 py-2 rounded-xl shadow-md">
            Favorite Schedule {index + 1}
          </div>
          <Schedule data={schedule.array} onGenerate={getUserProfile} autoFill={true} />
        </>
      ))}
    </div>
  );
};

const Reviews = ({ reviews, getReviews }) => {
  const { id: userId } = getUserObjId();

  const transformDate = date => {
    return date.slice(0, 10);
  };

  return (
    <div className="">
      {reviews.map((review, index) => {
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
    </div>
  );
};

const ProfileTabs = ({ favSchedule, getUserProfile }) => {
  const [tab, setTab] = useState(1);
  const [reviews, setReviews] = useState([]);

  const getReviews = async () => {
    const token = getToken();
    const res = await axios.get('http://localhost:3005/api/users/profile/', {
      headers: { 'x-auth-token': token },
    });

    setReviews(res.data.blogReviews);
  };

  useEffect(() => {
    getReviews();
  }, []);

  return (
    <div className="border-t-4 pt-2">
      <div className="container mx-auto">
        <div className="flex">
          <Tab label="Favorite Schdules" count={favSchedule.length} index={1} tab={tab} setTab={setTab} />
          <Tab label="Review" count={reviews.length} index={2} tab={tab} setTab={setTab} />
        </div>
      </div>

      <div className="bg-[#E9ECF4] pt-7 py-10 min-h-screen">
        <div className="container mx-auto">
          <div className={tab === 1 ? '' : 'hidden'}>
            <FavoriteSchedules favSchedule={favSchedule} getUserProfile={getUserProfile} />
          </div>
          <div className={tab === 2 ? '' : 'hidden'}>
            <Reviews reviews={reviews} getReviews={getReviews} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileTabs;
