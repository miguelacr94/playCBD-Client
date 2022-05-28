import React from 'react'
import Input from '../materials/Input'

const Subcriptions = () => {
    return (
        <div className="mt-12 bg-redFooter">
            <div className="mt-37 bg-white w-24 h-24 m-auto">

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
            </div>
        </div>
    )
}

export default Subcriptions