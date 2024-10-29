// 'use client';

import { Metadata } from 'next';
import { props } from './type';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
    title: { absolute: 'Reviews' },
    description: 'Learning NextJS',
    applicationName: 'Next App',
    authors: {
        url: 'https://portfolio-five-mu-72.vercel.app',
        name: 'Soumya Sankar Das',
    },
    creator: 'Me(Soumya)',
    publisher: 'Vercel',
};

function getRandomInt(count: number): number {
    return Math.floor(Math.random() * count);
}

const ReviewsCount = ({ params }: props) => {
    const randomNumber = getRandomInt(3);

    if (randomNumber === 1) {
        throw new Error('Something went wrong');
    }

    if (parseInt(params.reviewId) > 1000) notFound()

    return (
        <div className="py-10 pl-14 bg-slate-900 text-gray-300 flex items-center justify-center">
            Review {params.reviewId} for {params.productId}
        </div>
    );
};

export default ReviewsCount;
