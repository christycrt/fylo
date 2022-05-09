import TestimonialCard from "./TestimonialCard";
import testimonialData from "../../data/testimonialData.json";

const Testimonials = () => {
  return (
    <div className="bg-dark-blue-main container px-10 py-40">
      <img className="w-[25px] ml-1" src="images/bg-quotes.png" alt="quote" />
      <div className="space-y-8">
        {testimonialData.map((item, key) => {
          return (
            <div key={key}>
              <TestimonialCard data={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonials;
