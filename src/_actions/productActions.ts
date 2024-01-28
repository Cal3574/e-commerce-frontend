"use server";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Session, getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
export async function addProduct(form: FormData) {
  try {
    const session = await getServerSession(authOptions as any);

    if (!session) {
      throw new Error("Not authenticated");
    }

    const newProductObj = {
      name: form.get("name"),
      price: form.get("price"),
      quantity: form.get("quantity"),
      description: form.get("description"),
      categoryId: form.get("category"),
      image: form.get("image") as File & { image: string },
    };

    const file = newProductObj.image;

    const res = await fetch(
      `${process.env.NEXTAUTH_URL}/api/aws/presigned_url?file=${file.name}`
    );
    const { presignedUrl } = (await res.json()) as { presignedUrl: string };

    if (!presignedUrl) {
      throw new Error("Error getting presigned URL");
    }

    const fileUpload = await fetch(presignedUrl, {
      method: "PUT",
      body: file,
      headers: {
        "Content-Type": `${file.type}`, // or the appropriate type for your file
      },
    });

    const newProductData = {
      ...newProductObj,
      image: `https://e-commerce-bucket-cal.s3.amazonaws.com/${file.name}`,
    };

    if (!fileUpload.ok) {
      throw new Error("Error uploading file");
    }

    const addNewProduct = await fetch(
      `${process.env.API_URL}/api/product/new-product`,
      {
        method: "POST",
        body: JSON.stringify(newProductData),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${(session as Session)?.jwt}`,
        },
      }
    );

    if (!addNewProduct.ok) {
      throw new Error("Error adding product");
    }

    const addNewProductResponse = await addNewProduct.json();
    revalidatePath("/browse");
    return addNewProductResponse;
  } catch (error) {
    console.log(error);
  }
}
