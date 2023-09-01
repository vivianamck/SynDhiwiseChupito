import React from "react";

import { Button, Img, Line, List, SelectBox, Text } from "components";
import EventsCardevent from "components/EventsCardevent";
import EventsColumnevents from "components/EventsColumnevents";
import LoginHeader1 from "components/LoginHeader1";

const textinputOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const EventsPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-100 flex flex-col font-inter items-center justify-start mx-auto pb-[352px] w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <LoginHeader1 className="bg-black-900 flex sm:flex-col flex-row sm:gap-5 items-center justify-end p-3 w-full" />
          <EventsColumnevents className="bg-gray-100 flex flex-col gap-[23px] justify-start max-w-[1255px] mt-6 mx-auto p-[22px] md:px-5 w-full" />
          <div className="flex flex-col md:gap-10 gap-[69px] items-start justify-start max-w-[1281px] mt-5 mx-auto md:px-5 w-full">
            <Line className="bg-gray-500 h-px w-full" />
            <List
              className="sm:flex-col flex-row gap-[23px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 w-[78%]"
              orientation="horizontal"
            >
              {new Array(3).fill({}).map((props, index) => (
                <React.Fragment key={`EventsCardevent${index}`}>
                  <EventsCardevent
                    className="bg-blue_gray-100 flex flex-col items-center justify-start pb-[19px] w-full"
                    {...props}
                  />
                </React.Fragment>
              ))}
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventsPage;
