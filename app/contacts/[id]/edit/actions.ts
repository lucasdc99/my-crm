"use server";

import { TContactData } from "@/components/ContactForm";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function editContact(contactId: number, values: TContactData) {
  try {
    await prisma.contact.update({
      where: {
        id: contactId,
      },
      data: {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        gender: values.gender,
        moneyToInvest: values.moneyToInvest,
      },
    });
  } catch (error) {
    console.error(error);
    throw new Error("Error editing contact");
  }

  revalidatePath("/contacts");
  redirect("/contacts");
}
