import ContactTable from "@/components/table/contact/ContactTable";
import { IContactList, contactColumns } from "@/components/table/contact/contactColumns";
import prisma from "@/lib/prisma";

async function getData(): Promise<IContactList[]> {
  const contacts = await prisma.contact.findMany({});

  return contacts.map((contact) => ({
    id: contact.id,
    email: contact.email,
    firstName: contact.firstName,
    lastName: contact.lastName,
    gender: contact.gender,
    moneyToInvest: contact.moneyToInvest,
  }));
}

export default async function Page() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <ContactTable columns={contactColumns} data={data} />
    </div>
  );
}
