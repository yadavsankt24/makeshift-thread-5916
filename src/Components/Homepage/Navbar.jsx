import { ChevronDownIcon, Icon, SearchIcon } from "@chakra-ui/icons";
import { Box, Image, Input, InputGroup, InputLeftElement, Link, Text } from "@chakra-ui/react";
import { BsBagCheck, BsBoxSeam } from 'react-icons/bs';
import { BiStoreAlt } from 'react-icons/bi';
import { CgGift } from 'react-icons/cg';


function Navbar(){
    return <Box>
        <Box bg="black" mb="10px">
            <Box m="auto" w="95%" display="flex" justifyContent="flex-end">
                <Box w="70%" justifyContent="space-between" display="flex">
                    <Box p="5px 0px">
                        <Text fontWeight="300" color="white" fontSize="15px">This weekend only! <b>Extra 25% off selected Clearance. </b>
                            <Link color="white" fontWeight="300" textDecoration="underline" fontSize="15px"> Exclusions & Restrictions</Link>
                        </Text>
                    </Box>
                    <Box display="flex" gap="2px" alignItems="center">
                        <Image rounded="50%" w="4" h="4" src="data:image/png;base64,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" alt="flag" />
                        <Text fontWeight="400" color="white">India</Text>
                    </Box>
                </Box>
            </Box>
        </Box>
        <Box>
            <Box borderBottom="1px solid gray" w="95%" m="auto"display="flex" justifyContent="space-between" alignItems="center" p="20px 0px">
                <Box w="15%">
                    <Image src="https://upload.wikimedia.org/wikipedia/commons/8/81/Nordstrom_Logo_2019.svg" alt="logo" />
                </Box>
                <Box w="45%">
                    <InputGroup>
                        <InputLeftElement
                        pointerEvents='none'
                        children={<SearchIcon color='gray.600' />}
                        />
                        <Input border="1px solid black" outline="none" rounded="none" color='gray.600' type='text' placeholder='Search for products or brands.' />
                    </InputGroup>
                </Box>
                <Box w="30%" display="flex" justifyContent="space-between" alignItems="center">
                    <Link display="flex" alignItems="center" href='#' fontSize="15px">
                        Sign In <Icon as={ChevronDownIcon} w={6} h={6} />
                    </Link>
                    <Link display="flex" alignItems="center" gap="5px" href='#' fontSize="15px">
                        <Icon color="gray.600" as={BiStoreAlt} w={6} h={6} /> Stores
                    </Link>
                    <Link display="flex" alignItems="center" gap="5px" href='#' fontSize="15px">
                        <Icon color="gray.700" as={BsBoxSeam} w={6} h={6} /> Purchases
                    </Link>
                    <Link display="flex" alignItems="center" href='#'>
                        <Icon color="gray.700" as={BsBagCheck} w={6} h={6} />
                    </Link>
                </Box>
            </Box>
        </Box>
        <Box>
            <Box w="90%" m="auto" p="20px 0px" fontSize="15px" display="flex" justifyContent="space-between">
                <Link display="flex" gap="3px" alignItems="center" href='#'><Icon color="gray.600" as={CgGift} w={5} h={5} /> Holiday Gifts</Link>
                <Link color="red.600">Holiday Deals</Link>
                <Link>Women</Link>
                <Link>Men</Link>
                <Link>Kids</Link>
                <Link>Young Adult</Link>
                <Link>Activewear</Link>
                <Link>Home</Link>
                <Link>Beauty</Link>
                <Link>Designer</Link>
                <Link>The Thread</Link>
            </Box>
        </Box>
    </Box>
}

export default Navbar;