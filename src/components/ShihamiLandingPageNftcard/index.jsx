import React from "react";
import { Button, Text, Img, Heading } from "./..";

export default function ShihamiLandingPageNftcard({
  zoratext = "ZORA",
  airdropbutton = "Airdrop",
  pricetext = "$401",
  titletext = "zora-treasury-eTH",
  subtitletext = "Zora is an NFT platform. You have sold NFT’s and can Claim your ETH today",
  noexpirationtext = "No Expiration",
  walletidtext = "0xecde......oeab",
  claimnowbutton = "Claim Now",
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex flex-col items-center gap-[21px] self-stretch rounded-[15px] bg-gray-400 pb-[22px] pl-[22px] sm:pb-5 sm:pl-5">
        <div className="flex items-center justify-between gap-5 self-stretch">
          <div className="flex items-start gap-[15px] self-end">
            <Img
              src="images/img_image_1.png"
              alt="imageone"
              className="h-[32px] w-[31px] object-cover"
            />
            <Text
              size="xs"
              as="p"
              className="mt-[5px] capitalize tracking-[0.80px] !text-black-900"
            >
              {zoratext}
            </Text>
          </div>
          <Button
            size="sm"
            shape="round"
            color="white_A700_white_A700"
            leftIcon={
              <Img
                src="images/img_gameiconsairballoon.svg"
                alt="game-icons:air-balloon"
                className="h-[18px] w-[18px]"
              />
            }
            className="min-w-[126px] gap-[9px] tracking-[0.80px]"
          >
            {airdropbutton}
          </Button>
        </div>
        <div className="mb-[34px] flex rounded-[66px] bg-gradient1 p-3.5">
          <Heading
            size="md"
            as="h1"
            className="mb-3 h-[84px] w-[88px] !font-scheherazade capitalize tracking-[1.40px] text-center py-5"
          >
            {pricetext}
          </Heading>
        </div>
      </div>
      <div className="flex flex-col items-start gap-[18px] self-stretch">
        <Heading as="h6" className="ml-2 capitalize tracking-[0.90px] md:ml-0">
          {titletext}
        </Heading>
        <Text
          size="xs"
          as="p"
          className="ml-2 w-[98%] !font-roboto !font-light capitalize tracking-[0.80px] md:ml-0 md:w-full"
        >
          {subtitletext}
        </Text>
        <div className="ml-2 flex items-center gap-[15px] md:ml-0">
          <Img
            src="images/img_carbon_time_filled.svg"
            alt="carbontime"
            className="h-[32px] w-[32px]"
          />
          <Text
            size="xs"
            as="p"
            className="mb-[5px] self-end !font-roboto capitalize tracking-[0.80px]"
          >
            {noexpirationtext}
          </Text>
        </div>
        <div className="ml-2 flex items-center gap-[15px] md:ml-0">
          <Img
            src="images/img_ph_wallet_bold.svg"
            alt="phwalletbold"
            className="h-[37px]"
          />
          <Text
            size="s"
            as="p"
            className="!font-roboto capitalize tracking-[0.90px]"
          >
            {walletidtext}
          </Text>
        </div>
      </div>
      <Button
        shape="square"
        className="mb-[21px] min-w-[338px] gap-4 border-2 border-[#F81DFB] font-medium text-white-A700 sm:px-5"
      >
        {claimnowbutton}
      </Button>
    </div>
  );
}
