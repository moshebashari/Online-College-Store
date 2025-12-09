import React from 'react'

export default function UserRegistration() {
    return (
        <div className="modal-entry modal-container modal-overlay">
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
    )
}
