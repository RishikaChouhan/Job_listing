import { useMemo } from "react";
import Property1Variant2 from "./Property1Variant2";
import SocialMediaContainer from "./SocialMediaContainer";

const Footer = ({ line1, footerPosition, footerFlexShrink }) => {
  const footerStyle = useMemo(() => {
    return {
      position: footerPosition,
      flexShrink: footerFlexShrink,
    };
  }, [footerPosition, footerFlexShrink]);

  return (
    <div
      className="[background:linear-gradient(rgba(33,_150,_83,_0.3),_rgba(33,_150,_83,_0.3)),_#d2d2d2] h-[277px] overflow-hidden text-left text-xl text-black font-poppins self-stretch"
      style={footerStyle}
    >
      <Property1Variant2
        image1="/image-11@2x.png"
        property1Variant2Width="202px"
        property1Variant2Height="138px"
        property1Variant2Position="absolute"
        property1Variant2Top="70px"
        property1Variant2Left="69px"
        kisanBharatTop="18px"
        kisanBharatLeft="91px"
        kisanBharatFontSize="50px"
        image1IconWidth="101px"
        image1IconHeight="122px"
      />
      <div className="absolute top-[56px] left-[608px] flex flex-col items-start justify-start gap-[15px]">
        <div className="relative">Product</div>
        <div className="relative">Jobs</div>
        <div className="relative">Loan</div>
        <div className="relative">Scheme</div>
      </div>
      <div className="absolute top-[62px] left-[430px] flex flex-col items-start justify-start gap-[15px]">
        <div className="relative">Home</div>
        <div className="relative">About</div>
        <div className="relative">Contact us</div>
      </div>
      <img
        className="absolute top-[calc(50%_-_104.06px)] left-[360.5px] w-[3px] h-[207.06px]"
        alt=""
        src={line1}
      />
      <img
        className="absolute top-[calc(50%_-_104px)] left-[780.5px] w-[3px] h-[207.06px]"
        alt=""
        src="/line-2.svg"
      />
      <img
        className="absolute top-[calc(50%_-_103px)] left-[1103.5px] w-[3px] h-[207.06px]"
        alt=""
        src="/line-2.svg"
      />
      <SocialMediaContainer />
      <img
        className="absolute top-[69px] left-[1098px] rounded-231xl w-[140px] h-[140px] object-cover"
        alt=""
        src="/moiremovebgpreview-1@2x.png"
      />
      <div className="absolute top-[94px] left-[1233px] font-medium">
        <p className="m-0">{`Ministry of Skill `}</p>
        <p className="m-0">Development and</p>
        <p className="m-0">Entrepreneurship</p>
      </div>
    </div>
  );
};

export default Footer;
