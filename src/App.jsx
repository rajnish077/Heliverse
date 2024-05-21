import Header from "./components/Header";
import "./App.css";
import ElementorMotion from "./components/ElementorMotion";
import TransformSection from "./components/TransformSection";
import RatingsSection from "./components/RatingSection";
import ApplyOn from "./components/ApplyOn";
import Features from "./components/Features";
import Footer from "./components/Footer";
import ParticleEffect from "./components/ParticleEffect";

const App = () => {
  return (
    <>
      <ParticleEffect />
      <Header />
      <ElementorMotion />
      <TransformSection />
      <RatingsSection />
      <ApplyOn />
      <Features />
      <Footer />
    </>
  );
};

export default App;
