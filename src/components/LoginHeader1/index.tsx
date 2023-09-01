import React from "react";

import { Button, Img, Text } from "components";

type LoginHeader1Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "chupitotext" | "loginbutton"
> &
  Partial<{ chupitotext: string; loginbutton: string }>;

const LoginHeader1: React.FC<LoginHeader1Props> = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img className="h-7" src="images/img_menu.svg" alt="menu" />
        <Text
          className="sm:ml-[0] ml-[585px] sm:mt-0 mt-[5px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
          size="txtInterRegular24"
        >
          {props?.chupitotext}
        </Text>
        <Button className="bg-blue_gray-100 cursor-pointer font-inter leading-[normal] min-w-[69px] sm:ml-[0] ml-[620px] mr-1.5 sm:mt-0 my-[3px] py-1 text-base text-black-900 text-center">
          {props?.loginbutton}
        </Button>
      </div>
    </>
  );
};

LoginHeader1.defaultProps = { chupitotext: "Chupito" };

export default LoginHeader1;
