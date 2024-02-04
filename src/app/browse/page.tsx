import { getAllProducts } from "@/_services/browseService";
import MainProductCard from "../../_components/cards/MainProductCard";
import { Product } from "@/_types/product";
import FileUploader from "@/_components/fileUploader/FileUploader";

export default async function Browse() {
  const allProducts = await getAllProducts();

  return (
    <section className="p-24 flex flex-wrap gap-12 justify-center items-center">
      {allProducts?.data?.map((product: Product) => (
        <MainProductCard key={product.id} product={product} />
      ))}
    </section>
  );
}
