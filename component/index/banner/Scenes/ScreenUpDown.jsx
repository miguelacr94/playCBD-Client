import React from 'react'
import Separator from '../../../Separator'

const ScreenUpDown = () => {



    const fondoUp = () => {

        const tl = gsap.timeline({

        })
        tl.to('#fondo', { y: '-100vh', ease: "power1", duration: 2 }, 0)

    }

    return (
        <div
            className='w-full h-windows flex items-start justify-centerF'
        >ScreenUpDown

            <div className="w-full h-8 bg-grey absolute">---</div>
        </div>
    )
}

export default ScreenUpDown