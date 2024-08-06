"use client";

import { useState } from "react";
import { GoTriangleUp } from "react-icons/go";

const UpvoteButton = () => {
  const [upvote, setUpvote] = useState(false);
  const [upvoteCount, setUpvoteCount] = useState(0); // Update upvoteCount to state

  const handleUpvote = () => {
    if (upvoteCount === 1) {
      setUpvoteCount(0);
      setUpvote(false);
    } else {
      setUpvote(true);
      setUpvoteCount(upvoteCount + 1);
    }
  };

  return (
    <div
      className="max-h-[64px]  w-[224px] h-[64px] justify-center items-center flex  transition-all cursor-pointer  rounded-sm p-[20px] "
      onClick={handleUpvote}
      style={{
        backgroundImage: `${
          upvote ? "" : "linear-gradient(227deg,#ff4582,#ff6154)"
        }`,
        border: `${upvote ? "1px solid #feb6b0" : ""}`,
        transition:'all'
      }}
    >
      <div className="flex gap-2 justify-center items-center ">
        {upvote ? (
          <>
            <GoTriangleUp className="text-[#ff5f56] h-8 w-8" />
            <span className="text-[14px] font-semibold">UPVOTE</span>
            <span className="text-sm">{upvoteCount}</span>
          </>
        ) : (
          <>
            <GoTriangleUp className="text-[#ffffff] h-8 w-8" />
            <span className="text-[14px] text-white font-semibold">UPVOTE</span>
          </>
        )}
      </div>
    </div>
  );
};

export default UpvoteButton;
