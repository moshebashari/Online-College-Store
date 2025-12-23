import React, { useState, useEffect } from 'react'
import { fetchCategories } from '../../utils';
import CategoryCard from './CategoryCard';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination} from 'swiper/modules'
// import 'swiper/css'
// import 'swiper/css/pagination'
// import 'swiper/css/bundle'

export default function CategoriesWrapper() {
    const [categories, setCategories] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadCategories = async () => {
            try {
                const data = await fetchCategories();
                const category = [[]];
                let j = 0
                for (let i = 0; i < data.length; i++) {
                    if (i === 8) {
                        category.push([]);
                        j++;
                    }
                    category[j].push(data[i]);
                }
                setCategories(category);
                // console.log(category);
            } catch (error) {
                console.error('Error loading product:', error);
            } finally {
                setLoading(false);
            }
        };
        loadCategories()


    }, []);

    if (loading) {
        return (
            <React.Fragment>
                <Header />
                <div className="container mx-auto my-5 px-2 sm:px-8">
                    <div className="text-center py-5">Loading product...</div>
                </div>
                <Footer />
            </React.Fragment>
        );
    }

    return (
        <div className="categories-section container mx-auto my-5 px-2 sm:px-8">
            <div
                className="liner-container mb-5 flex justify-center border-b-2 border-[rgba(119,119,119,.17)]">
                <h1
                    className="mb-[-2px] inline-block border-b-2 border-primary-500 pb-3 text-2xl font-bold uppercase">
                    Categories
                </h1>
            </div>
            <div
                className="swiper-container col-span-12 overflow-hidden rounded-lg md:col-span-8">
                <div
                    className="swiper swiper-default group relative flex items-center py-5">
                    <div className="swiper-wrapper">
                        <Swiper
                            modules={[Pagination]}
                            spaceBetween={30}
                            centeredSlides={true}
                            // loop= {true}
                            pagination={{
                                el: ".swiper-pagination",
                                clickable: true,
                            }}
                        >
                            {categories.map(arr => <SwiperSlide>
                                <div className="grid grid-cols-3 xs:grid-cols-6 sm:grid-cols-9 lg:grid-cols-12">
                                    {arr.map(cateogry => <CategoryCard name={cateogry.name} key={cateogry.id} />)}
                                </div>
                            </SwiperSlide>)}
                        </Swiper>
                        {/* <div className="swiper-slide">
                            <div
                                className="grid grid-cols-3 xs:grid-cols-6 sm:grid-cols-9 lg:grid-cols-12">
                                <div className="col-span-3 flex border">
                                    <a
                                        className="flex w-full justify-center bg-white p-5 transition-all duration-300 hover:relative hover:z-[2] hover:shadow-xl"
                                        href="#">
                                        <div>
                                            <i
                                                className="bi bi-gpu-card mb-2 flex justify-center text-[40px] text-primary-500"></i>
                                            <span className="text-gray-40">Video Cards</span>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-span-3 flex border">
                                    <a
                                        className="flex w-full justify-center bg-white p-5 transition-all duration-300 hover:relative hover:z-[2] hover:shadow-xl"
                                        href="#">
                                        <div>
                                            <i
                                                className="bi bi-plug-fill mb-2 flex justify-center text-[40px] text-primary-500"></i>
                                            <span className="text-gray-40">Power Supplies</span>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-span-3 flex border">
                                    <a
                                        className="flex w-full justify-center bg-white p-5 transition-all duration-300 hover:relative hover:z-[2] hover:shadow-xl"
                                        href="#">
                                        <div>
                                            <i
                                                className="bi bi-motherboard-fill mb-2 flex justify-center text-[40px] text-primary-500"></i>
                                            <span className="text-gray-40">Motherboard</span>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-span-3 flex border">
                                    <a
                                        className="flex w-full justify-center bg-white p-5 transition-all duration-300 hover:relative hover:z-[2] hover:shadow-xl"
                                        href="#">
                                        <div>
                                            <i
                                                className="bi bi-cpu-fill mb-2 flex justify-center text-[40px] text-primary-500"></i>
                                            <span className="text-gray-40">Processors</span>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-span-3 flex border">
                                    <a
                                        className="flex w-full justify-center bg-white p-5 transition-all duration-300 hover:relative hover:z-[2] hover:shadow-xl"
                                        href="#">
                                        <div>
                                            <i
                                                className="bi bi-memory mb-2 flex justify-center text-[40px] text-primary-500"></i>
                                            <span className="text-gray-40">Memory Ram</span>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-span-3 flex border">
                                    <a
                                        className="flex w-full justify-center bg-white p-5 transition-all duration-300 hover:relative hover:z-[2] hover:shadow-xl"
                                        href="#">
                                        <div>
                                            <i
                                                className="bi bi-device-hdd-fill mb-2 flex justify-center text-[40px] text-primary-500"></i>
                                            <span className="text-gray-40">Hard Drives</span>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-span-3 flex border">
                                    <a
                                        className="flex w-full justify-center bg-white p-5 transition-all duration-300 hover:relative hover:z-[2] hover:shadow-xl"
                                        href="#">
                                        <div>
                                            <i
                                                className="bi bi-device-ssd-fill mb-2 flex justify-center text-[40px] text-primary-500"></i>
                                            <span className="text-gray-40">SSD</span>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-span-3 flex border">
                                    <a
                                        className="flex w-full justify-center bg-white p-5 transition-all duration-300 hover:relative hover:z-[2] hover:shadow-xl"
                                        href="#">
                                        <div>
                                            <i
                                                className="bi bi-pc mb-2 flex justify-center text-[40px] text-primary-500"></i>
                                            <span className="text-gray-40">Cases</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div
                                className="grid grid-cols-3 xs:grid-cols-6 sm:grid-cols-9 lg:grid-cols-12">
                                <div className="col-span-3 flex border">
                                    <a
                                        className="flex w-full justify-center bg-white p-5 transition-all duration-300 hover:relative hover:z-[2] hover:shadow-xl"
                                        href="#">
                                        <div>
                                            <i
                                                className="bi bi-mouse-fill mb-2 flex justify-center text-[40px] text-primary-500"></i>
                                            <span className="text-gray-40">Mouses</span>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-span-3 flex border">
                                    <a
                                        className="flex w-full justify-center bg-white p-5 transition-all duration-300 hover:relative hover:z-[2] hover:shadow-xl"
                                        href="#">
                                        <div>
                                            <i
                                                className="bi bi-keyboard-fill mb-2 flex justify-center text-[40px] text-primary-500"></i>
                                            <span className="text-gray-40">Keyboards</span>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-span-3 flex border">
                                    <a
                                        className="flex w-full justify-center bg-white p-5 transition-all duration-300 hover:relative hover:z-[2] hover:shadow-xl"
                                        href="#">
                                        <div>
                                            <i
                                                className="bi bi-printer-fill mb-2 flex justify-center text-[40px] text-primary-500"></i>
                                            <span className="text-gray-40">Printers</span>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-span-3 flex border">
                                    <a
                                        className="flex w-full justify-center bg-white p-5 transition-all duration-300 hover:relative hover:z-[2] hover:shadow-xl"
                                        href="#">
                                        <div>
                                            <i
                                                className="bi bi-laptop mb-2 flex justify-center text-[40px] text-primary-500"></i>
                                            <span className="text-gray-40">Notebooks</span>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-span-3 flex border">
                                    <a
                                        className="flex w-full justify-center bg-white p-5 transition-all duration-300 hover:relative hover:z-[2] hover:shadow-xl"
                                        href="#">
                                        <div>
                                            <i
                                                className="bi bi-phone-fill mb-2 flex justify-center text-[40px] text-primary-500"></i>
                                            <span className="text-gray-40">Phones</span>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-span-3 flex border">
                                    <a
                                        className="flex w-full justify-center bg-white p-5 transition-all duration-300 hover:relative hover:z-[2] hover:shadow-xl"
                                        href="#">
                                        <div>
                                            <i
                                                className="bi bi-tablet-landscape-fill mb-2 flex justify-center text-[40px] text-primary-500"></i>
                                            <span className="text-gray-40">Tablets</span>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-span-3 flex border">
                                    <a
                                        className="flex w-full justify-center bg-white p-5 transition-all duration-300 hover:relative hover:z-[2] hover:shadow-xl"
                                        href="#">
                                        <div>
                                            <i
                                                className="bi bi-display mb-2 flex justify-center text-[40px] text-primary-500"></i>
                                            <span className="text-gray-40">Monitors</span>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-span-3 flex border">
                                    <a
                                        className="flex w-full justify-center bg-white p-5 transition-all duration-300 hover:relative hover:z-[2] hover:shadow-xl"
                                        href="#">
                                        <div>
                                            <i
                                                className="bi bi-usb-drive-fill mb-2 flex justify-center text-[40px] text-primary-500"></i>
                                            <span className="text-gray-40">Pendrives</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    <div
                        className="swiper-pagination !bottom-[unset] !top-[-5px] text-right"></div>
                </div>
            </div>
        </div >
    )
}
