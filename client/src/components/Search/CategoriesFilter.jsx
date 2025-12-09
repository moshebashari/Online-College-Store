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
                    type="button">
                    <i
                        className="bi bi-chevron-compact-down flex text-xl transition-all duration-300"></i>
                </button>
            </div>
        </div>)
}
