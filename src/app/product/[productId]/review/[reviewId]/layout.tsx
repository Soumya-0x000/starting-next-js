import { ReactNode } from 'react';

const layout = ({ children }: { children: ReactNode }) => {
    return (
        <div className=' mb-16'>
            {children}
            This is the last nested url, 
        </div>
    );
};

export default layout;
