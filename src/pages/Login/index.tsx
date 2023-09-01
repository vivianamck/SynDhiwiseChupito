import React from "react";

import { Button, Img, Input, Text } from "components";
import LoginHeader1 from "components/LoginHeader1";

const LoginPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-100 flex flex-col font-inter sm:gap-10 md:gap-10 gap-[101px] items-center justify-start mx-auto pb-[255px] w-full">
        <LoginHeader1 className="bg-black-900 flex sm:flex-col flex-row sm:gap-5 items-center justify-end p-3 w-full" />
        <div className="bg-gray-100 flex flex-col md:gap-10 gap-[71px] items-center justify-start max-w-[945px] mx-auto outline outline-[1px] outline-black-900 pb-[99px] md:px-5 shadow-bs w-full">
          <div className="bg-gray-500 h-[89px] w-full"></div>
          <div className="flex flex-col items-start justify-start w-[37%] md:w-full">
            <div className="flex flex-col gap-[7px] items-start justify-end w-[345px]">
              <Text
                className="text-blue_gray-600 text-sm tracking-[-0.28px] w-auto"
                size="txtInterRegular14"
              >
                Email
              </Text>
              <Input
                name="textinput"
                placeholder=""
                className="p-0 w-full"
                wrapClassName="bg-white-A700 border border-blue_gray-600 border-solid flex h-12 rounded-md w-full"
              ></Input>
            </div>
            <div className="flex flex-col gap-[7px] items-start justify-end mt-[63px] w-[345px]">
              <Text
                className="text-blue_gray-600 text-sm tracking-[-0.28px] w-auto"
                size="txtInterRegular14"
              >
                Password
              </Text>
              <Input
                name="textinput_One"
                placeholder=""
                className="p-0 w-full"
                wrapClassName="bg-white-A700 border border-blue_gray-600 border-solid flex pr-3 py-3 rounded-md w-full"
                suffix={
                  <Img
                    className="h-6 ml-[35px]"
                    src="images/img_eye.svg"
                    alt="eye"
                  />
                }
              ></Input>
            </div>
            <Button className="bg-blue_gray-600 cursor-pointer font-semibold h-12 min-w-[122px] md:ml-[0] ml-[95px] mt-[90px] py-3.5 rounded-md text-base text-center text-white-A700 tracking-[-0.32px]">
              Button label
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
