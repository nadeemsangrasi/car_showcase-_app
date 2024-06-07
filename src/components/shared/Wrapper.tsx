import { FC } from "react";
import "./style.scss";
const Wrapper: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="wrapper">{children}</div>;
};

export default Wrapper;
