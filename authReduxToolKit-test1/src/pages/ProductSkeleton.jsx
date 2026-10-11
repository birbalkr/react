import React from 'react'

function ProductSkeleton() {
    return (
        <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
            <div className="aspect-[4/3] animate-pulse bg-slate-800" />
            <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center justify-between">
                    <div className="h-3 w-20 animate-pulse rounded bg-slate-800" />
                    <div className="h-3 w-10 animate-pulse rounded bg-slate-800" />
                </div>
                <div className="mt-4 h-5 w-3/4 animate-pulse rounded bg-slate-800" />
                <div className="mt-3 space-y-2">
                    <div className="h-3 w-full animate-pulse rounded bg-slate-800" />
                    <div className="h-3 w-5/6 animate-pulse rounded bg-slate-800" />
                </div>
                <div className="mt-auto flex items-end justify-between gap-4 pt-6">
                    <div>
                        <div className="h-7 w-20 animate-pulse rounded bg-slate-800" />
                        <div className="mt-2 h-3 w-16 animate-pulse rounded bg-slate-800" />
                    </div>
                    <div className="h-10 w-24 animate-pulse rounded-xl bg-slate-800" />
                </div>
            </div>
        </div>
    )
}

export default ProductSkeleton
