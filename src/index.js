import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import BaiTapThucHanhLayout from './components/BaiTapLayoutComponent/BaiTapThucHanhLayout.jsx'
import BaiTapThuKinh from './components/BaiTapThuKinh/BaiTapThuKinh';
import Home from './pages/Home';
import BaiTapForm from './pages/BaiTapForm/BaiTapForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='' element={<App />}>
        <Route index element={<Home />}></Route>
        {/* <Route path='' element={<Home />}></Route> */}
        <Route path='baitapthuchanhlayout' element={<BaiTapThucHanhLayout />}></Route>
        <Route path='baitapthukinh' element={<BaiTapThuKinh />}></Route>
        <Route path='baitapform' element={<BaiTapForm />}></Route>

        <Route path='*' element={<Navigate to="" />}></Route>

      </Route>
      {/* <Route path='contact' element={<Contact />}>

  </Route> */}
    </Routes>
  </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
