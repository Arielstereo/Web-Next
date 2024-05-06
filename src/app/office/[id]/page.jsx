import ViewProduct from "@/components/cards/ViewProduct";
import Products from "@/mockup/data";

export default function page({ params }) {
  const { id } = params;
  const { office } = Products;
  console.log(office);

  const product = office.find((product) => product.id === id);


  return (
    <div>
      <ViewProduct
        url={`/images/${product.image}`}
        title={product.title}
        description={product.description}
        dimensions={product.dimensions}
        material={product.material}
      />
    </div>
  );
}
