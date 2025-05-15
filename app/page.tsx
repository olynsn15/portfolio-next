import About from "./components/About";
import Contact from "./components/Contact";
import Experiences from "./components/Experiences";
import Header from "./components/Header";
import Footer from "./components/NavFoot/Footer";
import Navbar from "./components/NavFoot/Navbar";
import Project from "./components/Project";


export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Experiences />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}
