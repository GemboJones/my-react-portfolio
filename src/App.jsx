import styles from "./App.module.css";
import { About } from "./Components/About/About";
import { Footer } from "./Components/Footer/Footer";
import { Hero } from "./Components/Hero/Hero";
import { Navbar } from "./Components/Navbar/Navbar";
import { Projects } from "./Components/Projects/Projects";
// import { Skills } from "./Components/Skills/Skills";
// import { Skills2 } from "./Components/Skills2/Skills2";
import { Skills3 } from "./Components/Skills3/Skills3";

function App() {
  return (
    <>
      <div className={styles.App}>
        <Navbar />
        <Hero />
        <About />
        {/* <Skills />
        <Skills2 /> */}
        <Skills3 />
        <Projects />
        <Footer />
      </div>
    </>
  );
}

export default App;
