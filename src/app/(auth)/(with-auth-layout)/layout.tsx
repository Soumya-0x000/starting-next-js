'use client';

import { ReactNode } from 'react';

const layout = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            auth layout
            {children}
            inside auth folder
        </div>
    );
};

export default layout;
