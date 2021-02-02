import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/App.scss';
import Hero from './components/Hero';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
    </div>
  );
}

export default App;
