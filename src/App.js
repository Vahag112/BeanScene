import './App.scss';
import Coffee from './components/coffee/Coffee';
import Different from './components/different/Different';
import Discover from './components/discover/Discover';
import Enjoy from './components/enjoy/Enjoy';
import Footer from './components/footer/Footer';
import Morning from './components/morning/Morning';
import Perfection from './components/perfection/Perfection';
import Subscribe from './components/subscribe/Subscribe';

function App() {
  return (
    <div className="App">
      <main>
        <Coffee />
        <Discover />
        <Enjoy />
        <Different />
        <Morning />
        <Perfection />
        <Subscribe />
      </main>
      <Footer />
    </div>
  );
}

export default App;
