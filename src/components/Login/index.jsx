import React, { useState, useEffect } from 'react';
import { getToken, login, logout } from '../../services/authService';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { Link } from 'react-router-dom';
import { VscTriangleDown, VscTriangleUp } from 'react-icons/vsc';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import config from '../../config';

const clientId = '483892147915-c3aicp0nn3jdc6r2euao3dm67qli2gtv.apps.googleusercontent.com';

const Login = () => {
  const [showloginButton, setShowloginButton] = useState(true);
  const [userName, setUserName] = useState('');
  const [userImg, setUserImg] = useState('');
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();

  const location = useLocation();

  const handleDropdownClick = () => {
    setIsActive(!isActive);
  };

  const onLoginSuccess = async res => {
    const token = await login(res.profileObj);
    // setUserName(res.profileObj.name);
    // setUserImg(res.profileObj.imageUrl);
    getUserData();
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
    navigate('/');
  };

  // get user's data (name + imgUrl)
  const getUserData = async () => {
    const token = getToken();
    const res = await axios.get(config.API_URL + '/users/', {
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
          render={renderProps => (
            <button
              className="bg-black py-2 px-4 text-white rounded-full hover:bg-zinc-800 active:bg-black transition"
              onClick={renderProps.onClick}
            >
              Sign In
            </button>
          )}
        />
      ) : (
        <div className="font-medium flex justify-center items-center gap-2 relative">
          {/* User's profile image */}
          <img
            src={userImg}
            alt=""
            className={
              'h-10 w-10 ring rounded-full shadow-md cursor-pointer select-none' +
              (location.pathname === '/' ? '  ring-white' : ' ring-orange-500')
            }
            onClick={handleDropdownClick}
          />
          {/* User's Name */}
          <div
            className={'cursor-pointer select-none ' + (location.pathname === '/' ? 'text-white' : '')}
            onClick={handleDropdownClick}
          >
            {userName}
          </div>
          {!isActive && (
            <VscTriangleDown
              className="hover:cursor-pointer"
              onClick={() => {
                handleDropdownClick();
              }}
              color={location.pathname === '/' ? 'white' : 'gray'}
            />
          )}
          {isActive && (
            <div>
              <VscTriangleUp
                className="hover:cursor-pointer"
                onClick={() => {
                  handleDropdownClick();
                }}
                color={location.pathname === '/' ? 'white' : 'gray'}
              />
              <div className="bg-white absolute top-[140%] right-0 shadow-md border rounded-xl flex flex-col z-10">
                <Link to="/profile">
                  <button
                    className="w-full rounded-t-xl py-2 pl-4 pr-14 hover:bg-zinc-200 select-none"
                    onClick={() => handleDropdownClick()}
                  >
                    Profile
                  </button>
                </Link>
                {/* Custom GoogleLogout Button with renderProps */}
                <GoogleLogout
                  clientId={clientId}
                  onLogoutSuccess={onSignoutSuccess}
                  icon={false}
                  render={renderProps => (
                    <button
                      className="py-2 pl-4 pr-14 rounded-b-xl hover:bg-zinc-200 z-10 select-none"
                      onClick={() => {
                        renderProps.onClick();
                        handleDropdownClick();
                      }}
                    >
                      Logout
                    </button>
                  )}
                ></GoogleLogout>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
export default Login;
