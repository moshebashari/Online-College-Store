import React from 'react'
import Info from './Info'

export default function InfoWrapper() {
    return (
        <div className="information-section container mx-auto my-5 px-2 sm:px-8">
            <div className="grid grid-cols-12 gap-5">
                <Info title={'Free shipping'} body={'With a 30 day'} />
                {/* <div className="col-span-12 flex sm:col-span-6 lg:col-span-3">
        <div
          className="flex w-full items-center gap-4 rounded-lg bg-white p-5 transition-all duration-300 hover:shadow-lg xs:pl-[20%] sm:pl-5">
          <div className="rounded-full border-2">
            <i className="bi bi-truck flex p-3 text-[40px] text-primary-500"></i>
          </div>
          <div>
            <h6 className="font-bold capitalize">Free shipping</h6>
            <p className="break-all text-sm text-gray-400">Orders over $100</p>
          </div>
        </div>
                </div> */}
                <Info title={'Money back'} body={'Orders over $100'} />
                {/* <div className="col-span-12 flex sm:col-span-6 lg:col-span-3">
                    <div
                        className="flex w-full items-center gap-4 rounded-lg bg-white p-5 transition-all duration-300 hover:shadow-lg xs:pl-[20%] sm:pl-5">
                        <div className="rounded-full border-2">
                            <i
                                className="bi bi-cash-coin flex p-3 text-[40px] text-primary-500"></i>
                        </div>
                        <div>
                            <h6 className="font-bold capitalize">Money back</h6>
                            <p className="break-all text-sm text-gray-400">With a 30 day</p>
                        </div>
                    </div>
                </div> */}
                <Info title={'Secure payment'} body={'Secured payment'} />
                {/* <div className="col-span-12 flex sm:col-span-6 lg:col-span-3">
                    <div
                        className="flex w-full items-center gap-4 rounded-lg bg-white p-5 transition-all duration-300 hover:shadow-lg xs:pl-[20%] sm:pl-5">
                        <div className="rounded-full border-2">
                            <i
                                className="bi bi-shield-check flex p-3 text-[40px] text-primary-500"></i>
                        </div>
                        <div>
                            <h6 className="font-bold capitalize">Secure payment</h6>
                            <p className="break-all text-sm text-gray-400">Secured payment</p>
                        </div>
                    </div>
                </div> */}
                <Info title={'Online support'} body={'Support 24/7'} />
                {/* <div className="col-span-12 flex sm:col-span-6 lg:col-span-3">
                    <div
                        className="flex w-full items-center gap-4 rounded-lg bg-white p-5 transition-all duration-300 hover:shadow-lg xs:pl-[20%] sm:pl-5">
                        <div className="rounded-full border-2">
                            <i
                                className="bi bi-headset flex p-3 text-[40px] text-primary-500"></i>
                        </div>
                        <div>
                            <h6 className="font-bold capitalize">Online support</h6>
                            <p className="break-all text-sm text-gray-400">Support 24/7</p>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}
