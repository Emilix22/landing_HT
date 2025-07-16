import Header from "../Header/Header";
import Exercises from "../Exercises/Exercises";
import Shop from "../Shop/Shop";
import Rent from "../Rent/Rent";
import About from "../About/About";
import Enterprises from "../Enterprises/Enterprises";
import Footer from "../Footer/Footer";
import SliderOffer from "../Slider/SliderOffer";

function App() {
  return (
    <>
      <Header />
        <SliderOffer />
        <Exercises />
        <Shop />
        <Rent />
        <About />
        <Enterprises />
        <Footer />
    </>
  );
}

export default App;
