import Footer from "./(components)/Footer";
import HeroSection from "./(components)/HeroSection";
import Navbar from "./(components)/Navbar";
import FeaturesSection from "./(components)/FeatureSection";
import BestSellers from "./(components)/BestSellers";
import CategoryList from "./(components)/CategoryList";
import BestPriceBanner from "./(components)/BestPriceBanner";
import Banners from "./(components)/Banners";
export default function Home() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <Banners/>
    <FeaturesSection/>
    <BestSellers/>
    <CategoryList/>
    <BestPriceBanner/>
    <Footer/>
    </>
  );
}
