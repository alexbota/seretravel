import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import Services from "./components/Services";
import Packages from "./components/Packages";
import Book from "./components/Book";

function App() {
  return (
      <>
          <Header />
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
