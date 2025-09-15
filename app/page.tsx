
import Hero from "./homecomponents/Hero";
import AboutUs from "./homecomponents/AboutUs";
import Header from "./components/Header";
import OurDuty from  "./homecomponents/OurDuty";
import OurDutyAfter from "./homecomponents/OurDutyAfter";
import IndustriesWeServe from "./homecomponents/IndustriesWeServe";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
    <Header />
    <Hero />
    <AboutUs />
    <OurDuty />
    <OurDutyAfter />
    <IndustriesWeServe />
    <Footer />
    </>
  );
}