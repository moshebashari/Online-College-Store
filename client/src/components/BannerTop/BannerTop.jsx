import React, { useRef } from 'react'
import { SwiperSlide } from 'swiper/react'
import { Swiper } from 'swiper/react'

export default function BannerTop() {

  const swiperRef = useRef();

  return (
    <div className="banners-section container mx-auto my-5 px-2 sm:px-8">
      <div className="grid grid-cols-12 gap-5">
        <div
          className="swiper-container col-span-12 overflow-hidden rounded-lg md:col-span-8">
          <div className="swiper swiper-banner group relative flex items-center">

            <Swiper
              onSwiper={(swiper) => { swiperRef.current = swiper }}
              className='swiper-banner'
              spaceBetween={30}
              centeredSlides={true}
              loop={true}
              effect={"fade"}
              fadeeffec={{
                crossFade: true,
              }}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              pagination={{
                el: ".swiper-pagination",
                clickable: true,
              }}
              navigation={{
                nextEl: ".button-next",
                prevEl: ".button-prev",
              }}
            >
              <div className="swiper-wrapper max-h-[377px]">
                <SwiperSlide>
                  <div className="swiper-slide">
                    <img src="./img/banner/banner-1.jpg" alt="banner 1" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <img src="./img/banner/banner-2.jpg" alt="banner 2" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <img src="./img/banner/banner-3.jpg" alt="banner 3" />
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
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
            <div className="swiper-pagination"></div>
          </div>
        </div>
        <div
          className="group relative col-span-4 hidden overflow-hidden rounded-lg md:block">
          <div
            className="absolute z-[1] h-full w-full bg-gradient-to-t from-transparent to-black/70"></div>
          <img
            className="h-full w-full object-cover transition-all duration-300 group-hover:scale-110 hover:transform"
            src="/img/categories/sec-desktop-g.jpg"
            alt="banner-img" />
          <div className="absolute left-0 top-0 flex h-full w-full items-center">
            <div className="z-[2] p-5">
              <h3
                className="text-lg font-bold uppercase text-primary-500 drop-shadow-xl">
                Armed pc gamer
              </h3>
              <p className="my-5 text-white drop-shadow-md">
                Choose your pc and play!
              </p>
              <a
                className="relative inline-block overflow-hidden rounded-lg bg-primary-500 px-3 py-2 text-white after:absolute after:left-2/4 after:top-2/4 after:h-0 after:w-0 after:rounded-lg after:bg-primary-400 after:transition-all after:duration-300 after:content-[''] hover:after:left-0 hover:after:top-0 hover:after:z-[3] hover:after:h-full hover:after:w-full"
                href="#">
                <span className="relative z-[4]">Shop now</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
