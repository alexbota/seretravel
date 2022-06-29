import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import Services from "./components/Services";
import Packages from "./components/Packages";
import Book from "./components/Book";
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";
import Hero from "./components/Hero";                                //icons

function App() {
  return (
      <>
          <Header />
          <Hero />
          <Book />
          <Packages />
          <Services />
          <Gallery />
          <Contact />
          <Footer />
      </>
  );
}

export default App;
