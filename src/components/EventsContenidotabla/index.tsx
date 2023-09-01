import React from "react";

import { Button, Img, Text } from "components";

type EventsContenidotablaProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "accesosrpidos" | "date" | "language" | "userstatus" | "disable"
> &
  Partial<{
    accesosrpidos: string;
    date: string;
    language: string;
    userstatus: string;
    disable: string;
  }>;

const EventsContenidotabla: React.FC<EventsContenidotablaProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex sm:flex-col flex-row gap-6 items-start justify-start max-w-[1245px] w-full">
          <Text
            className="text-blue_gray-900 text-sm w-[57px]"
            size="txtSourceSansProLight14"
          >
            {props?.accesosrpidos}
          </Text>
          <Text
            className="text-blue_gray-900 text-sm w-[68px]"
            size="txtSourceSansProLight14"
          >
            {props?.date}
          </Text>
          <Text
            className="text-blue_gray-900 text-sm w-[13px]"
            size="txtSourceSansProLight14"
          >
            {props?.language}
          </Text>
          <Text
            className="text-blue_gray-900 text-sm w-[34px]"
            size="txtSourceSansProLight14"
          >
            {props?.userstatus}
          </Text>
          <Button className="bg-blue_gray-600 cursor-pointer font-inter font-semibold py-[9px] rounded-[17px] text-center text-sm text-white-A700 tracking-[-0.28px] w-[81px]">
            {props?.disable}
          </Button>
          <div className="flex sm:flex-1 flex-row gap-[51px] items-center justify-center w-[9%] sm:w-full">
            <Img
              className="h-[30px] w-[30px]"
              src="images/img_edit.svg"
              alt="edit"
            />
            <Img
              className="h-[30px] w-[30px]"
              src="defaultNoData.png"
              alt="trash"
            />
          </div>
        </div>
      </div>
    </>
  );
};

EventsContenidotabla.defaultProps = {
  accesosrpidos: "Labor Day",
  date: "15 May 2023",
  language: "                      15",
  userstatus: "Active",
  disable: "Disable",
};

export default EventsContenidotabla;
