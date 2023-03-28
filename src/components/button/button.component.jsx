import { CustomizedButton } from "./button.style";

const Button = ({ Icon, text, onClick, size }) => {
  return (
    <CustomizedButton onClick={onClick} height={size}>
      {Icon && <Icon />}

      {text && <span> {text} </span>}
    </CustomizedButton>
  );
};

export default Button;
