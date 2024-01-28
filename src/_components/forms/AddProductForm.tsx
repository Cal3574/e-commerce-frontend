"use client";
import { FC, use } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { addProduct } from "@/_actions/productActions";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Categories } from "@/_types/product";
import { useRef } from "react";
interface AddProductFormProps {
  allCategories: Categories[];
}

const AddProductForm: FC<AddProductFormProps> = ({ allCategories }) => {
  const ref = useRef<HTMLFormElement>(null);
  return (
    <form
      ref={ref}
      action={async (formData) => {
        await addProduct(formData);
        ref.current?.reset();
      }}
      className=" p-12 flex justify-center items-center flex-col gap-4 w-[30rem] mx-auto"
    >
      <Input type="text" placeholder="Product Name" name="name" required />
      <Input type="number" placeholder="Product Price" name="price" required />
      <Input
        type="number"
        placeholder="Product Quantity"
        name="quantity"
        required
      />
      <Input
        type="text"
        placeholder="Product Description"
        name="description"
        required
      />

      <Input
        type="file"
        placeholder="Product Image"
        name="image"
        accept="image/*" // This line ensures only image files can be uploaded
        required
      />

      <Select name="category" required>
        <SelectTrigger className="">
          <SelectValue placeholder="Product Category" />
        </SelectTrigger>
        <SelectContent>
          {allCategories?.map((category: Categories) => (
            <SelectItem key={category.name} value={category.id.toString()}>
              {category.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Button
        className="bg-transparent border border-black shadow-md w-1/2 py-6 hover:bg-gray-500 text-black hover:text-white"
        type="submit"
      >
        Add Product
      </Button>
    </form>
  );
};

export default AddProductForm;
