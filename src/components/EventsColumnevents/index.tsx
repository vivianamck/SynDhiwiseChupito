import React from "react";

import { Img, SelectBox, Text } from "components";

type EventsColumneventsProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "events"
> &
  Partial<{ events: string }>;

const textinputOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const EventsColumnevents: React.FC<EventsColumneventsProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="md:ml-[0] ml-[3px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
          size="txtInterBold24"
        >
          {props?.events}
        </Text>
        <div className="flex flex-col items-center justify-start mb-[29px] md:ml-[0] ml-[166px] mr-[698px] w-[29%] md:w-full">
          <div className="flex flex-col h-[50px] md:h-auto items-start justify-end w-[345px] sm:w-full">
            <SelectBox
              className="bg-white-A700 border border-blue_gray-600 border-solid font-inter pl-3 pr-[15px] py-[11px] rounded-md text-base text-blue_gray-600 text-left tracking-[-0.32px] w-full"
              placeholderClassName="text-blue_gray-600"
              indicator={
                <Img
                  className="h-6 mr-[0] w-6"
                  src="images/img_arrowdown.svg"
                  alt="arrow_down"
                />
              }
              isMulti={false}
              name="textinput"
              options={textinputOptionsList}
              isSearchable={false}
              placeholder="Choose a Headquarter"
            />
          </div>
        </div>
      </div>
    </>
  );
};

EventsColumnevents.defaultProps = { events: "Events" };

export default EventsColumnevents;
