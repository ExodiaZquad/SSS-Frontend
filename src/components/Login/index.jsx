import React, { useState, useEffect } from 'react';
import { getToken, getUserData, login, logout } from '../../services/authService';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { Link } from 'react-router-dom';
import { VscTriangleDown } from 'react-icons/vsc';
import axios from 'axios';

const clientId = '483892147915-374s85caqvj99gcantphbqmlb804tp3o.apps.googleusercontent.com';

const Login = () => {
  const [showloginButton, setShowloginButton] = useState(true);
  const [userName, setUserName] = useState('');
  const [userImg, setUserImg] = useState('');
  const [isActive, setIsActive] = useState(false);

  const handleDropdownClick = () => {
    if (isActive) {
      setIsActive(false);
    } else setIsActive(true);
  };

  const onLoginSuccess = async res => {
    const token = await login(res.profileObj);
    setUserName(res.profileObj.name);
    setUserImg(res.profileObj.imageUrl);
    if (token) return setShowloginButton(false);

    alert('Please login with your KMITL account.');
  };

  const onLoginFailure = res => {
    console.log('Login Failed:', res);
  };

  const onSignoutSuccess = async () => {
    await logout();
    alert('You have been logged out successfully');
    setShowloginButton(true);
  };

  // get user's data (name + imgUrl)
  const getUserData = async () => {
    const token = getToken();
    const res = await axios.get('http://localhost:3005/api/users/', {
      headers: { 'x-auth-token': token },
    });

    setUserName(res.data.name);
    setUserImg(res.data.imgUrl);
    setShowloginButton(false);
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div>
      {showloginButton ? (
        <GoogleLogin
          clientId={clientId}
          buttonText="Sign In"
          onSuccess={onLoginSuccess}
          onFailure={onLoginFailure}
          cookiePolicy={'single_host_origin'}
          isSignedIn={false}
        />
      ) : (
        <div className="font-medium flex justify-center items-center gap-2 relative">
          {/* User's profile image */}
          <img src={userImg} alt="" className="h-10 w-10 border-2 border-orange-400 rounded-full shadow-md" />
          {/* User's Name */}
          <div className="">{userName}</div>
          <VscTriangleDown
            className="hover:cursor-pointer text-gray-400"
            onClick={() => {
              handleDropdownClick();
            }}
          />
          {isActive && (
            // Dropdown
            <div className="bg-white absolute top-[140%] right-0 shadow-md border rounded-xl flex flex-col">
              <Link to="/profile">
                <button className="w-full rounded-t-xl py-2 pl-4 pr-14 hover:bg-zinc-200">Profile</button>
              </Link>
              {/* Custom GoogleLogout Button with renderProps */}
              <GoogleLogout
                clientId={clientId}
                onLogoutSuccess={onSignoutSuccess}
                icon={false}
                render={renderProps => (
                  <button className="py-2 pl-4 pr-14  hover:bg-zinc-200" onClick={renderProps.onClick}>
                    Logout
                  </button>
                )}
              ></GoogleLogout>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
export default Login;
