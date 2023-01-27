import React from "react";

import { Text, Button, Img, Line, Input } from "components";

const SignmodalPage = () => {
  return (
    <>
      <div className="bg-light_green_700 font-inter h-[832px] mx-[auto] relative w-[100%]">
        <div className="absolute bottom-[7%] flex flex-col items-center justify-start left-[9%] md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] w-[76%]">
          <Text
            className="text-left text-white_A700 w-[auto]"
            as="h2"
            variant="h2"
          >
            Con KatchApp trovi persone con cui allenarti !
          </Text>
          <Text
            className="font-normal mt-[96px] not-italic text-black_900 text-left"
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
          <Button
            className="cursor-pointer font-semibold leading-[normal] min-w-[39%] mt-[170px] sm:text-[40px] md:text-[46px] text-[50px] text-center text-white_A700 w-[max-content]"
            shape="RoundedBorder52"
            size="xl"
            variant="FillDeeporangeA700"
          >
            Registrati ora
          </Button>
        </div>
        <header className="flex items-center justify-center mx-[auto] w-[100%]">
          <div className="bg-gradient2  flex sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] gap-[755px] items-center justify-center p-[17px] w-[100%]">
            <div className="h-[61px] sm:ml-[0] ml-[25px] md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] relative sm:w-[100%] w-[20%]">
              <Text
                className="bg-clip-text bg-gradient3  m-[auto] text-left text-transparent w-[auto]"
                as="h1"
                variant="h1"
              >
                KatchApp
              </Text>
              <Text
                className="absolute bg-clip-text bg-gradient1  h-[max-content] inset-[0] justify-center m-[auto] text-left text-transparent w-[max-content]"
                as="h1"
                variant="h1"
              >
                KatchApp
              </Text>
            </div>
            <Button
              className="cursor-pointer font-bold leading-[normal] min-w-[17%] mr-[20px] sm:text-[26px] md:text-[28px] text-[30px] text-center text-white_A700 w-[max-content]"
              shape="RoundedBorder40"
            >
              Accedi
            </Button>
          </div>
        </header>
        <div className="absolute bg-gray_900_99 flex flex-col h-[max-content] inset-[0] items-center justify-center m-[auto] p-[118px] sm:px-[20px] md:px-[40px] w-[100%]">
          <div className="bg-white_A700 flex flex-col items-center justify-start mb-[2px] p-[19px] md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] rounded-radius8 md:w-[100%] sm:w-[100%] w-[41%]">
            <div className="flex flex-col items-center justify-start mb-[19px] mt-[11px] w-[100%]">
              <Text
                className="font-inter font-medium text-bluegray_900 text-left w-[auto]"
                as="h3"
                variant="h3"
              >
                Crea Account
              </Text>
              <Text
                className="font-inter mt-[18px] mx-[auto] not-italic text-bluegray_400 text-center w-[100%]"
                as="h4"
                variant="h4"
              >
                <span className="text-bluegray_400 text-[16px] font-normal">
                  Selezionando accedi confermi di accettare le nostre
                  Condizioni. Scopri come elaboriamo i tuoi dati nella nostra{" "}
                </span>
                <a
                  href="javascript:"
                  className="text-blue_900 text-[16px] font-normal underline"
                >
                  Informativa sulla Privacy
                </a>
                <span className="text-bluegray_400 text-[16px] font-normal">
                  {" "}
                  e{" "}
                </span>
                <a
                  href="javascript:"
                  className="text-blue_900 text-[16px] font-normal underline"
                >
                  Informativa sui Cookie
                </a>
              </Text>
              <Button
                className="flex items-center justify-center min-w-[86%] mt-[49px] text-center w-[max-content]"
                leftIcon={
                  <Img
                    src="images/img_google.svg"
                    className="mr-[12px] text-center"
                    alt="google"
                  />
                }
                size="sm"
                variant="OutlineBlack900"
              >
                <div className="bg-transparent cursor-pointer font-plusjakartasans font-semibold min-w-[86%] text-[20px] text-gray_900 text-left tracking-ls007999999821186066 md:tracking-ls1 sm:tracking-ls1 w-[max-content]">
                  Continua con Google
                </div>
              </Button>
              <div className="flex flex-row font-plusjakartasans gap-[43px] items-center justify-center mt-[31px] md:w-[100%] sm:w-[100%] w-[68%]">
                <Line className="bg-indigo_51 h-[1px] my-[9px] w-[24%]" />
                <Text
                  className="font-semibold mt-[5px] text-bluegray_300 text-left tracking-ls007000000029802322 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  oppure
                </Text>
                <Line className="bg-indigo_51 h-[1px] my-[9px] w-[24%]" />
              </div>
              <div className="flex flex-col font-plusjakartasans gap-[42px] items-center justify-start mt-[31px] md:w-[100%] sm:w-[100%] w-[86%]">
                <div className="flex flex-col gap-[7px] items-start justify-start pb-[6px] w-[100%]">
                  <div className="flex flex-col h-[22px] md:h-[auto] sm:h-[auto] items-start justify-start w-[auto]">
                    <Text
                      className="font-medium text-bluegray_901 text-left tracking-ls007000000029802322 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Email
                    </Text>
                  </div>
                  <Input
                    className="font-medium p-[0] text-[16px] placeholder:text-bluegray_401 text-bluegray_401 text-left tracking-ls007999999821186066 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                    wrapClassName="w-[100%]"
                    type="email"
                    name="FrameOne"
                    placeholder="Inserisci il tuo indirizzo Email"
                  ></Input>
                </div>
                <div className="flex flex-col items-center justify-start py-[2px] w-[100%]">
                  <Button
                    className="cursor-pointer font-semibold text-[16px] text-center text-gray_50 tracking-ls007999999821186066 md:tracking-ls1 sm:tracking-ls1 w-[327px]"
                    size="md"
                    variant="FillGray900"
                  >
                    Continua con Email
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignmodalPage;
