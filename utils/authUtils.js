// src/utils/auth.js

export const checkAuth = () => {
    const token = localStorage.getItem('jwtToken');
    if (!token) return false;
  
    try {
      // Giải mã đoạn giữa của Token để lấy hạn sử dụng (exp)
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(
        window.atob(base64)
          .split('')
          .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
          .join('')
      );
  
      const decoded = JSON.parse(jsonPayload);
      const currentTime = Date.now() / 1000;
  
      // Nếu thời gian hết hạn < thời gian hiện tại -> Token chết
      if (decoded.exp < currentTime) {
        localStorage.removeItem('jwtToken');
        localStorage.removeItem('user');
        return false; 
      }
  
      return true; // Token sống
    } catch (error) {
      return false; // Token rác/lỗi
    }
  };