'use client';

import Link from 'next/link';
import { ReactNode } from 'react';

export interface Params {
    productId: string;
}

const Layout = ({
    children,
    params,
}: {
    children: ReactNode;
    params: Params; // Correctly define params with productId
}) => {
    return (
        <div>
            {children}
            <p>Product layout</p>
            <Link
                href={`/product/${params.productId}/review`} // Now params.productId is valid
                className="bg-slate-800 rounded-md px-3 py-2 active:scale-90 transition-all"
            >
                Review
            </Link>
        </div>
    );
};

export default Layout;
