import React from "react";
import Heading from "../components/Heading";
import Container from "../components/Container";
import Flex from "../components/Flex";
import { MdKeyboardArrowRight } from "react-icons/md";
import Image from "../components/Image";
import Basket from "../assets/images/laundrey basket.png";
import Sunglasses from "../assets/images/Sunglasses big.png";
import Teatable from "../assets/images/big tea table.png";
import Headphone from "../assets/images/Headphones big.png";
import { RiStarSFill } from "react-icons/ri";
import QuantityBox from "../components/QuantityBox";
import { FaPlus } from "react-icons/fa";

const ProductInside = () => {
  return (
    <div>
      <Container>
        <Flex>
          <Heading
            as="h3"
            text="Home"
            className="text-base font-dm text-menuText"
          />
          <MdKeyboardArrowRight className="mx-2 mt-[2px] text-xl text-black" />
          <Heading
            as="h3"
            text="Products"
            className="text-base font-dm text-menuText"
          />
        </Flex>

        <Flex className="pt-32 gap-x-10">
          <Image imgSrc={Basket} imgAlt={"basket.png"} />
          <Image imgSrc={Sunglasses} imgAlt={"Sunglasses big.png"} />
        </Flex>
        <Flex className="pt-10 gap-x-10">
          <Image imgSrc={Teatable} imgAlt={"big tea table.png"} />
          <Image imgSrc={Headphone} imgAlt={"Headphones big.png"} />
        </Flex>
        <Heading
          as="h3"
          text="Product"
          className="text-5xl font-dm pt-[55px] font-bold"
        />
        <Flex></Flex>
        <Flex className={"py-7"}>
          <div className="flex mr-6">
            <RiStarSFill className="text-xl text-yellow-400" />
            <RiStarSFill className="text-xl text-yellow-400" />
            <RiStarSFill className="text-xl text-yellow-400" />
            <RiStarSFill className="text-xl text-yellow-400" />
            <RiStarSFill className="text-xl text-yellow-400" />
          </div>
          <Heading
            as="h3"
            text="1 Review"
            className="text-base font-dm text-menuText"
          />
        </Flex>

        <Flex className={"pb-7"}>
          <Heading
            as="h3"
            text="$88.00"
            className="pt-[2px] pr-5 text-base line-through font-dm text-menuText"
          />
          <Heading
            as="h3"
            text="$44.00"
            className="text-xl font-bold font-dm"
          />
        </Flex>
        <div className="w-1/2 h-[0.5px] bg-gray-300 rounded-lg"></div>
        <div className="flex pt-7">
          <Heading
            as="h3"
            text="Color:"
            className="pt-[2px] pr-12 text-xl font-bold font-dm "
          />
          <div className="flex pt-2">
            <div className="w-4 h-4 mr-4 duration-300 ease-in-out bg-gray-300 rounded-full hover:w-5 hover:h-5 "></div>
            <div className="w-4 h-4 mr-4 duration-300 ease-in-out bg-red-400 rounded-full hover:w-5 hover:h-5 "></div>
            <div className="w-4 h-4 mr-4 duration-300 ease-in-out rounded-full bg-lime-300 hover:w-5 hover:h-5 "></div>
            <div className="w-4 h-4 mr-4 duration-300 ease-in-out bg-gray-200 rounded-full hover:w-5 hover:h-5 "></div>
            <div className="w-4 h-4 mr-4 duration-300 ease-in-out bg-teal-100 rounded-full hover:w-5 hover:h-5 "></div>
          </div>
        </div>

        <div className="pt-6">
          <label
            for="dropdown"
            className="pt-1 text-xl font-bold pr-28 font-dm"
          >
                     <Heading
            as="h3"
            text="Size:"
            className="pt-[2px] pr-14 text-xl font-bold font-dm "
          />
          </label>
          <select
            id="dropdown"
            className="border-[1px] font-dm text-menuText pl-2 pr-[60px] py-1"
          >
            <option value="" disabled selected hidden>
              Enter Size
            </option>
            <option value="option1">S</option>
            <option value="option2">M</option>
            <option value="option3">L</option>
            <option value="option3">XL</option>
            <option value="option3">XXL</option>
          </select>
        </div>
        <div className="flex py-6 ">
          <Heading
            as="h3"
            text="Quantity:"
            className="pt-[2px] pr-14 text-xl font-bold font-dm "
          />
          <QuantityBox />
        </div>
        <div className="w-1/2 h-[0.5px] bg-gray-300 rounded-lg"></div>
        <Flex className={"py-6"}>
          <Heading
            as="h3"
            text="Status:"
            className="pt-[2px] pr-14 text-xl font-bold font-dm "
          />
          <Heading
            as="h3"
            text="In stock"
            className="pt-[2px] pr-14 text-xl text-menuText font-dm "
          />
        </Flex>
        <div className="w-1/2 h-[0.5px] bg-gray-300 rounded-lg"></div>
        <div className="flex py-6 gap-x-5">
          <button className="border-[2px] border-black bg-black text-white hover:bg-transparent hover:text-black hover:ease-in-out duration-300">
            <Heading
              as="h3"
              text="Add to Wish List"
              className="px-12 py-5 text-sm font-bold font-dm"
            />
          </button>
          <button className="border-[2px] border-black bg-black text-white hover:bg-transparent hover:text-black hover:ease-in-out duration-300">
            <Heading
              as="h3"
              text="Add to Cart"
              className="px-12 py-5 text-sm font-bold font-dm"
            />
          </button>
        </div>
        <div className="w-1/2 h-[0.5px] bg-gray-300 rounded-lg"></div>
        <Flex className={"w-1/2 justify-between py-6"}>
          <Heading
            as="h3"
            text="Features & Details"
            className="text-2xl font-bold font-dm"
          />
          <FaPlus className="text-xl text-menuText" />
        </Flex>
        <div className="w-1/2 h-[0.5px] bg-gray-300 rounded-lg"></div>
        <Flex className={"w-1/2 justify-between py-6"}>
          <Heading
            as="h3"
            text="Shipping & Returns"
            className="text-2xl font-bold font-dm"
          />
          <FaPlus className="text-xl text-menuText" />
        </Flex>
        <div className="w-1/2 h-[0.5px] bg-gray-300 rounded-lg"></div>
        <Heading
          as="h3"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          className="py-6 text-base pr-[638px] leading-10 font-dm text-menuText"
        />

        <Flex className={"gap-x-14 pt-28 pb-8"}>
          <Heading
            as="h3"
            text="Description"
            className="text-[20px] font-dm text-menuText"
          />
          <Heading
            as="h3"
            text="Reviews (1)"
            className="text-[20px] font-dm font-bold"
          />
        </Flex>
        <Heading
          as="h3"
          text="1 review for Product"
          className="py-4 text-sm border-b-2 border-b-gray-300 font-dm text-menuText"
        />
        <Flex className={" py-4 gap-x-7"}>
          <Heading
            as="h3"
            text="John Ford"
            className="text-base font-dm text-menuText"
          />
          <Flex>
            <RiStarSFill className="text-xl text-yellow-400" />
            <RiStarSFill className="text-xl text-yellow-400" />
            <RiStarSFill className="text-xl text-yellow-400" />
            <RiStarSFill className="text-xl text-yellow-400" />
            <RiStarSFill className="text-xl text-yellow-400" />
          </Flex>
        </Flex>
        <Heading
          as="h3"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
"
          className="py-8 text-base leading-10 border-b-2 border-b-gray-300 font-dm text-menuText"
        />
        <Heading
          as="h3"
          text="Add a Review"
          className="py-8 text-2xl font-bold leading-10 font-dm"
        />

        <div>
          <Heading
            as="h3"
            text="Name"
            className="py-3 text-xl font-bold leading-10 font-dm"
          />
          <input
            type="text"
            placeholder="Your name here"
            className="w-1/2 py-4 text-base border-b-2 border-b-gray-200 focus:outline-none text-menuText"
          />
        </div>
        <div>
          <Heading
            as="h3"
            text="Email"
            className="py-3 text-xl font-bold leading-10 font-dm"
          />
          <input
            type="text"
            placeholder="Your mail here"
            className="w-1/2 py-4 text-base border-b-2 border-b-gray-200 focus:outline-none text-menuText"
          />
        </div>
        <div>
          <Heading
            as="h3"
            text="Review"
            className="py-3 text-xl font-bold leading-10 font-dm"
          />
          <input
            type="text"
            placeholder="Your review  here"
            className="w-1/2 pt-4 pb-8 text-base border-b-2 border-b-gray-200 focus:outline-none text-menuText"
          />
        </div>

        <div className="pt-7 pb-[348px]">
          <button className="border-[2px] border-black bg-black text-white hover:bg-transparent hover:text-black hover:ease-in-out duration-300">
            <Heading
              as="h3"
              text="Post"
              className="px-12 py-5 text-base font-bold font-dm"
            />
          </button>
        </div>
      </Container>
    </div>
  );
};

export default ProductInside;
