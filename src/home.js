import Collection from './Components/collection/Collection';
import Essentials from './Components/essentials/Essentials';
import Footer from './Components/footer/Footer';
import FoundIn from './Components/foundin/FoundIn';
import Hero from './Components/hero/Hero';
import PerfectFit from './Components/perfectfit/PerfectFit';
import Styles from './Components/styles/Styles';
import './sass/main.scss';

export default function Home() {
  return (
    <div>
      <Hero />
      <FoundIn />
      <Essentials />
      <PerfectFit />
      <Styles />
      <Collection />
      <Footer />
    </div>
  );
}
