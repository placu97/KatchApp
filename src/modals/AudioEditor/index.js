import React from "react";
import ModalProvider from "react-modal";

import { Text, Button, Img, Line, Input } from "components";

const AudioEditorModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] !w-[31%]"
        overlayClassName="bg-black_900_b2 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="max-h-[97vh] overflow-y-auto">
          <div className="bg-white_A700 flex flex-col items-center justify-end mt-[240px] p-[17px] md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] rounded-radius8 w-[100%]">
            <div className="flex flex-col items-center justify-start mt-[7px] pb-[2px] pl-[2px] md:w-[100%] sm:w-[100%] w-[97%]">
              <Text
                className="font-medium text-bluegray_900 text-left w-[auto]"
                as="h3"
                variant="h3"
              >
                Crea Account
              </Text>
              <Text
                className="mt-[16px] sm:mx-[0] mx-[auto] not-italic text-bluegray_400 text-center w-[100%]"
                as="h4"
                variant="h4"
              >
                <span className="text-bluegray_400 text-[16px] font-inter font-normal">
                  Selezionando accedi confermi di accettare le nostre
                  Condizioni. Scopri come elaboriamo i tuoi dati nella nostra{" "}
                </span>
                <a
                  href="javascript:"
                  className="text-blue_900 text-[16px] font-inter font-normal underline"
                >
                  Informativa sulla Privacy
                </a>
                <span className="text-bluegray_400 text-[16px] font-inter font-normal">
                  {" "}
                  e{" "}
                </span>
                <a
                  href="javascript:"
                  className="text-blue_900 text-[16px] font-inter font-normal underline"
                >
                  Informativa sui Cookie
                </a>
              </Text>
              <div className="flex flex-col font-plusjakartasans items-center justify-start mb-[14px] mt-[37px] md:w-[100%] sm:w-[100%] w-[86%]">
                <Button
                  className="flex items-center justify-center text-center w-[100%]"
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
                  <div className="bg-transparent cursor-pointer font-semibold text-[20px] text-gray_900 text-left tracking-ls007999999821186066 md:tracking-ls1 sm:tracking-ls1 w-[100%]">
                    Continua con Google
                  </div>
                </Button>
                <div className="flex flex-row items-center justify-between mt-[17px] md:w-[100%] sm:w-[100%] w-[80%]">
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
                <div className="flex flex-col gap-[8px] items-start justify-start mt-[13px] pb-[6px] w-[100%]">
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
                <div className="flex flex-col items-center justify-start mt-[22px] py-[2px] w-[100%]">
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
      </ModalProvider>
    </>
  );
};

export default AudioEditorModal;
