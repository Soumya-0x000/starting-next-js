const ReviewsCount = ({
    params,
}: {
    params: {
        reviewId: string;
        productId: string;
    };
}) => {
    return (
        <div className=" w-screen h-screen bg-slate-900 text-gray-300 flex items-center justify-center">
            Review {params.reviewId} for {params.productId}
        </div>
    );
};

export default ReviewsCount;
