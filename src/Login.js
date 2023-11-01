import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './css/login.css'

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [ngaysinh, setNgaysinh] = useState('');
  const [sodienthoai, setSodienthoai] = useState('');
  const [tencongty, setTencongty] = useState('');
  const [diachi, setDiachi] = useState('');
  const { slug } = useParams();
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    const tendangnhap = document.getElementById('tendangnhap');
    const matkhau = document.getElementById('matkhau');
    if(tendangnhap.value == "")
    {
        alert("Không bỏ trống tên đăng nhập");
        tendangnhap.focus();
    } else if (matkhau.value == "") {
        alert("Không bỏ trống mật khẩu");
        matkhau.focus();
    } else {
        alert("Đăng nhập thành công ^_^");
        if (slug == "student") {
           navigate("/student/tintuc");
        } else if (slug == "teacher") {
           navigate("/teacher/tintuc");
        } else if (slug == "company") {
           navigate("/company/tintuc");

        }
    }

  };
  const handleSignup = (event) => {
    event.preventDefault();
    const hoten = document.getElementById('tendangnhapDK');
    const matkhau = document.getElementById('matkhauDK');
    const email = document.getElementById('emailDk');
    const tencongty = document.getElementById('tencongtyDk');
    const Login = document.querySelector('.login');
    const signUp = document.querySelector('.signUp');
    const Company = document.querySelector('.signUpCompany');
    if (slug == "company") {
        if(hoten.value == "")
        {
            alert("Không bỏ trống họ và tên");
            hoten.focus();
        }else if(email.value == "") {
            alert("Không bỏ trống email");
            email.focus();
        }else if (tencongty.value == "") {
            alert("Không bỏ trống tên công ty");
            tencongty.focus();
        }else if (matkhau.value == "") {
            alert("Không bỏ trống mật khẩu");
            matkhau.focus();
        } else {
            alert("Đăng ký thành công ^_^");
            
            Login.classList.remove('close');
            Company.classList.add('close');
        }
    } else {
        if(hoten.value == "")
        {
            alert("Không bỏ trống họ và tên");
            hoten.focus();
        }else if(email.value == "") {
            alert("Không bỏ trống email");
            email.focus();
        }else if (matkhau.value == "") {
            alert("Không bỏ trống mật khẩu");
            matkhau.focus();
        } else {
            alert("Đăng ký thành công ^_^");
            
            Login.classList.remove('close');
            signUp.classList.add('close');
        }
    }
    
  };
  function Dangky() {
    const Login = document.querySelector('.login');
    const signUp = document.querySelector('.signUp');
    const Company = document.querySelector('.signUpCompany');
    if(slug == "company") {
        Login.classList.add('close');
        Company.classList.remove('close');
    } else {
        Login.classList.add('close');
        signUp.classList.remove('close');
    }
  }
  
  return (
    <div className="home">
        <div className='login '>
            <h2>Đăng Nhập</h2>
        <form>
            <div>
            <input
                id='tendangnhap'
                placeholder='Email đăng ký'
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            </div>
            <div>
            <input
                id='matkhau'
                placeholder='Mật khẩu'
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            </div>
            <a onClick={Dangky}>Đăng ký tài khoản?</a>
            <button onClick={handleLogin}>Đăng Nhập</button>
        </form>
        </div>

        <div className='signUp close'> 
            <h2>Đăng Ký</h2>
            <form>
                <div>
                <input
                    id='tendangnhapDK'
                    placeholder='Họ và tên'
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                </div>
                <div>
                <input
                    id='emailDk'
                    placeholder='Email'
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                </div>
                <div>
                <input
                    id='ngaysinh'
                    placeholder='Ngày sinh'
                    type="date"
                    value={ngaysinh}
                    onChange={(e) => setNgaysinh(e.target.value)}
                />
                </div>
                <div>
                <input
                    id='sodienthoai'
                    placeholder='Số điện thoại'
                    type="number"
                    value={sodienthoai}
                    onChange={(e) => setSodienthoai(e.target.value)}
                />
                </div>
                <div>
                <input
                    id='matkhauDK'
                    placeholder='Mật khẩu'
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                </div>
                <div>
                <input
                    id='nhaplaimatkhauDK'
                    placeholder='Nhập lại mật khẩu'
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                </div>
                <button onClick={handleSignup}>Đăng Ký</button>
            </form>
        </div>
        <div className='signUpCompany close'> 
            <h2>Đăng Ký</h2>
            <form>
                <div>
                <input
                    id='tencongtyDk'
                    placeholder='Tên công ty'
                    type="text"
                    value={tencongty}
                    onChange={(e) => setTencongty(e.target.value)}
                />
                </div>
                <div>
                <input
                    id='diachiDk'
                    placeholder='Địa chỉ'
                    type="text"
                    value={diachi}
                    onChange={(e) => setDiachi(e.target.value)}
                />
                </div>
                <div>
                <input
                    id='email'
                    placeholder='Email'
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                </div>
                <div>
                <input
                    id='sodienthoai'
                    placeholder='Số điện thoại'
                    type="number"
                    value={sodienthoai}
                    onChange={(e) => setSodienthoai(e.target.value)}
                />
                </div>
                <div>
                <input
                    id='matkhauDK'
                    placeholder='Mật khẩu'
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                </div>
                <div>
                <input
                    id='nhaplaimatkhauDK'
                    placeholder='Nhập lại mật khẩu'
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                </div>
                <button onClick={handleSignup}>Đăng Ký</button>
            </form>
        </div>
    </div>
  );

}
export default Login;