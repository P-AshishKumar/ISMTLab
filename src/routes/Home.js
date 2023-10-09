import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import About from "../components/About";
import HomeImge from "../assets/HomePage.jpg";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={HomeImge}
        title="Our research delves into the innovative realm of Machine Learning (ML) applied to gaming platforms, aiming to revolutionize the discovery of biofilms and related phenomena"
      />
      <About />
    </>
  );
}

export default Home;
