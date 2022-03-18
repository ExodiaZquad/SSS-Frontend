import React, { useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

const clientId = '483892147915-374s85caqvj99gcantphbqmlb804tp3o.apps.googleusercontent.com';

const Login = () => {
  const [showloginButton, setShowloginButton] = useState(true);
  const [showlogoutButton, setShowlogoutButton] = useState(false);
  const onLoginSuccess = res => {
    console.log('Login Success:', res.profileObj);
    setShowloginButton(false);
    setShowlogoutButton(true);
  };

  const onLoginFailure = res => {
    console.log('Login Failed:', res);
  };

  const onSignoutSuccess = () => {
    alert('You have been logged out successfully');
    console.clear();
    setShowloginButton(true);
    setShowlogoutButton(false);
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
      ) : null}

      {showlogoutButton ? (
        <GoogleLogout clientId={clientId} buttonText="Sign Out" onLogoutSuccess={onSignoutSuccess}></GoogleLogout>
      ) : null}
    </div>
  );
};
export default Login;
