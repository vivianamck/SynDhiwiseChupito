import React from "react";

import { Button, Img, Line, List, SelectBox, Text } from "components";
import EventsColumnevents from "components/EventsColumnevents";
import EventsHeader2 from "components/EventsHeader2";
import EventsTableexample from "components/EventsTableexample";

const textinputOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const Events1Page: React.FC = () => {
  return (
    <>
      <div className="bg-gray-100_01 flex flex-col font-inter items-center justify-start mx-auto pb-[65px] w-full">
        <EventsHeader2 className="bg-black-900 flex flex-row md:h-[197px] h-[60px] items-center justify-around p-5 relative w-full" />
        <EventsColumnevents className="bg-gray-100 flex flex-col gap-[23px] justify-start max-w-[1255px] mt-6 mx-auto p-[22px] md:px-5 w-full" />
        <Line className="bg-gray-500 h-px max-w-[1281px] mt-5 mx-auto w-full" />
        <div className="flex flex-col md:gap-10 gap-[482px] items-center justify-start max-w-[1284px] mt-[39px] mx-auto md:px-5 w-full">
          <EventsTableexample className="bg-gray-100 flex md:flex-col flex-row md:gap-5 items-start justify-start max-w-[1281px] rounded-[12px] w-full" />
          <Line className="bg-gray-500 h-px w-full" />
        </div>
      </div>
    </>
  );
};

export default Events1Page;
