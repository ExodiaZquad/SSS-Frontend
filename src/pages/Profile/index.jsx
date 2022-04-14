import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProfileTabs from '../../components/ProfileTabs';
import { getToken } from '../../services/authService';

const Profile = () => {
  const [favSchdule, setFavSchdule] = useState([]);
  const [userProfile, setUserProfile] = useState({});

  const getUserProfile = async () => {
    const token = getToken();
    const { data } = await axios.get('http://localhost:3005/api/users/profile', {
      headers: { 'x-auth-token': token },
    });

    console.log(data);

    setFavSchdule(favSchdule);
    setUserProfile(data.userProfile);
  };

  useEffect(() => {
    getUserProfile();
  }, []);

  return (
    <div>
      <div className="h-[35vh] bg-gradient-to-b from-[#CBE7FF] to-[#ffffff] flex flex-col gap-y-1 justify-center items-center">
        <div>
          <img src={userProfile.imageUrl} alt="" className="h-[16vh] w-[16vh]  rounded-[50%] mb-2" />
        </div>
        <div className="text-[25px]">{userProfile.name}</div>
        <div className="text-[15px] text-[#999999]">{userProfile.email}</div>
        <div className="bg-[#FF8357] text-white px-4 py-1 rounded-md mt-1">student</div>
      </div>
      <ProfileTabs />
    </div>
  );
};

export default Profile;
