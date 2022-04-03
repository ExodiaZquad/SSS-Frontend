import React, { useState } from 'react';
import { login, logout } from '../../services/authService';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

const clientId = '483892147915-374s85caqvj99gcantphbqmlb804tp3o.apps.googleusercontent.com';

const Login = () => {
  const [showloginButton, setShowloginButton] = useState(true);

  const onLoginSuccess = async res => {
    const token = await login(res.profileObj);
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
        <GoogleLogout clientId={clientId} buttonText="Sign Out" onLogoutSuccess={onSignoutSuccess}></GoogleLogout>
      )}
    </div>
  );
};
export default Login;
