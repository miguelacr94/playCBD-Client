import React from 'react'
import Benefits from '../component/Cbd/Benefits'
import Cbd from '../component/Cbd/Cbd'
import Descriptions from '../component/Cbd/Descriptions'
import { Functions } from '../component/Cbd/Functions'
import Nature from '../component/Cbd/Nature'

const cbd = () => {
    return (
        <div >
            <div className="h-20"></div>
            <main className="w-full mb-20 ">
                <section className="h-screen bg-no-repeat bg-cover bg-home text-white">
                    {/* section 1 */}
                    <div>
                        <Cbd />
                    </div>
                    {/* section 2 */}
                    <div>
                        <Descriptions />
                    </div>
                    {/* section 3 */}
                    <div>
                        <Benefits />
                    </div>
                    {/* section 4 */}
                    <div>
                        <Nature />
                    </div>
                    {/* section 5 */}
                    <div>
                      <Functions />
                    </div>
                </section>


            </main>

        </div>
    )
}

export default cbd