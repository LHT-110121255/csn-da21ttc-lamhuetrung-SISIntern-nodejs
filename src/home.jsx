import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/login.css'

function Login() {
  const navigate = useNavigate();
  const sinhvien = (event) => {
    event.preventDefault();
    alert("Bạn đăng nhập với vai trò sinh viên");
    navigate('/student/tintuc');
  };
  const giaovien = (event) => {
    event.preventDefault();
    alert("Bạn đăng nhập với vai trò giáo viên");
    navigate('/teacher/tintuc');
  };
  const congty = (event) => {
    event.preventDefault();
    alert("Bạn đăng nhập với vai trò công ty");
    navigate('/company/tintuc');
  };
  return (
    <div className="home_index">
        <span className='chonloaitaikhoan'>SIS-Intern</span>
        <div className='loaitaikhoan'> 
            <button onClick={sinhvien} id='sinhvien'>Sinh viên</button>
            <button onClick={giaovien} id='giaovien'>Giáo viên</button>
            <button onClick={congty} id='congty'>Công ty</button>
        </div>
    </div>
  );

}
export default Login;