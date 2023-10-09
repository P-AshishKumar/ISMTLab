import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/2.jpg";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import HomeImge from "../assets/2.jpg";

function Research() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={HomeImge}
        title="Research"
        text="something abou the lab"
      />
    </>
  );
}

export default Research;
