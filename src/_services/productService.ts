export async function getCategories() {
  try {
    const categoryRes = await fetch(
      `${process.env.API_URL}/api/product//all-product-categories`
    );
    const categories = await categoryRes.json();

    return categories.data;
  } catch (e) {
    console.log(e);
  }
}
