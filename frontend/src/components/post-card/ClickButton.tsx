"use client";

type PhotoButtonProps = {
  src: any;
  desc: any;
  clickhandler?: () => void;
  children?: React.ReactNode;
};

export const ClickButton = ({
  src,
  desc,
  children,
  clickhandler,
}: PhotoButtonProps) => {
  return (
    <button
      onClick={clickhandler}
      className="flex-1 p-3 flex gap-2 items-center justify-center hover:bg-[#f2eee9] rounded-full"
    >
      <img className="w-5 h-5" src={src} alt="zurag" />
      {desc}
      {children}
    </button>
  );
};
