import React from 'react'

const Products = () => {
    return (
        <div className="mt-6 w-contentResponsive m-auto">
            <h2 className="text-black text-lg text-start font-bold">¡ENCUENTRA EL PRODUCTO QUE NECESITAS!</h2>
            <p className="text-black font-bold text-xs mt-18">
                Presiona en la necesitad en la que el aceite de PLAY CBD POWERS te puede ayudar
                y te recomendaremos el producto a medida
            </p>
            <div className="mt-33 w-benefits h-benefits  flex justify-center items-center overflow-hidden overflow-x-hidden z-10">
                <div className="w-110 h-110 bg-primary rounded-full z-0 -ml-1 -mr-1">
                <p className="mt-4 text-center">item</p>
                </div>
            </div>
        </div>
    )
}

export default Products