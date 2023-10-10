import { useMemo } from "react";

const Property1Partial = ({
  join,
  property1PartialBorder,
  property1PartialBackgroundColor,
  property1PartialWidth,
  property1PartialFlexShrink,
  joinColor,
}) => {
  const property1PartialStyle = useMemo(() => {
    return {
      border: property1PartialBorder,
      backgroundColor: property1PartialBackgroundColor,
      width: property1PartialWidth,
      flexShrink: property1PartialFlexShrink,
    };
  }, [
    property1PartialBorder,
    property1PartialBackgroundColor,
    property1PartialWidth,
    property1PartialFlexShrink,
  ]);

  const joinStyle = useMemo(() => {
    return {
      color: joinColor,
    };
  }, [joinColor]);

  return (
    <div
      className="rounded-lg overflow-hidden flex flex-row items-center justify-center py-[9px] px-[45px] text-left text-base text-primary font-poppins border-[1px] border-solid border-primary"
      style={property1PartialStyle}
    >
      <div className="relative font-semibold" style={joinStyle}>
        {join}
      </div>
    </div>
  );
};

export default Property1Partial;
