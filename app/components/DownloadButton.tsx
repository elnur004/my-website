'use client'

import { useReactToPrint } from 'react-to-print';
import { RefObject } from 'react';

interface DownloadButtonProps {
    contentRef: RefObject<HTMLDivElement | null>;
}

const DownloadButton = ({ contentRef }: DownloadButtonProps) => {
    const handlePrint = useReactToPrint({
        documentTitle: 'CV - Elnur',
        contentRef: contentRef,
        onAfterPrint: () => console.log('Printed successfully'),
    });

    return (
        <button
            onClick={() => handlePrint()}
            className="fixed sm:top-4  bottom-4 right-4 sm:bottom-auto 
                     bg-blue-600 hover:bg-blue-700 text-white font-semibold 
                     py-2 px-4 rounded shadow transition-colors
                     sm:py-2 sm:px-4 text-sm sm:text-base
                     w-[calc(100%-2rem)] sm:w-auto sm:mx-0 z-10"
        >
            Download CV
        </button>
    );
};

export default DownloadButton; 