import React from 'react'
import Icons from '../../utils/icons'
import CartItems from './CartItems'

const Cart = () => {
    return (
        <div className="p-4">
            <div className="flex flex-wrap ">
                <p>{Icons.cart}</p> <p className='ml-2 text-titleCart'>TUS PRODUCTOS CBD</p>
            </div>
            <div className="h-line w-6/6 bg-black mt-2 m-auto">
            </div>
           <div className='mt-2'>
               <CartItems/>
           </div>

        </div>
    )
}

export default Cart





