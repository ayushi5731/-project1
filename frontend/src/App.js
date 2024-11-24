import './App.css';
import Hero from './components/Hero';
import Medical from './components/Medical';
import Product from './components/Product';
import Accuracy from './components/Accuracy';
import Aiworks from './components/Aiworks';
import Aiworks2 from './components/Aiworks2';
import Aiworks3 from './components/Aiworks3';
import Solutions from './components/Solutions';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Contact from './components/Contact';
import Wheel from './components/Wheel';

function App() {
  return (
    <div className="App">
      <Hero />
      <Medical />
      <Product />
       <Wheel /> 
      <Solutions />
      <Accuracy />
      <Aiworks />
      <Section1 />
      <Aiworks2 />
      <Section2 />
      <Aiworks3 />
      <Section3 />
      <Contact />
    </div>
  );
}

export default App;
