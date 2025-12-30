import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { checkAuth } from '../utils/authUtils';

const GuestRoute = () => {
  const isLogin = checkAuth(); // Kiểm tra xem đã đăng nhập chưa

  // Nếu ĐÃ đăng nhập + Token còn hạn -> Đẩy thẳng về Dashboard
  if (isLogin) {
    return <Navigate to="/dashboard" replace />;
  }

  // Nếu CHƯA đăng nhập (hoặc token hết hạn) -> Cho phép hiện trang Login/Register
  return <Outlet />;
};

export default GuestRoute;