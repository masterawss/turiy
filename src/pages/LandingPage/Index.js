// import './App.css';
import CallToAction from '../../components/LandingPage/CallToAction';
import Hero from '../../components/LandingPage/Hero.js'
import FeaturesSection from '../../components/LandingPage/FeaturesSection';

export default function Index(){
    return (
        <>
            <Hero/>
            <FeaturesSection/>
            <div style={{marginTop: '50px'}}>
            <CallToAction/>
            </div>
        </>
    );
}