import React from 'react';
import { Navigate } from 'react-router-dom';
import { getItem } from '../utils/localStorage';

const ProtectedRoute = ({children}) => {
    const userId = getItem("user");

    if(!userId) {
        return <Navigate to="/verify" replace />
    }
  return children
}

export default ProtectedRoute