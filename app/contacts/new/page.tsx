import ContactForm from "@/components/form/ContactForm";
import { createContact } from "./actions";

export default function Page() {
  return <ContactForm onSubmit={createContact} />;
}
