import React, { useState } from 'react';
import { login, logout } from '../../services/authService';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

const clientId = '483892147915-374s85caqvj99gcantphbqmlb804tp3o.apps.googleusercontent.com';

const Login = () => {
  const [showloginButton, setShowloginButton] = useState(true);

  const onLoginSuccess = async res => {
    console.log('User profile:', res.profileObj);
    await login(res.profileObj);
    setShowloginButton(false);
  };

  const onLoginFailure = res => {
    console.log('Login Failed:', res);
  };

  const onSignoutSuccess = async () => {
    await logout();
    alert('You have been logged out successfully');
    console.clear();
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
          isSignedIn={true}
        />
      ) : (
        <GoogleLogout clientId={clientId} buttonText="Sign Out" onLogoutSuccess={onSignoutSuccess}></GoogleLogout>
      )}
    </div>
  );
};
export default Login;
