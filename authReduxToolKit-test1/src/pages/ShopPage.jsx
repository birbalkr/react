import React from 'react'
import { useProductApi } from '../hooks/ProductHook'
import ProductCard from './ProductCard'
import ProductSkeleton from './ProductSkeleton'

function ShopPage() {
    let { isPending, data, error } = useProductApi()
    if (error) return <h1>Something went wrong</h1>
    return (

        <div className='min-h-screen bg-black p-8'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4'>
                {isPending
                    ? Array.from({ length: 8 }).map((_, index) => (
                        <ProductSkeleton key={index} />
                    ))
                    : data.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
            </div>
        </div>
    )
}

export default ShopPage
