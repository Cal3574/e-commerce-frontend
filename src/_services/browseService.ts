//get all products

export async function getAllProducts() {
  try {
    const apiUrl = process.env.API_URL || "http://localhost:8000";
    const res = await fetch(`${apiUrl}/api/product/all-products`, {
      next: { revalidate: 10 },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Failed to get products:", error);
    throw error;
  }
}
