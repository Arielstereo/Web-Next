import Hero from "@/components/Hero";
import CardProduct from "@/components/cards/CardProduct";
import Products from "@/mockup/data"

export default function BedroomPage() {

  const {bedroom} = Products

  return (
    <div>
      <Hero url={"/images/bedroom.jpg"} />
      <h2 className="text-slate-100 font-black text-3xl text-center bg-red-500 p-4">Muebles de Dormitorio</h2>
      <div className="flex gap-8 flex-wrap justify-center m-4 md:mx-20">

        {
          bedroom.map(product => (
            <CardProduct url={`/images/${product.image}`} id={`/bedroom/${product.id}`} description={product.description} key={product.id} />
          ))
        }

      </div>
    </div>
  )
}
