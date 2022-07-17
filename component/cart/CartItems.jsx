import React from 'react'
import { product } from '../../utils/data'
import Icons from '../../utils/icons'
const CartItems = () => {
    return (
        <div className="h-banner overflow-auto">
            {product && product.map((p, index) => {
                return (
                    <div className="flex mt-4 flex-wrap justify-center items-center">
                        <div className='w-2/6 '>
                            <img className="bg-grey w-16 h-itemCart md:m-auto"></img>
                        </div>

                        <div className="w-4/6 md:text-center" key={index}>
                            <p className="h-30 text-terminos font-medium text-grey-Dark">{p.name}</p>
                            <p className="mt-3 font-bold text-grey-Dark text-cart">{p.price} COP</p>
                            <div className="mt-2 flex flex-wrap md:justify-center md:items-center">
                                <div className="border border-black flex h-25 w-84 rounded-md justify-center items-center">
                                    <button className="w-2/6 text-grey-light font-bold">
                                        +
                                    </button>
                                    <p className="w-2/6 text-center text-xs text-grey-light font-medium">
                                        1
                                    </p>
                                    <button className="w-2/6 text-grey-light font-bold">
                                        -
                                    </button>
                                </div>
                                <div className="ml-2">
                                    <button className="rounded-full 
                                w-25 h-25 border border-red-500 flex justify-center items-center text-red-500">
                                        {Icons.close2}
                                    </button>
                                </div>

                            </div>
                            <div className="h-line w-terminos md:w-full bg-black mt-4 m-auto -ml-78 md:ml-1">
                            </div>
                        </div>

                    </div>
                )
            })}

            <div className="mt-9 h-20 flex justify-center items-center">
                <button className="w-button h-10  rounded-md border border-black font-bold font-sans" >Pagar</button>
            </div>
            <div className=" h-8"></div>
        </div>
    )
}

export default CartItems