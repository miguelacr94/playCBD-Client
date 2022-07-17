import React from 'react'
import Products from './Products'

const cosmetic = () => {
    return (
        <>
            <div className='mt-cosmetic w-full text-center'>
                <p className="text-golden font-normal text-4xl">COSMÉTICA CBD</p>
            </div>
            <div className="mt-16 w-5/6 m-auto h-44 sm:h-banner2 bg-grey">
                Imagen COSMÉTICA
            </div>
            <div className="mt-14 w-contentResponsive sm:w-5/6 m-auto sm:p-1 md:w-5/6">
                <p className="text-grey-Dark text-textResponsive sm:text-text text-center 
                m-auto font-normal font-medium font-sans mt-4 leading-4 sm:leading-6">
                    Nuestras gotas clásicas de CBD son la perfecta elección para una vida cotidiana y saludable,
                    asimismo incorpora una variedad más amplia de compuestos activos de la planta y cannabinoides.
                    Mantener alejado del calor y de la luz natural.
                </p>
            </div>
            <Products />
        </>
    )
}

export default cosmetic