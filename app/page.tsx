import Header from "./header";
import HeroSection from "./herosection";
import ImageScrollar from "./imagescrollar";
import AboutSection from "./aboutsection";
import BeforeFooter from "./beforefooter";
import Footer from "./footer";


export default function Page(){


  return(<div className="relative w-screen h-screen overflow-y-scroll">
    <Header />
    <HeroSection />
    <ImageScrollar />
    <AboutSection />
    <BeforeFooter />
    <Footer />
  </div>)
}