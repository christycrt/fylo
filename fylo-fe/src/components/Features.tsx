import { IoArrowForwardCircle } from "react-icons/io5";
import featureData from "../data/featureData.json";

interface IFeature {
  icon: string;
  title: string;
  detail: string;
}

const Features = () => {
  return (
    <div className="bg-dark-blue-main container pt-32">
      <div className="space-y-20">
        {featureData.map((item, key) => {
          return (
            <div key={key} className="text-center">
              <img className="mx-auto pb-6" src={item.icon} alt={item.title} />
              <h2 className="pb-2">{item.title}</h2>
              <p>{item.detail}</p>
            </div>
          );
        })}
      </div>
      <div className="pt-40">
        <img
          className=" pb-14"
          src="images/illustration-stay-productive.png"
          alt="work"
        />
        <h2 className="pb-4">Stay productive, wherever you are</h2>
        <p className="pb-4">
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
        </p>
        <p className="pb-4">
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required.
        </p>
        <a href="/" className="flex">
          <span className="flex items-center border-b border-cyan space-x-2 pb-1">
            <span className="text-sm text-cyan">See how Fylo works</span>
            <IoArrowForwardCircle className="fill-cyan" />
          </span>
        </a>
      </div>
    </div>
  );
};

export default Features;
