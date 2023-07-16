import { PropsWithChildren, FC } from "react";

const Button: FC<PropsWithChildren> = ({ children }) => {
  return <button className="button">{children}</button>;
};

export default Button;
