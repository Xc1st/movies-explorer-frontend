import landingLogo from '../images/landinglogo.svg'

function HeroIntro() {
    return (
        <section className='hero-intro'>
            <div className="container container__hero-intro">
                <div className="hero-intro__info">
                    <h1 className='hero-intro__title'>Учебный&nbsp;проект студента факультета <br /> Веб-разработки.</h1>
                    <p className='hero-intro__caption'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                    <button className='hero-intro__button button'>Узнать больше</button>
                </div>
                <img src={landingLogo} alt="Logo" className='hero-intro__image' />
            </div>
        </section>
    )
}
export default HeroIntro