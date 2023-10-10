import Navbar from "./Navbar";
import Property1Partial from "./Property1Partial";
import Footer from "./Footer";

const CreateJob = () => {
  return (
    <a
      className="[text-decoration:none] bg-gainsboro w-[1440px] overflow-hidden flex flex-col items-center justify-center gap-[87px] text-left text-xl text-black font-poppins"
      target="_blank"
    >
      <Navbar navbarPosition="relative" />
      <div className="rounded-[27px] bg-white overflow-hidden flex flex-col items-center justify-center p-20 gap-[10px]">
        <div className="relative text-[36px] font-semibold">
          Create a Job listing
        </div>
        <div className="flex flex-col items-start justify-start gap-[14px]">
          <div className="relative font-light">Job Title*</div>
          <div className="relative rounded-mid box-border w-[490px] h-[53px] overflow-hidden shrink-0 border-[1.5px] border-solid border-silver" />
        </div>
        <div className="flex flex-col items-start justify-start gap-[14px]">
          <div className="relative font-light">Description*</div>
          <div className="relative rounded-mid box-border w-[490px] h-[114px] overflow-hidden shrink-0 border-[1.5px] border-solid border-silver" />
        </div>
        <div className="flex flex-col items-start justify-start gap-[14px]">
          <div className="relative font-light">Ministry*</div>
          <div className="relative rounded-mid box-border w-[490px] h-[53px] overflow-hidden shrink-0 border-[1.5px] border-solid border-silver" />
        </div>
        <div className="flex flex-col items-start justify-start gap-[14px]">
          <div className="relative font-light">Duration of Job*</div>
          <div className="relative rounded-mid box-border w-[490px] h-[53px] overflow-hidden shrink-0 border-[1.5px] border-solid border-silver" />
        </div>
        <div className="flex flex-col items-start justify-start gap-[14px]">
          <div className="relative font-light">Total Vacancies*</div>
          <div className="relative rounded-mid box-border w-[490px] h-[53px] overflow-hidden shrink-0 border-[1.5px] border-solid border-silver" />
        </div>
        <div className="flex flex-col items-start justify-start gap-[14px]">
          <div className="relative font-light">Payment*</div>
          <div className="relative rounded-mid box-border w-[490px] h-[53px] overflow-hidden shrink-0 border-[1.5px] border-solid border-silver" />
        </div>
        <div className="flex flex-col items-start justify-start gap-[14px]">
          <div className="relative font-light">Location*</div>
          <img
            className="relative rounded-mid w-[490px] h-[53px] overflow-hidden shrink-0"
            alt=""
            src="/frame-60.svg"
          />
        </div>
        <div className="flex flex-col items-start justify-start gap-[14px]">
          <div className="relative font-light">Deadline*</div>
          <img
            className="relative rounded-mid w-[490px] h-[53px] overflow-hidden shrink-0"
            alt=""
            src="/frame-601.svg"
          />
        </div>
        <div className="flex flex-row items-center justify-center pt-[25px] px-0 pb-0 gap-[26px]">
          <Property1Partial
            join="Create"
            property1PartialBorder="unset"
            property1PartialBackgroundColor="#219653"
            property1PartialWidth="unset"
            property1PartialFlexShrink="unset"
            joinColor="#fff"
          />
          <Property1Partial
            join="Cancel"
            property1PartialBorder="1px solid #219653"
            property1PartialBackgroundColor="unset"
            property1PartialWidth="134px"
            property1PartialFlexShrink="0"
            joinColor="#219653"
          />
        </div>
      </div>
      <Footer
        line1="/line-1.svg"
        footerPosition="relative"
        footerFlexShrink="0"
      />
    </a>
  );
};

export default CreateJob;
