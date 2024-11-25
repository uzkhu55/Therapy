"use client";

type IconProps = {
  onclick?: () => void;
  children?: React.ReactNode;
};

export const IconButton = ({ children, onclick }: IconProps) => {
  return (
    <div className="relative" onClick={onclick}>
      {children}
    </div>
  );
};
