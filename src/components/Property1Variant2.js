import { useMemo } from "react";

const Property1Variant2 = ({
  image1,
  property1Variant2Width,
  property1Variant2Height,
  property1Variant2Position,
  property1Variant2Top,
  property1Variant2Left,
  kisanBharatTop,
  kisanBharatLeft,
  kisanBharatFontSize,
  image1IconWidth,
  image1IconHeight,
}) => {
  const property1Variant2Style = useMemo(() => {
    return {
      width: property1Variant2Width,
      height: property1Variant2Height,
      position: property1Variant2Position,
      top: property1Variant2Top,
      left: property1Variant2Left,
    };
  }, [
    property1Variant2Width,
    property1Variant2Height,
    property1Variant2Position,
    property1Variant2Top,
    property1Variant2Left,
  ]);

  const kisanBharatStyle = useMemo(() => {
    return {
      top: kisanBharatTop,
      left: kisanBharatLeft,
      fontSize: kisanBharatFontSize,
    };
  }, [kisanBharatTop, kisanBharatLeft, kisanBharatFontSize]);

  const image1IconStyle = useMemo(() => {
    return {
      width: image1IconWidth,
      height: image1IconHeight,
    };
  }, [image1IconWidth, image1IconHeight]);

  return (
    <div
      className="w-[202px] h-[138px] text-left text-31xl text-black font-karantina"
      style={property1Variant2Style}
    >
      <div className="absolute top-[18px] left-[91px]" style={kisanBharatStyle}>
        <p className="m-0">Kisan</p>
        <p className="m-0">Bharat</p>
      </div>
      <img
        className="absolute top-[0px] left-[0px] w-[101px] h-[122px] object-cover"
        alt=""
        src={image1}
        style={image1IconStyle}
      />
    </div>
  );
};

export default Property1Variant2;
