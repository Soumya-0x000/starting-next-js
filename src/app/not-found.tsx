import React from 'react';

const NotFound = () => {
    return (
        <div className=" h-screen w-screen flex items-center justify-center">
            <div className="text-transparent font-semibold bg-gradient-to-r from-yellow-200 to-green-300 bg-clip-text text-[9rem] animate-pulse  font-mono">
                Page Not Found
            </div>
        </div>
    );
};

export default NotFound;
