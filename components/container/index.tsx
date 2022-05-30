import React, { ReactNode } from "react";

type ContainerType = {
  children: ReactNode;
};

const Container: React.FC<ContainerType> = ({ children }) => {
  return <div className="container mx-auto px-5">{children}</div>;
};

export default Container;
