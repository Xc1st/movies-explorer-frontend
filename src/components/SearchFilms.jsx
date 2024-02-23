import Header from "./Header";
import Footer from "./Footer";
import Input from "./Input";
import Icon from "../images/text__COLOR_invisible.png"
import MoviesCard from "./MoviesCard";
import MoviesCardList from "./MoviesCardList";

export default function SearchFilms({ films }) {
    function black(evt) {
        evt.target.classList.toggle("search-string__shorts-button_active")
    }
    return (
        <>
            <Header
                black={true} />
            <section className="search-films">
                <div className="container container_search-films">
                    <form className="search-films__search-string search-string">
                        <div className="search-string__box">
                            <Input
                                name={'search-string'} />
                            <button type="button" className="search-string__button"><img src={Icon} alt="" /></button>
                        </div>
                        <div className="search-string__shorts">
                            <button className="search-string__shorts-button" onClick={black}></button>
                            <p className="search-string__shorts-subtitle">Короткометражки</p>
                        </div>
                    </form>
                    <MoviesCardList>
                        <MoviesCard films={films} />
                        <MoviesCard films={films} />
                        <MoviesCard films={films} />
                        <MoviesCard films={films} />
                        <MoviesCard films={films} />
                        <MoviesCard films={films} />
                        <MoviesCard films={films} />
                        <MoviesCard films={films} />
                        <MoviesCard films={films} />
                        <MoviesCard films={films} />
                        <MoviesCard films={films} />
                        <MoviesCard films={films} />
                    </MoviesCardList>
                </div>
                <button type="button" className="search-films__more button">Ещё</button>
            </section>
            <Footer />
        </>
    )
}