import React from 'react'
import { products } from '../../utils/data'

const Products = () => {
    return (
        <div className='w-5/6 m-auto flex flex-wrap '>
            {products.map((product, index) => {
                return (
                    <>
                        <div className="sm:w-1/3 w-full h-60 p-4 text-center">
                            <div>imagen</div>
                            <p className="mt-2 text-grey-product text-name font-name">{product.name}</p>
                            <button className="border-2 border-golden text-golden rounded-xl w-full mt-5">
                                Conocer más
                            </button>
                        </div>

                    </>
                )
            })}
        </div>
    )
}

export default Products