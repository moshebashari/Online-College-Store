import React from 'react'

export default function brandCard(props) {
    return (
        <div className="swiper-slide">
            <img
                className="object-contain grayscale filter transition-all duration-300 hover:filter-none"
                src={`img/brands/${props.brand}-logo.png`}
                alt="logo" />
        </div>
    )
}
