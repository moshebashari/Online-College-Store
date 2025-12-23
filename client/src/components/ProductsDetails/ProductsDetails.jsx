import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// import BreadCrumbs from '../components/BreadCrumbs/BreadCrumbs';
import ProductsCategories from './ProductsCategories';


export default function ProductsDetails(props) {

    const [quantity, setQuantity] = useState(1);

    const incrementQuantity = () => {
        setQuantity(prev => prev + 1);
    };

    const decrementQuantity = () => {
        setQuantity(prev => (prev > 1 ? prev - 1 : 1));
    };

    return (
        <React.Fragment >

            <div className="product-details container mx-auto my-5 px-2 sm:px-8">
                <div className="grid grid-cols-12 gap-5 rounded-lg bg-white p-2 xs:p-8">
                    <div className="col-span-12 max-h-[500px] md:col-span-6">
                        <div
                            className="swiper swiper-top group relative flex items-center rounded-lg">
                            <div className="swiper-wrapper">
                                {props.product.images.map(image => {
                                    return (
                                        <div className="swiper-slide">
                                            <div className="swiper-zoom-container">
                                                <img src={image.url} alt="product" />
                                            </div>
                                        </div>
                                    )
                                })}                                {/* <% for(var image of product.images){ %>
              <div className="swiper-slide">
                <div className="swiper-zoom-container">
                  <img src="<%= image.url %>" alt="product" />
                </div>
              </div>
               <%  } %> */}
                                {/* <!-- <div className="swiper-slide">
                                    <div className="swiper-zoom-container">
                                        <img src="/img/product/prod-2.jpg" alt="product" />
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="swiper-zoom-container">
                                        <img src="/img/product/prod-3.jpg" alt="product" />
                                    </div>
                                </div> --> */}
                            </div>
                            <div
                                className="button-next absolute -right-16 z-20 flex h-10 w-10 select-none items-center justify-center rounded bg-black/30 text-xl text-white shadow transition-all duration-300 group-hover:right-4 hover:bg-primary-500 hover:shadow-md">
                                &#10095;
                            </div>
                            <div
                                className="button-prev absolute -left-16 z-20 flex h-10 w-10 select-none items-center justify-center rounded bg-black/30 text-xl text-white shadow transition-all duration-300 group-hover:left-4 hover:bg-primary-500 hover:shadow-md">
                                &#10094;
                            </div>
                        </div>
                        <div className="swiper swiper-thumbs">
                            <div className="swiper-wrapper">
                                {props.product.images.map(image => {
                                    return (
                                        <div className="swiper-slide cursor-pointer rounded-lg">
                                            <img src={image.url} alt="product" />
                                        </div>
                                    )
                                })}
                            </div>
                            <div
                                className="button-next absolute -right-16 z-20 flex h-10 w-10 select-none items-center justify-center rounded bg-black/30 text-xl text-white shadow transition-all duration-300 group-hover:right-4 hover:bg-primary-500 hover:shadow-md">
                                &#10095;
                            </div>
                            <div
                                className="button-prev absolute -left-16 z-20 flex h-10 w-10 select-none items-center justify-center rounded bg-black/30 text-xl text-white shadow transition-all duration-300 group-hover:left-4 hover:bg-primary-500 hover:shadow-md">
                                &#10094;
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-6">
                        <div className="my-1">
                            <Link
                                className="line-clamp-2 break-all text-2xl font-medium transition-all duration-300 hover:text-primary-500"
                                to={`/product/${props.product.id}`}>
                                {props.product.name}
                            </Link>
                        </div>
                        <div className="product-val-stock my-2 flex justify-between">
                            <div className="" data-rater="4"></div>
                            <div className="ml-auto">
                                <span
                                    className={`relative z-[4] rounded-md px-2 py-1 text-xs font-bold uppercase text-white ${props.product.stock > 0 ? 'bg-green-300' : 'bg-red-300'
                                        }`}>
                                    {props.product.stock > 0 ? 'instock' : 'outofstock'}

                                </span>
                            </div>
                        </div>
                        <div className="my-5 flex items-center gap-5">
                            <div
                                className="flex rounded-lg bg-white px-3 py-2 text-primary-500 shadow">
                                <span className="text-sm">&#8362;</span>
                                <span className="text-2xl font-semibold leading-7">{props.product.price}</span>
                            </div>
                            {/* <!-- <div className="flex flex-col">
                                <span className="text-md font-semibold uppercase text-green-400">
                                    25% Off
                                </span>
                                <span className="prev-price text-sm text-primary-500 line-through">
                                    $50.00
                                </span>
                            </div> --> */}
                        </div>
                        <div className="my-4">
                            <p className="line-clamp-5 break-all">
                                {props.product.description}
                            </p>
                        </div>
                        {/* <!-- size and color start--> */}
                        <div className="flex gap-1">
                            <form action="javascript:void(0)">
                                {/* <div className="block">
                                    <div className="my-3 flex flex-col gap-1">
                                        <span className="font-bold">Size:</span>
                                        <ul className="flex flex-wrap gap-3">
                                            <li className="relative">
                                                <input
                                                    className="peer sr-only"
                                                    type="radio"
                                                    value=""
                                                    name="size"
                                                    id="size1"
                                                    checked="" />
                                                <label
                                                    className="flex h-8 w-10 cursor-pointer items-center justify-center rounded-lg border border-gray-300 bg-white peer-checked:border-transparent peer-checked:ring-2 peer-checked:ring-primary-500 hover:bg-gray-50 focus:outline-none"
                                                    for="size1">
                                                    S
                                                </label>
                                            </li>
                                            <li className="relative">
                                                <input
                                                    className="peer sr-only"
                                                    type="radio"
                                                    value=""
                                                    name="size"
                                                    id="size2" />
                                                <label
                                                    className="flex h-8 w-10 cursor-pointer items-center justify-center rounded-lg border border-gray-300 bg-white peer-checked:border-transparent peer-checked:ring-2 peer-checked:ring-primary-500 hover:bg-gray-50 focus:outline-none"
                                                    for="size2">
                                                    M
                                                </label>
                                            </li>
                                            <li className="relative">
                                                <input
                                                    className="peer sr-only"
                                                    type="radio"
                                                    value=""
                                                    name="size"
                                                    id="size3" />
                                                <label
                                                    className="flex h-8 w-10 cursor-pointer items-center justify-center rounded-lg border border-gray-300 bg-white peer-checked:border-transparent peer-checked:ring-2 peer-checked:ring-primary-500 hover:bg-gray-50 focus:outline-none"
                                                    for="size3">
                                                    L
                                                </label>
                                            </li>
                                            <li className="relative">
                                                <input
                                                    className="peer sr-only"
                                                    type="radio"
                                                    value=""
                                                    name="size"
                                                    id="size4" />
                                                <label
                                                    className="flex h-8 w-10 cursor-pointer items-center justify-center rounded-lg border border-gray-300 bg-white peer-checked:border-transparent peer-checked:ring-2 peer-checked:ring-primary-500 hover:bg-gray-50 focus:outline-none"
                                                    for="size4">
                                                    XL
                                                </label>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="my-3 flex gap-2">
                                        <div>
                                            <label className="inline-flex items-center">
                                                <input
                                                    type="radio"
                                                    className="cursor-pointer border-transparent bg-blue-600 text-blue-600 checked:bg-none checked:ring checked:ring-blue-300 focus:ring focus:ring-blue-300 focus:ring-offset-0"
                                                    name="radio-colors"
                                                    value="0"
                                                    checked />
                                            </label>
                                        </div>
                                        <div>
                                            <label className="inline-flex items-center">
                                                <input
                                                    type="radio"
                                                    className="cursor-pointer border-transparent bg-red-600 text-red-600 checked:bg-none checked:ring checked:ring-red-300 focus:ring focus:ring-red-300 focus:ring-offset-0"
                                                    name="radio-colors"
                                                    value="1" />
                                            </label>
                                        </div>
                                        <div>
                                            <label className="inline-flex items-center">
                                                <input
                                                    type="radio"
                                                    className="cursor-pointer border-transparent bg-yellow-600 text-yellow-600 checked:bg-none checked:ring checked:ring-yellow-300 focus:ring focus:ring-yellow-300 focus:ring-offset-0"
                                                    name="radio-colors"
                                                    value="2" />
                                            </label>
                                        </div>
                                        <div>
                                            <label className="inline-flex items-center">
                                                <input
                                                    type="radio"
                                                    className="cursor-pointer border-transparent bg-black text-black checked:bg-none checked:ring checked:ring-gray-400 focus:ring focus:ring-gray-400 focus:ring-offset-0"
                                                    name="radio-colors"
                                                    value="3" />
                                            </label>
                                        </div>
                                    </div>
                                </div> */}
                                <div className="flex flex-wrap justify-start gap-5">
                                    <div className="counter inline-flex rounded-lg bg-white shadow">
                                        <input
                                            className="counter-value input-number w-12 border-none bg-transparent p-1 text-center text-lg text-gray-400 focus:border-none focus:ring-0"
                                            type="number"
                                            value={quantity}
                                            readOnly
                                            onChange={(e) => setQuantity(parseInt(e.target.value) || 1)} />
                                        <div className="flex w-5 flex-col justify-between">
                                            <button className="increment text-primary-500"
                                                type="button"
                                                onClick={incrementQuantity}>
                                                <i className="bi bi-caret-up-fill pointer-events-none"></i>
                                            </button>
                                            <button className="decrement text-primary-500"
                                                type="button"
                                                onClick={decrementQuantity}>
                                                <i className="bi bi-caret-down-fill pointer-events-none"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <button
                                            className="relative flex h-full w-full items-center justify-center gap-2 overflow-hidden rounded-lg bg-primary-500 p-2 transition-all duration-300 after:absolute after:left-2/4 after:top-2/4 after:h-0 after:w-0 after:rounded-lg after:bg-primary-400 after:transition-all after:duration-300 after:content-[''] hover:after:left-0 hover:after:top-0 hover:after:z-[3] hover:after:h-full hover:after:w-full"
                                            type="submit">
                                            <i
                                                className="bi bi-cart-fill relative z-[4] flex text-xl text-white"></i>
                                            <span className="relative z-[4] font-bold uppercase text-white">
                                                Add to cart
                                            </span>
                                        </button>
                                        <a
                                            className="tippy tippy-wishlist wishlist-button flex min-h-[40px] min-w-[40px] cursor-pointer items-center justify-center gap-2 rounded-lg bg-primary-500 p-2 transition-all duration-300 hover:bg-primary-400"
                                            href="javascript:void(0)">
                                            <i
                                                className="bi bi-heart pointer-events-none flex text-white"></i>
                                        </a>
                                    </div>
                                </div>
                            </form>
                        </div>
                        {/* <!-- size and color end--> */}
                        <div className="my-5 flex flex-col gap-2">
                            <a
                                className="rounded-lg border bg-slate-100 p-2 transition-all duration-300 hover:bg-slate-200"
                                href="javascript:void(0)"
                                data-target=".modal-shipping">
                                <div
                                    className="pointer-events-none flex items-center justify-between gap-2">
                                    <div className="flex items-center gap-2">
                                        <i className="bi bi-truck flex text-2xl text-primary-500"></i>
                                        <span>Calculate Shipping Cost</span>
                                    </div>
                                    <i
                                        className="bi bi-arrow-right-short flex text-2xl text-primary-500"></i>
                                </div>
                            </a>
                        </div>
                        <div className="mt-5 border-t border-gray-200 pt-5">
                            <div>
                                <b>Categories:</b>
                                {props.product.ProductCategories.map(category => < ProductsCategories name={category.Category.name} />)}
                                {/* <% for(var category of product.ProductCategories){ %>
              <span>
                <a href="#" className="text-zinc-500"><%= category.Category.name %></a>
                ,
              </span>
              <% } %> */}
                            </div>
                            <div className="flex gap-2">
                                <b>Share:</b>
                                <div className="flex items-center gap-[10px]">
                                    <a href="#">
                                        <i
                                            className="bi bi-facebook flex text-zinc-500 transition-all duration-300 hover:text-primary-500"></i>
                                    </a>
                                    <a href="#">
                                        <i
                                            className="bi bi-twitter-x flex text-zinc-500 transition-all duration-300 hover:text-primary-500"></i>
                                    </a>
                                    <a href="#">
                                        <i
                                            className="bi bi-whatsapp flex text-zinc-500 transition-all duration-300 hover:text-primary-500"></i>
                                    </a>
                                    <a href="#">
                                        <i
                                            className="bi bi-link-45deg flex text-zinc-500 transition-all duration-300 hover:text-primary-500"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12">
                        <div
                            className="liner-container mb-5 flex border-b-2 border-[rgba(119,119,119,.17)]">
                            <h1
                                className="mb-[-2px] inline-block border-b-2 border-primary-500 pb-3 text-xl font-bold uppercase">
                                Specifications
                            </h1>
                        </div>
                        <div className="grid grid-cols-3 gap-5">
                            <div className="col-span-12 sm:col-span-1">
                                <span>
                                    <b>Aplication:</b>
                                    Desktop
                                </span>
                            </div>
                            <div className="col-span-12 sm:col-span-1">
                                <span>
                                    <b># of CPU cores:</b>
                                    3.8GHz
                                </span>
                            </div>
                            <div className="col-span-12 sm:col-span-1">
                                <span>
                                    <b>Total L3 cache:</b>
                                    32MB
                                </span>
                            </div>
                            <div className="col-span-12 sm:col-span-1">
                                <span>
                                    <b># of threads:</b>
                                    12
                                </span>
                            </div>
                            <div className="col-span-12 sm:col-span-1">
                                <span>
                                    <b>Total L1 cache:</b>
                                    384KB
                                </span>
                            </div>
                            <div className="col-span-12 sm:col-span-1">
                                <span>
                                    <b>TDP/Default TDP:</b>
                                    95W
                                </span>
                            </div>
                            <div className="col-span-12 sm:col-span-1">
                                <span>
                                    <b>CPU Socket:</b>
                                    AM4
                                </span>
                            </div>
                            <div className="col-span-12 sm:col-span-1">
                                <span>
                                    <b>Temp. max:</b>
                                    95°C
                                </span>
                            </div>
                            <div className="col-span-12 sm:col-span-1">
                                <span>
                                    <b>Product line:</b>
                                    AMD Ryzen™ 5 Desktop Processors
                                </span>
                            </div>
                            <div className="col-span-12 sm:col-span-1">
                                <span>
                                    <b>Max Magnification Clock:</b>
                                    Up to 4.4GHz
                                </span>
                            </div>
                            <div className="col-span-12 sm:col-span-1">
                                <span>
                                    <b>Total L2 cache:</b>
                                    3MB
                                </span>
                            </div>
                            <div className="col-span-12 sm:col-span-1">
                                <span>
                                    <b>Gamer:</b>
                                    Yes
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12">
                        <div
                            className="liner-container mb-5 flex border-b-2 border-[rgba(119,119,119,.17)]">
                            <h1
                                className="mb-[-2px] inline-block border-b-2 border-primary-500 pb-3 text-xl font-bold uppercase">
                                Description
                            </h1>
                        </div>
                        <div className="see-more relative pb-5">
                            <div
                                className="see-more-container gradient-bottom max-h-[220px] overflow-hidden">
                                <div className="see-more-content">
                                    <p>
                                        Lorem Unde sapiente quisquam placeat excepturi sunt mollitia
                                        vero cumque, aliquam libero ipsum dolor sit amet consectetur
                                        adipisicing elit. Unde sapiente quisquam placeat excepturi
                                        sunt mollitia vero cumque, aliquam libero veniam odit
                                        inventore totam quis! Hic quis perferendis quaerat enim magni.
                                    </p>
                                    <p>
                                        Lorem Unde sapiente quisquam placeat excepturi sunt mollitia
                                        vero cumque, aliquam libero ipsum dolor sit amet consectetur
                                        adipisicing elit. Repellat culpa quidem reprehenderit dolor
                                        aperiam, eius consequatur est deserunt. Nisi nesciunt
                                        repellendus dolorem quam obcaecati atque animi quas debitis
                                        qui harum.
                                    </p>
                                    <p>
                                        Lorem Unde sapiente quisquam placeat excepturi sunt mollitia
                                        vero cumque, aliquam libero ipsum, dolor sit amet consectetur
                                        adipisicing elit. Aut, veritatis. Ea voluptatibus eveniet,
                                        quam dicta quisquam repellat maxime libero. Enim omnis quis,
                                        cumque facilis doloremque doloribus tempore expedita quia
                                        accusantium.
                                    </p>
                                    <p>
                                        Lorem Unde sapiente quisquam placeat excepturi sunt mollitia
                                        vero cumque, aliquam libero ipsum dolor sit amet consectetur
                                        adipisicing elit. Unde sapiente quisquam placeat excepturi
                                        sunt mollitia vero cumque, aliquam libero veniam odit
                                        inventore totam quis! Hic quis perferendis quaerat enim magni.
                                    </p>
                                    <p>
                                        Lorem Unde sapiente quisquam placeat excepturi sunt mollitia
                                        vero cumque, aliquam libero ipsum dolor sit amet consectetur
                                        adipisicing elit. Repellat culpa quidem reprehenderit dolor
                                        aperiam, eius consequatur est deserunt. Nisi nesciunt
                                        repellendus dolorem quam obcaecati atque animi quas debitis
                                        qui harum.
                                    </p>
                                    <p>
                                        Lorem Unde sapiente quisquam placeat excepturi sunt mollitia
                                        vero cumque, aliquam libero ipsum, dolor sit amet consectetur
                                        adipisicing elit. Aut, veritatis. Ea voluptatibus eveniet,
                                        quam dicta quisquam repellat maxime libero. Enim omnis quis,
                                        cumque facilis doloremque doloribus tempore expedita quia
                                        accusantium.
                                    </p>
                                </div>
                            </div>
                            <button
                                className="btn-see-more absolute bottom-0 z-10 flex w-full justify-center hover:text-primary-500">
                                <i
                                    className="bi bi-chevron-compact-down flex text-xl transition-all duration-300"></i>
                            </button>
                        </div>
                    </div>
                    <div className="col-span-12">
                        <div className="tab-container">
                            <ul className="flex justify-between">
                                <li
                                    className="tab-item tab-active-1 active w-full cursor-pointer bg-gray-200 p-2 text-center text-gray-400 transition-all duration-300">
                                    Comments
                                </li>
                                <li
                                    className="tab-item tab-active-1 w-full cursor-pointer bg-gray-200 p-2 text-center text-gray-400 transition-all duration-300">
                                    Reviews
                                </li>
                            </ul>
                            <div className="tab-content mt-5">
                                <div
                                    className="tab-content-item active invisible absolute w-full opacity-0">
                                    <div className="flex gap-5">
                                        <div
                                            className="hidden h-14 w-14 min-w-[3.5rem] overflow-hidden rounded-full shadow-md sm:block">
                                            <img
                                                className="h-full w-full object-cover"
                                                src="/img/comments/profile_1.png"
                                                alt="profile_logo" />
                                        </div>
                                        <form className="w-full">
                                            <div className="h-20">
                                                <textarea
                                                    className="w-full resize-none overflow-y-auto rounded-lg border-2 border-gray-200 bg-white outline-none transition-all duration-300 focus:border-2 focus:border-primary-500 focus:ring-0"
                                                    placeholder="Add a comment..."
                                                    required></textarea>
                                            </div>
                                            <button
                                                className="relative mt-2 overflow-hidden rounded-lg bg-primary-500 p-2 font-bold text-white after:absolute after:left-2/4 after:top-2/4 after:h-0 after:w-0 after:rounded-lg after:bg-primary-400 after:transition-all after:duration-300 after:content-[''] hover:after:left-0 hover:after:top-0 hover:after:z-[3] hover:after:h-full hover:after:w-full"
                                                type="submit">
                                                <span className="relative z-[4]">Comment</span>
                                            </button>
                                        </form>
                                    </div>
                                    <form
                                        className="my-5 flex flex-col xs:flex-row xs:items-center xs:justify-between">
                                        <span className="text-lg font-bold uppercase">Comments</span>
                                        <select
                                            className="nice-selectfocus:border-primary-500 focus:ring-0order-by rounded-lg border-2 border-gray-200 bg-white outline-none transition-all duration-300 focus:border-2">
                                            <option value="0">Most recent</option>
                                            <option value="1">Oldest</option>
                                        </select>
                                    </form>
                                    <div className="mt-5 flex gap-5">
                                        <div
                                            className="hidden h-14 w-14 min-w-[3.5rem] overflow-hidden rounded-full shadow-md sm:block">
                                            <img
                                                className="h-full w-full object-cover"
                                                src="/img/comments/profile_1.png"
                                                alt="profile_logo" />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <a className="font-bold hover:text-primary-500" href="#">
                                                    John Doe
                                                </a>
                                                <span className="text-xs text-slate-400">2 feb. 11:28am</span>
                                            </div>
                                            <p className="my-2">
                                                Hello, how are you? I am interested in the product. Is
                                                there stock available?
                                            </p>
                                            <div className="flex items-center gap-3">
                                                <div
                                                    className="flex cursor-pointer items-center gap-1 text-sm text-slate-500 hover:text-primary-500">
                                                    <i className="bi bi-reply-fill flex"></i>
                                                    <span>Reply</span>
                                                </div>
                                                <div
                                                    className="flex cursor-pointer items-center gap-1 text-sm text-slate-500 hover:text-primary-500">
                                                    <i className="bi bi-pencil-square flex"></i>
                                                    <span>Edit</span>
                                                </div>
                                            </div>
                                            <div className="mt-5 flex gap-5">
                                                <div
                                                    className="hidden h-14 w-14 min-w-[3.5rem] overflow-hidden rounded-full shadow-md sm:block">
                                                    <img
                                                        className="h-full w-full object-cover"
                                                        src="/img/comments/profile_2.png"
                                                        alt="profile_logo" />
                                                </div>
                                                <div>
                                                    <div className="flex items-center gap-2">
                                                        <a
                                                            className="font-bold text-blue-400 hover:text-primary-500"
                                                            href="#">
                                                            Megabyte
                                                        </a>
                                                        <span className="text-xs text-slate-400">Just now</span>
                                                    </div>
                                                    <small className="flex items-center gap-1 text-slate-400">
                                                        <i className="bi bi-reply-fill flex"></i>
                                                        Responding to
                                                        <a className="hover:text-primary-500" href="#">
                                                            John Doe
                                                        </a>
                                                    </small>
                                                    <p className="my-2">
                                                        Hi John Doe! If there is stock available, any other
                                                        questions please feel free to contact us, have a nice
                                                        day.
                                                    </p>
                                                    <div className="flex items-center gap-3">
                                                        <div
                                                            className="flex cursor-pointer items-center gap-1 text-sm text-slate-500 hover:text-primary-500">
                                                            <i className="bi bi-reply-fill flex"></i>
                                                            <span>Reply</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="tab-content-item invisible absolute w-full bg-white opacity-0">
                                    <div
                                        className="my-5 flex flex-col items-center justify-center gap-5 sm:flex-row">
                                        <div className="flex flex-col items-center gap-2">
                                            <span className="text-5xl">4,0</span>
                                            <div className="" data-rater="4"></div>
                                            <span className="flex items-center gap-1">
                                                <i className="bi bi-chat-quote flex"></i>
                                                93 Reviews
                                            </span>
                                        </div>
                                        <div className="w-full max-w-[600px]">
                                            <div className="my-2 flex items-center gap-2">
                                                <span>5</span>
                                                <div
                                                    className="relative h-5 w-full overflow-hidden rounded bg-primary-500/50">
                                                    <div
                                                        className="absolute left-0 top-0 h-full w-[50%] rounded bg-primary-500"></div>
                                                </div>
                                            </div>
                                            <div className="my-2 flex items-center gap-2">
                                                <span>4</span>
                                                <div
                                                    className="relative h-5 w-full overflow-hidden rounded bg-primary-500/50">
                                                    <div
                                                        className="absolute left-0 top-0 h-full w-[40%] rounded bg-primary-500"></div>
                                                </div>
                                            </div>
                                            <div className="my-2 flex items-center gap-2">
                                                <span>3</span>
                                                <div
                                                    className="relative h-5 w-full overflow-hidden rounded bg-primary-500/50">
                                                    <div
                                                        className="absolute left-0 top-0 h-full w-[30%] rounded bg-primary-500"></div>
                                                </div>
                                            </div>
                                            <div className="my-2 flex items-center gap-2">
                                                <span>2</span>
                                                <div
                                                    className="relative h-5 w-full overflow-hidden rounded bg-primary-500/50">
                                                    <div
                                                        className="absolute left-0 top-0 h-full w-[20%] rounded bg-primary-500"></div>
                                                </div>
                                            </div>
                                            <div className="my-2 flex items-center gap-2">
                                                <span>1</span>
                                                <div
                                                    className="relative h-5 w-full overflow-hidden rounded bg-primary-500/50">
                                                    <div
                                                        className="absolute left-0 top-0 h-full w-[10%] rounded bg-primary-500"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-5">
                                        <div
                                            className="hidden h-14 w-14 min-w-[3.5rem] overflow-hidden rounded-full shadow-md sm:block">
                                            <img
                                                className="h-full w-full object-cover"
                                                src="/img/comments/profile_1.png"
                                                alt="profile_logo" />
                                        </div>
                                        <form
                                            className="form-review flex w-full flex-col gap-2"
                                            method="GET">
                                            <div className="flex items-center gap-2">
                                                <span className="text-sm uppercase">Your Valoration:</span>
                                                <div id="rater"></div>
                                                <input
                                                    name="ratingvalue"
                                                    className="rating-value hidden"
                                                    type="number"
                                                    value="" />
                                            </div>
                                            <div className="h-20">
                                                <textarea
                                                    name="reviewvalue"
                                                    className="w-full resize-none overflow-y-auto rounded-lg border-2 border-gray-200 bg-white outline-none transition-all duration-300 focus:border-2 focus:border-primary-500 focus:ring-0"
                                                    placeholder="Add a review..."
                                                    required></textarea>
                                            </div>
                                            <div>
                                                <button
                                                    className="relative overflow-hidden rounded-lg bg-primary-500 p-2 font-bold text-white after:absolute after:left-2/4 after:top-2/4 after:h-0 after:w-0 after:rounded-lg after:bg-primary-400 after:transition-all after:duration-300 after:content-[''] hover:after:left-0 hover:after:top-0 hover:after:z-[3] hover:after:h-full hover:after:w-full"
                                                    type="submit">
                                                    <span className="relative z-[4]">Post review</span>
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                    <form
                                        className="my-5 flex flex-col xs:flex-row xs:items-center xs:justify-between">
                                        <span className="text-lg font-bold uppercase">Reviews</span>
                                        <select
                                            className="nice-selectfocus:border-primary-500 focus:ring-0order-by rounded-lg border-2 border-gray-200 bg-white outline-none transition-all duration-300 focus:border-2">
                                            <option value="0">Most recent</option>
                                            <option value="1">Oldest</option>
                                            <option value="2">5 &#x2605;</option>
                                            <option value="3">4 &#x2605;</option>
                                            <option value="4">3 &#x2605;</option>
                                            <option value="5">2 &#x2605;</option>
                                            <option value="6">1 &#x2605;</option>
                                        </select>
                                    </form>
                                    <div className="mt-5 flex gap-5">
                                        <div
                                            className="hidden h-14 w-14 min-w-[3.5rem] overflow-hidden rounded-full shadow-md sm:block">
                                            <img
                                                className="h-full w-full object-cover"
                                                src="/img/comments/profile_1.png"
                                                alt="profile_logo" />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <a className="font-bold hover:text-primary-500" href="#">
                                                    John Doe
                                                </a>
                                                <span className="text-xs text-slate-400">2 feb. 11:28am</span>
                                            </div>
                                            <div className="" data-rater="4"></div>
                                            <p className="my-2">
                                                Everything perfect, the product arrived impeccable and I
                                                had no problem, very satisfied.
                                            </p>
                                            <div className="flex items-center gap-3">
                                                <div
                                                    className="flex cursor-pointer items-center gap-1 text-sm text-slate-500 hover:text-primary-500">
                                                    <i className="bi bi-pencil-square flex"></i>
                                                    <span>Edit</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="related-products container mx-auto my-5 px-2 sm:px-8">
                <div
                    className="liner-container mt-5 flex justify-center border-b-2 border-[rgba(119,119,119,.17)]">
                    <h1
                        className="mb-[-2px] inline-block border-b-2 border-primary-500 pb-3 text-2xl font-bold uppercase">
                        Related Products
                    </h1>
                </div>
                <div className="swiper-container">
                    <div
                        className="swiper swiper-cards-1 group relative flex items-center py-5">
                        <div className="swiper-wrapper">
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
                                                data-target=" .modal-quick">
                                                <i
                                                    className="bi bi-eye pointer-events-none flex text-xl text-white"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div
                                        className="absolute left-0 top-0 flex h-[35px] w-[90px] items-center justify-center rounded-br-lg bg-primary-500">
                                        <span
                                            className="text-md text-center font-semibold uppercase text-white">
                                            25% Off
                                        </span>
                                    </div>
                                    <div className="h-[190px] overflow-hidden rounded-lg">
                                        <a href="#">
                                            <img
                                                className="h-full w-full object-contain"
                                                src="/img/cards/notebooks/note_1.jpg"
                                                alt="product" />
                                        </a>
                                    </div>
                                    <div className="my-2 flex justify-between">
                                        <div className="my-2" data-rater="5"></div>
                                        <div>
                                            <span
                                                className="relative z-[4] rounded-md bg-green-300 px-2 py-1 text-xs font-bold uppercase text-white">
                                                instock
                                            </span>
                                        </div>
                                    </div>
                                    <div className="my-1">
                                        <a className="line-clamp-1break-all font-medium" href="#">
                                            Apple Macbook Aire 13
                                        </a>
                                    </div>
                                    <div className="my-1">
                                        <p className="line-clamp-2 text-sm text-gray-400">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Itaque culpa, odio, qui praesentium dignissimos eaque
                                            dolorum porro alias neque, eius animi ipsa voluptates. Optio
                                            repellat tempora voluptas, dolores ipsam ad!
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
                                        <span className="text-sm text-primary-500 line-through">
                                            $50.00
                                        </span>
                                    </div>
                                    <div className="mt-auto">
                                        <a
                                            className="relative flex w-full items-center justify-center overflow-hidden rounded-lg bg-primary-500 p-2 transition-all duration-300 after:absolute after:left-2/4 after:top-2/4 after:h-0 after:w-0 after:rounded-lg after:bg-primary-400 after:transition-all after:duration-300 after:content-[''] hover:after:left-0 hover:after:top-0 hover:after:z-[3] hover:after:h-full hover:after:w-full"
                                            href="#">
                                            <span className="relative z-[4] font-bold uppercase text-white">
                                                View details
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
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
                                                data-target=" .modal-quick">
                                                <i
                                                    className="bi bi-eye pointer-events-none flex text-xl text-white"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div
                                        className="absolute left-0 top-0 flex h-[35px] w-[90px] items-center justify-center rounded-br-lg bg-primary-500">
                                        <span
                                            className="text-md text-center font-semibold uppercase text-white">
                                            25% Off
                                        </span>
                                    </div>
                                    <div className="h-[190px] overflow-hidden rounded-lg">
                                        <a href="#">
                                            <img
                                                className="h-full w-full object-contain"
                                                src="/img/categories/gaming/consoles.jpg"
                                                alt="product" />
                                        </a>
                                    </div>
                                    <div className="my-2 flex justify-between">
                                        <div className="my-2" data-rater="5"></div>
                                        <div>
                                            <span
                                                className="relative z-[4] rounded-md bg-green-300 px-2 py-1 text-xs font-bold uppercase text-white">
                                                instock
                                            </span>
                                        </div>
                                    </div>
                                    <div className="my-1">
                                        <a className="line-clamp-1break-all font-medium" href="#">
                                            PlayStation 5
                                        </a>
                                    </div>
                                    <div className="my-1">
                                        <p className="line-clamp-2 text-sm text-gray-400">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Itaque culpa, odio, qui praesentium dignissimos eaque
                                            dolorum porro alias neque, eius animi ipsa voluptates. Optio
                                            repellat tempora voluptas, dolores ipsam ad!
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
                                        <span className="text-sm text-primary-500 line-through">
                                            $50.00
                                        </span>
                                    </div>
                                    <div className="mt-auto">
                                        <a
                                            className="relative flex w-full items-center justify-center overflow-hidden rounded-lg bg-primary-500 p-2 transition-all duration-300 after:absolute after:left-2/4 after:top-2/4 after:h-0 after:w-0 after:rounded-lg after:bg-primary-400 after:transition-all after:duration-300 after:content-[''] hover:after:left-0 hover:after:top-0 hover:after:z-[3] hover:after:h-full hover:after:w-full"
                                            href="#">
                                            <span className="relative z-[4] font-bold uppercase text-white">
                                                View details
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
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
                                                data-target=" .modal-quick">
                                                <i
                                                    className="bi bi-eye pointer-events-none flex text-xl text-white"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div
                                        className="absolute left-0 top-0 flex h-[35px] w-[90px] items-center justify-center rounded-br-lg bg-primary-500">
                                        <span
                                            className="text-md text-center font-semibold uppercase text-white">
                                            25% Off
                                        </span>
                                    </div>
                                    <div className="h-[190px] overflow-hidden rounded-lg">
                                        <a href="#">
                                            <img
                                                className="h-full w-full object-contain"
                                                src="/img/cards/mousepad.jpg"
                                                alt="product" />
                                        </a>
                                    </div>
                                    <div className="my-2 flex justify-between">
                                        <div className="my-2" data-rater="5"></div>
                                        <div>
                                            <span
                                                className="relative z-[4] rounded-md bg-green-300 px-2 py-1 text-xs font-bold uppercase text-white">
                                                instock
                                            </span>
                                        </div>
                                    </div>
                                    <div className="my-1">
                                        <a className="line-clamp-1break-all font-medium" href="#">
                                            Mousepad Hyperx Fury S Pro Speed
                                        </a>
                                    </div>
                                    <div className="my-1">
                                        <p className="line-clamp-2 text-sm text-gray-400">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Itaque culpa, odio, qui praesentium dignissimos eaque
                                            dolorum porro alias neque, eius animi ipsa voluptates. Optio
                                            repellat tempora voluptas, dolores ipsam ad!
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
                                        <span className="text-sm text-primary-500 line-through">
                                            $50.00
                                        </span>
                                    </div>
                                    <div className="mt-auto">
                                        <a
                                            className="relative flex w-full items-center justify-center overflow-hidden rounded-lg bg-primary-500 p-2 transition-all duration-300 after:absolute after:left-2/4 after:top-2/4 after:h-0 after:w-0 after:rounded-lg after:bg-primary-400 after:transition-all after:duration-300 after:content-[''] hover:after:left-0 hover:after:top-0 hover:after:z-[3] hover:after:h-full hover:after:w-full"
                                            href="#">
                                            <span className="relative z-[4] font-bold uppercase text-white">
                                                View details
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
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
                                                data-target=" .modal-quick">
                                                <i
                                                    className="bi bi-eye pointer-events-none flex text-xl text-white"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div
                                        className="absolute left-0 top-0 flex h-[35px] w-[90px] items-center justify-center rounded-br-lg bg-primary-500">
                                        <span
                                            className="text-md text-center font-semibold uppercase text-white">
                                            25% Off
                                        </span>
                                    </div>
                                    <div className="h-[190px] overflow-hidden rounded-lg">
                                        <a href="#">
                                            <img
                                                className="h-full w-full object-contain"
                                                src="/img/categories/pc_components/processors.jpg"
                                                alt="product" />
                                        </a>
                                    </div>
                                    <div className="my-2 flex justify-between">
                                        <div className="my-2" data-rater="5"></div>
                                        <div>
                                            <span
                                                className="relative z-[4] rounded-md bg-green-300 px-2 py-1 text-xs font-bold uppercase text-white">
                                                instock
                                            </span>
                                        </div>
                                    </div>
                                    <div className="my-1">
                                        <a className="line-clamp-1break-all font-medium" href="#">
                                            Ryzen 5 3600x
                                        </a>
                                    </div>
                                    <div className="my-1">
                                        <p className="line-clamp-2 text-sm text-gray-400">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Itaque culpa, odio, qui praesentium dignissimos eaque
                                            dolorum porro alias neque, eius animi ipsa voluptates. Optio
                                            repellat tempora voluptas, dolores ipsam ad!
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
                                        <span className="text-sm text-primary-500 line-through">
                                            $50.00
                                        </span>
                                    </div>
                                    <div className="mt-auto">
                                        <a
                                            className="relative flex w-full items-center justify-center overflow-hidden rounded-lg bg-primary-500 p-2 transition-all duration-300 after:absolute after:left-2/4 after:top-2/4 after:h-0 after:w-0 after:rounded-lg after:bg-primary-400 after:transition-all after:duration-300 after:content-[''] hover:after:left-0 hover:after:top-0 hover:after:z-[3] hover:after:h-full hover:after:w-full"
                                            href="#">
                                            <span className="relative z-[4] font-bold uppercase text-white">
                                                View details
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
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
                                                data-target=" .modal-quick">
                                                <i
                                                    className="bi bi-eye pointer-events-none flex text-xl text-white"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div
                                        className="absolute left-0 top-0 flex h-[35px] w-[90px] items-center justify-center rounded-br-lg bg-primary-500">
                                        <span
                                            className="text-md text-center font-semibold uppercase text-white">
                                            25% Off
                                        </span>
                                    </div>
                                    <div className="h-[190px] overflow-hidden rounded-lg">
                                        <a href="#">
                                            <img
                                                className="h-full w-full object-contain"
                                                src="/img/categories/peripherals/mouse.jpg"
                                                alt="product" />
                                        </a>
                                    </div>
                                    <div className="my-2 flex justify-between">
                                        <div className="my-2" data-rater="5"></div>
                                        <div>
                                            <span
                                                className="relative z-[4] rounded-md bg-green-300 px-2 py-1 text-xs font-bold uppercase text-white">
                                                instock
                                            </span>
                                        </div>
                                    </div>
                                    <div className="my-1">
                                        <a className="line-clamp-1break-all font-medium" href="#">
                                            Mouse Logitech g403
                                        </a>
                                    </div>
                                    <div className="my-1">
                                        <p className="line-clamp-2 text-sm text-gray-400">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Itaque culpa, odio, qui praesentium dignissimos eaque
                                            dolorum porro alias neque, eius animi ipsa voluptates. Optio
                                            repellat tempora voluptas, dolores ipsam ad!
                                        </p>
                                    </div>
                                    <div className="my-2 flex gap-2">
                                        <div className="block h-3 w-3 rounded-full bg-blue-600"></div>
                                        <div className="block h-3 w-3 rounded-full bg-red-600"></div>
                                        <div className="block h-3 w-3 rounded-full bg-yellow-600"></div>
                                        <div className="block h-3 w-3 rounded-full bg-black"></div>
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
                                    <div className="my-1">
                                        <span className="text-lg font-bold">$37.00</span>
                                        <span className="text-sm text-primary-500 line-through">
                                            $50.00
                                        </span>
                                    </div>
                                    <div className="mt-auto">
                                        <a
                                            className="relative flex w-full items-center justify-center overflow-hidden rounded-lg bg-primary-500 p-2 transition-all duration-300 after:absolute after:left-2/4 after:top-2/4 after:h-0 after:w-0 after:rounded-lg after:bg-primary-400 after:transition-all after:duration-300 after:content-[''] hover:after:left-0 hover:after:top-0 hover:after:z-[3] hover:after:h-full hover:after:w-full"
                                            href="#">
                                            <span className="relative z-[4] font-bold uppercase text-white">
                                                View details
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
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
                                                data-target=" .modal-quick">
                                                <i
                                                    className="bi bi-eye pointer-events-none flex text-xl text-white"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div
                                        className="absolute left-0 top-0 flex h-[35px] w-[90px] items-center justify-center rounded-br-lg bg-primary-500">
                                        <span
                                            className="text-md text-center font-semibold uppercase text-white">
                                            25% Off
                                        </span>
                                    </div>
                                    <div className="h-[190px] overflow-hidden rounded-lg">
                                        <a href="#">
                                            <img
                                                className="h-full w-full object-contain"
                                                src="/img/cards/phones/phone_1.jpg"
                                                alt="product" />
                                        </a>
                                    </div>
                                    <div className="my-2 flex justify-between">
                                        <div className="my-2" data-rater="5"></div>
                                        <div>
                                            <span
                                                className="relative z-[4] rounded-md bg-green-300 px-2 py-1 text-xs font-bold uppercase text-white">
                                                instock
                                            </span>
                                        </div>
                                    </div>
                                    <div className="my-1">
                                        <a className="line-clamp-1break-all font-medium" href="#">
                                            Moto e7i Power
                                        </a>
                                    </div>
                                    <div className="my-1">
                                        <p className="line-clamp-2 text-sm text-gray-400">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Itaque culpa, odio, qui praesentium dignissimos eaque
                                            dolorum porro alias neque, eius animi ipsa voluptates. Optio
                                            repellat tempora voluptas, dolores ipsam ad!
                                        </p>
                                    </div>
                                    <div className="my-2 flex gap-2">
                                        <div className="block h-3 w-3 rounded-full bg-blue-600"></div>
                                        <div className="block h-3 w-3 rounded-full bg-red-600"></div>
                                        <div className="block h-3 w-3 rounded-full bg-yellow-600"></div>
                                        <div className="block h-3 w-3 rounded-full bg-black"></div>
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
                                    <div className="my-1">
                                        <span className="text-lg font-bold">$37.00</span>
                                        <span className="text-sm text-primary-500 line-through">
                                            $50.00
                                        </span>
                                    </div>
                                    <div className="mt-auto">
                                        <a
                                            className="relative flex w-full items-center justify-center overflow-hidden rounded-lg bg-primary-500 p-2 transition-all duration-300 after:absolute after:left-2/4 after:top-2/4 after:h-0 after:w-0 after:rounded-lg after:bg-primary-400 after:transition-all after:duration-300 after:content-[''] hover:after:left-0 hover:after:top-0 hover:after:z-[3] hover:after:h-full hover:after:w-full"
                                            href="#">
                                            <span className="relative z-[4] font-bold uppercase text-white">
                                                View details
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
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
                                                data-target=" .modal-quick">
                                                <i
                                                    className="bi bi-eye pointer-events-none flex text-xl text-white"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div
                                        className="absolute left-0 top-0 flex h-[35px] w-[90px] items-center justify-center rounded-br-lg bg-primary-500">
                                        <span
                                            className="text-md text-center font-semibold uppercase text-white">
                                            25% Off
                                        </span>
                                    </div>
                                    <div className="h-[190px] overflow-hidden rounded-lg">
                                        <a href="#">
                                            <img
                                                className="h-full w-full object-contain"
                                                src="/img/cards/notebooks/note_6.jpg"
                                                alt="product" />
                                        </a>
                                    </div>
                                    <div className="my-2 flex justify-between">
                                        <div className="my-2" data-rater="5"></div>
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
                                            dolorum porro alias neque, eius animi ipsa voluptates. Optio
                                            repellat tempora voluptas, dolores ipsam ad!
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
                                        <span className="text-sm text-primary-500 line-through">
                                            $50.00
                                        </span>
                                    </div>
                                    <div className="mt-auto">
                                        <a
                                            className="relative flex w-full items-center justify-center overflow-hidden rounded-lg bg-primary-500 p-2 transition-all duration-300 after:absolute after:left-2/4 after:top-2/4 after:h-0 after:w-0 after:rounded-lg after:bg-primary-400 after:transition-all after:duration-300 after:content-[''] hover:after:left-0 hover:after:top-0 hover:after:z-[3] hover:after:h-full hover:after:w-full"
                                            href="#">
                                            <span className="relative z-[4] font-bold uppercase text-white">
                                                View details
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
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
                                                data-target=" .modal-quick">
                                                <i
                                                    className="bi bi-eye pointer-events-none flex text-xl text-white"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div
                                        className="absolute left-0 top-0 flex h-[35px] w-[90px] items-center justify-center rounded-br-lg bg-primary-500">
                                        <span
                                            className="text-md text-center font-semibold uppercase text-white">
                                            25% Off
                                        </span>
                                    </div>
                                    <div className="h-[190px] overflow-hidden rounded-lg">
                                        <a href="#">
                                            <img
                                                className="h-full w-full object-contain"
                                                src="/img/cards/phones/phone_5.jpg"
                                                alt="product" />
                                        </a>
                                    </div>
                                    <div className="my-2 flex justify-between">
                                        <div className="my-2" data-rater="5"></div>
                                        <div>
                                            <span
                                                className="relative z-[4] rounded-md bg-green-300 px-2 py-1 text-xs font-bold uppercase text-white">
                                                instock
                                            </span>
                                        </div>
                                    </div>
                                    <div className="my-1">
                                        <a className="line-clamp-1break-all font-medium" href="#">
                                            Samsung Galaxy Z Fold4
                                        </a>
                                    </div>
                                    <div className="my-1">
                                        <p className="line-clamp-2 text-sm text-gray-400">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Itaque culpa, odio, qui praesentium dignissimos eaque
                                            dolorum porro alias neque, eius animi ipsa voluptates. Optio
                                            repellat tempora voluptas, dolores ipsam ad!
                                        </p>
                                    </div>
                                    <div className="my-2 flex gap-2">
                                        <div className="block h-3 w-3 rounded-full bg-blue-600"></div>
                                        <div className="block h-3 w-3 rounded-full bg-red-600"></div>
                                        <div className="block h-3 w-3 rounded-full bg-yellow-600"></div>
                                        <div className="block h-3 w-3 rounded-full bg-black"></div>
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
                                    <div className="my-1">
                                        <span className="text-lg font-bold">$37.00</span>
                                        <span className="text-sm text-primary-500 line-through">
                                            $50.00
                                        </span>
                                    </div>
                                    <div className="mt-auto">
                                        <a
                                            className="relative flex w-full items-center justify-center overflow-hidden rounded-lg bg-primary-500 p-2 transition-all duration-300 after:absolute after:left-2/4 after:top-2/4 after:h-0 after:w-0 after:rounded-lg after:bg-primary-400 after:transition-all after:duration-300 after:content-[''] hover:after:left-0 hover:after:top-0 hover:after:z-[3] hover:after:h-full hover:after:w-full"
                                            href="#">
                                            <span className="relative z-[4] font-bold uppercase text-white">
                                                View details
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="button-next absolute -right-16 z-20 flex h-10 w-10 select-none items-center justify-center rounded bg-black/30 text-xl text-white shadow transition-all duration-300 group-hover:right-4 hover:bg-primary-500 hover:shadow-md">
                            &#10095;
                        </div>
                        <div
                            className="button-prev absolute -left-16 z-20 flex h-10 w-10 select-none items-center justify-center rounded bg-black/30 text-xl text-white shadow transition-all duration-300 group-hover:left-4 hover:bg-primary-500 hover:shadow-md">
                            &#10094;
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </div>
            </div>

            {/* <!-- Modals --> */}
            <div className="modal-menu modal-container resize-close modal-overlay z-20">
                <div
                    className="modal-content modal-left flex h-full w-[288px] min-w-[250px] flex-col bg-[#f5f7fe]">
                    <div className="w-full bg-primary-700">
                        <button
                            className="close-modal absolute right-5 top-5 p-[3px] text-white transition-all duration-300">
                            <i className="bi bi-x-lg pointer-events-none flex text-xl"></i>
                        </button>
                        <div className="py-12">
                            <img src="/img/logo.png" className="mx-auto h-[40px]" alt="logo" />
                        </div>
                    </div>
                    <nav className="h-full w-full overflow-auto bg-white">
                        <ul className="metismenu">
                            <li className="border-b border-gray-200">
                                <a className="flex select-none items-center p-2" href="index.html">
                                    <i
                                        className="bi bi-house-door mr-3 flex text-xl text-primary-500"></i>
                                    <span className="font-semibold">Home</span>
                                </a>
                            </li>
                            <li className="border-b border-gray-200">
                                <div
                                    className="sub-metismenu has-arrow flex cursor-pointer select-none items-center p-2"
                                    aria-expanded="false"
                                    role="menu">
                                    <i className="bi bi-person mr-3 flex text-xl text-primary-500"></i>
                                    <span className="font-semibold">My Account</span>
                                </div>
                                <div className="metismenu-content">
                                    <a
                                        className="ml-10 block p-1"
                                        href="#"
                                        data-tab="0"
                                        data-target=".modal-entry">
                                        Login
                                    </a>
                                    <a
                                        className="ml-10 block p-1"
                                        href="#"
                                        data-tab="1"
                                        data-target=".modal-entry">
                                        Sign Up
                                    </a>
                                </div>
                            </li>
                            <li className="border-b border-gray-200">
                                <div className="cursor-pointer p-2" data-target=".modal-wishlist">
                                    <div
                                        className="pointer-events-none flex cursor-pointer select-none items-center">
                                        <i className="bi bi-heart mr-3 flex text-xl text-primary-500"></i>
                                        <span className="font-semibold">Wishlist</span>
                                        <span
                                            className="ml-auto flex h-[22px] min-w-[22px] items-center justify-center rounded-xl bg-primary-500 px-[6px] text-xs text-white">
                                            0
                                        </span>
                                    </div>
                                </div>
                            </li>
                            <li className="border-b border-gray-200">
                                <div className="cursor-pointer p-2" data-target=".modal-cart">
                                    <div
                                        className="pointer-events-none flex cursor-pointer select-none items-center">
                                        <i className="bi bi-cart mr-3 flex text-xl text-primary-500"></i>
                                        <span className="font-semibold">Shopping Cart</span>
                                        <span
                                            className="ml-auto flex h-[22px] min-w-[22px] items-center justify-center rounded-xl bg-primary-500 px-[6px] text-xs text-white">
                                            0
                                        </span>
                                    </div>
                                </div>
                            </li>
                            <li className="border-b border-gray-200">
                                <div
                                    className="sub-metismenu has-arrow flex cursor-pointer select-none items-center p-2"
                                    aria-expanded="false"
                                    role="menu">
                                    <i
                                        className="bi bi-motherboard mr-3 flex text-xl text-primary-500"></i>
                                    <span className="font-semibold">Hardware</span>
                                </div>
                                <div className="metismenu-content">
                                    <a className="ml-10 block p-1" href="#">Motherboards</a>
                                    <a className="ml-10 block p-1" href="#">Processors</a>
                                    <a className="ml-10 block p-1" href="#">Rams</a>
                                    <a className="ml-10 block p-1" href="#">Video Cards</a>
                                    <a className="ml-10 block p-1" href="#">Power Supplys</a>
                                    <a className="ml-10 block p-1" href="#">Hard Drives</a>
                                    <a className="ml-10 block p-1" href="#">SSD Disk</a>
                                </div>
                            </li>
                            <li className="border-b border-gray-200">
                                <div
                                    className="sub-metismenu has-arrow flex cursor-pointer select-none items-center p-2"
                                    aria-expanded="false"
                                    role="menu">
                                    <i className="bi bi-mouse mr-3 flex text-xl text-primary-500"></i>
                                    <span className="font-semibold">Peripherals</span>
                                </div>
                                <div className="metismenu-content">
                                    <a className="ml-10 block p-1" href="#">Keywords</a>
                                    <a className="ml-10 block p-1" href="#">Mouses</a>
                                    <a className="ml-10 block p-1" href="#">Mics</a>
                                    <a className="ml-10 block p-1" href="#">Webcam</a>
                                </div>
                            </li>
                            <li className="border-b border-gray-200">
                                <div
                                    className="sub-metismenu has-arrow flex cursor-pointer select-none items-center p-2"
                                    aria-expanded="false"
                                    role="menu">
                                    <i
                                        className="bi bi-pc-display mr-3 flex text-xl text-primary-500"></i>
                                    <span className="font-semibold">Computers</span>
                                </div>
                                <div className="metismenu-content">
                                    <a className="ml-10 block p-1" href="#">Notebooks</a>
                                    <a className="ml-10 block p-1" href="#">Desktops</a>
                                </div>
                            </li>
                            <li className="border-b border-gray-200">
                                <a
                                    className="flex cursor-pointer select-none items-center p-2"
                                    href="#">
                                    <i className="bi bi-tv mr-3 flex text-xl text-primary-500"></i>
                                    <span className="font-semibold">Monitors</span>
                                </a>
                            </li>
                            <li className="border-b border-gray-200">
                                <a
                                    className="flex cursor-pointer select-none items-center p-2"
                                    href="#">
                                    <i className="bi bi-printer mr-3 flex text-xl text-primary-500"></i>
                                    <span className="font-semibold">Printers</span>
                                </a>
                            </li>
                            <li className="border-b border-gray-200">
                                <a
                                    className="flex cursor-pointer select-none items-center p-2"
                                    href="#">
                                    <i className="bi bi-phone mr-3 flex text-xl text-primary-500"></i>
                                    <span className="font-semibold">Smartphones</span>
                                </a>
                            </li>
                            <li className="border-b border-gray-200">
                                <a className="flex select-none items-center p-2" href="faqs.html">
                                    <i
                                        className="bi bi-question-circle mr-3 flex text-xl text-primary-500"></i>
                                    <span className="font-semibold">FAQ's</span>
                                </a>
                            </li>
                            <li className="border-b border-gray-200">
                                <a
                                    className="flex select-none items-center p-2"
                                    href="contact-us.html">
                                    <i
                                        className="bi bi-telephone mr-3 flex text-xl text-primary-500"></i>
                                    <span className="font-semibold">Contact Us</span>
                                </a>
                            </li>
                            <li className="border-b border-gray-200">
                                <div
                                    className="sub-metismenu has-arrow flex cursor-pointer select-none items-center p-2"
                                    aria-expanded="false"
                                    role="menu">
                                    <span className="font-semibold">Pages</span>
                                </div>
                                <div className="metismenu-content">
                                    <a className="ml-10 block p-1" href="wishlist.html">Wishlist</a>
                                    <a className="ml-10 block p-1" href="shopping-cart.html">
                                        Shopping Cart
                                    </a>
                                    <a className="ml-10 block p-1" href="product-details.html">
                                        Product Details
                                    </a>
                                    <a className="ml-10 block p-1" href="checkout.html">Checkout</a>
                                    <a className="ml-10 block p-1" href="shop-mixed.html">
                                        Shop - Mixed
                                    </a>
                                    <a className="ml-10 block p-1" href="shop-listed.html">
                                        Shop - Listed
                                    </a>
                                    <a className="ml-10 block p-1" href="shop-grid.html">Shop - Grid</a>
                                    <a className="ml-10 block p-1" href="about-us.html">About Us</a>
                                    <a className="ml-10 block p-1" href="my-account.html">My Account</a>
                                    <a className="ml-10 block p-1" href="forgot-password.html">
                                        Forgot Password
                                    </a>
                                    <a className="ml-10 block p-1" href="login.html">Login</a>
                                    <a className="ml-10 block p-1" href="sign-up.html">Sign Up</a>
                                    <a className="ml-10 block p-1" href="verification.html">
                                        Verification
                                    </a>
                                    <a className="ml-10 block p-1" href="terms-and-conditions.html">
                                        Terms & Conditions
                                    </a>
                                    <a className="ml-10 block p-1" href="privacy-policy.html">
                                        Privacy Policy
                                    </a>
                                    <a className="ml-10 block p-1" href="error404.html">Error 404</a>
                                    <a className="ml-10 block p-1" href="message-sent.html">
                                        Message Sent
                                    </a>
                                    <a className="ml-10 block p-1" href="purchase-completed.html">
                                        Purchase Completed
                                    </a>
                                    <a className="ml-10 block p-1" href="purchase-failed.html">
                                        Purchase Failed
                                    </a>
                                    <a className="ml-10 block p-1" href="maintenance.html">
                                        Maintenance
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

            <div className="modal-cart modal-container modal-overlay z-20">
                <div
                    className="modal-content modal-right flex h-full w-[400px] min-w-[250px] flex-col bg-[#f5f7fe]">
                    <div className="w-full">
                        <div className="border-b-2 border-gray-200 p-5">
                            <h3 className="text-xl font-bold uppercase">Shopping Cart</h3>
                        </div>
                        <button
                            className="close-modal absolute right-5 top-5 p-[3px] transition-all duration-300 hover:text-slate-400">
                            <i className="bi bi-x-lg pointer-events-none flex text-xl"></i>
                        </button>
                    </div>
                    <div className="h-full overflow-auto">
                        {/* <!-- If the shopping cart is empty (replace hidden with flex) --> */}
                        <div className="hidden flex-col items-center justify-center gap-4 p-5">
                            <i className="bi bi-cart-x text-8xl text-gray-200"></i>
                            <p className="font-semibold">There are no products in the cart.</p>
                            <a
                                className="relative flex items-center justify-center gap-2 overflow-hidden rounded-lg bg-primary-500 p-2 transition-all duration-300 after:absolute after:left-2/4 after:top-2/4 after:h-0 after:w-0 after:rounded-lg after:bg-primary-400 after:transition-all after:duration-300 after:content-[''] hover:after:left-0 hover:after:top-0 hover:after:z-[3] hover:after:h-full hover:after:w-full"
                                href="#">
                                <span className="relative z-[4] font-bold uppercase text-white">
                                    Go to the store
                                </span>
                            </a>
                        </div>
                        {/* <!-- --> */}
                        <a
                            className="flex h-[100px] w-full items-center justify-between gap-5 bg-white p-2 transition-all duration-300 hover:bg-gray-100"
                            href="#">
                            <div
                                className="h-[80px] w-[80px] min-w-[80px] overflow-hidden rounded-lg border">
                                <img
                                    className="h-full w-full object-cover"
                                    src="/img/product/prod-1.jpg"
                                    alt="product" />
                            </div>
                            <div className="flex w-full flex-col">
                                <h6 className="line-clamp-2 break-all text-lg font-semibold">
                                    Ryzen 5 3600x
                                </h6>
                                <div className="flex gap-2">
                                    <div className="flex gap-1 leading-7 text-gray-400">
                                        <span>1</span>
                                        <span>X</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="font-bold text-primary-500">$37.00</span>
                                        <small className="text-xs text-primary-500 line-through">
                                            $50.00
                                        </small>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="flex text-slate-400 transition-all duration-300 hover:text-primary-500">
                                <i className="bi bi-trash-fill pointer-events-none text-2xl"></i>
                            </div>
                        </a>
                    </div>
                    <div
                        className="mt-auto border-t-2 border-gray-200 bg-white px-1 pt-5 xs:px-5">
                        <div className="flex justify-between">
                            <span className="text-lg uppercase">Subtotal:</span>
                            <span className="text-lg font-semibold text-primary-500">$37.00</span>
                        </div>
                        <a
                            className="relative my-5 flex w-full items-center justify-center overflow-hidden rounded-lg bg-primary-500 p-2 transition-all duration-300 after:absolute after:left-2/4 after:top-2/4 after:h-0 after:w-0 after:rounded-lg after:bg-primary-400 after:transition-all after:duration-300 after:content-[''] hover:after:left-0 hover:after:top-0 hover:after:z-[3] hover:after:h-full hover:after:w-full"
                            href="shopping-cart.html">
                            <span className="relative z-[4] font-bold uppercase text-white">
                                View Shopping Cart
                            </span>
                        </a>
                        <a
                            className="relative my-5 flex w-full items-center justify-center overflow-hidden rounded-lg bg-primary-500 p-2 transition-all duration-300 after:absolute after:left-2/4 after:top-2/4 after:h-0 after:w-0 after:rounded-lg after:bg-primary-400 after:transition-all after:duration-300 after:content-[''] hover:after:left-0 hover:after:top-0 hover:after:z-[3] hover:after:h-full hover:after:w-full"
                            href="checkout.html">
                            <span className="relative z-[4] font-bold uppercase text-white">
                                Checkout now
                            </span>
                        </a>
                    </div>
                </div>
            </div>

            <div className="modal-wishlist modal-container modal-overlay z-20">
                <div
                    className="modal-content modal-right flex h-full w-[400px] min-w-[250px] flex-col bg-[#f5f7fe]">
                    <div className="w-full">
                        <div className="border-b-2 border-gray-200 p-5">
                            <h3 className="text-xl font-bold uppercase">Wishlist</h3>
                        </div>
                        <button
                            className="close-modal absolute right-5 top-5 p-[3px] transition-all duration-300 hover:text-slate-400">
                            <i className="bi bi-x-lg pointer-events-none flex text-xl"></i>
                        </button>
                    </div>
                    <div className="h-full overflow-auto">
                        {/* <!-- If the wishlist is empty (replace hidden with flex) --> */}
                        <div className="hidden flex-col items-center justify-center gap-4 p-5">
                            <i className="bi bi-heart text-8xl text-gray-200"></i>
                            <p className="font-semibold">There are no products in the wishlist.</p>
                            <a
                                className="relative flex items-center justify-center gap-2 overflow-hidden rounded-lg bg-primary-500 p-2 transition-all duration-300 after:absolute after:left-2/4 after:top-2/4 after:h-0 after:w-0 after:rounded-lg after:bg-primary-400 after:transition-all after:duration-300 after:content-[''] hover:after:left-0 hover:after:top-0 hover:after:z-[3] hover:after:h-full hover:after:w-full"
                                href="#">
                                <span className="relative z-[4] font-bold uppercase text-white">
                                    Go to the store
                                </span>
                            </a>
                        </div>
                        <a
                            className="flex h-[100px] w-full items-center justify-between gap-5 bg-white p-2 transition-all duration-300 hover:bg-gray-100"
                            href="#">
                            <div
                                className="h-[80px] w-[80px] min-w-[80px] overflow-hidden rounded-lg border">
                                <img
                                    className="h-full w-full object-cover"
                                    src="/img/product/prod-1.jpg"
                                    alt="product" />
                            </div>

                            <div className="flex w-full flex-col">
                                <h6 className="line-clamp-2 break-all text-lg font-semibold">
                                    Ryzen 5 3600x
                                </h6>
                                <div className="flex items-center gap-2">
                                    <span className="font-bold text-primary-500">$37.00</span>
                                    <small className="text-xs text-primary-500 line-through">
                                        $50.00
                                    </small>
                                </div>
                            </div>

                            <div
                                className="flex text-slate-400 transition-all duration-300 hover:text-primary-500">
                                <i className="bi bi-trash-fill pointer-events-none text-2xl"></i>
                            </div>
                        </a>
                    </div>
                    <div className="mt-auto border-t-2 border-gray-200 bg-white px-1 xs:px-5">
                        <a
                            className="relative my-5 flex w-full items-center justify-center overflow-hidden rounded-lg bg-primary-500 p-2 transition-all duration-300 after:absolute after:left-2/4 after:top-2/4 after:h-0 after:w-0 after:rounded-lg after:bg-primary-400 after:transition-all after:duration-300 after:content-[''] hover:after:left-0 hover:after:top-0 hover:after:z-[3] hover:after:h-full hover:after:w-full"
                            href="wishlist.html">
                            <span className="relative z-[4] font-bold uppercase text-white">
                                View Wishlist
                            </span>
                        </a>
                    </div>
                </div>
            </div>
            {/* 
            <<div className="modal-entry modal-container modal-overlay">
                <div
                    className="modal-content modal-center-top flex w-[500px] min-w-[250px] flex-col rounded-lg bg-white p-5">
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
                                <form action="#">
                                    <div className="flex flex-col gap-4">
                                        <div className="relative flex h-[40px] items-center">
                                            <i
                                                className="bi bi-person absolute ml-2 flex text-[24px] text-gray-400"></i>
                                            <input
                                                className="w-full rounded-lg border-2 border-gray-200 bg-white pl-10 outline-none transition-all duration-300 focus:border-2 focus:border-primary-500 focus:ring-0"
                                                type="text"
                                                placeholder="Username or Email"
                                                required />
                                        </div>
                                        <div className="relative flex h-[40px] items-center">
                                            <i
                                                className="bi bi-lock absolute ml-2 flex text-[24px] text-gray-400"></i>
                                            <input
                                                className="w-full rounded-lg border-2 border-gray-200 bg-white pl-10 outline-none transition-all duration-300 focus:border-2 focus:border-primary-500 focus:ring-0"
                                                type="password"
                                                placeholder="Password"
                                                required />
                                        </div>
                                        <button
                                            className="relative h-full w-full overflow-hidden rounded-lg bg-primary-500 p-2 transition-all duration-300 after:absolute after:left-2/4 after:top-2/4 after:h-0 after:w-0 after:rounded-lg after:bg-primary-400 after:transition-all after:duration-300 after:content-[''] hover:after:left-0 hover:after:top-0 hover:after:z-[3] hover:after:h-full hover:after:w-full"
                                            type="submit">
                                            <span className="relative z-[4] font-bold uppercase text-white">
                                                Login
                                            </span>
                                        </button>
                                    </div>
                                    <div
                                        className="my-2 flex flex-wrap items-center justify-between gap-2">
                                        <label className="flex select-none items-center gap-2">
                                            <input
                                                className="h-4 w-4 rounded border text-primary-500 focus:border-transparent focus:ring focus:ring-primary-400 focus:ring-offset-0"
                                                type="checkbox" />
                                            <span>Remember</span>
                                        </label>
                                        <a
                                            className="relative cursor-pointer text-[#3091ff] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1 after:w-full after:origin-center after:scale-x-0 after:rounded-lg after:bg-primary-500 after:transition-transform after:duration-200 after:content-[''] hover:after:scale-x-100"
                                            href="#">
                                            Forgot Password?
                                        </a>
                                    </div>
                                </form>
                                <span
                                    className="flex items-center py-2 before:my-auto before:h-px before:w-full before:bg-gray-400 before:content-[''] after:my-auto after:h-px after:w-full after:bg-gray-400 after:content-['']">
                                    <span className="mx-2 text-sm uppercase">Or</span>
                                </span>
                                <div
                                    className="flex flex-col flex-wrap justify-center gap-5 sm:flex-row">
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
                                <form action="#">
                                    <div className="flex flex-col gap-4">
                                        <div className="relative flex h-[40px] items-center">
                                            <i
                                                className="bi bi-person absolute ml-2 flex text-[24px] text-gray-400"></i>
                                            <input
                                                className="w-full rounded-lg border-2 border-gray-200 bg-white pl-10 outline-none transition-all duration-300 focus:border-2 focus:border-primary-500 focus:ring-0"
                                                type="text"
                                                placeholder="Name"
                                                required />
                                        </div>
                                        <div className="relative flex h-[40px] items-center">
                                            <i
                                                className="bi bi-envelope absolute ml-2 flex text-[24px] text-gray-400"></i>
                                            <input
                                                className="w-full rounded-lg border-2 border-gray-200 bg-white pl-10 outline-none transition-all duration-300 focus:border-2 focus:border-primary-500 focus:ring-0"
                                                type="text"
                                                placeholder="Email"
                                                required />
                                        </div>
                                        <div className="relative flex h-[40px] items-center">
                                            <i
                                                className="bi bi-lock absolute ml-2 flex text-[24px] text-gray-400"></i>
                                            <input
                                                className="w-full rounded-lg border-2 border-gray-200 bg-white pl-10 outline-none transition-all duration-300 focus:border-2 focus:border-primary-500 focus:ring-0"
                                                type="password"
                                                placeholder="Password"
                                                required />
                                        </div>
                                        <div className="relative flex h-[40px] items-center">
                                            <i
                                                className="bi bi-lock-fill absolute ml-2 flex text-[24px] text-gray-400"></i>
                                            <input
                                                className="w-full rounded-lg border-2 border-gray-200 bg-white pl-10 outline-none transition-all duration-300 focus:border-2 focus:border-primary-500 focus:ring-0"
                                                type="password"
                                                placeholder="Confirm Password"
                                                required />
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
                                                <a
                                                    className="relative cursor-pointer text-[#3091ff] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1 after:w-full after:origin-center after:scale-x-0 after:rounded-lg after:bg-primary-500 after:transition-transform after:duration-200 after:content-[''] hover:after:scale-x-100"
                                                    href="#">
                                                    Terms of Use
                                                </a>
                                                &
                                                <a
                                                    className="relative cursor-pointer text-[#3091ff] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1 after:w-full after:origin-center after:scale-x-0 after:rounded-lg after:bg-primary-500 after:transition-transform after:duration-200 after:content-[''] hover:after:scale-x-100"
                                                    href="#">
                                                    Privacy Policy
                                                </a>
                                                .
                                            </span>
                                        </label>
                                    </div>
                                </form>
                                <span
                                    className="flex items-center py-2 before:my-auto before:h-px before:w-full before:bg-gray-400 before:content-[''] after:my-auto after:h-px after:w-full after:bg-gray-400 after:content-['']">
                                    <span className="mx-2 text-sm uppercase">Or</span>
                                </span>
                                <div
                                    className="flex flex-col flex-wrap justify-center gap-5 sm:flex-row">
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
            </div>*/}

            {/* <div className="modal-quick modal-container modal-overlay">
                <div className="modal-content modal-center flex w-[900px] min-w-[250px]">
                    <div
                        className="relative m-4 flex w-full flex-col rounded-lg bg-[#f3f3f3] p-5 lg:m-10">
                        <button
                            className="close-modal absolute right-0 top-0 p-2 transition-all duration-300 sm:right-[-10px] sm:top-[-10px] sm:rounded-lg sm:bg-primary-500 sm:text-white sm:hover:bg-primary-400">
                            <i className="bi bi-x-lg pointer-events-none flex"></i>
                        </button>
                        <div className="grid grid-cols-12 gap-5">
                            <div className="col-span-12 max-h-[500px] md:col-span-7">
                                <div
                                    className="swiper swiper-top group relative flex items-center rounded-lg">
                                    <div className="swiper-wrapper z-[5]">
                                        <div className="swiper-slide">
                                            <div className="swiper-zoom-container">
                                                <img src="/img/product/prod-1.jpg" alt="product" />
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="swiper-zoom-container">
                                                <img src="/img/product/prod-2.jpg" alt="product" />
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="swiper-zoom-container">
                                                <img src="/img/product/prod-3.jpg" alt="product" />
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="button-next absolute -right-16 z-20 flex h-10 w-10 select-none items-center justify-center rounded bg-black/30 text-xl text-white shadow transition-all duration-300 group-hover:right-4 hover:bg-primary-500 hover:shadow-md">
                                        &#10095;
                                    </div>
                                    <div
                                        className="button-prev absolute -left-16 z-20 flex h-10 w-10 select-none items-center justify-center rounded bg-black/30 text-xl text-white shadow transition-all duration-300 group-hover:left-4 hover:bg-primary-500 hover:shadow-md">
                                        &#10094;
                                    </div>
                                </div>
                                <div className="swiper swiper-thumbs">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide cursor-pointer rounded-lg">
                                            <img src="/img/product/prod-1.jpg" alt="product" />
                                        </div>
                                        <div className="swiper-slide cursor-pointer rounded-lg">
                                            <img src="/img/product/prod-2.jpg" alt="product" />
                                        </div>
                                        <div className="swiper-slide cursor-pointer rounded-lg">
                                            <img src="/img/product/prod-3.jpg" alt="product" />
                                        </div>
                                    </div>
                                    <div
                                        className="button-next absolute -right-16 z-20 flex h-10 w-10 select-none items-center justify-center rounded bg-black/30 text-xl text-white shadow transition-all duration-300 group-hover:right-4 hover:bg-primary-500 hover:shadow-md">
                                        &#10095;
                                    </div>
                                    <div
                                        className="button-prev absolute -left-16 z-20 flex h-10 w-10 select-none items-center justify-center rounded bg-black/30 text-xl text-white shadow transition-all duration-300 group-hover:left-4 hover:bg-primary-500 hover:shadow-md">
                                        &#10094;
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 md:col-span-5">
                                <div className="my-1">
                                    <a
                                        className="line-clamp-2 break-all text-2xl font-medium transition-all duration-300 hover:text-primary-500"
                                        href="#">
                                        Ryzen 5 3600x
                                    </a>
                                </div>
                                <div className="my-2 flex justify-between">
                                    <div className="my-2" data-rater="5"></div>
                                    <div className="ml-auto">
                                        <span
                                            className="relative z-[4] rounded-md bg-green-300 px-2 py-1 text-xs font-bold uppercase text-white">
                                            instock
                                        </span>
                                    </div>
                                </div>
                                <div className="my-5 flex items-center gap-5">
                                    <div
                                        className="flex rounded-lg bg-white px-3 py-2 text-primary-500">
                                        <span className="text-sm">$</span>
                                        <span className="text-2xl font-semibold leading-7">37.00</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-md font-semibold uppercase text-green-400">
                                            25% Off
                                        </span>
                                        <span
                                            className="prev-price text-sm text-primary-500 line-through">
                                            $50.00
                                        </span>
                                    </div>
                                </div>
                                <div className="my-4">
                                    <p className="line-clamp-5 break-all">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                                        cupiditate repellat magni exercitationem non, quaerat
                                        consequatur. Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Earum cupiditate.
                                    </p>
                                </div>
                                <div className="flex gap-1">
                                    <form action="javascript:void(0)">
                                        <div className="block">
                                            <div className="my-3 flex flex-col gap-1">
                                                <span className="font-bold">Size:</span>
                                                <ul className="flex flex-wrap gap-3">
                                                    <li className="relative">
                                                        <input
                                                            className="peer sr-only"
                                                            type="radio"
                                                            value=""
                                                            name="size"
                                                            id="size-1"
                                                            checked="" />
                                                        <label
                                                            className="flex h-8 w-10 cursor-pointer items-center justify-center rounded-lg border border-gray-300 bg-white peer-checked:border-transparent peer-checked:ring-2 peer-checked:ring-primary-500 hover:bg-gray-50 focus:outline-none"
                                                            for="size-1">
                                                            S
                                                        </label>
                                                    </li>
                                                    <li className="relative">
                                                        <input
                                                            className="peer sr-only"
                                                            type="radio"
                                                            value=""
                                                            name="size"
                                                            id="size-2" />
                                                        <label
                                                            className="flex h-8 w-10 cursor-pointer items-center justify-center rounded-lg border border-gray-300 bg-white peer-checked:border-transparent peer-checked:ring-2 peer-checked:ring-primary-500 hover:bg-gray-50 focus:outline-none"
                                                            for="size-2">
                                                            M
                                                        </label>
                                                    </li>
                                                    <li className="relative">
                                                        <input
                                                            className="peer sr-only"
                                                            type="radio"
                                                            value=""
                                                            name="size"
                                                            id="size-3" />
                                                        <label
                                                            className="flex h-8 w-10 cursor-pointer items-center justify-center rounded-lg border border-gray-300 bg-white peer-checked:border-transparent peer-checked:ring-2 peer-checked:ring-primary-500 hover:bg-gray-50 focus:outline-none"
                                                            for="size-3">
                                                            L
                                                        </label>
                                                    </li>
                                                    <li className="relative">
                                                        <input
                                                            className="peer sr-only"
                                                            type="radio"
                                                            value=""
                                                            name="size"
                                                            id="size-4" />
                                                        <label
                                                            className="flex h-8 w-10 cursor-pointer items-center justify-center rounded-lg border border-gray-300 bg-white peer-checked:border-transparent peer-checked:ring-2 peer-checked:ring-primary-500 hover:bg-gray-50 focus:outline-none"
                                                            for="size-4">
                                                            XL
                                                        </label>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="my-3 flex gap-2">
                                                <div>
                                                    <label className="inline-flex items-center">
                                                        <input
                                                            type="radio"
                                                            className="cursor-pointer border-transparent bg-blue-600 text-blue-600 checked:bg-none checked:ring checked:ring-blue-300 focus:ring focus:ring-blue-300 focus:ring-offset-0"
                                                            name="radio-colors"
                                                            value="0"
                                                            checked />
                                                    </label>
                                                </div>
                                                <div>
                                                    <label className="inline-flex items-center">
                                                        <input
                                                            type="radio"
                                                            className="cursor-pointer border-transparent bg-red-600 text-red-600 checked:bg-none checked:ring checked:ring-red-300 focus:ring focus:ring-red-300 focus:ring-offset-0"
                                                            name="radio-colors"
                                                            value="1" />
                                                    </label>
                                                </div>
                                                <div>
                                                    <label className="inline-flex items-center">
                                                        <input
                                                            type="radio"
                                                            className="cursor-pointer border-transparent bg-yellow-600 text-yellow-600 checked:bg-none checked:ring checked:ring-yellow-300 focus:ring focus:ring-yellow-300 focus:ring-offset-0"
                                                            name="radio-colors"
                                                            value="2" />
                                                    </label>
                                                </div>
                                                <div>
                                                    <label className="inline-flex items-center">
                                                        <input
                                                            type="radio"
                                                            className="cursor-pointer border-transparent bg-black text-black checked:bg-none checked:ring checked:ring-gray-400 focus:ring focus:ring-gray-400 focus:ring-offset-0"
                                                            name="radio-colors"
                                                            value="3" />
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap justify-start gap-5">
                                            <div className="counter inline-flex rounded-lg bg-white">
                                                <input
                                                    className="counter-value input-number w-12 border-none bg-transparent p-1 text-center text-lg text-gray-400 focus:border-none focus:ring-0"
                                                    type="number"
                                                    value="0" />
                                                <div className="flex w-5 flex-col justify-between">
                                                    <button
                                                        className="increment text-primary-500"
                                                        type="button">
                                                        <i
                                                            className="bi bi-caret-up-fill pointer-events-none"></i>
                                                    </button>
                                                    <button
                                                        className="decrement text-primary-500"
                                                        type="button">
                                                        <i
                                                            className="bi bi-caret-down-fill pointer-events-none"></i>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <button
                                                    className="relative flex h-full w-full items-center justify-center gap-2 overflow-hidden rounded-lg bg-primary-500 p-2 transition-all duration-300 after:absolute after:left-2/4 after:top-2/4 after:h-0 after:w-0 after:rounded-lg after:bg-primary-400 after:transition-all after:duration-300 after:content-[''] hover:after:left-0 hover:after:top-0 hover:after:z-[3] hover:after:h-full hover:after:w-full"
                                                    type="submit">
                                                    <i
                                                        className="bi bi-cart-fill relative z-[4] flex text-xl text-white"></i>
                                                    <span
                                                        className="relative z-[4] font-bold uppercase text-white">
                                                        Add to cart
                                                    </span>
                                                </button>
                                                <a
                                                    className="tippy tippy-wishlist wishlist-button flex min-h-[40px] min-w-[40px] cursor-pointer items-center justify-center gap-2 rounded-lg bg-primary-500 p-2 transition-all duration-300 hover:bg-primary-400"
                                                    href="javascript:void(0)">
                                                    <i
                                                        className="bi bi-heart pointer-events-none flex text-white"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="mt-5 border-t border-gray-200 pt-5">
                                    <div>
                                        <b>Categories:</b>
                                        <span>
                                            <a href="#" className="text-zinc-500">Hardware</a>
                                            ,
                                            <a href="#" className="text-zinc-500">Processors</a>
                                        </span>
                                    </div>
                                    <div className="flex gap-2">
                                        <b>Share:</b>
                                        <div className="flex items-center gap-[10px]">
                                            <a href="#">
                                                <i
                                                    className="bi bi-facebook flex text-zinc-500 transition-all duration-300 hover:text-primary-500"></i>
                                            </a>
                                            <a href="#">
                                                <i
                                                    className="bi bi-twitter-x flex text-zinc-500 transition-all duration-300 hover:text-primary-500"></i>
                                            </a>
                                            <a href="#">
                                                <i
                                                    className="bi bi-whatsapp flex text-zinc-500 transition-all duration-300 hover:text-primary-500"></i>
                                            </a>
                                            <a href="#">
                                                <i
                                                    className="bi bi-link-45deg flex text-zinc-500 transition-all duration-300 hover:text-primary-500"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* <div className="modal-shipping modal-container modal-overlay">
                <div className="modal-content modal-center flex w-[900px] min-w-[250px]">
                    <div
                        className="relative m-4 flex w-full flex-col rounded-lg bg-[#f3f3f3] p-5 lg:m-10">
                        <button
                            className="close-modal absolute right-0 top-0 p-2 transition-all duration-300 sm:right-[-10px] sm:top-[-10px] sm:rounded-lg sm:bg-primary-500 sm:text-white sm:hover:bg-primary-400">
                            <i className="bi bi-x-lg pointer-events-none flex"></i>
                        </button>
                        <span className="block text-xl font-bold">Calculate Shipping Cost</span>
                        <form className="mt-5" action="#">
                            <label className="flex w-full flex-col">
                                <span className="text-sm">Postal Code</span>
                                <div className="flex">
                                    <input
                                        className="h-full w-full rounded-l-lg border-2 border-r-0 border-gray-200 bg-white outline-none transition-all duration-300 focus:border-r-0 focus:border-primary-500 focus:ring-0"
                                        type="text"
                                        placeholder="7400" />
                                    <button
                                        className="btn-view-shopping-cart relative flex min-w-max items-center justify-center overflow-hidden rounded-r-lg bg-primary-500 px-3 transition-all duration-300 after:absolute after:left-2/4 after:top-2/4 after:h-0 after:w-0 after:rounded-lg after:bg-primary-400 after:transition-all after:duration-300 after:content-[''] hover:after:left-0 hover:after:top-0 hover:after:z-[3] hover:after:h-full hover:after:w-full"
                                        type="submit">
                                        <span className="relative z-[4] font-bold uppercase text-white">
                                            Calculate
                                        </span>
                                    </button>
                                </div>
                            </label>
                        </form>
                        <div className="mt-5 w-full text-sm">
                            <div className="flex justify-between font-bold">
                                <span>Shipping methods</span>
                                <span>Cost</span>
                            </div>
                            <div className="flex justify-between">
                                <span>At Home</span>
                                <span>$30.00</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Post Office</span>
                                <span>$20.00</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* <!-- --> */}

            <div
                className="scroll-up fixed -bottom-16 right-10 z-50 transition-all duration-300">
                <div
                    className="cursor-pointer rounded-lg bg-black/30 p-3 transition-all duration-300 hover:bg-primary-500">
                    <i
                        className="bi bi-chevron-compact-up pointer-events-none flex text-2xl text-white"></i>
                </div>
            </div>

            <div
                className="loader fixed z-[999] flex h-screen w-screen items-center justify-center bg-white">
                <div className="loader-content flex flex-col items-center gap-2">
                    <span className="text-3xl font-bold text-gray-200">Megabyte</span>
                    <div className="flex h-1 w-40 overflow-hidden bg-gray-200">
                        <div className="h-full w-20 animate-loader bg-primary-400"></div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
