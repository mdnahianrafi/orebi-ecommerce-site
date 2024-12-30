import React from 'react'
import Image from '../components/Image'
import BannerOne from '../assets/images/banner one.png';
import Flex from '../components/Flex';
import { Fa2 } from "react-icons/fa6";
import Heading from '../components/Heading';
import Container from '../components/Container';
import { FaTruck } from "react-icons/fa";
import { TbReload } from "react-icons/tb";
import AdOne from "../assets/images/Ad one.jpg";
import AdTwo from "../assets/images/Ad two.png";
import AdThree from "../assets/images/Ad three.jpg";
import Products from "../components/Products";
import Speaker from "../assets/images/speaker.png";
import SmartWatch from "../assets/images/smartwatch.png";
import Basket from "../assets/images/basket.png";
import Doll from "../assets/images/doll.png";
import Vase from "../assets/images/vase.png";
import BagOne from "../assets/images/bag one.png";
import Grinder from "../assets/images/Hand grinder.png";
import BagTwo from "../assets/images/bag one.png";
import AdFour from "../assets/images/Ad Four.png";
import Cap from "../assets/images/cap.png";
import TeaTable from "../assets/images/tea table.png";
import Headphones from "../assets/images/headphones.png";
import Sunglass from "../assets/images/sun glasses.png";
const Home = () => {
  const newArrivals = [
    {
      imgSrc: Speaker,
      name: "Basic Crew Neck Tee",
      price: "$44.00",
      color: "Black",
    },
    {
      imgSrc: SmartWatch,
      name: "Basic Crew Neck Tee",
      price: "$44.00",
      color: "Black",
    },
    {
      imgSrc: Basket,
      name: "Basic Crew Neck Tee",
      price: "$44.00",
      color: "Black",
    },
    {
      imgSrc: Doll,
      name: "Basic Crew Neck Tee",
      price: "$44.00",
      color: "Black",
    },
  ];

  const bestSellers = [
    {
      imgSrc: Vase,
      name: "Basic Crew Neck Tee",
      price: "$44.00",
      color: "Black",
    },
    {
      imgSrc: BagOne,
      name: "Basic Crew Neck Tee",
      price: "$44.00",
      color: "Black",
    },
    {
      imgSrc: Grinder,
      name: "Basic Crew Neck Tee",
      price: "$44.00",
      color: "Black",
    },
    {
      imgSrc: BagTwo,
      name: "Basic Crew Neck Tee",
      price: "$44.00",
      color: "Black",
    },
  ];
  const specialOffers = [
    {
      imgSrc: Cap,
      name: "Basic Crew Neck Tee",
      price: "$44.00",
      color: "Black",
    },
    {
      imgSrc: TeaTable,
      name: "Basic Crew Neck Tee",
      price: "$44.00",
      color: "Black",
    },
    {
      imgSrc: Headphones,
      name: "Basic Crew Neck Tee",
      price: "$44.00",
      color: "Black",
    },
    {
      imgSrc: Sunglass,
      name: "Basic Crew Neck Tee",
      price: "$44.00",
      color: "Black",
    },
  ];
  return (
    <>
    <div>
    <Image imgSrc={BannerOne} imgAlt={'banner one.png'}/>
    </div>
    <div className='py-10 border-b-[2px] '>
<Container>
<Flex className='justify-between'>
            <div className='flex'>
            <Fa2 className='mt-[2px] text-xl font-bold' />
            <Heading as="h3" text="Two years warranty" className='pl-5 text-sm md:text-base font-dm' />
            </div>
            <div className='flex'>
            <FaTruck className='mt-1 text-xl font-bold' />
            <Heading as="h3" text="Free shiping" className='pl-5 text-sm md:text-base font-dm' />
            </div>
            <div className='flex'>
            <TbReload   className='mt-1 text-xl font-bold' />
            <Heading as="h3" text="30 Days return policy" className='pl-5 text-sm md:text-base font-dm' />
            </div>
        </Flex>

        <Flex className='pt-[142px] gap-x-10'>
            <div className='w-1/2'>
            <Image imgSrc={AdOne} imgAlt={'Ad one.jpg'}/>
            </div>
            <div className='w-1/2'>
            <Image imgSrc={AdTwo} imgAlt={'Ad two.jpg'} />
            <Image imgSrc={AdThree} imgAlt={'Ad three.jpg'} className='mt-10'/>
            </div>
        </Flex>
</Container>
    </div>

    <div className="py-28">
        <Container className="max-w-headerContainer">
          <h2 className="mb-6 text-4xl font-bold font-dm">New Arrivals</h2>
          <Products productData={newArrivals} />
        </Container>
      </div>
      <div className="py-28">
        <Container className="max-w-headerContainer">
          <h2 className="mb-6 text-4xl font-bold font-dm">Our Best Sellers</h2>
          <Products productData={bestSellers} />
        </Container>
      </div>

<div>
  <Container>
    <Image imgSrc={AdFour} imgAlt={"ad four.png"}/>
  </Container>
</div>

      {/* Special Offers Products Start */}
      <div className="py-28">
        <Container className="max-w-headerContainer">
          <h2 className="mb-6 text-4xl font-bold font-dm">Special Offers</h2>
          <Products productData={specialOffers} />
        </Container>
      </div>
      {/* Special Offers Products End */}
    </>
  )
}

export default Home
