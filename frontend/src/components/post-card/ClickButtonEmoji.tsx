"use client";

type PhotoButtonProps = {
  src: any;
  desc: any;
  clickhandler?: () => void;
  children?: React.ReactNode;
};

export const ClickButtonEmoji = ({
  src,
  desc,
  clickhandler,
  children,
}: PhotoButtonProps) => {
  return (
    <button
      onClick={clickhandler}
      className="flex-1 p-3 flex gap-2 items-center justify-center hover:bg-[#f2eee9] rounded-full"
    >
      <img className="w-6 h-6" src={src} alt="zurag" />
      {desc}
      <div className="relative max-h-5">{children}</div>
    </button>
  );
};
