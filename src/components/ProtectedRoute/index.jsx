import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { getToken } from '../../services/authService';

const ProtectedRoute = ({ children }) => {
  const token = getToken();

  if (!token) return <Navigate to="/" replace />;

  return children;
};

export default ProtectedRoute;
