// import { Box, Image, Text, Link, Button } from "@chakra-ui/react";
import Megha from "../Meghamenu/Megha";
import "./Homepage.css";


// function Homepage(){

//     return <Box>
//         <Megha/>
//         <Box  w="95%" m="auto" display="flex" justifyContent="space-between" p="40px 0px 60px 0px">
//             <Box marginTop="4%" w="25%">
//                 <Image w="100%" src="https://n.nordstrommedia.com/id/c30eb052-a9da-4529-95ed-0d1568cc55ad.png?h=22&w=536" alt="colors" />
//             </Box>
//             <Box>
//                 <Box>
//                     <Text marginTop="16%" color="gray.700" fontSize='large' fontWeight="bold">Shop what you love—faster and easier.</Text>
//                     <Link  href="/signin" color="teal" textDecoration="none" fontweight="bold" fontSize='large'>Sign In or Create an Account</Link>
//                 </Box>
//             </Box>
//             <Box  w="25%">
//                 <Image marginTop="14%" w="100%" src="https://n.nordstrommedia.com/id/01471914-5c74-4e79-a258-af5f398b1a73.png?h=22&w=536" alt="colors" />
//             </Box>
//         </Box>
//         <Box w="95%" m="auto" bg="#f0f1f2" p="22px">
//             <Box bg="#fafafa" p="70px 0px">
//                 <Box w="60%" m="auto">
//                     <Text fontWeight="800" fontSize="38px" mb="4px">CLEARANCE</Text>
//                     <Text fontWeight="800" color="#f23224" fontSize="32px" mb="10px">EXTRA 25% OFF</Text>
//                     <Text fontWeight="400" fontSize="15px">Save up to 70% on selected items—exclusions apply. Ends Monday!</Text>
//                 </Box>
//                 <Box w="70%" m="auto" display="flex" justifyContent="space-between">
//                     <Link fontWeight="400" fontSize="15px" textDecoration="underline">New Markdowns</Link>
//                     <Link fontWeight="400" fontSize="15px" textDecoration="underline">Women's Sale</Link>
//                     <Link fontWeight="400" fontSize="15px" textDecoration="underline">Men's Sale</Link>
//                     <Link fontWeight="400" fontSize="15px" textDecoration="underline">Kids' Sale</Link>
//                     <Link fontWeight="400" fontSize="15px" textDecoration="underline">Home Sale</Link>
//                     <Link fontWeight="400" fontSize="15px" textDecoration="underline">Beauty & Fragrance Sale</Link>
//                     <Link fontWeight="400" fontSize="15px" textDecoration="underline">Exclusions & Restrictions</Link>
//                 </Box>
//             </Box>
//         </Box>
//         <Box w="95%" m="40px auto 80px auto" display="flex" bg="black">
//             <Box w="50%">
//                 <Image src="https://cdn.smartnordstrom.com/s3/csp/1666988189993/Nordstrom_Homepage_Display_Dyson.jpg" alt="img"/>
//             </Box>
//             <Box w="50%" color="white">
//                 <Box w="80%" m="auto" pt="25px">
//                     <Text color="white" fontSize="xl">Gift with Style</Text>
//                     <Text color="white" fontWeight="400" fontSize="14px">The special-edition Dyson Supersonic hair dryer is here!</Text>
//                     <Link textDecoration="underline" fontSize="md">Shop Now</Link>
//                 </Box>
//             </Box>
//         </Box>
//         <Box w="95%" display="flex" m="auto" alignItems="center">
//                 <Image position="relative" src="https://n.nordstrommedia.com/id/b08bf521-59ce-4e71-a28b-a84486ebc295.jpeg?h=700&w=1608" alt="img" />
//             <Box w="26%" position="absolute" right="8%" textAlign="left">
//                 <Text fontSize="27px">Scentscape Beauty Deal</Text>
//                 <Text fontWeight="400" fontSize="14px">Save 25% on fragrance faves from SKYLAR, AllSaints and Lake & Skye. Through November 13, while supply lasts.</Text>
//                 <Link textDecoration="underline" fontSize="15px">Beauty & Fragrance Sale</Link>
//             </Box>
//         </Box>
//         <Box position="relative" w="95%" m="40px auto">
//             <Image mb="40px" src="https://n.nordstrommedia.com/id/5ec3d3de-9e8c-4317-bc28-3b42b503268e.png?h=17&w=1608" alt="img" />
//             <Image src="https://n.nordstrommedia.com/id/706917ad-140f-4af0-94f3-cbe08a9f9c9d.png?h=300&w=1608" alt="clrful" />
//             <Box position="absolute" left="28%" bottom="0.5%" w="40%" m="auto" textAlign="center">
//                 <Text fontWeight="400" fontSize="20px">The best gifts for everyone you love, all in one place.</Text>
//                 <Box display="flex" justifyContent="space-between" mt="10px">
//                     <Button p="25px 15px" _hover={{border:"1px solid  white", bg:"gray.200"}} border="1px solid black" bg="none" rounded="0">Shop Gifts</Button>
//                     <Button p="25px 15px" _hover={{border:"1px solid  white", bg:"gray.200"}} border="1px solid black" bg="none" rounded="0">Explore Our Gift Guide</Button>
//                     <Button p="25px 15px" _hover={{border:"1px solid  white", bg:"gray.200"}} border="1px solid black" bg="none" rounded="0">Shop Holiday Dressing</Button>
//                 </Box>
//             </Box>
//         </Box>
//         <Box w="95%" m="auto">
//             <Image mb="40px" src="https://n.nordstrommedia.com/id/5ec3d3de-9e8c-4317-bc28-3b42b503268e.png?h=17&w=1608" alt="img" />
//             <Text fontSize="3xl">Trending Now</Text>
//             <Box display="flex" alignItems="center" m="20px auto">
//                 <Image position="relative" src="https://n.nordstrommedia.com/id/ca2fbe1a-8500-4018-bb61-40e88bb3887b.jpeg?h=700&w=1608" alt="img" />
//                 <Box w="26%" position="absolute" right="8%" textAlign="left">
//                     <Text fontSize="27px">Festive & Fabulous</Text>
//                     <Text fontWeight="400" fontSize="14px">Be the life of the party in super-glam kitten heels, platforms and more.</Text>
//                     <Link mr="15px" textDecoration="underline" fontSize="16.5px">All Heels</Link>
//                     <Link mr="15px" textDecoration="underline" fontSize="16.5px"> Low Heels (1"-2")</Link>
//                     <Link mr="15px" textDecoration="underline" fontSize="16.5px"> Medium Heels (2"-3")</Link>
//                     <Link mr="15px" textDecoration="underline" fontSize="16.5px"> High Heels (3"-4")</Link>
//                     <Link mr="15px" textDecoration="underline" fontSize="16.5px"> Ultra-High Heels (4"+)</Link>
//                 </Box>
//             </Box>
//         </Box>
//         <Box w="95%" m="40px auto">
//             <Image mb="40px" src="https://n.nordstrommedia.com/id/5ec3d3de-9e8c-4317-bc28-3b42b503268e.png?h=17&w=1608" alt="img" />
//             <Text color="gray.700" fontSize="2xl">THE THREAD</Text>
//             <Text fontWeight="400" fontSize="15px">Your go-to destination for all things fashion, beauty and lifestyle at Nordstrom, from how-tos and style inspiration to exclusive interviews and more.</Text>
//             <Link textDecoration="underline" fontSize="15px">Get Inspired</Link>
//             <Box display="flex" justifyContent="space-between" textAlign="left" mt="50px">
//                 <Box w="33%">
//                     <Image src="https://n.nordstrommedia.com/id/7a88667d-2b47-4e18-9a09-64d6e45cbeff.jpeg?h=516&w=536" alt="img" />
//                     <Text color="gray.700" fontSize="20px">The 5 Outerwear Styles to Shop for This Season, According to a Fashion Director</Text>
//                     <Link textDecoration="underline" fontSize="16px">Read More</Link>
//                 </Box>
//                 <Box w="33%">
//                     <Image src="https://n.nordstrommedia.com/id/8133ea12-7377-4e1c-a8d7-f6e21b4492ad.jpeg?h=516&w=536" alt="img" />
//                     <Text color="gray.700" fontSize="20px">26 Gift Ideas for the Women in Your Life</Text>
//                     <Link textDecoration="underline" fontSize="16px">Read More</Link>
//                 </Box>
//                 <Box w="33%">
//                     <Image src="https://n.nordstrommedia.com/id/44ff78f2-0b0e-4da5-8a8a-a09088ff7ca5.jpeg?h=516&w=536" alt="img" />
//                     <Text color="gray.700" fontSize="20px">Buyer's Picks: 11 Unique Gifts from Pop-In@Nordstrom</Text>
//                     <Link textDecoration="underline" fontSize="16px">Read More</Link>
//                 </Box>
//             </Box>
//         </Box>
//         <Box w="95%" m="40px auto">
//             <Image mb="40px" src="https://n.nordstrommedia.com/id/5ec3d3de-9e8c-4317-bc28-3b42b503268e.png?h=17&w=1608" alt="img" />
//             <Text color="gray.700" fontSize="2xl">SERVICES & EVENTS</Text>
//             <Box w="95%" m="auto" display="flex" justifyContent="space-between" textAlign="left" mt="50px">
//                 <Box w="25%">
//                     <Image src="https://n.nordstrommedia.com/id/55525828-6ec1-4b50-9792-c556171a7525.jpeg?h=365&w=402" alt="img" />
//                     <Text color="gray.700" fontSize="20px">The Gift of Choice</Text>
//                     <Text lineHeight="20px" w="80%" fontWeight="400" fontSize="14px">Get them what they really want with a Nordstrom Gift Card.</Text>
//                     <Link textDecoration="underline" fontSize="16px">Gift Cards & eGift Cards</Link>
//                 </Box>
//                 <Box w="25%">
//                     <Image src="https://n.nordstrommedia.com/id/1eded89e-7279-4606-8944-93e354595e87.jpeg?h=365&w=402" alt="img" />
//                     <Text color="gray.700" fontSize="20px">Gift Wrapping</Text>
//                     <Text lineHeight="20px" w="80%" fontWeight="400" fontSize="14px">We make it easy with festive options. Shop in store or online to see your choices.</Text>
//                     <Link textDecoration="underline" fontSize="16px">Learn More</Link>
//                 </Box>
//                 <Box w="25%">
//                     <Image src="https://n.nordstrommedia.com/id/3f887915-678c-4577-8593-4ac43d234133.jpeg?h=365&w=402" alt="img" />
//                     <Text color="gray.700" fontSize="20px">Make Memories Together</Text>
//                     <Text lineHeight="20px" w="80%" fontWeight="400" fontSize="14px">Festivities are in full swing with events like Santa Greetings, Holiday Breakfasts, Letters to Santa, virtual livestreams and more.</Text>
//                     <Link textDecoration="underline" fontSize="16px">Explore Events</Link>
//                 </Box>
//                 <Box w="25%">
//                     <Image src="	https://n.nordstrommedia.com/id/69aae2cc-f5dd-408b-b99b-a20a9bc7c8bc.jpeg?h=365&w=402" alt="img" />
//                     <Text color="gray.700" fontSize="20px">Free Style Help—in Stores or Online</Text>
//                     <Text lineHeight="20px" w="80%" fontWeight="400" fontSize="14px">Get festive fashion advice from our stylists.</Text>
//                     <Link textDecoration="underline" fontSize="16px">Learn More</Link>
//                     <Link ml="5%" textDecoration="underline" fontSize="16px">Book an Appointment</Link>
//                 </Box>
//             </Box>
//         </Box>
//         <Box w="95%" display="flex" m="auto" alignItems="center" color="white">
//                 <Image position="relative" src="https://n.nordstrommedia.com/id/50731a37-8fb1-4ae1-bd40-4597e2266297.jpeg?h=200&w=1608" alt="img" />
//             <Box w="50%" position="absolute" right="8%" textAlign="left">
//                 <Text color="white" fontSize="22px">New Episodes Every Other Week</Text>
//                 <Text color="white" fontWeight="400" fontSize="15px">Go behind the scenes of Nordstrom with Pete Nordstrom and special guests. </Text>
//                 <Link textDecoration="underline" fontSize="16px">Learn More</Link>
//             </Box>
//         </Box>
//         <Box w="95%" m="40px auto">
//             <Image mb="40px" src="https://n.nordstrommedia.com/id/5ec3d3de-9e8c-4317-bc28-3b42b503268e.png?h=17&w=1608" alt="img" />
//             <Text color="gray.700" fontSize="2xl">SHOP BY CATEGORY</Text>
//             <Box display="flex" justifyContent="space-between" mt="50px" textAlign="center">
//                 <Box w="16%">
//                     <Image src="https://n.nordstrommedia.com/id/8d5e2126-1fca-42f8-b71b-ce9d1a3cc0ab.jpeg?h=365&w=268" alt="img" />
//                     <Text color="gray.700" fontSize="18px">Women</Text>
//                 </Box>
//                 <Box w="16%">
//                     <Image src="https://n.nordstrommedia.com/id/fb45282f-b5e1-423b-9894-4a6071e7d3a1.jpeg?h=365&w=268" alt="img" />
//                     <Text color="gray.700" fontSize="18px">Men</Text>
//                 </Box>
//                 <Box w="16%">
//                     <Image src="https://n.nordstrommedia.com/id/278ded2f-d53f-4c14-a88c-8bc5ba1efe56.jpeg?h=365&w=268" alt="img" />
//                     <Text color="gray.700" fontSize="18px">Kids</Text>
//                 </Box>
//                 <Box w="16%">
//                     <Image src="https://n.nordstrommedia.com/id/1ceda26d-5052-4510-811b-82d30dbd5a23.jpeg?h=365&w=268" alt="img" />
//                     <Text color="gray.700" fontSize="18px">Home</Text>
//                 </Box>
//                 <Box w="16%">
//                     <Image src="https://n.nordstrommedia.com/id/a29eca50-eeb5-4d37-a2bf-2932c60746a3.jpeg?h=365&w=268" alt="img" />
//                     <Text color="gray.700" fontSize="18px">Beauty & Fragrance</Text>
//                 </Box>
//                 <Box w="16%">
//                     <Image src="https://n.nordstrommedia.com/id/48027591-850a-4544-814e-b458e00d6a51.jpeg?h=365&w=268" alt="img" />
//                     <Text color="gray.700" fontSize="18px">Designer</Text>
//                 </Box>
//             </Box>
//         </Box>
//         <Box w="95%" m="40px auto">
//             <Image mb="40px" src="https://n.nordstrommedia.com/id/5ec3d3de-9e8c-4317-bc28-3b42b503268e.png?h=17&w=1608" alt="img" />
//             <Text color="gray.700" fontSize="2xl">SERVICES & EVENTS</Text>
//             <Box w="95%" m="auto" display="flex" justifyContent="space-between" textAlign="left" mt="50px">
//                 <Box className="container">
//                     <Image src="https://cdn.dashhudson.com/media/640/1634145375.908124478742.jpeg" alt="Avatar" className="image" w="100%"/>
//                     <Box className="middle">
//                         <Box className="text">Shop Now</Box>
//                     </Box>
//                 </Box>
//                 <Box className="container">
//                     <Image src="https://cdn.dashhudson.com/media/640/1633576910.42796190538.jpeg" alt="Avatar" className="image" w="100%"/>
//                     <Box className="middle">
//                         <Box className="text">Shop Now</Box>
//                     </Box>
//                 </Box>
//                 <Box className="container">
//                     <Image src="https://cdn.dashhudson.com/media/640/1638985643.81467653793.jpeg" alt="Avatar" className="image" w="100%"/>
//                     <Box className="middle">
//                         <Box className="text">Shop Now</Box>
//                     </Box>
//                 </Box>
//                 <Box className="container">
//                     <Image src="https://cdn.dashhudson.com/media/640/1639450121.23927782505.jpeg" alt="Avatar" className="image" w="100%"/>
//                     <Box className="middle">
//                         <Box className="text">Shop Now</Box>
//                     </Box>
//                 </Box>
//             </Box>
//         </Box>
//     </Box>
// }

// export default Homepage;



import { Box, Image, Text, Link, Button, Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import "./Homepage.css";


function Homepage(){

    const Women= [
        {
            name:"Open Edit",
            img:"https://n.nordstrommedia.com/id/sr3/4f4a6450-fc23-4e3d-af8f-79b10f9b82b0.jpeg?q=45&dpr=2&h=365.31&w=230",
            price:"INR 1,741.44 - INR 3,869.86",
            desc:"Limited-Time Sale",
            rating:"4",
            total:"28"
        },
        {
            name:"Free People",
            img:"https://n.nordstrommedia.com/id/sr3/b3b4d851-2bad-42e0-bd1c-c6946eaa242e.jpeg?q=45&dpr=2&h=365.31&w=230",
            price:"INR 3,404.62 - INR 7,567.73",
            desc:"Limited-Time Sale",
            rating:"4.1",
            total:"4"
        },
        {
            name:"1.State",
            img:"https://n.nordstrommedia.com/id/sr3/7ab68c55-33bd-4393-a29d-c264a53af209.jpeg?q=45&dpr=2&h=365.31&w=230",
            price:"INR 2,572.03 (Extra 25% Off)",
            desc:"Holiday Deal",
            rating:"4.2",
            total:"107"
        },
        {
            name:"Open Edit",
            img:"https://n.nordstrommedia.com/id/sr3/c5920c74-80c5-437f-a291-f6afd4f6d677.jpeg?q=45&dpr=2&h=365.31&w=230",
            price:"INR 2,224.74 (Extra 25% Off)",
            desc:"Limited-Time Sale",
            rating:"3.8",
            total:"3"
        },
        {
            name:"NordStorm",
            img:"https://n.nordstrommedia.com/id/sr3/1772a05e-aace-496d-bdfa-30bc13b72b34.jpeg?q=45&dpr=2&h=365.31&w=230",
            price:"INR 4513.98 (Extra 25% Off)",
            desc:"Holiday Deal",
            rating:"4.2",
            total:"11"
        }
    ]
    const Men=[
        {
            name:"UCGR",
            img:"https://n.nordstrommedia.com/id/sr3/8222eb9e-2d38-46ff-b6c7-1b8fa53b1eb5.jpeg?q=45&dpr=2&h=365.31&w=230",
            price:"INR 3,869.86 (Extra 25% Off)",
            desc:"Limited-Time Sale",
            rating:"3.9",
            total:"6"
        },
        {
            name:"UCGR",
            img:"https://n.nordstrommedia.com/id/sr3/2b027729-3820-4cc2-9e7f-db770e0988ba.jpeg?q=45&dpr=2&h=365.31&w=230",
            price:"INR 6,191.78 (Extra 25% Off)",
            desc:"Limited-Time Sale",
            rating:"4.1",
            total:"4"
        },
        {
            name:"Robert Barakett",
            img:"https://n.nordstrommedia.com/id/sr3/c930ca14-a968-48eb-af5f-57a4a9bde0eb.jpeg?q=45&dpr=2&h=365.31&w=230",
            price:"INR 2,241.08 - INR 5,976.78",
            desc:"Limited-Time Sale",
            rating:"4.3",
            total:"558"
        },
        {
            name:"Nike",
            img:"https://n.nordstrommedia.com/id/sr3/5b7aa517-4b15-479f-bc6b-607fc9ab1723.jpeg?q=45&dpr=2&h=365.31&w=230",
            price:"INR 4,578.47 - INR 8,599.69",
            desc:"Limited-Time Sale",
            rating:"3.8",
            total:"3"
        },
        {
            name:"Zella",
            img:"https://n.nordstrommedia.com/id/sr3/99341903-33c0-4a11-80bd-ba6117f105a0.jpeg?q=45&dpr=2&h=365.31&w=230",
            price:"INR 644.12 - INR 1,885.91",
            desc:"Limited-Time Sale",
            rating:"3.5",
            total:"27"
        }
    ]
    const Designer=[
        {
            name:"Johanna Ortiz",
            img:"https://n.nordstrommedia.com/id/sr3/a1289cba-2975-442a-9bde-ccc5067824a7.jpeg?q=45&dpr=2&h=365.31&w=230",
            price:"INR 3,869.86 (Extra 25% Off)",
            desc:"Limited-Time Sale",
            rating:"3.9",
            total:"6"
        },
        {
            name:"PALMES",
            img:"https://n.nordstrommedia.com/id/sr3/fefba81d-f6d7-4a20-8c57-7ad71f772bae.jpeg?q=45&dpr=2&h=365.31&w=230",
            price:"INR 1,932.35 (Extra 25% Off)",
            desc:"Limited-Time Sale",
            rating:"4.1",
            total:"4"
        },
        {
            name:"Johanna Ortiz",
            img:"https://n.nordstrommedia.com/id/sr3/2cc5a5a1-8c5f-4fbd-a6f2-12dfc9c9f7ea.jpeg?q=45&dpr=2&h=365.31&w=230",
            price:"INR 38,698.60 (40% Off)",
            desc:"Limited-Time Sale",
            rating:"4.3",
            total:"558"
        },
        {
            name:"KENZO",
            img:"https://n.nordstrommedia.com/id/sr3/e394e1ea-eb0a-40dd-a206-62f57924c979.jpeg?q=45&dpr=2&h=365.31&w=230",
            price:"INR 5,030.82 (Extra 25% Off)",
            desc:"Limited-Time Sale",
            rating:"3.8",
            total:"3"
        },
        {
            name:"Johanna Ortiz",
            img:"https://n.nordstrommedia.com/id/sr3/79391714-4be7-4ee9-b1e2-d44d2ddbfc25.jpeg?q=45&dpr=2&h=365.31&w=230",
            price:"INR 64,497.67 (40% Off)",
            desc:"Limited-Time Sale",
            rating:"3.5",
            total:"27"
        }
    ]
    const Kids=[
        {
            name:"UCGR",
            img:"https://n.nordstrommedia.com/id/sr3/85d87a52-6b08-4658-b46e-0142ab6bf02c.jpeg?q=45&dpr=2&h=365.31&w=230",
            price:"INR 5,803.93 (Extra 25% Off)",
            desc:"Limited-Time Sale",
            rating:"3.9",
            total:"6"
        },
        {
            name:"UCGR",
            img:"https://n.nordstrommedia.com/id/sr3/85d87a52-6b08-4658-b46e-0142ab6bf02c.jpeg?q=45&dpr=2&h=365.31&w=230",
            price:"INR 5,158.95 (Extra 25% Off)",
            desc:"Limited-Time Sale",
            rating:"4.1",
            total:"4"
        },
        {
            name:"Robert Barakett",
            img:"https://n.nordstrommedia.com/id/sr3/499808f7-3b90-496d-b974-8aaacb391fae.jpeg?q=45&dpr=2&h=365.31&w=230",
            price:"INR 2,579.05 - INR 5,159.81",
            desc:"Limited-Time Sale",
            rating:"4.3",
            total:"558"
        },
        {
            name:"Tucker + Tate",
            img:"https://n.nordstrommedia.com/id/sr3/42ecbe0b-64d5-4364-a276-ae11e415ef65.jpeg?q=45&dpr=2&h=365.31&w=230",
            price:"INR 4,89.32 - INR 1,633.94",
            desc:"Limited-Time Sale",
            rating:"3.8",
            total:"3"
        },
        {
            name:"Nordstrom",
            img:"https://n.nordstrommedia.com/id/sr3/385b29ee-a4f6-402e-8ee7-bf578fc833e2.jpeg?q=45&dpr=2&h=365.31&w=230",
            price:"INR 1,885.92 (Extra 25% Off)",
            desc:"Limited-Time Sale",
            rating:"3.5",
            total:"27"
        }
    ]
    const Beauty=[
        {
            name:"Lancome",
            img:"https://n.nordstrommedia.com/id/sr3/a6a6549e-1610-48ea-8666-bcae9f63b51c.jpeg?q=45&dpr=2&h=365.31&w=230",
            price:"INR 6,707.76 - INR 19,779.29",
            desc:"Limited-Time Sale",
            rating:"3.9",
            total:"6"
        },
        {
            name:"Kiehl's since 1851",
            img:"https://n.nordstrommedia.com/id/sr3/48e7d4da-1d79-4ef1-933c-9c6859b0ea82.jpeg?q=45&dpr=2&h=365.31&w=230",
            price:"INR 2,407.91 (30% Off)",
            desc:"Limited-Time Sale",
            rating:"4.1",
            total:"4"
        },
        {
            name:"Voluspa",
            img:"https://n.nordstrommedia.com/id/sr3/59fa2e5f-aa59-42ba-9183-f2b908fe42fa.jpeg?q=45&dpr=2&h=365.31&w=230",
            price:"INR 1,375.95 - INR 2,201.52",
            desc:"Limited-Time Sale",
            rating:"4.3",
            total:"558"
        },
        {
            name:"Lake & Skyke",
            img:"https://n.nordstrommedia.com/id/sr3/e35e441b-844e-44cc-afdc-bb81e0e70bea.jpeg?q=45&dpr=2&h=365.31&w=230",
            price:"INR 2,321.92 - INR 6,320.77",
            desc:"Limited-Time Sale",
            rating:"3.8",
            total:"3"
        },
        {
            name:"Kiehl's since 1851",
            img:"https://n.nordstrommedia.com/id/sr3/1918a971-8e85-44a5-a016-5ce375451bdf.jpeg?q=45&dpr=2&h=365.31&w=230",
            price:"INR 2,889.50 (30% Off)",
            desc:"Limited-Time Sale",
            rating:"3.5",
            total:"27"
        }
    ]
    const Home=[
        {
            name:"NordStorm",
            img:"https://n.nordstrommedia.com/id/sr3/8d2ab5ab-9276-4bfc-91ea-41f5966298f5.jpeg?q=45&dpr=2&h=365.31&w=230",
            price:"INR 1,741.44 - INR 3,869.86",
            desc:"Limited-Time Sale",
            rating:"4",
            total:"28"
        },
        {
            name:"NordStorm",
            img:"https://n.nordstrommedia.com/id/sr3/5ec2d653-d11c-49dd-b424-db38e49edfc9.jpeg?q=45&dpr=2&h=365.31&w=230",
            price:"INR 3,404.62 - INR 7,567.73",
            desc:"Limited-Time Sale",
            rating:"4.1",
            total:"4"
        },
        {
            name:"Our Place",
            img:"https://n.nordstrommedia.com/id/sr3/e5bc2555-7051-416f-b803-13c7bb6e6502.jpeg?q=45&dpr=2&h=365.31&w=230",
            price:"INR 2,572.03 (Extra 25% Off)",
            desc:"Holiday Deal",
            rating:"4.2",
            total:"107"
        },
        {
            name:"NordStorm",
            img:"https://n.nordstrommedia.com/id/sr3/2e5ca171-947d-45c5-8521-a6e81d74cc98.jpeg?q=45&dpr=2&h=365.31&w=230",
            price:"INR 2,224.74 (Extra 25% Off)",
            desc:"Limited-Time Sale",
            rating:"3.8",
            total:"3"
        },
        {
            name:"NordStorm",
            img:"https://n.nordstrommedia.com/id/sr3/93bd70a4-e878-4bbe-b58b-623e9d6aa7db.jpeg?q=45&dpr=2&h=365.31&w=230",
            price:"INR 4513.98 (Extra 25% Off)",
            desc:"Holiday Deal",
            rating:"4.2",
            total:"11"
        }
    ]

    const Forher= [
        {
            name:"Open Edit",
            img:"https://n.nordstrommedia.com/id/sr3/77026c83-df2e-42a7-a93f-1f5e5ca61ef3.jpeg?q=45&dpr=2&h=365.31&w=230",
            price:"INR 1,741.44 - INR 3,869.86",
            desc:"Limited-Time Sale",
            rating:"4",
            total:"28"
        },
        {
            name:"Free People",
            img:"https://n.nordstrommedia.com/id/sr3/d9ffa3aa-df57-4bc8-b41a-b841f09fe595.jpeg?q=45&dpr=2&h=365.31&w=230",
            price:"INR 3,404.62 - INR 7,567.73",
            desc:"Limited-Time Sale",
            rating:"4.1",
            total:"4"
        },
        {
            name:"1.State",
            img:"https://n.nordstrommedia.com/id/sr3/9f7f66fd-c5bb-4000-8888-32014d1d9f32.jpeg?q=45&dpr=2&h=365.31&w=230",
            price:"INR 2,572.03 (Extra 25% Off)",
            desc:"Holiday Deal",
            rating:"4.2",
            total:"107"
        },
        {
            name:"Open Edit",
            img:"https://n.nordstrommedia.com/id/sr3/27ec52c3-bfbb-43b5-a4e6-16447cbcfa6c.jpeg?q=45&dpr=2&h=365.31&w=230",
            price:"INR 2,224.74 (Extra 25% Off)",
            desc:"Limited-Time Sale",
            rating:"3.8",
            total:"3"
        },
        {
            name:"NordStorm",
            img:"https://n.nordstrommedia.com/id/sr3/5fd7f595-e5bc-49f0-972d-e0cbb2d008a3.jpeg?q=45&dpr=2&h=365.31&w=230",
            price:"INR 4513.98 (Extra 25% Off)",
            desc:"Holiday Deal",
            rating:"4.2",
            total:"11"
        }
    ]
    const Forhim=[
        {
            name:"UCGR",
            img:"https://n.nordstrommedia.com/id/sr3/7aa9e8d2-2296-41ab-b5e7-cf2f4e806ebf.jpeg?q=45&dpr=2&h=365.31&w=230",
            price:"INR 3,869.86 (Extra 25% Off)",
            desc:"Limited-Time Sale",
            rating:"3.9",
            total:"6"
        },
        {
            name:"UCGR",
            img:"https://n.nordstrommedia.com/id/sr3/4b0e00a9-9fc5-4ef9-8187-9d78e1bbd315.jpeg?q=45&dpr=2&h=365.31&w=230",
            price:"INR 6,191.78 (Extra 25% Off)",
            desc:"Limited-Time Sale",
            rating:"4.1",
            total:"4"
        },
        {
            name:"Robert Barakett",
            img:"https://n.nordstrommedia.com/id/sr3/01a98d64-1631-4a6e-bf41-e60da51f18c8.jpeg?q=45&dpr=2&h=365.31&w=230",
            price:"INR 2,241.08 - INR 5,976.78",
            desc:"Limited-Time Sale",
            rating:"4.3",
            total:"558"
        },
        {
            name:"Nike",
            img:"https://n.nordstrommedia.com/id/sr3/f9c87feb-d902-45ee-9b5c-39631fd74132.jpeg?q=45&dpr=2&h=365.31&w=230",
            price:"INR 4,578.47 - INR 8,599.69",
            desc:"Limited-Time Sale",
            rating:"3.8",
            total:"3"
        },
        {
            name:"Zella",
            img:"https://n.nordstrommedia.com/id/sr3/504f552b-d922-4382-bb9f-2541f0d52986.jpeg?q=45&dpr=2&h=365.31&w=230",
            price:"INR 644.12 - INR 1,885.91",
            desc:"Limited-Time Sale",
            rating:"3.5",
            total:"27"
        }
    ]
    const Forkids=[
        {
            name:"Johanna Ortiz",
            img:"https://n.nordstrommedia.com/id/sr3/55e86865-18ab-482f-92e8-262f4dced4ea.jpeg?q=45&dpr=2&h=365.31&w=230",
            price:"INR 3,869.86 (Extra 25% Off)",
            desc:"Limited-Time Sale",
            rating:"3.9",
            total:"6"
        },
        {
            name:"PALMES",
            img:"https://n.nordstrommedia.com/id/sr3/f5bcbbd5-aba5-422e-8d84-8f9d6a9f5062.jpeg?q=45&dpr=2&h=365.31&w=230",
            price:"INR 1,932.35 (Extra 25% Off)",
            desc:"Limited-Time Sale",
            rating:"4.1",
            total:"4"
        },
        {
            name:"Johanna Ortiz",
            img:"https://n.nordstrommedia.com/id/sr3/c2321c95-4b43-4c8b-9abc-8ee79957a138.jpeg?q=45&dpr=2&h=365.31&w=230",
            price:"INR 38,698.60 (40% Off)",
            desc:"Limited-Time Sale",
            rating:"4.3",
            total:"558"
        },
        {
            name:"KENZO",
            img:"https://n.nordstrommedia.com/id/sr3/60bc9ce2-994a-4dca-8c3b-846802d6104d.jpeg?q=45&dpr=2&h=365.31&w=230",
            price:"INR 5,030.82 (Extra 25% Off)",
            desc:"Limited-Time Sale",
            rating:"3.8",
            total:"3"
        },
        {
            name:"Johanna Ortiz",
            img:"https://n.nordstrommedia.com/id/sr3/845b1910-9303-4a82-9f12-fde1ea346a45.jpeg?q=45&dpr=2&h=365.31&w=230",
            price:"INR 64,497.67 (40% Off)",
            desc:"Limited-Time Sale",
            rating:"3.5",
            total:"27"
        }
    ]
    const Forteen=[
        {
            name:"UCGR",
            img:"https://n.nordstrommedia.com/id/sr3/a8055a3f-2507-4a04-9fc9-07ec2c21fd12.jpeg?q=45&dpr=2&h=365.31&w=230",
            price:"INR 5,803.93 (Extra 25% Off)",
            desc:"Limited-Time Sale",
            rating:"3.9",
            total:"6"
        },
        {
            name:"UCGR",
            img:"https://n.nordstrommedia.com/id/sr3/4b3cc4d4-d7e8-49fd-ab37-ddfa1398d2a1.jpeg?q=45&dpr=2&h=365.31&w=230",
            price:"INR 5,158.95 (Extra 25% Off)",
            desc:"Limited-Time Sale",
            rating:"4.1",
            total:"4"
        },
        {
            name:"Robert Barakett",
            img:"https://n.nordstrommedia.com/id/sr3/effd3857-de3b-40f3-b09f-2488a34c56cb.jpeg?q=45&dpr=2&h=365.31&w=230",
            price:"INR 2,579.05 - INR 5,159.81",
            desc:"Limited-Time Sale",
            rating:"4.3",
            total:"558"
        },
        {
            name:"Tucker + Tate",
            img:"https://n.nordstrommedia.com/id/sr3/78d26234-366d-42fe-b784-2909f28d7882.jpeg?q=45&dpr=2&h=365.31&w=230",
            price:"INR 4,89.32 - INR 1,633.94",
            desc:"Limited-Time Sale",
            rating:"3.8",
            total:"3"
        },
        {
            name:"Nordstrom",
            img:"https://n.nordstrommedia.com/id/sr3/95440173-d2e5-4f6e-97d7-ed9cc23423f1.jpeg?q=45&dpr=2&h=365.31&w=230",
            price:"INR 1,885.92 (Extra 25% Off)",
            desc:"Limited-Time Sale",
            rating:"3.5",
            total:"27"
        }
    ]
    const Foreveryone=[
        {
            name:"Lancome",
            img:"https://n.nordstrommedia.com/id/sr3/af91b8c3-81f6-4e40-9386-8afbb6e94ef3.jpeg?q=45&dpr=2&h=365.31&w=230",
            price:"INR 6,707.76 - INR 19,779.29",
            desc:"Limited-Time Sale",
            rating:"3.9",
            total:"6"
        },
        {
            name:"Kiehl's since 1851",
            img:"https://n.nordstrommedia.com/id/sr3/2c7bf1ba-589d-4187-90fb-b99ffcec946c.jpeg?q=45&dpr=2&h=365.31&w=230",
            price:"INR 2,407.91 (30% Off)",
            desc:"Limited-Time Sale",
            rating:"4.1",
            total:"4"
        },
        {
            name:"Voluspa",
            img:"https://n.nordstrommedia.com/id/sr3/ed308a56-a2f6-406b-a196-5b9a64238a90.jpeg?q=45&dpr=2&h=365.31&w=230",
            price:"INR 1,375.95 - INR 2,201.52",
            desc:"Limited-Time Sale",
            rating:"4.3",
            total:"558"
        },
        {
            name:"Lake & Skyke",
            img:"https://n.nordstrommedia.com/id/sr3/c7124e24-a322-42d1-8679-fe64657aff9b.jpeg?q=45&dpr=2&h=365.31&w=230",
            price:"INR 2,321.92 - INR 6,320.77",
            desc:"Limited-Time Sale",
            rating:"3.8",
            total:"3"
        },
        {
            name:"Kiehl's since 1851",
            img:"https://n.nordstrommedia.com/id/sr3/5e92e0af-c1f7-4330-8b04-a196710751c7.jpeg?q=45&dpr=2&h=365.31&w=230",
            price:"INR 2,889.50 (30% Off)",
            desc:"Limited-Time Sale",
            rating:"3.5",
            total:"27"
        }
    ]

    return <Box>
        <Megha/>
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
        <Box w="95%" m="auto">
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Text  marginLeft="43%" color="gray.700" fontSize="x-large" >Deals You'll Love</Text>
                <Button p="20px 15px" _hover={{border:"1px solid  white", bg:"gray.200"}} border="1px solid black" bg="none" rounded="0">View All Women</Button>
            </Box>
            <Tabs>
                <TabList padding="5px" fontSize="large"   display="flex" justifyContent="space-around">
                    <Tab fontWeight="bold" color="teal" border="none">Women</Tab>
                    <Tab fontWeight="bold" color="teal" border="none">Men</Tab>
                    <Tab fontWeight="bold" color="teal" border="none">Designer</Tab>
                    <Tab fontWeight="bold" color="teal" border="none">Kids</Tab>
                    <Tab fontWeight="bold" color="teal" border="none">Beauty</Tab>
                    <Tab fontWeight="bold" color="teal" border="none">Home</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Box display="flex">
                            {Women && Women.map((el)=>{
                                return  <Box>
                                        <Image src={el.img} alt="img" />
                                        <Text color="gray.600" fontWeight="400" fontSize="lg">{el.name}</Text>
                                        <Text fontWeight="600" color="gray.700" fontSize="sm">{el.desc}</Text>
                                        <Text fontWeight="400" fontSize="sm">{el.price}</Text>
                                        <Text fontWeight="400" fontSize="sm">{el.rating} ({el.total})</Text>
                                    </Box>
                            })}
                        </Box>
                    </TabPanel>
                    <TabPanel>
                        <Box display="flex">
                            {Men && Men.map((el)=>{
                                return  <Box>
                                        <Image src={el.img} alt="img" />
                                        <Text color="gray.600" fontWeight="400" fontSize="lg">{el.name}</Text>
                                        <Text fontWeight="600" color="gray.700" fontSize="sm">{el.desc}</Text>
                                        <Text fontWeight="400" fontSize="sm">{el.price}</Text>
                                        <Text fontWeight="400" fontSize="sm">{el.rating} ({el.total})</Text>
                                    </Box>
                            })}
                        </Box>
                    </TabPanel>
                    <TabPanel>
                        <Box display="flex">
                            {Designer && Designer.map((el)=>{
                                return  <Box>
                                        <Image src={el.img} alt="img" />
                                        <Text color="gray.600" fontWeight="400" fontSize="lg">{el.name}</Text>
                                        <Text fontWeight="600" color="gray.700" fontSize="sm">{el.desc}</Text>
                                        <Text fontWeight="400" fontSize="sm">{el.price}</Text>
                                        <Text fontWeight="400" fontSize="sm">{el.rating} ({el.total})</Text>
                                    </Box>
                            })}
                        </Box>
                    </TabPanel>
                    <TabPanel>
                        <Box display="flex">
                            {Kids && Kids.map((el)=>{
                                return  <Box>
                                        <Image src={el.img} alt="img" />
                                        <Text color="gray.600" fontWeight="400" fontSize="lg">{el.name}</Text>
                                        <Text fontWeight="600" color="gray.700" fontSize="sm">{el.desc}</Text>
                                        <Text fontWeight="400" fontSize="sm">{el.price}</Text>
                                        <Text fontWeight="400" fontSize="sm">{el.rating} ({el.total})</Text>
                                    </Box>
                            })}
                        </Box>
                    </TabPanel>
                    <TabPanel>
                        <Box display="flex">
                            {Beauty && Beauty.map((el)=>{
                                return  <Box>
                                        <Image src={el.img} alt="img" />
                                        <Text color="gray.600" fontWeight="400" fontSize="lg">{el.name}</Text>
                                        <Text fontWeight="600" color="gray.700" fontSize="sm">{el.desc}</Text>
                                        <Text fontWeight="400" fontSize="sm">{el.price}</Text>
                                        <Text fontWeight="400" fontSize="sm">{el.rating} ({el.total})</Text>
                                    </Box>
                            })}
                        </Box>
                    </TabPanel>
                    <TabPanel>
                        <Box display="flex">
                            {Home && Home.map((el)=>{
                                return  <Box>
                                        <Image src={el.img} alt="img" />
                                        <Text color="gray.600" fontWeight="400" fontSize="lg">{el.name}</Text>
                                        <Text fontWeight="600" color="gray.700" fontSize="sm">{el.desc}</Text>
                                        <Text fontWeight="400" fontSize="sm">{el.price}</Text>
                                        <Text fontWeight="400" fontSize="sm">{el.rating} ({el.total})</Text>
                                    </Box>
                            })}
                        </Box>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
        <Box w="95%" display="flex" m="auto" alignItems="center">
                <Image position="relative" src="https://n.nordstrommedia.com/id/b08bf521-59ce-4e71-a28b-a84486ebc295.jpeg?h=700&w=1608" alt="img" />
            <Box w="26%" position="absolute" right="15%" textAlign="left">
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
        <Box w="95%" position="relative" display="flex" m="auto" alignItems="center" mb="40px" color="white">
                <Image src="https://n.nordstrommedia.com/id/09cacbfa-f0b6-4f7a-b141-6fa66e0aedba.jpeg?h=700&w=1608" alt="img" />
            <Box w="25%" color="black" position="absolute" bottom="2%" right="4%">
                <Text color="black" fontWeight="400" fontSize="14px">Merci Milo founder Caroline Rodrigues is embracing all the coziness of the holidays—see how she unwinds and the gifts she suggests for every homebody on your list.</Text>
                <Link textDecoration="underline" mr="10px" fontSize="16px">Shop Cozy Gifts</Link>
                <Link textDecoration="underline" fontSize="16px">Explore Caroline's Picks</Link>
            </Box>
        </Box>
        <Box w="95%" m="auto" mb="60px" mt="70px">
            <Image mb="40px" src="https://n.nordstrommedia.com/id/5ec3d3de-9e8c-4317-bc28-3b42b503268e.png?h=17&w=1608" alt="img" />
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Text marginLeft="43%" color="gray.700" fontSize="x-large">Gifts by Recipient</Text>
                <Button p="20px 15px" _hover={{border:"1px solid  white", bg:"gray.200"}} border="1px solid black" bg="none" rounded="0">View All Gifts For Her</Button>
            </Box>
            <Tabs>
                <TabList padding="5px" fontSize="large"  display="flex" justifyContent="space-around">
                    <Tab fontWeight="bold" color="teal" border="none">Gifts For Her</Tab>
                    <Tab fontWeight="bold" color="teal" border="none">Gifts For Him</Tab>
                    <Tab fontWeight="bold" color="teal" border="none">Gifts For Kids</Tab>
                    <Tab fontWeight="bold" color="teal" border="none">Gifts For Teens</Tab>
                    <Tab fontWeight="bold" color="teal" border="none">Gifts For Everyone</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Box display="flex">
                            {Forher && Forher.map((el)=>{
                                return  <Box>
                                        <Image src={el.img} alt="img" />
                                        <Text color="gray.600" fontWeight="400" fontSize="lg">{el.name}</Text>
                                        <Text fontWeight="600" color="gray.700" fontSize="sm">{el.desc}</Text>
                                        <Text fontWeight="400" fontSize="sm">{el.price}</Text>
                                        <Text fontWeight="400" fontSize="sm">{el.rating} ({el.total})</Text>
                                    </Box>
                            })}
                        </Box>
                    </TabPanel>
                    <TabPanel>
                        <Box display="flex">
                            {Forhim && Forhim.map((el)=>{
                                return  <Box>
                                        <Image src={el.img} alt="img" />
                                        <Text color="gray.600" fontWeight="400" fontSize="lg">{el.name}</Text>
                                        <Text fontWeight="600" color="gray.700" fontSize="sm">{el.desc}</Text>
                                        <Text fontWeight="400" fontSize="sm">{el.price}</Text>
                                        <Text fontWeight="400" fontSize="sm">{el.rating} ({el.total})</Text>
                                    </Box>
                            })}
                        </Box>
                    </TabPanel>
                    <TabPanel>
                        <Box display="flex">
                            {Forkids && Forkids.map((el)=>{
                                return  <Box>
                                        <Image src={el.img} alt="img" />
                                        <Text color="gray.600" fontWeight="400" fontSize="lg">{el.name}</Text>
                                        <Text fontWeight="600" color="gray.700" fontSize="sm">{el.desc}</Text>
                                        <Text fontWeight="400" fontSize="sm">{el.price}</Text>
                                        <Text fontWeight="400" fontSize="sm">{el.rating} ({el.total})</Text>
                                    </Box>
                            })}
                        </Box>
                    </TabPanel>
                    <TabPanel>
                        <Box display="flex">
                            {Forteen && Forteen.map((el)=>{
                                return  <Box>
                                        <Image src={el.img} alt="img" />
                                        <Text color="gray.600" fontWeight="400" fontSize="lg">{el.name}</Text>
                                        <Text fontWeight="600" color="gray.700" fontSize="sm">{el.desc}</Text>
                                        <Text fontWeight="400" fontSize="sm">{el.price}</Text>
                                        <Text fontWeight="400" fontSize="sm">{el.rating} ({el.total})</Text>
                                    </Box>
                            })}
                        </Box>
                    </TabPanel>
                    <TabPanel>
                        <Box display="flex">
                            {Foreveryone && Foreveryone.map((el)=>{
                                return  <Box>
                                        <Image src={el.img} alt="img" />
                                        <Text color="gray.600" fontWeight="400" fontSize="lg">{el.name}</Text>
                                        <Text fontWeight="600" color="gray.700" fontSize="sm">{el.desc}</Text>
                                        <Text fontWeight="400" fontSize="sm">{el.price}</Text>
                                        <Text fontWeight="400" fontSize="sm">{el.rating} ({el.total})</Text>
                                    </Box>
                            })}
                        </Box>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
        <Box w="95%" m="40px auto" mt="30px">
            <Image mb="40px" src="https://n.nordstrommedia.com/id/5ec3d3de-9e8c-4317-bc28-3b42b503268e.png?h=17&w=1608" alt="img" />
            <Text color="gray.700" m="50px" fontSize="2xl">GIFTS BY RECIPIENT</Text>
            <Image mt="20px" src="https://n.nordstrommedia.com/id/0c7312a9-d6ec-4235-bdf4-15b01fc042be.jpeg?h=395&w=1608" alt="img" />
            <Box display="flex" justifyContent="space-between" textAlign="center">
                <Box w="20%">
                    <Text color="gray.700" fontSize="18px">For Her</Text>
                </Box>
                <Box w="20%">
                    <Text color="gray.700" fontSize="18px">For Him</Text>
                </Box>
                <Box w="20%">
                    <Text color="gray.700" fontSize="18px">For Kids</Text>
                </Box>
                <Box w="20%">
                    <Text color="gray.700" fontSize="18px">For Teens</Text>
                </Box>
                <Box w="20%">
                    <Text color="gray.700" fontSize="18px">All Gifts</Text>
                </Box>
            </Box>
        </Box>
        <Box w="95%" m="auto" mb="55px" mt="50px">
            <Image mb="40px" src="https://n.nordstrommedia.com/id/5ec3d3de-9e8c-4317-bc28-3b42b503268e.png?h=17&w=1608" alt="img" />
            <Text fontSize="3xl" m="50px 0px">Trending Now</Text>
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
        <Box w="95%" m="40px auto" mt="100px">
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
        <Box w="95%" display="flex" m="auto" alignItems="center" mt="80px" color="white">
                <Image position="relative" src="https://n.nordstrommedia.com/id/50731a37-8fb1-4ae1-bd40-4597e2266297.jpeg?h=200&w=1608" alt="img" />
            <Box w="50%" position="absolute" right="8%" textAlign="left">
                <Text color="white" fontSize="22px">New Episodes Every Other Week</Text>
                <Text color="white" fontWeight="400" fontSize="15px">Go behind the scenes of Nordstrom with Pete Nordstrom and special guests. </Text>
                <Link textDecoration="underline" fontSize="16px">Learn More</Link>
            </Box>
        </Box>
        <Box w="95%" m="80px auto">
            <Image mb="60px" src="https://n.nordstrommedia.com/id/5ec3d3de-9e8c-4317-bc28-3b42b503268e.png?h=17&w=1608" alt="img" />
            <Text color="gray.700" fontSize="2xl">SHOP BY CATEGORY</Text>
            <Box display="flex" justifyContent="space-between" mt="50px" textAlign="center">
                <Box w="16%">
                    <Image src="https://n.nordstrommedia.com/id/8d5e2126-1fca-42f8-b71b-ce9d1a3cc0ab.jpeg?h=365&w=268" alt="img" />
                    <Text color="gray.700" fontSize="18px">Women</Text>
                </Box>
                <Box w="16%">
                    <Image src="https://n.nordstrommedia.com/id/fb45282f-b5e1-423b-9894-4a6071e7d3a1.jpeg?h=365&w=268" alt="img" />
                    <Text color="gray.700" fontSize="18px">Men</Text>
                </Box>
                <Box w="16%">
                    <Image src="https://n.nordstrommedia.com/id/278ded2f-d53f-4c14-a88c-8bc5ba1efe56.jpeg?h=365&w=268" alt="img" />
                    <Text color="gray.700" fontSize="18px">Kids</Text>
                </Box>
                <Box w="16%">
                    <Image src="https://n.nordstrommedia.com/id/1ceda26d-5052-4510-811b-82d30dbd5a23.jpeg?h=365&w=268" alt="img" />
                    <Text color="gray.700" fontSize="18px">Home</Text>
                </Box>
                <Box w="16%">
                    <Image src="https://n.nordstrommedia.com/id/a29eca50-eeb5-4d37-a2bf-2932c60746a3.jpeg?h=365&w=268" alt="img" />
                    <Text color="gray.700" fontSize="18px">Beauty & Fragrance</Text>
                </Box>
                <Box w="16%">
                    <Image src="https://n.nordstrommedia.com/id/48027591-850a-4544-814e-b458e00d6a51.jpeg?h=365&w=268" alt="img" />
                    <Text color="gray.700" fontSize="18px">Designer</Text>
                </Box>
            </Box>
        </Box>
        <Box w="95%" m="40px auto">
            <Text color="gray.700" fontSize="2xl">CURRENTLY LOVING</Text>
            <Text color="gray.700" fontWeight="400" fontSize="15px">Explore favorite looks from Instagram. Tag @Nordstrom to show us your finds.</Text>
            <Box w="95%" m="auto" display="flex" justifyContent="space-between" textAlign="left" mt="50px">
                <Box className="container">
                    <Image src="https://cdn.dashhudson.com/media/640/1634145375.908124478742.jpeg" alt="Avatar" className="image" w="100%"/>
                    <Box className="middle">
                        <Box className="text">Shop Now</Box>
                    </Box>
                </Box>
                <Box className="container">
                    <Image src="https://cdn.dashhudson.com/media/640/1633576910.42796190538.jpeg" alt="Avatar" className="image" w="100%"/>
                    <Box className="middle">
                        <Box className="text">Shop Now</Box>
                    </Box>
                </Box>
                <Box className="container">
                    <Image src="https://cdn.dashhudson.com/media/640/1638985643.81467653793.jpeg" alt="Avatar" className="image" w="100%"/>
                    <Box className="middle">
                        <Box className="text">Shop Now</Box>
                    </Box>
                </Box>
                <Box className="container">
                    <Image src="https://cdn.dashhudson.com/media/640/1639450121.23927782505.jpeg" alt="Avatar" className="image" w="100%"/>
                    <Box className="middle">
                        <Box className="text">Shop Now</Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    </Box>
}

export default Homepage;