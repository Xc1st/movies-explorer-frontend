/* eslint-disable react/prop-types */
import { useState } from "react";
import logo from '../images/logo.svg'
import profile from '../images/profile.svg'
import { Link } from "react-router-dom";
import backlineFoto from '../images/backline.png'
import cross from '../images/x.png'

export default function Header({ black }) {
    const [loggedIn, setLoggedIn] = useState(true)
    const [isVisible, setIsVisible] = useState(false)
    const [isActiveFilms, setIsActiveFilms] = useState(false)
    const [isActiveSavedFilms, setIsActiveSavedFilms] = useState(false)

    function activeFilms() {
        setIsActiveFilms(true)
        setIsActiveSavedFilms(false)
    }
    function activeSavedFilms() {
        setIsActiveSavedFilms(true)
        setIsActiveFilms(false)
    }

    function onSignIn() {
        setLoggedIn(false)
    }
    function backline() {
        if (isVisible) {
            setIsVisible(false)
        } else {
            setIsVisible(true)
        }
    }
    return (
        <>
            <header className={`header ${black ? 'header_black' : ''}`}>
                <div className="container container_header">
                    <Link to="/"><img className="header__logo" src={logo} alt="Логотип" /></Link>
                    {loggedIn ?
                        <>
                            <div className="header__films">
                                <Link to="/films" className={`header__button header__button_type_films  ${isActiveFilms ? "header__button_active" : ''}`} onClick={activeFilms}> Фильмы </Link>
                                <Link to="/saved-films" className={`header__button header__button_type_saved-films  ${isActiveSavedFilms ? "header__button_active" : ''}`} onClick={activeSavedFilms}> Сохранённые фильмы </Link>
                            </div>
                        </>
                        :
                        <></>}
                    <div className="header__button-container">
                        {loggedIn ?
                            <>
                                <Link to='/profile' className="header__button header__button_type_account account button">
                                    <p className={`header__profile ${black ? 'header__profile_black' : ''}`}>Аккаунт</p>
                                    <img className={`header__profile-pic ${black ? 'header__profile-pic_black' : ''}`} src={profile} alt="Картинка профиля" />
                                </Link>
                                <button type="button" className={`header__backline backline ${isVisible ? "backline_active" : ''}`} onClick={backline}>
                                    <img src={isVisible ? cross : backlineFoto} alt="Боковое меню" className="header__line" />
                                </button>
                            </>
                            :
                            <>
                                <Link className="header__button header__button_type_signup button" onClick={onSignIn} to="/sign-up"> Регистрация </Link>
                                <Link className="header__button header__button_type_signin button" onClick={onSignIn} to="/sign-in"> Войти</Link>
                            </>}
                    </div>
                </div >
                <nav className={`backline-menu ${isVisible ? 'backline-menu_visible' : ''}`}>
                    <div className="backline-menu__links">
                        <Link to="/" className="backline-menu__link" onClick={backline}>Главная</Link>
                        <Link to="/films" className="backline-menu__link" onClick={backline}>Фильмы</Link>
                        <Link to="/saved-films" className="backline-menu__link" onClick={backline}>Сохраненные фильмы</Link>
                    </div>
                    <Link to="/profile" className="backline-menu__profile-button account" onClick={backline}>
                        <p className='backline-menu__profile account__subtitle account__subtitle_black' >Аккаунт</p>
                        <img className='backline-menu__profile-picture account__picture account__picture_black' src={profile} alt="Картинка профиля" />
                    </Link>
                </nav>
            </header >
        </>
    )
}