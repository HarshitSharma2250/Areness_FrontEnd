import {
  Box,
  Grid,
  Flex,
  Text,
  Heading,
  Image,
  Button,
  Icon,
  Img,
} from "@chakra-ui/react";
import { FaFileAlt, FaClock, FaCheckSquare } from "react-icons/fa";
import { DashBoardTaskStatus } from "../components/DashBoardTaskStatus";
import { DashBoardCompleteTask } from "../components/DashBoardCompleteTask";
import { DashBoardLeftSide } from "../components/DashBoardLeftSide";
function TaskCard({
  title,
  description,
  border,
  boxImage,
  ColorPriority,
  Colorstatus,
  priority,
  status,
  createdOn,
}) {
  return (
    <Box
      border="1px"
      borderColor="gray.200"
      borderRadius="md"
      m={'auto'}
      mb={4}
      bg="white"
      h={"184px"}
      mt={"20px"}
      w={"450.17px"}
      py={"5px"}
      px={"7px"}
      display={"flex"}
      gap={"20px"}
    >
      {/* left circle */}
      <Box w={"12px"} h={"12px"} border={border} borderRadius={"50%"}></Box>
      <Box w={"380px"}>
        <Heading fontSize={"18px"} w={"232px"}>
          {title}
        </Heading>
        <Flex mt={"10px"}  alignItems={'center'}>
          <Text fontSize={"14px"} color={"#747474"} mr={"2px"}>
            {description}
          </Text>
          <Box>
            <Img
              src={`${boxImage}`}
              w={"200px"}
              h={"88px"}
              borderRadius={"14px"}
            />
          </Box>
        </Flex>
        <Flex
          gap={"10px"}
          fontSize={"10px"}
          mt={"10px"}
          justifyContent={"space-between"}
          px={"4px"}
        >
          <Text>
            Priority:{" "}
            <span style={{ color: `${ColorPriority}` }}>{priority}</span>
          </Text>
          <Text>
            Status:<span style={{ color: `${Colorstatus}` }}>{status}</span>
          </Text>
          <Text>Created on: {createdOn}</Text>
        </Flex>
      </Box>
      {/* three dots */}
      <Flex gap={"2px"} w={"14.17px"} h={"3.64"}>
        <Text
          border={"1px solid #A1A3AB"}
          h={"3.15px"}
          w={"3.15px"}
          borderRadius={"50%"}
        ></Text>
        <Text
          border={"1px solid #A1A3AB"}
          h={"3.15px"}
          w={"3.15px"}
          borderRadius={"50%"}
        ></Text>
        <Text
          border={"1px solid #A1A3AB"}
          h={"3.15px"}
          w={"3.15px"}
          borderRadius={"50%"}
        ></Text>
      </Flex>
    </Box>
  );
}

// display={["flex" , "none","none","none"]}
export const Home = () => {
  return (
    <Grid
      templateColumns={{ md: "400px 1050px " }}
      gap={6}
      p={4}
      pt={["6rem","5.8rem","5.8rem","5.8rem"]}
      w={'100%'}
    >
      {/* Sidebar */}
      <DashBoardLeftSide/>

      {/* Main Content */}
      <Box  w={'100%'}>
        {/* First div */}
        <Flex
          justifyContent="space-between"
          width="100%"
        >
          <Box>
            <Text fontSize={["2rem","1.3rem","2rem","2rem"]}>Welcome back, Sundar 👋</Text>
          </Box>

          <Flex gap={'10px'} display={["none","none","flex","flex"]}>
            {/* Image Group */}
            <Image
              boxSize="36.28px"
              borderRadius="8px"
              src="src/assets/img1.png"
              alt=""
            />
            <Image
              boxSize="36.28px"
              borderRadius="8px"
              src="src/assets/img1.png"
              alt=""
            />
            <Image
              boxSize="36.28px"
              borderRadius="8px"
              src="src/assets/img1.png"
              alt=""
            />
            <Image
              boxSize="36.28px"
              borderRadius="8px"
              src="src/assets/img1.png"
              alt=""
            />
            <Image
              boxSize="36.28px"
              borderRadius="8px"
              src="src/assets/img1.png"
              alt=""
            />
            <Button ml="5px">Invite</Button>
          </Flex>
        </Flex>

        {/* Second div */}
        <Box  width="100%" mt="50px">
          <Grid templateColumns={{ base: "1fr", md: "2fr 1fr" }} gap={4} mt={4}>
            {/* To-Do Section */}

            <Box>
              {/* left section */}
              <Box border={"1px"}
      borderColor="gray.200"
      w={'500px'}
      ml={'10px'}
      borderRadius="md">
                {/* todo */}
                <Box display={"flex"} justifyContent={"space-between"} px={'30px'}>
                  <Flex alignItems="center">
                    {" "}
                    {/* alignItems to center the Box and Text */}
                    <Box
                      position="relative"
                      width="28.18px"
                      height="31.67px"
                      borderTop="1px solid"
                      borderLeft="0px"
                      borderRight="0px"
                      borderBottom="0px"
                      opacity="1"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      {/* File Icon */}
                      <Icon as={FaFileAlt} boxSize="24px" color="gray.500" />

                      {/* Clock Icon positioned at the bottom-right */}
                      <Box
                        position="absolute"
                        bottom="0"
                        right="0"
                        transform="translate(20%, 20%)"
                        backgroundColor="white"
                        borderRadius="full"
                        padding="2px"
                      >
                        <Icon as={FaClock} boxSize="12px" color="gray.500" />
                      </Box>
                    </Box>
                    {/* Text aligned next to the Box */}
                    <Text fontSize={"14.5px"} ml={2} color={"red"}>
                      To-Do
                    </Text>
                  </Flex>

                  {/* for add Task */}
                  <Flex alignItems={"center"} gap={'2px'}>
                    <Text fontSize={"24.5px"} mb={'5px'} color={"red"}>+</Text>
                    <Text fontSize={"13.5px"}>Add Task</Text>
                  </Flex>
                </Box>
                {/* Individual Task */}
                <TaskCard
                  title="Attend Nischal's Birthday Party"
                  description="Buy gift on the way and pick up cake from the backery .(6pm | fresh elements)..."
                  priority="Moderate"
                  status="Not Started"
                  createdOn="20/06/2023"
                  border="2px solid #F21E1E"
                  boxImage="https://s3-alpha-sig.figma.com/img/a9bb/91c1/9ea10b015ebe8467aaf9c0bbf30a4205?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MxfM2JRZD3SvR6~nJNNPcXD5Yem2kPcDpLBFvOKl7brLiAHsCNX4Alr-pYuNmS~Gd78T4Xtm47woVadWwD0lb8A7uTkymeF~gw~EndJpd2711lZdyYejr19eSS6nrLLeMXIA3tOgJGinhR732qma65PGRIjODDg0pjAnKgQFkMxn983WhNr19IyAjET5Cdf6cq0hqh-UyJ0Ufs3Af0H4rIq7WF9L46oS8gKgWe810lMNoZLMccineJ0-C9M~iTib56YfzvWXPg2pSsbWjWH7WCW1Fby~PzZNhKIDeLvg~FuBZEMBkaLrSuwlAoSDBk7xMHrjmIW2aHfiwX0K7mToBA__"
                  ColorPriority="#42ADE2"
                  Colorstatus="red"
                />
                <TaskCard
                  title="Landing Page Design for TravelDays"
                  description="Get the Work Done by EOD and discuss with clint before leaving. (4pm | meeting room)"
                  priority="Moderate"
                  status="In Progress"
                  createdOn="20/06/2023"
                  border="2px solid #0225FF"
                  boxImage="https://s3-alpha-sig.figma.com/img/0fe5/020c/fc2466a8ef089d9b4c330aad6945d93e?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EXcY~ia4k7Ko1VF21qQAqYbdUl6gJUolpW2xymjYW1lxI522j842pxOLdAsZlkTPfZJF8pVobZKdumPVm~3WU6hKDZTm1fHg7FYM2xsyqicOich91hZSqdVvo4WpSLjH5RE8RgTulzl9TDJXJavr2JOW-RQe2Zwb96JW-Ag2Pk5GxfbE4VU5yxHo76WSIMDMzB65V1HLuLUtQwUlMfRXdTJXzWcbTUObHdO1Z3006bReIruvTjuzs-G-F-sKwAmDlM8751IP233rc3dEcG2PaB1fxfWkBuf0cbQvSpezGiscNObCmPEaYp7Y1xX3cczUXjtb-Favs95s87vrxYBLrg__"
                  ColorPriority="#42ADE2"
                  Colorstatus="red"
                />
                <TaskCard
                  title="Presentation on Final Project"
                  description="Make sure everything is functioning and all the necessities are priority meet. prepare the  ready for..."
                  priority="Moderate"
                  status="In Progress"
                  createdOn="20/06/2023"
                  border="2px solid #0225FF"
                  boxImage="https://s3-alpha-sig.figma.com/img/58e2/2598/91c3b1fe42b51aae4ae18a2deac43e5a?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oZfKBkuCTb6RVeX8Fhe5wH3z2dgrT9Cx0G5Qp5cFXlEuXBaOKSayZzU50jXxeExN-k9MKKMc~9j7zZ5~zBK0aZKK45f~cJc4wCpNA-nuFbQibMhcknqY38i6aI67CKybxPPwBuCEsdXR519XM6ZA2FGEmZxu74tIcEqGsGoXSaXi4itnkTWYomVz2S1keo5zAxWCarB6M6Ud8KgMTtxG3OBrQMbi-JbMJJzrL-AiS02debjzKwKxN72JU1Y-kyC54phIwpUMC~LkhboAiEZFpfTHVmo7amiXlsItwMuOE6ujYBosDkxkzNfgcZNBswrEOQIsOOqnksq7WEpIxHGr-Q__"
                  ColorPriority="#42ADE2"
                  Colorstatus="red"
                />
              </Box>
            </Box>

            {/* right section */}
            <Box>
 {/* Task Status */}
              <DashBoardTaskStatus/>

              {/* completed atsk */}
              <Box
              mt={'10px'}
                border="1px"
      borderColor="gray.200"
               borderRadius="md" 
               p={4}
               w="450px" // Adjust width as needed
               bg="white"
                >
<Flex alignItems="center" mb="20px">
        <Icon as={FaCheckSquare} boxSize="24px" color="#707070" />
        <Text ml="8px" color="#F24E1E" fontWeight="bold" fontSize="15px">
          Completed Task
        </Text>
      </Flex>

<DashBoardCompleteTask/>

              </Box>
            </Box>
          </Grid>
        </Box>
      </Box>
    </Grid>
  );
};

// Task Card Component
