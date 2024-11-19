"use client";

type PhotoButtonProps = {
  src: any;
  desc: any;
  clickhandler?: () => void;
  children?: React.ReactNode;
};

export const ClickButton = ({ src, desc, children }: PhotoButtonProps) => {
  return (
    <button className="flex-1 p-3 flex gap-2 items-center justify-center hover:bg-[#f8f0e5] rounded-md">
      <img className="w-6 h-6" src={src} alt="zurag" />
      {desc}
      {children}
    </button>
  );
};
