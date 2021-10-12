import Header from 'components/Header'
import HeroSection from 'components/HeroSection'
import Campaigns from 'components/Campaigns'
import Cards from 'components/Cards'
import Categories from 'components/Categories'
import Favorites from 'components/Favorities'
import Footer from 'components/Footer'
import MobileApp from 'components/MobileApp'


function App() {
  return (
    <>
      <Header/>
      <HeroSection/>
      <Categories/>
      <Campaigns/>
      <Favorites/>
      <MobileApp/>
      <Cards/>
      <Footer/>
    </>
  );
}

export default App;
