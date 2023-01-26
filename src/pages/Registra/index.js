import React from "react";

import { Text, Input, Img, Button } from "components";
import { useNavigate } from "react-router-dom";

const RegistraPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-inter items-center justify-start mx-[auto] pb-[82px] w-[100%]">
        <div className="flex flex-col gap-[34px] items-center justify-start w-[100%]">
          <div className="bg-bluegray_100 flex flex-col items-center justify-start p-[26px] sm:px-[20px] w-[100%]">
            <Text
              className="font-normal not-italic text-black_900 text-left w-[auto]"
              as="h1"
              variant="h1"
            >
              Registrati su KatchApp!
            </Text>
          </div>
          <div className="flex flex-col items-start justify-start max-w-[1103px] ml-[auto] mr-[auto] md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] w-[100%]">
            <div className="bg-bluegray_100 flex md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] items-center justify-between md:ml-[0] sm:ml-[0] ml-[3px] p-[18px] w-[100%]">
              <Text
                className="font-inter font-normal md:ml-[0] sm:ml-[0] ml-[4px] not-italic text-black_900 text-left w-[auto]"
                as="h3"
                variant="h3"
              >
                Inserisci il tuo nome{" "}
              </Text>
              <Input
                className="font-normal font-raleway leading-[normal] not-italic p-[0] text-[20px] placeholder:text-indigo_200 text-indigo_200 text-left tracking-ls036000001430511475 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                wrapClassName="flex md:w-[100%] mr-[47px] sm:mx-[0] sm:w-[100%] w-[61%]"
                name="FormPassword"
                placeholder="Nome"
                prefix={
                  <Img
                    src="images/img_user.svg"
                    className="mr-[10px] my-[auto]"
                    alt="user"
                  />
                }
                size="sm"
              ></Input>
            </div>
            <div className="bg-bluegray_100 flex md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] gap-[65px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[3px] mt-[34px] p-[18px] w-[100%]">
              <Text
                className="font-normal md:ml-[0] sm:ml-[0] ml-[4px] not-italic text-black_900 text-left w-[auto]"
                as="h3"
                variant="h3"
              >
                Inserisci il tuo genere{" "}
              </Text>
              <div className="flex md:flex-col sm:flex-col flex-row gap-[23px] items-center justify-center md:mt-[0] sm:mt-[0] mt-[2px] md:w-[100%] sm:w-[100%] w-[58%]">
                <div className="bg-deep_purple_A100_cc flex flex-col items-start justify-end p-[9px] rounded-radius34 md:w-[100%] sm:w-[100%] w-[49%]">
                  <div className="flex flex-row gap-[22px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[7px] mr-[auto] md:w-[100%] sm:w-[100%] w-[74%]">
                    <Img
                      src="images/img_eye.svg"
                      className="h-[50px] w-[50px]"
                      alt="eye"
                    />
                    <Text
                      className="font-medium mt-[4px] text-left text-white_A700 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Femmina
                    </Text>
                  </div>
                </div>
                <div className="bg-deep_purple_A100_cc flex flex-col items-start justify-end p-[9px] rounded-radius34 md:w-[100%] sm:w-[100%] w-[49%]">
                  <div className="flex flex-row gap-[21px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[7px] mr-[auto] md:w-[100%] sm:w-[100%] w-[70%]">
                    <Img
                      src="images/img_radiobuttonunchecked.svg"
                      className="h-[50px] w-[50px]"
                      alt="radiobuttonunchecked"
                    />
                    <Text
                      className="font-medium mt-[4px] text-left text-white_A700 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Maschio
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-bluegray_100 flex md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] items-start justify-between mt-[34px] p-[14px] w-[100%]">
              <Text
                className="font-normal md:ml-[0] sm:ml-[0] ml-[8px] md:mt-[0] sm:mt-[0] mt-[15px] not-italic text-black_900 text-left w-[auto]"
                as="h3"
                variant="h3"
              >
                Data di nascita
              </Text>
              <Input
                className="p-[0] w-[100%]"
                wrapClassName="flex md:mt-[0] md:w-[100%] mr-[39px] mt-[6px] pl-[30px] pr-[0] py-[12px] sm:mt-[0] sm:mx-[0] sm:pl-[20px] sm:w-[100%] w-[62%]"
                name="frameThirtySeven"
                placeholder=""
                prefix={
                  <Img
                    src="images/img_calendar.svg"
                    className="mr-[35px] my-[auto]"
                    alt="calendar"
                  />
                }
                shape="RoundedBorder36"
                variant="Outline"
              ></Input>
            </div>
            <div className="flex sm:flex-col flex-row gap-[155px] sm:gap-[40px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[16px] mt-[58px] md:w-[100%] sm:w-[100%] w-[65%]">
              <Text
                className="font-normal not-italic text-black_900 text-left w-[auto]"
                as="h3"
                variant="h3"
              >
                Foto e scheda
              </Text>
              <div
                className="common-pointer h-[122px] sm:mt-[0] mt-[29px] relative sm:w-[100%] w-[50%]"
                onClick={() => navigate("/ok")}
              >
                <div className="absolute bg-deep_orange_A700 h-[122px] inset-[0] justify-center m-[auto] w-[98%]"></div>
                <div className="absolute flex flex-col items-center justify-start left-[0] p-[10px] top-[5%] w-[auto]">
                  <div className="flex flex-col items-start justify-start p-[10px] w-[auto]">
                    <Button className="bg-transparent cursor-pointer font-normal leading-[normal] min-w-[100%] not-italic sm:text-[40px] md:text-[46px] text-[50px] text-black_900 text-center w-[max-content]">
                      Avanti
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistraPage;
