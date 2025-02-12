import Image from "next/image";

const Contact = () => {
  return (
    //   <div className="flex justify-center items-center py-48">
    //   <div className="flex flex-col md:flex-row px-8 lg:px-64 gap-10">
    //     <div className="w-3/4 lg:w-1/3 space-y-6">
    //       <h1 className="text-4xl font-bold">Contacto</h1>
    //       <div className="space-y-4">
    //         <div className="flex items-center space-x-2">
    //           <span className="text-sm">interiordesign@yahoo.com.ar</span>
    //         </div>
    //         <div className="flex items-center space-x-2">
    //           <span className="text-sm">+54 11 2233-4455</span>
    //         </div>
    //         <div className="flex items-center space-x-2">

    //           <div>
    //             <span className="text-sm block">Lunes a sábados - 10:00 a 19:00 hs</span>
    //             <span className="text-sm block">Domingos/feriados - 10:00 a 14:00 hs</span>
    //           </div>
    //         </div>
    //         <div className="flex items-center space-x-2">
    //           <span className="text-sm">
    //             Efectivo - Transferencia bancaria - Tarjetas de débito - Tarjetas de Crédito (VISA, MASTERCARD, AMEX)
    //             Plan AHORA 3, 6 y 12 pagos iguales- Mercado Pago
    //           </span>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="lg:w-2/3 space-y-6">
    //       <form className="flex flex-col space-y-4 w-[400px] lg:w-[600px]">
    //         <input className="p-2 border border-slate-400" placeholder="Nombre" />
    //         <input className="p-2 border border-slate-400" placeholder="Email" />
    //         <input className="p-2 border border-slate-400" placeholder="Teléfono" />
    //         <textarea className="px-2 py-12 border border-slate-400" placeholder="Mensaje" />
    //         <button className="w-full bg-slate-800 text-white p-2">Enviar mensaje</button>
    //       </form>
    //     </div>
    //   </div>
    // </div>
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section className="relative flex h-32 items-center bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
          <Image
            alt="image"
            width={400}
            height={400}
            src="/images/hero.jpg"
            className="absolute inset-0 h-full w-full object-cover opacity-30"
          />
          <div className="hidden lg:relative lg:block lg:p-12">
            <Image
              src="/images/logo-png.png"
              alt="logo"
              width={300}
              height={200}
            />

            <p className="mt-4 leading-relaxed text-white/90">
              Realizamos amoblamientos a medida.Envios sin cargo a CABA y GBA.
              <br />
              Efectivo - Transferencia bancaria - Tarjetas de débito - Tarjetas
              de Crédito (VISA, MASTERCARD, AMEX) Plan AHORA 3, 6 y 12 pagos
              iguales- Mercado Pago
            </p>
          </div>
        </section>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <h2 className="mt-6 text-2xl font-bold sm:text-3xl md:text-4xl">
              Contactanos
            </h2>
            <form action="#" className="mt-8 grid grid-cols-12 gap-6">
              <div className="col-span-6">
                <label
                  htmlFor="FirstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nombre
                </label>

                <input
                  type="text"
                  id="FirstName"
                  name="first_name"
                  className="mt-1 p-2 rounded-md border border-gray-800 bg-white text-sm text-gray-700 shadow-xs"
                />
              </div>

              <div className="col-span-12 md:col-span-6">
                <label
                  htmlFor="LastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Apellido
                </label>

                <input
                  type="text"
                  id="LastName"
                  name="last_name"
                  className="mt-1 p-2 rounded-md border border-gray-800 bg-white text-sm text-gray-700 shadow-xs"
                />
              </div>

              <div className="col-span-12">
                <label
                  htmlFor="Email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>

                <input
                  type="email"
                  id="Email"
                  name="email"
                  className="mt-1 p-2 w-full rounded-md border border-gray-800 bg-white text-sm text-gray-700 shadow-xs"
                />
              </div>

              <div className="col-span-12">
                <label
                  htmlFor="Email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Mensaje
                </label>

                <textarea
                  type="email"
                  id="Email"
                  name="email"
                  className="mt-1 p-8 w-full rounded-md border border-gray-800 bg-white text-sm text-gray-700 shadow-xs"
                />
              </div>
              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <button className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:ring-3 focus:outline-hidden">
                  Consultar
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Contact;
