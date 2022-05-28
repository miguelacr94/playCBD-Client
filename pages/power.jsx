import React from 'react'
import BenefitsPower from '../component/power/benefitsPower'
import Products from '../component/power/Products'
import Properties from '../component/power/Properties'
import SocialRed from '../component/power/SocialRed'
import Subcriptions from '../component/power/Subcriptions'
import { terapeutic, stetics } from '../utils/data'

const power = () => {
    return (
        <div >
            <div className="h-20"></div>
            <main className="w-full mb-20 ">
                <section className="h-screen bg-no-repeat bg-cover bg-home text-white">
                    {/* section 1 */}
                    <div >
                        <BenefitsPower />
                    </div>
                    {/* section 2 */}
                    <div>
                        <Properties />
                    </div>
                    <div className="mt-6 w-contentResponsive m-auto">
                        <h2 className="text-black text-lg text-start font-bold">A nivel terapéutico</h2>
                        <div className="mt-2.5">
                            {terapeutic.map((item, index) => {
                                return (
                                    <p key={index}
                                        className="text-black text-lg font-black "
                                    >
                                        {item.items}
                                    </p>
                                )
                            })}
                        </div>
                        <div className="mt-6 w-contentResponsive m-auto">
                            <h2 className="text-black text-lg text-start font-bold">A nivel cuidados y estética en general:</h2>
                            <div className="mt-2.5">
                                {stetics.map((item, index) => {
                                    return (
                                        <p key={index}
                                            className="text-black text-lg font-black "
                                        >
                                            {item.stetic}
                                        </p>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div>
                        <Products />
                    </div>

                    {/* sections 3 */}
                    <div className="mt-cosmetic">
                        <h1 className="sm:mt-20 mt-9 text-black font-medium font-regular text-center text-titlePrimary w-bigLogo m-auto leading-9">
                            ¿POR QUE PLAY CBD POWERS?
                        </h1>

                    </div>

                    <div className="mt-117">
                        <h1 className="sm:mt-20 mt-9 text-black font-medium font-regular text-center text-titlePrimary w-bigLogo m-auto leading-9">
                            LA CALIDAD NUESTRA RAZÓN DE SER
                        </h1>

                    </div>
                    {/* sections 4 */}
                    <div>
                        <SocialRed />
                    </div>
                    <div>
                        <Subcriptions />
                    </div>

                </section>
            </main>
        </div>
    )
}

export default power