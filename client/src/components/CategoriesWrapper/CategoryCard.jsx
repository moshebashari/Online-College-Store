import React from 'react'
import {Link} from 'react-router-dom'

export default function CategoryCard(props) {
    return (
        <div className="col-span-3 flex border" key={props.id}> 
            <Link
                className="flex w-full justify-center bg-white p-5 transition-all duration-300 hover:relative hover:z-[2] hover:shadow-xl"
                to="/">
                <div>
                    <i
                        className="bi bi-gpu-card mb-2 flex justify-center text-[40px] text-primary-500"></i>
                    <span className="text-gray-40">{props.name}</span>
                </div>
            </Link>
        </div>
    )
}
