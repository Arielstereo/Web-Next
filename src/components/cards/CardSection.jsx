import Image from "next/image";
import Link from "next/link";

const CardSection = ({ url, linkTo, title }) => {
  return (
    <div className="relative">
      <Image
        src={url}
        alt="card"
        width={400}
        height={400}
        className="object-cover h-full"
      />
      <div className="absolute inset-0 flex flex-col gap-12 justify-center items-center">
        <p className="text-white text-lg font-bold sm:text-xl lg:text-2xl">
          {title}
        </p>
        <Link
          href={linkTo}
          className="mt-4 bg-slate-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded uppercase"
        >
          Ver Productos
        </Link>
      </div>
    </div>
  );
};

export default CardSection;
