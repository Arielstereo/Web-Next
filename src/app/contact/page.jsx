import React from 'react'

const Contact = () => {
  return (
    <div className="flex justify-center items-center py-48">
    <div className="flex flex-col md:flex-row px-8 lg:px-64 gap-10">
      <div className="w-3/4 lg:w-1/3 space-y-6">
        <h1 className="text-4xl font-bold">Contacto</h1>
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <span className="text-sm">interiordesign@yahoo.com.ar</span>
          </div>
          <div className="flex items-center space-x-2">          
            <span className="text-sm">+54 11 2233-4455</span>
          </div>
          <div className="flex items-center space-x-2">
            
            <div>
              <span className="text-sm block">Lunes a sábados - 10:00 a 19:00 hs</span>
              <span className="text-sm block">Domingos/feriados - 10:00 a 14:00 hs</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">           
            <span className="text-sm">
              Efectivo - Transferencia bancaria - Tarjetas de débito - Tarjetas de Crédito (VISA, MASTERCARD, AMEX)
              Plan AHORA 3, 6 y 12 pagos iguales- Mercado Pago
            </span>
          </div>
        </div>
      </div>
      <div className="lg:w-2/3 space-y-6">
        <form className="flex flex-col space-y-4 w-[400px] lg:w-[600px]">
          <input className="p-2 border border-slate-400" placeholder="Nombre" />
          <input className="p-2 border border-slate-400" placeholder="Email" />
          <input className="p-2 border border-slate-400" placeholder="Teléfono" />
          <textarea className="px-2 py-12 border border-slate-400" placeholder="Mensaje" />
          <button className="w-full bg-slate-800 text-white p-2">Enviar mensaje</button>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Contact