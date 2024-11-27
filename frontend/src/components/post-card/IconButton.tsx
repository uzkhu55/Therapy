"use client";

type IconProps = {
  onclick?: () => void;
  children?: React.ReactNode;
};

export const IconButton = ({ children, onclick }: IconProps) => {
  return (
    <div
      className="relative  transition-all duration-300 ease-in-out"
      onClick={onclick}
    >
      {children}
    </div>
  );
};
