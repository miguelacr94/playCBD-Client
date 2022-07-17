import React from 'react'
import Icons from '../../utils/icons'

const Informations = () => {
    return (
        <div className="bg-white m-auto flex justify-center items-center flex flex-wrap md:mt-2 sm:mt-2">
            <div className="md:flex md:flex-wrap md:w-full w-full flex flex-wrap justify-center items-center">

                <div className="w-terminos h-16 mt-8 text-center md:w-5/6 sm:w-5/6 sm:m-auto md:m-auto">
                    <div className="text-center  flex justify-center items-center">
                        <p className="text-black flex w-60 text-subcription ">
                            INFORMACIÓN DE LA COMPAÑIA
                        </p>
                        <p className="ml-2 text-black text-4xl">{Icons.arrowDownAlt}</p>
                    </div>
                    <div className="bg-grey-line mt-5 h-px" />
                </div>


                <div className="w-terminos h-16 mt-8 text-center md:w-5/6 sm:w-5/6 sm:m-auto md:m-auto">
                    <div className="text-center  flex justify-center items-center">
                        <p className="text-black flex w-60 text-subcription  ">
                            FAQ
                        </p>
                        <p className="ml-2 text-black text-4xl">{Icons.arrowDownAlt}</p>
                    </div>
                    <div className="bg-grey-line mt-5 h-px" />
                </div>


                <div className="w-terminos h-8 mt-8 text-center md:w-5/6 sm:w-5/6 sm:m-auto md:m-auto sm:flex sm:justify-center ">
                    <div className="text-start flex justify-start w-contact ">
                        <p className="text-black flex  text-subcription ">
                              CONTACTO:
                        </p>
                      
                    </div>
                   
                </div>        
            </div>

            <div className="w-terminos sm:w-5/6 mt-4 sm:m-auto">
                <div className="text-center flex flex-wrap">
                    <div className="w-full mt-9 text-black ">
                        Por definir según lo que se quiera mostrar sobre la compañia
                    </div>
                    <div className="w-full mt-7">
                        <p className="text-black font-bold font-sans text-subcription">Paga seguro con</p>
                    </div>
                    <div className="w-full mt-7">
                        <p className="text-black">ICONOS DE TODOS LOS MEDIOS DE PAGO</p>
                    </div>

                </div>
                <div className="w-derechos mt-34 text-center m-auto">
                    <p className="text-grey-derechos text-xs font-sans ">© 2022 New Pharma Investments. All rights reserved.</p>
                </div>

            </div>

        </div>
    )
}

export default Informations