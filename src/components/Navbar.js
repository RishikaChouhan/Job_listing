import { useMemo } from "react";
import Property1Variant2 from "./Property1Variant2";

const Navbar = ({ navbarPosition }) => {
  const navbarStyle = useMemo(() => {
    return {
      position: navbarPosition,
    };
  }, [navbarPosition]);

  return (
    <div
      className="bg-seagreen h-20 overflow-hidden shrink-0 text-left text-base text-black font-poppins self-stretch"
      style={navbarStyle}
    >
      <div className="absolute top-[-121px] left-[-116px] rounded-81xl-5 bg-primary w-[338px] h-[201px]" />
      <Property1Variant2
        image1="/image-1@2x.png"
        property1Variant2Width="92px"
        property1Variant2Height="51px"
        property1Variant2Position="absolute"
        property1Variant2Top="15px"
        property1Variant2Left="37px"
        kisanBharatTop="7px"
        kisanBharatLeft="53px"
        kisanBharatFontSize="22px"
        image1IconWidth="48px"
        image1IconHeight="51px"
      />
      <div className="absolute top-[calc(50%_-_13px)] left-[calc(50%_+_36px)] w-[462px] flex flex-row items-start justify-start gap-[36px]">
        <div className="relative inline-block w-[54px] h-[27px] shrink-0">
          Home
        </div>
        <div className="relative">Product</div>
        <div className="relative">Add Product</div>
        <div className="relative">Jobs</div>
        <div className="relative">Scheme</div>
      </div>
      <img
        className="absolute w-[2.92%] top-[calc(50%_-_21px)] right-[3.96%] left-[93.13%] max-w-full overflow-hidden h-[42px]"
        alt=""
        src="/vector.svg"
      />
      <img
        className="absolute top-[19px] left-[1261px] w-[42px] h-[42px] object-cover"
        alt=""
        src="/image-3@2x.png"
      />
    </div>
  );
};

export default Navbar;
