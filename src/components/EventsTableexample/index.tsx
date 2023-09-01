import React from "react";

import { Button, Img, List, Text } from "components";

type EventsTableexampleProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "textcell"
  | "textcellOne"
  | "textcellTwo"
  | "textcell1"
  | "dateOne"
  | "dateTwo"
  | "textcell2"
  | "textcellone1"
  | "textcelltwo1"
  | "textcell3"
  | "textcellone2"
  | "textcelltwo2"
  | "publish"
  | "disable"
  | "disableOne"
  | "textcellone3"
> &
  Partial<{
    textcell: string;
    textcellOne: string;
    textcellTwo: string;
    textcell1: string;
    dateOne: string;
    dateTwo: string;
    textcell2: string;
    textcellone1: string;
    textcelltwo1: string;
    textcell3: string;
    textcellone2: string;
    textcelltwo2: string;
    publish: string;
    disable: string;
    disableOne: string;
    textcellone3: string;
  }>;

const EventsTableexample: React.FC<EventsTableexampleProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <List
          className="sm:flex-col flex-row gap-px grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 w-[67%] md:w-full"
          orientation="horizontal"
        >
          <div className="flex flex-col items-start justify-start w-full">
            <Text
              className="bg-gray-100 border-b border-gray-600 border-solid justify-center pl-4 sm:pr-5 pr-[35px] py-3 text-base text-blue_gray-600 tracking-[-0.32px] w-full"
              size="txtInterSemiBold16"
            >
              {props?.textcell}
            </Text>
            <Text
              className="bg-gray-100 border-b border-gray-600 border-solid justify-center pb-[15px] pl-4 sm:pr-5 pr-[35px] pt-[18px] text-base text-blue_gray-600 tracking-[-0.32px] w-full"
              size="txtInterRegular16"
            >
              {props?.textcellOne}
            </Text>
            <Text
              className="bg-gray-100 border-b border-gray-600 border-solid justify-center pl-4 sm:pr-5 pr-[35px] py-4 text-base text-blue_gray-600 tracking-[-0.32px] w-full"
              size="txtInterRegular16"
            >
              {props?.textcellTwo}
            </Text>
          </div>
          <div className="flex flex-col items-start justify-start w-full">
            <Text
              className="bg-gray-100 border-b border-gray-600 border-solid justify-center pl-4 sm:pr-5 pr-[35px] py-3 text-base text-blue_gray-600 tracking-[-0.32px] w-full"
              size="txtInterSemiBold16"
            >
              {props?.textcell1}
            </Text>
            <Text
              className="bg-gray-100 border-b border-gray-600 border-solid justify-center pb-[15px] pl-4 sm:pr-5 pr-[35px] pt-[18px] text-base text-blue_gray-600 tracking-[-0.32px] w-full"
              size="txtInterRegular16"
            >
              {props?.dateOne}
            </Text>
            <Text
              className="bg-gray-100 border-b border-gray-600 border-solid justify-center pb-[15px] pl-4 sm:pr-5 pr-[35px] pt-[18px] text-base text-blue_gray-600 tracking-[-0.32px] w-full"
              size="txtInterRegular16"
            >
              {props?.dateTwo}
            </Text>
          </div>
          <div className="flex flex-col items-start justify-start w-full">
            <Text
              className="bg-gray-100 border-b border-gray-600 border-solid justify-center pb-[11px] pl-4 sm:pr-5 pr-[35px] pt-3.5 text-base text-blue_gray-600 tracking-[-0.32px] w-full"
              size="txtInterSemiBold16"
            >
              {props?.textcell2}
            </Text>
            <Text
              className="bg-gray-100 border-b border-gray-600 border-solid justify-center pl-4 sm:pr-5 pr-[35px] py-4 text-base text-blue_gray-600 tracking-[-0.32px] w-full"
              size="txtInterRegular16"
            >
              {props?.textcellone1}
            </Text>
            <Text
              className="bg-gray-100 border-b border-gray-600 border-solid justify-center pl-4 sm:pr-5 pr-[35px] py-4 text-base text-blue_gray-600 tracking-[-0.32px] w-full"
              size="txtInterRegular16"
            >
              {props?.textcelltwo1}
            </Text>
          </div>
          <div className="flex flex-col items-start justify-start w-full">
            <Text
              className="bg-gray-100 border-b border-gray-600 border-solid justify-center pl-4 sm:pr-5 pr-[35px] py-3 text-base text-blue_gray-600 tracking-[-0.32px] w-full"
              size="txtInterSemiBold16"
            >
              {props?.textcell3}
            </Text>
            <Text
              className="bg-gray-100 border-b border-gray-600 border-solid justify-center pl-4 sm:pr-5 pr-[35px] py-4 text-base text-blue_gray-600 tracking-[-0.32px] w-full"
              size="txtInterRegular16"
            >
              {props?.textcellone2}
            </Text>
            <Text
              className="bg-gray-100 border-b border-gray-600 border-solid justify-center pl-4 sm:pr-5 pr-[35px] py-4 text-base text-blue_gray-600 tracking-[-0.32px] w-full"
              size="txtInterRegular16"
            >
              {props?.textcelltwo2}
            </Text>
          </div>
        </List>
        <div className="flex flex-col items-start justify-start w-full">
          <Text
            className="bg-gray-100 border-b border-gray-600_f8 border-solid justify-center pl-4 sm:pr-5 pr-[35px] py-3 text-base text-blue_gray-600 tracking-[-0.32px] w-full"
            size="txtInterSemiBold16"
          >
            {props?.publish}
          </Text>
          <div className="bg-gray-100 border-b border-gray-600 border-solid flex flex-col items-center justify-start p-4 w-full">
            <Button className="bg-blue_gray-600 cursor-pointer font-inter font-semibold min-w-[81px] py-[9px] rounded-[17px] text-center text-sm text-white-A700 tracking-[-0.28px]">
              {props?.disable}
            </Button>
          </div>
          <div className="bg-gray-100 border-b border-gray-600 border-solid flex flex-col items-center justify-start p-4 w-full">
            <Button className="bg-blue_gray-600 cursor-pointer font-inter font-semibold min-w-[81px] py-[9px] rounded-[17px] text-center text-sm text-white-A700 tracking-[-0.28px]">
              {props?.disableOne}
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start w-full">
          <Text
            className="bg-gray-100 border-b border-gray-600 border-solid justify-center pl-4 sm:pr-5 pr-[35px] py-3 text-base text-blue_gray-600 tracking-[-0.32px] w-full"
            size="txtInterSemiBold16"
          >
            {props?.textcellone3}
          </Text>
          <div className="bg-gray-100 border-b border-gray-600 border-solid flex flex-row gap-[41px] items-center justify-start px-4 py-[9px] w-full">
            <Img className="h-6 w-6" src="images/img_edit.svg" alt="edit" />
            <Img
              className="h-6 w-6"
              src="images/img_trash01.svg"
              alt="trashOne"
            />
          </div>
          <div className="bg-gray-100 border-b border-gray-600 border-solid flex flex-row gap-[41px] items-center justify-start px-4 py-[9px] w-full">
            <Img className="h-6 w-6" src="images/img_edit.svg" alt="edit_One" />
            <Img
              className="h-6 w-6"
              src="images/img_trash01.svg"
              alt="trashOne_One"
            />
          </div>
        </div>
      </div>
    </>
  );
};

EventsTableexample.defaultProps = {
  textcell: "Name",
  textcellOne: "Labor Day",
  textcellTwo: "Event Test Edit",
  textcell1: "Date",
  dateOne: "15 May 2023",
  dateTwo: "31 Aug 2023",
  textcell2: "# Subscriptions",
  textcellone1: "15",
  textcelltwo1: "15",
  textcell3: "Status",
  textcellone2: "active",
  textcelltwo2: "active",
  publish: "Publish",
  textcellone3: "Actions",
};

export default EventsTableexample;
