import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard(props) {
  return (
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
        {/* <!-- start: Only if we have discount --> */}

        {props.product.discount > 0 && <div
          className="absolute left-0 top-0 flex h-[35px] w-[90px] items-center justify-center rounded-br-lg bg-primary-500">
          <span
            className="text-md text-center font-semibold uppercase text-white">
            {props.product.discount}% Off
          </span>
        </div>}
        {/* <!-- end: Only if we have discount --> */}
            <div className="h-[190px] overflow-hidden rounded-lg">
              <a href="#">
                <img
                  className="h-full w-full object-contain"
                  src={props.product.images[0].url}
                  alt="product" />
              </a>
            </div>

          {/* /* <!-- start: instock or not --> */}
        <div className="my-2 flex justify-between">
          <div className="my-2" data-rater="5"></div>
          <div>
            <span
              className={`relative z-[4] rounded-md ${props.product.stock > 0 ? 'bg-green-300' : 'bg-red-300'} px-2 py-1 text-xs font-bold uppercase text-white`}>
              {props.product.stock > 0 ? 'instock' : 'outofstock'}
            </span>
          </div>
        </div>
        {/* <!-- end: instock or not --> */}
        <div className="my-1">
          <Link className="line-clamp-1break-all font-medium" to={`/products/${props.product.id}`}>
            {props.product.name}
          </Link>
        </div>
        <div className="my-1">
          <p className="line-clamp-2 text-sm text-gray-400">
            {props.product.description}
          </p>
        </div>
        {/* <!-- 
                 --- only for variations ----              
              <div className="my-2 flex gap-2">
              <span className="font-bold">Size:</span>
              <ul className="flex gap-3">
                <li>S</li>
                <li>M</li>
                <li>L</li>
                <li>XL</li>
              </ul>
            </div> 
            --- only for variations ----
            <div className="my-2 flex gap-2">
              <div className="block h-3 w-3 rounded-full bg-blue-600"></div>
              <div className="block h-3 w-3 rounded-full bg-red-600"></div>
              <div className="block h-3 w-3 rounded-full bg-yellow-600"></div>
              <div className="block h-3 w-3 rounded-full bg-black"></div>
            </div>
            --> */}
        <div className="my-1">
          {props.product.discount === 0 ? <span className="text-lg font-bold">{props.product.price}&#8362;</span> :
            <div>
              <span className="text-lg font-bold">${props.product.price - ((props.product.discount / 100) * props.product.price)}</span>
              <span className="text-sm text-primary-500 line-through">
                $50.00
              </span>
            </div>}
        </div>
        <div className="mt-auto">
          <a
            className="relative flex w-full items-center justify-center overflow-hidden rounded-lg bg-primary-500 p-2 transition-all duration-300 after:absolute after:left-2/4 after:top-2/4 after:h-0 after:w-0 after:rounded-lg after:bg-primary-400 after:transition-all after:duration-300 after:content-[''] hover:after:left-0 hover:after:top-0 hover:after:z-[3] hover:after:h-full hover:after:w-full"
            href={`product/${props.product.id}`}>
            <span className="relative z-[4] font-bold uppercase text-white">
              View details
            </span>
          </a>
        </div>
      </div>
  )
}
