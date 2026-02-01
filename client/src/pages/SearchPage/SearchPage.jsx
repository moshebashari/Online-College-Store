import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import ShopGrid from '../../components/ShopGrid/ShopGrid'
import Footer from '../../components/Footer/Footer'
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import { useLocation } from 'react-router-dom';

export default function SearchPage() {

    const location = useLocation();
    const {products, searchValue} = location.state || {}

    return (
        <>
            <Header />
            <BreadCrumbs first={'Home'} second={'Shop'} />
            <ShopGrid products={products} searchValue={searchValue}/> 
            <Footer />
        </>
    )
}
