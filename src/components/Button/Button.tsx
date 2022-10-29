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
      <a href="#">{text}</a>
    </div>
  );
};

export default Button;
