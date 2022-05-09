import Button from "./common/Button";

const Intro = () => {
  return (
    <div className="intro-section container">
      <img
        className="pt-8 pb-10"
        src="images/illustration-intro.png"
        alt="intro-img"
      />
      <div className="text-center">
        <h1>All your files in one secure location, accessible anywhere.</h1>
        <p className="py-6">
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </p>
        <Button>Get Started</Button>
      </div>
    </div>
  );
};

export default Intro;
