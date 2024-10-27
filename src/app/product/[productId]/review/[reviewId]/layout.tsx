'use client';

import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="mb-16">
            {children}
            <p>This is the last nested URL.</p>
        </div>
    );
};

export default Layout;
