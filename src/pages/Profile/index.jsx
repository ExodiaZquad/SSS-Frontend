import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ShowReview from '../../components/ShowReview';
import { getToken } from '../../services/authService';

const Profile = () => {
  const [reviews, setReviews] = useState([]);

  const getReviews = async () => {
    const token = getToken();
    const res = await axios.get('http://localhost:3005/api/users/profile/', {
      headers: { 'x-auth-token': token },
    });

    console.log(res.data.blogReviews);
    setReviews(res.data.blogReviews);
  };

  const transformDate = date => {
    return date.slice(0, 10);
  };

  useEffect(() => {
    getReviews();
  }, []);

  return (
    <div className="bg-[#e9ecf4] flex justify-center">
      <div className="Blog-contain">
        <div className="h-[68vh] overflow-auto mt-3">
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
                likeCount={review.userId_Like.length}
                dislikeCount={review.userId_Dislike.length}
                getReviews={getReviews}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Profile;
