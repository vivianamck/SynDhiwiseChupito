import React from "react";

import { Line, Text } from "components";

type EventsStacknameProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "username"
  | "userdate"
  | "usersubscriptions"
  | "userstatus"
  | "userpublish"
  | "useractions"
> &
  Partial<{
    username: string;
    userdate: string;
    usersubscriptions: JSX.Element | string;
    userstatus: string;
    userpublish: string;
    useractions: string;
  }>;

const EventsStackname: React.FC<EventsStacknameProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="md:h-[1085px] h-[201px] m-auto w-full">
          <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-full">
            <div className="flex flex-col md:gap-10 gap-[70px] items-center justify-start w-full">
              <Line className="bg-gray-500 h-px w-full" />
              <Line className="bg-gray-500 h-px w-full" />
            </div>
          </div>
          <div className="absolute flex md:flex-col flex-row md:gap-5 h-full inset-[0] items-center justify-center m-auto w-[65%]">
            <Line className="bg-gray-400 h-[201px] md:h-px md:w-full w-px" />
            <Line className="bg-gray-400 h-[201px] md:h-px md:ml-[0] ml-[201px] md:w-full w-px" />
            <Line className="bg-gray-400 h-[201px] md:h-px md:ml-[0] ml-[200px] md:w-full w-px" />
            <Line className="bg-gray-400 h-[201px] md:h-px md:ml-[0] ml-[225px] md:w-full w-px" />
            <Line className="bg-gray-400 h-[201px] md:h-px md:ml-[0] ml-[200px] md:w-full w-px" />
          </div>
        </div>
        <div className="absolute flex md:flex-col flex-row md:gap-5 inset-x-[0] items-start justify-start mx-auto pb-[5px] pr-[5px] top-[8%] w-[96%]">
          <Text
            className="md:mt-0 mt-[7px] text-base text-gray-800 tracking-[-0.32px]"
            size="txtInterSemiBold16Gray800"
          >
            {props?.username}
          </Text>
          <Text
            className="ml-44 md:ml-[0] md:mt-0 my-[3px] text-base text-gray-800 tracking-[-0.32px]"
            size="txtInterSemiBold16Gray800"
          >
            {props?.userdate}
          </Text>
          {props?.usersubscriptions}
          <Text
            className="mb-1.5 md:ml-[0] ml-[84px] text-base text-gray-800 tracking-[-0.32px]"
            size="txtInterSemiBold16Gray800"
          >
            {props?.userstatus}
          </Text>
          <Text
            className="mb-1.5 md:ml-[0] ml-[178px] text-base text-gray-800 tracking-[-0.32px]"
            size="txtInterSemiBold16Gray800"
          >
            {props?.userpublish}
          </Text>
          <Text
            className="md:ml-[0] ml-[152px] md:mt-0 my-[3px] text-base text-gray-800 tracking-[-0.32px]"
            size="txtInterSemiBold16Gray800"
          >
            {props?.useractions}
          </Text>
        </div>
      </div>
    </>
  );
};

EventsStackname.defaultProps = {
  username: "Name",
  userdate: "Date",
  usersubscriptions: (
    <Text
      className="md:ml-[0] ml-[162px] md:mt-0 my-[3px] text-base text-gray-800 tracking-[-0.32px]"
      size="txtInterSemiBold16Gray800"
    >
      <span className="text-gray-800 font-inter text-left font-semibold">
        #{" "}
      </span>
      <span className="text-gray-800 font-inter text-left font-bold">
        Subscriptions
      </span>
    </Text>
  ),
  userstatus: "Status",
  userpublish: "Publish",
  useractions: "Actions",
};

export default EventsStackname;
