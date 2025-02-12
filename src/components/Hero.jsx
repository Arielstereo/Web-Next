import Link from "next/link"

const Hero = ({url, title, subtitle}) => {
  return (

<section
  className="relative bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: `url(${url})` }}
>
  <div
  className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 sm:bg-gradient-to-br"
></div>
  <div
    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:px-8"
  >
    <div className="max-w-xl text-center sm:text-center">
      <h1 className="text-3xl font-extrabold sm:text-5xl">
        Diseños de interiores

        <strong className="block font-extrabold"> para tu {title}. </strong>
      </h1>

      <p className="mt-4 max-w-lg sm:text-xl">
        {subtitle}
      </p>

      <div className="mt-8 flex flex-wrap gap-4 text-center justify-center">
        <Link
          href="/contact"
          className="block w-full rounded-md bg-black hover:bg-slate-600 px-12 py-3 text-lg font-medium text-slate-100 shadow-sm focus:ring-3 focus:outline-hidden sm:w-auto"
        >
          Contactanos
        </Link>
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero