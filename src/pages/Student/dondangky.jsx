import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { AiOutlineCheck } from 'react-icons/ai';
import { AiOutlineSearch } from 'react-icons/ai';
import { ImCancelCircle } from 'react-icons/im';
import { GrNotification } from 'react-icons/gr';
import { HiOutlineNewspaper } from 'react-icons/hi';
import { LiaUserCogSolid } from 'react-icons/lia';
import { FiLogOut } from 'react-icons/fi';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import '../../css/student.css';
import '../../css/base.css';

function thuctap() {
  function open() {
    const danhsachdangky = document.querySelector('.danhsachcongty');
    danhsachdangky.classList.remove('close');
  }
  function close() {
    const danhsachdangky = document.querySelector('.danhsachcongty');
    danhsachdangky.classList.add('close');
  }
    return (
        <div className='container'>
          <div className='Navbar navbarSinhVien'>
            <ul id='navbar'>
              <a href=""><li className='thongbao '><GrNotification className='icon'/></li></a>
              <Link to="/student/tintuc"><a ><li id='tintuc'><HiOutlineNewspaper className='icon'/>Tin tức</li></a></Link>
              <Link to="/student/dondangky"><a href=""><li id='thuctap'  className='click'><LiaUserCogSolid className='icon'/>Đăng ký thực tập</li></a></Link>
              <Link to="/student/thuctap"><a href=""><li id='thuctap'  ><LiaUserCogSolid className='icon'/>Thực tập</li></a></Link>
              <Link to="/student/thongtintaikhoan"><a href=""><li id='thongtin' ><AiOutlineInfoCircle className='icon'/>Thông tin</li></a></Link>
            </ul>
            <Link to="/"><a id='dangxuat' href="" className='dangxuatsinhvien'><FiLogOut className='icon'/>Đăng xuất</a></Link>
          </div>
          <div className='data'>
              <div className="header"><AiOutlineHome className='icon' /><span id='route'>/Đăng ký thực tập</span></div>
              <div id='dondangky' className="content">
                <div className="danhsachcongty close">
                        <input type="text" placeholder='Công ty' /> 
                        <button className='button_search'> <AiOutlineSearch className='icon_button'/>Tìm kiếm</button>
                        <table>
                          <tr className='tieude_table'>
                            <th id='stt'>STT</th>
                            <th id='checked'></th>
                            <th id='tencongty'>Tên công ty</th>
                            <th id='diachi'>Địa chỉ</th>
                            <th id='sdt'>số điện thoại</th>
                            <th id='email'>Email</th>
                          </tr>
                          <tr className='info'>
                            <th id='stt'>1</th>
                            <th id='checked'><input type="radio" /></th>
                            <th id='tencongty'>VTA</th>
                            <th id='diachi'>TP. HCM</th>
                            <th id='sdt'>0123456789</th>
                            <th id='email'>example@gmail.com</th>
                          </tr>
                          
                        </table>
                        <div className="nutbam">
                        <button className='button_huy' onClick={close}> <ImCancelCircle className='icon_button'/>Đóng</button>
                        <button className='button_luu'> <AiOutlineCheck className='icon_button'/>Xác nhận</button>
                      </div>
                      </div>
                    <div className="thongtincanhan">
                      <h1 className="lable_chitiet">Thông tin sinh viên</h1>
                      <ul className='thongtintaikhoan'>
                          <li>
                              <span className='lable'>Họ tên</span>
                              <span className='info'>Lâm Huệ Trung</span>
                          </li>
                          <li>
                              <span className='lable'>Mã sinh viên</span>
                              <span className='info'>110121255</span>
                          </li>
                          <li>
                              <span className='lable'>Ngày sinh</span>
                              <span className='info'>08/01/2003</span>
                          </li>
                      </ul>
                      <ul className='thongtintaikhoan'>
                          <li>
                              <span className='lable'>Số điện thoại</span>
                              <span className='info'>0763849007</span>
                          </li>
                          <li>
                              <span className='lable'>Email</span>
                              <span className='info'>lamhuetrung@gmail.com</span>
                          </li>
                          <li>
                              <span className='lable'>Lớp</span>
                              <span className='info'>DA21TTC</span>
                          </li>
                      </ul>
                    </div>
                    <div className="luachoncongty">
                      <h1 className="lable_chitiet">1. Lựa chọn công ty</h1>
                      
                      <ul className='thongtintaikhoan'>
                          <li>
                              <input onClick={open} id='tencongty' type="text" placeholder='Tên công ty' /> 
                          </li>
                          <li>
                              <input type="mail" placeholder='Email công ty'/>
                          </li>
                          <li>
                              <input type="number" placeholder='Số điện thoại'/>
                          </li>
                      </ul>
                      <ul className='thongtintaikhoan fullsize' ><li>
                          <input className='fullsize_input' type="text" placeholder='Địa chỉ công ty'/>
                        </li></ul>
                      <ul className='thongtintaikhoan nguoiphutrach'>
                          <li>
                              <input type="text" placeholder='Người phụ trách (tại công ty)' /> 
                          </li>
                          <li>
                            <input type="text" placeholder='Điện thoại/Email người phụ trách' /> 
                          </li>
                      </ul>
                      <button className='button_chinhsua'> <AiOutlineCheck className='icon_button'/>Đăng ký thêm mới công ty</button>
                      
                    </div>
                    <div className="thongtincongty">
                      <h1 className="lable_chitiet">2. Thông tin đăng ký</h1>
                      <ul className='thongtintaikhoan'>
                          <li>
                            <select name="" id="">
                                <option value="">Học phần thực tập</option>
                            </select>
                          </li>
                          <li>
                              <input  placeholder='Ngày bắt đầu' type="text"/>
                          </li>
                          <li>
                              <input placeholder='Ngày kết thúc' type="text" />
                          </li>
                      </ul>
                      <ul className='thongtintaikhoan'>
                          <li>
                            <select name="" id="1">
                              <option value="">--Chọn giáo viên--</option>
                              <option value="">Nguyễn bảo Ân</option>
                            </select>
                          </li>
                          <li>
                              <input type="number" placeholder='Số buổi/Tuần' /> 
                          </li>
                          <li>
                            <input type="number" placeholder='Số giờ/buổi' /> 
                          </li>
                      </ul>
                      <ul className='thongtintaikhoan fullsize' ><li>
                          <input className='fullsize_input description' type="text" placeholder='Nội dung thực tập'/>
                        </li></ul>
                      <button className='button_chinhsua'> <AiOutlineCheck className='icon_button'/>Đăng ký thêm mới công ty</button>
                    </div>
                    <div className="nutbam">
                      <button className='button_huy'> <ImCancelCircle className='icon_button'/>Hủy</button>
                      <button className='button_luu'> <AiOutlineCheck className='icon_button'/>Lưu</button>
                    </div>
              </div>
              
          </div>
        </div>
    )
}

export default thuctap;
