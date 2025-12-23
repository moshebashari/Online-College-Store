import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import BannerTop from '../../components/BannerTop/BannerTop'
import InfoWrapper from '../../components/InfoWrapper/InfoWrapper'
import BannerMiddle from '../../components/BannerMiddle/BannerMiddle'
import Product1Wrapper from '../../components/ProductWrapper/ProductWrapper'
import OffersWrapper from '../../components/OffersWrapper/OffersWrapper'
import CategoriesWrapper from '../../components/CategoriesWrapper/CategoriesWrapper'
import BrandsWrapper from '../../components/BrandsWrapper/BrandsWrapper'

export default function Home() {
  return (
    <>
        <Header />
        <BannerTop />
        <InfoWrapper />
        <OffersWrapper />
        <BannerMiddle />
        <Product1Wrapper />
        <CategoriesWrapper />
        <BrandsWrapper />
        <Footer />
    </>
  )
}
