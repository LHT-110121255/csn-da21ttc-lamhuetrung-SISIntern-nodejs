import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { LuPencilLine } from 'react-icons/lu';
import { AiOutlineCheck } from 'react-icons/ai';
import { ImCancelCircle } from 'react-icons/im';
import { GrNotification } from 'react-icons/gr';
import { HiOutlineNewspaper } from 'react-icons/hi';
import { LiaUserCogSolid } from 'react-icons/lia';
import { FiLogOut } from 'react-icons/fi';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import '../../css/student.css';
import '../../css/base.css';
function Thongtin() {
    const [sinhviens, setSinhviens] = useState([]);
    useEffect(() => {
        axios.get('/student/thongtintaikhoan') // Điều chỉnh URL tương ứng với tuyến đường API
          .then((response) => {
            setSinhviens(response.data);
          })
          .catch((error) => {
            console.error('Lỗi khi lấy dữ liệu:', error);
          });
      }, []);
    return (
        <div className='container'>
          <div className='Navbar navbarSinhVien'>
            <ul id='navbar'>
              <a href=""><li className='thongbao '><GrNotification className='icon'/></li></a>
              <Link to="/student/tintuc"><a ><li id='tintuc'><HiOutlineNewspaper className='icon'/>Tin tức</li></a></Link>
              <Link to="/student/dondangky"><a href=""><li id='thuctap'  ><LiaUserCogSolid className='icon'/>Đăng ký thực tập</li></a></Link>
              <Link to="/student/thuctap"><a href=""><li id='thuctap'  ><LiaUserCogSolid className='icon'/>Thực tập</li></a></Link>
              <Link to="/student/thongtintaikhoan"><a href=""><li id='thongtin' className='click'><AiOutlineInfoCircle className='icon'/>Thông tin</li></a></Link>
            </ul>
            <Link to="/"><a id='dangxuat' href="" className='dangxuatsinhvien'><FiLogOut className='icon'/>Đăng xuất</a></Link>
          </div>
          <div className='data'>
              <div className="header"><AiOutlineHome className='icon' /><span id='route'>/Tài khoản</span></div>
                <div className="content">
                    
                    <h1 className="lable_chitiet">Thông tin tài khoản </h1>
                    <ul className='thongtintaikhoan'>
                        {sinhviens.map((sinhvien) => (
                        <li key={sinhvien._id}>
                            <span className='lable'>{sinhvien}</span>
                            <span className='info'>{sinhvien.email}</span>
                         </li>
                        ))}
                        {/* <li>
                            <span className='lable'>Email</span>
                            <span className='info'>lamhuetrung@gmail.com</span>
                        </li>
                        <li>
                            <span className='lable'>Ngày sinh</span>
                            <span className='info'>08/01/2003</span>
                        </li>
                        <li>
                            <span className='lable'>Số điện thoại</span>
                            <span className='info'>0763849007</span>
                        </li>
                        <li>
                            <span className='lable'>Vai trò</span>
                            <span className='info'>Sinh viên</span>
                        </li> */}
                    </ul>
                    <h1 className="lable_chitiet">Thông tin sinh viên</h1>
                    <ul className='thongtinsinhvien '>
                        <li>
                            <span className='lable'>Mã số sinh viên</span>
                            <span className='info'>110121255</span>
                        </li>
                        <li>
                            <span className='lable'>Họ tên</span>
                            <span className='info'>Lâm Huệ Trung</span>
                        </li>
                        <li>
                            <span className='lable'>Mã lớp</span>
                            <span className='info'>DA21TTC</span>
                        </li>
                    </ul>
                    <button className='button_chinhsua'> <LuPencilLine className='icon_button'/>Chỉnh sửa</button>
                    <h1 className="lable_chitiet">Đổi mật khẩu</h1>
                    <ul className='doimatkhau'>
                        <input type="text" placeholder='Mật khẩu hiện tại'/>
                        <input type="text" placeholder='Mật khẩu mới'/>
                        <input type="text" placeholder='Nhập lại mật khẩu mới'/>
                    </ul>
                    <div className="nutbam">
                        <button className='button_huy'> <ImCancelCircle className='icon_button'/>Hủy</button>
                        <button className='button_luu'> <AiOutlineCheck className='icon_button'/>Lưu</button>
                    </div>
                </div>
          </div>
        </div>   
    
    )
}

export default Thongtin;
