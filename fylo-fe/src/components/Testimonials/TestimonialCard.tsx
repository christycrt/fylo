interface Props {
  data: {
    testimonial: string;
    profile: string;
    name: string;
    position: string;
  };
}

const TestimonialCard: React.FC<Props> = ({ data }) => {
  return (
    <div className="bg-dark-blue-test p-6 rounded-md">
      <p className="text-xs mb-6">{data.testimonial}</p>
      <div className="flex space-x-2">
        <img
          className="rounded-full w-[30px]"
          src={data.profile}
          alt="profile"
        />
        <div className="flex flex-col">
          <p className="text-xs font-bold">{data.name}</p>
          <p className="text-xxs">{data.position}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
