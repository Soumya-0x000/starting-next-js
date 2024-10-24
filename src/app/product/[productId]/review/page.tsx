import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: { absolute: 'Reviews' },
    description: 'Learning NextJS',
    applicationName: 'Next App',
    authors: {
        url: 'https://portfolio-five-mu-72.vercel.app',
        name: 'Soumya Sankar Das',
    },
    themeColor: 'Dark',
    creator: 'Me(Soumya)',
    publisher: 'Vercel',
};

const Review = ({ params }: { params: { productId: string } }) => {
    const navButtons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <div>
            <h1>Reviews for Product {params.productId}</h1>
            <div className=" w-full flex items-center justify-center">
                <nav className="flex justify-center flex-wrap max-w-[25rem] gap-4">
                    {navButtons.map((name, indx) => (
                        <Link
                            key={name + indx}
                            className="text-sm bg-gradient-to-r from-slate-700 to-slate-900 hover:from-slate-700 hover:to-slate-700 transition-all px-2 py-1 hover:scale-110 rounded-md text-center sm:text-left ring-1 ring-slate-700 font-[family-name:var(--font-geist-mono)]"
                            href={`/product/${params.productId}/review/${name}`} // Constructing the correct path
                        >
                            Review {name}
                        </Link>
                    ))}
                </nav>
            </div>
        </div>
    );
};

export default Review;
