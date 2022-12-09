import {
  Box,
  Container,
  Text,
  HStack,
  VStack,
  Flex,
  Grid,
  Button,
} from "@chakra-ui/react";

import { AiOutlineGift } from "react-icons/ai";

export default function Details() {
  return (
    <Box p={4}>
      <Container maxW={"6xl"} mt={10}>
        <Grid
          w={"60%"}
          gap="35px"
          columns={{ base: 1, md: 2, lg: 4 }}
          gridTemplateColumns="repeat(2,1fr)"
          spacing={10}
        >
          <HStack align={"top"}>
            <VStack align={"start"}>
              <Text fontWeight={700} align={"left"} fontSize="25px">
                SIZE INFO
              </Text>
              <Text fontSize={"xs"}>
                <ul align={"left"}>
                  <li>True to size.</li>
                  <li>
                    Flex fit; semi-fitted to sit against the body for a greater
                    range of motion.
                  </li>
                  <li>Tall sizes are 2 longer in length than regular sizes.</li>
                </ul>
              </Text>
            </VStack>
          </HStack>

          <HStack align={"top"}>
            <VStack align={"start"}>
              <Flex>
                <AiOutlineGift size={"30px"} />
                <Text fontWeight={700} align={"left"} fontSize="25px">
                  GIFT OPTIONS
                </Text>
              </Flex>
              <Text align={"start"} w={"100%"} fontSize={"xs"}>
                Choose your gift options at Checkout. Some items may not be
                eligible for all gift options.
              </Text>
            </VStack>
          </HStack>

          <HStack align={"top"}>
            <VStack align={"start"}>
              <Text fontWeight={700} align={"left"} fontSize="25px">
                DETAILS & CARE
              </Text>
              <Text fontSize={"xs"} align={"left"}>
                Get active in this sporty, raglan-sleeve T-shirt that takes you
                seamlessly from gym to street.
              </Text>
{/*feedback: fp02_094 - use loops for listing similar elements */}
              <Text fontSize={"xs"} ml="">
                <ul align={"left"}>
                  <li>28" length (size Medium)</li>
                  <li>Crewneck</li>
                  <li>Short sleeves</li>
                  <li>65% nylon, 35% polyester</li>
                  <li>Machine wash, tumble dry</li>
                  <li>Imported</li>
                  <li>Item #5817496</li>
                </ul>
              </Text>
            </VStack>
          </HStack>

          <HStack align={"top"}>
            <VStack align={"start"}>
              <Flex>
                <Text fontWeight={700} align={"left"} fontSize="15px">
                  Free Pickup
                </Text>
              </Flex>
              <Text fontSize={"xs"} ml="">
                <ul align={"left"}>
                  <li>Printed gift message (free)</li>
                  <li>Nordstrom gift box (free)</li>
                  <li>Signature gift wrap ($5)</li>
                </ul>
              </Text>

              <Flex>
                <Text fontWeight={700} align={"left"} fontSize="15px">
                  Delivery
                </Text>
              </Flex>
              <Text fontSize={"xs"} ml="">
                <ul align={"left"}>
                  <li>Email gift message (free)</li>
                  <li>Printed gift message (free)</li>
                  <li>DIY Nordstrom gift box ($5)</li>
                </ul>
              </Text>

              <br />
              <Text fontSize={"xs"} fontWeight="bold" w={"110%"} align={"left"}>
                Need help finding the perfect gift? We've got you covered.
              </Text>
              <Button
                w={"80%"}
                border="1px solid black"
                color={"black"}
                bgColor="white"
              >
                Shop Gifts
              </Button>

              <Text
                fontWeight={700}
                align={"left"}
                fontSize="15px"
                textDecor={"underline"}
              >
                ZELLA
              </Text>
{/*feedback: fp02_094 - Move static text to constant files, easy to maintain and keep the components light*/}
              <Text align={'left'} w='125%' fontSize={"xs"}>
                Step into your training schedule and maximize the power of your
                mind, body and energy. Stay focused, go further, be invincible
                and achieve balance in Zella athletic wear, designed with
                ultimate comfort innovation and peak performance technology to
                enhance your workout. For men, women and girls with ambitious
                fitness goals and a commitment to wellness. Available
                exclusively at Nordstrom.
              </Text>
            </VStack>
          </HStack>
        </Grid>
      </Container>
    </Box>
  );
}
