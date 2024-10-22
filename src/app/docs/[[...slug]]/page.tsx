'use client';

const Docs = ({ params }: { params: { slug: string[] } }) => {
    console.log(params);

    if (params.slug?.length === 0) {
        return <div>Docs home page</div>;
    }

    if (params.slug?.length > 0) {
        return (
            <div>
                Docs home page{' '}
                {params.slug?.map((segment, indx) => (
                    <span key={indx}>{`${segment} `}</span>
                ))}
            </div>
        );
    }
};

export default Docs;
