import { Box, Link, Image, Text, Icon, Input, Button } from "@chakra-ui/react";
import { FcSmartphoneTablet } from 'react-icons/fc';
import { AiFillInstagram } from 'react-icons/ai';
import { BsPinterest, BsTwitter, BsFacebook } from 'react-icons/bs';
import { GrAdd } from 'react-icons/gr';

function Footer(){
    return <Box>
        <Box w="90%" m="auto" display="flex" justifyContent="space-between" p="60px 0px 40px 0px">
            <Box></Box>
            <Box display="flex" gap="10px" alignItems="center">
                <Text fontWeight="400" fontSize="13px">Get Email Updates:</Text>
                <Input rounded="0px" w="270px" placeholder="Email Address" />
                <Button rounded="0px" bg="black" color="white" p="0px 80px">Sign Up</Button>
            </Box>
        </Box>
        <Box bg="#f5f6f7" p="40px 0px">
        <Box w="90%" m="auto">
            <Box w="95%" display="grid" gridTemplateColumns="repeat(6, 1fr)" textAlign="left">
                <Box display="grid" gridTemplateColumns="repeat(1, 1fr)" gap="10px">
                    <Link fontWeight="bold" fontSize="15px">Customer Service</Link>
                    <Link fontWeight="400" fontSize="15px">Contact Us</Link>
                    <Link fontWeight="400" fontSize="15px">Order Status</Link>
                    <Link fontWeight="400" fontSize="15px">Shipping</Link>
                    <Link fontWeight="400" fontSize="15px">Return Policy & Exchanges</Link>
                    <Link fontWeight="400" fontSize="15px">Price Adjustments</Link>
                    <Link fontWeight="400" fontSize="15px">Gift Cards</Link>
                    <Link fontWeight="400" fontSize="15px">FAQ</Link>
                    <Link fontWeight="400" fontSize="15px">Product Recalls</Link>
                    <Box display="flex" gap="2px" alignItems="center">
                        <Image rounded="50%" w="4" h="4" src="data:image/png;base64,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" alt="flag" />
                        <Text fontWeight="400" fontSize="15px">India</Text>
                    </Box>
                </Box>
                <Box display="grid" gridTemplateColumns="repeat(1, 1fr)">
                    <Link fontWeight="bold" fontSize="15px">About Us</Link>
                    <Link fontWeight="400" fontSize="15px">All Brands</Link>
                    <Link fontWeight="400" fontSize="15px">Careers</Link>
                    <Link fontWeight="400" fontSize="15px">Corporate Social Responsibility</Link>
                    <Link fontWeight="400" fontSize="15px">Diversity, Inclusion & Belonging</Link>
                    <Link fontWeight="400" fontSize="15px">Get Email Updates</Link>
                    <Link fontWeight="400" fontSize="15px">Nordstrom Blog</Link>
                    <Link fontWeight="400" fontSize="15px">The Thread</Link>
                    <Link fontWeight="400" fontSize="15px">Nordy Podcast</Link>
                </Box>
                <Box display="grid" gridTemplateColumns="repeat(1, 1fr)">
                    <Link fontWeight="bold" fontSize="15px">Stores & Services</Link>
                    <Link fontWeight="400" fontSize="15px">Find a Store</Link>
                    <Link fontWeight="400" fontSize="15px">Free Style Help</Link>
                    <Link fontWeight="400" fontSize="15px">Alterations & Tailoring</Link>
                    <Link fontWeight="400" fontSize="15px">Pop-In Shop</Link>
                    <Link fontWeight="400" fontSize="15px">Virtual Events</Link>
                    <Link fontWeight="400" fontSize="15px">Spa Nordstorm</Link>
                    <Link fontWeight="400" fontSize="15px">Nordstorm Restaurants</Link>
                    <Link fontWeight="400" fontSize="15px">Nordstorm Local</Link>
                </Box>
                <Box display="grid" gridTemplateColumns="repeat(1, 1fr)">
                    <Link fontWeight="bold" fontSize="15px">Nordstrom Card & Rewards</Link>
                    <Link fontWeight="400" fontSize="15px">The Nordy Club Rewards</Link>
                    <Link fontWeight="400" fontSize="15px">Pay My Bill</Link>
                    <Link fontWeight="400" fontSize="15px">Manage My Nordstorm Card</Link>
                </Box>
                <Box display="grid" gridTemplateColumns="repeat(1, 1fr)">
                    <Link fontWeight="bold" fontSize="15px">Nordstrom, Inc.</Link>
                    <Link fontWeight="400" fontSize="15px">Nordstrom Rack</Link>
                    <Link fontWeight="400" fontSize="15px">Nordstrom Canada</Link>
                    <Link fontWeight="400" fontSize="15px">Investor Relations</Link>
                    <Link fontWeight="400" fontSize="15px">Press Releases</Link>
                    <Link fontWeight="400" fontSize="15px">Nordstrom Media Network</Link>
                </Box>
                <Box>
                    <Link display="flex" alignItems="center" gap="5px" href='#' fontSize="16px" mb="15px">
                        <Icon color="gray.600" as={FcSmartphoneTablet} w={7} h={7} /> Get our apps
                    </Link>
                    <Box display="flex" justifyContent="space-between">
                        <Icon color="gray.600" as={AiFillInstagram} w={6} h={6} />
                        <Icon color="gray.600" as={BsPinterest} w={5} h={5} />
                        <Icon color="gray.600" as={BsTwitter} w={5} h={5} />
                        <Icon color="gray.600" as={BsFacebook} w={5} h={5} />
                        <Icon color="gray.600" as={GrAdd} w={5} h={5} />
                    </Box>
                </Box>
            </Box>
        </Box>
        <Box w="90%" m="auto" mt="40px">
            <Box w="60%" display="flex" justifyContent="space-between" alignItems="center">
                <Link fontWeight="400" fontSize="13px">Privacy</Link>
                <Link fontWeight="400" fontSize="14px">Do Not Sell My Personal Information</Link>
                <Link fontWeight="400" fontSize="14px">Terms & Conditions</Link>
                <Link fontWeight="400" fontSize="14px">Interest-Based Ads</Link>
                <Text fontWeight="200" fontSize="13px">©2022 Nordstrom, Inc.</Text>
            </Box>
        </Box>
    </Box>
    </Box>
}

export default Footer;