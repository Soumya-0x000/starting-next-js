'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type props = {
    params: {
        productId: string;
    };
}

const navButtons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const ProductCard = ({ params }: props) => {
    const pathName = usePathname();

    return (
        <div>
            <h1>Product {params.productId}</h1>
            <div className=" w-full flex items-center justify-center">
                <nav className="flex justify-center flex-wrap max-w-[25rem] gap-4">
                    {navButtons.map((name, indx) => (
                        <Link
                            key={name + indx}
                            className="text-sm bg-gradient-to-r from-slate-700 to-slate-900 hover:from-slate-700 hover:to-slate-700 transition-all px-2 py-1 hover:scale-110 rounded-md text-center sm:text-left ring-1 ring-slate-700 font-[family-name:var(--font-geist-mono)]"
                            href={`${name}`}
                        >
                            Product[{name}]
                        </Link>
                    ))}
                </nav>
            </div>
        </div>
    );
};

export default ProductCard;
