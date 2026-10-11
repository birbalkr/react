import React from 'react'

function ProductCard({ product }) {
    return (
        <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-lg shadow-black/10 transition duration-300 hover:-translate-y-1 hover:border-slate-700 hover:shadow-xl">
            <div className="relative aspect-[4/3] overflow-hidden bg-slate-800">
                <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                {product.discountPercentage > 0 && (
                    <span className="absolute left-3 top-3 rounded-full bg-emerald-400 px-3 py-1 text-xs font-bold text-emerald-950">
                        {Math.round(product.discountPercentage)}% OFF
                    </span>
                )}
            </div>

            <div className="flex flex-1 flex-col p-5">
                <div className="mb-2 flex items-center justify-between gap-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                        {product.category}
                    </span>
                    <span className="flex items-center gap-1 text-sm text-amber-300" aria-label={`${product.rating} out of 5 stars`}>
                        <span aria-hidden="true">★</span>
                        {product.rating.toFixed(1)}
                    </span>
                </div>

                <h2 className="line-clamp-1 text-lg font-semibold text-white">{product.title}</h2>
                <p className="mt-2 line-clamp-2 flex-1 text-sm leading-6 text-slate-400">
                    {product.description}
                </p>

                <div className="mt-5 flex items-end justify-between gap-4">
                    <div>
                        <p className="text-2xl font-bold text-white">${product.price.toFixed(2)}</p>
                        <p className={`mt-1 text-xs ${product.stock > 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                            {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
                        </p>
                    </div>
                    <button
                        type="button"
                        disabled={product.stock === 0}
                        className="rounded-xl bg-cyan-400 px-4 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-slate-900 disabled:cursor-not-allowed disabled:bg-slate-700 disabled:text-slate-500"
                    >
                        Add to cart
                    </button>
                </div>
            </div>
        </article>
    )
}

export default ProductCard
