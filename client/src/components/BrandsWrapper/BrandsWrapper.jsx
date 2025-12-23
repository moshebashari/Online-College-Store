import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import BrandCard from './BrandCard';


export default function BrandsWrapper() {
    const brandsArr = ["amd", 'asrock', 'asus', 'corsair', 'genius', 'gigabyte', 'hp', 'intel'
        , 'kingston', 'lenovo', 'logitech', 'msi', 'nvidia', 'philips', 'redragon', 'samsung']
    const [brands, setBrands] = useState(brandsArr);
    const swiperRef = useRef();

    return (
        <div className="brands-section container mx-auto my-5 px-2 sm:px-8">
            <div className="swiper swiper-brands group relative flex items-center">
                <div className="swiper-wrapper flex select-none items-center">
                    <Swiper
                        className='swiper-wrapper'
                        onSwiper={(swiper) => { swiperRef.current = swiper }}
                        slidesPerView={1}
                        spaceBetween={30}
                        // loop={true}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false
                        }}
                        breakpoints={{
                            340: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            440: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            540: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },
                            640: {
                                slidesPerView: 5,
                                spaceBetween: 20,
                            },
                            640: {
                                slidesPerView: 7,
                                spaceBetween: 20,
                            },
                        }}
                    >
                        {brands.map(brand => <SwiperSlide> <BrandCard brand={brand} /> </SwiperSlide>)}
                    </Swiper>
                </div>
                <div
                    className="button-next absolute -right-16 z-20 flex h-10 w-10 select-none items-center justify-center text-2xl text-black transition-all duration-300 group-hover:right-4 hover:text-primary-500"
                    onClick={() => swiperRef.current.slideNext()}>
                    &#10095;
                </div>
                <div
                    className="button-prev absolute -left-16 z-20 flex h-10 w-10 select-none items-center justify-center text-2xl text-black transition-all duration-300 group-hover:left-4 hover:text-primary-500"
                    onClick={() => swiperRef.current.slidePrev()}>
                    &#10094;
                </div>
            </div>
        </div >
    )
}
