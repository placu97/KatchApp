import React from "react";

import { Text, Button } from "components";
import { useNavigate } from "react-router-dom";

const Home1Page = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-light_green_700 flex flex-col font-inter items-center justify-start mx-[auto] pb-[62px] w-[100%]">
        <div className="bg-gradient  flex sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] items-center justify-between p-[17px] w-[100%]">
          <Text
            className="bg-clip-text bg-gradient1  font-bold sm:ml-[0] ml-[25px] text-left text-transparent w-[auto]"
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
        <Text
          className="mt-[53px] text-left text-white_A700 w-[auto]"
          as="h2"
          variant="h2"
        >
          Con KatchApp trovi persone con cui allenarti !
        </Text>
        <div className="flex flex-col items-start mt-[96px] px-[111px] sm:px-[20px] md:px-[40px] w-[100%]">
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
        <Button
          className="common-pointer cursor-pointer font-semibold leading-[normal] min-w-[30%] mt-[170px] sm:text-[40px] md:text-[46px] text-[50px] text-center text-white_A700 w-[max-content]"
          onClick={() => navigate("/signmodal")}
          shape="RoundedBorder52"
          size="md"
          variant="FillDeeporangeA700"
        >
          Registrati ora
        </Button>
      </div>
    </>
  );
};

export default Home1Page;
