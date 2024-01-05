"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function deleteContact(contactId: number) {
  try {
    await prisma.contact.delete({
      where: {
        id: contactId,
      },
    });
  } catch (error) {
    console.error(error);
    throw new Error("Error deleting contact");
  }

  revalidatePath("/contacts");
}
