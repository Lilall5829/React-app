// import React from 'react'
interface Props {
  color?: "primary" | "secondary" | "dark";
  children: string;
  onClick: () => void;
}
const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
