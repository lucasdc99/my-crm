import ContactTable from "@/components/table/contact/ContactTable";
import prisma from "@/lib/prisma";
import { deleteContact } from "./actions";

export default async function Page() {
  const data = await prisma.contact.findMany({});

  return <ContactTable onDelete={deleteContact} data={data} />;
}
