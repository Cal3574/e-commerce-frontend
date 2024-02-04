import ProductGalleryHome from "@/_components/productGallery/ProductGalleryHome";
import Hero from "../_components/hero/Hero";

export default function Home() {
  return (
    <main className="h-full pt-64 md:pt-12 bg-gradient-to-r from-[#211C24] to-[#211C24] flex items-center justify-center flex-col">
      <Hero />
      <ProductGalleryHome />
    </main>
  );
}
