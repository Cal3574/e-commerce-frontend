import { getSession } from "next-auth/react";

const addProduct = async (product: any) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

  try {
    const session = await getSession();
    console.log(session?.jwt);

    const res = await fetch(`${apiUrl}/api/product/new-product`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session?.jwt}`,
      },
      body: JSON.stringify(product),
    });

    console.log(res);

    const data = await res.json();

    console.log(data);

    return data;
  } catch (e) {
    throw e;
  }
};

export { addProduct };
