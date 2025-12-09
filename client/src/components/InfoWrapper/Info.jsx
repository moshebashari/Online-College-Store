import React from 'react'

export default function Info(props) {
  return (
     <div className="col-span-12 flex sm:col-span-6 lg:col-span-3">
        <div
          className="flex w-full items-center gap-4 rounded-lg bg-white p-5 transition-all duration-300 hover:shadow-lg xs:pl-[20%] sm:pl-5">
          <div className="rounded-full border-2">
            <i className="bi bi-truck flex p-3 text-[40px] text-primary-500"></i>
          </div>
          <div>
            <h6 className="font-bold capitalize">{props.title}</h6>
            <p className="break-all text-sm text-gray-400">{props.body}</p>
          </div>
        </div>
      </div>
  )
}
