import React from "react";
import { Img, Button, Text } from "./..";

export default function Header({ ...props }) {
  return (
    <header {...props}>
      <Img src="images/img_header_logo.png" alt="headerlogo" className="h-[63px] w-[17%] object-cover sm:w-full" />
      <ul className="!mb-[11px] flex">
        <li>
          <a href="#">
            <Text size="xl" as="p" className="uppercase">
              explore
            </Text>
          </a>
        </li>
      </ul>
      <div className="mb-[7px] flex w-[22%] items-center justify-center gap-[30px] sm:w-full">
        <Button
          size="xs"
          shape="square"
          leftIcon={<Img src="images/img_group_4.png" alt="group 4" className="h-[43px] w-[14px]" />}
          rightIcon={<Img src="images/img_group_5.png" alt="group 5" className="h-[43px] w-[14px]" />}
          className="min-w-[188px] gap-4 font-medium text-white-A700"
        >
          Connect Wallet
        </Button>
        <Img src="images/img_user_profile.png" alt="userprofile" className="h-[40px] w-[40px] rounded-[50%]" />
      </div>
    </header>
  );
}
