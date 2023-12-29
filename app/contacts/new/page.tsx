import ContactForm from "@/components/ContactForm";
import { createContact } from "./actions";

export default function Page() {
  return <ContactForm onSubmit={createContact} />;
}
