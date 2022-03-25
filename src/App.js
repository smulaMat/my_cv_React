import Navbar from "./components/navbar/navbar";
import AboutMe from "./components/aboutme/AboutMe";
import Education from "./components/edu/Education";
import "./App.css";
import Jobs from "./components/jobs/Jobs";
import Hobbies from "./components/hobbies/Hobbies"
import Header from "./components/header/Header";
// import Button_BackTop from './components/Button_backTop';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header>
        <Header />        
      </header>
      <AboutMe />
      <Jobs />
      <Education />
      <Hobbies />
      {/* <Button_BackTop /> */}
    </div>
  );
}

export default App;
