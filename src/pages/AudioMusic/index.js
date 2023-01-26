import React from "react";

import { Img, Input, List, Text, Line } from "components";
import { CloseSVG } from "../../assets/images/index.js";
import AudioEditorModal from "modals/AudioEditor";

const AudioMusicPage = () => {
  const [isOpenAudioEditorModal, setAudioEditorModal] = React.useState(false);

  function handleOpenAudioEditorModal() {
    setAudioEditorModal(true);
  }
  function handleCloseAudioEditorModal() {
    setAudioEditorModal(false);
  }

  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_50 flex flex-col font-inter items-center justify-end mx-[auto] w-[100%]">
        <header className="flex items-center justify-center w-[100%]">
          <div className="bg-white_A700 flex md:flex-col flex-row gap-[50px] items-center justify-center p-[22px] sm:px-[20px] shadow-bs w-[100%]">
            <div className="header-row my-[10px]">
              <Img
                src="images/img_frame1.svg"
                className="h-[35px] md:pl-[20px] md:pr-[20px]"
                alt="FrameOne"
              />
              <div className="mobile-menu">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <Input
              value={inputvalue}
              onChange={(e) => setInputvalue(e?.target?.value)}
              className="font-normal sm:hidden not-italic p-[0] text-[16px] placeholder:text-bluegray_200 text-bluegray_200 text-left w-[100%]"
              wrapClassName="flex md:mt-[0] md:w-[100%] my-[2px] sm:hidden sm:mx-[0] sm:w-[100%] w-[36%]"
              name="InputField"
              placeholder="Search"
              prefix={
                <Img
                  src="images/img_search.svg"
                  className="cursor-pointer mr-[12px] sm:hidden my-[auto]"
                  alt="search"
                />
              }
              suffix={
                inputvalue?.length > 0 ? (
                  <CloseSVG
                    color="#bac1ce"
                    className="cursor-pointer ml-[10px] mr-[22px] sm:hidden my-[auto]"
                    onClick={() => setInputvalue("")}
                  />
                ) : (
                  ""
                )
              }
            ></Input>
            <div className="flex sm:flex-col flex-row gap-[32px] sm:hidden items-center justify-center md:pl-[20px] md:pr-[20px] pr-[7px] md:w-[100%] w-[29%]">
              <List
                className="sm:flex-col flex-row gap-[24px] grid grid-cols-2 w-[61%]"
                orientation="horizontal"
              >
                <div className="flex flex-row items-center justify-between mx-[0] pl-[5px] py-[5px] w-[100%]">
                  <Text
                    className="not-italic text-gray_900 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Products
                  </Text>
                  <Img
                    src="images/img_arrowdown.svg"
                    className="h-[24px] w-[24px]"
                    alt="arrowdown"
                  />
                </div>
                <div className="flex flex-row gap-[7px] items-center justify-start mx-[0] pl-[3px] py-[3px] w-[100%]">
                  <Text
                    className="not-italic text-gray_900 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Resouces
                  </Text>
                  <Img
                    src="images/img_arrowdown.svg"
                    className="h-[24px] w-[24px]"
                    alt="arrowdown One"
                  />
                </div>
              </List>
              <Text
                className="not-italic text-gray_900 text-left w-[auto]"
                as="h6"
                variant="h6"
              >
                Request a demo
              </Text>
            </div>
            <div className="flex flex-col h-[56px] sm:hidden items-center justify-start md:pl-[20px] md:pr-[20px] w-[56px]">
              <Img
                src="images/img_profileimglarge.png"
                className="common-pointer h-[56px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[56px]"
                onClick={handleOpenAudioEditorModal}
                alt="ProfileImgLarge"
              />
            </div>
          </div>
        </header>
        <div className="flex md:flex-col sm:flex-col flex-row gap-[38px] items-start justify-start max-w-[1268px] ml-[auto] mr-[auto] md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] w-[100%]">
          <div className="flex flex-col items-center justify-start md:mt-[0] sm:mt-[0] mt-[57px] md:w-[100%] sm:w-[100%] w-[64%]">
            <div className="flex flex-row sm:gap-[40px] items-center justify-between w-[100%]">
              <Img
                src="images/img_arrowleft.svg"
                className="h-[24px] w-[24px]"
                alt="arrowleft"
              />
              <div className="flex flex-col items-center justify-start w-[20%]">
                <Text
                  className="not-italic text-bluegray_900 text-left w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Album Name
                </Text>
              </div>
              <Img
                src="images/img_overflowmenu.svg"
                className="h-[24px] w-[24px]"
                alt="overflowmenu"
              />
            </div>
            <Img
              src="images/img_rectangle1224.png"
              className="h-[509px] sm:h-[auto] mt-[31px] object-cover rounded-radius6 w-[100%]"
              alt="Rectangle1224"
            />
            <div className="flex flex-col gap-[24px] items-center justify-start mt-[24px] w-[100%]">
              <div className="flex flex-col gap-[17px] items-center justify-start w-[100%]">
                <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                  <div className="flex flex-col items-start justify-start pr-[7px] py-[7px] md:w-[100%] sm:w-[100%] w-[46%]">
                    <Text
                      className="not-italic text-bluegray_800 text-left w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Tere Jaisa Yaar Kahan...
                    </Text>
                  </div>
                  <Img
                    src="images/img_albumtitleicheart.svg"
                    className="h-[24px] w-[24px]"
                    alt="Albumtitleicheart"
                  />
                </div>
                <div className="flex flex-col gap-[8px] items-center justify-start w-[100%]">
                  <Img
                    src="images/img_group1443.svg"
                    className="h-[24px] w-[auto]"
                    alt="Group1443"
                  />
                  <div className="flex flex-row sm:gap-[40px] items-center justify-between py-[3px] w-[100%]">
                    <Text
                      className="not-italic text-bluegray_400 text-left w-[auto]"
                      variant="body1"
                    >
                      04:10
                    </Text>
                    <Text
                      className="not-italic text-bluegray_400 text-left w-[auto]"
                      variant="body1"
                    >
                      09:00
                    </Text>
                  </div>
                </div>
              </div>
              <Img
                src="images/img_frame34785.svg"
                className="h-[70px] w-[auto]"
                alt="Frame34785"
              />
            </div>
          </div>
          <div className="flex sm:flex-col flex-row sm:gap-[30px] items-center justify-between md:w-[100%] sm:w-[100%] w-[34%]">
            <Line className="bg-bluegray_101 sm:h-[1px] h-[980px] mb-[33px] sm:w-[100%] w-[1px]" />
            <div className="flex flex-col items-center justify-start sm:mt-[0] mt-[30px] md:w-[100%] sm:w-[100%] w-[93%]">
              <List
                className="flex-col gap-[16px] grid items-center w-[100%]"
                orientation="vertical"
              >
                <div className="flex flex-col gap-[16px] items-center justify-start my-[0] w-[100%]">
                  <div className="flex sm:flex-col flex-row sm:gap-[8px] items-start justify-between w-[100%]">
                    <Img
                      src="images/img_rectangle20.png"
                      className="h-[78px] md:h-[auto] sm:h-[auto] object-cover rounded-radius6 w-[78px]"
                      alt="RectangleTwenty"
                    />
                    <div className="flex flex-col items-start justify-end pr-[5px] pt-[5px] md:w-[100%] sm:w-[100%] w-[72%]">
                      <Text
                        className="not-italic text-bluegray_900 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Hum Nashe Mein Toh Nahin
                      </Text>
                      <Text
                        className="mt-[12px] not-italic text-bluegray_400 text-left w-[auto]"
                        variant="body1"
                      >
                        03:28
                      </Text>
                      <Text
                        className="mt-[13px] not-italic text-bluegray_400 text-left w-[auto]"
                        variant="body1"
                      >
                        Pritam, Arijit Singh, Tulsi Kumar
                      </Text>
                    </div>
                    <Img
                      src="images/img_overflowmenu_bluegray_400.svg"
                      className="h-[24px] w-[24px]"
                      alt="overflowmenu One"
                    />
                  </div>
                  <Line className="bg-bluegray_101 h-[1px] w-[100%]" />
                </div>
                <div className="flex flex-col gap-[16px] items-center justify-start my-[0] w-[100%]">
                  <div className="flex sm:flex-col flex-row sm:gap-[8px] items-start justify-between w-[100%]">
                    <Img
                      src="images/img_rectangle20_78x78.png"
                      className="h-[78px] md:h-[auto] sm:h-[auto] object-cover rounded-radius6 w-[78px]"
                      alt="RectangleTwenty One"
                    />
                    <div className="flex flex-col items-start justify-end pr-[6px] pt-[6px] md:w-[100%] sm:w-[100%] w-[72%]">
                      <Text
                        className="not-italic text-bluegray_900 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Chaand Baaliyan Song
                      </Text>
                      <Text
                        className="mt-[7px] not-italic text-bluegray_400 text-left w-[auto]"
                        variant="body1"
                      >
                        01:43
                      </Text>
                      <Text
                        className="mt-[13px] not-italic text-bluegray_400 text-left w-[auto]"
                        variant="body1"
                      >
                        Aditya A
                      </Text>
                    </div>
                    <Img
                      src="images/img_overflowmenu_bluegray_400.svg"
                      className="h-[24px] w-[24px]"
                      alt="overflowmenu Two"
                    />
                  </div>
                  <Line className="bg-bluegray_101 h-[1px] w-[100%]" />
                </div>
                <div className="flex flex-col gap-[16px] items-center justify-start my-[0] w-[100%]">
                  <div className="flex sm:flex-col flex-row sm:gap-[8px] items-start justify-between w-[100%]">
                    <Img
                      src="images/img_rectangle20_1.png"
                      className="h-[78px] md:h-[auto] sm:h-[auto] object-cover rounded-radius6 w-[78px]"
                      alt="RectangleTwenty Two"
                    />
                    <div className="flex flex-col items-start justify-end pr-[6px] pt-[6px] md:w-[100%] sm:w-[100%] w-[72%]">
                      <Text
                        className="not-italic text-bluegray_900 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Gehraiyaan Title Track
                      </Text>
                      <Text
                        className="mt-[7px] not-italic text-bluegray_400 text-left w-[auto]"
                        variant="body1"
                      >
                        04:01
                      </Text>
                      <Text
                        className="mt-[13px] not-italic text-bluegray_400 text-left w-[auto]"
                        variant="body1"
                      >
                        OAFF, Savera, Lothika, Ankur Tewari
                      </Text>
                    </div>
                    <Img
                      src="images/img_overflowmenu_bluegray_400.svg"
                      className="h-[24px] w-[24px]"
                      alt="overflowmenu Three"
                    />
                  </div>
                  <Line className="bg-bluegray_101 h-[1px] w-[100%]" />
                </div>
                <div className="flex flex-col gap-[16px] items-center justify-start my-[0] w-[100%]">
                  <div className="flex sm:flex-col flex-row sm:gap-[8px] items-start justify-between w-[100%]">
                    <Img
                      src="images/img_rectangle20_78x78.png"
                      className="h-[78px] md:h-[auto] sm:h-[auto] object-cover rounded-radius6 w-[78px]"
                      alt="RectangleTwenty Three"
                    />
                    <div className="flex flex-col items-start justify-end pr-[6px] pt-[6px] md:w-[100%] sm:w-[100%] w-[72%]">
                      <Text
                        className="not-italic text-bluegray_900 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Chaand Baaliyan Song
                      </Text>
                      <Text
                        className="mt-[7px] not-italic text-bluegray_400 text-left w-[auto]"
                        variant="body1"
                      >
                        01:43
                      </Text>
                      <Text
                        className="mt-[13px] not-italic text-bluegray_400 text-left w-[auto]"
                        variant="body1"
                      >
                        Aditya A
                      </Text>
                    </div>
                    <Img
                      src="images/img_overflowmenu_bluegray_400.svg"
                      className="h-[24px] w-[24px]"
                      alt="overflowmenu Four"
                    />
                  </div>
                  <Line className="bg-bluegray_101 h-[1px] w-[100%]" />
                </div>
                <div className="flex flex-col gap-[16px] items-center justify-start my-[0] w-[100%]">
                  <div className="flex sm:flex-col flex-row sm:gap-[8px] items-start justify-between w-[100%]">
                    <Img
                      src="images/img_rectangle20.png"
                      className="h-[78px] md:h-[auto] sm:h-[auto] object-cover rounded-radius6 w-[78px]"
                      alt="RectangleTwenty Four"
                    />
                    <div className="flex flex-col items-start justify-end pr-[5px] pt-[5px] md:w-[100%] sm:w-[100%] w-[72%]">
                      <Text
                        className="not-italic text-bluegray_900 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Hum Nashe Mein Toh Nahin
                      </Text>
                      <Text
                        className="mt-[12px] not-italic text-bluegray_400 text-left w-[auto]"
                        variant="body1"
                      >
                        03:28
                      </Text>
                      <Text
                        className="mt-[13px] not-italic text-bluegray_400 text-left w-[auto]"
                        variant="body1"
                      >
                        Pritam, Arijit Singh, Tulsi Kumar
                      </Text>
                    </div>
                    <Img
                      src="images/img_overflowmenu_bluegray_400.svg"
                      className="h-[24px] w-[24px]"
                      alt="overflowmenu Five"
                    />
                  </div>
                  <Line className="bg-bluegray_101 h-[1px] w-[100%]" />
                </div>
                <div className="flex flex-col gap-[16px] items-center justify-start my-[0] w-[100%]">
                  <div className="flex sm:flex-col flex-row sm:gap-[8px] items-start justify-between w-[100%]">
                    <Img
                      src="images/img_rectangle20_1.png"
                      className="h-[78px] md:h-[auto] sm:h-[auto] object-cover rounded-radius6 w-[78px]"
                      alt="RectangleTwenty Five"
                    />
                    <div className="flex flex-col items-start justify-end pr-[6px] pt-[6px] md:w-[100%] sm:w-[100%] w-[72%]">
                      <Text
                        className="not-italic text-bluegray_900 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Gehraiyaan Title Track
                      </Text>
                      <Text
                        className="mt-[7px] not-italic text-bluegray_400 text-left w-[auto]"
                        variant="body1"
                      >
                        04:01
                      </Text>
                      <Text
                        className="mt-[13px] not-italic text-bluegray_400 text-left w-[auto]"
                        variant="body1"
                      >
                        OAFF, Savera, Lothika, Ankur Tewari
                      </Text>
                    </div>
                    <Img
                      src="images/img_overflowmenu_bluegray_400.svg"
                      className="h-[24px] w-[24px]"
                      alt="overflowmenu Six"
                    />
                  </div>
                  <Line className="bg-bluegray_101 h-[1px] w-[100%]" />
                </div>
                <div className="flex flex-col gap-[16px] items-center justify-start my-[0] w-[100%]">
                  <div className="flex sm:flex-col flex-row sm:gap-[8px] items-start justify-between w-[100%]">
                    <Img
                      src="images/img_rectangle20_1.png"
                      className="h-[78px] md:h-[auto] sm:h-[auto] object-cover rounded-radius6 w-[78px]"
                      alt="RectangleTwenty Six"
                    />
                    <div className="flex flex-col items-start justify-end pr-[6px] pt-[6px] md:w-[100%] sm:w-[100%] w-[72%]">
                      <Text
                        className="not-italic text-bluegray_900 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Gehraiyaan Title Track
                      </Text>
                      <Text
                        className="mt-[7px] not-italic text-bluegray_400 text-left w-[auto]"
                        variant="body1"
                      >
                        04:01
                      </Text>
                      <Text
                        className="mt-[13px] not-italic text-bluegray_400 text-left w-[auto]"
                        variant="body1"
                      >
                        OAFF, Savera, Lothika, Ankur Tewari
                      </Text>
                    </div>
                    <Img
                      src="images/img_overflowmenu_bluegray_400.svg"
                      className="h-[24px] w-[24px]"
                      alt="overflowmenu Seven"
                    />
                  </div>
                  <Line className="bg-bluegray_101 h-[1px] w-[100%]" />
                </div>
                <div className="flex flex-col gap-[16px] items-center justify-start my-[0] w-[100%]">
                  <div className="flex sm:flex-col flex-row sm:gap-[8px] items-start justify-between w-[100%]">
                    <Img
                      src="images/img_rectangle20_1.png"
                      className="h-[78px] md:h-[auto] sm:h-[auto] object-cover rounded-radius6 w-[78px]"
                      alt="RectangleTwenty Seven"
                    />
                    <div className="flex flex-col items-start justify-end pr-[6px] pt-[6px] md:w-[100%] sm:w-[100%] w-[72%]">
                      <Text
                        className="not-italic text-bluegray_900 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Gehraiyaan Title Track
                      </Text>
                      <Text
                        className="mt-[7px] not-italic text-bluegray_400 text-left w-[auto]"
                        variant="body1"
                      >
                        04:01
                      </Text>
                      <Text
                        className="mt-[13px] not-italic text-bluegray_400 text-left w-[auto]"
                        variant="body1"
                      >
                        OAFF, Savera, Lothika, Ankur Tewari
                      </Text>
                    </div>
                    <Img
                      src="images/img_overflowmenu_bluegray_400.svg"
                      className="h-[24px] w-[24px]"
                      alt="overflowmenu Eight"
                    />
                  </div>
                  <Line className="bg-bluegray_101 h-[1px] w-[100%]" />
                </div>
                <div className="flex flex-col gap-[16px] items-center justify-start my-[0] w-[100%]">
                  <div className="flex sm:flex-col flex-row sm:gap-[8px] items-start justify-between w-[100%]">
                    <Img
                      src="images/img_rectangle20_78x78.png"
                      className="h-[78px] md:h-[auto] sm:h-[auto] object-cover rounded-radius6 w-[78px]"
                      alt="RectangleTwenty Eight"
                    />
                    <div className="flex flex-col items-start justify-start pr-[6px] py-[6px] md:w-[100%] sm:w-[100%] w-[72%]">
                      <Text
                        className="not-italic text-bluegray_900 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Chaand Baaliyan Song
                      </Text>
                      <Text
                        className="mt-[7px] not-italic text-bluegray_400 text-left w-[auto]"
                        variant="body1"
                      >
                        01:43
                      </Text>
                      <Text
                        className="mb-[2px] mt-[6px] not-italic text-bluegray_400 text-left w-[auto]"
                        variant="body1"
                      >
                        Aditya A
                      </Text>
                    </div>
                    <Img
                      src="images/img_overflowmenu_bluegray_400.svg"
                      className="h-[24px] w-[24px]"
                      alt="overflowmenu Nine"
                    />
                  </div>
                  <Line className="bg-bluegray_101 h-[1px] w-[100%]" />
                </div>
              </List>
            </div>
          </div>
        </div>
      </div>
      {isOpenAudioEditorModal ? (
        <AudioEditorModal
          isOpen={isOpenAudioEditorModal}
          onRequestClose={handleCloseAudioEditorModal}
        />
      ) : null}
    </>
  );
};

export default AudioMusicPage;
