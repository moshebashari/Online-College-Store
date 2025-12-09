import React from 'react'

export default function breadCrumbs(props) {
  return (
    <div className="breadcrumb-section container mx-auto my-5 px-2 sm:px-8">
    <nav
      className="container mx-auto my-10 flex items-center gap-2 px-4 sm:px-8 xl:px-4">
      <ul className="flex flex-wrap items-center gap-1">
        <li className="transition-all duration-300 hover:text-primary-500">
          <a href="index.html">{props.first}</a>
        </li>
        <li>
          <i className="bi bi-caret-right-fill flex text-primary-500"></i>
        </li>
        <li
          className="pointer-events-none text-slate-500 transition-all duration-300">
          <a href="contact-us.html">{props.second}</a>
        </li>
      </ul>
    </nav>
  </div>
  )
}
