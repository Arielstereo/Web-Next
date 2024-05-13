import ViewProduct from "@/components/cards/ViewProduct";
import Loader from "@/components/loader/Loader";
import Products from "@/mockup/data";
import { Suspense } from "react";

export default function page({ params }) {
  const { id } = params;
  const { kitchen } = Products;

  const product = kitchen.find((product) => product.id === id);


  return (
    <div>
    <Suspense fallback={<Loader />}>
    <ViewProduct
        url={`/images/${product.image}`}
        title={product.title}
        description={product.description}
        dimensions={product.dimensions}
        material={product.material}
      />
      </Suspense>
    </div>
  );
}
