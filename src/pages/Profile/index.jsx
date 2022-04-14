import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProfileTabs from '../../components/ProfileTabs';
import ShowReview from '../../components/ShowReview';
import { getToken, getUserObjId } from '../../services/authService';

const Profile = () => {
  const [reviews, setReviews] = useState([]);
  const { id: userId } = getUserObjId();

  const getReviews = async () => {
    const token = getToken();
    const res = await axios.get('http://localhost:3005/api/users/profile/', {
      headers: { 'x-auth-token': token },
    });

    console.log(res.data);
    setReviews(res.data.blogReviews);
  };

  const transformDate = date => {
    return date.slice(0, 10);
  };

  useEffect(() => {
    getReviews();
  }, []);

  return (
    <div>
      <div className="h-[35vh] bg-gradient-to-b from-[#CBE7FF] to-[#ffffff] flex flex-col gap-y-1 justify-center items-center">
        <div className="h-[16vh] w-[16vh] bg-[#000000] rounded-[50%] mb-2"></div>
        <div className="text-[25px]">Thanakorn Wihokkun</div>
        <div className="text-[15px] text-[#999999]">63010235@gmail.com</div>
        <div className="bg-[#FF8357] text-white px-4 py-1 rounded-md mt-1">student</div>
      </div>
      <ProfileTabs />
      {/* <div className="bg-[#E9ECF4] flex justify-center">
        <div className="Blog-contain">
          <div className="h-[40vh] overflow-auto mt-3">
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
        </div>
      </div> */}
    </div>
  );
};

export default Profile;
