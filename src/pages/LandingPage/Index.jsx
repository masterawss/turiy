// import './App.css';
import CallToAction from 'pages/LandingPage/components/CallToAction';
import Hero from 'pages/LandingPage/components/Hero'
import FeaturesSection from 'pages/LandingPage/components/FeaturesSection';

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