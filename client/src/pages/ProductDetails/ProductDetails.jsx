import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
// import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import ProductsDetails from '../../components/ProductsDetails/ProductsDetails';
import { fetchProduct } from '../../utils';



export default function ProductDetails() {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadProduct = async () => {
            try {
                const data = await fetchProduct(productId);
                setProduct(data);
            } catch (error) {
                console.error('Error loading product:', error);
            } finally {
                setLoading(false);
            }
        };
        if (productId) {
            loadProduct();
        }
    }, [productId]);

    if (loading) {
        return (
            <React.Fragment>
                <Header />
                <div className="container mx-auto my-5 px-2 sm:px-8">
                    <div className="text-center py-5">Loading product...</div>
                </div>
                <Footer />
            </React.Fragment>
        );
    }

    if (!product) {
        return (
            <React.Fragment>
                <Header />
                <div className="container mx-auto my-5 px-2 sm:px-8">
                    <div className="text-center py-5">Product not found</div>
                </div>
                <Footer />
            </React.Fragment>
        );
    }

    return (
        <>
            < Header />
            {/* < BreadCrumbs first={'Home'} second={'Product details'} /> */}
            < ProductsDetails product={product}/>
            < Footer />
        </>
    )
}
