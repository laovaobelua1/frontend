import React from 'react'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Transfer from './pages/Transfer';
import CreateAccount from './pages/CreateAccount';
import Register from './pages/Register'; 
import Settings from './pages/Settings'; 
import UpdateAccount from './pages/UpdateAccount';
import { LoadingProvider } from './context/LoadingContext'; 
import GuestRoute from './components/GuestRoute'; 

function App() {
  return (
    <BrowserRouter>
      <LoadingProvider>
        <Routes>

          {/* --- NHÓM 1: CHỈ DÀNH CHO KHÁCH (Guest) --- */}
          {/* Nếu đã có Token còn hạn -> Tự động chuyển hướng về /dashboard */}
          <Route element={<GuestRoute />}>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/create-account" element={<CreateAccount />} />
          </Route>


          {/* --- NHÓM 2: CÁC TRANG CHỨC NĂNG (Nội bộ) --- */}
          {/* Người dùng vào thẳng các trang này. 
              (Lưu ý: Vì bạn chưa có ProtectedRoute nên ai biết link vẫn vào được, 
              nhưng logic GuestRoute ở trên đã giải quyết được việc Redirect từ Login) */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/transfer" element={<Transfer />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/update-account" element={<UpdateAccount />} />

        </Routes>
      </LoadingProvider>
    </BrowserRouter>
  );
}

export default App;