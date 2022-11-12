import { Box, Image, Text, Link, Button } from "@chakra-ui/react";


function Homepage(){
    return <Box>
        <Box w="95%" m="auto" display="flex" justifyContent="space-between" p="40px 0px 60px 0px">
            <Box w="25%">
                <Image w="100%" src="https://n.nordstrommedia.com/id/c30eb052-a9da-4529-95ed-0d1568cc55ad.png?h=22&w=536" alt="colors" />
            </Box>
            <Box>
                <Box>
                    <Text color="gray.700" fontSize='xl' fontWeight="700">Shop what you love—faster and easier.</Text>
                    <Link href="/signAuth" textDecoration="underline" fontweight="300" fontSize='sm'>Sign In or Create an Account</Link>
                </Box>
            </Box>
            <Box  w="25%">
                <Image w="100%" src="https://n.nordstrommedia.com/id/01471914-5c74-4e79-a258-af5f398b1a73.png?h=22&w=536" alt="colors" />
            </Box>
        </Box>
        <Box w="95%" m="auto" bg="#f0f1f2" p="22px">
            <Box bg="#fafafa" p="70px 0px">
                <Box w="60%" m="auto">
                    <Text fontWeight="800" fontSize="38px" mb="4px">CLEARANCE</Text>
                    <Text fontWeight="800" color="#f23224" fontSize="32px" mb="10px">EXTRA 25% OFF</Text>
                    <Text fontWeight="400" fontSize="15px">Save up to 70% on selected items—exclusions apply. Ends Monday!</Text>
                </Box>
                <Box w="70%" m="auto" display="flex" justifyContent="space-between">
                    <Link fontWeight="400" fontSize="15px" textDecoration="underline">New Markdowns</Link>
                    <Link fontWeight="400" fontSize="15px" textDecoration="underline">Women's Sale</Link>
                    <Link fontWeight="400" fontSize="15px" textDecoration="underline">Men's Sale</Link>
                    <Link fontWeight="400" fontSize="15px" textDecoration="underline">Kids' Sale</Link>
                    <Link fontWeight="400" fontSize="15px" textDecoration="underline">Home Sale</Link>
                    <Link fontWeight="400" fontSize="15px" textDecoration="underline">Beauty & Fragrance Sale</Link>
                    <Link fontWeight="400" fontSize="15px" textDecoration="underline">Exclusions & Restrictions</Link>
                </Box>
            </Box>
        </Box>
        <Box w="95%" m="40px auto 80px auto" display="flex" bg="black">
            <Box w="50%">
                <Image src="https://cdn.smartnordstrom.com/s3/csp/1666988189993/Nordstrom_Homepage_Display_Dyson.jpg" alt="img"/>
            </Box>
            <Box w="50%" color="white">
                <Box w="80%" m="auto" pt="25px">
                    <Text color="white" fontSize="xl">Gift with Style</Text>
                    <Text color="white" fontWeight="400" fontSize="14px">The special-edition Dyson Supersonic hair dryer is here!</Text>
                    <Link textDecoration="underline" fontSize="md">Shop Now</Link>
                </Box>
            </Box>
        </Box>
        <Box w="95%" display="flex" m="auto" alignItems="center">
                <Image position="relative" src="https://n.nordstrommedia.com/id/b08bf521-59ce-4e71-a28b-a84486ebc295.jpeg?h=700&w=1608" alt="img" />
            <Box w="26%" position="absolute" right="8%" textAlign="left">
                <Text fontSize="27px">Scentscape Beauty Deal</Text>
                <Text fontWeight="400" fontSize="14px">Save 25% on fragrance faves from SKYLAR, AllSaints and Lake & Skye. Through November 13, while supply lasts.</Text>
                <Link textDecoration="underline" fontSize="15px">Beauty & Fragrance Sale</Link>
            </Box>
        </Box>
        <Box position="relative" w="95%" m="40px auto">
            <Image mb="40px" src="https://n.nordstrommedia.com/id/5ec3d3de-9e8c-4317-bc28-3b42b503268e.png?h=17&w=1608" alt="img" />
            <Image src="https://n.nordstrommedia.com/id/706917ad-140f-4af0-94f3-cbe08a9f9c9d.png?h=300&w=1608" alt="clrful" />
            <Box position="absolute" left="28%" bottom="0.5%" w="40%" m="auto" textAlign="center">
                <Text fontWeight="400" fontSize="20px">The best gifts for everyone you love, all in one place.</Text>
                <Box display="flex" justifyContent="space-between" mt="10px">
                    <Button p="25px 15px" _hover={{border:"1px solid  white", bg:"gray.200"}} border="1px solid black" bg="none" rounded="0">Shop Gifts</Button>
                    <Button p="25px 15px" _hover={{border:"1px solid  white", bg:"gray.200"}} border="1px solid black" bg="none" rounded="0">Explore Our Gift Guide</Button>
                    <Button p="25px 15px" _hover={{border:"1px solid  white", bg:"gray.200"}} border="1px solid black" bg="none" rounded="0">Shop Holiday Dressing</Button>
                </Box>
            </Box>
        </Box>
        <Box w="95%" m="auto">
            <Image mb="40px" src="https://n.nordstrommedia.com/id/5ec3d3de-9e8c-4317-bc28-3b42b503268e.png?h=17&w=1608" alt="img" />
            <Text fontSize="3xl">Trending Now</Text>
            <Box display="flex" alignItems="center" m="20px auto">
                <Image position="relative" src="https://n.nordstrommedia.com/id/ca2fbe1a-8500-4018-bb61-40e88bb3887b.jpeg?h=700&w=1608" alt="img" />
                <Box w="26%" position="absolute" right="8%" textAlign="left">
                    <Text fontSize="27px">Festive & Fabulous</Text>
                    <Text fontWeight="400" fontSize="14px">Be the life of the party in super-glam kitten heels, platforms and more.</Text>
                    <Link mr="15px" textDecoration="underline" fontSize="16.5px">All Heels</Link>
                    <Link mr="15px" textDecoration="underline" fontSize="16.5px"> Low Heels (1"-2")</Link>
                    <Link mr="15px" textDecoration="underline" fontSize="16.5px"> Medium Heels (2"-3")</Link>
                    <Link mr="15px" textDecoration="underline" fontSize="16.5px"> High Heels (3"-4")</Link>
                    <Link mr="15px" textDecoration="underline" fontSize="16.5px"> Ultra-High Heels (4"+)</Link>
                </Box>
            </Box>
        </Box>
        <Box w="95%" m="40px auto">
            <Image mb="40px" src="https://n.nordstrommedia.com/id/5ec3d3de-9e8c-4317-bc28-3b42b503268e.png?h=17&w=1608" alt="img" />
            <Text color="gray.700" fontSize="2xl">THE THREAD</Text>
            <Text fontWeight="400" fontSize="15px">Your go-to destination for all things fashion, beauty and lifestyle at Nordstrom, from how-tos and style inspiration to exclusive interviews and more.</Text>
            <Link textDecoration="underline" fontSize="15px">Get Inspired</Link>
            <Box display="flex" justifyContent="space-between" textAlign="left" mt="50px">
                <Box w="33%">
                    <Image src="https://n.nordstrommedia.com/id/7a88667d-2b47-4e18-9a09-64d6e45cbeff.jpeg?h=516&w=536" alt="img" />
                    <Text color="gray.700" fontSize="20px">The 5 Outerwear Styles to Shop for This Season, According to a Fashion Director</Text>
                    <Link textDecoration="underline" fontSize="16px">Read More</Link>
                </Box>
                <Box w="33%">
                    <Image src="https://n.nordstrommedia.com/id/8133ea12-7377-4e1c-a8d7-f6e21b4492ad.jpeg?h=516&w=536" alt="img" />
                    <Text color="gray.700" fontSize="20px">26 Gift Ideas for the Women in Your Life</Text>
                    <Link textDecoration="underline" fontSize="16px">Read More</Link>
                </Box>
                <Box w="33%">
                    <Image src="https://n.nordstrommedia.com/id/44ff78f2-0b0e-4da5-8a8a-a09088ff7ca5.jpeg?h=516&w=536" alt="img" />
                    <Text color="gray.700" fontSize="20px">Buyer's Picks: 11 Unique Gifts from Pop-In@Nordstrom</Text>
                    <Link textDecoration="underline" fontSize="16px">Read More</Link>
                </Box>
            </Box>
        </Box>
        <Box w="95%" m="40px auto">
            <Image mb="40px" src="https://n.nordstrommedia.com/id/5ec3d3de-9e8c-4317-bc28-3b42b503268e.png?h=17&w=1608" alt="img" />
            <Text color="gray.700" fontSize="2xl">SERVICES & EVENTS</Text>
            <Box w="95%" m="auto" display="flex" justifyContent="space-between" textAlign="left" mt="50px">
                <Box w="25%">
                    <Image src="https://n.nordstrommedia.com/id/55525828-6ec1-4b50-9792-c556171a7525.jpeg?h=365&w=402" alt="img" />
                    <Text color="gray.700" fontSize="20px">The Gift of Choice</Text>
                    <Text lineHeight="20px" w="80%" fontWeight="400" fontSize="14px">Get them what they really want with a Nordstrom Gift Card.</Text>
                    <Link textDecoration="underline" fontSize="16px">Gift Cards & eGift Cards</Link>
                </Box>
                <Box w="25%">
                    <Image src="https://n.nordstrommedia.com/id/1eded89e-7279-4606-8944-93e354595e87.jpeg?h=365&w=402" alt="img" />
                    <Text color="gray.700" fontSize="20px">Gift Wrapping</Text>
                    <Text lineHeight="20px" w="80%" fontWeight="400" fontSize="14px">We make it easy with festive options. Shop in store or online to see your choices.</Text>
                    <Link textDecoration="underline" fontSize="16px">Learn More</Link>
                </Box>
                <Box w="25%">
                    <Image src="https://n.nordstrommedia.com/id/3f887915-678c-4577-8593-4ac43d234133.jpeg?h=365&w=402" alt="img" />
                    <Text color="gray.700" fontSize="20px">Make Memories Together</Text>
                    <Text lineHeight="20px" w="80%" fontWeight="400" fontSize="14px">Festivities are in full swing with events like Santa Greetings, Holiday Breakfasts, Letters to Santa, virtual livestreams and more.</Text>
                    <Link textDecoration="underline" fontSize="16px">Explore Events</Link>
                </Box>
                <Box w="25%">
                    <Image src="	https://n.nordstrommedia.com/id/69aae2cc-f5dd-408b-b99b-a20a9bc7c8bc.jpeg?h=365&w=402" alt="img" />
                    <Text color="gray.700" fontSize="20px">Free Style Help—in Stores or Online</Text>
                    <Text lineHeight="20px" w="80%" fontWeight="400" fontSize="14px">Get festive fashion advice from our stylists.</Text>
                    <Link textDecoration="underline" fontSize="16px">Learn More</Link>
                    <Link ml="5%" textDecoration="underline" fontSize="16px">Book an Appointment</Link>
                </Box>
            </Box>
        </Box>
    </Box>
}

export default Homepage;