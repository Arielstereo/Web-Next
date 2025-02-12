"use client";

import Hero from "@/components/Hero";
import CardSection from "@/components/cards/CardSection";
import GoogleMap from "@/components/maps/GoogleMap";
import GoogleMapMobile from "@/components/maps/GoogleMapMobile";
import SliderPay from "@/components/slider/SliderPay";

export default function Home() {
  return (
    <header className="relative">
      <Hero url={"/images/hero.jpg"} title= "hogar" subtitle= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas maiores nesciunt tenetur." />
      <div className="mt-24 md:mt-32 flex flex-col lg:flex-row gap-16 lg:gap-32 mx-8 items-start md:items-center justify-center">
        <div
          data-aos="fade-down"
          className="flex flex-col gap-4 justify-center w-full lg:w-64 h-32 border-b lg:border-b-0 pb-8 lg:border-r border-slate-600"
        >
          <h2 className="text-xl font-bold">Paga en cuotas</h2>
          <p className="text-sm">
            3 cuotas sin interés con todas las tarjetas de crédito.
            <br /> Consultar por otros medios de pago y formas de financiamiento.
          </p>
        </div>
        <div
          data-aos="flip-up"
          className="flex flex-col gap-4 justify-center w-full lg:w-64 h-32 border-b lg:border-b-0 pb-8 lg:border-r border-slate-600"
        >
          <h2 className="text-xl font-bold">Entrega inmediata</h2>
          <p className="text-sm">
            Trabajamos con un gran stock en nuestra sucursal.
            <br /> Los tiempos de entregan cambian en trabajos a pedido.
          </p>
        </div>
        <div
          data-aos="fade-up"
          className="flex flex-col gap-4 justify-center w-full lg:w-64 h-32 pb-8 border-b lg:border-b-0 lg:border-r border-slate-600"
        >
          <h2 className="text-xl font-bold">Envio gratis</h2>
          <p className="text-sm">
             Envio gratis a CABA y GBA a partir de $100.000.
            <br /> Consulta por envios al interior del pais.
          </p>
        </div>
      </div>
      <div className="py-32 px-8 lg:px-96">
        <h2 className="text-center text-xl font-semibold pb-16">
          Medios de pago
        </h2>
        <SliderPay />
      </div>
      <div className="mx-2 flex gap-8 flex-wrap justify-center">
        <CardSection
          animation={"zoom-in-down"}
          url={"/images/office.jpg"}
          linkTo={"/office"}
          title={"OFICINA"}
        />
        <CardSection
          animation={"zoom-in"}
          url={"/images/kitchen.jpg"}
          linkTo={"/kitchen"}
          title={"COCINA"}
        />
        <CardSection
          animation={"zoom-out-up"}
          url={"/images/living.jpg"}
          linkTo={"/living"}
          title={"LIVING"}
        />
        <CardSection
          animation={"zoom-in-up"}
          url={"/images/bedroom.jpg"}
          linkTo={"/bedroom"}
          title={"DORMITORIO"}
        />
        <CardSection
          animation={"flip-down"}
          url={"/images/bathroom.jpg"}
          linkTo={"/bathroom"}
          title={"BAÑO"}
        />
      </div>
      <div className="flex flex-col gap-16 items-center justify-center mt-32 p-12 bg-slate-50 border-t border-slate-400">
          <h3 className="text-slate-800 text-lg text-center md:text-xl font-semibold">
            Showroom - Av. Rivadavia 11200, CABA.
          </h3>
        <GoogleMap />
        <GoogleMapMobile />
  
      </div>
    </header>
  );
}
