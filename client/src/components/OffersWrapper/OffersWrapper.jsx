import React, { useEffect, useRef, useState } from 'react'
import ProductCard from '../ProductCard/ProductCard';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

export default function OffersWrapper() {

    const [data, setData] = useState([])
    const swiperRef = useRef();

    useEffect(() => {
        const fetchData = async () => {
            const results = await fetch('http://localhost:5000/').then(res => res.json());
            setData(results);
        }

        fetchData();
    }, [])


    return (
        <div className="offers-section container mx-auto my-5 px-2 sm:px-8">
            <div
                className="liner-container mt-5 flex justify-center border-b-2 border-[rgba(119,119,119,.17)]">
                <h1
                    className="mb-[-2px] inline-block border-b-2 border-primary-500 pb-3 text-2xl font-bold uppercase">
                    Offers
                </h1>
            </div>

            <div className="swiper swiper-cards-1 group relative flex items-center py-5">
                <div className="swiper-wrapper">
                    <Swiper
                        onSwiper={(swiper) => { swiperRef.current = swiper }}
                        className='swiper-wrapper'
                        slidesPerView={4}
                        spaceBetween={20}
                        // loop={true}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false
                        }}
                        breakpoints={{
                            560: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            760: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            1280: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            }
                        }}
                        navigation={{
                            nextEl: ".button-next",
                            prevEl: ".button-prev",
                        }}
                    >

                        {data.map(product => <SwiperSlide key={product.id} className="swiper-slide h-auto"><ProductCard product={product} /></SwiperSlide>)}

                    </Swiper >
                </div>
                <div
                    className="button-next absolute -right-16 z-20 flex h-10 w-10 select-none items-center justify-center rounded bg-black/30 text-xl text-white shadow transition-all duration-300 group-hover:right-4 hover:bg-primary-500 hover:shadow-md"
                    onClick={() => swiperRef.current.slideNext()}>
                    &#10095;
                </div>
                <div
                    className="button-prev absolute -left-16 z-20 flex h-10 w-10 select-none items-center justify-center rounded bg-black/30 text-xl text-white shadow transition-all duration-300 group-hover:left-4 hover:bg-primary-500 hover:shadow-md"
                    onClick={() => swiperRef.current.slidePrev()}>
                    &#10094;
                </div>

            </div>
        </div >
    )
}
