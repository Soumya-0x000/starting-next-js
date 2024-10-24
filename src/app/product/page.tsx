'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const Product = () => {
    const pathName = usePathname();
    const navButtons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <div>
            <h1>Product</h1>
            <p>This is product page</p>
            <div className=" w-full flex items-center justify-center">
                <nav className="grid grid-cols-4 gap-4">
                    {navButtons.map((pId, indx) => (
                        <Link
                            key={pId + indx}
                            className="text-sm bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 ring-1 ring-slate-800 transition-all px-2 py-1 hover:scale-110 active:scale-105 rounded-md text-center sm:text-left font-[family-name:var(--font-geist-mono)]"
                            href={`${pathName}/${pId}`}
                        >
                            Product_{pId}
                        </Link>
                    ))}
                </nav>
            </div>
        </div>
    );
};

export default Product;
