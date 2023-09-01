import React from "react";

import { Img, Text } from "components";

type EventsHeader2Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "chupitotext" | "admintext" | "logouttext"
> &
  Partial<{ chupitotext: string; admintext: string; logouttext: string }>;

const EventsHeader2: React.FC<EventsHeader2Props> = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-7 md:mt-0 mt-1"
          src="images/img_menu.svg"
          alt="menu"
        />
        <Text
          className="md:ml-[0] ml-[585px] md:mt-0 mt-1.5 text-2xl md:text-[22px] text-white-A700 sm:text-xl"
          size="txtInterRegular24"
        >
          {props?.chupitotext}
        </Text>
        <Text
          className="md:ml-[0] ml-[523px] md:mt-0 mt-[5px] text-lg text-white-A700"
          size="txtInterRegular18"
        >
          {props?.admintext}
        </Text>
        <div className="bg-blue_gray-100 flex flex-row items-start justify-center ml-8 md:ml-[0] md:mt-0 my-[3px] pr-0.5 py-0.5 w-[7%] md:w-full">
          <Img
            className="h-6 w-6"
            src="images/img_logout01.svg"
            alt="logoutOne"
          />
          <Text
            className="mt-1 text-black-900 text-lg"
            size="txtInterRegular18Black900"
          >
            {props?.logouttext}
          </Text>
        </div>
      </div>
    </>
  );
};

EventsHeader2.defaultProps = {
  chupitotext: "Chupito",
  admintext: "Admin",
  logouttext: "Logout",
};

export default EventsHeader2;
