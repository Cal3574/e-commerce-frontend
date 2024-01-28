import AddProductForm from "@/_components/forms/AddProductForm";
import { getCategories } from "@/_services/productService";

export default async function AddProduct() {
  const allCategories = await getCategories();

  return (
    <section className="md:ml-[17rem] ml-[2rem]">
      <AddProductForm allCategories={allCategories} />;
    </section>
  );
}
