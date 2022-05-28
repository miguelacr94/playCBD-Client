import React from 'react'
import { helpers } from '../../utils/data'
const Products = () => {


    // var circle = document.getElementById("circle")
    //  let circlearray = circle.textContent.split('')
    // circle.textContent = ''
    // for(var i = 0; i< circlearray.length; i++){
    //     circle.innerHTML += '<span style="transform:rotate('+((i+1)*10)+'deg)">'+ circlearray[i]+'</span>'
    // }

    return (
        <div className="mt-6  m-auto ">
            <div className="w-contentResponsive m-auto">
                <h2 className="text-black text-lg text-start font-bold">¡ENCUENTRA EL PRODUCTO QUE NECESITAS!</h2>
                <p className="text-black font-bold text-xs mt-18">
                    Presiona en la necesitad en la que el aceite de PLAY CBD POWERS te puede ayudar
                    y te recomendaremos el producto a medida
                </p>
            </div>

            <div className="flex flex-wrap justify-center items-center w-6/6 m-auto mt-33 ">
                {helpers.map((item, index) => {
                    return (

                        <div key={index} className={`m-2 w-benefits h-benefits flex-col flex 
                        justify-center items-center overflow-hidden overflow-x-hidden z-10 ` }>
                            <div 
                            className={`w-110 h-110 rounded-full z-0 -ml-1 -mr-1 -mt-1 -mb-1 flex flex-col justify-center items-center`}
                            style={{backgroundColor:`${item.color}`}}
                            >
                                <span id="circle" className="mt-4 text-center text-xs -mt-4">{item.name}</span>
                                <div className="w-24 h-24 bg-grey rounded-full">

                                </div>
                            </div>
                        </div>

                    )

                })

                }
            </div>
        </div>
    )
}

export default Products