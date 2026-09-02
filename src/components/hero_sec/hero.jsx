import Particles from './Particles/Particles';
import HeroContent from './hero-content/hero-content'

function Hero() {

  return (
    <>
      <section id='hero-sec'>
        <div style={{ width: '100%', height: '600px', position: 'relative' }}>
        <Particles
        particleColors={["#FBFFFF"]}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={false} /* DONT CHANGE !!*/
        alphaParticles={true} /*for smothness of the paticles*/
        disableRotation={false}
        pixelRatio={1}
        backgroundColor="#1a1a1a"
        />
        </div>
        <HeroContent />
      </section>
      
    </>);
};

export default Hero;