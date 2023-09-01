import React from "react";

import { Line, Text } from "components";

type EventsColumnrectangleProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "username" | "date" | "subscriptions" | "status" | "publish" | "actions"
> &
  Partial<{
    username: string;
    date: string;
    subscriptions: JSX.Element | string;
    status: string;
    publish: string;
    actions: string;
  }>;

const EventsColumnrectangle: React.FC<EventsColumnrectangleProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <Line className="bg-indigo-50 h-px rotate-[180deg] rounded-[1px] w-full" />
        <div className="bg-gray-50 flex flex-col items-start justify-end p-[3px] w-full">
          <div className="flex sm:flex-col flex-row gap-[41px] items-start justify-start max-w-[1103px] md:ml-[0] ml-[9px] w-full">
            <Text
              className="flex-1 text-blue_gray-900 text-sm w-auto"
              size="txtSourceSansProRegular14"
            >
              {props?.username}
            </Text>
            <Text
              className="flex-1 text-blue_gray-900 text-sm w-auto"
              size="txtSourceSansProRegular14"
            >
              {props?.date}
            </Text>
            {props?.subscriptions}
            <Text
              className="flex-1 text-blue_gray-900 text-sm w-auto"
              size="txtSourceSansProRegular14"
            >
              {props?.status}
            </Text>
            <Text
              className="flex-1 text-blue_gray-900 text-sm w-auto"
              size="txtSourceSansProRegular14"
            >
              {props?.publish}
            </Text>
            <Text
              className="flex-1 text-blue_gray-900 text-sm w-auto"
              size="txtSourceSansProRegular14"
            >
              {props?.actions}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

EventsColumnrectangle.defaultProps = {
  username: "Name",
  date: "Date",
  subscriptions: (
    <Text
      className="flex-1 text-blue_gray-900 text-sm w-auto"
      size="txtSourceSansProRegular14"
    >
      <span className="text-blue_gray-900 font-sourcesanspro text-left font-normal">
        {" "}
        #{" "}
      </span>
      <span className="text-blue_gray-900 font-sourcesanspro text-left font-bold">
        Subscriptions
      </span>
    </Text>
  ),
  status: " Status",
  publish: "Publish",
  actions: "Actions",
};

export default EventsColumnrectangle;
