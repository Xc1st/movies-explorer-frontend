import { Link } from 'react-router-dom'

export default function NFEPage() {
    return (
        <section className='error-page'>
            <div className='container container_error-page'>
                <h2 className='error-page__title'>404</h2>
                <p className='error-page__text'>Страница не найдена</p>
            </div>
            <Link to="/" className='error-page__link'>Назад</Link>
        </section>
    )
}