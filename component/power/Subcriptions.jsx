import React from 'react'
import Buttons from '../materials/Buttons'
import Input from '../materials/Input'
import Informations from './informations'

const Subcriptions = () => {
    return (
        <>
            <div className="mt-12 bg-redFooter ">
                <div className="h-2"></div>
                <div className="w-24 h-24 mt-37 bg-white  m-auto">

                </div>
                <div className="w-279 mt-7 m-auto">
                    <p className="text-black text-sm text-center font-momo font-semibold">
                        Entra al club Play CBD Powers y disfrutarás de las nuevas promociones y obtendrás descuentos especiales.
                    </p>
                </div>
                <div className="w-279 mt-7 m-auto ">
                    <div>
                        <Input
                            id="name"
                            name="name"
                            className="w-full bg-white h-14 rounded-3xl text-grey pl-8 outline-none placeholder:text-grey-placeholder placeholder:text-xs  placeholder:font-momo"
                            placeholder="Tu nombre y apellido"
                        />
                    </div>
                    <div className="mt-3">
                        <Input
                            id="email"
                            name="email"
                            className="w-full bg-white h-14 rounded-3xl text-grey pl-8 outline-none placeholder:text-grey-placeholder placeholder:text-xs placeholder:font-momo"
                            placeholder="Tu correo electronico"
                        />
                    </div>
                    <div className="mt-7 flex justify-center items-center">
                        <Buttons
                            text="¡Quiero suscribirme!"
                            className="text-black text-sm font-bold text-center h-10 w-button border-3 border-black "
                        />
                    </div>

                </div>
                <div className="flex flex-col text-center text-black text-terminos w-terminos h-16 m-auto mt-27 font-momo ">
                    <p>Nos tomamos la privacidad muy en serio. Consulta nuestros
                        <a className="text-black font-bold text-terminos ml-1 mr-1 underline">Términos y condiciones</a>
                        y nuestras
                        <a className="text-black text-terminos font-bold ml-1 underline">políticas de provacidad.</a></p>
                </div>

            </div>
            <div>
                <div>
                    <Informations
                    />
                </div>
            </div>
        </>
    )
}

export default Subcriptions