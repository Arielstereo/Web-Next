import Image from "next/image";
import Link from "next/link";

const CardProduct = ({ id, url, description }) => {
  return (
    <Link
      href={id}
      className="shadow-xl shadow-black p-4 my-12 w-[400px]"
    >
      <Image
        className="object-cover hover:opacity-90 h-[300px] w-fit"
        src={url}
        alt="product"
        width={400}
        height={400}
      />
      <div className="my-4 flex flex-col gap-4">
        <h2 className="text-slate-600 text-sm">{description}</h2>
        <span className="text-sm bg-red-500 p-2 text-white text-center">
          20% OFF con débito, transferencia o efectivo
        </span>
      </div>
    </Link>
  );
};

export default CardProduct;
