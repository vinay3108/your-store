import Footer from "./(components)/Footer";
import HeroSection from "./(components)/HeroSection";
import Navbar from "./(components)/Navbar";
import HeroBanner from "./(components)/HeroBanner";
import FeaturesSection from "./(components)/FeatureSection";
import BestSellers from "./(components)/BestSellers";
import CategoryList from "./(components)/CategoryList";
import BestPriceBanner from "./(components)/BestPriceBanner";
export default function Home() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <HeroBanner/>
    <FeaturesSection/>
    <BestSellers/>
    <CategoryList/>
    <BestPriceBanner/>
    <Footer/>
    </>
  );
}
