/* eslint-disable react/prop-types */
import Header from "./Header";
import Input from "./Input";

export default function Profile({ name }) {
    return (
        <>
            <Header
                black={true} />
            <section className="profile">
                <div className="container container_profile">
                    <h2 className="profile__title"> Привет, {name}</h2>
                    <div className="profile__input-cont">
                        <h3 className="profile__input-name"> Имя</h3>
                        <Input 
                        placeholder={'Введите имя'}/>
                    </div>
                    <div className="profile__input-cont">
                        <h3 className="profile__input-name"> E-mail</h3>
                        <Input 
                        placeholder={'Ведите Email'}/>
                    </div>
                    <button className="profile__edit button">Редактировать</button>
                    <button className="profile__exit button">Выйти из аккаунта</button>
                </div>
            </section>
        </>
    )
}