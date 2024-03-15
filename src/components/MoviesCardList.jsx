import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"
import {
    MaxScreen,
    MediumScreen,
    SmallScreen,
    CardsMoreMaxScreen,
    CardsLessMaxScreen,
    CardsMediumScreen,
    CardsSmallScreen,
    StepMaxScreen,
    StepMediumScreen,
    StepSmallScreen
} from "../utils/constants"
import MoviesCard from "./MoviesCard";
import Preloader from "./Preloader/Preloader";

export default function MoviesCardList({ movies, onDelete, addMovie, savedMovies, isLoading, serverError, firstEntrance }) {
    const location = useLocation();
    const [count, setCount] = useState('')
    const card = movies.slice(0, count)

    useEffect(() => {
        if (location.pathname === '/movies') {
            setCount(viewCards().init)
            function printCardsForResize() {
                if (window.innerWidth >= StepMaxScreen) {
                    setCount(viewCards().init)
                }
                if (window.innerWidth < StepMaxScreen) {
                    setCount(viewCards().init)
                }
                if (window.innerWidth < MediumScreen) {
                    setCount(viewCards().init)
                }
                if (window.innerWidth < SmallScreen) {
                    setCount(viewCards().init)
                }
            }
            window.addEventListener('resize', printCardsForResize)
            return () => window.removeEventListener('resize', printCardsForResize)
        }
    }, [location.pathname, movies])

    function clickMore() {
        setCount(count + viewCards().step)
    }

    function viewCards() {
        const counter = { init: CardsMoreMaxScreen, step: StepMaxScreen }
        if (window.innerWidth < MaxScreen) {
            counter.init = CardsLessMaxScreen
            counter.step = StepMediumScreen
        }
        if (window.innerWidth < MediumScreen) {
            counter.init = CardsMediumScreen
            counter.step = StepSmallScreen
        }
        if (window.innerWidth < SmallScreen) {
            counter.init = CardsSmallScreen
            counter.step = StepSmallScreen
        }
        return counter
    }

    return (
        <>
            <ul className="search-films__cards">
                {isLoading ? <Preloader /> :
                    (location.pathname === '/movies' && card.length !== 0) ?
                        card.map(data => {
                            return (
                                <MoviesCard
                                    key={data.id}
                                    savedMovies={savedMovies}
                                    addMovie={addMovie}
                                    data={data}
                                />
                            )
                        })
                        :
                        movies.length !== 0 ?
                            movies.map(data => {
                                return (
                                    <MoviesCard
                                        key={data.id}
                                        onDelete={onDelete}
                                        data={data}
                                    />
                                )
                            })
                            :
                            serverError ?
                                <span className='search-films-error'>«Во время запроса произошла ошибка.
                                    Возможно, проблема с соединением или сервер недоступен.
                                    Пожалуйста, подождите немного и попробуйте ещё раз»
                                </span>
                                : !firstEntrance ?
                                    <span className='search-films-error'>«Ничего не найдено»</span>
                                    : location.pathname === '/movies' ?
                                        <span className='search-films-error'>«Чтобы увидеть список фильмов выполните поиск»</span>
                                        :
                                        <span className='search-films-error'>«Нет сохранённых фильмов»</span>
                }
            </ul>
            {location.pathname === '/movies' && <button className={`search-films__more button ${count >= movies.length ? 'search-films__more_hidden' : ''}`} type="button" onClick={clickMore}>Ещё</button>}
        </>
    )
}