import Image from "next/image";

const ViewProduct = ({ url, title, description, dimensions, material }) => {
  return (
    <div className="flex flex-col md:flex-row gap-8 md:ml-8">
      <Image className="p-8" src={url} alt="img" width={800} height={1200} />
      <div className="flex flex-col gap-6 md:mt-16 w-[300px] mx-auto pb-8 md:w-[600px]">
        <h2 className="text-lg md:text-2xl font-black">{title}</h2>
        <h3>{description}</h3>
        <h2 className="text-xl font-black">Detalle</h2>
        <div className="flex flex-col gap-2">
          <p>
            <span className="md:text-lg font-semibold">Medidas: </span>
            {dimensions}
          </p>
          <p>
            <span className="md:text-lg font-semibold">Materiales: </span>
            {material}
          </p>
        </div>
        <div className="bg-green-300 p-2 mt-16">
          <span className="font-semibold">
            Fabricamos muebles a medida. Consulta presupuesto y formas de pago.
          </span>
        </div>
      </div>
    </div>
  );
};

export default ViewProduct;