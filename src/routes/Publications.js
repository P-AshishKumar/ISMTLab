import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import publicationImage from "../assets/night.jpg";
import Footer from "../components/Footer";
import Trip from "../components/Trip";

function Publications() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={publicationImage}
        title="Publication"
        text="something abou the lab"
      />
    </>
  );
}

export default Publications;
