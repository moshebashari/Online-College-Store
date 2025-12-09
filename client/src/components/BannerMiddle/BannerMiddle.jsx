import React from 'react'


export default function BannerMiddle() {
    
    return (
        <div className="banners-section-2 container mx-auto my-5 px-2 sm:px-8">
            <div className="grid grid-cols-12 gap-5">
                <div
                    className="group relative col-span-12 h-[300px] overflow-hidden rounded-lg sm:col-span-6">
                    <div
                        className="absolute z-[1] h-full w-full bg-gradient-to-t from-transparent to-black/70"></div>
                    <img
                        className="h-full w-full object-cover transition-all duration-300 group-hover:scale-110 hover:transform"
                        src="img/categories/sec-notebooks.jpg"
                        alt="banner-img" />
                    <div className="absolute left-0 top-0 flex h-full w-full items-center">
                        <div className="z-[2] p-5">
                            <h3
                                className="text-lg font-bold uppercase text-primary-500 drop-shadow-xl">
                                Notebooks
                            </h3>
                            <p className="my-5 text-white drop-shadow-md">
                                Choose the ideal laptop for you!
                            </p>
                            <a
                                className="relative inline-block overflow-hidden rounded-lg bg-primary-500 px-3 py-2 text-white after:absolute after:left-2/4 after:top-2/4 after:h-0 after:w-0 after:rounded-lg after:bg-primary-400 after:transition-all after:duration-300 after:content-[''] hover:after:left-0 hover:after:top-0 hover:after:z-[3] hover:after:h-full hover:after:w-full"
                                href="#">
                                <span className="relative z-[4]">Show more</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div
                    className="group relative col-span-12 h-[300px] overflow-hidden rounded-lg sm:col-span-6">
                    <div
                        className="absolute z-[1] h-full w-full bg-gradient-to-t from-transparent to-black/70"></div>
                    <img
                        className="h-full w-full object-cover transition-all duration-300 group-hover:scale-110 hover:transform"
                        src="img/categories/sec-desktops.jpg"
                        alt="banner-img" />
                    <div className="absolute left-0 top-0 flex h-full w-full items-center">
                        <div className="z-[2] p-5">
                            <h3
                                className="text-lg font-bold uppercase text-primary-500 drop-shadow-xl">
                                Desktops
                            </h3>
                            <p className="my-5 text-white drop-shadow-md">
                                Build your PC at the best price!
                            </p>
                            <a
                                className="relative inline-block overflow-hidden rounded-lg bg-primary-500 px-3 py-2 text-white after:absolute after:left-2/4 after:top-2/4 after:h-0 after:w-0 after:rounded-lg after:bg-primary-400 after:transition-all after:duration-300 after:content-[''] hover:after:left-0 hover:after:top-0 hover:after:z-[3] hover:after:h-full hover:after:w-full"
                                href="#">
                                <span className="relative z-[4]">Show more</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
