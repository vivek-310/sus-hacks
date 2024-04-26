import React from "react";
import { Text, Img } from "./..";

const data = [
  { metamask: "Metamask", circleimage: "images/img_ellipse_3.png" },
  { metamask: "Metamask", circleimage: "images/img_ellipse_3_113x114.png" },
  { metamask: "Metamask", circleimage: "images/img_ellipse_3_1.png" },
  { metamask: "Metamask", circleimage: "images/img_ellipse_3_2.png" },
  { metamask: "Metamask", circleimage: "images/img_ellipse_3_3.png" },
  { metamask: "BitCoin", circleimage: "images/img_ellipse_3_4.png" },
];

export default function ShihamiLandingPageWalletcards({
  metamask = "Metamask",
  metamask1 = "Metamask",
  metamask2 = "Metamask",
  metamask3 = "Metamask",
  metamask4 = "Metamask",
  metamask5 = "BitCoin",
  ...props
}) {
  return (
    <div {...props}>
      {data.map((d, index) => (
        <div
          key={"wallet" + index}
          className="flex w-full flex-col items-center justify-center gap-[34px] rounded-[15px] bg-gradient2 p-[34px] sm:p-5"
        >
          <div className="self-stretch rounded-[101px] bg-gradient2 p-11 md:p-5">
            <Img src={d.circleimage} alt="circleimage" className="h-[113px] w-[114px] rounded-[50%]" />
          </div>
          <Text as="p" className="text-center capitalize">
            {d.metamask}
          </Text>
        </div>
      ))}
    </div>
  );
}
