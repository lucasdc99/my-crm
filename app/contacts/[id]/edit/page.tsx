import ContactForm from "@/components/ContactForm";
import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import { z } from "zod";
import { editContact } from "./actions";

export default async function Page({ params }: { params: { id: string } }) {
  const result = z.coerce.number().min(0).safeParse(params.id);

  if (!result.success) {
    return notFound();
  }

  const contact = await prisma.contact.findUnique({
    where: { id: result.data },
  });

  if (!contact) {
    return notFound();
  }

  const onSubmit = editContact.bind(null, contact.id);

  return (
    <ContactForm
      defaultValues={{
        email: contact.email,
        firstName: contact.firstName,
        lastName: contact.lastName,
        gender: contact.gender,
        moneyToInvest: contact.moneyToInvest ?? undefined,
      }}
      onSubmit={onSubmit}
    />
  );
}
