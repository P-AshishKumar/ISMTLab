import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import LabImg from "../assets/LabImage.jpeg";
import Footer from "../components/Footer";

function Lab() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={LabImg}
        title="Welcome to our Lab"
        text="something abou the lab"
      />
    </>
  );
}

export default Lab;
