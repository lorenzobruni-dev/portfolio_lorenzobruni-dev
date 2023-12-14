import { UseFormReturnType } from "@mantine/form";
import emailjs from "@emailjs/browser";

type FormType = UseFormReturnType<
  { name: string; email: string; description: string },
  (values: { name: string; email: string; description: string }) => {
    name: string;
    email: string;
    description: string;
  }
>;
export const handleSend = async (
  e: any,
  setButtonClicked: React.Dispatch<React.SetStateAction<boolean>>,
  form: FormType,
) => {
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
