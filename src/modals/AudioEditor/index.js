import React from "react";
import ModalProvider from "react-modal";

import { Text, List, Switch } from "components";

const AudioEditorModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] !w-[30%]"
        overlayClassName="bg-black_900_b2 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="max-h-[97vh] overflow-y-auto">
          <div className="bg-white_A700 flex flex-col items-center justify-start p-[24px] md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] sm:px-[20px] rounded-radius8 w-[100%]">
            <div className="flex flex-col gap-[22px] items-center justify-start pt-[7px] w-[100%]">
              <Text
                className="not-italic text-bluegray_900 text-left w-[auto]"
                as="h5"
                variant="h5"
              >
                Sound Settings
              </Text>
              <div className="flex flex-col items-center justify-start w-[100%]">
                <List
                  className="flex-col gap-[22px] grid items-center w-[100%]"
                  orientation="vertical"
                >
                  <div className="flex flex-row items-center justify-between my-[0] w-[100%]">
                    <div className="flex flex-col gap-[13px] items-start justify-start w-[83%]">
                      <Text
                        className="not-italic text-black_901 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Sounds
                      </Text>
                      <Text
                        className="not-italic text-bluegray_400 text-left w-[auto]"
                        variant="body1"
                      >
                        Turn sound on/off according to your preference
                      </Text>
                    </div>
                    <Switch value={true} className="w-[12%]" />
                  </div>
                  <div className="flex flex-row items-center justify-between my-[0] w-[100%]">
                    <div className="flex flex-col gap-[9px] items-start justify-start w-[50%]">
                      <Text
                        className="not-italic text-black_901 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        App Sounds
                      </Text>
                      <Text
                        className="not-italic text-bluegray_400 text-left w-[auto]"
                        variant="body1"
                      >
                        App sounds for notifications
                      </Text>
                    </div>
                    <Switch value={true} className="w-[12%]" />
                  </div>
                  <div className="flex flex-row items-center justify-between my-[0] w-[100%]">
                    <div className="flex flex-col gap-[9px] items-start justify-start w-[83%]">
                      <Text
                        className="not-italic text-black_901 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        App Sounds
                      </Text>
                      <Text
                        className="not-italic text-bluegray_400 text-left w-[auto]"
                        variant="body1"
                      >
                        Turn sound on/off according to your preference
                      </Text>
                    </div>
                    <Switch value={false} className="w-[12%]" />
                  </div>
                </List>
              </div>
            </div>
          </div>
        </div>
      </ModalProvider>
    </>
  );
};

export default AudioEditorModal;
