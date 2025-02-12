interface Section3FeatureProps {
  title: string;
  description: string;
  SvgComponent: JSX.Element;
}

export const Section3Feature: React.FC<Section3FeatureProps> = ({
  title,
  description,
  SvgComponent,
}) => {
  return (
    <div className="w-full h-[282px] relative">
      <div className="w-[85px] h-[85px] flex items-center justify-start mb-4">
        {SvgComponent}
      </div>
      <div className="w-full h-6 text-[#102d3f] text-[21px] font-bold font-['Inter'] mb-6">
        {title}
      </div>
      <div className="w-full h-[136px] text-[#102d3f] text-lg font-normal font-['Inter']">
        {description}
      </div>
    </div>
  );
};
