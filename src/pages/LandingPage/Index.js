// import './App.css';
import CallToAction from 'components/LandingPage/CallToAction';
import Hero from 'components/LandingPage/Hero.js'
import FeaturesSection from 'components/LandingPage/FeaturesSection';

export default function Index(){
    return (
        <>
            <div className="container">
                <Hero/>
                <FeaturesSection/>
            </div>
            <div style={{marginTop: '50px'}}>
                <CallToAction/>
            </div>
        </>
    );
}