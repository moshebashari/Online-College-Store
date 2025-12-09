import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation() {
    return (
        <div className="hidden bg-white lg:block">
            <nav className="container mx-auto px-2 sm:px-8">
                <ul
                    className="menu flex flex-wrap items-center justify-between py-[10px] text-lg">
                    <li
                        className="group relative cursor-pointer after:absolute after:-bottom-[5px] after:left-0 after:right-0 after:h-1 after:w-full after:origin-center after:scale-x-0 after:rounded-lg after:bg-primary-500 after:transition-transform after:duration-200 after:content-[''] hover:after:scale-x-100">
                        <a href="#" className="flex items-center gap-1 font-semibold">
                            <span>Products</span>
                            <i
                                className="bi bi-caret-down-fill flex rotate-0 text-xs text-primary-500 transition-all duration-300 group-hover:rotate-180"></i>
                        </a>
                        <div
                            className="invisible absolute left-0 pt-[10px] opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
                            <ul
                                className="relative w-[250px] bg-white text-base shadow-[0_2px_10px_rgba(131,125,125,0.50)]">
                                <li className="group/item">
                                    <a href="#" className="flex items-center gap-2 p-2">
                                        <i
                                            className="bi bi-circle-fill invisible flex text-[6px] text-primary-500 opacity-0 group-hover/item:visible group-hover/item:opacity-100"></i>
                                        <span className="group-hover/item:font-semibold">
                                            Pc components
                                        </span>
                                        <i
                                            className="bi bi-caret-right-fill invisible ml-auto flex text-xs text-primary-500 opacity-0 group-hover/item:visible group-hover/item:opacity-100"></i>
                                    </a>
                                    <div
                                        className="invisible absolute left-full top-0 min-h-full min-w-[680px] opacity-0 transition-all duration-300 group-hover/item:visible group-hover/item:opacity-100">
                                        <div className="bg-white shadow-custom-2">
                                            <div className="border-b-2 border-primary-500 py-[10px]">
                                                <span
                                                    className="px-5 text-3xl font-bold uppercase text-primary-500">
                                                    Pc components
                                                </span>
                                            </div>
                                            <div className="-categories flex flex-wrap">
                                                <div className="group/edit p-[10px]">
                                                    <a
                                                        className="categorie-container inline-block"
                                                        href="#">
                                                        <div className="categorie-img h-[150px] w-[150px]">
                                                            <img
                                                                className="h-full w-full object-contain mix-blend-multiply transition-all duration-300 group-hover/edit:scale-110 group-hover/edit:opacity-70"
                                                                src="/img/categories/pc_components/motherboards.jpg"
                                                                alt="motherboard" />
                                                        </div>
                                                        <span
                                                            className="block text-center group-hover/edit:font-semibold">
                                                            Motherboards
                                                        </span>
                                                    </a>
                                                </div>
                                                <div className="group/edit p-[10px]">
                                                    <a
                                                        className="categorie-container inline-block"
                                                        href="#">
                                                        <div className="categorie-img h-[150px] w-[150px]">
                                                            <img
                                                                className="h-full w-full object-contain mix-blend-multiply transition-all duration-300 group-hover/edit:scale-110 group-hover/edit:opacity-70"
                                                                src="/img/categories/pc_components/processors.jpg"
                                                                alt="processors" />
                                                        </div>
                                                        <span
                                                            className="block text-center group-hover/edit:font-semibold">
                                                            Processors
                                                        </span>
                                                    </a>
                                                </div>
                                                <div className="group/edit p-[10px]">
                                                    <a
                                                        className="categorie-container inline-block"
                                                        href="#">
                                                        <div className="categorie-img h-[150px] w-[150px]">
                                                            <img
                                                                className="h-full w-full object-contain mix-blend-multiply transition-all duration-300 group-hover/edit:scale-110 group-hover/edit:opacity-70"
                                                                src="/img/categories/pc_components/rams.jpg"
                                                                alt="rams" />
                                                        </div>
                                                        <span
                                                            className="block text-center group-hover/edit:font-semibold">
                                                            RAMS
                                                        </span>
                                                    </a>
                                                </div>
                                                <div className="group/edit p-[10px]">
                                                    <a
                                                        className="categorie-container inline-block"
                                                        href="#">
                                                        <div className="categorie-img h-[150px] w-[150px]">
                                                            <img
                                                                className="h-full w-full object-contain mix-blend-multiply transition-all duration-300 group-hover/edit:scale-110 group-hover/edit:opacity-70"
                                                                src="/img/categories/pc_components/video_cards.jpg"
                                                                alt="video cards" />
                                                        </div>
                                                        <span
                                                            className="block text-center group-hover/edit:font-semibold">
                                                            Video Cards
                                                        </span>
                                                    </a>
                                                </div>
                                                <div className="group/edit p-[10px]">
                                                    <a
                                                        className="categorie-container inline-block"
                                                        href="#">
                                                        <div className="categorie-img h-[150px] w-[150px]">
                                                            <img
                                                                className="h-full w-full object-contain mix-blend-multiply transition-all duration-300 group-hover/edit:scale-110 group-hover/edit:opacity-70"
                                                                src="/img/categories/pc_components/power_supplys.jpg"
                                                                alt="video cards" />
                                                        </div>
                                                        <span
                                                            className="block object-contain text-center group-hover/edit:font-semibold">
                                                            Power Supplys
                                                        </span>
                                                    </a>
                                                </div>
                                                <div className="group/edit p-[10px]">
                                                    <a
                                                        className="categorie-container inline-block"
                                                        href="#">
                                                        <div className="categorie-img h-[150px] w-[150px]">
                                                            <img
                                                                className="h-full w-full object-contain mix-blend-multiply transition-all duration-300 group-hover/edit:scale-110 group-hover/edit:opacity-70"
                                                                src="/img/categories/pc_components/hard_drives.jpg"
                                                                alt="video cards" />
                                                        </div>
                                                        <span
                                                            className="block text-center group-hover/edit:font-semibold">
                                                            Hard Drives
                                                        </span>
                                                    </a>
                                                </div>
                                                <div className="group/edit p-[10px]">
                                                    <a
                                                        className="categorie-container inline-block"
                                                        href="#">
                                                        <div className="categorie-img h-[150px] w-[150px]">
                                                            <img
                                                                className="h-full w-full object-contain mix-blend-multiply transition-all duration-300 group-hover/edit:scale-110 group-hover/edit:opacity-70"
                                                                src="/img/categories/pc_components/ssd_disk.jpg"
                                                                alt="video cards" />
                                                        </div>
                                                        <span
                                                            className="block text-center group-hover/edit:font-semibold">
                                                            SSD Disk
                                                        </span>
                                                    </a>
                                                </div>
                                                <div className="group/edit p-[10px]">
                                                    <a
                                                        className="categorie-container inline-block"
                                                        href="#">
                                                        <div className="categorie-img h-[150px] w-[150px]">
                                                            <img
                                                                className="h-full w-full object-contain mix-blend-multiply transition-all duration-300 group-hover/edit:scale-110 group-hover/edit:opacity-70"
                                                                src="/img/categories/pc_components/computer_case.jpg"
                                                                alt="video cards" />
                                                        </div>
                                                        <span
                                                            className="block text-center group-hover/edit:font-semibold">
                                                            Case
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="group/item">
                                    <a href="#" className="flex items-center gap-2 p-2">
                                        <i
                                            className="bi bi-circle-fill invisible flex text-[6px] text-primary-500 opacity-0 group-hover/item:visible group-hover/item:opacity-100"></i>
                                        <span className="group-hover/item:font-semibold">
                                            Peripherals
                                        </span>
                                        <i
                                            className="bi bi-caret-right-fill invisible ml-auto flex text-xs text-primary-500 opacity-0 group-hover/item:visible group-hover/item:opacity-100"></i>
                                    </a>
                                    <div
                                        className="invisible absolute left-full top-0 min-h-full min-w-[680px] opacity-0 transition-all duration-300 group-hover/item:visible group-hover/item:opacity-100">
                                        <div className="bg-white shadow-custom-2">
                                            <div className="border-b-2 border-primary-500 py-[10px]">
                                                <span
                                                    className="px-5 text-3xl font-bold uppercase text-primary-500">
                                                    Peripherals
                                                </span>
                                            </div>
                                            <div className="-categories flex flex-wrap">
                                                <div className="group/edit p-[10px]">
                                                    <a
                                                        className="categorie-container inline-block"
                                                        href="#">
                                                        <div className="categorie-img h-[150px] w-[150px]">
                                                            <img
                                                                className="h-full w-full object-contain mix-blend-multiply transition-all duration-300 group-hover/edit:scale-110 group-hover/edit:opacity-70"
                                                                src="/img/categories/peripherals/keywords.jpg"
                                                                alt="motherboard" />
                                                        </div>
                                                        <span
                                                            className="block text-center group-hover/edit:font-semibold">
                                                            Keywords
                                                        </span>
                                                    </a>
                                                </div>
                                                <div className="group/edit p-[10px]">
                                                    <a
                                                        className="categorie-container inline-block"
                                                        href="#">
                                                        <div className="categorie-img h-[150px] w-[150px]">
                                                            <img
                                                                className="h-full w-full object-contain mix-blend-multiply transition-all duration-300 group-hover/edit:scale-110 group-hover/edit:opacity-70"
                                                                src="/img/categories/peripherals/mouse.jpg"
                                                                alt="processors" />
                                                        </div>
                                                        <span
                                                            className="block text-center group-hover/edit:font-semibold">
                                                            Mouses
                                                        </span>
                                                    </a>
                                                </div>
                                                <div className="group/edit p-[10px]">
                                                    <a
                                                        className="categorie-container inline-block"
                                                        href="#">
                                                        <div className="categorie-img h-[150px] w-[150px]">
                                                            <img
                                                                className="h-full w-full object-contain mix-blend-multiply transition-all duration-300 group-hover/edit:scale-110 group-hover/edit:opacity-70"
                                                                src="/img/categories/peripherals/mic.jpg"
                                                                alt="rams" />
                                                        </div>
                                                        <span
                                                            className="block text-center group-hover/edit:font-semibold">
                                                            Mics
                                                        </span>
                                                    </a>
                                                </div>
                                                <div className="group/edit p-[10px]">
                                                    <a
                                                        className="categorie-container inline-block"
                                                        href="#">
                                                        <div className="categorie-img h-[150px] w-[150px]">
                                                            <img
                                                                className="h-full w-full object-contain mix-blend-multiply transition-all duration-300 group-hover/edit:scale-110 group-hover/edit:opacity-70"
                                                                src="/img/categories/peripherals/webcam.jpg"
                                                                alt="rams" />
                                                        </div>
                                                        <span
                                                            className="block text-center group-hover/edit:font-semibold">
                                                            Webcam
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="group/item">
                                    <a href="#" className="flex items-center gap-2 p-2">
                                        <i
                                            className="bi bi-circle-fill invisible flex text-[6px] text-primary-500 opacity-0 group-hover/item:visible group-hover/item:opacity-100"></i>
                                        <span className="group-hover/item:font-semibold">
                                            Computers
                                        </span>
                                        <i
                                            className="bi bi-caret-right-fill invisible ml-auto flex text-xs text-primary-500 opacity-0 group-hover/item:visible group-hover/item:opacity-100"></i>
                                    </a>
                                    <div
                                        className="invisible absolute left-full top-0 min-h-full min-w-[680px] opacity-0 transition-all duration-300 group-hover/item:visible group-hover/item:opacity-100">
                                        <div className="bg-white shadow-custom-2">
                                            <div className="border-b-2 border-primary-500 py-[10px]">
                                                <span
                                                    className="px-5 text-3xl font-bold uppercase text-primary-500">
                                                    Computers
                                                </span>
                                            </div>
                                            <div className="-categories flex flex-wrap">
                                                <div className="group/edit p-[10px]">
                                                    <a
                                                        className="categorie-container inline-block"
                                                        href="#">
                                                        <div className="categorie-img h-[150px] w-[150px]">
                                                            <img
                                                                className="h-full w-full object-contain mix-blend-multiply transition-all duration-300 group-hover/edit:scale-110 group-hover/edit:opacity-70"
                                                                src="/img/categories/computers/desktops.jpg"
                                                                alt="motherboard" />
                                                        </div>
                                                        <span
                                                            className="block text-center group-hover/edit:font-semibold">
                                                            Desktops
                                                        </span>
                                                    </a>
                                                </div>
                                                <div className="group/edit p-[10px]">
                                                    <a
                                                        className="categorie-container inline-block"
                                                        href="#">
                                                        <div className="categorie-img h-[150px] w-[150px]">
                                                            <img
                                                                className="h-full w-full object-contain mix-blend-multiply transition-all duration-300 group-hover/edit:scale-110 group-hover/edit:opacity-70"
                                                                src="/img/categories/computers/notebooks.jpg"
                                                                alt="processors" />
                                                        </div>
                                                        <span
                                                            className="block text-center group-hover/edit:font-semibold">
                                                            Notebooks
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="group/item">
                                    <a href="#" className="flex items-center gap-2 p-2">
                                        <i
                                            className="bi bi-circle-fill invisible flex text-[6px] text-primary-500 opacity-0 group-hover/item:visible group-hover/item:opacity-100"></i>
                                        <span className="group-hover/item:font-semibold">
                                            Monitors
                                        </span>
                                    </a>
                                </li>
                                <li className="group/item">
                                    <a href="#" className="flex items-center gap-2 p-2">
                                        <i
                                            className="bi bi-circle-fill invisible flex text-[6px] text-primary-500 opacity-0 group-hover/item:visible group-hover/item:opacity-100"></i>
                                        <span className="group-hover/item:font-semibold">
                                            Printers
                                        </span>
                                    </a>
                                </li>
                                <li className="group/item">
                                    <a href="#" className="flex items-center gap-2 p-2">
                                        <i
                                            className="bi bi-circle-fill invisible flex text-[6px] text-primary-500 opacity-0 group-hover/item:visible group-hover/item:opacity-100"></i>
                                        <span className="group-hover/item:font-semibold">Gaming</span>
                                        <i
                                            className="bi bi-caret-right-fill invisible ml-auto flex text-xs text-primary-500 opacity-0 group-hover/item:visible group-hover/item:opacity-100"></i>
                                    </a>
                                    <div
                                        className="invisible absolute left-full top-0 min-h-full min-w-[680px] opacity-0 transition-all duration-300 group-hover/item:visible group-hover/item:opacity-100">
                                        <div className="bg-white shadow-custom-2">
                                            <div className="border-b-2 border-primary-500 py-[10px]">
                                                <span
                                                    className="px-5 text-3xl font-bold uppercase text-primary-500">
                                                    Gaming
                                                </span>
                                            </div>
                                            <div className="-categories flex flex-wrap">
                                                <div className="group/edit p-[10px]">
                                                    <a
                                                        className="categorie-container inline-block"
                                                        href="#">
                                                        <div className="categorie-img h-[150px] w-[150px]">
                                                            <img
                                                                className="h-full w-full object-contain mix-blend-multiply transition-all duration-300 group-hover/edit:scale-110 group-hover/edit:opacity-70"
                                                                src="/img/categories/gaming/consoles.jpg"
                                                                alt="motherboard" />
                                                        </div>
                                                        <span
                                                            className="block text-center group-hover/edit:font-semibold">
                                                            Consoles
                                                        </span>
                                                    </a>
                                                </div>
                                                <div className="group/edit p-[10px]">
                                                    <a
                                                        className="categorie-container inline-block"
                                                        href="#">
                                                        <div className="categorie-img h-[150px] w-[150px]">
                                                            <img
                                                                className="h-full w-full object-contain mix-blend-multiply transition-all duration-300 group-hover/edit:scale-110 group-hover/edit:opacity-70"
                                                                src="/img/categories/gaming/games.jpg"
                                                                alt="processors" />
                                                        </div>
                                                        <span
                                                            className="block text-center group-hover/edit:font-semibold">
                                                            Games
                                                        </span>
                                                    </a>
                                                </div>
                                                <div className="group/edit p-[10px]">
                                                    <a
                                                        className="categorie-container inline-block"
                                                        href="#">
                                                        <div className="categorie-img h-[150px] w-[150px]">
                                                            <img
                                                                className="h-full w-full object-contain mix-blend-multiply transition-all duration-300 group-hover/edit:scale-110 group-hover/edit:opacity-70"
                                                                src="/img/categories/gaming/accessories.jpg"
                                                                alt="processors" />
                                                        </div>
                                                        <span
                                                            className="block text-center group-hover/edit:font-semibold">
                                                            Accessories
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="group/item">
                                    <a href="#" className="flex items-center gap-2 p-2">
                                        <i
                                            className="bi bi-circle-fill invisible flex text-[6px] text-primary-500 opacity-0 group-hover/item:visible group-hover/item:opacity-100"></i>
                                        <span className="group-hover/item:font-semibold">
                                            Tablets
                                        </span>
                                    </a>
                                </li>
                                <li className="group/item">
                                    <a href="#" className="flex items-center gap-2 p-2">
                                        <i
                                            className="bi bi-circle-fill invisible flex text-[6px] text-primary-500 opacity-0 group-hover/item:visible group-hover/item:opacity-100"></i>
                                        <span className="group-hover/item:font-semibold">
                                            Smartphones
                                        </span>
                                    </a>
                                </li>
                                <li className="group/item">
                                    <a href="#" className="flex items-center gap-2 p-2">
                                        <i
                                            className="bi bi-circle-fill invisible flex text-[6px] text-primary-500 opacity-0 group-hover/item:visible group-hover/item:opacity-100"></i>
                                        <span className="group-hover/item:font-semibold">
                                            Software
                                        </span>
                                        <i
                                            className="bi bi-caret-right-fill invisible ml-auto flex text-xs text-primary-500 opacity-0 group-hover/item:visible group-hover/item:opacity-100"></i>
                                    </a>
                                    <div
                                        className="invisible absolute left-full top-0 min-h-full min-w-[680px] opacity-0 transition-all duration-300 group-hover/item:visible group-hover/item:opacity-100">
                                        <div className="bg-white shadow-custom-2">
                                            <div className="border-b-2 border-primary-500 py-[10px]">
                                                <span
                                                    className="px-5 text-3xl font-bold uppercase text-primary-500">
                                                    Software
                                                </span>
                                            </div>
                                            <div className="-categories flex flex-wrap">
                                                <div className="group/edit p-[10px]">
                                                    <a
                                                        className="categorie-container inline-block"
                                                        href="#">
                                                        <div className="categorie-img h-[150px] w-[150px]">
                                                            <img
                                                                className="h-full w-full object-contain mix-blend-multiply transition-all duration-300 group-hover/edit:scale-110 group-hover/edit:opacity-70"
                                                                src="/img/categories/software/os.jpg"
                                                                alt="motherboard" />
                                                        </div>
                                                        <span
                                                            className="block text-center group-hover/edit:font-semibold">
                                                            Operating System
                                                        </span>
                                                    </a>
                                                </div>
                                                <div className="group/edit p-[10px]">
                                                    <a
                                                        className="categorie-container inline-block"
                                                        href="#">
                                                        <div className="categorie-img h-[150px] w-[150px]">
                                                            <img
                                                                className="h-full w-full object-contain mix-blend-multiply transition-all duration-300 group-hover/edit:scale-110 group-hover/edit:opacity-70"
                                                                src="/img/categories/software/office.jpg"
                                                                alt="processors" />
                                                        </div>
                                                        <span
                                                            className="block text-center group-hover/edit:font-semibold">
                                                            Office Package
                                                        </span>
                                                    </a>
                                                </div>
                                                <div className="group/edit p-[10px]">
                                                    <a
                                                        className="categorie-container inline-block"
                                                        href="#">
                                                        <div className="categorie-img h-[150px] w-[150px]">
                                                            <img
                                                                className="h-full w-full object-contain mix-blend-multiply transition-all duration-300 group-hover/edit:scale-110 group-hover/edit:opacity-70"
                                                                src="/img/categories/software/antivirus.jpg"
                                                                alt="processors" />
                                                        </div>
                                                        <span
                                                            className="block text-center group-hover/edit:font-semibold">
                                                            Antivirus
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li
                        className="relative cursor-pointer after:absolute after:-bottom-[5px] after:left-0 after:right-0 after:h-1 after:w-full after:origin-center after:scale-x-0 after:rounded-lg after:bg-primary-500 after:transition-transform after:duration-200 after:content-[''] hover:after:scale-x-100">
                        <Link to="/">Home</Link>
                    </li>
                    <li
                        className="group relative cursor-pointer after:absolute after:-bottom-[5px] after:left-0 after:right-0 after:h-1 after:w-full after:origin-center after:scale-x-0 after:rounded-lg after:bg-primary-500 after:transition-transform after:duration-200 after:content-[''] hover:after:scale-x-100">
                        <a href="#" className="flex items-center gap-1">
                            <span>Pages</span>
                            <i
                                className="bi bi-caret-down-fill flex rotate-0 text-xs text-primary-500 transition-all duration-300 group-hover:rotate-180"></i>
                        </a>
                        <div
                            className="invisible absolute left-0 pt-[10px] opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
                            <ul
                                className="relative w-[250px] bg-white text-base shadow-[0_2px_10px_rgba(131,125,125,0.50)]">
                                <li className="group/item">
                                    <a href="#" className="flex items-center gap-2 p-2">
                                        <i
                                            className="bi bi-circle-fill invisible flex text-[6px] text-primary-500 opacity-0 group-hover/item:visible group-hover/item:opacity-100"></i>
                                        <span className="group-hover/item:font-semibold">
                                            Main pages
                                        </span>
                                        <i
                                            className="bi bi-caret-right-fill invisible ml-auto flex text-xs text-primary-500 opacity-0 group-hover/item:visible group-hover/item:opacity-100"></i>
                                    </a>
                                    <div
                                        className="invisible absolute left-full top-0 min-h-full min-w-[250px] opacity-0 transition-all duration-300 group-hover/item:visible group-hover/item:opacity-100">
                                        <ul className="bg-white shadow-custom-2">
                                            <li>
                                                <a
                                                    className="flex p-2 hover:font-semibold"
                                                    href="about-us.html">
                                                    About us
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="flex p-2 hover:font-semibold"
                                                    href="wishlist.html">
                                                    Wishlist
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="flex p-2 hover:font-semibold"
                                                    href="shopping-cart.html">
                                                    Shopping Cart
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="flex p-2 hover:font-semibold"
                                                    href="product-details.html">
                                                    Product Details
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="flex p-2 hover:font-semibold"
                                                    href="checkout.html">
                                                    Checkout
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="flex p-2 hover:font-semibold"
                                                    href="shop-mixed.html">
                                                    Shop - Mixed
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="flex p-2 hover:font-semibold"
                                                    href="shop-listed.html">
                                                    Shop - Listed
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="flex p-2 hover:font-semibold"
                                                    href="shop-grid.html">
                                                    Shop - Grid
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="group/item">
                                    <a href="#" className="flex items-center gap-2 p-2">
                                        <i
                                            className="bi bi-circle-fill invisible flex text-[6px] text-primary-500 opacity-0 group-hover/item:visible group-hover/item:opacity-100"></i>
                                        <span className="group-hover/item:font-semibold">
                                            Account pages
                                        </span>
                                        <i
                                            className="bi bi-caret-right-fill invisible ml-auto flex text-xs text-primary-500 opacity-0 group-hover/item:visible group-hover/item:opacity-100"></i>
                                    </a>
                                    <div
                                        className="invisible absolute left-full top-0 min-h-full min-w-[250px] opacity-0 transition-all duration-300 group-hover/item:visible group-hover/item:opacity-100">
                                        <ul className="bg-white shadow-custom-2">
                                            <li>
                                                <a
                                                    className="flex p-2 hover:font-semibold"
                                                    href="my-account.html">
                                                    My account
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="flex p-2 hover:font-semibold"
                                                    href="login.html">
                                                    Login
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="flex p-2 hover:font-semibold"
                                                    href="sign-up.html">
                                                    Sign up
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="flex p-2 hover:font-semibold"
                                                    href="forgot-password.html">
                                                    Forgot password
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="group/item">
                                    <a href="#" className="flex items-center gap-2 p-2">
                                        <i
                                            className="bi bi-circle-fill invisible flex text-[6px] text-primary-500 opacity-0 group-hover/item:visible group-hover/item:opacity-100"></i>
                                        <span className="group-hover/item:font-semibold">
                                            Purchase statuses
                                        </span>
                                        <i
                                            className="bi bi-caret-right-fill invisible ml-auto flex text-xs text-primary-500 opacity-0 group-hover/item:visible group-hover/item:opacity-100"></i>
                                    </a>
                                    <div
                                        className="invisible absolute left-full top-0 min-h-full min-w-[250px] opacity-0 transition-all duration-300 group-hover/item:visible group-hover/item:opacity-100">
                                        <ul className="bg-white shadow-custom-2">
                                            <li>
                                                <a
                                                    className="flex p-2 hover:font-semibold"
                                                    href="purchase-completed.html">
                                                    Purchase completed
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="flex p-2 hover:font-semibold"
                                                    href="purchase-failed.html">
                                                    Purchase failed
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="group/item">
                                    <a href="#" className="flex items-center gap-2 p-2">
                                        <i
                                            className="bi bi-circle-fill invisible flex text-[6px] text-primary-500 opacity-0 group-hover/item:visible group-hover/item:opacity-100"></i>
                                        <span className="group-hover/item:font-semibold">
                                            Support and policy
                                        </span>
                                        <i
                                            className="bi bi-caret-right-fill invisible ml-auto flex text-xs text-primary-500 opacity-0 group-hover/item:visible group-hover/item:opacity-100"></i>
                                    </a>
                                    <div
                                        className="invisible absolute left-full top-0 min-h-full min-w-[250px] opacity-0 transition-all duration-300 group-hover/item:visible group-hover/item:opacity-100">
                                        <ul className="bg-white shadow-custom-2">
                                            <li>
                                                <a
                                                    className="flex p-2 hover:font-semibold"
                                                    href="error404.html">
                                                    Error 404
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="flex p-2 hover:font-semibold"
                                                    href="message-sent.html">
                                                    Message sent
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="flex p-2 hover:font-semibold"
                                                    href="verification.html">
                                                    Verification
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="flex p-2 hover:font-semibold"
                                                    href="privacy-policy.html">
                                                    Privacy policy
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="flex p-2 hover:font-semibold"
                                                    href="terms-and-conditions.html">
                                                    Terms and conditions
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li
                        className="relative cursor-pointer after:absolute after:-bottom-[5px] after:left-0 after:right-0 after:h-1 after:w-full after:origin-center after:scale-x-0 after:rounded-lg after:bg-primary-500 after:transition-transform after:duration-200 after:content-[''] hover:after:scale-x-100">
                        <a href="#">Desktops</a>
                    </li>
                    <li
                        className="relative cursor-pointer after:absolute after:-bottom-[5px] after:left-0 after:right-0 after:h-1 after:w-full after:origin-center after:scale-x-0 after:rounded-lg after:bg-primary-500 after:transition-transform after:duration-200 after:content-[''] hover:after:scale-x-100">
                        <a href="#">Notebooks</a>
                    </li>
                    <li
                        className="relative cursor-pointer after:absolute after:-bottom-[5px] after:left-0 after:right-0 after:h-1 after:w-full after:origin-center after:scale-x-0 after:rounded-lg after:bg-primary-500 after:transition-transform after:duration-200 after:content-[''] hover:after:scale-x-100">
                        <a href="#">Smartphones</a>
                    </li>
                    <li
                        className="relative cursor-pointer after:absolute after:-bottom-[5px] after:left-0 after:right-0 after:h-1 after:w-full after:origin-center after:scale-x-0 after:rounded-lg after:bg-primary-500 after:transition-transform after:duration-200 after:content-[''] hover:after:scale-x-100">
                        <a href="faqs.html">FAQ's</a>
                    </li>
                    <li
                        className="relative cursor-pointer after:absolute after:-bottom-[5px] after:left-0 after:right-0 after:h-1 after:w-full after:origin-center after:scale-x-0 after:rounded-lg after:bg-primary-500 after:transition-transform after:duration-200 after:content-[''] hover:after:scale-x-100">
                        <Link to="/contact-us">Contact Us</Link>
                    </li>
                </ul>
            </nav>
        </div>

    )
}
