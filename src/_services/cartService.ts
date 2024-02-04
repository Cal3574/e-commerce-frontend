import { Session } from "next-auth";

//grab the user basket
export async function getUserBasket(session: Session | null) {
  console.log(session);
  try {
    if (!session) throw new Error("No session");
    const res = await fetch(
      `${process.env.API_URL || "http://localhost:8000"}/api/cart/get-cart/${
        session.user.userId
      }`,

      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${session.jwt}`,
        },
      }
    );

    if (!res.ok) {
      throw new Error(`Error: ${res.status}`);
    }

    const data = await res.json();

    return data;
  } catch (e) {
    console.log("Failed to get user basket:", e);
    throw e;
  }
}

//delete items from basket
export async function deleteItemFromBasket(
  cartItemId: number | null,
  session: Session | null
) {
  console.log(cartItemId, session);
  try {
    if (!session) throw new Error("No session");
    const res = await fetch(
      `${
        process.env.API_URL || "http://localhost:8000"
      }/api/cart/delete-cart-item/${cartItemId}`,

      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${session.jwt}`,
        },
      }
    );

    if (!res.ok) {
      throw new Error(`Error: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (e) {
    console.log("Failed to delete item:", e);
    throw e;
  }
}

//add items to basket
export async function addItemToCart(
  productId: number | null,
  quantity: string | null,
  session: Session | null
) {
  try {
    if (!session) throw new Error("No session");
    const res = await fetch(
      `${
        process.env.API_URL || "http://localhost:8000"
      }/api/cart/add-product-to-cart`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${session.jwt}`,
        },
        body: JSON.stringify({
          productId,
          quantity,
          userId: session.user.userId,
        }),
      }
    );

    console.log(res);

    if (!res.ok) {
      throw new Error(`Error: ${res.status}`);
    }

    const data = await res.json();

    console.log(data);
    return data;
  } catch (e) {
    console.log("Failed to add item:", e);
    throw e;
  }
}

//update items in basket

export async function updateItemInBasket(
  itemId: number | null,
  quantity: string | null,
  session: Session | null
) {
  try {
    if (!session) throw new Error("No session");
    const res = await fetch(
      `${
        process.env.API_URL || "http://localhost:8000"
      }/api/cart/update-cart-item/${itemId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${session.jwt}`,
        },
        body: JSON.stringify({
          quantity,
          userId: session.user.userId,
        }),
      }
    );

    console.log(res);

    if (!res.ok) {
      throw new Error(`Error: ${res.status}`);
    }

    const data = await res.json();

    console.log(data);
    return data;
  } catch (e) {
    console.log("Failed to add item:", e);
    throw e;
  }
}
