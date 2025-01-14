'use client'

import { useReactToPrint } from 'react-to-print';
import { RefObject, useEffect, useState } from 'react';

interface DownloadButtonProps {
    contentRef: RefObject<HTMLDivElement | null>;
}

const DownloadButton = ({ contentRef }: DownloadButtonProps) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
    }, []);

    const handlePrint = useReactToPrint({
        documentTitle: 'CV - Elnur',
        contentRef: contentRef,
        onAfterPrint: () => console.log('Printed successfully'),
    });

    const handleMobileDownload = () => {
        if (contentRef.current) {
            const content = contentRef.current.innerHTML;
            const blob = new Blob([`
                <html>
                    <head>
                        <title>CV - Elnur</title>
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <style>
                            body { 
                                padding: 20px;
                                font-family: Arial, sans-serif;
                            }
                            @media print {
                                body { 
                                    -webkit-print-color-adjust: exact;
                                    print-color-adjust: exact;
                                }
                            }
                        </style>
                    </head>
                    <body>${content}</body>
                </html>
            `], { type: 'text/html' });

            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'CV-Elnur.html';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
        }
    };

    return (
        <button
            onClick={isMobile ? handleMobileDownload : () => handlePrint()}
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