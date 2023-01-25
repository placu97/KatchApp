import React from "react";

import { Text } from "components";

const MacBookAirThreePage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-inter items-center justify-start mx-[auto] p-[26px] sm:px-[20px] w-[100%]">
        <Text
          className="mb-[492px] mt-[43px] not-italic text-black_900 text-left"
          as="h1"
          variant="h1"
        >
          Perfetto ! Aspetta qualche giorno e verrai notificato
          <br />
          <br />
          Nel frattempo, continua ad allenarti !{" "}
        </Text>
      </div>
    </>
  );
};

export default MacBookAirThreePage;
