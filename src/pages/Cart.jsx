import React from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import Heading from "../components/Heading";
import { MdKeyboardArrowRight } from "react-icons/md";
import { ImCross } from "react-icons/im";
import Image from '../components/Image'
import smallglasses from '../assets/images/small sunglasses.png'
import QuantityBox from "../components/QuantityBox";
const Cart = () => {
  return (
    <>
      <Container>
        <Heading
          as="h3"
          text="Cart"
          className="pt-32 pb-8 text-3xl font-bold md:text-3xl xl:text-4xl lg:text-5xl font-dm"
        />
        <Flex>
          <Heading
            as="h3"
            text="Home"
            className="text-sm md:text-base font-dm text-menuText "
          />
          <MdKeyboardArrowRight className="mx-2 mt-[2px] text-xl text-black" />
          <Heading
            as="h3"
            text="Cart"
            className="text-sm md:text-base font-dm text-menuText "
          />
        </Flex>

        <Flex className="mt-28 md:mt-[140px] pt-10 md:pt-8  bg-categoryColor justify-between px-32 pb-4">
          <Heading
            as="h3"
            text="Product"
            className="text-sm font-semibold md:text-base font-dm"
          />
          <Heading
            as="h3"
            text="Price"
            className=" text-sm md:text-base font-dm font-semibold ]"
          />
          <Heading
            as="h3"
            text="Quantity"
            className="text-sm font-semibold md:text-base font-dm"
          />
          <Heading
            as="h3"
            text="Total"
            className="text-sm font-semibold md:text-base font-dm"
          />
        </Flex>

        <div className="border-[1px] py-7 border-b-gray-100">
            <Flex className='justify-between lg:pr-36'>
               <div className="flex">
               <ImCross className="mt-4 mr-2 text-xs md:mt-10 md:mr-8 md:text-base" />
             <Image imgSrc={smallglasses} imgAlt={'smallglasses.png'} className='h-auto w-11 md:w-full md:h-full'/>
             <Heading
            as="h3"
            text="Product Name"
            className="mt-4 ml-2 text-xs font-semibold md:text-base font-dm md:mt-10"
          />
                </div> 
               <div className="">
             <Heading
            as="h3"
            text="$44.00"
            className="mt-4 ml-2 text-sm font-semibold md:text-xl font-dm md:pt-4"
          />
                </div> 
               <div className="mt-2 md:pt-4">
<QuantityBox/>
                </div> 
                <div className="">
             <Heading
            as="h3"
            text="$44.00"
            className="mt-4 ml-2 text-sm font-semibold md:text-xl font-dm md:pt-4"
          />
                </div> 
            </Flex>
        </div>
      </Container>
    </>
  );
};

export default Cart;
