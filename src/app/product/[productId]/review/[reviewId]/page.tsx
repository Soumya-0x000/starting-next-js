import { Metadata } from 'next';
import { props } from './type';

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

const ReviewsCount = ({ params }: props) => {
    return (
        <div className=" py-10 pl-14 bg-slate-900 text-gray-300 flex items-center justify-center">
            Review {params.reviewId} for {params.productId}
        </div>
    );
};

export default ReviewsCount;
