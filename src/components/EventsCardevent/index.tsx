import React from "react";

import { Img, Text } from "components";

type EventsCardeventProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "laborday"
  | "componentthree"
  | "date"
  | "plusfifteentext"
  | "joined"
  | "registertext"
  | "moreinfo"
> &
  Partial<{
    laborday: string;
    componentthree: string;
    date: string;
    plusfifteentext: string;
    joined: string;
    registertext: string;
    moreinfo: string;
  }>;

const EventsCardevent: React.FC<EventsCardeventProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-[15px] items-center justify-start w-full">
          <div className="bg-black-900 flex flex-row items-center justify-between p-[5px] w-full">
            <Text
              className="ml-1 text-lg text-white-A700"
              size="txtInterRegular18"
            >
              {props?.laborday}
            </Text>
            <Text
              className="bg-light_green-900 h-6 justify-center mr-1.5 my-0.5 px-[3px] rounded-[3px] text-lg text-white-A700 w-[61px]"
              size="txtInterRegular18"
            >
              {props?.componentthree}
            </Text>
          </div>
          <div className="flex flex-col items-start justify-start w-[94%] md:w-full">
            <Text className="text-lg text-orange-300" size="txtInterSemiBold18">
              {props?.date}
            </Text>
            <Img
              className="h-[149px] sm:h-auto mt-0.5 object-cover w-full"
              src="images/img_image1.png"
              alt="imageOne"
            />
            <div className="flex flex-row items-end justify-between mt-3 w-full">
              <div className="flex flex-row gap-3 items-center justify-between mb-1 mt-[19px] pr-[7px] w-[38%]">
                <div className="md:h-[34px] h-[35px] relative w-[47%]">
                  <div className="absolute md:h-[34px] h-[35px] inset-[0] justify-center m-auto w-full">
                    <Img
                      className="absolute h-[34px] inset-y-[0] left-[0] my-auto rounded-[50%] w-[34px]"
                      src="images/img_image2.png"
                      alt="imageTwo"
                    />
                    <div className="absolute bg-blue_gray-100_01 bottom-[0] h-[30px] right-[0] rounded-[50%] w-[30px]"></div>
                  </div>
                  <Text
                    className="absolute bottom-[20%] right-[0] text-black-900 text-sm tracking-[-0.28px]"
                    size="txtInterRegular14Black900"
                  >
                    {props?.plusfifteentext}
                  </Text>
                </div>
                <Text
                  className="text-black-900 text-sm tracking-[-0.28px]"
                  size="txtInterRegular14Black900"
                >
                  {props?.joined}
                </Text>
              </div>
              <div className="flex flex-col gap-[13px] items-start justify-start w-[32%]">
                <div className="h-[25px] md:ml-[0] ml-[5px] pr-1 relative rounded-[10px] w-[95%]">
                  <div className="absolute bg-orange-300 h-[25px] inset-y-[0] left-[0] my-auto rounded-[5px] w-[96%]"></div>
                  <Text
                    className="absolute h-max inset-[0] justify-center m-auto text-base text-white-A700 tracking-[-0.32px] w-max"
                    size="txtInterRegular16WhiteA700"
                  >
                    {props?.registertext}
                  </Text>
                </div>
                <Text
                  className="text-base text-light_green-900 tracking-[-0.32px] underline"
                  size="txtInterSemiBold16Lightgreen900"
                >
                  {props?.moreinfo}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

EventsCardevent.defaultProps = {
  laborday: "Labor Day",
  componentthree: "Active",
  date: "15 May 2023",
  plusfifteentext: "+ 15",
  joined: "Joined",
  registertext: "Register",
  moreinfo: "+ more info",
};

export default EventsCardevent;
