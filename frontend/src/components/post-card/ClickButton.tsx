"use client";

type PhotoButtonProps = {
  src: any;
  desc: any;
  clickhandler?: () => void;
  children?: React.ReactNode;
  className?: string;
  classNameImg?: string;
};

export const ClickButton = ({
  src,
  desc,
  children,
  clickhandler,
  className,
  classNameImg,
}: PhotoButtonProps) => {
  return (
    <button
      onClick={clickhandler}
      className={`flex-1 p-3 flex gap-2 items-center justify-center hover:bg-[#f2eee9] rounded-full transition-all duration-300 ease-in-out ${className}`}
    >
      <img className={`w-5 h-5 ${classNameImg} `} src={src} alt="zurag" />

      {desc}
      {children}
    </button>
  );
};
