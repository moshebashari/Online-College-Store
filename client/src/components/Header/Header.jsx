import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { fetchProducts } from '../../utils';
import Navigation from '../Navigation/Navigation'
import UserRegistration from '../UserRegistration/UserRegistration';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'

export default function Header() {
    const [user, setUser] = useState(false);

    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');

    const onSearchChange = event => setSearchTerm(event.target.value);
    const onSubmitSearch = event => {
        event.preventDefault();
        if (searchTerm) {
            fetchProducts(searchTerm, true)
                .then(products => {
                    navigate('/search', { state: { products: products, searchValue: searchTerm } });
                    // console.log('Searched products results: ', products);
                })
        }
    }

    return (
        <React.Fragment>
            <header className="relative z-10 shadow-[0_2px_10px_rgba(131,125,125,0.50)]">
                <div className="hidden bg-primary-700 sm:flex">
                    <div className="container mx-auto grid h-full grid-cols-12 px-2 py-[6px] sm:px-8">
                        <div className="col-span-10 self-center">
                            <div className="flex gap-[15px]">
                                <div className="flex items-center gap-2">
                                    <i className="bi bi-envelope flex text-2xl text-primary-500"></i>
                                    <a href="#" className="font-light text-white">
                                        megabyte@example.com
                                    </a>
                                </div>
                                <div className="flex items-center gap-2">
                                    <i className="bi bi-telephone flex text-xl text-primary-500"></i>
                                    <a href="#" className="font-light text-white">
                                        (+54) 2284-123456789
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-2 self-center justify-self-end">
                            <div className="flex items-center gap-[10px]">
                                <a href="#">
                                    <i className="bi bi-instagram flex text-white/50 transition-all duration-300 hover:text-white"></i>
                                </a>
                                <a href="#">
                                    <i className="bi bi-facebook flex text-white/50 transition-all duration-300 hover:text-white"></i>
                                </a>
                                <a href="#">
                                    <i className="bi bi-twitter-x flex text-white/50 transition-all duration-300 hover:text-white"></i>
                                </a>
                                <a href="#">
                                    <i className="bi bi-youtube flex text-white/50 transition-all duration-300 hover:text-white"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-primary-700">
                    <div className="container mx-auto grid h-full grid-cols-4 gap-1 px-2 py-5 sm:px-8 lg:grid-cols-12 lg:gap-0">
                        <div className="order-1 col-span-2 self-center lg:order-1 lg:col-span-3">
                            <Link to="/">
                                <img className="inline" src="/img/logo.png" alt="logo" />
                            </Link>
                        </div>
                        <div
                            className="header-search order-3 col-span-4 mt-[10px] hidden self-center transition-all duration-300 lg:order-2 lg:col-span-6 lg:mt-0 lg:block">
                            <form className="search" onSubmit={onSubmitSearch}>
                                <div className="flex h-[40px] overflow-hidden rounded-[50px] bg-primary-600/40">
                                    <input
                                        className="search w-full border-none bg-transparent py-[5px] pl-5 text-white placeholder-slate-300 focus:border-none focus:ring-0 focus:ring-transparent"
                                        type="search" placeholder="Search..." onChange={onSearchChange} />
                                    <button className="btn-search px-3 text-white" type="submit">
                                        <i className="bi bi-search flex text-xl"></i>
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="order-2 col-span-2 flex gap-2 self-center justify-self-end lg:order-3 lg:col-span-3 xl:gap-5">
                            <div className="flex items-center lg:hidden">
                                <button className="btn-search-mob p-[5px] text-white">
                                    <i className="bi bi-search pointer-events-none flex text-2xl"></i>
                                </button>
                            </div>
                            <div className="flex items-center lg:hidden">
                                <button className="text-white" data-target=".modal-menu">
                                    <i className="bi bi-list pointer-events-none flex text-3xl"></i>
                                </button>
                            </div>
                            <div className="group-items hidden items-center gap-5 text-white lg:flex">
                                <div className="relative">
                                    <a data-target=".modal-wishlist" href="javascript:void(0)">
                                        <i className="bi bi-heart pointer-events-none flex translate-y-1 transform text-[32px] text-white"></i>
                                    </a>
                                    <span
                                        className="absolute right-[-6px] top-0 flex h-[15px] min-w-[15px] items-center justify-center rounded-xl bg-primary-500 px-[2px] text-xs text-white">
                                        0
                                    </span>
                                </div>
                                <div className="relative">
                                    <a data-target=".modal-cart" href="javascript:void(0)">
                                        <i className="bi bi-cart2 pointer-events-none flex text-[35px] text-white"></i>
                                    </a>
                                    <span
                                        className="absolute right-[-6px] top-0 flex h-[15px] min-w-[15px] items-center justify-center rounded-xl bg-primary-500 px-[2px] text-xs text-white">
                                        0
                                    </span>
                                </div>
                            </div>

                            {/* <!-- start logged user --> */}

                            {user &&
                                <div className="group relative hidden lg:flex">
                                    <div className="flex cursor-pointer select-none items-center gap-1">
                                        <span className="font-semibold text-white">Hi, </span>
                                        <i
                                            className="bi bi-caret-down-fill flex rotate-0 text-sm text-white transition-all duration-300 group-hover:rotate-180"></i>
                                    </div>
                                    <div
                                        className="invisible absolute top-full z-30 w-[120%] pt-[10px] opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
                                        <ul
                                            className="relative rounded-md bg-white p-[6px] shadow-[0_2px_10px_rgba(131,125,125,0.50)] after:absolute after:bottom-full after:left-[10px] after:h-0 after:w-0 after:border-b-[13px] after:border-l-[13px] after:border-r-[13px] after:border-b-white after:border-l-transparent after:border-r-transparent after:content-['']">
                                            <li className="hover:font-semibold">
                                                <a href="/auth/logout">
                                                    <div className="pointer-events-none flex items-center gap-2 p-1">
                                                        <i className="bi bi-box-arrow-left flex text-xl text-primary-500"></i>
                                                        <span className="whitespace-nowrap">Log out</span>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            }
                            {!user &&
                                <div className="group relative hidden lg:flex">
                                    <div className="flex cursor-pointer select-none items-center gap-1">
                                        <span className="font-semibold text-white">My account</span>
                                        <i
                                            className="bi bi-caret-down-fill flex rotate-0 text-sm text-white transition-all duration-300 group-hover:rotate-180"></i>
                                    </div>
                                    <div
                                        className="invisible absolute top-full z-30 w-[120%] pt-[10px] opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
                                        <ul
                                            className="relative rounded-md bg-white p-[6px] shadow-[0_2px_10px_rgba(131,125,125,0.50)] after:absolute after:bottom-full after:left-[10px] after:h-0 after:w-0 after:border-b-[13px] after:border-l-[13px] after:border-r-[13px] after:border-b-white after:border-l-transparent after:border-r-transparent after:content-['']">
                                            <li className="hover:font-semibold">
                                                <a href="#" data-tab="0" data-bs-toggle="modal" data-bs-target=".modal-entry">
                                                    <div className="pointer-events-none flex items-center gap-2 p-1">
                                                        <i className="bi bi-box-arrow-in-right flex text-xl text-primary-500"></i>
                                                        <span className="relative z-[4]">Login</span>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className="hover:font-semibold">
                                                <a href="#" data-tab="1" data-bs-target=".modal-entry">
                                                    <div className="pointer-events-none flex items-center gap-2 p-1">
                                                        <i className="bi bi-person flex text-xl text-primary-500"></i>
                                                        <span>Sign up</span>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            }
                            {/* <!-- end logged user --> */}

                            <div className="modal modal-entry modal-container modal-overlay">
                                <div className="modal-content modal-center-top flex w-[500px] min-w-[250px] flex-col rounded-lg bg-white p-5">
                                    <button
                                        className="close-modal absolute right-0 top-0 p-2 transition-all duration-300 sm:right-[-10px] sm:top-[-10px] sm:rounded-lg sm:bg-primary-500 sm:text-white sm:hover:bg-primary-400">
                                        <i className="bi bi-x-lg pointer-events-none flex"></i>
                                    </button>
                                    <div className="tab-container tab-container-entry border">
                                        <ul className="flex items-center justify-between">
                                            <li
                                                className="active tab-item w-full cursor-pointer bg-gray-200 p-2 text-center text-gray-400 transition-all duration-500">
                                                Login
                                            </li>
                                            <li
                                                className="tab-item w-full cursor-pointer bg-gray-200 p-2 text-center text-gray-400 transition-all duration-500">
                                                Sign Up
                                            </li>
                                        </ul>
                                        <div className="tab-content">
                                            <div className="active tab-content-item w-full p-5">
                                                <div className="my-5">
                                                    <img className="mx-auto" src="/img/logo2.png" alt="logo" />
                                                </div>
                                                {/* <!-- login form start--> */}
                                                <form action="#" method="post">
                                                    <div className="flex flex-col gap-4">
                                                        <div className="relative flex h-[40px] items-center">
                                                            <i className="bi bi-person absolute ml-2 flex text-[24px] text-gray-400"></i>
                                                            <input
                                                                className="w-full rounded-lg border-2 border-gray-200 bg-white pl-10 outline-none transition-all duration-300 focus:border-2 focus:border-primary-500 focus:ring-0"
                                                                type="text" placeholder="Username or Email" required />
                                                        </div>
                                                        <div className="relative flex h-[40px] items-center">
                                                            <i className="bi bi-lock absolute ml-2 flex text-[24px] text-gray-400"></i>
                                                            <input
                                                                className="w-full rounded-lg border-2 border-gray-200 bg-white pl-10 outline-none transition-all duration-300 focus:border-2 focus:border-primary-500 focus:ring-0"
                                                                type="password" placeholder="Password" required />
                                                        </div>
                                                        <button
                                                            className="relative h-full w-full overflow-hidden rounded-lg bg-primary-500 p-2 transition-all duration-300 after:absolute after:left-2/4 after:top-2/4 after:h-0 after:w-0 after:rounded-lg after:bg-primary-400 after:transition-all after:duration-300 after:content-[''] hover:after:left-0 hover:after:top-0 hover:after:z-[3] hover:after:h-full hover:after:w-full"
                                                            type="submit">
                                                            <span className="relative z-[4] font-bold uppercase text-white">
                                                                Login
                                                            </span>
                                                        </button>
                                                    </div>
                                                    <div className="my-2 flex flex-wrap items-center justify-between gap-2">
                                                        <label className="flex select-none items-center gap-2">
                                                            <input
                                                                className="h-4 w-4 rounded border text-primary-500 focus:border-transparent focus:ring focus:ring-primary-400 focus:ring-offset-0"
                                                                type="checkbox" />
                                                            <span>Remember</span>
                                                        </label>
                                                        <a className="relative cursor-pointer text-[#3091ff] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1 after:w-full after:origin-center after:scale-x-0 after:rounded-lg after:bg-primary-500 after:transition-transform after:duration-200 after:content-[''] hover:after:scale-x-100"
                                                            href="#">
                                                            Forgot Password?
                                                        </a>
                                                    </div>
                                                </form>
                                                {/* <!-- login form end--> */}
                                                <span
                                                    className="flex items-center py-2 before:my-auto before:h-px before:w-full before:bg-gray-400 before:content-[''] after:my-auto after:h-px after:w-full after:bg-gray-400 after:content-['']">
                                                    <span className="mx-2 text-sm uppercase">Or</span>
                                                </span>
                                                <div className="flex flex-col flex-wrap justify-center gap-5 sm:flex-row">
                                                    <button
                                                        className="flex h-[50px] min-w-[100px] items-center justify-center rounded-lg bg-[#1877f2] transition-all duration-300 hover:scale-110">
                                                        <i className="bi bi-facebook flex text-3xl text-white"></i>
                                                    </button>
                                                    <button
                                                        className="flex h-[50px] min-w-[100px] items-center justify-center rounded-lg bg-black transition-all duration-300 hover:scale-110">
                                                        <i className="bi bi-twitter-x flex text-3xl text-white"></i>
                                                    </button>
                                                    <button
                                                        className="flex h-[50px] min-w-[100px] items-center justify-center rounded-lg bg-[#ea4335] transition-all duration-300 hover:scale-110">
                                                        <i className="bi bi-google flex text-3xl text-white"></i>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="tab-content-item w-full p-5">
                                                <div className="my-5">
                                                    <img className="mx-auto" src="/img/logo2.png" alt="logo" />
                                                </div>
                                                {/* <!-- sign up form start --> */}
                                                <form action="/auth/sign-up" method="post" id="sign-up-form">
                                                    <div className="flex flex-col gap-4">
                                                        <div className="relative flex h-[40px] items-center">
                                                            <i className="bi bi-person absolute ml-2 flex text-[24px] text-gray-400"></i>
                                                            <input
                                                                className="w-full rounded-lg border-2 border-gray-200 bg-white pl-10 outline-none transition-all duration-300 focus:border-2 focus:border-primary-500 focus:ring-0"
                                                                type="text" placeholder="Name" name="username" required />
                                                        </div>
                                                        <div className="relative flex h-[40px] items-center">
                                                            <i className="bi bi-envelope absolute ml-2 flex text-[24px] text-gray-400"></i>
                                                            <input
                                                                className="w-full rounded-lg border-2 border-gray-200 bg-white pl-10 outline-none transition-all duration-300 focus:border-2 focus:border-primary-500 focus:ring-0"
                                                                type="text" placeholder="Email" name="email" required />
                                                        </div>
                                                        <div className="relative flex h-[40px] items-center">
                                                            <i className="bi bi-lock absolute ml-2 flex text-[24px] text-gray-400"></i>
                                                            <input
                                                                className="w-full rounded-lg border-2 border-gray-200 bg-white pl-10 outline-none transition-all duration-300 focus:border-2 focus:border-primary-500 focus:ring-0"
                                                                type="password" placeholder="Password" name="password" required />
                                                        </div>
                                                        <div className="relative flex h-[40px] items-center">
                                                            <i className="bi bi-lock-fill absolute ml-2 flex text-[24px] text-gray-400"></i>
                                                            <input
                                                                className="w-full rounded-lg border-2 border-gray-200 bg-white pl-10 outline-none transition-all duration-300 focus:border-2 focus:border-primary-500 focus:ring-0"
                                                                type="password" placeholder="Confirm Password" name="password2" required />
                                                        </div>
                                                        <button
                                                            className="relative h-full w-full overflow-hidden rounded-lg bg-primary-500 p-2 transition-all duration-300 after:absolute after:left-2/4 after:top-2/4 after:h-0 after:w-0 after:rounded-lg after:bg-primary-400 after:transition-all after:duration-300 after:content-[''] hover:after:left-0 hover:after:top-0 hover:after:z-[3] hover:after:h-full hover:after:w-full"
                                                            type="submit">
                                                            <span className="relative z-[4] font-bold uppercase text-white">
                                                                Sign Up
                                                            </span>
                                                        </button>
                                                    </div>
                                                    <div className="my-2 flex items-center justify-between">
                                                        <label className="flex select-none items-center gap-2">
                                                            <input
                                                                className="h-4 w-4 rounded border text-primary-500 focus:border-transparent focus:ring focus:ring-primary-400 focus:ring-offset-0"
                                                                type="checkbox" />
                                                            <span>
                                                                I agree with all
                                                                <a className="relative cursor-pointer text-[#3091ff] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1 after:w-full after:origin-center after:scale-x-0 after:rounded-lg after:bg-primary-500 after:transition-transform after:duration-200 after:content-[''] hover:after:scale-x-100"
                                                                    href="#">
                                                                    Terms of Use
                                                                </a>
                                                                &
                                                                <a className="relative cursor-pointer text-[#3091ff] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1 after:w-full after:origin-center after:scale-x-0 after:rounded-lg after:bg-primary-500 after:transition-transform after:duration-200 after:content-[''] hover:after:scale-x-100"
                                                                    href="#">
                                                                    Privacy Policy
                                                                </a>
                                                                .
                                                            </span>
                                                        </label>
                                                    </div>
                                                </form>
                                                {/* <!-- sign up form end --> */}
                                                <span
                                                    className="flex items-center py-2 before:my-auto before:h-px before:w-full before:bg-gray-400 before:content-[''] after:my-auto after:h-px after:w-full after:bg-gray-400 after:content-['']">
                                                    <span className="mx-2 text-sm uppercase">Or</span>
                                                </span>
                                                <div className="flex flex-col flex-wrap justify-center gap-5 sm:flex-row">
                                                    <button
                                                        className="flex h-[50px] min-w-[100px] items-center justify-center rounded-lg bg-[#1877f2] transition-all duration-300 hover:scale-110">
                                                        <i className="bi bi-facebook flex text-3xl text-white"></i>
                                                    </button>
                                                    <button
                                                        className="flex h-[50px] min-w-[100px] items-center justify-center rounded-lg bg-black transition-all duration-300 hover:scale-110">
                                                        <i className="bi bi-twitter-x flex text-3xl text-white"></i>
                                                    </button>
                                                    <button
                                                        className="flex h-[50px] min-w-[100px] items-center justify-center rounded-lg bg-[#ea4335] transition-all duration-300 hover:scale-110">
                                                        <i className="bi bi-google flex text-3xl text-white"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Navigation />
            </header>
            <UserRegistration />
        </React.Fragment>
    )
}
