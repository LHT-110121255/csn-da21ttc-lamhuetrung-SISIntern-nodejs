import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { GrNotification } from 'react-icons/gr';
import { HiOutlineNewspaper } from 'react-icons/hi';
import { LiaUserCogSolid } from 'react-icons/lia';
import { FiLogOut } from 'react-icons/fi';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import '../../css/student.css';
import '../../css/base.css';

function tintuc() {
    return (
      <div className='container'>
          <div className='Navbar navbarSinhVien'>
            <ul id='navbar'>
              <a href=""><li className='thongbao '><GrNotification className='icon'/></li></a>
              <Link to="/student/tintuc"><a ><li id='tintuc' className='click'><HiOutlineNewspaper className='icon'/>Tin tức</li></a></Link>
              <Link to="/student/dondangky"><a href=""><li id='thuctap'  ><LiaUserCogSolid className='icon'/>Đăng ký thực tập</li></a></Link>
              <Link to="/student/thuctap"><a href=""><li id='thuctap'  ><LiaUserCogSolid className='icon'/>Thực tập</li></a></Link>
              <Link to="/student/thongtintaikhoan"><a href=""><li id='thongtin' ><AiOutlineInfoCircle className='icon'/>Thông tin</li></a></Link>
            </ul>
            <Link to="/"><a id='dangxuat' href="" className='dangxuatsinhvien'><FiLogOut className='icon'/>Đăng xuất</a></Link>
          </div>
          <div className='data'>
              <div className="header"><AiOutlineHome className='icon' /><span id='route'>/Tin tức</span></div>
              <div className="content">
                  <h1 className="lable">Tin tức</h1>
                  <ul className="items">
                    <Link>
                          <li>
                            <h2>THÔNG BÁO: CHƯƠNG TRÌNH THỰC TẬP HỌC KỲ III TẠI TRƯỜNG ĐẠI HỌC TRÀ VINH</h2>
                            <span>3 ngày trước (11:15 09/01/2023) </span>
                          </li>
                    </Link>
                  </ul>
              </div>
          </div>
        </div>
    )
}

export default tintuc;
