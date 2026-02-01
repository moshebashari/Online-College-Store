import React from 'react'

export default function CategoryBox(props) {
    return (
        <label
            className="flex cursor-pointer select-none items-center gap-2 p-1 transition-all duration-300 hover:text-primary-500"
            key={props.category.id}>
            <input
                className="h-4 w-4 rounded border text-primary-500 focus:border-transparent focus:ring focus:ring-primary-400 focus:ring-offset-0"
                type="checkbox" data-category-id={props.category.id} />
            <span>{props.category.name}</span>
        </label>
    )
}
