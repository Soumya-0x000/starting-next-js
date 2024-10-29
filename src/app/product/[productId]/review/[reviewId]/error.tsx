'use client';

const ErrorBoundary = ({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) => {
    return (
        <div>
            Error in reviewing ID
            <div>{error.message}</div>
            <button
                className=" bg-slate-600/50 rounded-md px-3 py-2 font-mono"
                onClick={reset}
            >
                Try again
            </button>
        </div>
    );
};

export default ErrorBoundary;
