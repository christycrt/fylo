import "./styles/App.scss";

import Features from "./components/Features";
import Intro from "./components/Intro";
import Navbar from "./components/common/Navbar";
import SignupBox from "./components/SignupBox";
import Testimonials from "./components/Testimonials/Testimonials";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Features />
      <Testimonials />
      <SignupBox />
    </div>
  );
};

export default App;
