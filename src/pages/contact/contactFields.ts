import { FormField } from "../../components/form/FormComponent";

export const contactFormFields: FormField[] = [
  {
    label: "Name",
    name: "name",
    type: "text",
    placeholder: "Your Name",
    initValue: "",
  },
  {
    label: "Email",
    name: "email",
    type: "email",
    placeholder: "Your Email",
    initValue: "",
  },
  {
    label: "Message",
    name: "message",
    type: "textarea",
    placeholder: "Your Message",
    initValue: "",
  },
];

export const validateContactForm = (values: any) => {
  const errors: any = {};
  if (values.name?.length < 1) {
    errors.name = "Name is Required";
  }
  if (values.message?.length < 1) {
    errors.message = "Message required";
  }
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  return errors;
};
