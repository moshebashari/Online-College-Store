import React from 'react'
import FooterLink from './FooterLink';


export default function Footer() {
    return (
        <footer className="footer-section mt-auto w-full bg-[#0b0d17] text-gray-400">
            <div className="container mx-auto grid grid-cols-12 px-4 sm:px-8">
                <div className="col-span-12 py-[50px]">
                    <div className="grid grid-cols-12 gap-2">
                        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                            <div className="pb-6">
                                <img src="img/logo.png" className="h-[40px]" alt="logo" />
                            </div>
                            <div>
                                <div className="flex items-center gap-[10px] py-2">
                                    <i
                                        className="bi bi-envelope-fill flex text-xl text-primary-500"></i>
                                    <a className="break-all" href="#">megabyte@example.com</a>
                                </div>
                                <div className="flex items-center gap-[10px] py-2">
                                    <i
                                        className="bi bi-telephone-fill flex text-xl text-primary-500"></i>
                                    <a className="break-all" href="#">(+54) 2284-123456789</a>
                                </div>
                                <div className="flex items-center gap-[10px] py-2">
                                    <i
                                        className="bi bi-geo-alt-fill flex text-xl text-primary-500"></i>
                                    <span className="break-all">Colón 1234, Olavarría</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 py-5 sm:col-span-6 sm:py-0 lg:col-span-4">
                            <h3 className="pb-2 font-semibold text-gray-300">Useful Links</h3>
                            <div>
                                <ul className="flex flex-col flex-wrap gap-2 text-sm xs:max-h-[200px]">
                                    <FooterLink title="Terms &amp; Conditions" />
                                    {/* <li
                  className="group relative flex items-center hover:text-primary-500">
                  <i
                    className="bi bi-circle-fill invisible absolute -left-4 flex text-[6px] text-primary-500 group-hover:visible"></i>
                  <a
                    href="#"
                    className="transition-all duration-300 group-hover:text-white">
                    Terms &amp; Conditions
                  </a>
                </li> */}
                                    <FooterLink title=" New products" />
                                    {/* <li
                  className="group relative flex items-center hover:text-primary-500">
                  <i
                    className="bi bi-circle-fill invisible absolute -left-4 flex text-[6px] text-primary-500 group-hover:visible"></i>
                  <a
                    href="#"
                    className="transition-all duration-300 group-hover:text-white">
                    New products
                  </a>
                </li> */}
                                    <FooterLink title="Best sales" />

                                    {/* <li
                  className="group relative flex items-center hover:text-primary-500">
                  <i
                    className="bi bi-circle-fill invisible absolute -left-4 flex text-[6px] text-primary-500 group-hover:visible"></i>
                  <a
                    href="#"
                    className="transition-all duration-300 group-hover:text-white">
                    Best sales
                  </a>
                </li> */}
                                    <FooterLink title="Secure payment" />
                                    {/* <li
                  className="group relative flex items-center hover:text-primary-500">
                  <i
                    className="bi bi-circle-fill invisible absolute -left-4 flex text-[6px] text-primary-500 group-hover:visible"></i>
                  <a
                    href="#"
                    className="transition-all duration-300 group-hover:text-white">
                    Secure payment
                  </a>
                </li> */}
                                    <FooterLink title="Services" />

                                    {/* <li
                  className="group relative flex items-center hover:text-primary-500">
                  <i
                    className="bi bi-circle-fill invisible absolute -left-4 flex text-[6px] text-primary-500 group-hover:visible"></i>
                  <a
                    href="#"
                    className="transition-all duration-300 group-hover:text-white">
                    Services
                  </a>
                </li> */}
                                    <FooterLink title="Delivery" />
                                    {/* <li
                  className="group relative flex items-center hover:text-primary-500">
                  <i
                    className="bi bi-circle-fill invisible absolute -left-4 flex text-[6px] text-primary-500 group-hover:visible"></i>
                  <a
                    href="#"
                    className="transition-all duration-300 group-hover:text-white">
                    Delivery
                  </a>
                </li> */}
                                    <FooterLink title="Legal Notice" />
                                    {/* <li
                  className="group relative flex items-center hover:text-primary-500">
                  <i
                    className="bi bi-circle-fill invisible absolute -left-4 flex text-[6px] text-primary-500 group-hover:visible"></i>
                  <a
                    href="#"
                    className="transition-all duration-300 group-hover:text-white">
                    Legal Notice
                  </a>
                </li> */}
                                    <FooterLink title="About us" />
                                    {/* <li
                  className="group relative flex items-center hover:text-primary-500">
                  <i
                    className="bi bi-circle-fill invisible absolute -left-4 flex text-[6px] text-primary-500 group-hover:visible"></i>
                  <a
                    href="#"
                    className="transition-all duration-300 group-hover:text-white">
                    About us
                  </a>
                </li> */}
                                    <FooterLink title="Contact us" />
                                    {/* <li
                  className="group relative flex items-center hover:text-primary-500">
                  <i
                    className="bi bi-circle-fill invisible absolute -left-4 flex text-[6px] text-primary-500 group-hover:visible"></i>
                  <a
                    href="#"
                    className="transition-all duration-300 group-hover:text-white">
                    Contact us
                  </a>
                </li> */}
                                    <FooterLink title="Stores" />
                                    {/* <li
                  className="group relative flex items-center hover:text-primary-500">
                  <i
                    className="bi bi-circle-fill invisible absolute -left-4 flex text-[6px] text-primary-500 group-hover:visible"></i>
                  <a
                    href="#"
                    className="transition-all duration-300 group-hover:text-white">
                    Stores
                  </a>
                </li> */}
                                </ul>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-4">
                            <h3 className="pb-2 font-semibold text-gray-300">
                                Be the first to know it
                            </h3>
                            <span className="py-2 text-sm">
                                Subscribe to receive updates on our store and special offers
                            </span>
                            <form className="py-2">
                                <div className="flex overflow-hidden rounded-lg bg-white/10 p-2">
                                    <input
                                        className="w-full border-none bg-transparent pl-2 focus:border-none focus:ring-0 focus:ring-transparent"
                                        type="text"
                                        placeholder="Your email address" />
                                    <button className="p-1" type="submit">
                                        <i className="bi bi-send flex text-lg text-white"></i>
                                    </button>
                                </div>
                            </form>
                            <div className="flex gap-2 py-2">
                                <div className="relative h-8 w-8 overflow-hidden rounded-full">
                                    <a
                                        className="flex h-8 w-8 items-center justify-center bg-white/10 text-center text-white after:absolute after:left-0 after:top-0 after:block after:h-full after:w-full after:bg-gradient-to-tr after:from-orange-300 after:via-red-500 after:to-purple-800 after:opacity-0 after:transition-all after:duration-300 after:content-[''] hover:after:opacity-100"
                                        href="#">
                                        <i className="bi bi-instagram relative z-[2] flex"></i>
                                    </a>
                                </div>
                                <div
                                    className="h-8 w-8 rounded-full bg-white/10 transition-all duration-300 hover:bg-[#1877f2]">
                                    <a className="flex h-8 w-8 items-center justify-center" href="#">
                                        <i className="bi bi-facebook flex text-white"></i>
                                    </a>
                                </div>
                                <div
                                    className="h-8 w-8 rounded-full bg-white/10 transition-all duration-300 hover:bg-black">
                                    <a className="flex h-8 w-8 items-center justify-center" href="#">
                                        <i className="bi bi-twitter-x flex text-white"></i>
                                    </a>
                                </div>
                                <div
                                    className="h-8 w-8 rounded-full bg-white/10 transition-all duration-300 hover:bg-[#ff0000]">
                                    <a className="flex h-8 w-8 items-center justify-center" href="#">
                                        <i className="bi bi-youtube flex text-white"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 pb-5">
                    <p className="text-center">
                        ©
                        <span className="current-year"></span>
                        Example. All rights reserved
                    </p>
                </div>
            </div>
        </footer>)
}
