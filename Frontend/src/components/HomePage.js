// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import "../styles.css";

import AboutUs from "./AboutUs";
import Navbar from "./Navbar";
import SellBooks from "./SellBooks";
import BuyBooks from "./BuyBooks";
import JoinUs from "./JoinUs";
import ContactUs from "./ContactUs";


export default function HomePage() {

  return (
    <div className="App">
      <Navbar />
      <AboutUs />
      <BuyBooks />
      <SellBooks />
      <JoinUs />
      <ContactUs />
    </div>
  );
}