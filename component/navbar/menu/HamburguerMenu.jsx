import React from 'react'
import Icons from '../../../utils/icons'
import ItemsConpany from '../../company/ItemsConpany'
import CosmeticItems from '../../cosmetic/CosmeticItems'
import DropsItems from '../../drops/DropsItems'
import Input from '../../materials/Input'

const HamburguerMenu = () => {
    return (
        <div className="p-8 h-menu overflow-auto">
            <div>
                <p className="text-grey-Dark font-bold font-sans">COMPRA PLAY CBD</p>
            </div>
            <div className=" ">
                <div className="mt-4">
                    <DropsItems />
                </div>
                <div >
                    <CosmeticItems />
                </div>
            </div>
            <div className="mt-8">
                <p className="text-grey-Dark font-bold font-sans">SOBRE NOSOTROS</p>
            </div>
            <div className="">
                <div className="mt-4">
                    <ItemsConpany />
                </div>
            </div>
            <div className='h-36 w-full mt-114 flex justify-center'  >
                <div className="w-5/6 h-36">
                    <Input
                        className={'w-full h-36 bg-white rounded-lg pl-8 outline-none placeholder:text-xs'}
                        placeholder="Buscar"
                    />
                </div>
                <div className="flex items-center ml-2">
                    <p className="w-1/6 h-35 text-white text-3xl">{Icons.search}</p>
                </div>
            </div>
            <div className="h-40">

            </div>

        </div>
    )
}

export default HamburguerMenu