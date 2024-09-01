import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";

const LoginArea = () => {
    const dispatch = useDispatch();
    const history = useNavigate();

    const status = useSelector((state) => state.user.status);
    const user = useSelector((state) => state.user.user);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Email format kontrolü
    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // Şifre format kontrolü
    const validatePassword = (password) => {
        const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
        return re.test(password);
    }

    // Login
    const login = () => {
        if (!validateEmail(email)) {
            Swal.fire({
                icon: 'error',
                title: 'Geçersiz Email',
                text: 'Lütfen geçerli bir email adresi girin.',
            });
            return;
        }

        if (!validatePassword(password)) {
            Swal.fire({
                icon: 'error',
                title: 'Geçersiz Şifre',
                text: 'Şifre en az 8 karakter olmalı, bir büyük harf, bir küçük harf, bir rakam ve bir özel karakter içermelidir.',
            });
            return;
        }

        if (status) {
            Swal.fire({
                icon: 'question',
                title: '' + user.name,
                html:
                    'Zaten giriş yapmışsınız<br />' +
                    '<b>' +
                    'Dashboard</b> ' +
                    '<b>Shop</b> sayfası',
            }).then((result) => {
                if (result.isConfirmed) {
                    history('/');
                }
            });
        } else {
            dispatch({ type: "user/login" });
            let name = user.name || 'Customer';
            Swal.fire({
                icon: 'success',
                title: 'Giriş Başarılı',
                text: 'Hoşgeldiniz ' + name,
            });
            history("/");
        }
    }

    return (
        <>
            <section id="login_area" className="ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3 col-md-12 col-sm-12 col-12">
                            <div className="account_form">
                                <h3>Giriş Yap</h3>
                                <form onSubmit={(e) => { e.preventDefault(); login() }}>
                                    <div className="default-form-box">
                                        <label>Kullanıcı adı veya Email<span className="text-danger">*</span></label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            required 
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div className="default-form-box">
                                        <label>Şifre<span className="text-danger">*</span></label>
                                        <input 
                                            type="password" 
                                            className="form-control" 
                                            required 
                                            minLength="8"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                    <div className="login_submit">
                                        <button className="theme-btn-one btn-black-overlay btn_md" type="submit">Giriş Yap</button>
                                    </div>
                                    <div className="remember_area">
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="materialUnchecked" />
                                            <label className="form-check-label" htmlFor="materialUnchecked">Beni Hatırla</label>
                                        </div>
                                    </div>
                                    <Link to="/register" className="active">Hesap Oluştur</Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default LoginArea;
