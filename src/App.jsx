// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from '../component/Home.jsx';

import Education from '../component/Education.jsx';
import Projects from '../component/Projects.jsx';
import AchievementsSection from '../component/AchievementsSection.jsx';

// import About from "..Component";
// import Contact from "./Contact.jsx";

function App() {
  return (
    <>
      <Home />
      <Education />
      <Projects />
      <AchievementsSection />
    </>
  );
}

export default App;
