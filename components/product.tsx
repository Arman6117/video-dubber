import Image from "next/image";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import UpvoteButton from "./upvote-button";

const Product = () => {
  return (
    <div className="flex flex-col sm:flex-row ">

    <div className="flex flex-col overflow-hidden gap-3">
      <Image src={"/logo.avif"} alt="logo" width={100} height={100} />
      <div className="flex flex-1 flex-col justify-between gap-6 sm:flex-row">
        <div className="flex flex-col justify-start  gap-2">
          <div className="flex  items-center ">
            <h1 className="text-[24px] w-[290px] font-bold text-dark-gray styles_title__x5KUY">
              VideoDubber - Fast Video Translator
            </h1>
            <IoIosArrowDown className="text-[#CCC8C7] cursor-pointer font-bold" />
          </div>
          <h2 className="text-[22px]  w-[290px]  font-thin text-light-gray">
            Translate videos in your own voice, globalize in a click!
          </h2>
        </div>
      </div>
    </div>
    <div className="flex mt-10 items-end gap-6">
        <div className="max-h-[64px]  w-[90px] h-[64px] justify-center items-center flex  transition-all cursor-pointer border border-[##d9e1ec] rounded-sm hover:border hover:border-[#feb6b0]">
            <div className="flex gap-2 justify-center items-center ">
                <span className="text-[14px]">Visit</span>
                <IoIosArrowDown className="text-[#CCC8C7] cursor-pointer font-bold" />
            </div>
        </div>
       <UpvoteButton/>
    </div>
    </div>
  );
};

export default Product;
