import { CardWrapper } from "./styles";
import { CardProps } from "./types";

function Card({ children, type = "outlined" }: CardProps) {
  return <CardWrapper type={type}>{children}</CardWrapper>;
}

export default Card;
