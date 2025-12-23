import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function Product1Wrapper() {
  const swiperRef = useRef();
  return (
    <div className="products-1-section container mx-auto my-5 px-2 sm:px-8">
      <div
        className="liner-container mt-5 flex justify-center border-b-2 border-[rgba(119,119,119,.17)]">
        <h1
          className="mb-[-2px] inline-block border-b-2 border-primary-500 pb-3 text-2xl font-bold uppercase">
          Notebooks
        </h1>
      </div>
      <div className="grid grid-cols-12 gap-5">
        <div
          className="group relative col-span-3 my-5 hidden overflow-hidden rounded-l-lg xl:block">
          <div
            className="absolute z-[1] h-full w-full bg-gradient-to-t from-transparent to-black/70"></div>
          <img
            className="h-full w-full object-cover transition-all duration-300 group-hover:scale-110 hover:transform"
            src="img/categories/sliders/notebooks.jpg"
            alt="banner-img" />
          <div className="absolute left-0 top-0 flex h-full w-full items-center">
            <div className="z-[2] p-5">
              <h3
                className="text-lg font-bold uppercase text-primary-500 drop-shadow-xl">
                Notebooks
              </h3>
              <p className="my-5 text-white drop-shadow-md">
                Choose your laptop now!
              </p>
              <a
                className="relative inline-block overflow-hidden rounded-lg bg-primary-500 px-3 py-2 text-white after:absolute after:left-2/4 after:top-2/4 after:h-0 after:w-0 after:rounded-lg after:bg-primary-400 after:transition-all after:duration-300 after:content-[''] hover:after:left-0 hover:after:top-0 hover:after:z-[3] hover:after:h-full hover:after:w-full"
                href="#">
                <span className="relative z-[4]">Show more</span>
              </a>
            </div>
          </div>
        </div>
        <div className="cards-slider-2 swiper-container col-span-12 xl:col-span-9">
          <div
            className="swiper swiper-cards-2 group relative flex items-center py-5">
            <div className="swiper-wrapper">
              <Swiper
                onSwiper={(swiper) => { swiperRef.current = swiper }}
                slidesPerView={1}
                spaceBetween={20}
                loop={true}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
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
                }}
                navigation={{
                  nextEl: ".button-next",
                  prevEl: ".button-prev",
                }}
              >
                <SwiperSlide>
                  <div className="swiper-slide h-auto">
                    <div
                      className="card-container relative flex h-full flex-col overflow-hidden rounded-lg bg-white p-5 shadow-md transition-all duration-300 hover:z-[2] hover:-translate-y-2 hover:shadow-xl">
                      <div className="absolute right-[10px] top-[10px]">
                        <div className="p-[2px]">
                          <a
                            className="tippy tippy-left-wishlist wishlist-button flex h-9 w-9 cursor-pointer items-center justify-center gap-2 rounded-lg bg-black/30 transition-all duration-300 hover:bg-primary-400"
                            href="javascript:void(0)">
                            <i
                              className="bi bi-heart pointer-events-none flex text-white"></i>
                          </a>
                        </div>
                        <div className="p-[2px]">
                          <a
                            className="tippy tippy-left-card-view flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg bg-black/30 transition-all duration-300 hover:bg-primary-400"
                            href="javascript:void(0)"
                            data-target=".modal-quick">
                            <i
                              className="bi bi-eye pointer-events-none flex text-xl text-white"></i>
                          </a>
                        </div>
                      </div>
                      <div className="h-[190px] overflow-hidden rounded-lg">
                        <a href="#">
                          <img
                            className="h-full w-full object-contain"
                            src="img/cards/notebooks/note_1.jpg"
                            alt="product" />
                        </a>
                      </div>
                      <div className="my-2 flex justify-between">
                        <div className="" data-rater="4"></div>
                        <div>
                          <span
                            className="relative z-[4] rounded-md bg-green-300 px-2 py-1 text-xs font-bold uppercase text-white">
                            instock
                          </span>
                        </div>
                      </div>
                      <div className="my-1">
                        <a className="line-clamp-1break-all font-medium" href="#">
                          Apple Macbook Air 13
                        </a>
                      </div>
                      <div className="my-1">
                        <p className="line-clamp-2 text-sm text-gray-400">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          Itaque culpa, odio, qui praesentium dignissimos eaque
                          dolorum porro alias neque, eius animi ipsa voluptates.
                          Optio repellat tempora voluptas, dolores ipsam ad!
                        </p>
                      </div>
                      <div className="my-2 flex gap-2">
                        <span className="font-bold">Size:</span>
                        <ul className="flex gap-3">
                          <li>S</li>
                          <li>M</li>
                          <li>L</li>
                          <li>XL</li>
                        </ul>
                      </div>
                      <div className="my-2 flex gap-2">
                        <div className="block h-3 w-3 rounded-full bg-blue-600"></div>
                        <div className="block h-3 w-3 rounded-full bg-red-600"></div>
                        <div className="block h-3 w-3 rounded-full bg-yellow-600"></div>
                        <div className="block h-3 w-3 rounded-full bg-black"></div>
                      </div>
                      <div className="my-1">
                        <span className="text-lg font-bold">$37.00</span>
                      </div>
                      <div className="mt-auto">
                        <a
                          className="relative flex w-full items-center justify-center overflow-hidden rounded-lg bg-primary-500 p-2 transition-all duration-300 after:absolute after:left-2/4 after:top-2/4 after:h-0 after:w-0 after:rounded-lg after:bg-primary-400 after:transition-all after:duration-300 after:content-[''] hover:after:left-0 hover:after:top-0 hover:after:z-[3] hover:after:h-full hover:after:w-full"
                          href="#">
                          <span
                            className="relative z-[4] font-bold uppercase text-white">
                            View details
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide h-auto">
                    <div
                      className="card-container relative flex h-full flex-col overflow-hidden rounded-lg bg-white p-5 shadow-md transition-all duration-300 hover:z-[2] hover:-translate-y-2 hover:shadow-xl">
                      <div className="absolute right-[10px] top-[10px]">
                        <div className="p-[2px]">
                          <a
                            className="tippy tippy-left-wishlist wishlist-button flex h-9 w-9 cursor-pointer items-center justify-center gap-2 rounded-lg bg-black/30 transition-all duration-300 hover:bg-primary-400"
                            href="javascript:void(0)">
                            <i
                              className="bi bi-heart pointer-events-none flex text-white"></i>
                          </a>
                        </div>
                        <div className="p-[2px]">
                          <a
                            className="tippy tippy-left-card-view flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg bg-black/30 transition-all duration-300 hover:bg-primary-400"
                            href="javascript:void(0)"
                            data-target=".modal-quick">
                            <i
                              className="bi bi-eye pointer-events-none flex text-xl text-white"></i>
                          </a>
                        </div>
                      </div>
                      <div className="h-[190px] overflow-hidden rounded-lg">
                        <a href="#">
                          <img
                            className="h-full w-full object-contain"
                            src="img/cards/notebooks/note_2.jpg"
                            alt="product" />
                        </a>
                      </div>
                      <div className="my-2 flex justify-between">
                        <div className="" data-rater="4"></div>
                        <div>
                          <span
                            className="relative z-[4] rounded-md bg-green-300 px-2 py-1 text-xs font-bold uppercase text-white">
                            instock
                          </span>
                        </div>
                      </div>
                      <div className="my-1">
                        <a className="line-clamp-1break-all font-medium" href="#">
                          Asus ZenBook 14
                        </a>
                      </div>
                      <div className="my-1">
                        <p className="line-clamp-2 text-sm text-gray-400">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          Itaque culpa, odio, qui praesentium dignissimos eaque
                          dolorum porro alias neque, eius animi ipsa voluptates.
                          Optio repellat tempora voluptas, dolores ipsam ad!
                        </p>
                      </div>
                      <div className="my-2 flex gap-2">
                        <span className="font-bold">Size:</span>
                        <ul className="flex gap-3">
                          <li>S</li>
                          <li>M</li>
                          <li>L</li>
                          <li>XL</li>
                        </ul>
                      </div>
                      <div className="my-2 flex gap-2">
                        <div className="block h-3 w-3 rounded-full bg-blue-600"></div>
                        <div className="block h-3 w-3 rounded-full bg-red-600"></div>
                        <div className="block h-3 w-3 rounded-full bg-yellow-600"></div>
                        <div className="block h-3 w-3 rounded-full bg-black"></div>
                      </div>
                      <div className="my-1">
                        <span className="text-lg font-bold">$37.00</span>
                      </div>
                      <div className="mt-auto">
                        <a
                          className="relative flex w-full items-center justify-center overflow-hidden rounded-lg bg-primary-500 p-2 transition-all duration-300 after:absolute after:left-2/4 after:top-2/4 after:h-0 after:w-0 after:rounded-lg after:bg-primary-400 after:transition-all after:duration-300 after:content-[''] hover:after:left-0 hover:after:top-0 hover:after:z-[3] hover:after:h-full hover:after:w-full"
                          href="#">
                          <span
                            className="relative z-[4] font-bold uppercase text-white">
                            View details
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide h-auto">
                    <div
                      className="card-container relative flex h-full flex-col overflow-hidden rounded-lg bg-white p-5 shadow-md transition-all duration-300 hover:z-[2] hover:-translate-y-2 hover:shadow-xl">
                      <div className="absolute right-[10px] top-[10px]">
                        <div className="p-[2px]">
                          <a
                            className="tippy tippy-left-wishlist wishlist-button flex h-9 w-9 cursor-pointer items-center justify-center gap-2 rounded-lg bg-black/30 transition-all duration-300 hover:bg-primary-400"
                            href="javascript:void(0)">
                            <i
                              className="bi bi-heart pointer-events-none flex text-white"></i>
                          </a>
                        </div>
                        <div className="p-[2px]">
                          <a
                            className="tippy tippy-left-card-view flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg bg-black/30 transition-all duration-300 hover:bg-primary-400"
                            href="javascript:void(0)"
                            data-target=".modal-quick">
                            <i
                              className="bi bi-eye pointer-events-none flex text-xl text-white"></i>
                          </a>
                        </div>
                      </div>
                      <div className="h-[190px] overflow-hidden rounded-lg">
                        <a href="#">
                          <img
                            className="h-full w-full object-contain"
                            src="img/cards/notebooks/note_3.jpg"
                            alt="product" />
                        </a>
                      </div>
                      <div className="my-2 flex justify-between">
                        <div className="" data-rater="4"></div>
                        <div>
                          <span
                            className="relative z-[4] rounded-md bg-green-300 px-2 py-1 text-xs font-bold uppercase text-white">
                            instock
                          </span>
                        </div>
                      </div>
                      <div className="my-1">
                        <a className="line-clamp-1break-all font-medium" href="#">
                          Lenovo V15
                        </a>
                      </div>
                      <div className="my-1">
                        <p className="line-clamp-2 text-sm text-gray-400">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          Itaque culpa, odio, qui praesentium dignissimos eaque
                          dolorum porro alias neque, eius animi ipsa voluptates.
                          Optio repellat tempora voluptas, dolores ipsam ad!
                        </p>
                      </div>
                      <div className="my-2 flex gap-2">
                        <span className="font-bold">Size:</span>
                        <ul className="flex gap-3">
                          <li>S</li>
                          <li>M</li>
                          <li>L</li>
                          <li>XL</li>
                        </ul>
                      </div>
                      <div className="my-2 flex gap-2">
                        <div className="block h-3 w-3 rounded-full bg-blue-600"></div>
                        <div className="block h-3 w-3 rounded-full bg-red-600"></div>
                        <div className="block h-3 w-3 rounded-full bg-yellow-600"></div>
                        <div className="block h-3 w-3 rounded-full bg-black"></div>
                      </div>
                      <div className="my-1">
                        <span className="text-lg font-bold">$37.00</span>
                      </div>
                      <div className="mt-auto">
                        <a
                          className="relative flex w-full items-center justify-center overflow-hidden rounded-lg bg-primary-500 p-2 transition-all duration-300 after:absolute after:left-2/4 after:top-2/4 after:h-0 after:w-0 after:rounded-lg after:bg-primary-400 after:transition-all after:duration-300 after:content-[''] hover:after:left-0 hover:after:top-0 hover:after:z-[3] hover:after:h-full hover:after:w-full"
                          href="#">
                          <span
                            className="relative z-[4] font-bold uppercase text-white">
                            View details
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide h-auto">
                    <div
                      className="card-container relative flex h-full flex-col overflow-hidden rounded-lg bg-white p-5 shadow-md transition-all duration-300 hover:z-[2] hover:-translate-y-2 hover:shadow-xl">
                      <div className="absolute right-[10px] top-[10px]">
                        <div className="p-[2px]">
                          <a
                            className="tippy tippy-left-wishlist wishlist-button flex h-9 w-9 cursor-pointer items-center justify-center gap-2 rounded-lg bg-black/30 transition-all duration-300 hover:bg-primary-400"
                            href="javascript:void(0)">
                            <i
                              className="bi bi-heart pointer-events-none flex text-white"></i>
                          </a>
                        </div>
                        <div className="p-[2px]">
                          <a
                            className="tippy tippy-left-card-view flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg bg-black/30 transition-all duration-300 hover:bg-primary-400"
                            href="javascript:void(0)"
                            data-target=".modal-quick">
                            <i
                              className="bi bi-eye pointer-events-none flex text-xl text-white"></i>
                          </a>
                        </div>
                      </div>
                      <div className="h-[190px] overflow-hidden rounded-lg">
                        <a href="#">
                          <img
                            className="h-full w-full object-contain"
                            src="img/cards/notebooks/note_4.jpg"
                            alt="product" />
                        </a>
                      </div>
                      <div className="my-2 flex justify-between">
                        <div className="" data-rater="4"></div>
                        <div>
                          <span
                            className="relative z-[4] rounded-md bg-green-300 px-2 py-1 text-xs font-bold uppercase text-white">
                            instock
                          </span>
                        </div>
                      </div>
                      <div className="my-1">
                        <a className="line-clamp-1break-all font-medium" href="#">
                          HP 255 G7
                        </a>
                      </div>
                      <div className="my-1">
                        <p className="line-clamp-2 text-sm text-gray-400">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          Itaque culpa, odio, qui praesentium dignissimos eaque
                          dolorum porro alias neque, eius animi ipsa voluptates.
                          Optio repellat tempora voluptas, dolores ipsam ad!
                        </p>
                      </div>
                      <div className="my-2 flex gap-2">
                        <span className="font-bold">Size:</span>
                        <ul className="flex gap-3">
                          <li>S</li>
                          <li>M</li>
                          <li>L</li>
                          <li>XL</li>
                        </ul>
                      </div>
                      <div className="my-2 flex gap-2">
                        <div className="block h-3 w-3 rounded-full bg-blue-600"></div>
                        <div className="block h-3 w-3 rounded-full bg-red-600"></div>
                        <div className="block h-3 w-3 rounded-full bg-yellow-600"></div>
                        <div className="block h-3 w-3 rounded-full bg-black"></div>
                      </div>
                      <div className="my-1">
                        <span className="text-lg font-bold">$37.00</span>
                      </div>
                      <div className="mt-auto">
                        <a
                          className="relative flex w-full items-center justify-center overflow-hidden rounded-lg bg-primary-500 p-2 transition-all duration-300 after:absolute after:left-2/4 after:top-2/4 after:h-0 after:w-0 after:rounded-lg after:bg-primary-400 after:transition-all after:duration-300 after:content-[''] hover:after:left-0 hover:after:top-0 hover:after:z-[3] hover:after:h-full hover:after:w-full"
                          href="#">
                          <span
                            className="relative z-[4] font-bold uppercase text-white">
                            View details
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide h-auto">
                    <div
                      className="card-container relative flex h-full flex-col overflow-hidden rounded-lg bg-white p-5 shadow-md transition-all duration-300 hover:z-[2] hover:-translate-y-2 hover:shadow-xl">
                      <div className="absolute right-[10px] top-[10px]">
                        <div className="p-[2px]">
                          <a
                            className="tippy tippy-left-wishlist wishlist-button flex h-9 w-9 cursor-pointer items-center justify-center gap-2 rounded-lg bg-black/30 transition-all duration-300 hover:bg-primary-400"
                            href="javascript:void(0)">
                            <i
                              className="bi bi-heart pointer-events-none flex text-white"></i>
                          </a>
                        </div>
                        <div className="p-[2px]">
                          <a
                            className="tippy tippy-left-card-view flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg bg-black/30 transition-all duration-300 hover:bg-primary-400"
                            href="javascript:void(0)"
                            data-target=".modal-quick">
                            <i
                              className="bi bi-eye pointer-events-none flex text-xl text-white"></i>
                          </a>
                        </div>
                      </div>
                      <div className="h-[190px] overflow-hidden rounded-lg">
                        <a href="#">
                          <img
                            className="h-full w-full object-contain"
                            src="img/cards/notebooks/note_5.jpg"
                            alt="product" />
                        </a>
                      </div>
                      <div className="my-2 flex justify-between">
                        <div className="" data-rater="4"></div>
                        <div>
                          <span
                            className="relative z-[4] rounded-md bg-green-300 px-2 py-1 text-xs font-bold uppercase text-white">
                            instock
                          </span>
                        </div>
                      </div>
                      <div className="my-1">
                        <a className="line-clamp-1break-all font-medium" href="#">
                          MSI Stealth
                        </a>
                      </div>
                      <div className="my-1">
                        <p className="line-clamp-2 text-sm text-gray-400">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          Itaque culpa, odio, qui praesentium dignissimos eaque
                          dolorum porro alias neque, eius animi ipsa voluptates.
                          Optio repellat tempora voluptas, dolores ipsam ad!
                        </p>
                      </div>
                      <div className="my-2 flex gap-2">
                        <span className="font-bold">Size:</span>
                        <ul className="flex gap-3">
                          <li>S</li>
                          <li>M</li>
                          <li>L</li>
                          <li>XL</li>
                        </ul>
                      </div>
                      <div className="my-2 flex gap-2">
                        <div className="block h-3 w-3 rounded-full bg-blue-600"></div>
                        <div className="block h-3 w-3 rounded-full bg-red-600"></div>
                        <div className="block h-3 w-3 rounded-full bg-yellow-600"></div>
                        <div className="block h-3 w-3 rounded-full bg-black"></div>
                      </div>
                      <div className="my-1">
                        <span className="text-lg font-bold">$37.00</span>
                      </div>
                      <div className="mt-auto">
                        <a
                          className="relative flex w-full items-center justify-center overflow-hidden rounded-lg bg-primary-500 p-2 transition-all duration-300 after:absolute after:left-2/4 after:top-2/4 after:h-0 after:w-0 after:rounded-lg after:bg-primary-400 after:transition-all after:duration-300 after:content-[''] hover:after:left-0 hover:after:top-0 hover:after:z-[3] hover:after:h-full hover:after:w-full"
                          href="#">
                          <span
                            className="relative z-[4] font-bold uppercase text-white">
                            View details
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide h-auto">
                    <div
                      className="card-container relative flex h-full flex-col overflow-hidden rounded-lg bg-white p-5 shadow-md transition-all duration-300 hover:z-[2] hover:-translate-y-2 hover:shadow-xl">
                      <div className="absolute right-[10px] top-[10px]">
                        <div className="p-[2px]">
                          <a
                            className="tippy tippy-left-wishlist wishlist-button flex h-9 w-9 cursor-pointer items-center justify-center gap-2 rounded-lg bg-black/30 transition-all duration-300 hover:bg-primary-400"
                            href="javascript:void(0)">
                            <i
                              className="bi bi-heart pointer-events-none flex text-white"></i>
                          </a>
                        </div>
                        <div className="p-[2px]">
                          <a
                            className="tippy tippy-left-card-view flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg bg-black/30 transition-all duration-300 hover:bg-primary-400"
                            href="javascript:void(0)"
                            data-target=".modal-quick">
                            <i
                              className="bi bi-eye pointer-events-none flex text-xl text-white"></i>
                          </a>
                        </div>
                      </div>
                      <div className="h-[190px] overflow-hidden rounded-lg">
                        <a href="#">
                          <img
                            className="h-full w-full object-contain"
                            src="img/cards/notebooks/note_6.jpg"
                            alt="product" />
                        </a>
                      </div>
                      <div className="my-2 flex justify-between">
                        <div className="" data-rater="4"></div>
                        <div>
                          <span
                            className="relative z-[4] rounded-md bg-green-300 px-2 py-1 text-xs font-bold uppercase text-white">
                            instock
                          </span>
                        </div>
                      </div>
                      <div className="my-1">
                        <a className="line-clamp-1break-all font-medium" href="#">
                          Dell Inspiron
                        </a>
                      </div>
                      <div className="my-1">
                        <p className="line-clamp-2 text-sm text-gray-400">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          Itaque culpa, odio, qui praesentium dignissimos eaque
                          dolorum porro alias neque, eius animi ipsa voluptates.
                          Optio repellat tempora voluptas, dolores ipsam ad!
                        </p>
                      </div>
                      <div className="my-2 flex gap-2">
                        <span className="font-bold">Size:</span>
                        <ul className="flex gap-3">
                          <li>S</li>
                          <li>M</li>
                          <li>L</li>
                          <li>XL</li>
                        </ul>
                      </div>
                      <div className="my-2 flex gap-2">
                        <div className="block h-3 w-3 rounded-full bg-blue-600"></div>
                        <div className="block h-3 w-3 rounded-full bg-red-600"></div>
                        <div className="block h-3 w-3 rounded-full bg-yellow-600"></div>
                        <div className="block h-3 w-3 rounded-full bg-black"></div>
                      </div>
                      <div className="my-1">
                        <span className="text-lg font-bold">$37.00</span>
                      </div>
                      <div className="mt-auto">
                        <a
                          className="relative flex w-full items-center justify-center overflow-hidden rounded-lg bg-primary-500 p-2 transition-all duration-300 after:absolute after:left-2/4 after:top-2/4 after:h-0 after:w-0 after:rounded-lg after:bg-primary-400 after:transition-all after:duration-300 after:content-[''] hover:after:left-0 hover:after:top-0 hover:after:z-[3] hover:after:h-full hover:after:w-full"
                          href="#">
                          <span
                            className="relative z-[4] font-bold uppercase text-white">
                            View details
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
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
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </div >
  )
}
