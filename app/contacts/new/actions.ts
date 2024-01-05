"use server";

import { TContactData } from "@/components/form/ContactForm";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createContact(values: TContactData) {
  try {
    await prisma.contact.create({
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
    throw new Error("Error creating contact");
  }

  revalidatePath("/contacts");
  redirect("/contacts");
}
