import "./button.css";

const Button = ({
  text,
  handleClick,
}: {
  text: string;
  handleClick: () => void;
}) => {
  return (
    <div className="button" onClick={handleClick}>
      <p>{text}</p>
    </div>
  );
};

export default Button;
