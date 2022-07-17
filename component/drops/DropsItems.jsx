import React from 'react'
import Icons from '../../utils/icons'
import { drops } from '../../utils/data'

const DropsItems = () => {
    return (
        <div>
            <div className="flex">
                <p className="text-grey-Dark font-bold font-sans w-5/6">GOTAS CBD</p>
                <p className="text-grey-light w-1/6 text-3xl font-thin ">{Icons.arrowDownAlt}</p>
            </div>
            <div className="h-line w- bg-grey-light mt-4 m-auto -ml-2 opacity-40">
            </div>
            {drops && drops.map((d, index) => {
                return (

                    <div key={index} className="ml-2 mt-4 h-16 flex items-center flex-wrap">
                        <div className="flex w-full ">
                            <p className="text-grey-derechos text-xs font-sans w-5/6 ">{d.title}</p>
                            <p className="text-grey-light w-1/6 text-3xl font-thin ">{Icons.arrowDownAlt}</p>
                        </div>
                        <div className="h-line  w-11/12 bg-grey-light opacity-40 mt-2 m-auto -ml-2">
                        </div>
                    </div>

                )


            })

            }
        </div>
    )
}

export default DropsItems