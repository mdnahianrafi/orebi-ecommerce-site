import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Image from './Image'
import Logo from '../assets/images/logo.png'
import Heading from './Heading'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
<div className=''>
<Container className="py-[30px]">
  <Flex >
<div className='w-1/3'>
<Link to='/'><Image className='' imgSrc={Logo} imgAlt={"logo.png"}/></Link>
</div>
<div className='w-2/3'>
<Flex>
<Link to="/"><Heading as="h3" text="Home" className='pr-10 text-xs duration-300 md:text-base font-dm text-menuText hover:text-menuTextHover hover:font-semibold hover:ease-in-out'/></Link>
<Link to="/shop"><Heading as="h3" text="Shop" className='pr-10 text-xs duration-300 md:text-base font-dm text-menuText hover:text-menuTextHover hover:font-semibold hover:ease-in-out'/></Link>
<Link to="/about"><Heading as="h3" text="About" className='pr-10 text-xs duration-300 md:text-base font-dm text-menuText hover:text-menuTextHover hover:font-semibold hover:ease-in-out'/></Link>
<Link to="/contacts"><Heading as="h3" text="Contacts" className='text-xs duration-300 md:text-base font-dm text-menuText hover:text-menuTextHover hover:font-semibold hover:ease-in-out'/></Link>



</Flex>
</div>
  </Flex>
</Container>
</div>
  )
}

export default Navbar
