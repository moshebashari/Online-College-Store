import React, { useEffect, useState } from 'react'
import CategoryBox from './CategoryBox'
import { fetchCategories } from '../../utils';

export default function CategoriesFilter() {
    const [cate, setCate] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const categories = await fetchCategories();
            setCate(categories);
        }

        fetchData();

    }, [])


    const seeMore = (e) => {
        const father = e.currentTarget.closest(".see-more");
        const see_more_container = father.querySelector(".see-more-container");
        const see_more_content = father.querySelector(".see-more-content");
        const icon_rotate = father.querySelector("i");

        see_more_container.classList.toggle("gradient-bottom");
        icon_rotate.classList.toggle("rotate-180");

        see_more_container.style.transition = "max-height 1s ease";
        see_more_container.style.maxHeight = see_more_content.offsetHeight + "px";

        let duration = see_more_container.style.transitionDuration;

        if (duration.includes("ms")) {
            duration = parseInt(duration);
        } else if (duration.includes("s")) {
            duration = 1000 * parseFloat(duration);
        }

        if (icon_rotate.classList.contains("rotate-180")) {
            setTimeout(
                () => (see_more_container.style.maxHeight = "max-content"),
                duration
            );
        } else {
            setTimeout(() => (see_more_container.style.maxHeight = ""), 10);
        }
    };

    return (
        <div className="mb-5 border-t-2 pt-5">
            <div className="see-more relative pb-5">
                <div
                    className="see-more-container gradient-bottom max-h-[220px] overflow-hidden">
                    <div className="see-more-content">
                        <span className="mb-2 flex font-semibold">Categories</span>
                        {/* <!-- start category --> */}
                        {cate.map(category => <CategoryBox category={category} />)}
                        {/* <!-- end category --> */}

                    </div>
                </div>
                <button
                    className="btn-see-more absolute bottom-0 z-10 flex w-full justify-center hover:text-primary-500"
                    type="button" onClick={seeMore}>
                    <i
                        className="bi bi-chevron-compact-down flex text-xl transition-all duration-300"></i>
                </button>
            </div>
        </div>)
}
