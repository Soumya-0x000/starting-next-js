import { Metadata } from "next";

export const metaData = (): Metadata => {
    return {
        title: { absolute: 'Blog' },
        description: 'Learning NextJS',
        applicationName: 'Next App',
        authors: {
            url: 'https://portfolio-five-mu-72.vercel.app',
            name: 'Soumya Sankar Das',
        },
        themeColor: 'Dark',
        creator: 'Me(Soumya)',
        publisher: 'Vercel',
    }
}

const Blog = () => {
    return <div>Welcome to my blog page</div>;
};

export default Blog;
