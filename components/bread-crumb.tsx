import Link from 'next/link'
import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'

const BreadCrumb = () => {
  return (
    <div className="flex my-5 flex-col sm:flex-row gap-2 ">
    <div className="flex gap-2">
      <div className="flex items-center justify-center gap-1">
        <Link
          href={"/"}
          className="text-[14px] font-normal text-dark-gray hover:text-blue hover:opacity-100 opacity-70"
        >
          Home
        </Link>
        <IoIosArrowForward className="text-[#4b587c] h-4 w-4" />
      </div>
      <div className="flex items-center justify-center gap-1">
        <Link
          href={"/"}
          className="text-[14px] font-normal text-dark-gray hover:text-blue hover:opacity-100 opacity-70"
        >
          Product
        </Link>
      </div>
    </div>
    <div className="flex items-center gap-1">
      <IoIosArrowForward className="text-[#4b587c] h-4 w-4" />

      <p className="text-[14px] font-normal text-dark-gray  ">
        VideoDubber - Fast Video Translator
      </p>
    </div>
  </div>
  )
}

export default BreadCrumb