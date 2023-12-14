import FormValidation from "../components/contactMe/formValidation/FormValidation";
import { Flex } from "@mantine/core";

const Contact = () => {
  return (
    <Flex
      align={"center"}
      justify={"center"}
      direction={"column"}
      h={"100%"}
      wrap={"wrap"}
    >
      <FormValidation />
    </Flex>
  );
};
export default Contact;
