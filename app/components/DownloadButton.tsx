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
        // Create a link to open in new tab for mobile devices
        const printWindow = window.open('', '_blank');
        if (printWindow && contentRef.current) {
            printWindow.document.write(`
                <html>
                    <head>
                        <title>CV - Elnur</title>
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <style>
                            body { padding: 20px; }
                            @media print {
                                body { -webkit-print-color-adjust: exact; }
                            }
                        </style>
                    </head>
                    <body>
                        ${contentRef.current.innerHTML}
                        <script>
                            window.onload = function() { window.print(); window.close(); }
                        </script>
                    </body>
                </html>
            `);
            printWindow.document.close();
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