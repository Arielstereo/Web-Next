import Hero from "@/components/Hero";
import CardProduct from "@/components/cards/CardProduct";
import Products from "@/mockup/data"

export default function KitchenPage() {

  const {kitchen} = Products

  return (
    <div>
      <Hero url={"/images/kitchen.jpg"} />
      <h2 className="text-slate-100 font-black text-3xl text-center bg-red-500 p-4">Muebles de Cocina</h2>
      <div className="flex gap-8 flex-wrap justify-center m-4 md:mx-20">

        {
          kitchen.map(product => (
            <CardProduct url={`/images/${product.image}`} id={`/kitchen/${product.id}`} description={product.description} key={product.id} />
          ))
        }

      </div>
    </div>
  )
}
