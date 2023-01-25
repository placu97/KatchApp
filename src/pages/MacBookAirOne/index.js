import React from "react";

import { Text, Button } from "components";
import { useNavigate } from "react-router-dom";

const MacBookAirOnePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-inter md:gap-[40px] sm:gap-[40px] gap-[82px] justify-start mx-[auto] pb-[122px] w-[100%]">
        <div className="flex flex-col items-center w-[100%]">
          <header className="flex items-center justify-center w-[100%]">
            <ul className="bg-bluegray_100 flex flex-row md:hidden sm:hidden items-center justify-center p-[13px] w-[100%] common-row-list">
              <li className="mt-[16px] mb-[15px] sm:w-[100%] sm:my-[10px] w-[auto]">
                <div className="header-row ">
                  <a
                    href={"javascript:"}
                    className="hover:bg-deep_orange_A700 cursor-pointer font-normal hover:h-[undefinedpx] hover:justify-center not-italic sm:text-[40px] md:text-[46px] text-[50px] text-black_900 text-left hover:w-[undefinedpx]"
                    rel="noreferrer"
                  >
                    KatchApp
                  </a>
                  <div className="mobile-menu">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              </li>
              <li className="mt-[13px] mb-[15px] ml-[202px] sm:w-[100%] sm:my-[10px] sm:hidden w-[auto]">
                <a
                  href={"javascript:"}
                  className="common-pointer bg-deep_orange_A700 cursor-pointer font-normal h-[64px] hover:h-[undefinedpx] sm:hidden not-italic pl-[5px] py-[14px] sm:text-[26px] md:text-[28px] text-[30px] text-black_900 text-left hover:w-[undefinedpx]"
                  onClick={() => navigate("/macbookairtwo")}
                  rel="noreferrer"
                >
                  Registrati
                </a>
              </li>
              <li className="mt-[13px] mb-[15px] ml-[30px] sm:w-[100%] sm:my-[10px] sm:hidden w-[max-content] min-w-[12%] text-center">
                <Button
                  className="cursor-pointer font-normal sm:hidden leading-[normal] not-italic sm:text-[26px] md:text-[28px] text-[30px] text-black_900 text-center"
                  size="sm"
                  variant="FillIndigoA700"
                >
                  Accedi
                </Button>
              </li>
            </ul>
          </header>
        </div>
        <div className="flex flex-col items-start justify-start md:ml-[0] sm:ml-[0] ml-[79px] md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] md:w-[100%] sm:w-[100%] w-[58%]">
          <Text
            className="font-normal not-italic text-black_900 text-left w-[auto]"
            as="h2"
            variant="h2"
          >
            Con Katchapp trovi persone con cui allenarti !
          </Text>
          <Text
            className="font-normal mt-[79px] not-italic text-black_900 text-left"
            as="h2"
            variant="h2"
          >
            Iscriviti gratis, verificheremo <br />
            chi sei <br />
            quanti anni hai
            <br />
            ci dirai il tuo allenamento tipo
            <br />e sarai pronto ad allenarti con la nostra community !{" "}
          </Text>
          <div
            className="common-pointer bg-deep_orange_A700 flex flex-col items-center justify-start md:ml-[0] sm:ml-[0] ml-[390px] mt-[93px] p-[12px] md:w-[100%] sm:w-[100%] w-[48%]"
            onClick={() => navigate("/macbookairtwo")}
          >
            <Text
              className="my-[14px] not-italic text-black_900 text-left w-[auto]"
              as="h1"
              variant="h1"
            >
              Registrati ora
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default MacBookAirOnePage;
