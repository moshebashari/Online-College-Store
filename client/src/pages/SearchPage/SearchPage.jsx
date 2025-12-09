import React from 'react'
import Header from '../../components/Header/Header'
import Search from '../../components/Search/Search'
import Footer from '../../components/Footer/Footer'
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';

export default function SearchPage() {
    return (
        <>
            <Header />
            <BreadCrumbs first={'Home'} second={'Shop'} />
            <Search /> 
            <Footer />
        </>
    )
}
