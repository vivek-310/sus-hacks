import React from "react";
import { Helmet } from "react-helmet";
import { Text, Heading, Img, Input, Button } from "../../components";
import Header from "../../components/Header";
import ShihamiLandingPageNftcard from "../../components/ShihamiLandingPageNftcard";
import ShihamiLandingPageWalletcards from "../../components/ShihamiLandingPageWalletcards";
import { Link } from 'react-router-dom';

const data = [
  {
    about: "About",
    aboutairdrops: "About AIRDROPS",
    liveauctions: "Live Auctions",
    airdropblog: "AIRDROP Blog",
    activity: "Activity",
  },
  {
    about: "Support",
    aboutairdrops: "Help & Support",
    liveauctions: "Item Details",
    airdropblog: "Author Profile",
    activity: "Collection",
  },
];

export default function ShihamiLandingPagePage() {
  return (
    <>
      <Helmet>
        <title>B's Application2</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>

      {/* main content section */}
      <div className="w-full bg-gray-900 pt-8 sm:pt-5">
        {/* header section */}
        <div className="flex flex-col items-center">
          {/* hero section */}
          <div className="relative h-[3121px] self-stretch overflow-auto">
            {/* navigation section */}
            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-full flex-col items-center">
              <div className="container-xs relative z-[1] flex flex-col items-center gap-[102px] px-9 md:gap-[76px] md:p-5 sm:gap-[51px] sm:px-5">
                <Header className="flex items-end justify-between gap-5 self-stretch md:flex-col" />
                <div className="flex w-[91%] flex-col items-center gap-[100px] md:w-full md:gap-[75px] sm:gap-[50px]">
                  <div className="flex flex-col items-center gap-10 self-stretch px-2.5 pt-2.5">
                    <div className="flex">
                      <Heading size="lg" as="h1" className="mb-[30px] capitalize">
                        Find unclaimed airdrops + more
                      </Heading>
                    </div>
                    <Text size="3xl" as="p" className="w-[71%] !font-lato capitalize md:w-full">
                      <>
                        Bankless finds $802 on average in airdrops & more. <br />
                        Search your wallets. Set up alerts. Tell your Friends.
                      </>
                    </Text>
                  </div>
                  <div className="flex w-[77%] items-center justify-between gap-5 rounded-[50px] bg-gray-100 p-3.5 md:w-full sm:flex-col">
                    <div className="my-2 flex w-[44%] items-center justify-between gap-5 sm:w-full">
                      <Img
                        src="images/img_material_symbols_light_search.svg"
                        alt="material"
                        className="h-[48px] w-[48px]"
                      />
                      {/* <Text size="lg" as="p" className="!font-sansserifcollection capitalize !text-black-900_7f">
                        Wallet address or ENS
                      </Text> */}
                      <input type="text" placeholder="Wallet address or ENS" className=" text-gray-700 h-6 px-5" style={{width:'300px'}}></input>
                    </div>
                    <div className="mr-[43px] flex w-[13%] flex-col items-center md:mr-0 sm:w-full">
                      {/* <div className="h-[45px] self-stretch rounded-[22px] bg-red-A700_a0" /> */}
                      {/* <Text as="p" className="relative mt-[-44px] !font-sansserifcollection !font-normal capitalize">
                        GO
                      </Text> */}
                      <Button className="h-[45px] self-stretch rounded-[22px] bg-red-A700_a0 text-white-A700">GO</Button>
                     </div> 
                  </div>
                </div>
              </div>

              {/* airdrop listing section */}
              <div className="relative mt-[-241px] h-[2762px] self-stretch bg-[url(/public/images/img_group_4_purple_500.png)] bg-cover bg-no-repeat py-[216px] md:h-auto md:py-5">
                {/* featured airdrops section */}
                <div className="mt-[68px] flex flex-col items-center">
                  <div className="mx-auto flex w-full max-w-[1240px] gap-5 md:flex-col md:p-5">
                    <div className="flex w-full flex-col items-center gap-9 rounded-[15px] bg-gradient2 p-[15px] "id="vivek">
                      <div className="flex flex-col items-center gap-[21px] self-stretch rounded-[15px] bg-gray-400 pb-[22px] pl-[22px] sm:pb-5 sm:pl-5">
                        <div className="flex items-center justify-between gap-5 self-stretch">
                          <div className="flex items-start gap-[15px] self-end">
                            <Img src="images/img_image_1.png" alt="zora" className="h-[32px] w-[31px] object-cover" />
                            <Text size="xs" as="p" className="mt-[5px] capitalize tracking-[0.80px] !text-black-900">
                              ZORA
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
                            Airdrop
                          </Button>
                        </div>
                        <div className="mb-[34px] flex rounded-[66px] bg-gradient1 p-3.5">
                          <Heading
                            size="md"
                            as="h2"
                            className="mb-3 h-[84px] w-[88px] !font-scheherazade capitalize tracking-[1.40px] text-center py-5"
                          >
                            $401
                          </Heading>
                        </div>
                      </div>
                      <div className="flex flex-col items-start gap-[18px] self-stretch">
                        <Heading as="h3" className="ml-2 capitalize tracking-[0.90px] md:ml-0">
                          zora-treasury-eTH
                        </Heading>
                        <Text
                          size="xs"
                          as="p"
                          className="ml-2 w-[98%] !font-roboto !font-light capitalize tracking-[0.80px] md:ml-0 md:w-full"
                        >
                          Zora is an NFT platform. You have sold NFT’s and can Claim your ETH today
                        </Text>
                        <div className="ml-2 flex items-center gap-[15px] md:ml-0">
                          <Img
                            src="images/img_carbon_time_filled.svg"
                            alt="no_expiration"
                            className="h-[32px] w-[32px]"
                          />
                          <Text
                            size="xs"
                            as="p"
                            className="mb-[5px] self-end !font-roboto capitalize tracking-[0.80px]"
                          >
                            No Expiration
                          </Text>
                        </div>
                        <div className="ml-2 flex items-center gap-[15px] md:ml-0">
                          <Img src="images/img_ph_wallet_bold.svg" alt="0xecdeoeab" className="h-[37px]" />
                          <Text size="s" as="p" className="!font-roboto capitalize tracking-[0.90px]">
                            0xecde......oeab
                          </Text>
                        </div>
                      </div>
                      <Button shape="square" className="mb-[21px] min-w-[338px] font-medium text-white-A700 sm:px-5">
                        Claim Now
                      </Button>
                    </div>
                    <div className="relative h-[620px] w-full md:h-auto" id="ashrith">
                      <ShihamiLandingPageNftcard className="flex w-full flex-col items-center gap-9 rounded-[15px] bg-gradient2 p-[15px]" />
                      <div className="absolute left-0 right-0 top-[19%] m-auto h-[63px] w-[32%] bg-purple-500 blur-[450.00px] backdrop-opacity-[0.5]" />
                    </div>
                    <div className="flex w-full flex-col items-center gap-9 rounded-[15px] bg-gradient2 p-[15px] "id="sujith">
                      <div className="flex flex-col items-center gap-[21px] self-stretch rounded-[15px] bg-gray-400 pb-[22px] pl-[22px] sm:pb-5 sm:pl-5">
                        <div className="flex items-center justify-between gap-5 self-stretch">
                          <div className="flex items-start gap-[15px] self-end">
                            <Img
                              src="images/img_image_1.png"
                              alt="imageone"
                              className="h-[32px] w-[31px] object-cover"
                            />
                            <Text size="xs" as="p" className="mt-[5px] capitalize tracking-[0.80px] !text-black-900">
                              ZORA
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
                            Airdrop
                          </Button>
                        </div>
                        <div className="mb-[34px] flex rounded-[66px] bg-gradient1 p-3.5">
                          <Heading
                            size="md"
                            as="h4"
                            className="mb-3 h-[84px] w-[88px] !font-scheherazade capitalize tracking-[1.40px] text-center py-5"
                          >
                            $401
                          </Heading>
                        </div>
                      </div>
                      <div className="flex flex-col items-start gap-[18px] self-stretch">
                        <Heading as="h5" className="ml-2 capitalize tracking-[0.90px] md:ml-0">
                          zora-treasury-eTH
                        </Heading>
                        <Text
                          size="xs"
                          as="p"
                          className="ml-2 w-[98%] !font-roboto !font-light capitalize tracking-[0.80px] md:ml-0 md:w-full"
                        >
                          Zora is an NFT platform. You have sold NFT’s and can Claim your ETH today
                        </Text>
                        <div className="ml-2 flex items-center gap-[15px] md:ml-0">
                          <Img src="images/img_carbon_time_filled.svg" alt="carbontime" className="h-[32px] w-[32px]" />
                          <Text
                            size="xs"
                            as="p"
                            className="mb-[5px] self-end !font-roboto capitalize tracking-[0.80px]"
                          >
                            No Expiration
                          </Text>
                        </div>
                        <div className="ml-2 flex items-center gap-[15px] md:ml-0">
                          <Img src="images/img_ph_wallet_bold.svg" alt="phwalletbold" className="h-[37px]" />
                          <Text size="s" as="p" className="!font-roboto capitalize tracking-[0.90px]">
                            0xecde......oeab
                          </Text>
                        </div>
                      </div>
                      <Button shape="square" className="mb-[21px] min-w-[338px] font-medium text-white-A700 sm:px-5">
                        Claim Now
                      </Button>
                    </div>
                  </div>
                  <div className="mt-11 self-stretch pb-[18px]">
                    <Img
                      src="images/img_milky_way.png"
                      alt="milkyway"
                      className="h-[316px] w-full object-cover md:h-auto"
                    />
                  </div>

                  {/* wallet support section */}
                  <div className="container-xs mt-[174px] flex flex-col items-center gap-[646px] px-[166px] md:gap-[484px] md:p-5 md:px-5 sm:gap-[323px]">
                    <div className="flex flex-col items-center gap-[46px]">
                      <Text
                        size="2xl"
                        as="p"
                        className="bg-gradient3 bg-clip-text !font-lato capitalize !text-transparent"
                      >
                        Claim across world’s most trusted and fastest wallets
                      </Text>
                      <Text size="4xl" as="p" className="text-center capitalize">
                        wallets we support
                      </Text>
                    </div>
                    <div className="flex w-[88%] flex-col items-center justify-center gap-[35px] px-6 pt-6 md:w-full sm:px-5 sm:pt-5">
                      <Heading size="lg" as="h6" className="text-center !font-bold !text-gray-100_01">
                        Ready for Next Air Drop?
                      </Heading>
                      <Input
                        shape="round"
                        color="undefined_undefined"
                        type="email"
                        name="email"
                        placeholder={`info@gmail.com`}
                        suffix={
                          <button onClick="submit" className='flex h-[50px] w-[100px] items-center justify-center rounded-[15px] p-5 border border-red-400 bg-red-400 text-white-A700 text-[20px]'>
                              Submit
                          </button>
                        }
                        className="w-[90%] sm:pl-5"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* wallet cards section */}
            <ShihamiLandingPageWalletcards className="absolute bottom-[22%] left-0 right-0 m-auto flex w-full gap-[60px] md:relative md:flex-col" />
          </div>

          {/* footer section */}
          <div className="flex w-[89%] justify-center bg-gradient2 py-1.5 md:w-full md:p-5">
            <div className="container-xs mb-[43px] mt-[90px] flex items-start justify-between gap-5 pr-[93px] md:flex-col md:pr-5">
              
              <h1 className=" text-white-A700 text-5xl font-bold" onClick={()=>{
                window.scrollTo({
                  top:0,
                  behavior:'smooth'
                })
              }}>CLAIMIT</h1>
            
              <div className="flex w-[79%] items-center justify-between gap-5 md:w-full md:flex-col">
                <div className="flex w-[43%] flex-col items-start gap-[69px] md:w-full sm:gap-[34px]">
                  <div className="flex flex-col gap-[59px] self-stretch sm:gap-[29px]">
                    <Text as="p" className="leading-9 !text-gray-500">
                      The leading platform to discover and claim unclaimed airdrops. Made easy & secure.
                    </Text>
                    <div className="flex w-[57%] items-center justify-between gap-5 md:w-full">
                      <Img src="images/img_warning_purple_500.svg" alt="warning" className="h-[26px]" />
                      <Img src="images/img_trash.svg" alt="trash" className="h-[26px]" />
                      <Img src="images/img_facebook.svg" alt="facebook" className="h-[27px]" />
                      <Img src="images/img_google.svg" alt="google" className="h-[27px] w-[28px]" />
                    </div>
                  </div>
                  <Text as="p" className="!font-normal !text-gray-500">
                    All rights reserved @CLAIMIT
                  </Text>
                </div>
                <div className="flex w-[47%] gap-[107px] md:w-full md:flex-row">
                  {data.map((d, index) => (
                    <div key={"footernav" + index} className="flex flex-col items-start gap-[21px]">
                      <Heading size="s" as="h2" className="!font-worksans !text-gray-100_01">
                        {d.about}
                      </Heading>
                      <div className="flex flex-col items-start gap-[29px] py-3">
                        <a href="#">
                          <Text as="p" className="!text-gray-500">
                            {d.aboutairdrops}
                          </Text>
                        </a>
                        <a href="#">
                          <Text as="p" className="!text-gray-500">
                            {d.liveauctions}
                          </Text>
                        </a>
                        <a href="#">
                          <Text as="p" className="!text-gray-500">
                            {d.airdropblog}
                          </Text>
                        </a>
                        <a href="Activity" target="_blank" rel="noreferrer">
                          <Text as="p" className="!text-gray-500">
                            {d.activity}
                          </Text>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
