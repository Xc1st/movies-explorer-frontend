import HeroIntro from './HeroIntro'
import About from './About'
import Technology from './Technology'
import Student from './Student'
import Footer from './Footer'
import Header from './Header'

export default function MainPage() {
    return (
        <>
            <Header />
            <HeroIntro />
            <About />
            <Technology />
            <Student />
            <Footer />
        </>
    )
}