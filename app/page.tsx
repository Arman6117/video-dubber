import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import Product from "@/components/product";
import BreadCrumb from "@/components/bread-crumb";
import { Breadcrumbs } from "@mantine/core";
export default function Home() {
  return (
    <main className="flex h-screen flex-col sm:items-center items-start justify-between p-24">
      <div className="bg-re-500 max-w-[652px] w-[652px] h-[300px] ">
        <BreadCrumb/>
        <Product/>
      </div>
    </main>
  );
}
