import { getSession } from "next-auth/react";
import { UserData } from "../_types/user";
import { getToken } from "next-auth/jwt";

const secret = process.env.NEXTAUTH_SECRET;
const addUser = async (userData: UserData) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

  try {
    const res = await fetch(`${apiUrl}/api/users/new-user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!res.ok) {
      throw new Error(`Error: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error("Failed to add user:", error);
    throw error;
  }
};

const getUser = async (email: string) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

  try {
    const res = await fetch(`${apiUrl}/api/users/${email}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error(`Error: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (e) {
    console.error("Failed to get user:", e);
    throw e;
  }
};

export { addUser, getUser };
