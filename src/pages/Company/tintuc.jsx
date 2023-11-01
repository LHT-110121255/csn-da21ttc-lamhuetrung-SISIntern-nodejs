import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { GrNotification } from 'react-icons/gr';
import { HiOutlineNewspaper } from 'react-icons/hi';
import { FiUsers } from 'react-icons/fi';
import { FiLogOut } from 'react-icons/fi';
import { PiStudentDuotone } from 'react-icons/pi';
import { AiOutlineHome } from 'react-icons/ai';
import '../../css/company.css';
import '../../css/base.css';

function tintuc() {
    return (
      <div className='container'>
          <div className='Navbar'>
            <ul id='navbar' className='company'>
              <a href=""><li className='thongbao '><GrNotification className='icon'/></li></a>
              <Link to="/company/tintuc"><a ><li id='tintuc' className='click'><HiOutlineNewspaper className='icon'/>Tin tức</li></a></Link>
              <Link to="/company/dangkythuctap"><a href=""><li id='thuctap' ><FiUsers className='icon'/>Đăng ký thực tập</li></a></Link>
              <Link to="/company/danhsachdangky"><a href=""><li id='thongtin'><PiStudentDuotone className='icon'/>Danh sách đăng ký</li></a></Link>
            </ul>
            <Link to="/"><a id='dangxuat' href="" className='dangxuatcongty'><FiLogOut className='icon'/>Đăng xuất</a></Link>
          </div>
          <div className='data'>
              <div className="header"><AiOutlineHome className='icon' /><span id='route'>/Tin tức</span></div>
              <div className="content">
                  <h1 className="lable">Tin tức</h1>
                  <ul className="items">
                    <Link>
                          <li>
                            <h2>THÔNG BÁO:Trường Đại học Trà Vinh ra quân thực tập</h2>
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
