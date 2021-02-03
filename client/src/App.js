import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/App.scss';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Projects />
    </div>
  );
}

export default App;
