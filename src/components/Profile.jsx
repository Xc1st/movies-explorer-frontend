/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Header from "./Header";
import Input from "./Input";

export default function Profile({ name }) {
    return (
        <>
            <Header
                black={true} />
            <section className="profile">
                <div className="container container_profile">
                    <h1 className="profile__title"> Привет, {name}</h1>
                    <div className="profile__input-cont">
                        <h2 className="profile__input-name"> Имя</h2>
                        <Input
                            placeholder={'Введите имя'} />
                    </div>
                    <div className="profile__input-cont">
                        <h2 className="profile__input-name"> E-mail</h2>
                        <Input
                            required
                            placeholder={'Ведите Email'} />
                    </div>
                    <button type="button" className="profile__edit button">Редактировать</button>
                    <Link to="/sign-in" className="profile__exit button">Выйти из аккаунта</Link>
                </div>
            </section>
        </>
    )
}