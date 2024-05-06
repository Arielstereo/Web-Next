import Hero from "@/components/Hero";
import CardProduct from "@/components/cards/CardProduct";
import Products from "@/mockup/data"

export default function LivingPage() {

  const {living} = Products

  return (
    <div>
      <Hero url={"/images/living.jpg"} />
      <h2 className="text-slate-100 font-black text-3xl text-center bg-red-500 p-4">Muebles para Living</h2>
      <div className="flex gap-8 flex-wrap justify-center m-4 md:mx-20">

        {
          living.map(product => (
            <CardProduct url={`/images/${product.image}`} id={`/living/${product.id}`} description={product.description} key={product.id} />
          ))
        }

      </div>
    </div>
  )
}
