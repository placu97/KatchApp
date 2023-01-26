import React from "react";

import { Text, Button } from "components";

const SignmodalPage = () => {
  return (
    <>
      <div className="bg-light_green_700 flex flex-col font-inter justify-start mx-[auto] pb-[62px] w-[100%]">
        <div className="flex flex-col items-center w-[100%]">
          <div className="bg-gradient2  flex sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] items-center justify-between p-[17px] w-[100%]">
            <Text
              className="bg-clip-text bg-gradient3  font-bold sm:ml-[0] ml-[25px] text-left text-transparent w-[auto]"
              as="h1"
              variant="h1"
            >
              KatchApp
            </Text>
            <Button
              className="cursor-pointer font-bold leading-[normal] min-w-[17%] mr-[20px] sm:text-[26px] md:text-[28px] text-[30px] text-center text-white_A700 w-[max-content]"
              shape="RoundedBorder40"
              size="sm"
              variant="FillGreen500"
            >
              Accedi
            </Button>
          </div>
        </div>
        <div className="h-[431px] md:ml-[0] sm:ml-[0] ml-[111px] mt-[53px] md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] relative md:w-[100%] sm:w-[100%] w-[76%]">
          <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-[auto] top-[0] w-[100%]">
            <div className="flex flex-col md:gap-[40px] sm:gap-[40px] gap-[96px] justify-start w-[100%]">
              <Text
                className="md:ml-[0] sm:ml-[0] ml-[86px] text-left text-white_A700 w-[auto]"
                as="h2"
                variant="h2"
              >
                Con KatchApp trovi persone con cui allenarti !
              </Text>
              <Text
                className="font-normal not-italic text-black_900 text-left"
                as="h3"
                variant="h3"
              >
                Iscriviti gratis, verificheremo <br />
                chi sei <br />
                quanti anni hai
                <br />
                ci dirai il tuo allenamento tipo
                <br />e sarai pronto ad allenarti con la nostra community !{" "}
              </Text>
            </div>
          </div>
          <div className="absolute bg-bluegray_100 h-[427px] inset-y-[0] my-[auto] right-[18%] w-[54%]"></div>
        </div>
        <div className="flex flex-col items-center mt-[63px] sm:px-[20px] md:px-[40px] px-[453px] w-[100%]">
          <Button
            className="cursor-pointer font-semibold leading-[normal] min-w-[100%] sm:text-[40px] md:text-[46px] text-[50px] text-center text-white_A700 w-[max-content]"
            shape="RoundedBorder52"
            size="md"
            variant="FillDeeporangeA700"
          >
            Registrati ora
          </Button>
        </div>
      </div>
    </>
  );
};

export default SignmodalPage;
