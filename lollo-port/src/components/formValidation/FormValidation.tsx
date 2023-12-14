import { Box, Button, Textarea, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import emailjs from "@emailjs/browser";
import { useEffect, useState } from "react";

const FormValidation = () => {
  const [buttonClicked, setButtonClicked] = useState(false);
  useEffect(() => emailjs.init("NwEaXwEcudX7XpxtT"), []);

  const form = useForm({
    validateInputOnChange: true,
    initialValues: { name: "", email: "", description: "" },
    validate: {
      name: (value: string) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      email: (value: string) =>
        /^\S+@\S+$/.test(value) ? null : "Invalid email",
      description: (value: string) =>
        value.length <= 0
          ? "Tell me something about your job opportunity"
          : null,
    },
  });
  const handleSend = async (e: any) => {
    setButtonClicked(true);
    setTimeout(() => {
      setButtonClicked(false);
    }, 3000);
    e.preventDefault();
    const serviceId = "service_4dvul28";
    const templateId = "template_4r36c5a";
    try {
      await emailjs.send(serviceId, templateId, {
        name: form.getInputProps("name").value,
        email: form.getInputProps("email").value,
        recipient: form.getInputProps("description").value,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box maw={340} mx="auto">
      <form onSubmit={form.onSubmit(console.log)}>
        <TextInput
          label="Name"
          placeholder="Name"
          {...form.getInputProps("name")}
        />
        <TextInput
          mt="sm"
          label="Email"
          placeholder="Email"
          {...form.getInputProps("email")}
        />
        <Textarea
          placeholder="Autosize with no rows limit"
          autosize
          minRows={2}
          {...form.getInputProps("description")}
        />
        <Button
          disabled={buttonClicked}
          type="submit"
          mt="sm"
          onClick={handleSend}
        >
          Submit
        </Button>
      </form>
    </Box>
  );
};
export default FormValidation;
