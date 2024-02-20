import image from "../images/pic__COLOR_pic.png"

export default function MoviesCard({ films }) {
    function cardLike(evt) {
        evt.target.classList.toggle("card__submit_active")
    }
    return (
        <li className="search-films__card card">
            <img src={image} alt="" className="card__img" />
            <div className="card__banner">
                <div className="card__text">
                    <h3 className="card__title">33 слова о дизайне</h3>
                    <p className="card__time">1ч42м</p>
                </div>
                <button className={`card__submit ${films ? '' : 'card__submit_x'}`} onClick={films ? cardLike : ''}>{films ? '' : "+"}</button>
            </div>
        </li>
    )
}