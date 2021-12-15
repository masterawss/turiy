// import logo from './logo.svg';
import './App.css';
import CallToAction from './components/landing_page/CallToAction';
import Hero from './components/landing_page/Hero.js'
import FeaturesSection from './components/landing_page/FeaturesSection';
import TopBar from './components/TopBar';
function App() {
  return (
    <>
      <TopBar/>
      <Hero/>
      <FeaturesSection/>
      <div style={{marginTop: '50px'}}>
        <CallToAction/>
      </div>
    </>
  );
}

export default App;
