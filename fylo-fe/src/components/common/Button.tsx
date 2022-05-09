interface Props {
  type?: "submit" | undefined;
  onClick?: () => void;
  children: any;
}

const Button: React.FC<Props> = ({ type, onClick, children }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-gradient-to-r from-cyan to-blue font-bold px-20 py-4 rounded-full"
    >
      {children}
    </button>
  );
};

export default Button;
