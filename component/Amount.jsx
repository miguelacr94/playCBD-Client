import React from 'react'
import { amounts } from '../utils/data'


const Amount = () => {

  console.log(amounts)

  return (
    <>
      <div className='flex justify-center items-center' >
        {
          amounts.map((amount, index) => {
            return (
              <div key={index} className={`border-4 border-${amount.color}
             sm:w-play  sm:h-play w-24 h-24 rounded-full  flex flex-col justify-center items-center m-2 mt-16`} >
                <p className="text-black sm:text-3xl">{amount.name}</p>
                <p className={`text-${amount.color} font-bold sm:text-3xl`} >{amount.amount}</p>
                <p className="text-black font-bold sm:text-2xl">{amount.cbd}</p>
              </div>
            )
          })
        }

      </div>
      <div className="w-full sm:w-4/6 h-banner bg-grey m-auto mt-16">
        Imagen Publicitaria
      </div>
      <div  className="w-full flex justify-center items-center mt-16">
        <button className="border-2 border-black w-64 h-10 rounded-3xl text-black font-bold">
          Conocer más
        </button>
      </div>
    </>

  )
}

export default Amount