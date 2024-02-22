import styles from './App.module.css'
import { About } from './Components/About/About';
import { Hero } from './Components/Hero/Hero';
import { Navbar } from './Components/Navbar/Navbar';
import { Skills } from './Components/Skills/Skills';

function App() {

  return (
    <>
      <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      </div>
    </>
  );
}

export default App
