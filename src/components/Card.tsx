import React, { ReactNode } from "react";

const Card = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={`h-full w-full rounded-xl ${className}`}>{children}</div>
  );
};

export default Card;
