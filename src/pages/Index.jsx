// Complete the Index page component here
// Use chakra-ui
import { Box, Flex, Text, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, SimpleGrid, Heading } from "@chakra-ui/react";
import { FaChartLine, FaDollarSign, FaShoppingCart } from "react-icons/fa";

const Index = () => {
  return (
    <Box p={5}>
      <Heading as="h1" size="xl" mb={6}>
        Business Dashboard
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <StatBox icon={FaChartLine} title="Total Sales" stat="1,240" helpText="Since last month" increase={true} />
        <StatBox icon={FaDollarSign} title="Revenue" stat="$34,200" helpText="Since last month" increase={true} />
        <StatBox icon={FaShoppingCart} title="New Orders" stat="340" helpText="Since last week" increase={false} />
      </SimpleGrid>
    </Box>
  );
};

const StatBox = ({ icon: Icon, title, stat, helpText, increase }) => {
  return (
    <Stat p={5} shadow="md" border="1px" borderColor="gray.200" borderRadius="md">
      <Flex alignItems="center">
        <Box fontSize="3xl" as={Icon} mr={2} />
        <StatLabel fontWeight="medium">{title}</StatLabel>
      </Flex>
      <StatNumber fontSize="2xl">{stat}</StatNumber>
      <StatHelpText>
        <StatArrow type={increase ? "increase" : "decrease"} />
        {helpText}
      </StatHelpText>
    </Stat>
  );
};

export default Index;
